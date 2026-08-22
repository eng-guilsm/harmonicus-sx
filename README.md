# 🎼 Harmonicus SX // Portfolio Tactical HUD & Spectral Synthesizer

> **Terminal Quant & Sintetizador Espectral de Mercados Financeiros (Web Audio API & D3.js)**  
> Monitoramento Tático dos 8 Planos de Recuperação Patrimonial do MoneyLab & Sonificação Espectral de 26 Ativos Globais.

---

## 🏛️ Visão Geral do Sistema

O **Harmonicus SX** é uma aplicação web estática de alta fidelidade visual e sonora desenhada para operar em duas frentes complementares:

1. **Página 1 (Portfolio Tactical HUD):**
   * Medidor de proximidade em tempo real dos **8 Planos Oficiais do MoneyLab**.
   * Classificação metrológica: 5 Motores Estruturais de Baixo Risco (Guiana Brasileira, Escudo de Aquiles, Pátria Volátil, Caboclo dos Oráculos, Gravidade Zero) e 3 Motores Táticos de Médio Risco (Corisco da Solana, Duelo de Titãs, Flecha de Sagarana).
   * Cockpit de alocação de custódia na Binance (R$ 1.150 em caixa BRL líquido, Bitcoin, Ouro PAXG e Tether USDT).
   * Monitor de Travas de Ruptura (*Circuit Breakers*, Anti-Faca Caindo e *Weekend Shield*).

2. **Página 2 (Harmonicus SX Spectral Synthesizer):**
   * **Radio Tuner Knob Analógico 3D:** Controle giratório com física de arrasto circular para navegar entre as 4 bandas de Fourier (15m, 4h, 24h, 7d-45d).
   * **Seletor de Acordes & Física Sonora:** 4 modos harmônicos (*Uníssono Estrutural*, *Trítono de Tensão*, *Tríade Maior de Expansão*, *Arpeggio Etéreo*).
   * **Osciloscópio CRT em Tempo Real (60 FPS Canvas):** Renderização de onda de sinal com glow fosforescente alimentada pelo `AnalyserNode` da Web Audio API.
   * **Grafo Topológico Interativo (D3.js):** Rede com os 26 ativos globais, com pesos de aresta proporcionais à coerência de fase e afinação de notas musicais fundamentais (C3, G3, C4, E3, A2, etc.).
   * **Espectrograma CWT Morlet & Propagação Causal STE:** Mapa de calor de energia de choque e vetor de transmissão de informação direcional $BTC \to Altcoins$.

---

## 🔬 Física & Matemática Subjacente

### 1. Afinação Musical dos Ativos (Equal Temperament Scale A4 = 440 Hz)
* **Bitcoin (`BTC`):** Fundamental $C_3$ ($130,81\text{ Hz}$) — Tônica da rede cripto.
* **Ethereum (`ETH`):** Quinta Justa $G_3$ ($196,00\text{ Hz}$) — Coerência de $71,0\%$ com o Bitcoin.
* **Solana (`SOL`):** Oitava Superior $C_4$ ($261,63\text{ Hz}$) — Maior energia harmônica e volatilidade.
* **Ouro Físico (`PAXG`):** Terça Maior $E_3$ ($164,81\text{ Hz}$) — Reserva de estabilidade secular.
* **Dólar (`USDT` / Comercial):** Tônica Neutra $A_2$ ($110,00\text{ Hz}$) — Aterramento e refúgio fiduciário.
* **VIX Volatilidade:** Trítono de Tensão $F^\sharp_3$ ($185,00\text{ Hz}$) — Dissonância de pânico sistêmico.

### 2. Modulação por Parâmetros Físicos
* **Razão de Absorção $PC_1$:** Abre o filtro passa-baixas (*Resonant Low-Pass Filter*) de $200\text{ Hz}$ até $2400\text{ Hz}$. Quanto maior a sincronia de mercado, mais brilhante e uníssono é o som.
* **Atrito de Langevin ($\gamma$):** Controla o fator de qualidade $Q$ da ressonância de pico.
* **Energia Wavelet Morlet ($E_w$):** Dispara ressonadores analógicos e modula a textura da onda quando ocorrem choques de volatilidade.

---

## 🚀 Como Executar Localmente

Como a aplicação é 100% estática (HTML5, CSS3, JavaScript puro, D3.js e Web Audio API), ela não exige compiladores ou bundlers pesados:

```bash
# Navegar até a pasta do projeto
cd harmonicus-sx

# Iniciar um servidor HTTP local simples em Python
python -m http.server 8080

# Abrir no navegador
http://localhost:8080
```

---

## 🌐 Publicação no GitHub Pages

Para publicar este painel como uma aplicação pública acessível via celular ou desktop:

1. Crie um novo repositório público no seu GitHub chamado `harmonicus-sx` (ou `harmonicus-dashboard`).
2. Conecte o repositório local e faça o push:
```bash
git remote add origin https://github.com/eng-guilsm/harmonicus-sx.git
git branch -M main
git push -u origin main
```
3. No GitHub, vá em **Settings $\to$ Pages** e selecione a branch `main` como fonte.
4. Sua aplicação estará no ar em `https://eng-guilsm.github.io/harmonicus-sx/`!

---

## 🛡️ Atualização de Dados ao Vivo

Para atualizar as cotações, os Z-Scores e as métricas espectrais com base nos dados mais recentes do `MoneyBot_Local.db`:

```bash
python ../LabInvest/scratch/export_harmonicus_sx_data.py
```
O script atualiza automaticamente `data/planos_data.js` e `data/harmonicus_sx_data.js`.
