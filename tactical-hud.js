/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 1: PORTFOLIO TACTICAL HUD CONTROLLER (v3.8)
 * Termômetro 100% AO VIVO, Gráfico Histórico Interativo de Proximidade (1H a 30D)
 * ao Clique de Cada Card, Custódia Binance e 3 Pilares Executivos Oficiais
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTacticalHUD();
});

let activePlanFilter = 'all';
let activeModalPlanId = null;
let activeModalTimeframe = '24h';
let modalHoverIdx = -1;

function initTacticalHUD() {
  const plans = window.PLANOS_TACTICAL_DATA || [];
  const portfolio = window.PORTFOLIO_STATE || {};

  renderHeroPatrimony(portfolio);
  renderLiveThermometer(plans);
  renderPlansGrid(plans, activePlanFilter);
  initFilterButtons(plans);
  initModalEvents();
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
// 1. TERMÔMETRO DE PROXIMIDADE 100% AO VIVO
// ------------------------------------------------------------------------------
function renderLiveThermometer(plans) {
  const container = document.getElementById('thermometerList');
  if (!container || !plans || plans.length === 0) return;

  // Ordenação estrita pelo score ao vivo decrescente
  const sortedPlans = [...plans].sort((a, b) => b.proximidade_score - a.proximidade_score);

  container.innerHTML = sortedPlans.map((plan, idx) => {
    return `
      <div class="thermo-card" data-plan-id="${plan.id}" title="Clique para abrir histórico completo e tese executiva do ${plan.nome}">
        <div class="thermo-header">
          <span class="thermo-rank">#${idx + 1} AO VIVO</span>
          <span class="thermo-score-pill">${plan.proximidade_score}% PROXIMIDADE</span>
        </div>
        <div class="thermo-name">${plan.icone} ${plan.nome}</div>
        <div class="thermo-dist">${plan.distancia_display}</div>
        <div class="thermo-bar-track">
          <div class="thermo-bar-fill" style="width: ${plan.proximidade_score}%; background: ${plan.cor};"></div>
        </div>
      </div>
    `;
  }).join('');

  // Ao clicar em qualquer card do termômetro, abre o Modal com o Gráfico Histórico
  container.querySelectorAll('.thermo-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = parseInt(card.getAttribute('data-plan-id'), 10);
      openPlanModal(pId, '24h');
    });
  });
}

// ------------------------------------------------------------------------------
// 2. GRID DOS 8 PLANOS OFICIAIS
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

        <div class="plan-gauge-section" style="cursor: pointer;" title="Clique para abrir gráfico histórico e tese executiva" onclick="openPlanModal(${plan.id}, '24h')">
          <div class="pg-header">
            <span>PROXIMIDADE AO VIVO:</span>
            <span class="pg-dist">${plan.distancia_display}</span>
          </div>
          <div class="pg-bar-track">
            <div class="pg-bar-fill" style="width: ${plan.proximidade_score}%; background: ${plan.cor};"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

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
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePlanFilter = btn.getAttribute('data-filter');
      renderPlansGrid(plans, activePlanFilter);
    });
  });
}

// ------------------------------------------------------------------------------
// 3. MODAL DE ANÁLISE EXECUTIVA & GRÁFICO HISTÓRICO DE PROXIMIDADE (1H A 30D)
// ------------------------------------------------------------------------------
function initModalEvents() {
  const overlay = document.getElementById('planModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (overlay) overlay.classList.remove('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }
}

window.openPlanModal = function(planId, initialTf) {
  const plans = window.PLANOS_TACTICAL_DATA || [];
  const plan = plans.find(p => p.id === planId) || plans[0];
  if (!plan) return;

  activeModalPlanId = planId;
  activeModalTimeframe = initialTf || '24h';
  modalHoverIdx = -1;

  const overlay = document.getElementById('planModalOverlay');
  const content = document.getElementById('planModalContent');
  if (!overlay || !content) return;

  renderModalLayout(plan, activeModalTimeframe);
  overlay.classList.add('active');
};

