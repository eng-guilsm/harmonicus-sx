/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 2: SYNTHESIZER & SPECTRAL TOPOLOGY CONTROLLER (v3.7)
 * Processamento Digital de Sinais (DSP) de John F. Ehlers & Análise Espectral
 * Rastreamento Angular Circular 360º, Grafo Compacto & Foco de Tríades Opacas
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHarmonicusSX();
});

let activeTunerBand = 'daily';
let activeHarmonicChord = 'unison';

let d3GraphSimulation = null;
let d3SvgSelection = null;
let d3ZoomRoot = null;
let d3ZoomBehavior = null;

function initHarmonicusSX() {
  const data = window.HARMONICUS_SX_DATA || {};

  initTabNavigation();
  initAudioControls();
  initRadioTuner(data.bands || []);
  initChordSelector();
  initSpectralTelemetry(data.sensores || {});
  initOscilloscope();
  initD3NetworkGraph(data.nodes || [], data.edges || []);
  renderCWTSlices(data.cwt_slices || []);
}

// ------------------------------------------------------------------------------
// 1. NAVEGAÇÃO DE 3 ABAS COM RE-RENDERIZAÇÃO AUTOMÁTICA
// ------------------------------------------------------------------------------
function initTabNavigation() {
  const tabBtns = document.querySelectorAll('.nav-tab');
  const pages = {
    pageTactical: document.getElementById('pageTactical'),
    pageHarmonicus: document.getElementById('pageHarmonicus'),
    pageKinetics: document.getElementById('pageKinetics')
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetPage = btn.getAttribute('data-page');
      Object.entries(pages).forEach(([k, el]) => {
        if (el) {
          if (k === targetPage) el.classList.add('active');
          else el.classList.remove('active');
        }
      });

      // Se navegou para o Sintetizador, garantir renderização do Grafo D3
      if (targetPage === 'pageHarmonicus') {
        setTimeout(() => {
          const data = window.HARMONICUS_SX_DATA || {};
          initD3NetworkGraph(data.nodes || [], data.edges || []);
        }, 60);
      }

      // Se foi para a página de cinéticas, re-renderizar canvas
      if (targetPage === 'pageKinetics' && typeof renderKineticsChart === 'function') {
        setTimeout(() => {
          renderKineticsChart(window.currentKineticsAsset || 'BTCBRL', window.currentKineticsTimeframe || '24h', window.ASSETS_KINETICS_DATA || {});
        }, 60);
      }
    });
  });
}

// ------------------------------------------------------------------------------
// 2. CONTROLES DE ÁUDIO MASTER
// ------------------------------------------------------------------------------
function initAudioControls() {
  const btnToggle = document.getElementById('audioToggleBtn');
  const audioIcon = document.getElementById('audioIcon');
  const audioText = document.getElementById('audioText');
  const masterVol = document.getElementById('masterVolume');

  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      const isNowPlaying = window.harmonicusAudio.toggleAudio();
      if (isNowPlaying) {
        btnToggle.classList.add('active');
        audioIcon.textContent = '🔊';
        audioText.textContent = 'ÁUDIO ATIVO';
      } else {
        btnToggle.classList.remove('active');
        audioIcon.textContent = '🔇';
        audioText.textContent = 'ÁUDIO MUTADO';
      }
    });
  }

  if (masterVol) {
    masterVol.addEventListener('input', (e) => {
      const vol = parseFloat(e.target.value);
      window.harmonicusAudio.setVolume(vol);
    });
  }
}

