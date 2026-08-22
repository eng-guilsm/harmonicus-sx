/**
 * ==============================================================================
 * HARMONICUS SX // PÁGINA 2: SYNTHESIZER & SPECTRAL TOPOLOGY CONTROLLER
 * Radio Tuner Physics, D3.js 26-Node Graph, CRT Oscilloscope & Audio Engine
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHarmonicusSX();
});

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
// 1. NAVEGAÇÃO DE ABAS ENTRE PÁGINA 1 E PÁGINA 2
// ------------------------------------------------------------------------------
function initTabNavigation() {
  const tabBtns = document.querySelectorAll('.nav-tab');
  const pageTactical = document.getElementById('pageTactical');
  const pageHarmonicus = document.getElementById('pageHarmonicus');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetPage = btn.getAttribute('data-page');
      if (targetPage === 'pageTactical') {
        pageTactical.classList.add('active');
        pageHarmonicus.classList.remove('active');
      } else {
        pageHarmonicus.classList.add('active');
        pageTactical.classList.remove('active');
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

  let currentAngle = 0;
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

    // Detectar qual banda está mais próxima do ângulo
    let closestBand = 'daily';
    let minDiff = 999;
    for (const [bId, bDeg] of Object.entries(bandAngles)) {
      const diff = Math.abs(currentAngle - bDeg);
      if (diff < minDiff) {
        minDiff = diff;
        closestBand = bId;
      }
    }

    updateTunerReadout(closestBand, bands);
    markers.forEach(m => {
      if (m.getAttribute('data-band') === closestBand) {
        m.classList.add('active');
      } else {
        m.classList.remove('active');
      }
    });

    window.harmonicusAudio.setBand(closestBand);
  };

  // Mouse / Touch Drag
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

  const onEnd = () => {
    isDragging = false;
  };

  dial.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  dial.addEventListener('touchstart', onStart);
  window.addEventListener('touchmove', onMove);
  window.addEventListener('touchend', onEnd);

  // Mouse Wheel Rotation
  dial.addEventListener('wheel', (e) => {
    e.preventDefault();
    const step = e.deltaY > 0 ? 15 : -15;
    setDialRotation(currentAngle + step);
  });

  // Clicar nos marcadores de texto
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

  // Posição inicial: Diário (24h)
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
      const chordType = btn.getAttribute('data-chord');
      window.harmonicusAudio.playChord(chordType);
    });
  });
}

// ------------------------------------------------------------------------------
// 5. MINI KNOBS DE FÍSICA (LANGEVIN, FOURIER, MORLET)
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

  let dampingVal = 0.50;
  let fourierVal = 20.98;
  let morletVal = -0.59;

  setupMiniKnob('knobDamping', 'valDamping', 0.1, 1.0, 0.50, false, (v) => {
    dampingVal = v;
    window.harmonicusAudio.updatePhysicsParams(dampingVal, fourierVal, morletVal);
  });

  setupMiniKnob('knobFourier', 'valFourier', 5.0, 35.0, 20.98, true, (v) => {
    fourierVal = v;
    window.harmonicusAudio.updatePhysicsParams(dampingVal, fourierVal, morletVal);
  });

  setupMiniKnob('knobMorlet', 'valMorlet', -5.0, 50.0, -0.59, false, (v) => {
    morletVal = v;
    window.harmonicusAudio.updatePhysicsParams(dampingVal, fourierVal, morletVal);
  });
}

// ------------------------------------------------------------------------------
// 6. OSCILOSCÓPIO CRT DE 60 FPS (CANVAS)
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

    // Fundo preto CRT com fade para criar rastro fosforescente
    ctx.fillStyle = 'rgba(2, 4, 8, 0.35)';
    ctx.fillRect(0, 0, w, h);

    // Grade CRT sutil
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

    // Obter dados da Web Audio API ou simular se mutado
    const dataArray = window.harmonicusAudio.getWaveformData();
    const isPlaying = window.harmonicusAudio.isPlaying;

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = isPlaying ? '#10B981' : '#06B6D4';
    ctx.shadowBlur = 10;
    ctx.shadowColor = isPlaying ? '#10B981' : '#06B6D4';

    ctx.beginPath();
    const sliceWidth = w / dataArray.length;
    let x = 0;

    phase += 0.03;

    for (let i = 0; i < dataArray.length; i++) {
      let v = dataArray[i] / 128.0; // 0 a 2
      if (!isPlaying) {
        // Onda quântica harmônica sintética de repouso
        v = 1.0 + 0.22 * Math.sin(i * 0.04 + phase) + 0.08 * Math.cos(i * 0.12 - phase * 1.5);
      }
      const y = (v * h) / 2;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      x += sliceWidth;
    }

    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  renderOsc();
}

// ------------------------------------------------------------------------------
// 7. GRAFO TOPOLÓGICO DE 26 ATIVOS (D3.JS FORCE GRAPH)
// ------------------------------------------------------------------------------
function initD3NetworkGraph(nodes, edges) {
  const container = document.getElementById('networkGraphStage');
  const tooltip = document.getElementById('nodeTooltip');
  if (!container || !window.d3 || nodes.length === 0) return;

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 400;

  // Limpar container
  container.querySelectorAll('svg').forEach(s => s.remove());

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  // Forças de Simulação com centralização e repulsão
  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(d => 140 - (d.coerencia * 70)))
    .force('charge', d3.forceManyBody().strength(-240))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(28));

  // Renderizar Arestas (Links de Coerência)
  const link = svg.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(edges)
    .enter().append('line')
    .attr('stroke', d => d.coerencia >= 0.75 ? '#06B6D4' : '#4B5563')
    .attr('stroke-width', d => Math.max(1, d.peso * 0.8))
    .attr('stroke-opacity', d => Math.max(0.2, d.coerencia));

  // Renderizar Nós (Ativos)
  const node = svg.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(nodes)
    .enter().append('g')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  // Círculo com halo e cor de classe
  node.append('circle')
    .attr('r', d => Math.max(12, 14 + d.autovetor_pc1 * 20))
    .attr('fill', d => d.cor)
    .attr('stroke', '#FFFFFF')
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.85)
    .style('cursor', 'pointer')
    .style('filter', d => `drop-shadow(0 0 8px ${d.cor})`);

  // Texto do Ticker
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

  // Interatividade: Hover & Clique
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
    // Efeito de pulso visual
    d3.select(event.currentTarget).select('circle')
      .transition().duration(150).attr('r', 24)
      .transition().duration(300).attr('r', Math.max(12, 14 + d.autovetor_pc1 * 20));
  });

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('transform', d => `translate(${d.x}, ${d.y})`);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}

// ------------------------------------------------------------------------------
// 8. RENDERIZAÇÃO DAS FATIAS CWT MORLET
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