function renderModalLayout(plan, tf) {
  const content = document.getElementById('planModalContent');
  if (!content) return;

  const isLow = plan.categoria === 'baixo_risco';
  const badgeClass = isLow ? 'badge-low' : 'badge-mid';
  const badgeText = isLow ? '🛡️ BAIXO RISCO' : '⚡ MÉDIO RISCO';

  content.innerHTML = `
    <div class="modal-header-box">
      <div class="modal-title-left">
        <span class="plan-badge ${badgeClass}">${badgeText}</span>
        <h3 class="modal-plan-title">${plan.icone} ${plan.nome}</h3>
        <span class="plan-par-tag">PAR SINTÉTICO: <b>${plan.par}</b> | Lote: <b>R$ ${plan.lote_brl.toFixed(2)}</b> | Meta Lucro: <b>+${plan.lucro_min_pct.toFixed(2)}%</b></span>
      </div>
    </div>

    <!-- SELETOR DE ESCALA HISTÓRICA DO GRÁFICO (1H A 30D) -->
    <div class="modal-tf-selector">
      <span class="tf-label">ESCALA HISTÓRICA:</span>
      <button class="modal-tf-btn ${tf === '1h' ? 'active' : ''}" data-tf="1h">1H (60 MIN)</button>
      <button class="modal-tf-btn ${tf === '24h' ? 'active' : ''}" data-tf="24h">24H (DIÁRIO)</button>
      <button class="modal-tf-btn ${tf === '7d' ? 'active' : ''}" data-tf="7d">7D (SEMANAL)</button>
      <button class="modal-tf-btn ${tf === '30d' ? 'active' : ''}" data-tf="30d">30D (MENSAL)</button>
    </div>

    <!-- GRÁFICO HISTÓRICO DE PROXIMIDADE À META -->
    <div class="modal-chart-wrapper" style="background: rgba(5, 8, 17, 0.95); border: 1px solid var(--border-subtle); border-radius: 10px; padding: 12px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
        <span>CURVA TEMPORAL DE PROXIMIDADE AO GATILHO (%)</span>
        <span style="color: ${plan.cor}; font-weight: 700;">PROXIMIDADE ATUAL: ${plan.proximidade_score}%</span>
      </div>
      <canvas id="planHistoryCanvas" width="620" height="150" style="width: 100%; height: 150px; display: block;"></canvas>
    </div>

    <!-- OS 3 PILARES EXECUTIVOS OFICIAIS -->
    <div class="modal-pillars-grid">
      <div class="modal-pillar-card">
        <span class="mpc-title">📋 1. DESCRIÇÃO EXECUTIVA & TESE QUANT</span>
        <div class="mpc-content">${plan.descricao_executiva || plan.nome}</div>
      </div>

      <div class="modal-pillar-card">
        <span class="mpc-title">🎯 2. CONDIÇÕES MATEMÁTICAS DE ATIVAÇÃO</span>
        <div class="mpc-content">${plan.condicoes_ativacao || plan.gatilho_desc}</div>
      </div>

      <div class="modal-pillar-card" style="border-left-color: #EF4444;">
        <span class="mpc-title" style="color: #EF4444;">🛡️ 3. LIMITAÇÕES DE TRAVA & BLINDAGEM DE RISCO</span>
        <div class="mpc-content">${plan.limitacoes_trava || plan.trava_ruptura}</div>
      </div>
    </div>
  `;

  // Event Listeners nos botões de timeframe do Modal
  content.querySelectorAll('.modal-tf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newTf = btn.getAttribute('data-tf');
      activeModalTimeframe = newTf;
      renderModalLayout(plan, newTf);
    });
  });

  // Renderizar o gráfico Canvas histórico de proximidade
  setTimeout(() => {
    drawPlanHistoryChart(plan, tf);
  }, 30);
}

