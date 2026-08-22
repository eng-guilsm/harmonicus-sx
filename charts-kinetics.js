/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 3: ASSET DYNAMICS & MULTI-TIMEFRAME KINETICS CONTROLLER
 * Suporte a 6 Janelas de Tempo (1h, 24h, 1sem, 1m, 1a, tudo), Crosshair & Física
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initChartsKinetics();
});

let currentKineticsAsset = 'BTCBRL';
let currentKineticsTimeframe = '24h';
let kineticsPollerTimer = null;
let hoveredDataIndex = -1;

function initChartsKinetics() {
  const assetsData = window.ASSETS_KINETICS_DATA || {};
  
  initAssetPills(assetsData);
  initTimeframeButtons();
  initCanvasInteractions();
  
  renderKineticsCockpit(currentKineticsAsset, currentKineticsTimeframe, assetsData);
  renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, assetsData);
  startLiveBinancePoller();
}

function initAssetPills(assetsData) {
  const container = document.getElementById('assetPillsContainer');
  if (!container) return;

  const assetList = [
    { key: 'BTCBRL', label: '🪙 BITCOIN (BTC)', color: '#F59E0B' },
    { key: 'ETHBRL', label: '🔹 ETHEREUM (ETH)', color: '#06B6D4' },
    { key: 'SOLBRL', label: '⚡ SOLANA (SOL)', color: '#EC4899' },
    { key: 'LINKBRL', label: '🌐 CHAINLINK (LINK)', color: '#8B5CF6' },
    { key: 'PAXGBRL', label: '🥇 OURO (PAXG)', color: '#FBBF24' },
    { key: 'USDTBRL', label: '💵 TETHER (USDT)', color: '#10B981' },
    { key: 'BNBBRL', label: '🟡 BNB CHAIN', color: '#EAB308' },
    { key: 'ADABRL', label: '🔷 CARDANO (ADA)', color: '#3B82F6' }
  ];

  container.innerHTML = assetList.map(item => `
    <button class="asset-pill-btn ${item.key === currentKineticsAsset ? 'active' : ''}" data-asset="${item.key}">
      <span>${item.label}</span>
    </button>
  `).join('');

  container.querySelectorAll('.asset-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.asset-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentKineticsAsset = btn.getAttribute('data-asset');
      hoveredDataIndex = -1;
      
      const data = window.ASSETS_KINETICS_DATA || {};
      renderKineticsCockpit(currentKineticsAsset, currentKineticsTimeframe, data);
      renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, data);
    });
  });
}

function initTimeframeButtons() {
  const bar = document.getElementById('tfButtonsBar');
  if (!bar) return;

  const btns = bar.querySelectorAll('.tf-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentKineticsTimeframe = btn.getAttribute('data-tf');
      hoveredDataIndex = -1;

      // Atualizar título do card
      const titleEl = document.getElementById('chartTitleText');
      const tfNames = {
        '1h': '1 HORA (ALTA RESOLUÇÃO 1M)',
        '24h': '24 HORAS (CICLO DIÁRIO)',
        '1sem': '1 SEMANA (7 DIAS)',
        '1m': '1 MÊS (30 DIAS)',
        '1a': '1 ANO (365 DIAS)',
        'tudo': 'HISTÓRICO COMPLETO (1.4 ANOS / 596 DIAS)'
      };
      if (titleEl) {
        titleEl.textContent = `CINÉTICA TEMPORAL & ENVELOPE DE BOLLINGER (${tfNames[currentKineticsTimeframe] || '24 HORAS'})`;
      }

      const data = window.ASSETS_KINETICS_DATA || {};
      renderKineticsCockpit(currentKineticsAsset, currentKineticsTimeframe, data);
      renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, data);
    });
  });
}

