/**
 * ==============================================================================
 * HARMONICUS SX // WEB AUDIO API SYNTHESIS ENGINE
 * High-Fidelity Physics & Market Signal Sonification Engine
 * ==============================================================================
 */

class HarmonicusAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.analyser = null;
    this.filterNode = null;
    this.reverbNode = null;
    this.isPlaying = false;
    this.volume = 0.5;

    // Synth state
    this.activeDrones = [];
    this.activeChord = 'unison';
    this.currentBand = 'daily';
    this.damping = 0.5;
    this.fourierTension = 20.98;
    this.morletEnergy = -0.59;

    // Frequencies (Equal Temperament A4 = 440Hz)
    this.scale = {
      C2: 65.41,
      A2: 110.00,
      C3: 130.81,
      D3: 146.83,
      E3: 164.81,
      Fs3: 185.00,
      G3: 196.00,
      A3: 220.00,
      B3: 246.94,
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      G4: 392.00
    };
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // Master Gain & Limiter/Compressor
    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
    this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
    this.compressor.ratio.setValueAtTime(8, this.ctx.currentTime);
    this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
    this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

    // Resonant Low-Pass Filter (Modulated by PC1 Absorption Ratio)
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(800, this.ctx.currentTime);
    this.filterNode.Q.setValueAtTime(3.5, this.ctx.currentTime);

    // Analyser Node for 60fps CRT Oscilloscope
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 1024;
    this.analyser.smoothingTimeConstant = 0.85;

    // Convolution Reverb (Synthesized Impulse Response)
    this.reverbNode = this.createSyntheticReverb(2.5, 1.8);

    // Signal Chain: Oscillators -> Filter -> Reverb/Dry -> Compressor -> MasterGain -> Analyser -> Destination
    this.filterNode.connect(this.compressor);
    this.compressor.connect(this.masterGain);
    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  createSyntheticReverb(seconds, decay) {
    const rate = this.ctx.sampleRate;
    const length = rate * seconds;
    const impulse = this.ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      left[i] = n;
      right[i] = n * 0.9;
    }

    const convolver = this.ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
  }

  toggleAudio() {
    if (!this.ctx) this.init();

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  start() {
    if (!this.ctx) this.init();
    this.isPlaying = true;
    this.playChord(this.activeChord);
  }

  stop() {
    this.isPlaying = false;
    this.stopDrones();
  }

  stopDrones() {
    this.activeDrones.forEach(d => {
      try {
        d.gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.1);
        setTimeout(() => {
          d.osc.stop();
          d.osc.disconnect();
        }, 150);
      } catch (e) {}
    });
    this.activeDrones = [];
  }

  playChord(chordType) {
    this.activeChord = chordType;
    if (!this.isPlaying || !this.ctx) return;
    this.stopDrones();

    let freqs = [];
    switch (chordType) {
      case 'unison':
        // C3 (BTC), G3 (ETH), C4 (SOL) - Resonância Estrutural
        freqs = [this.scale.C3, this.scale.G3, this.scale.C4];
        break;
      case 'tension':
        // C3 (BTC), F#3 (VIX Tritone), A#2 (US10Y) - Pânico / Alarme
        freqs = [this.scale.C3, this.scale.Fs3, 116.54];
        break;
      case 'major':
        // C3 (BTC), E3 (PAXG/ADA), G3 (ETH), B3 (AVAX) - Fluxo Causal Positivo
        freqs = [this.scale.C3, this.scale.E3, this.scale.G3, this.scale.B3];
        break;
      case 'ether':
        // A2 (USDT), C3 (BTC), E3 (Ouro), A3 (LINK) - Calmaria / Renda Passiva
        freqs = [this.scale.A2, this.scale.C3, this.scale.E3, this.scale.A3];
        break;
      default:
        freqs = [this.scale.C3, this.scale.G3];
    }

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Formas de onda quânticas baseadas na posição harmônica
      osc.type = idx === 0 ? 'sine' : (idx === 1 ? 'triangle' : 'sawtooth');
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Micro detune analógico para dar calor e ambiência vintage
      const detuneCents = (idx - 1) * 3.5;
      osc.detune.setValueAtTime(detuneCents, this.ctx.currentTime);

      const amp = idx === 0 ? 0.22 : 0.12;
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(amp, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.filterNode);
      osc.start();

      this.activeDrones.push({ osc, gain });
    });
  }

  // Sintonizador de Rádio Harmônico (Tuner Knob)
  setBand(bandId) {
    this.currentBand = bandId;
    if (!this.ctx || !this.filterNode) return;

    let cutoff = 800;
    switch (bandId) {
      case 'ultra_high': cutoff = 1600; break;
      case 'intraday':   cutoff = 1000; break;
      case 'daily':      cutoff = 600; break;
      case 'macro':      cutoff = 320; break;
    }

    // Variação suave do filtro analógico com feedback sonoro
    this.filterNode.frequency.setTargetAtTime(cutoff, this.ctx.currentTime, 0.2);

    // Efeito de static/tuning sweep suave ao mudar de rádio
    if (this.isPlaying) {
      this.playTuningChime(cutoff);
    }
  }

  playTuningChime(freq) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 0.5, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.filterNode);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  // Toca nota fundamental quando o usuário clica em um nó do grafo
  playNodeTone(freqHz, assetName) {
    if (!this.ctx) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freqHz || 220, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.28, this.ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.85);

    osc.connect(gain);
    gain.connect(this.filterNode);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.9);
  }

  // Atualiza parâmetros de física (Langevin, Fourier, Morlet)
  updatePhysicsParams(damping, fourier, morlet) {
    this.damping = damping;
    this.fourierTension = fourier;
    this.morletEnergy = morlet;

    if (this.filterNode && this.ctx) {
      // Damping controla o fator de qualidade Q (ressonância de pico)
      const qVal = Math.max(0.5, Math.min(8.0, 1.0 / (damping + 0.1)));
      this.filterNode.Q.setTargetAtTime(qVal, this.ctx.currentTime, 0.1);
    }
  }

  // Dados para o Osciloscópio de 60fps
  getWaveformData() {
    if (!this.analyser) return new Uint8Array(512).fill(128);
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(dataArray);
    return dataArray;
  }
}

// Instância global única
window.harmonicusAudio = new HarmonicusAudioEngine();
