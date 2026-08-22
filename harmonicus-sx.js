/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 2: SYNTHESIZER & SPECTRAL TOPOLOGY CONTROLLER (v2.0)
 * Reatividade Total: Osciloscópio Dinâmico, Grafo D3.js com Fótons e Radio Tuner
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHarmonicusSX();
});

let activeTunerBand = 'daily';
let activeHarmonicChord = 'unison';
let activeDamping = 0.50;
let activeFourier = 20.98;
let activeMorlet = -0.59;

let d3GraphSimulation = null;
let d3SvgSelection = null;
let d3NodesData = [];
let d3EdgesData = [];

function initHarmonicusSX() {
  const data = window.HARMONICUS_SX_DATA || {};

  initTabNavigation();
  initAudioControls();
  initRadioTuner(data.bands || []);
  initChordSelector();
  initPhysicsMiniKnobs();
  initOscilloscope();
  initD3NetworkGraph(data.nodes || [], data.edges || []);
  renderCWTSlices(data.cwt_slices || []);
}

// ------------------------------------------------------------------------------
// 1. NAVEGAÇÃO DE 3 ABAS
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

      // Se foi para a página de cinéticas, re-renderizar canvas para garantir tamanho correto
      if (targetPage === 'pageKinetics' && typeof renderKineticsChart === 'function') {
        setTimeout(() => {
          renderKineticsChart(window.currentKineticsAsset || 'BTCBRL', window.ASSETS_KINETICS_DATA || {});
        }, 50);
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
// 3. SINTONIZADOR DE RÁDIO ANALÓGICO (ROTARY RADIO TUNER KNOB)
// ------------------------------------------------------------------------------
function initRadioTuner(bands) {
  const dial = document.getElementById('tunerDial');
  const bandNameEl = document.getElementById('tunerBandName');
  const bandFreqEl = document.getElementById('tunerBandFreq');
  const bandDescEl = document.getElementById('tunerBandDesc');
  const markers = document.querySelectorAll('.dial-scale-markers span');

  if (!dial) return;

  let currentAngle = 35;
  let isDragging = false;
  let startAngle = 0;
  let startMouseAngle = 0;

  const bandAngles = {
    'ultra_high': -75,
    'intraday': -25,
    'daily': 35,
    'macro': 95
  };

  const getAngleFromCenter = (e) => {
    const rect = dial.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rad = Math.atan2(clientY - centerY, clientX - centerX);
    return rad * (180 / Math.PI);
  };

  const setDialRotation = (deg) => {
    currentAngle = Math.max(-110, Math.min(110, deg));
    dial.style.transform = `rotate(${currentAngle}deg)`;

    let closestBand = 'daily';
    let minDiff = 999;
    for (const [bId, bDeg] of Object.entries(bandAngles)) {
      const diff = Math.abs(currentAngle - bDeg);
      if (diff < minDiff) {
        minDiff = diff;
        closestBand = bId;
      }
    }

    if (activeTunerBand !== closestBand) {
      activeTunerBand = closestBand;
      updateTunerReadout(activeTunerBand, bands);
      markers.forEach(m => {
        if (m.getAttribute('data-band') === activeTunerBand) m.classList.add('active');
        else m.classList.remove('active');
      });

      window.harmonicusAudio.setBand(activeTunerBand);
      updateD3GraphForBand(activeTunerBand);
    }
  };

  const onStart = (e) => {
    isDragging = true;
    startMouseAngle = getAngleFromCenter(e);
    startAngle = currentAngle;
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const mouseAngle = getAngleFromCenter(e);
    const delta = mouseAngle - startMouseAngle;
    setDialRotation(startAngle + delta);
  };

  const onEnd = () => { isDragging = false; };

  dial.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  dial.addEventListener('touchstart', onStart);
  window.addEventListener('touchmove', onMove);
  window.addEventListener('touchend', onEnd);

  dial.addEventListener('wheel', (e) => {
    e.preventDefault();
    const step = e.deltaY > 0 ? 15 : -15;
    setDialRotation(currentAngle + step);
  });

  markers.forEach(m => {
    m.addEventListener('click', () => {
      const bId = m.getAttribute('data-band');
      const targetDeg = bandAngles[bId] || 0;
      setDialRotation(targetDeg);
    });
  });

  function updateTunerReadout(bandId, bandsList) {
    const bandObj = bandsList.find(b => b.id === bandId) || bandsList[2];
    if (bandObj) {
      if (bandNameEl) bandNameEl.textContent = `ONDAS: ${bandObj.nome.toUpperCase()}`;
      if (bandFreqEl) bandFreqEl.textContent = `Banda: ${bandObj.freq_str} | ${bandObj.acorde_nome}`;
      if (bandDescEl) bandDescEl.textContent = bandObj.descricao;
    }
  }

  setDialRotation(35);
}

// ------------------------------------------------------------------------------
// 4. SELETOR DE ACORDES HARMÔNICOS
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
// 5. MINI KNOBS DE FÍSICA
// ------------------------------------------------------------------------------
function initPhysicsMiniKnobs() {
  const setupMiniKnob = (id, valId, min, max, initialVal, isInteger, callback) => {
    const dial = document.getElementById(id);
    const valEl = document.getElementById(valId);
    if (!dial) return;

    let curVal = initialVal;
    let angle = ((curVal - min) / (max - min)) * 240 - 120;
    dial.style.transform = `rotate(${angle}deg)`;

    let isDragging = false;
    let startY = 0;
    let startVal = curVal;

    const onStart = (e) => {
      isDragging = true;
      startY = e.touches ? e.touches[0].clientY : e.clientY;
      startVal = curVal;
      e.preventDefault();
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const deltaY = startY - clientY;
      const range = max - min;
      curVal = Math.max(min, Math.min(max, startVal + (deltaY / 120) * range));
      
      angle = ((curVal - min) / (max - min)) * 240 - 120;
      dial.style.transform = `rotate(${angle}deg)`;

      if (valEl) {
        valEl.textContent = isInteger ? curVal.toFixed(1) : curVal.toFixed(2);
      }
      callback(curVal);
    };

    const onEnd = () => { isDragging = false; };

    dial.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    dial.addEventListener('touchstart', onStart);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  setupMiniKnob('knobDamping', 'valDamping', 0.1, 1.0, 0.50, false, (v) => {
    activeDamping = v;
    window.harmonicusAudio.updatePhysicsParams(activeDamping, activeFourier, activeMorlet);
  });

  setupMiniKnob('knobFourier', 'valFourier', 5.0, 35.0, 20.98, true, (v) => {
    activeFourier = v;
    window.harmonicusAudio.updatePhysicsParams(activeDamping, activeFourier, activeMorlet);
  });

  setupMiniKnob('knobMorlet', 'valMorlet', -5.0, 50.0, -0.59, false, (v) => {
    activeMorlet = v;
    window.harmonicusAudio.updatePhysicsParams(activeDamping, activeFourier, activeMorlet);
  });
}

// ------------------------------------------------------------------------------
// 6. OSCILOSCÓPIO CRT DE 60 FPS COM RESPOSTA VISUAL TOTAL
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

    // Frequência base modulada pelo sintonizador de rádio
    let freqMult = 1.0;
    let speedMult = 1.0;
    switch (activeTunerBand) {
      case 'ultra_high': freqMult = 3.5; speedMult = 2.4; break;
      case 'intraday':   freqMult = 2.0; speedMult = 1.6; break;
      case 'daily':      freqMult = 1.0; speedMult = 1.0; break;
      case 'macro':      freqMult = 0.4; speedMult = 0.4; break;
    }

    phase += 0.03 * speedMult;

    // Cor do raio CRT baseada no acorde
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

    for (let i = 0; i < points; i++) {
      let v = 1.0;

      if (isPlaying && dataArray && dataArray.length > 0) {
        const raw = dataArray[Math.floor((i / points) * dataArray.length)];
        v = raw / 128.0;
      } else {
        // Simulação dinâmica e rica refletindo os controles exatos da interface
        const t = (i * 0.03 * freqMult) + phase;
        const noise = (Math.random() - 0.5) * (activeDamping * 0.25);
        
        if (activeHarmonicChord === 'unison') {
          // Harmônicos perfeitos (C3, G3, C4)
          v = 1.0 + 0.28 * Math.sin(t) + 0.14 * Math.sin(t * 1.5) + 0.07 * Math.sin(t * 2.0) + noise;
        } else if (activeHarmonicChord === 'tension') {
          // Dissonância cortante de trítono (F#3 vs C3) com pulso de dente de serra
          const saw = (t % (Math.PI * 2)) / Math.PI - 1.0;
          v = 1.0 + 0.32 * Math.sin(t) + 0.22 * Math.sin(t * 1.414) + 0.12 * saw + noise * 1.8;
        } else if (activeHarmonicChord === 'major') {
          // Tríade maior brilhante (C, E, G, B)
          v = 1.0 + 0.25 * Math.sin(t) + 0.18 * Math.sin(t * 1.25) + 0.12 * Math.sin(t * 1.5) + noise * 0.5;
        } else {
          // Arpeggio etéreo suave
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
// 7. GRAFO TOPOLÓGICO DOS 26 ATIVOS COM INTERAÇÃO DINÂMICA (D3.JS)
// ------------------------------------------------------------------------------
function initD3NetworkGraph(nodes, edges) {
  const container = document.getElementById('networkGraphStage');
  const tooltip = document.getElementById('nodeTooltip');
  if (!container || !window.d3 || nodes.length === 0) return;

  d3NodesData = nodes;
  d3EdgesData = edges;

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 400;

  container.querySelectorAll('svg').forEach(s => s.remove());

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  d3SvgSelection = svg;

  d3GraphSimulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(d => 140 - (d.coerencia * 70)))
    .force('charge', d3.forceManyBody().strength(-240))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(28));

  // Arestas
  const link = svg.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(edges)
    .enter().append('line')
    .attr('stroke', d => d.coerencia >= 0.75 ? '#06B6D4' : '#4B5563')
    .attr('stroke-width', d => Math.max(1.5, d.peso * 0.8))
    .attr('stroke-opacity', d => Math.max(0.25, d.coerencia));

  // Nós
  const node = svg.append('g')
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

  node.append('circle')
    .attr('r', d => Math.max(12, 14 + d.autovetor_pc1 * 20))
    .attr('fill', d => d.cor)
    .attr('stroke', '#FFFFFF')
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.85)
    .style('cursor', 'pointer')
    .style('filter', d => `drop-shadow(0 0 8px ${d.cor})`);

  node.append('text')
    .text(d => d.id.replace('BRL', '').replace('_Pts', '').replace('_TF', ''))
    .attr('x', 0)
    .attr('y', 4)
    .attr('text-anchor', 'middle')
    .attr('fill', '#030712')
    .attr('font-size', '9px')
    .attr('font-weight', '700')
    .attr('font-family', 'JetBrains Mono')
    .style('pointer-events', 'none');

  node.on('mouseover', (event, d) => {
    if (!tooltip) return;
    tooltip.style.display = 'block';
    tooltip.innerHTML = `
      <b>${d.nome} (${d.id})</b><br>
      Classe: <span style="color: ${d.cor}">${d.classe}</span><br>
      Volatilidade Anual: <b>${d.vol}%</b><br>
      Peso Autovetor PC1: <b>${d.autovetor_pc1.toFixed(3)}</b><br>
      Afinação Sonora: <b>${d.nota} (${d.fundamental_hz} Hz)</b><br>
      <i style="color:#06B6D4; font-size:10px;">Clique para tocar a nota fundamental</i>
    `;
  })
  .on('mousemove', (event) => {
    if (!tooltip) return;
    const rect = container.getBoundingClientRect();
    tooltip.style.left = (event.clientX - rect.left + 15) + 'px';
    tooltip.style.top = (event.clientY - rect.top - 20) + 'px';
  })
  .on('mouseout', () => {
    if (tooltip) tooltip.style.display = 'none';
  })
  .on('click', (event, d) => {
    window.harmonicusAudio.playNodeTone(d.fundamental_hz, d.nome);
    
    // Efeito de pulso no nó clicado
    d3.select(event.currentTarget).select('circle')
      .transition().duration(120).attr('r', 26)
      .transition().duration(250).attr('r', Math.max(12, 14 + d.autovetor_pc1 * 20));

    // Acender arestas conectadas
    link.transition().duration(150)
      .attr('stroke', l => (l.source.id === d.id || l.target.id === d.id) ? '#F59E0B' : '#4B5563')
      .attr('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? 4 : 1.5)
      .attr('stroke-opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1.0 : 0.2);
  });

  d3GraphSimulation.on('tick', () => {
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
}

function updateD3GraphForBand(bandId) {
  if (!d3SvgSelection) return;
  const links = d3SvgSelection.selectAll('.links line');
  
  if (bandId === 'ultra_high') {
    // Foco em Criptos de alta velocidade
    links.transition().duration(300)
      .attr('stroke-opacity', d => (d.source.classe === 'Cripto' && d.target.classe === 'Cripto') ? 0.9 : 0.15)
      .attr('stroke', d => (d.source.classe === 'Cripto' && d.target.classe === 'Cripto') ? '#EC4899' : '#374151');
  } else if (bandId === 'intraday') {
    // Foco em TradFi & Dólar
    links.transition().duration(300)
      .attr('stroke-opacity', d => d.tipo.includes('DOLLAR') || d.tipo.includes('EQUITY') ? 0.95 : 0.2)
      .attr('stroke', d => d.tipo.includes('DOLLAR') ? '#10B981' : '#06B6D4');
  } else if (bandId === 'daily') {
    // Equilíbrio global
    links.transition().duration(300)
      .attr('stroke-opacity', d => Math.max(0.25, d.coerencia))
      .attr('stroke', d => d.coerencia >= 0.75 ? '#06B6D4' : '#4B5563');
  } else {
    // Macro secular (Ouro, VIX, Juros)
    links.transition().duration(300)
      .attr('stroke-opacity', d => (d.source.classe === 'Macro' || d.target.classe === 'Macro' || d.source.classe === 'Commodities') ? 0.95 : 0.15)
      .attr('stroke', d => d.tipo.includes('GUIANA') ? '#F59E0B' : '#EF4444');
  }
}

function updateD3GraphForChord(chordType) {
  if (!d3SvgSelection) return;
  const nodes = d3SvgSelection.selectAll('.node-group');

  nodes.each(function(d) {
    const el = d3.select(this).select('circle');
    let shouldPulse = false;

    if (chordType === 'unison' && ['BTCBRL', 'ETHBRL', 'SOLBRL'].includes(d.id)) shouldPulse = true;
    if (chordType === 'tension' && ['VIX_Index', 'Treasury_10Y', 'BTCBRL'].includes(d.id)) shouldPulse = true;
    if (chordType === 'major' && ['BTCBRL', 'PAXG_Ouro', 'ADABRL', 'ETHBRL'].includes(d.id)) shouldPulse = true;
    if (chordType === 'ether' && ['USDTBRL', 'USD_BRL', 'LINKBRL', 'PAXG_Ouro'].includes(d.id)) shouldPulse = true;

    if (shouldPulse) {
      el.transition().duration(200).attr('r', 24).style('stroke', '#FFFFFF').style('stroke-width', 3)
        .transition().duration(400).attr('r', Math.max(12, 14 + d.autovetor_pc1 * 20)).style('stroke-width', 1.5);
    }
  });
}

// ------------------------------------------------------------------------------
// 8. FATIAS CWT MORLET
// ------------------------------------------------------------------------------
function renderCWTSlices(slices) {
  const container = document.getElementById('cwtBarsContainer');
  if (!container || slices.length === 0) return;

  container.innerHTML = slices.map(s => {
    const isCalm = s.status === 'CALMARIA_ESPECTRAL' || s.status === 'ATERRAMENTO_CAIXA';
    const color = isCalm ? '#10B981' : '#F59E0B';

    return `
      <div class="cwt-row">
        <span class="cwt-ts">${s.timestamp}</span>
        <div class="cwt-track">
          <div class="cwt-seg" style="width: ${Math.min(100, Math.max(15, s.escala_15m * 10))}%; background: ${color};"></div>
        </div>
        <span class="cwt-status" style="color: ${color};">${s.status}</span>
      </div>
    `;
  }).join('');
}