function renderKineticsCockpit(symbol, tfKey, data) {
  const asset = data[symbol] || {};
  const tfData = (asset.timeframes && asset.timeframes[tfKey]) || {};
  
  const elPrice = document.getElementById('kinPrice');
  const elVar24h = document.getElementById('kinVar24h');
  const elVel = document.getElementById('kinVelocity');
  const elAcc = document.getElementById('kinAcc');
  const elThrustVal = document.getElementById('kinThrustVal');
  const elThrustBar = document.getElementById('kinThrustBar');
  const elKinState = document.getElementById('kinStateTag');

  const p = asset.preco_atual || 0;
  const isUsdt = symbol === 'USDTBRL';
  const priceFmt = isUsdt ? `R$ ${p.toFixed(4)}` : `R$ ${p.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  if (elPrice) elPrice.textContent = priceFmt;
  
  if (elVar24h) {
    const v = tfData.variacao_periodo !== undefined ? tfData.variacao_periodo : 0;
    elVar24h.textContent = `${v >= 0 ? '+' : ''}${v.toFixed(2)}% (${tfData.label || tfKey.toUpperCase()})`;
    elVar24h.className = `hero-tag ${v >= 0 ? 'positive' : 'negative'}`;
  }

  if (elVel) {
    const vel = tfData.velocidade_inst !== undefined ? tfData.velocidade_inst : 0;
    elVel.textContent = `${vel >= 0 ? '▲ +' : '▼ '}${vel.toFixed(3)}%/ponto`;
    elVel.style.color = vel >= 0 ? '#10B981' : '#EF4444';
  }

  if (elAcc) {
    const acc = tfData.aceleracao_inst !== undefined ? tfData.aceleracao_inst : 0;
    elAcc.textContent = `${acc >= 0 ? '▲ +' : '▼ '}${acc.toFixed(3)}%/ponto²`;
    elAcc.style.color = acc >= 0 ? '#06B6D4' : '#F59E0B';
  }

  if (elThrustVal && elThrustBar) {
    const thrust = tfData.poder_subida_thrust !== undefined ? tfData.poder_subida_thrust : 50;
    elThrustVal.textContent = `${thrust.toFixed(1)} / 100`;
    elThrustBar.style.width = `${thrust}%`;
    
    if (thrust > 62) {
      elThrustBar.style.background = 'linear-gradient(90deg, #10B981, #06B6D4)';
    } else if (thrust < 38) {
      elThrustBar.style.background = 'linear-gradient(90deg, #EF4444, #F59E0B)';
    } else {
      elThrustBar.style.background = 'linear-gradient(90deg, #F59E0B, #10B981)';
    }
  }

  if (elKinState) {
    const st = tfData.estado_cinetico || 'EQUILIBRIO_INERCIAL';
    if (st === 'PROPULSAO_ALTA') {
      elKinState.textContent = '🚀 FORTE PROPULSÃO COMPRADORA';
      elKinState.style.color = '#10B981';
      elKinState.style.borderColor = '#10B981';
    } else if (st === 'DESACELERACAO_EXAUSTAO') {
      elKinState.textContent = '⚠️ EXAUSTÃO / PRESSÃO VENDEDORA';
      elKinState.style.color = '#EF4444';
      elKinState.style.borderColor = '#EF4444';
    } else {
      elKinState.textContent = '⚖️ ESTABILIDADE INERCIAL';
      elKinState.style.color = '#06B6D4';
      elKinState.style.borderColor = '#06B6D4';
    }
  }
}

function renderKineticsChart(symbol, tfKey, data) {
  const canvas = document.getElementById('kineticsMainCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const asset = data[symbol] || {};
  const tfData = (asset.timeframes && asset.timeframes[tfKey]) || {};
  const s = tfData.series || {};
  
  const timestamps = s.timestamps || [];
  const prices = s.prices || [];
  const upper = s.bb_upper || [];
  const lower = s.bb_lower || [];
  const velocities = s.velocities || [];

  if (prices.length === 0) return;

  // Ajuste de DPI e tamanho fluido
  const wrapper = canvas.parentElement;
  const dpr = window.devicePixelRatio || 1;
  const displayW = wrapper.clientWidth || 1000;
  const displayH = 380;

  canvas.width = displayW * dpr;
  canvas.height = displayH * dpr;
  canvas.style.width = `${displayW}px`;
  canvas.style.height = `${displayH}px`;
  ctx.scale(dpr, dpr);

  const w = displayW;
  const h = displayH;
  const padLeft = 75;
  const padRight = 30;
  const padTop = 25;
  const padBottom = 80;
  const chartH = h - padBottom - padTop;

  ctx.clearRect(0, 0, w, h);

  // Fundo Dark Cyberpunk
  ctx.fillStyle = '#050811';
  ctx.fillRect(0, 0, w, h);

  // Escalas de Preço
  const allVals = [...lower, ...upper, ...prices];
  const rawMin = Math.min(...allVals);
  const rawMax = Math.max(...allVals);
  const spread = rawMax - rawMin || 1;
  const minP = rawMin - spread * 0.05;
  const maxP = rawMax + spread * 0.05;
  const pRange = maxP - minP;

  const getX = (i) => padLeft + (i / (prices.length - 1)) * (w - padLeft - padRight);
  const getY = (val) => padTop + (1 - (val - minP) / pRange) * chartH;

  // Grade Horizontal
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const isUsdt = symbol === 'USDTBRL';

  for (let i = 0; i <= 5; i++) {
    const yVal = minP + (i / 5) * pRange;
    const yPos = getY(yVal);
    ctx.beginPath();
    ctx.moveTo(padLeft, yPos);
    ctx.lineTo(w - padRight, yPos);
    ctx.stroke();

    ctx.fillStyle = '#6B7280';
    ctx.font = '10px JetBrains Mono';
    ctx.textAlign = 'right';
    const labelStr = isUsdt ? `R$ ${yVal.toFixed(4)}` : `R$ ${Math.round(yVal).toLocaleString('pt-BR')}`;
    ctx.fillText(labelStr, padLeft - 8, yPos + 3);
  }

  // 1. Faixa de Bollinger (Sombra de Incerteza)
  ctx.beginPath();
  for (let i = 0; i < upper.length; i++) {
    const x = getX(i);
    const y = getY(upper[i]);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  for (let i = lower.length - 1; i >= 0; i--) {
    const x = getX(i);
    const y = getY(lower[i]);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(6, 182, 212, 0.07)';
  ctx.fill();

  // Linhas das Bandas Superior e Inferior
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  ctx.beginPath();
  for (let i = 0; i < upper.length; i++) {
    const x = getX(i);
    const y = getY(upper[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.beginPath();
  for (let i = 0; i < lower.length; i++) {
    const x = getX(i);
    const y = getY(lower[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // 2. Linha Principal de Preço (Gradiente Luminoso Neon)
  ctx.beginPath();
  for (let i = 0; i < prices.length; i++) {
    const x = getX(i);
    const y = getY(prices[i]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = '#F59E0B';
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // 3. Painel Inferior: Histograma de Velocidade Instantânea (dP/dt) Normalizado
  const derivY0 = h - 35;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padLeft, derivY0);
  ctx.lineTo(w - padRight, derivY0);
  ctx.stroke();

  ctx.fillStyle = '#9CA3AF';
  ctx.font = '9px JetBrains Mono';
  ctx.textAlign = 'left';
  ctx.fillText('VELOCIDADE RELATIVA dP/dt (NORMALIZADA POR JANELA)', padLeft, derivY0 - 24);

  // Normalização adaptativa pela velocidade máxima da região analisada
  const maxAbsVel = Math.max(...velocities.map(v => Math.abs(v)), 0.0001);
  const maxBarH = 22; // Altura máxima da barra em pixels
  const barW = (w - padLeft - padRight) / velocities.length;

  for (let i = 0; i < velocities.length; i++) {
    const vel = velocities[i];
    const normRatio = Math.abs(vel) / maxAbsVel;
    const barH = Math.max(3, normRatio * maxBarH);
    const x = padLeft + i * barW;
    const y = vel >= 0 ? derivY0 - barH : derivY0;
    ctx.fillStyle = vel >= 0 ? '#10B981' : '#EF4444';
    ctx.fillRect(x, y, Math.max(1.5, barW - 1), barH);
  }

  // Rótulos de tempo no eixo X
  ctx.fillStyle = '#6B7280';
  ctx.font = '9px JetBrains Mono';
  ctx.textAlign = 'center';
  const totalPoints = timestamps.length;
  const numLabels = Math.min(7, totalPoints);
  const step = Math.max(1, Math.floor(totalPoints / (numLabels - 1)));

  for (let i = 0; i < totalPoints; i += step) {
    const x = getX(i);
    ctx.fillText(timestamps[i], x, h - 8);
  }

  // 4. CROSSHAIR & INSPEÇÃO INTERATIVA
  if (hoveredDataIndex >= 0 && hoveredDataIndex < prices.length) {
    const i = hoveredDataIndex;
    const x = getX(i);
    const y = getY(prices[i]);

    // Linha vertical do crosshair
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(x, padTop);
    ctx.lineTo(x, h - padBottom + 10);
    ctx.stroke();

    // Ponto no preço
    ctx.setLineDash([]);
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Atualizar badge flutuante
    const badge = document.getElementById('chartInspectBadge');
    if (badge) {
      const pVal = isUsdt ? `R$ ${prices[i].toFixed(4)}` : `R$ ${prices[i].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      const upVal = isUsdt ? `R$ ${upper[i].toFixed(4)}` : `R$ ${upper[i].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      const lowVal = isUsdt ? `R$ ${lower[i].toFixed(4)}` : `R$ ${lower[i].toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      const velVal = `${velocities[i] >= 0 ? '+' : ''}${velocities[i].toFixed(3)}%`;

      badge.style.display = 'block';
      badge.innerHTML = `
        <div class="ib-time">⏱️ ${timestamps[i]}</div>
        <div class="ib-price">Cotação: <b>${pVal}</b></div>
        <div class="ib-bands">Bandas: ${lowVal} ↔ ${upVal}</div>
        <div class="ib-vel">Velocidade: <b style="color: ${velocities[i] >= 0 ? '#10B981' : '#EF4444'}">${velVal}</b></div>
      `;

      const badgeW = 200;
      let badgeLeft = x + 15;
      if (badgeLeft + badgeW > w - 10) badgeLeft = x - badgeW - 15;
      badge.style.left = `${badgeLeft}px`;
      badge.style.top = `${Math.max(10, Math.min(h - 130, y - 20))}px`;
    }
  } else {
    const badge = document.getElementById('chartInspectBadge');
    if (badge) badge.style.display = 'none';
  }
}