// ------------------------------------------------------------------------------
// 3. SINTONIZADOR DE RÁDIO ANALÓGICO COM GEOMETRIA ANGULAR CIRCULAR 360º REAL
// ------------------------------------------------------------------------------
function initRadioTuner(bands) {
  const dial = document.getElementById('tunerDial');
  const bandNameEl = document.getElementById('tunerBandName');
  const bandFreqEl = document.getElementById('tunerBandFreq');
  const bandDescEl = document.getElementById('tunerBandDesc');
  const markers = document.querySelectorAll('.svg-marker');

  if (!dial) return;

  // Mapeamento trigonométrico exato dos ângulos de cada marcador (arco de -135° a +135°)
  const markerAngleMap = {
    '15m': -135,
    '1h': -81,
    '4h': -27,
    '24h': 27,
    '7d': 81,
    '45d': 135
  };

  const markerToBand = {
    '15m': 'ultra_high',
    '1h': 'ultra_high',
    '4h': 'intraday',
    '24h': 'daily',
    '7d': 'macro',
    '45d': 'macro'
  };

  const markerReadouts = {
    '15m': { nome: 'ONDAS ULTRACURTAS // 15 MINUTOS', freq: 'Banda: 15m | High Frequency (HF)', desc: 'Micro-oscilações rápidas de livro de ofertas e captura de micro-dips intradiários.' },
    '1h':  { nome: 'ONDAS HORÁRIAS // 1 HORA', freq: 'Banda: 1h | Curto Prazo', desc: 'Oscilações horárias de fluxo de liquidez institucional e repique de médias móveis.' },
    '4h':  { nome: 'ONDAS MÉDIAS // 4 HORAS', freq: 'Banda: 4h | Intraday Swing', desc: 'Ciclos intradiários de volume e rotação de correlação entre Bitcoin e Ethereum.' },
    '24h': { nome: 'ONDAS CURTAS // DIÁRIO (24H)', freq: 'Banda: 24h | Diário Dominante', desc: 'Harmônico fundamental de rotação de mercado. Cointegração forte entre TradFi e Cripto.' },
    '7d':  { nome: 'ONDAS SEMANAIS // 7 DIAS', freq: 'Banda: 7d | Swing Semanal', desc: 'Tendência semanal de fluxo de capital e ajuste de posições institucionais.' },
    '45d': { nome: 'ONDAS LONGAS // SECULAR (45D)', freq: 'Banda: 45d | Macro Secular', desc: 'As placas tectônicas do macro. Onde reside o ciclo secular do Plano Guiana Brasileira.' }
  };

  let currentAngle = 27; // Padrão: 24H
  let isDragging = false;
  let startMouseAngle = 0;
  let startDialAngle = 0;
  let startY = 0;

  const setDialRotation = (deg) => {
    // Permite arco de -140° a +140° (280° de excursão do potenciômetro)
    currentAngle = Math.max(-140, Math.min(140, deg));
    dial.style.transform = `rotate(${currentAngle}deg)`;

    // Encontrar o marcador mais próximo do ângulo atual
    let closestMarker = '24h';
    let minDiff = 999;
    for (const [mId, mDeg] of Object.entries(markerAngleMap)) {
      const diff = Math.abs(currentAngle - mDeg);
      if (diff < minDiff) {
        minDiff = diff;
        closestMarker = mId;
      }
    }

    // Atualizar classe ativa nos marcadores SVG
    markers.forEach(m => {
      const markerKey = m.getAttribute('data-marker') || m.textContent.trim().toLowerCase();
      if (markerKey === closestMarker) m.classList.add('active');
      else m.classList.remove('active');
    });

    const targetBand = markerToBand[closestMarker] || 'daily';
    const readout = markerReadouts[closestMarker];

    if (bandNameEl && readout) bandNameEl.textContent = readout.nome;
    if (bandFreqEl && readout) bandFreqEl.textContent = readout.freq;
    if (bandDescEl && readout) bandDescEl.textContent = readout.desc;

    if (activeTunerBand !== targetBand) {
      activeTunerBand = targetBand;
      window.harmonicusAudio.setBand(activeTunerBand);
      updateD3GraphForBand(activeTunerBand);
    }
  };

  // Cálculo angular do ponteiro relativo ao centro geométrico
  const getPointerAngle = (clientX, clientY) => {
    const rect = dial.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  };

  const onStart = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startMouseAngle = getPointerAngle(clientX, clientY);
    startDialAngle = currentAngle;
    startY = clientY;
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Cálculo angular radial
    const currentMouseAngle = getPointerAngle(clientX, clientY);
    let deltaAngle = currentMouseAngle - startMouseAngle;
    
    if (deltaAngle > 180) deltaAngle -= 360;
    if (deltaAngle < -180) deltaAngle += 360;

    // Também combina com arraste vertical para fluidez de uso
    const verticalDelta = (startY - clientY) * 0.85;
    const combinedTarget = startDialAngle + deltaAngle + (Math.abs(deltaAngle) < 6 ? verticalDelta : 0);

    setDialRotation(combinedTarget);
  };

  const onEnd = () => { isDragging = false; };

  dial.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  dial.addEventListener('touchstart', onStart, { passive: false });
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onEnd);

  // Scroll wheel suave
  dial.parentElement.addEventListener('wheel', (e) => {
    e.preventDefault();
    const step = e.deltaY > 0 ? 15 : -15;
    setDialRotation(currentAngle + step);
  }, { passive: false });

  // Clique direto em qualquer marcador SVG
  markers.forEach(m => {
    m.addEventListener('click', () => {
      const markerKey = m.getAttribute('data-marker') || m.textContent.trim().toLowerCase();
      const targetDeg = markerAngleMap[markerKey] || 0;
      setDialRotation(targetDeg);
    });
  });

  setDialRotation(27);
}

