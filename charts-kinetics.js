/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 3: ASSET DYNAMICS & MARKET KINETICS CONTROLLER
 * Física de Movimento, Velocidade (dP/dt), Aceleração (d2P/dt2) e Poder de Subida
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initChartsKinetics();
});

let currentKineticsAsset = 'BTCBRL';
let kineticsChartInstance = null;
let kineticsPollerTimer = null;

function initChartsKinetics() {
  const assetsData = window.ASSETS_KINETICS_DATA || {};
  
  initAssetPills(assetsData);
  renderKineticsCockpit(currentKineticsAsset, assetsData);
  renderKineticsChart(currentKineticsAsset, assetsData);
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
      renderKineticsCockpit(currentKineticsAsset, window.ASSETS_KINETICS_DATA || {});
      renderKineticsChart(currentKineticsAsset, window.ASSETS_KINETICS_DATA || {});
    });
  });
}

function renderKineticsCockpit(symbol, data) {
  const asset = data[symbol] || {};
  const elPrice = document.getElementById('kinPrice');
  const elVar24h = document.getElementById('kinVar24h');
  const elVel = document.getElementById('kinVelocity');
  const elAcc = document.getElementById('kinAcc');
  const elThrustVal = document.getElementById('kinThrustVal');
  const elThrustBar = document.getElementById('kinThrustBar');
  const elKinState = document.getElementById('kinStateTag');

  const p = asset.preco_atual || 0;
  const isUsdt = symbol === 'USDTBRL';
  const priceFmt = isUsdt ? `R$ ${p.toFixed(4)}` : `R$ ${p.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

  if (elPrice) elPrice.textContent = priceFmt;
  
  if (elVar24h) {
    const v24 = asset.variacao_24h || 0;
    elVar24h.textContent = `${v24 >= 0 ? '+' : ''}${v24.toFixed(2)}% (24h)`;
    elVar24h.className = `kin-tag ${v24 >= 0 ? 'pos' : 'neg'}`;
  }

  if (elVel) {
    const vel = asset.velocidade_inst || 0;
    elVel.textContent = `${vel >= 0 ? '▲ +' : '▼ '}${vel.toFixed(3)}%/min`;
    elVel.style.color = vel >= 0 ? '#10B981' : '#EF4444';
  }

  if (elAcc) {
    const acc = asset.aceleracao_inst || 0;
    elAcc.textContent = `${acc >= 0 ? '▲ +' : '▼ '}${acc.toFixed(3)}%/min²`;
    elAcc.style.color = acc >= 0 ? '#06B6D4' : '#F59E0B';
  }

  if (elThrustVal && elThrustBar) {
    const thrust = asset.poder_subida_thrust || 50;
    elThrustVal.textContent = `${thrust.toFixed(1)} / 100`;
    elThrustBar.style.width = `${thrust}%`;
    
    if (thrust > 65) {
      elThrustBar.style.background = 'linear-gradient(90deg, #10B981, #06B6D4)';
    } else if (thrust < 35) {
      elThrustBar.style.background = 'linear-gradient(90deg, #EF4444, #F59E0B)';
    } else {
      elThrustBar.style.background = 'linear-gradient(90deg, #F59E0B, #10B981)';
    }
  }

  if (elKinState) {
    const st = asset.estado_cinetico || 'EQUILIBRIO_INERCIAL';
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

function renderKineticsChart(symbol, data) {
  const canvas = document.getElementById('kineticsMainCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const asset = data[symbol] || {};
  const s = asset.series || {};
  const timestamps = s.timestamps || [];
  const prices = s.prices || [];
  const upper = s.bb_upper || [];
  const lower = s.bb_lower || [];
  const velocities = s.velocities || [];

  if (prices.length === 0) return;

  // Ajustar tamanho
  canvas.width = canvas.parentElement.clientWidth || 900;
  canvas.height = 360;

  const w = canvas.width;
  const h = canvas.height;
  const padLeft = 65;
  const padRight = 30;
  const padTop = 30;
  const padBottom = 75; // espaço para painel de derivadas
  const chartH = h - padBottom - padTop;

  ctx.clearRect(0, 0, w, h);

  // Fundo
  ctx.fillStyle = '#050811';
  ctx.fillRect(0, 0, w, h);

  // Escalas
  const minP = Math.min(...lower, ...prices) * 0.998;
  const maxP = Math.max(...upper, ...prices) * 1.002;
  const pRange = maxP - minP || 1;

  const getX = (i) => padLeft + (i / (prices.length - 1)) * (w - padLeft - padRight);
  const getY = (val) => padTop + (1 - (val - minP) / pRange) * chartH;

  // Grade
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
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
    const isUsdt = symbol === 'USDTBRL';
    ctx.fillText(isUsdt ? yVal.toFixed(3) : Math.round(yVal).toLocaleString('pt-BR'), padLeft - 8, yPos + 3);
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
  ctx.fillStyle = 'rgba(6, 182, 212, 0.06)';
  ctx.fill();

  // Linhas das Bandas
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
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

  // 2. Linha Principal de Preço (Glow Neon)
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

  // 3. Painel Inferior: Vetor de Velocidade Instantânea (dP/dt)
  const derivY0 = h - 35;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.beginPath();
  ctx.moveTo(padLeft, derivY0);
  ctx.lineTo(w - padRight, derivY0);
  ctx.stroke();

  ctx.fillStyle = '#9CA3AF';
  ctx.font = '9px JetBrains Mono';
  ctx.textAlign = 'left';
  ctx.fillText('VELOCIDADE dP/dt (%/min)', padLeft, derivY0 - 18);

  const barW = (w - padLeft - padRight) / velocities.length;
  for (let i = 0; i < velocities.length; i++) {
    const vel = velocities[i];
    const x = padLeft + i * barW;
    const barH = Math.min(22, Math.abs(vel) * 45);
    const y = vel >= 0 ? derivY0 - barH : derivY0;
    ctx.fillStyle = vel >= 0 ? '#10B981' : '#EF4444';
    ctx.fillRect(x, y, Math.max(1, barW - 1), barH);
  }

  // Rótulos de tempo no eixo X
  ctx.fillStyle = '#6B7280';
  ctx.font = '9px JetBrains Mono';
  ctx.textAlign = 'center';
  const step = Math.floor(timestamps.length / 6);
  for (let i = 0; i < timestamps.length; i += step) {
    const x = getX(i);
    ctx.fillText(timestamps[i], x, h - 6);
  }
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

      if (Array.isArray(data)) {
        const pricesMap = {};
        data.forEach(item => {
          if (symbols.includes(item.symbol)) {
            pricesMap[item.symbol] = parseFloat(item.price);
          }
        });

        // Atualizar memória do cliente
        if (window.ASSETS_KINETICS_DATA) {
          for (const [sym, p] of Object.entries(pricesMap)) {
            if (window.ASSETS_KINETICS_DATA[sym]) {
              const oldP = window.ASSETS_KINETICS_DATA[sym].preco_atual;
              const deltaPct = ((p / oldP) - 1) * 100;
              window.ASSETS_KINETICS_DATA[sym].preco_atual = p;
              window.ASSETS_KINETICS_DATA[sym].velocidade_inst = deltaPct;
              window.ASSETS_KINETICS_DATA[sym].poder_subida_thrust = Math.max(5, Math.min(95, 50 + deltaPct * 30));
            }
          }
          renderKineticsCockpit(currentKineticsAsset, window.ASSETS_KINETICS_DATA);
        }
      }
    } catch (e) {
      // Silencioso em caso de rate limit
    }
  };

  if (kineticsPollerTimer) clearInterval(kineticsPollerTimer);
  kineticsPollerTimer = setInterval(fetchLive, 5000);
}
