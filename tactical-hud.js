/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 1: PORTFOLIO TACTICAL HUD CONTROLLER
 * Renderização dinâmica de proximidade dos 8 Planos, Custódia e Travas
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTacticalHUD();
});

function initTacticalHUD() {
  const plans = window.PLANOS_TACTICAL_DATA || [];
  const portfolio = window.PORTFOLIO_STATE || {};

  renderHeroPatrimony(portfolio);
  renderThermometer(plans);
  renderPlansGrid(plans, 'all');
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

function renderThermometer(plans) {
  const container = document.getElementById('thermometerList');
  if (!container) return;

  // Ordenar planos por maior proximidade (score decrescente)
  const sorted = [...plans].sort((a, b) => b.proximidade_score - a.proximidade_score);

  container.innerHTML = sorted.map((plan, idx) => `
    <div class="thermo-card">
      <div class="thermo-header">
        <span class="thermo-rank">#${idx + 1} PROXIMIDADE</span>
        <span class="thermo-score-pill">${plan.proximidade_score}% SCORE</span>
      </div>
      <div class="thermo-name">${plan.icone} ${plan.nome}</div>
      <div class="thermo-dist">${plan.distancia_display}</div>
      <div class="thermo-bar-track">
        <div class="thermo-bar-fill" style="width: ${plan.proximidade_score}%;"></div>
      </div>
    </div>
  `).join('');
}

function renderPlansGrid(plans, filter) {
  const container = document.getElementById('plansGrid');
  if (!container) return;

  const filtered = filter === 'all' ? plans : plans.filter(p => p.categoria === filter);

  container.innerHTML = filtered.map(plan => {
    const isLow = plan.categoria === 'baixo_risco';
    const badgeClass = isLow ? 'badge-low' : 'badge-mid';
    const badgeText = isLow ? '🛡️ BAIXO RISCO' : '⚡ MÉDIO RISCO';

    return `
      <div class="plan-card" style="border-top: 3px solid ${plan.cor};">
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
}

function initFilterButtons(plans) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderPlansGrid(plans, filter);
    });
  });
}