// ------------------------------------------------------------------------------
// 4. SELETOR DE ACORDES HARMÔNICOS & TRÍADES
// ------------------------------------------------------------------------------
function initChordSelector() {
  const chordBtns = document.querySelectorAll('.chord-btn');
  chordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      chordBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeHarmonicChord = btn.getAttribute('data-chord');
      window.harmonicusAudio.playChord(activeHarmonicChord);
      updateD3GraphForChord(activeHarmonicChord);
    });
  });
}

// ------------------------------------------------------------------------------
// 5. OBSERVÁVEIS ESPECTRAIS EM TEMPO REAL (TELEMETRIA DSP DE EHLERS & GRANGER)
// ------------------------------------------------------------------------------
function initSpectralTelemetry(sensores) {
  const telePC1 = document.getElementById('telePC1');
  const teleT0 = document.getElementById('teleT0');
  const teleSNR = document.getElementById('teleSNR');
  const teleSTE = document.getElementById('teleSTE');

  const pc1Val = sensores.pc1 !== undefined ? (sensores.pc1 * 100).toFixed(1) + '%' : '39.4%';
  const t0Val = sensores.t0_ehlers !== undefined ? sensores.t0_ehlers.toFixed(1) + 'h' : '13.7h';
  const snrVal = sensores.snr_ehlers !== undefined ? (sensores.snr_ehlers > 0 ? '+' : '') + sensores.snr_ehlers.toFixed(1) + ' dB' : '+12.8 dB';
  const steVal = sensores.fluxo_ste !== undefined ? (sensores.fluxo_ste > 0 ? '+' : '') + sensores.fluxo_ste.toFixed(4) : '+0.1325';

  if (telePC1) telePC1.textContent = pc1Val;
  if (teleT0) teleT0.textContent = t0Val;
  if (teleSNR) {
    teleSNR.textContent = snrVal;
    const snrNum = parseFloat(sensores.snr_ehlers || 12.8);
    teleSNR.style.color = snrNum >= 6.0 ? '#10B981' : (snrNum >= 0 ? '#F59E0B' : '#EF4444');
  }
  if (teleSTE) {
    teleSTE.textContent = steVal;
    const steNum = parseFloat(sensores.fluxo_ste || 0.13);
    teleSTE.style.color = steNum >= 0 ? '#10B981' : '#EF4444';
  }
}