function initCanvasInteractions() {
  const canvas = document.getElementById('kineticsMainCanvas');
  const wrapper = document.getElementById('canvasWrapper');
  if (!canvas || !wrapper) return;

  const handleMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const padLeft = 75;
    const padRight = 30;
    const w = rect.width;

    const assetsData = window.ASSETS_KINETICS_DATA || {};
    const asset = assetsData[currentKineticsAsset] || {};
    const tfData = (asset.timeframes && asset.timeframes[currentKineticsTimeframe]) || {};
    const prices = (tfData.series && tfData.series.prices) || [];

    if (prices.length === 0 || clientX < padLeft || clientX > w - padRight) {
      hoveredDataIndex = -1;
      renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, assetsData);
      return;
    }

    const relX = (clientX - padLeft) / (w - padLeft - padRight);
    const idx = Math.max(0, Math.min(prices.length - 1, Math.round(relX * (prices.length - 1))));

    if (hoveredDataIndex !== idx) {
      hoveredDataIndex = idx;
      renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, assetsData);
    }
  };

  const handleLeave = () => {
    hoveredDataIndex = -1;
    const data = window.ASSETS_KINETICS_DATA || {};
    renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, data);
  };

  canvas.addEventListener('mousemove', handleMove);
  canvas.addEventListener('mouseleave', handleLeave);
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) handleMove(e.touches[0]);
  });
  canvas.addEventListener('touchend', handleLeave);
}

