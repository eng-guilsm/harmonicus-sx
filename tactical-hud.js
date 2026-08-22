/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 1: PORTFOLIO TACTICAL HUD CONTROLLER (v3.6)
 * Renderização dinâmica de proximidade dos 8 Planos com Controle de Histórico,
 * Custódia ao Vivo, Descrições Executivas e Travas de Ruptura
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTacticalHUD();
});

let currentThermoTimeframe = '24h';
let activePlanFilter = 'all';

function initTacticalHUD() {
  const plans = window.PLANOS_TACTICAL_DATA || [];
  const portfolio = window.PORTFOLIO_STATE || {};

  renderHeroPatrimony(portfolio);
  initThermoTimeframeControls(plans);
  renderThermometer(plans, currentThermoTimeframe);
  renderPlansGrid(plans, activePlanFilter);
  initFilterButtons(plans);
}

function renderHeroPatrimony(p) {
  if (!p) return;

  const elPatrimonio = document.getElementById('patrimonioTotal');
  const elCaixa = document.getElementById('caixaLivre');
  const elBtc = document.getElementById('tickBTC');
  const elPaxg = document.getElementById('tickPAXG');
  const elUsdt = document.getElementById('tickUSDT');
  const elVix = document.getElementById('tickVIX');
  const elGatekeeperBadge = document.getElementById('gatekeeperBadge');
  const elGatekeeperDetail = document.getElementById('gatekeeperDetail');

  const fmt = (v) => v ? v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--';

  if (elPatrimonio) elPatrimonio.textContent = fmt(p.total_brl || 1709.72);
  if (elCaixa) elCaixa.textContent = fmt(p.caixa_brl || 1150.00);

  const c = p.cotacoes_ao_vivo || {};
  if (elBtc && c.BTCBRL) elBtc.textContent = `R$ ${Math.round(c.BTCBRL).toLocaleString('pt-BR')}`;
  if (elPaxg && c.PAXGBRL) elPaxg.textContent = `R$ ${Math.round(c.PAXGBRL).toLocaleString('pt-BR')}`;
  if (elUsdt && c.USDTBRL) elUsdt.textContent = `R$ ${c.USDTBRL.toFixed(3)}`;
  if (elVix && c.VIX) elVix.textContent = `${c.VIX.toFixed(2)} pts`;

  const s = p.harmonicus_sensores || {};
  if (elGatekeeperBadge && elGatekeeperDetail) {
    if (s.pc1 > 0.70) {
      elGatekeeperBadge.textContent = '🚨 PÂNICO SISTÊMICO';
      elGatekeeperBadge.style.color = '#EF4444';
      elGatekeeperBadge.style.borderColor = '#EF4444';
      elGatekeeperDetail.innerHTML = 'Travas ativas: <b>Altcoins Bloqueadas</b> | Foco em Ouro PAXG e Dólar.';
    } else {
      const lote = s.fator_lote === 1.0 ? '100% (Integral)' : '50% (Defensivo)';
      elGatekeeperBadge.textContent = '🟢 VIGILÂNCIA ATIVA';
      elGatekeeperDetail.innerHTML = `Fator de Lote: <b>${lote}</b> | Sem tempestades espectrais`;
    }
  }
}

// ------------------------------------------------------------------------------
// CONTROLE DE HISTÓRICO DO TERMÔMETRO (1h, 5h, 24h, 7d, 1m, tudo)
// ------------------------------------------------------------------------------
function initThermoTimeframeControls(plans) {
  const tfBtns = document.querySelectorAll('.thermo-tf-btn');
  tfBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tfBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentThermoTimeframe = btn.getAttribute('data-tf') || '24h';
      renderThermometer(plans, currentThermoTimeframe);
    });
  });
}