// ------------------------------------------------------------------------------
// 6. OSCILOSCÓPIO CRT DE 60 FPS REATIVO
// ------------------------------------------------------------------------------
function initOscilloscope() {
  const canvas = document.getElementById('oscCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth || 900;
    canvas.height = 140;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let phase = 0;

  function renderOsc() {
    requestAnimationFrame(renderOsc);

    const w = canvas.width;
    const h = canvas.height;

    // Rastro fosforescente
    ctx.fillStyle = 'rgba(2, 4, 8, 0.35)';
    ctx.fillRect(0, 0, w, h);

    // Grade CRT
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < w; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for (let y = 0; y < h; y += 20) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();

    // Linha central
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    const isPlaying = window.harmonicusAudio && window.harmonicusAudio.isPlaying;
    const dataArray = isPlaying ? window.harmonicusAudio.getWaveformData() : null;

    let freqMult = 1.0;
    let speedMult = 1.0;
    switch (activeTunerBand) {
      case 'ultra_high': freqMult = 3.8; speedMult = 2.5; break;
      case 'intraday':   freqMult = 2.2; speedMult = 1.6; break;
      case 'daily':      freqMult = 1.0; speedMult = 1.0; break;
      case 'macro':      freqMult = 0.45; speedMult = 0.4; break;
    }

    phase += 0.035 * speedMult;

    // Cor do feixe CRT
    let beamColor = '#06B6D4';
    if (activeHarmonicChord === 'tension') beamColor = '#EF4444';
    else if (activeHarmonicChord === 'major') beamColor = '#10B981';
    else if (activeHarmonicChord === 'ether') beamColor = '#8B5CF6';
    else if (activeHarmonicChord === 'unison') beamColor = isPlaying ? '#10B981' : '#F59E0B';

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = beamColor;
    ctx.shadowBlur = 12;
    ctx.shadowColor = beamColor;
    ctx.beginPath();

    const points = 256;
    const sliceWidth = w / points;
    const defaultDamping = 0.50;

    for (let i = 0; i < points; i++) {
      let v = 1.0;

      if (isPlaying && dataArray && dataArray.length > 0) {
        const raw = dataArray[Math.floor((i / points) * dataArray.length)];
        v = raw / 128.0;
      } else {
        const t = (i * 0.03 * freqMult) + phase;
        const noise = (Math.random() - 0.5) * (defaultDamping * 0.22);
        
        if (activeHarmonicChord === 'unison') {
          v = 1.0 + 0.28 * Math.sin(t) + 0.14 * Math.sin(t * 1.5) + 0.07 * Math.sin(t * 2.0) + noise;
        } else if (activeHarmonicChord === 'tension') {
          const saw = (t % (Math.PI * 2)) / Math.PI - 1.0;
          v = 1.0 + 0.32 * Math.sin(t) + 0.22 * Math.sin(t * 1.414) + 0.12 * saw + noise * 1.6;
        } else if (activeHarmonicChord === 'major') {
          v = 1.0 + 0.25 * Math.sin(t) + 0.18 * Math.sin(t * 1.25) + 0.12 * Math.sin(t * 1.5) + noise * 0.5;
        } else {
          v = 1.0 + 0.22 * Math.sin(t * 0.8) + 0.15 * Math.cos(t * 1.6 - phase * 0.5) + noise * 0.3;
        }
      }

      const y = (v * h) / 2;
      const x = i * sliceWidth;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  renderOsc();
}

// ------------------------------------------------------------------------------
// 7. GRAFO TOPOLÓGICO COMPACTO COM CÍRCULOS AMPLIADOS & FOCO EM TRÍADES
// ------------------------------------------------------------------------------
function initD3NetworkGraph(rawNodes, rawEdges) {
  const container = document.getElementById('networkGraphStage');
  const tooltip = document.getElementById('nodeTooltip');
  const btnReset = document.getElementById('btnResetZoom');
  if (!container || !window.d3) return;

  const dataNodes = (rawNodes && rawNodes.length > 0) ? rawNodes : (window.HARMONICUS_SX_DATA && window.HARMONICUS_SX_DATA.nodes) || [];
  const dataEdges = (rawEdges && rawEdges.length > 0) ? rawEdges : (window.HARMONICUS_SX_DATA && window.HARMONICUS_SX_DATA.edges) || [];

  if (dataNodes.length === 0) return;

  // CLONE profundo para evitar que a mutação de links do D3 quebre reinicializações
  const nodes = dataNodes.map(d => ({
    id: d.id,
    nome: d.nome,
    classe: d.classe,
    fundamental_hz: d.fundamental_hz,
    nota: d.nota,
    cor: d.cor,
    vol: d.vol,
    autovetor_pc1: d.autovetor_pc1
  }));

  const edges = dataEdges.map(d => ({
    source: typeof d.source === 'object' ? d.source.id : d.source,
    target: typeof d.target === 'object' ? d.target.id : d.target,
    coerencia: d.coerencia,
    peso: d.peso,
    tipo: d.tipo
  }));

  const rect = container.getBoundingClientRect();
  const width = Math.max(rect.width || container.clientWidth || 900, 700);
  const height = Math.max(rect.height || container.clientHeight || 420, 400);

  // Limpar SVGs anteriores
  d3.select(container).selectAll('svg').remove();

  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', [0, 0, width, height]);

  d3SvgSelection = svg;

  // Container de Zoom e Pan
  d3ZoomRoot = svg.append('g').attr('class', 'zoom-root');

  d3ZoomBehavior = d3.zoom()
    .scaleExtent([0.4, 3.0])
    .on('zoom', (event) => {
      d3ZoomRoot.attr('transform', event.transform);
    });

  svg.call(d3ZoomBehavior);

  if (btnReset) {
    btnReset.onclick = () => {
      svg.transition().duration(600).call(
        d3ZoomBehavior.transform,
        d3.zoomIdentity.translate(0, 0).scale(1)
      );
      updateD3GraphForChord('unison');
    };
  }

  // Simulação física compacta e agrupada
  d3GraphSimulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(d => Math.max(38, 68 - (d.coerencia * 28))))
    .force('charge', d3.forceManyBody().strength(-95))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('radial', d3.forceRadial(Math.min(width, height) * 0.28, width / 2, height / 2).strength(0.18))
    .force('collision', d3.forceCollide().radius(d => Math.max(24, 26 + d.autovetor_pc1 * 26) + 4));

  // Arestas
  const link = d3ZoomRoot.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(edges)
    .enter().append('line')
    .attr('stroke', d => d.coerencia >= 0.75 ? '#06B6D4' : '#4B5563')
    .attr('stroke-width', d => Math.max(1.5, d.peso * 0.9))
    .attr('stroke-opacity', d => Math.max(0.25, d.coerencia));

  // Nós
  const node = d3ZoomRoot.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node-group')
    .attr('data-id', d => d.id)
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  // Círculos ampliados (raios de 22px a 34px) para conter o texto
  node.append('circle')
    .attr('r', d => Math.max(22, 24 + d.autovetor_pc1 * 24))
    .attr('fill', d => d.cor)
    .attr('stroke', '#FFFFFF')
    .attr('stroke-width', 2.0)
    .attr('stroke-opacity', 0.9)
    .style('cursor', 'grab')
    .style('transition', 'all 0.3s ease')
    .style('filter', d => `drop-shadow(0 0 10px ${d.cor})`);

  // Texto perfeitamente dimensionado e centralizado dentro da bolha
  node.append('text')
    .text(d => {
      const clean = d.id.replace('BRL', '').replace('_Pts', '').replace('_USD', '').replace('_Yield', '').replace('_Index', '');
      return clean.length > 5 ? clean.substring(0, 5) : clean;
    })
    .attr('x', 0)
    .attr('y', 4)
    .attr('text-anchor', 'middle')
    .attr('fill', '#030712')
    .attr('font-size', '11px')
    .attr('font-weight', '800')
    .attr('font-family', 'JetBrains Mono, monospace')
    .style('pointer-events', 'none');

  node.on('mouseover', (event, d) => {
    if (!tooltip) return;
    tooltip.style.display = 'block';
    tooltip.innerHTML = `
      <b style="font-size: 13px; color:#FFFFFF;">${d.nome} (${d.id})</b><br>
      Classe: <span style="color: ${d.cor}; font-weight:700;">${d.classe}</span><br>
      Volatilidade Anual: <b>${d.vol}%</b><br>
      Peso Autovetor PC1: <b>${d.autovetor_pc1.toFixed(3)}</b><br>
      Afinação Sonora: <b>${d.nota} (${d.fundamental_hz} Hz)</b><br>
      <i style="color:#06B6D4; font-size:10px;">Clique para tocar a nota • Arraste para mover</i>
    `;
  })
  .on('mousemove', (event) => {
    if (!tooltip) return;
    const r = container.getBoundingClientRect();
    tooltip.style.left = (event.clientX - r.left + 15) + 'px';
    tooltip.style.top = (event.clientY - r.top - 20) + 'px';
  })
  .on('mouseout', () => {
    if (tooltip) tooltip.style.display = 'none';
  })
  .on('click', (event, d) => {
    window.harmonicusAudio.playNodeTone(d.fundamental_hz, d.nome);
    
    // Pulso no nó clicado
    const circle = d3.select(event.currentTarget).select('circle');
    const origR = Math.max(22, 24 + d.autovetor_pc1 * 24);
    circle
      .transition().duration(120).attr('r', origR * 1.35)
      .transition().duration(250).attr('r', origR);

    // Acender arestas conectadas
    link.transition().duration(180)
      .attr('stroke', l => (l.source.id === d.id || l.target.id === d.id) ? '#F59E0B' : '#374151')
      .attr('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? 3.5 : 1.2)
      .attr('stroke-opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1.0 : 0.15);
  });

  // Tick com contenção suave
  d3GraphSimulation.on('tick', () => {
    nodes.forEach(d => {
      const r = 32;
      d.x = Math.max(r, Math.min(width - r, d.x));
      d.y = Math.max(r, Math.min(height - r, d.y));
    });

    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('transform', d => `translate(${d.x}, ${d.y})`);
  });

  function dragstarted(event, d) {
    if (!event.active) d3GraphSimulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) d3GraphSimulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // Foco padrão da tríade uníssono
  setTimeout(() => {
    updateD3GraphForChord('unison');
  }, 120);
}

function updateD3GraphForBand(bandId) {
  if (!d3SvgSelection) return;
  const links = d3SvgSelection.selectAll('.links line');
  
  if (bandId === 'ultra_high') {
    links.transition().duration(300)
      .attr('stroke', d => (d.source.classe === 'Cripto' && d.target.classe === 'Cripto') ? '#F59E0B' : '#374151')
      .attr('stroke-opacity', d => (d.source.classe === 'Cripto' && d.target.classe === 'Cripto') ? 0.9 : 0.15)
      .attr('stroke-width', d => (d.source.classe === 'Cripto' && d.target.classe === 'Cripto') ? 3 : 1);
  } else if (bandId === 'intraday') {
    links.transition().duration(300)
      .attr('stroke', d => d.coerencia >= 0.70 ? '#06B6D4' : '#374151')
      .attr('stroke-opacity', d => d.coerencia >= 0.70 ? 0.85 : 0.15)
      .attr('stroke-width', d => d.coerencia >= 0.70 ? 2.5 : 1);
  } else if (bandId === 'daily') {
    links.transition().duration(300)
      .attr('stroke', d => d.coerencia >= 0.50 ? '#10B981' : '#4B5563')
      .attr('stroke-opacity', d => Math.max(0.25, d.coerencia))
      .attr('stroke-width', d => Math.max(1.5, d.peso * 0.8));
  } else {
    // Macro secular
    links.transition().duration(300)
      .attr('stroke', d => (d.source.classe === 'Macro' || d.target.classe === 'Macro') ? '#EF4444' : '#374151')
      .attr('stroke-opacity', d => (d.source.classe === 'Macro' || d.target.classe === 'Macro') ? 0.9 : 0.15)
      .attr('stroke-width', d => (d.source.classe === 'Macro' || d.target.classe === 'Macro') ? 3 : 1);
  }
}

// ------------------------------------------------------------------------------
// 8. FOCO DE TRÍADES / ACORDES: DESTAQUE VIBRANTE E OPACIDADE/ESMAECIMENTO GERAL
// ------------------------------------------------------------------------------
function updateD3GraphForChord(chordId) {
  if (!d3SvgSelection) return;
  const nodeGroups = d3SvgSelection.selectAll('.nodes .node-group');
  const linkLines = d3SvgSelection.selectAll('.links line');

  const chordActiveNodes = {
    'unison': ['BTCBRL', 'ETHBRL', 'SOLBRL', 'SP500_Pts', 'IBOV_Pts'],
    'tension': ['VIX_Index', 'BTCBRL', 'US10Y_Yield', 'DXY_Index'],
    'major': ['BTCBRL', 'ETHBRL', 'SOLBRL', 'LINKBRL', 'BNBBRL'],
    'ether': ['USDTBRL', 'EUR_BRL', 'PAXGBRL', 'GOLD_USD']
  };

  const activeList = chordActiveNodes[chordId] || [];

  // Transição de Nós: Ativos da Tríade = Vívidos e Iluminados | Outros Ativos = Opacos e Esmaecidos
  nodeGroups.transition().duration(350)
    .style('opacity', d => activeList.includes(d.id) ? 1.0 : 0.18)
    .style('filter', d => activeList.includes(d.id) ? 'none' : 'grayscale(70%) brightness(0.6)');

  nodeGroups.select('circle').transition().duration(350)
    .attr('stroke-width', d => activeList.includes(d.id) ? 3.5 : 1.2)
    .attr('stroke', d => activeList.includes(d.id) ? '#FFFFFF' : 'rgba(255,255,255,0.3)')
    .style('filter', d => activeList.includes(d.id) ? `drop-shadow(0 0 18px ${d.cor})` : `drop-shadow(0 0 2px ${d.cor})`);

  // Transição de Arestas: Arestas entre nós da tríade ganham destaque ouro neon
  linkLines.transition().duration(350)
    .attr('stroke', l => {
      const isInternal = activeList.includes(l.source.id) && activeList.includes(l.target.id);
      if (isInternal) return '#F59E0B';
      return l.coerencia >= 0.70 ? '#06B6D4' : '#374151';
    })
    .attr('stroke-width', l => {
      const isInternal = activeList.includes(l.source.id) && activeList.includes(l.target.id);
      return isInternal ? 3.5 : 1.2;
    })
    .attr('stroke-opacity', l => {
      const isInternal = activeList.includes(l.source.id) && activeList.includes(l.target.id);
      return isInternal ? 1.0 : 0.06;
    });
}

function renderCWTSlices(slices) {
  const container = document.getElementById('cwtBarsContainer');
  if (!container || !slices || slices.length === 0) return;

  container.innerHTML = slices.map(s => {
    const isNeg = s.energy_db < 0;
    const absVal = Math.min(100, Math.abs(s.energy_db) * 4);
    const color = isNeg ? '#06B6D4' : '#EF4444';
    return `
      <div class="cwt-bar-row">
        <div class="cwt-bar-label"><span>${s.scale}</span> <small>${s.freq}</small></div>
        <div class="cwt-bar-track">
          <div class="cwt-bar-fill" style="width: ${absVal}%; background: ${color};"></div>
        </div>
        <div class="cwt-bar-val" style="color: ${color}">${s.energy_db > 0 ? '+' : ''}${s.energy_db} dB</div>
      </div>
    `;
  }).join('');
}