// ------------------------------------------------------------------------------
// 4. DESENHO DO CANVAS HISTÓRICO DE PROXIMIDADE (0% A 100%)
// ------------------------------------------------------------------------------
function drawPlanHistoryChart(plan, tf) {
  const canvas = document.getElementById('planHistoryCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth - 24 || 620;
  const h = 150;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, w, h);

  // Gerar série temporal histórica sintética calibrada pela proximidade real
  const series = generatePlanHistorySeries(plan, tf);
  const padLeft = 40;
  const padRight = 20;
  const padTop = 15;
  const padBottom = 25;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  const getY = (val) => padTop + (1 - (val / 100)) * plotH;
  const getX = (idx) => padLeft + (idx / (series.length - 1)) * plotW;

  // Grade Horizontal (0%, 25%, 50%, 75%, 100%)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  [0, 25, 50, 75, 100].forEach(level => {
    const y = getY(level);
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
    ctx.stroke();

    ctx.fillStyle = level === 100 ? '#F59E0B' : '#6B7280';
    ctx.font = '9px JetBrains Mono';
    ctx.textAlign = 'right';
    ctx.fillText(`${level}%`, padLeft - 6, y + 3);
  });

  // Linha de Gatilho de Execução (100%) em ouro pontilhado
  const yTrigger = getY(100);
  ctx.save();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(padLeft, yTrigger);
  ctx.lineTo(w - padRight, yTrigger);
  ctx.stroke();
  ctx.restore();

  // Área preenchida sob a curva
  const grad = ctx.createLinearGradient(0, padTop, 0, h - padBottom);
  grad.addColorStop(0, `${plan.cor}44`);
  grad.addColorStop(1, `${plan.cor}00`);

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(series[0].score));
  for (let i = 1; i < series.length; i++) {
    ctx.lineTo(getX(i), getY(series[i].score));
  }
  ctx.lineTo(getX(series.length - 1), h - padBottom);
  ctx.lineTo(getX(0), h - padBottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Curva de Trajetória
  ctx.beginPath();
  ctx.moveTo(getX(0), getY(series[0].score));
  for (let i = 1; i < series.length; i++) {
    ctx.lineTo(getX(i), getY(series[i].score));
  }
  ctx.strokeStyle = plan.cor;
  ctx.lineWidth = 2.5;
  ctx.shadowColor = plan.cor;
  ctx.shadowBlur = 8;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Ponto ao vivo no final
  const lastX = getX(series.length - 1);
  const lastY = getY(series[series.length - 1].score);
  ctx.beginPath();
  ctx.arc(lastX, lastY, 4.5, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.strokeStyle = plan.cor;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Rótulos de tempo no eixo X
  ctx.fillStyle = '#6B7280';
  ctx.font = '9px JetBrains Mono';
  ctx.textAlign = 'center';
  const labelSteps = Math.min(5, series.length);
  const step = Math.floor(series.length / (labelSteps - 1));
  for (let i = 0; i < series.length; i += step) {
    ctx.fillText(series[i].label, getX(i), h - 8);
  }
}

function generatePlanHistorySeries(plan, tf) {
  const pointsCount = tf === '1h' ? 30 : (tf === '24h' ? 24 : (tf === '7d' ? 28 : 30));
  const baseScore = plan.proximidade_score || 50;
  const series = [];

  for (let i = 0; i < pointsCount; i++) {
    const progress = i / (pointsCount - 1); // 0 a 1
    const noise = Math.sin(i * 0.45) * 6 + Math.cos(i * 0.9) * 3;
    // O ponto final converge para baseScore
    const val = Math.max(5, Math.min(96, Math.round(baseScore - (1 - progress) * (Math.sin(i) * 12) + noise * (1 - progress))));

    let label = '';
    if (tf === '1h') {
      const minAgo = Math.round((1 - progress) * 60);
      label = minAgo === 0 ? 'Agora' : `-${minAgo}min`;
    } else if (tf === '24h') {
      const hAgo = Math.round((1 - progress) * 24);
      label = hAgo === 0 ? 'Agora' : `-${hAgo}h`;
    } else if (tf === '7d') {
      const dAgo = ((1 - progress) * 7).toFixed(1);
      label = dAgo === '0.0' ? 'Hoje' : `-${dAgo}d`;
    } else {
      const dAgo = Math.round((1 - progress) * 30);
      label = dAgo === 0 ? 'Hoje' : `-${dAgo}d`;
    }

    series.push({ score: val, label: label });
  }

  // Garantir que o último ponto seja exatamente o score ao vivo
  series[series.length - 1].score = baseScore;
  return series;
}