function renderThermometer(plans, timeframe) {
  const container = document.getElementById('thermometerList');
  if (!container || !plans || plans.length === 0) return;

  // Extrair score correspondente ao timeframe
  const plansWithScore = plans.map(p => {
    let score = p.proximidade_score;
    if (p.historico_scores && p.historico_scores[timeframe] !== undefined) {
      score = p.historico_scores[timeframe];
    }
    const score24h = (p.historico_scores && p.historico_scores['24h']) || p.proximidade_score;
    const delta = score - score24h;
    return {
      ...p,
      display_score: score,
      delta: delta
    };
  });

  // Ordenar por score decrescente
  plansWithScore.sort((a, b) => b.display_score - a.display_score);

  container.innerHTML = plansWithScore.map((plan, idx) => {
    let deltaHtml = '';
    if (timeframe !== '24h' && plan.delta !== 0) {
      const isPos = plan.delta > 0;
      deltaHtml = `<span class="thermo-delta-badge ${isPos ? 'pos' : 'neg'}">${isPos ? '▲ +' : '▼ '}${plan.delta}%</span>`;
    }

    return `
      <div class="thermo-card" data-plan-id="${plan.id}" title="Clique para focar no ${plan.nome}">
        <div class="thermo-header">
          <span class="thermo-rank">#${idx + 1} PROXIMIDADE</span>
          ${deltaHtml}
          <span class="thermo-score-pill">${plan.display_score}% SCORE</span>
        </div>
        <div class="thermo-name">${plan.icone} ${plan.nome}</div>
        <div class="thermo-dist">${plan.distancia_display}</div>
        <div class="thermo-bar-track">
          <div class="thermo-bar-fill" style="width: ${plan.display_score}%; background: ${plan.cor};"></div>
        </div>
      </div>
    `;
  }).join('');

  // Ao clicar em qualquer termômetro, rolar suavemente e expandir o card do plano correspondente
  container.querySelectorAll('.thermo-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-plan-id');
      const targetCard = document.getElementById(`planCard_${pId}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.6)';
        const details = targetCard.querySelector('.plan-exec-details');
        const btn = targetCard.querySelector('.plan-exec-toggle-btn');
        if (details && !details.classList.contains('active')) {
          details.classList.add('active');
          if (btn) btn.textContent = '▲ RECOLHER DETALHES';
        }
        setTimeout(() => {
          targetCard.style.boxShadow = '';
        }, 2000);
      }
    });
  });
}

// ------------------------------------------------------------------------------
// GRID DOS 8 PLANOS COM DETALHES EXECUTIVOS EXPANSÍVEIS
// ------------------------------------------------------------------------------
function renderPlansGrid(plans, filter) {
  const container = document.getElementById('plansGrid');
  if (!container) return;

  const filtered = filter === 'all' ? plans : plans.filter(p => p.categoria === filter);

  container.innerHTML = filtered.map(plan => {
    const isLow = plan.categoria === 'baixo_risco';
    const badgeClass = isLow ? 'badge-low' : 'badge-mid';
    const badgeText = isLow ? '🛡️ BAIXO RISCO' : '⚡ MÉDIO RISCO';

    const execDesc = plan.descricao_executiva || 'Estratégia quantitativa calibrada para geração de alfa em regimes específicos de mercado.';
    const condAtiv = plan.condicoes_ativacao || `• Gatilho: ${plan.alvo_str}<br>• Métrica base: ${plan.gatilho_desc}`;
    const limTrav = plan.limitacoes_trava || `• ${plan.trava_ruptura}<br>• Cooldown mandatório de ${plan.cooldown_horas} horas.`;

    return `
      <div class="plan-card" id="planCard_${plan.id}" style="border-top: 3px solid ${plan.cor};">
        <div>
          <div class="plan-card-header">
            <div class="plan-title-block">
              <span class="plan-badge ${badgeClass}">${badgeText}</span>
              <h4 class="plan-name">${plan.icone} ${plan.nome}</h4>
              <span class="plan-par-tag">PAR: ${plan.par}</span>
            </div>
          </div>

          <div class="plan-metrics-box">
            <div class="pm-row">
              <span class="pm-label">Lote por Operação:</span>
              <span class="pm-val highlight">R$ ${plan.lote_brl.toFixed(2)}</span>
            </div>
            <div class="pm-row">
              <span class="pm-label">Lucro Mínimo:</span>
              <span class="pm-val">+${plan.lucro_min_pct.toFixed(2)}%</span>
            </div>
            <div class="pm-row">
              <span class="pm-label">Valor Atual:</span>
              <span class="pm-val">${plan.valor_atual_str}</span>
            </div>
            <div class="pm-row">
              <span class="pm-label">Gatilho de Entrada:</span>
              <span class="pm-val">${plan.alvo_str}</span>
            </div>
          </div>

          <div class="plan-rules-box">
            <div class="pr-item"><b>Trava de Ruptura:</b> ${plan.trava_ruptura}</div>
            <div class="pr-item"><b>Cooldown:</b> ${plan.cooldown_horas} horas</div>
          </div>

          <!-- BOTÃO EXPANDIR DETALHES EXECUTIVOS -->
          <button class="plan-exec-toggle-btn" data-target="details_${plan.id}">
            ▼ DETALHES EXECUTIVOS & TRAVAS
          </button>

          <div class="plan-exec-details" id="details_${plan.id}">
            <div class="pes-block">
              <span class="pes-title">📋 DESCRIÇÃO EXECUTIVA</span>
              <div class="pes-desc">${execDesc}</div>
            </div>
            <div class="pes-block">
              <span class="pes-title">🎯 CONDIÇÕES DE ATIVAÇÃO</span>
              <div class="pes-desc">${condAtiv}</div>
            </div>
            <div class="pes-block">
              <span class="pes-title">🛡️ LIMITAÇÕES & TRAVAS DE SEGURANÇA</span>
              <div class="pes-desc">${limTrav}</div>
            </div>
          </div>
        </div>

        <div class="plan-gauge-section">
          <div class="pg-header">
            <span>PROXIMIDADE:</span>
            <span class="pg-dist">${plan.distancia_display}</span>
          </div>
          <div class="pg-bar-track">
            <div class="pg-bar-fill" style="width: ${plan.proximidade_score}%; background: ${plan.cor};"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event Listeners nos botões de toggle
  container.querySelectorAll('.plan-exec-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const detailsEl = document.getElementById(targetId);
      if (detailsEl) {
        const isCurrentlyActive = detailsEl.classList.contains('active');
        if (isCurrentlyActive) {
          detailsEl.classList.remove('active');
          btn.textContent = '▼ DETALHES EXECUTIVOS & TRAVAS';
        } else {
          detailsEl.classList.add('active');
          btn.textContent = '▲ RECOLHER DETALHES';
        }
      }
    });
  });
}

function initFilterButtons(plans) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePlanFilter = btn.getAttribute('data-filter');
      renderPlansGrid(plans, activePlanFilter);
    });
  });
}