// ------------------------------------------------------------------------------
// POLLER AO VIVO NO NAVEGADOR (ATUALIZAÇÃO INSTANTÂNEA A CADA 5 SEGUNDOS)
// ------------------------------------------------------------------------------
function startLiveBinancePoller() {
  const fetchLive = async () => {
    try {
      const symbols = ['BTCBRL', 'USDTBRL', 'SOLBRL', 'ETHBRL', 'LINKBRL', 'BNBBRL', 'ADABRL'];
      const url = `https://api.binance.com/api/v3/ticker/price`;
      const res = await fetch(url);
      const data = await res.json();

      if (Array.isArray(data) && window.ASSETS_KINETICS_DATA) {
        const pricesMap = {};
        data.forEach(item => {
          if (symbols.includes(item.symbol)) {
            pricesMap[item.symbol] = parseFloat(item.price);
          }
        });

        // Adicionar PAXG calculado
        if (pricesMap['USDTBRL']) {
          pricesMap['PAXGBRL'] = 4587.0 * pricesMap['USDTBRL'];
        }

        for (const [sym, p] of Object.entries(pricesMap)) {
          if (window.ASSETS_KINETICS_DATA[sym]) {
            const oldP = window.ASSETS_KINETICS_DATA[sym].preco_atual || p;
            const deltaPct = ((p / oldP) - 1) * 100;
            window.ASSETS_KINETICS_DATA[sym].preco_atual = p;
            
            // Atualizar timeframe ativo na memória
            const curTF = window.ASSETS_KINETICS_DATA[sym].timeframes[currentKineticsTimeframe];
            if (curTF) {
              curTF.velocidade_inst = deltaPct;
              curTF.poder_subida_thrust = Math.max(5, Math.min(95, 50 + deltaPct * 30));
              curTF.estado_cinetico = curTF.poder_subida_thrust > 62 ? 'PROPULSAO_ALTA' : (curTF.poder_subida_thrust < 38 ? 'DESACELERACAO_EXAUSTAO' : 'EQUILIBRIO_INERCIAL');
              
              if (curTF.series && curTF.series.prices) {
                curTF.series.prices[curTF.series.prices.length - 1] = p;
              }
            }
          }
        }

        renderKineticsCockpit(currentKineticsAsset, currentKineticsTimeframe, window.ASSETS_KINETICS_DATA);
        if (hoveredDataIndex === -1) {
          renderKineticsChart(currentKineticsAsset, currentKineticsTimeframe, window.ASSETS_KINETICS_DATA);
        }
      }
    } catch (e) {
      // Silencioso em caso de rate limit
    }
  };

  if (kineticsPollerTimer) clearInterval(kineticsPollerTimer);
  kineticsPollerTimer = setInterval(fetchLive, 5000);
}
