// Gerado automaticamente pelo MoneyLab Data Engine (2026-08-22 23:18:58)
window.PLANOS_TACTICAL_DATA = [
  {
    "id": 1,
    "nome": "Plano Guiana Brasileira",
    "badge": "🥇 Macro Rotação",
    "categoria": "baixo_risco",
    "par": "PAXG <-> BTC",
    "lote_brl": 100.0,
    "lucro_min_pct": 1.5,
    "gatilho_desc": "Z <= -1.65σ (Topo BTC -> Ouro) / Z >= +1.65σ (Fundo BTC -> BTC)",
    "trava_ruptura": "Modulação CWT Morlet (Ew < 50: Lote 100% | Ew >= 50: Lote 50%)",
    "cooldown_horas": 4.0,
    "valor_atual_str": "Ratio 0.05955 (Z: -1.34σ)",
    "alvo_str": "Ratio <= 0.05580 (Alvo BTC: ~R$ 424.000)",
    "distancia_display": "+6.7% de distância do alvo",
    "proximidade_score": 81,
    "status": "SENTINELA_QUENTE",
    "icone": "🥇",
    "cor": "#F59E0B",
    "descricao_executiva": "Arbitragem secular entre a reserva milenar de valor (Ouro Físico Tokenizado PAXG) e a reserva digital soberana (Bitcoin). Monetiza topos eufóricos de BTC girando para Ouro e recompra BTC com desconto nos fundos de pânico.",
    "condicoes_ativacao": "• Z-Score do par PAXG/BTC ultrapassa ±1.65σ na janela de 168 horas.<br>• Ratio PAXG/BTC atinge bandas extremas (0.05580 ou 0.07520).<br>• Confirmação de cointegração pelo teste Engle-Granger (p < 0.05).",
    "limitacoes_trava": "• <b>Trava de Pânico (PC1 > 70%):</b> Reduz tamanho de lote pela metade se a correlação global colapsar.<br>• <b>Trava Wavelet (Ew >= 50):</b> Pausa execução durante tempestades de volatilidade de cauda longa.<br>• <b>Cooldown Mandatório:</b> 4 horas de intervalo mínimo entre execuções.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 83,
          "metric": "Ratio: 0.05951 (Z: -1.38σ)"
        },
        {
          "label": "19:19",
          "score": 85,
          "metric": "Ratio: 0.05939 (Z: -1.40σ)"
        },
        {
          "label": "19:19",
          "score": 83,
          "metric": "Ratio: 0.05955 (Z: -1.37σ)"
        },
        {
          "label": "19:20",
          "score": 85,
          "metric": "Ratio: 0.05939 (Z: -1.40σ)"
        },
        {
          "label": "19:20",
          "score": 84,
          "metric": "Ratio: 0.05949 (Z: -1.38σ)"
        },
        {
          "label": "19:21",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "19:21",
          "score": 83,
          "metric": "Ratio: 0.05950 (Z: -1.38σ)"
        },
        {
          "label": "19:22",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "19:22",
          "score": 83,
          "metric": "Ratio: 0.05952 (Z: -1.37σ)"
        },
        {
          "label": "19:23",
          "score": 85,
          "metric": "Ratio: 0.05939 (Z: -1.40σ)"
        },
        {
          "label": "19:23",
          "score": 83,
          "metric": "Ratio: 0.05955 (Z: -1.37σ)"
        },
        {
          "label": "19:24",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "19:24",
          "score": 83,
          "metric": "Ratio: 0.05949 (Z: -1.38σ)"
        },
        {
          "label": "19:25",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "19:26",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "19:26",
          "score": 84,
          "metric": "Ratio: 0.05948 (Z: -1.38σ)"
        },
        {
          "label": "19:27",
          "score": 85,
          "metric": "Ratio: 0.05938 (Z: -1.40σ)"
        },
        {
          "label": "19:27",
          "score": 83,
          "metric": "Ratio: 0.05950 (Z: -1.37σ)"
        },
        {
          "label": "19:28",
          "score": 85,
          "metric": "Ratio: 0.05938 (Z: -1.40σ)"
        },
        {
          "label": "19:28",
          "score": 83,
          "metric": "Ratio: 0.05952 (Z: -1.37σ)"
        },
        {
          "label": "19:29",
          "score": 85,
          "metric": "Ratio: 0.05939 (Z: -1.40σ)"
        },
        {
          "label": "19:29",
          "score": 83,
          "metric": "Ratio: 0.05952 (Z: -1.37σ)"
        },
        {
          "label": "19:30",
          "score": 85,
          "metric": "Ratio: 0.05938 (Z: -1.40σ)"
        },
        {
          "label": "19:30",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.36σ)"
        },
        {
          "label": "19:31",
          "score": 85,
          "metric": "Ratio: 0.05937 (Z: -1.40σ)"
        },
        {
          "label": "19:31",
          "score": 83,
          "metric": "Ratio: 0.05954 (Z: -1.36σ)"
        },
        {
          "label": "19:32",
          "score": 85,
          "metric": "Ratio: 0.05935 (Z: -1.40σ)"
        },
        {
          "label": "19:32",
          "score": 82,
          "metric": "Ratio: 0.05958 (Z: -1.35σ)"
        },
        {
          "label": "19:33",
          "score": 85,
          "metric": "Ratio: 0.05936 (Z: -1.40σ)"
        },
        {
          "label": "19:33",
          "score": 82,
          "metric": "Ratio: 0.05959 (Z: -1.35σ)"
        },
        {
          "label": "19:34",
          "score": 85,
          "metric": "Ratio: 0.05936 (Z: -1.40σ)"
        },
        {
          "label": "19:34",
          "score": 81,
          "metric": "Ratio: 0.05962 (Z: -1.34σ)"
        },
        {
          "label": "19:35",
          "score": 85,
          "metric": "Ratio: 0.05935 (Z: -1.40σ)"
        },
        {
          "label": "19:35",
          "score": 82,
          "metric": "Ratio: 0.05960 (Z: -1.35σ)"
        },
        {
          "label": "19:36",
          "score": 85,
          "metric": "Ratio: 0.05935 (Z: -1.40σ)"
        },
        {
          "label": "19:36",
          "score": 82,
          "metric": "Ratio: 0.05960 (Z: -1.35σ)"
        },
        {
          "label": "19:37",
          "score": 85,
          "metric": "Ratio: 0.05935 (Z: -1.40σ)"
        },
        {
          "label": "19:37",
          "score": 82,
          "metric": "Ratio: 0.05958 (Z: -1.35σ)"
        },
        {
          "label": "19:38",
          "score": 85,
          "metric": "Ratio: 0.05933 (Z: -1.41σ)"
        },
        {
          "label": "19:38",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.36σ)"
        },
        {
          "label": "19:39",
          "score": 85,
          "metric": "Ratio: 0.05933 (Z: -1.40σ)"
        },
        {
          "label": "19:39",
          "score": 82,
          "metric": "Ratio: 0.05958 (Z: -1.35σ)"
        },
        {
          "label": "19:40",
          "score": 85,
          "metric": "Ratio: 0.05933 (Z: -1.40σ)"
        },
        {
          "label": "19:40",
          "score": 82,
          "metric": "Ratio: 0.05958 (Z: -1.35σ)"
        },
        {
          "label": "19:41",
          "score": 85,
          "metric": "Ratio: 0.05934 (Z: -1.40σ)"
        },
        {
          "label": "19:41",
          "score": 82,
          "metric": "Ratio: 0.05958 (Z: -1.35σ)"
        },
        {
          "label": "19:42",
          "score": 85,
          "metric": "Ratio: 0.05933 (Z: -1.40σ)"
        },
        {
          "label": "19:42",
          "score": 82,
          "metric": "Ratio: 0.05957 (Z: -1.35σ)"
        },
        {
          "label": "19:43",
          "score": 85,
          "metric": "Ratio: 0.05930 (Z: -1.41σ)"
        },
        {
          "label": "19:43",
          "score": 82,
          "metric": "Ratio: 0.05953 (Z: -1.36σ)"
        },
        {
          "label": "19:44",
          "score": 85,
          "metric": "Ratio: 0.05931 (Z: -1.41σ)"
        },
        {
          "label": "19:44",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.36σ)"
        },
        {
          "label": "19:45",
          "score": 85,
          "metric": "Ratio: 0.05930 (Z: -1.41σ)"
        },
        {
          "label": "19:46",
          "score": 85,
          "metric": "Ratio: 0.05929 (Z: -1.41σ)"
        },
        {
          "label": "19:47",
          "score": 85,
          "metric": "Ratio: 0.05929 (Z: -1.41σ)"
        },
        {
          "label": "19:47",
          "score": 82,
          "metric": "Ratio: 0.05953 (Z: -1.36σ)"
        },
        {
          "label": "19:48",
          "score": 85,
          "metric": "Ratio: 0.05929 (Z: -1.41σ)"
        },
        {
          "label": "19:48",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.35σ)"
        },
        {
          "label": "19:49",
          "score": 85,
          "metric": "Ratio: 0.05929 (Z: -1.41σ)"
        },
        {
          "label": "19:49",
          "score": 82,
          "metric": "Ratio: 0.05953 (Z: -1.35σ)"
        },
        {
          "label": "19:50",
          "score": 85,
          "metric": "Ratio: 0.05928 (Z: -1.41σ)"
        },
        {
          "label": "19:50",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.35σ)"
        },
        {
          "label": "19:51",
          "score": 85,
          "metric": "Ratio: 0.05927 (Z: -1.41σ)"
        },
        {
          "label": "19:51",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.35σ)"
        },
        {
          "label": "19:52",
          "score": 85,
          "metric": "Ratio: 0.05927 (Z: -1.41σ)"
        },
        {
          "label": "19:52",
          "score": 83,
          "metric": "Ratio: 0.05949 (Z: -1.36σ)"
        },
        {
          "label": "19:52",
          "score": 83,
          "metric": "Ratio: 0.05948 (Z: -1.36σ)"
        },
        {
          "label": "19:53",
          "score": 82,
          "metric": "Ratio: 0.05950 (Z: -1.36σ)"
        },
        {
          "label": "19:54",
          "score": 82,
          "metric": "Ratio: 0.05951 (Z: -1.36σ)"
        },
        {
          "label": "19:55",
          "score": 82,
          "metric": "Ratio: 0.05952 (Z: -1.35σ)"
        },
        {
          "label": "19:56",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.35σ)"
        },
        {
          "label": "19:57",
          "score": 81,
          "metric": "Ratio: 0.05956 (Z: -1.34σ)"
        },
        {
          "label": "19:58",
          "score": 81,
          "metric": "Ratio: 0.05959 (Z: -1.34σ)"
        },
        {
          "label": "19:59",
          "score": 81,
          "metric": "Ratio: 0.05957 (Z: -1.34σ)"
        },
        {
          "label": "20:01",
          "score": 81,
          "metric": "Ratio: 0.05959 (Z: -1.34σ)"
        },
        {
          "label": "20:01",
          "score": 81,
          "metric": "Ratio: 0.05959 (Z: -1.34σ)"
        },
        {
          "label": "20:02",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.35σ)"
        },
        {
          "label": "20:03",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.35σ)"
        },
        {
          "label": "20:04",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.35σ)"
        },
        {
          "label": "20:05",
          "score": 82,
          "metric": "Ratio: 0.05953 (Z: -1.35σ)"
        },
        {
          "label": "20:06",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.35σ)"
        },
        {
          "label": "20:07",
          "score": 82,
          "metric": "Ratio: 0.05954 (Z: -1.35σ)"
        },
        {
          "label": "20:08",
          "score": 82,
          "metric": "Ratio: 0.05952 (Z: -1.35σ)"
        },
        {
          "label": "20:09",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        },
        {
          "label": "20:10",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        },
        {
          "label": "20:12",
          "score": 81,
          "metric": "Ratio: 0.05957 (Z: -1.34σ)"
        },
        {
          "label": "20:13",
          "score": 81,
          "metric": "Ratio: 0.05959 (Z: -1.34σ)"
        },
        {
          "label": "20:14",
          "score": 81,
          "metric": "Ratio: 0.05959 (Z: -1.33σ)"
        },
        {
          "label": "20:15",
          "score": 81,
          "metric": "Ratio: 0.05958 (Z: -1.34σ)"
        },
        {
          "label": "20:16",
          "score": 81,
          "metric": "Ratio: 0.05958 (Z: -1.34σ)"
        },
        {
          "label": "20:17",
          "score": 81,
          "metric": "Ratio: 0.05957 (Z: -1.34σ)"
        },
        {
          "label": "20:18",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 100,
          "metric": "Ratio: 0.05930 (Z: -2.24σ)"
        },
        {
          "label": "20:39",
          "score": 100,
          "metric": "Ratio: 0.05930 (Z: -2.22σ)"
        },
        {
          "label": "20:59",
          "score": 100,
          "metric": "Ratio: 0.05923 (Z: -2.22σ)"
        },
        {
          "label": "21:19",
          "score": 100,
          "metric": "Ratio: 0.05911 (Z: -2.24σ)"
        },
        {
          "label": "21:39",
          "score": 100,
          "metric": "Ratio: 0.05892 (Z: -2.27σ)"
        },
        {
          "label": "21:59",
          "score": 100,
          "metric": "Ratio: 0.05861 (Z: -2.34σ)"
        },
        {
          "label": "22:19",
          "score": 100,
          "metric": "Ratio: 0.05857 (Z: -2.33σ)"
        },
        {
          "label": "22:39",
          "score": 100,
          "metric": "Ratio: 0.05866 (Z: -2.29σ)"
        },
        {
          "label": "22:59",
          "score": 100,
          "metric": "Ratio: 0.05866 (Z: -2.27σ)"
        },
        {
          "label": "23:19",
          "score": 100,
          "metric": "Ratio: 0.05853 (Z: -2.29σ)"
        },
        {
          "label": "23:39",
          "score": 100,
          "metric": "Ratio: 0.05879 (Z: -2.21σ)"
        },
        {
          "label": "23:59",
          "score": 100,
          "metric": "Ratio: 0.05871 (Z: -2.21σ)"
        },
        {
          "label": "00:19",
          "score": 100,
          "metric": "Ratio: 0.05890 (Z: -2.15σ)"
        },
        {
          "label": "00:39",
          "score": 100,
          "metric": "Ratio: 0.05898 (Z: -2.12σ)"
        },
        {
          "label": "00:59",
          "score": 100,
          "metric": "Ratio: 0.05897 (Z: -2.10σ)"
        },
        {
          "label": "01:19",
          "score": 100,
          "metric": "Ratio: 0.05894 (Z: -2.10σ)"
        },
        {
          "label": "01:39",
          "score": 100,
          "metric": "Ratio: 0.05894 (Z: -2.09σ)"
        },
        {
          "label": "01:59",
          "score": 100,
          "metric": "Ratio: 0.05903 (Z: -2.05σ)"
        },
        {
          "label": "02:19",
          "score": 100,
          "metric": "Ratio: 0.05886 (Z: -2.08σ)"
        },
        {
          "label": "02:39",
          "score": 100,
          "metric": "Ratio: 0.05868 (Z: -2.11σ)"
        },
        {
          "label": "02:59",
          "score": 100,
          "metric": "Ratio: 0.05865 (Z: -2.10σ)"
        },
        {
          "label": "03:19",
          "score": 100,
          "metric": "Ratio: 0.05856 (Z: -2.11σ)"
        },
        {
          "label": "03:39",
          "score": 100,
          "metric": "Ratio: 0.05850 (Z: -2.11σ)"
        },
        {
          "label": "03:59",
          "score": 100,
          "metric": "Ratio: 0.05868 (Z: -2.05σ)"
        },
        {
          "label": "04:19",
          "score": 100,
          "metric": "Ratio: 0.05878 (Z: -2.02σ)"
        },
        {
          "label": "04:39",
          "score": 100,
          "metric": "Ratio: 0.05850 (Z: -2.07σ)"
        },
        {
          "label": "04:59",
          "score": 100,
          "metric": "Ratio: 0.05863 (Z: -2.03σ)"
        },
        {
          "label": "05:19",
          "score": 100,
          "metric": "Ratio: 0.05960 (Z: -1.79σ)"
        },
        {
          "label": "05:39",
          "score": 100,
          "metric": "Ratio: 0.05950 (Z: -1.80σ)"
        },
        {
          "label": "05:59",
          "score": 100,
          "metric": "Ratio: 0.05933 (Z: -1.83σ)"
        },
        {
          "label": "06:19",
          "score": 100,
          "metric": "Ratio: 0.05945 (Z: -1.79σ)"
        },
        {
          "label": "06:39",
          "score": 100,
          "metric": "Ratio: 0.05925 (Z: -1.83σ)"
        },
        {
          "label": "06:59",
          "score": 100,
          "metric": "Ratio: 0.05926 (Z: -1.82σ)"
        },
        {
          "label": "07:19",
          "score": 100,
          "metric": "Ratio: 0.05942 (Z: -1.77σ)"
        },
        {
          "label": "07:39",
          "score": 100,
          "metric": "Ratio: 0.05932 (Z: -1.78σ)"
        },
        {
          "label": "07:59",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -1.76σ)"
        },
        {
          "label": "08:19",
          "score": 100,
          "metric": "Ratio: 0.05936 (Z: -1.76σ)"
        },
        {
          "label": "08:39",
          "score": 100,
          "metric": "Ratio: 0.05949 (Z: -1.72σ)"
        },
        {
          "label": "08:59",
          "score": 100,
          "metric": "Ratio: 0.05947 (Z: -1.71σ)"
        },
        {
          "label": "09:19",
          "score": 100,
          "metric": "Ratio: 0.05939 (Z: -1.72σ)"
        },
        {
          "label": "09:39",
          "score": 100,
          "metric": "Ratio: 0.05949 (Z: -1.69σ)"
        },
        {
          "label": "09:59",
          "score": 100,
          "metric": "Ratio: 0.05955 (Z: -1.67σ)"
        },
        {
          "label": "10:19",
          "score": 97,
          "metric": "Ratio: 0.05980 (Z: -1.60σ)"
        },
        {
          "label": "10:39",
          "score": 100,
          "metric": "Ratio: 0.05954 (Z: -1.65σ)"
        },
        {
          "label": "10:59",
          "score": 99,
          "metric": "Ratio: 0.05960 (Z: -1.63σ)"
        },
        {
          "label": "11:19",
          "score": 97,
          "metric": "Ratio: 0.05970 (Z: -1.60σ)"
        },
        {
          "label": "11:39",
          "score": 99,
          "metric": "Ratio: 0.05951 (Z: -1.64σ)"
        },
        {
          "label": "11:59",
          "score": 99,
          "metric": "Ratio: 0.05950 (Z: -1.63σ)"
        },
        {
          "label": "12:19",
          "score": 100,
          "metric": "Ratio: 0.05941 (Z: -1.64σ)"
        },
        {
          "label": "12:39",
          "score": 99,
          "metric": "Ratio: 0.05942 (Z: -1.63σ)"
        },
        {
          "label": "12:59",
          "score": 99,
          "metric": "Ratio: 0.05938 (Z: -1.64σ)"
        },
        {
          "label": "13:19",
          "score": 97,
          "metric": "Ratio: 0.05949 (Z: -1.60σ)"
        },
        {
          "label": "13:39",
          "score": 97,
          "metric": "Ratio: 0.05949 (Z: -1.60σ)"
        },
        {
          "label": "13:59",
          "score": 97,
          "metric": "Ratio: 0.05940 (Z: -1.61σ)"
        },
        {
          "label": "14:14",
          "score": 95,
          "metric": "Ratio: 0.05956 (Z: -1.56σ)"
        },
        {
          "label": "14:24",
          "score": 94,
          "metric": "Ratio: 0.05957 (Z: -1.56σ)"
        },
        {
          "label": "14:34",
          "score": 95,
          "metric": "Ratio: 0.05950 (Z: -1.56σ)"
        },
        {
          "label": "14:44",
          "score": 93,
          "metric": "Ratio: 0.05960 (Z: -1.53σ)"
        },
        {
          "label": "14:55",
          "score": 92,
          "metric": "Ratio: 0.05960 (Z: -1.53σ)"
        },
        {
          "label": "15:05",
          "score": 93,
          "metric": "Ratio: 0.05955 (Z: -1.53σ)"
        },
        {
          "label": "15:15",
          "score": 94,
          "metric": "Ratio: 0.05942 (Z: -1.55σ)"
        },
        {
          "label": "15:25",
          "score": 94,
          "metric": "Ratio: 0.05939 (Z: -1.55σ)"
        },
        {
          "label": "15:36",
          "score": 94,
          "metric": "Ratio: 0.05939 (Z: -1.54σ)"
        },
        {
          "label": "15:46",
          "score": 93,
          "metric": "Ratio: 0.05943 (Z: -1.53σ)"
        },
        {
          "label": "15:57",
          "score": 92,
          "metric": "Ratio: 0.05943 (Z: -1.52σ)"
        },
        {
          "label": "16:07",
          "score": 92,
          "metric": "Ratio: 0.05943 (Z: -1.51σ)"
        },
        {
          "label": "16:18",
          "score": 91,
          "metric": "Ratio: 0.05948 (Z: -1.50σ)"
        },
        {
          "label": "16:28",
          "score": 91,
          "metric": "Ratio: 0.05943 (Z: -1.50σ)"
        },
        {
          "label": "16:38",
          "score": 92,
          "metric": "Ratio: 0.05933 (Z: -1.52σ)"
        },
        {
          "label": "16:48",
          "score": 92,
          "metric": "Ratio: 0.05929 (Z: -1.52σ)"
        },
        {
          "label": "16:59",
          "score": 92,
          "metric": "Ratio: 0.05928 (Z: -1.51σ)"
        },
        {
          "label": "17:09",
          "score": 91,
          "metric": "Ratio: 0.05929 (Z: -1.50σ)"
        },
        {
          "label": "17:20",
          "score": 90,
          "metric": "Ratio: 0.05938 (Z: -1.48σ)"
        },
        {
          "label": "17:30",
          "score": 88,
          "metric": "Ratio: 0.05948 (Z: -1.45σ)"
        },
        {
          "label": "17:41",
          "score": 88,
          "metric": "Ratio: 0.05943 (Z: -1.45σ)"
        },
        {
          "label": "17:51",
          "score": 89,
          "metric": "Ratio: 0.05935 (Z: -1.46σ)"
        },
        {
          "label": "18:01",
          "score": 87,
          "metric": "Ratio: 0.05943 (Z: -1.44σ)"
        },
        {
          "label": "18:12",
          "score": 87,
          "metric": "Ratio: 0.05944 (Z: -1.43σ)"
        },
        {
          "label": "18:22",
          "score": 87,
          "metric": "Ratio: 0.05936 (Z: -1.44σ)"
        },
        {
          "label": "18:32",
          "score": 85,
          "metric": "Ratio: 0.05951 (Z: -1.40σ)"
        },
        {
          "label": "18:42",
          "score": 83,
          "metric": "Ratio: 0.05962 (Z: -1.37σ)"
        },
        {
          "label": "18:53",
          "score": 85,
          "metric": "Ratio: 0.05949 (Z: -1.40σ)"
        },
        {
          "label": "19:03",
          "score": 86,
          "metric": "Ratio: 0.05939 (Z: -1.41σ)"
        },
        {
          "label": "19:13",
          "score": 84,
          "metric": "Ratio: 0.05949 (Z: -1.38σ)"
        },
        {
          "label": "19:23",
          "score": 83,
          "metric": "Ratio: 0.05955 (Z: -1.37σ)"
        },
        {
          "label": "19:34",
          "score": 85,
          "metric": "Ratio: 0.05936 (Z: -1.40σ)"
        },
        {
          "label": "19:44",
          "score": 85,
          "metric": "Ratio: 0.05931 (Z: -1.41σ)"
        },
        {
          "label": "19:56",
          "score": 82,
          "metric": "Ratio: 0.05955 (Z: -1.35σ)"
        },
        {
          "label": "20:17",
          "score": 81,
          "metric": "Ratio: 0.05957 (Z: -1.34σ)"
        },
        {
          "label": "20:18",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 71,
          "metric": "Ratio: 0.07075 (Z: +1.16σ)"
        },
        {
          "label": "15/08 22:00",
          "score": 64,
          "metric": "Ratio: 0.07069 (Z: +1.06σ)"
        },
        {
          "label": "16/08 00:00",
          "score": 68,
          "metric": "Ratio: 0.07075 (Z: +1.12σ)"
        },
        {
          "label": "16/08 02:00",
          "score": 67,
          "metric": "Ratio: 0.07076 (Z: +1.11σ)"
        },
        {
          "label": "16/08 04:00",
          "score": 60,
          "metric": "Ratio: 0.07069 (Z: +0.99σ)"
        },
        {
          "label": "16/08 06:00",
          "score": 66,
          "metric": "Ratio: 0.07078 (Z: +1.08σ)"
        },
        {
          "label": "16/08 08:00",
          "score": 64,
          "metric": "Ratio: 0.07078 (Z: +1.06σ)"
        },
        {
          "label": "16/08 10:00",
          "score": 67,
          "metric": "Ratio: 0.07083 (Z: +1.10σ)"
        },
        {
          "label": "16/08 12:00",
          "score": 64,
          "metric": "Ratio: 0.07081 (Z: +1.06σ)"
        },
        {
          "label": "16/08 14:00",
          "score": 57,
          "metric": "Ratio: 0.07075 (Z: +0.95σ)"
        },
        {
          "label": "16/08 16:00",
          "score": 39,
          "metric": "Ratio: 0.07054 (Z: +0.65σ)"
        },
        {
          "label": "16/08 18:00",
          "score": 49,
          "metric": "Ratio: 0.07066 (Z: +0.80σ)"
        },
        {
          "label": "16/08 20:00",
          "score": 51,
          "metric": "Ratio: 0.07069 (Z: +0.83σ)"
        },
        {
          "label": "16/08 22:00",
          "score": 70,
          "metric": "Ratio: 0.07092 (Z: +1.15σ)"
        },
        {
          "label": "17/08 00:00",
          "score": 72,
          "metric": "Ratio: 0.07096 (Z: +1.19σ)"
        },
        {
          "label": "17/08 02:00",
          "score": 50,
          "metric": "Ratio: 0.07072 (Z: +0.82σ)"
        },
        {
          "label": "17/08 04:00",
          "score": 16,
          "metric": "Ratio: 0.07039 (Z: +0.27σ)"
        },
        {
          "label": "17/08 06:00",
          "score": 6,
          "metric": "Ratio: 0.07030 (Z: +0.10σ)"
        },
        {
          "label": "17/08 08:00",
          "score": 16,
          "metric": "Ratio: 0.07042 (Z: +0.27σ)"
        },
        {
          "label": "17/08 10:00",
          "score": 26,
          "metric": "Ratio: 0.07051 (Z: +0.43σ)"
        },
        {
          "label": "17/08 12:00",
          "score": 11,
          "metric": "Ratio: 0.07022 (Z: -0.18σ)"
        },
        {
          "label": "17/08 14:00",
          "score": 22,
          "metric": "Ratio: 0.07016 (Z: -0.36σ)"
        },
        {
          "label": "17/08 16:00",
          "score": 85,
          "metric": "Ratio: 0.06970 (Z: -1.40σ)"
        },
        {
          "label": "17/08 18:00",
          "score": 100,
          "metric": "Ratio: 0.06944 (Z: -1.98σ)"
        },
        {
          "label": "17/08 20:00",
          "score": 100,
          "metric": "Ratio: 0.06951 (Z: -1.79σ)"
        },
        {
          "label": "17/08 22:00",
          "score": 100,
          "metric": "Ratio: 0.06954 (Z: -1.73σ)"
        },
        {
          "label": "18/08 00:00",
          "score": 100,
          "metric": "Ratio: 0.06939 (Z: -2.02σ)"
        },
        {
          "label": "18/08 02:00",
          "score": 90,
          "metric": "Ratio: 0.06964 (Z: -1.48σ)"
        },
        {
          "label": "18/08 04:00",
          "score": 80,
          "metric": "Ratio: 0.06972 (Z: -1.33σ)"
        },
        {
          "label": "18/08 06:00",
          "score": 100,
          "metric": "Ratio: 0.06953 (Z: -1.73σ)"
        },
        {
          "label": "18/08 08:00",
          "score": 93,
          "metric": "Ratio: 0.06962 (Z: -1.53σ)"
        },
        {
          "label": "18/08 10:00",
          "score": 84,
          "metric": "Ratio: 0.06969 (Z: -1.38σ)"
        },
        {
          "label": "18/08 12:00",
          "score": 100,
          "metric": "Ratio: 0.06956 (Z: -1.71σ)"
        },
        {
          "label": "18/08 14:00",
          "score": 100,
          "metric": "Ratio: 0.06920 (Z: -2.53σ)"
        },
        {
          "label": "18/08 16:00",
          "score": 100,
          "metric": "Ratio: 0.06916 (Z: -2.51σ)"
        },
        {
          "label": "18/08 18:00",
          "score": 100,
          "metric": "Ratio: 0.06913 (Z: -2.46σ)"
        },
        {
          "label": "18/08 20:00",
          "score": 100,
          "metric": "Ratio: 0.06927 (Z: -2.07σ)"
        },
        {
          "label": "18/08 22:00",
          "score": 100,
          "metric": "Ratio: 0.06933 (Z: -1.88σ)"
        },
        {
          "label": "19/08 00:00",
          "score": 100,
          "metric": "Ratio: 0.06932 (Z: -1.86σ)"
        },
        {
          "label": "19/08 02:00",
          "score": 89,
          "metric": "Ratio: 0.06950 (Z: -1.47σ)"
        },
        {
          "label": "19/08 04:00",
          "score": 83,
          "metric": "Ratio: 0.06954 (Z: -1.37σ)"
        },
        {
          "label": "19/08 06:00",
          "score": 78,
          "metric": "Ratio: 0.06958 (Z: -1.28σ)"
        },
        {
          "label": "19/08 08:00",
          "score": 73,
          "metric": "Ratio: 0.06961 (Z: -1.20σ)"
        },
        {
          "label": "19/08 10:00",
          "score": 82,
          "metric": "Ratio: 0.06952 (Z: -1.36σ)"
        },
        {
          "label": "19/08 12:00",
          "score": 98,
          "metric": "Ratio: 0.06936 (Z: -1.62σ)"
        },
        {
          "label": "19/08 14:00",
          "score": 100,
          "metric": "Ratio: 0.06848 (Z: -3.12σ)"
        },
        {
          "label": "19/08 16:00",
          "score": 100,
          "metric": "Ratio: 0.06565 (Z: -6.69σ)"
        },
        {
          "label": "19/08 18:00",
          "score": 100,
          "metric": "Ratio: 0.06604 (Z: -5.02σ)"
        },
        {
          "label": "19/08 20:00",
          "score": 100,
          "metric": "Ratio: 0.06563 (Z: -4.76σ)"
        },
        {
          "label": "19/08 22:00",
          "score": 100,
          "metric": "Ratio: 0.06526 (Z: -4.43σ)"
        },
        {
          "label": "20/08 00:00",
          "score": 100,
          "metric": "Ratio: 0.06489 (Z: -4.24σ)"
        },
        {
          "label": "20/08 02:00",
          "score": 100,
          "metric": "Ratio: 0.06505 (Z: -3.70σ)"
        },
        {
          "label": "20/08 04:00",
          "score": 100,
          "metric": "Ratio: 0.06520 (Z: -3.31σ)"
        },
        {
          "label": "20/08 06:00",
          "score": 100,
          "metric": "Ratio: 0.06492 (Z: -3.25σ)"
        },
        {
          "label": "20/08 08:00",
          "score": 100,
          "metric": "Ratio: 0.06375 (Z: -3.74σ)"
        },
        {
          "label": "20/08 10:00",
          "score": 100,
          "metric": "Ratio: 0.06291 (Z: -3.86σ)"
        },
        {
          "label": "20/08 12:00",
          "score": 100,
          "metric": "Ratio: 0.06329 (Z: -3.34σ)"
        },
        {
          "label": "20/08 14:00",
          "score": 100,
          "metric": "Ratio: 0.06345 (Z: -3.02σ)"
        },
        {
          "label": "20/08 16:00",
          "score": 100,
          "metric": "Ratio: 0.06292 (Z: -3.07σ)"
        },
        {
          "label": "20/08 18:00",
          "score": 100,
          "metric": "Ratio: 0.06263 (Z: -2.99σ)"
        },
        {
          "label": "20/08 20:00",
          "score": 100,
          "metric": "Ratio: 0.06259 (Z: -2.83σ)"
        },
        {
          "label": "20/08 22:00",
          "score": 100,
          "metric": "Ratio: 0.06260 (Z: -2.67σ)"
        },
        {
          "label": "21/08 00:00",
          "score": 100,
          "metric": "Ratio: 0.06186 (Z: -2.82σ)"
        },
        {
          "label": "21/08 02:00",
          "score": 100,
          "metric": "Ratio: 0.06120 (Z: -2.89σ)"
        },
        {
          "label": "21/08 04:00",
          "score": 100,
          "metric": "Ratio: 0.06106 (Z: -2.78σ)"
        },
        {
          "label": "21/08 06:00",
          "score": 100,
          "metric": "Ratio: 0.06089 (Z: -2.68σ)"
        },
        {
          "label": "21/08 08:00",
          "score": 100,
          "metric": "Ratio: 0.05966 (Z: -2.92σ)"
        },
        {
          "label": "21/08 10:00",
          "score": 100,
          "metric": "Ratio: 0.05898 (Z: -2.94σ)"
        },
        {
          "label": "21/08 12:00",
          "score": 100,
          "metric": "Ratio: 0.05984 (Z: -2.53σ)"
        },
        {
          "label": "21/08 14:00",
          "score": 100,
          "metric": "Ratio: 0.05968 (Z: -2.45σ)"
        },
        {
          "label": "21/08 16:00",
          "score": 100,
          "metric": "Ratio: 0.05947 (Z: -2.39σ)"
        },
        {
          "label": "21/08 18:00",
          "score": 100,
          "metric": "Ratio: 0.05929 (Z: -2.33σ)"
        },
        {
          "label": "21/08 20:00",
          "score": 100,
          "metric": "Ratio: 0.05929 (Z: -2.24σ)"
        },
        {
          "label": "21/08 22:00",
          "score": 100,
          "metric": "Ratio: 0.05862 (Z: -2.31σ)"
        },
        {
          "label": "22/08 00:00",
          "score": 100,
          "metric": "Ratio: 0.05888 (Z: -2.15σ)"
        },
        {
          "label": "22/08 02:00",
          "score": 100,
          "metric": "Ratio: 0.05884 (Z: -2.08σ)"
        },
        {
          "label": "22/08 04:00",
          "score": 100,
          "metric": "Ratio: 0.05861 (Z: -2.06σ)"
        },
        {
          "label": "22/08 06:00",
          "score": 100,
          "metric": "Ratio: 0.05937 (Z: -1.81σ)"
        },
        {
          "label": "22/08 08:00",
          "score": 100,
          "metric": "Ratio: 0.05938 (Z: -1.75σ)"
        },
        {
          "label": "22/08 10:00",
          "score": 97,
          "metric": "Ratio: 0.05982 (Z: -1.60σ)"
        },
        {
          "label": "22/08 12:00",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -1.65σ)"
        },
        {
          "label": "22/08 14:00",
          "score": 95,
          "metric": "Ratio: 0.05955 (Z: -1.56σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 94,
          "metric": "Ratio: 0.05939 (Z: -1.56σ)"
        },
        {
          "label": "22/08 16:00",
          "score": 91,
          "metric": "Ratio: 0.05947 (Z: -1.50σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 89,
          "metric": "Ratio: 0.05939 (Z: -1.47σ)"
        },
        {
          "label": "22/08 18:00",
          "score": 87,
          "metric": "Ratio: 0.05939 (Z: -1.43σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 85,
          "metric": "Ratio: 0.05940 (Z: -1.40σ)"
        },
        {
          "label": "22/08 20:00",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 16,
          "metric": "Ratio: 0.06857 (Z: -0.27σ)"
        },
        {
          "label": "24/07",
          "score": 26,
          "metric": "Ratio: 0.06837 (Z: -0.43σ)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Ratio: 0.06867 (Z: +0.01σ)"
        },
        {
          "label": "24/07",
          "score": 62,
          "metric": "Ratio: 0.06940 (Z: +1.02σ)"
        },
        {
          "label": "25/07",
          "score": 74,
          "metric": "Ratio: 0.06952 (Z: +1.23σ)"
        },
        {
          "label": "25/07",
          "score": 79,
          "metric": "Ratio: 0.06956 (Z: +1.30σ)"
        },
        {
          "label": "25/07",
          "score": 54,
          "metric": "Ratio: 0.06926 (Z: +0.90σ)"
        },
        {
          "label": "26/07",
          "score": 44,
          "metric": "Ratio: 0.06914 (Z: +0.72σ)"
        },
        {
          "label": "26/07",
          "score": 39,
          "metric": "Ratio: 0.06909 (Z: +0.64σ)"
        },
        {
          "label": "26/07",
          "score": 33,
          "metric": "Ratio: 0.06900 (Z: +0.55σ)"
        },
        {
          "label": "27/07",
          "score": 20,
          "metric": "Ratio: 0.06834 (Z: -0.33σ)"
        },
        {
          "label": "27/07",
          "score": 9,
          "metric": "Ratio: 0.06863 (Z: +0.14σ)"
        },
        {
          "label": "27/07",
          "score": 18,
          "metric": "Ratio: 0.06875 (Z: +0.30σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "Ratio: 0.07027 (Z: +2.22σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "Ratio: 0.07017 (Z: +1.83σ)"
        },
        {
          "label": "28/07",
          "score": 68,
          "metric": "Ratio: 0.06972 (Z: +1.13σ)"
        },
        {
          "label": "29/07",
          "score": 75,
          "metric": "Ratio: 0.06986 (Z: +1.23σ)"
        },
        {
          "label": "29/07",
          "score": 26,
          "metric": "Ratio: 0.06932 (Z: +0.43σ)"
        },
        {
          "label": "29/07",
          "score": 97,
          "metric": "Ratio: 0.07016 (Z: +1.61σ)"
        },
        {
          "label": "30/07",
          "score": 33,
          "metric": "Ratio: 0.06952 (Z: +0.54σ)"
        },
        {
          "label": "30/07",
          "score": 52,
          "metric": "Ratio: 0.06879 (Z: -0.86σ)"
        },
        {
          "label": "30/07",
          "score": 48,
          "metric": "Ratio: 0.06883 (Z: -0.80σ)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Ratio: 0.06924 (Z: -0.08σ)"
        },
        {
          "label": "31/07",
          "score": 57,
          "metric": "Ratio: 0.06980 (Z: +0.95σ)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "Ratio: 0.07050 (Z: +2.02σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "Ratio: 0.07050 (Z: +1.76σ)"
        },
        {
          "label": "01/08",
          "score": 91,
          "metric": "Ratio: 0.07044 (Z: +1.50σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "Ratio: 0.07095 (Z: +2.03σ)"
        },
        {
          "label": "02/08",
          "score": 36,
          "metric": "Ratio: 0.07003 (Z: +0.59σ)"
        },
        {
          "label": "02/08",
          "score": 59,
          "metric": "Ratio: 0.07036 (Z: +0.98σ)"
        },
        {
          "label": "02/08",
          "score": 34,
          "metric": "Ratio: 0.07013 (Z: +0.57σ)"
        },
        {
          "label": "03/08",
          "score": 65,
          "metric": "Ratio: 0.07053 (Z: +1.08σ)"
        },
        {
          "label": "03/08",
          "score": 89,
          "metric": "Ratio: 0.07085 (Z: +1.47σ)"
        },
        {
          "label": "03/08",
          "score": 32,
          "metric": "Ratio: 0.06965 (Z: -0.53σ)"
        },
        {
          "label": "04/08",
          "score": 26,
          "metric": "Ratio: 0.06971 (Z: -0.43σ)"
        },
        {
          "label": "04/08",
          "score": 30,
          "metric": "Ratio: 0.06966 (Z: -0.50σ)"
        },
        {
          "label": "04/08",
          "score": 48,
          "metric": "Ratio: 0.06947 (Z: -0.80σ)"
        },
        {
          "label": "05/08",
          "score": 40,
          "metric": "Ratio: 0.06952 (Z: -0.67σ)"
        },
        {
          "label": "05/08",
          "score": 70,
          "metric": "Ratio: 0.06925 (Z: -1.16σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "Ratio: 0.06880 (Z: -1.83σ)"
        },
        {
          "label": "06/08",
          "score": 81,
          "metric": "Ratio: 0.06904 (Z: -1.33σ)"
        },
        {
          "label": "06/08",
          "score": 70,
          "metric": "Ratio: 0.06911 (Z: -1.16σ)"
        },
        {
          "label": "06/08",
          "score": 65,
          "metric": "Ratio: 0.06921 (Z: -1.07σ)"
        },
        {
          "label": "07/08",
          "score": 50,
          "metric": "Ratio: 0.06940 (Z: -0.82σ)"
        },
        {
          "label": "07/08",
          "score": 100,
          "metric": "Ratio: 0.06852 (Z: -2.17σ)"
        },
        {
          "label": "07/08",
          "score": 99,
          "metric": "Ratio: 0.06873 (Z: -1.63σ)"
        },
        {
          "label": "08/08",
          "score": 96,
          "metric": "Ratio: 0.06865 (Z: -1.59σ)"
        },
        {
          "label": "08/08",
          "score": 84,
          "metric": "Ratio: 0.06868 (Z: -1.39σ)"
        },
        {
          "label": "08/08",
          "score": 80,
          "metric": "Ratio: 0.06865 (Z: -1.32σ)"
        },
        {
          "label": "09/08",
          "score": 55,
          "metric": "Ratio: 0.06886 (Z: -0.90σ)"
        },
        {
          "label": "09/08",
          "score": 60,
          "metric": "Ratio: 0.06876 (Z: -0.98σ)"
        },
        {
          "label": "09/08",
          "score": 69,
          "metric": "Ratio: 0.06859 (Z: -1.14σ)"
        },
        {
          "label": "10/08",
          "score": 53,
          "metric": "Ratio: 0.06870 (Z: -0.88σ)"
        },
        {
          "label": "10/08",
          "score": 48,
          "metric": "Ratio: 0.06873 (Z: -0.79σ)"
        },
        {
          "label": "10/08",
          "score": 58,
          "metric": "Ratio: 0.06949 (Z: +0.95σ)"
        },
        {
          "label": "11/08",
          "score": 73,
          "metric": "Ratio: 0.06955 (Z: +1.20σ)"
        },
        {
          "label": "11/08",
          "score": 46,
          "metric": "Ratio: 0.06934 (Z: +0.76σ)"
        },
        {
          "label": "11/08",
          "score": 100,
          "metric": "Ratio: 0.07001 (Z: +2.23σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "Ratio: 0.06994 (Z: +1.85σ)"
        },
        {
          "label": "12/08",
          "score": 77,
          "metric": "Ratio: 0.06971 (Z: +1.26σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "Ratio: 0.07019 (Z: +1.95σ)"
        },
        {
          "label": "13/08",
          "score": 89,
          "metric": "Ratio: 0.07006 (Z: +1.47σ)"
        },
        {
          "label": "13/08",
          "score": 89,
          "metric": "Ratio: 0.07015 (Z: +1.47σ)"
        },
        {
          "label": "13/08",
          "score": 98,
          "metric": "Ratio: 0.07035 (Z: +1.61σ)"
        },
        {
          "label": "14/08",
          "score": 91,
          "metric": "Ratio: 0.07037 (Z: +1.50σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "Ratio: 0.07094 (Z: +2.06σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "Ratio: 0.07089 (Z: +1.75σ)"
        },
        {
          "label": "15/08",
          "score": 79,
          "metric": "Ratio: 0.07068 (Z: +1.30σ)"
        },
        {
          "label": "15/08",
          "score": 85,
          "metric": "Ratio: 0.07086 (Z: +1.40σ)"
        },
        {
          "label": "15/08",
          "score": 68,
          "metric": "Ratio: 0.07073 (Z: +1.13σ)"
        },
        {
          "label": "16/08",
          "score": 63,
          "metric": "Ratio: 0.07073 (Z: +1.03σ)"
        },
        {
          "label": "16/08",
          "score": 64,
          "metric": "Ratio: 0.07082 (Z: +1.06σ)"
        },
        {
          "label": "16/08",
          "score": 55,
          "metric": "Ratio: 0.07074 (Z: +0.90σ)"
        },
        {
          "label": "17/08",
          "score": 11,
          "metric": "Ratio: 0.07034 (Z: +0.18σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Ratio: 0.07028 (Z: -0.07σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "Ratio: 0.06945 (Z: -1.92σ)"
        },
        {
          "label": "18/08",
          "score": 88,
          "metric": "Ratio: 0.06966 (Z: -1.46σ)"
        },
        {
          "label": "18/08",
          "score": 94,
          "metric": "Ratio: 0.06963 (Z: -1.56σ)"
        },
        {
          "label": "18/08",
          "score": 100,
          "metric": "Ratio: 0.06930 (Z: -1.99σ)"
        },
        {
          "label": "19/08",
          "score": 77,
          "metric": "Ratio: 0.06959 (Z: -1.27σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "Ratio: 0.06902 (Z: -2.24σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "Ratio: 0.06539 (Z: -4.83σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06505 (Z: -3.34σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06319 (Z: -3.32σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06270 (Z: -2.74σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.06100 (Z: -2.75σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.05953 (Z: -2.58σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.05925 (Z: -2.22σ)"
        },
        {
          "label": "22/08",
          "score": 100,
          "metric": "Ratio: 0.05859 (Z: -2.04σ)"
        },
        {
          "label": "22/08",
          "score": 99,
          "metric": "Ratio: 0.05937 (Z: -1.64σ)"
        },
        {
          "label": "22/08",
          "score": 89,
          "metric": "Ratio: 0.05936 (Z: -1.47σ)"
        },
        {
          "label": "22/08",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 49,
          "metric": "Ratio: 0.04210 (Z: -0.81σ)"
        },
        {
          "label": "26/08/25",
          "score": 63,
          "metric": "Ratio: 0.04389 (Z: +1.05σ)"
        },
        {
          "label": "30/08/25",
          "score": 83,
          "metric": "Ratio: 0.04481 (Z: +1.37σ)"
        },
        {
          "label": "03/09/25",
          "score": 77,
          "metric": "Ratio: 0.04366 (Z: -1.27σ)"
        },
        {
          "label": "07/09/25",
          "score": 34,
          "metric": "Ratio: 0.04396 (Z: -0.56σ)"
        },
        {
          "label": "11/09/25",
          "score": 100,
          "metric": "Ratio: 0.04286 (Z: -1.99σ)"
        },
        {
          "label": "15/09/25",
          "score": 41,
          "metric": "Ratio: 0.04248 (Z: -0.68σ)"
        },
        {
          "label": "19/09/25",
          "score": 50,
          "metric": "Ratio: 0.04246 (Z: +0.83σ)"
        },
        {
          "label": "23/09/25",
          "score": 100,
          "metric": "Ratio: 0.04350 (Z: +1.93σ)"
        },
        {
          "label": "27/09/25",
          "score": 79,
          "metric": "Ratio: 0.04448 (Z: +1.30σ)"
        },
        {
          "label": "01/10/25",
          "score": 100,
          "metric": "Ratio: 0.04181 (Z: -2.29σ)"
        },
        {
          "label": "05/10/25",
          "score": 67,
          "metric": "Ratio: 0.04032 (Z: -1.11σ)"
        },
        {
          "label": "09/10/25",
          "score": 60,
          "metric": "Ratio: 0.04073 (Z: +0.98σ)"
        },
        {
          "label": "13/10/25",
          "score": 29,
          "metric": "Ratio: 0.04257 (Z: +0.47σ)"
        },
        {
          "label": "17/10/25",
          "score": 98,
          "metric": "Ratio: 0.04529 (Z: +1.62σ)"
        },
        {
          "label": "21/10/25",
          "score": 52,
          "metric": "Ratio: 0.04400 (Z: -0.86σ)"
        },
        {
          "label": "25/10/25",
          "score": 67,
          "metric": "Ratio: 0.04384 (Z: -1.11σ)"
        },
        {
          "label": "29/10/25",
          "score": 17,
          "metric": "Ratio: 0.04373 (Z: +0.27σ)"
        },
        {
          "label": "02/11/25",
          "score": 40,
          "metric": "Ratio: 0.04427 (Z: +0.66σ)"
        },
        {
          "label": "06/11/25",
          "score": 95,
          "metric": "Ratio: 0.04746 (Z: +1.58σ)"
        },
        {
          "label": "10/11/25",
          "score": 86,
          "metric": "Ratio: 0.04580 (Z: -1.42σ)"
        },
        {
          "label": "03/12/25",
          "score": 33,
          "metric": "Ratio: 0.05113 (Z: +0.55σ)"
        },
        {
          "label": "07/12/25",
          "score": 23,
          "metric": "Ratio: 0.05296 (Z: +0.38σ)"
        },
        {
          "label": "18/01/26",
          "score": 83,
          "metric": "Ratio: 0.05004 (Z: -1.36σ)"
        },
        {
          "label": "22/01/26",
          "score": 60,
          "metric": "Ratio: 0.05264 (Z: +0.99σ)"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "Ratio: 0.05269 (Z: +0.01σ)"
        },
        {
          "label": "01/02/26",
          "score": 100,
          "metric": "Ratio: 0.05897 (Z: +2.06σ)"
        },
        {
          "label": "06/02/26",
          "score": 100,
          "metric": "Ratio: 0.06926 (Z: +2.34σ)"
        },
        {
          "label": "10/02/26",
          "score": 34,
          "metric": "Ratio: 0.06575 (Z: +0.57σ)"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "Ratio: 0.06585 (Z: +0.04σ)"
        },
        {
          "label": "21/02/26",
          "score": 40,
          "metric": "Ratio: 0.06610 (Z: -0.67σ)"
        },
        {
          "label": "25/02/26",
          "score": 33,
          "metric": "Ratio: 0.06825 (Z: +0.54σ)"
        },
        {
          "label": "02/03/26",
          "score": 41,
          "metric": "Ratio: 0.06708 (Z: -0.67σ)"
        },
        {
          "label": "07/03/26",
          "score": 7,
          "metric": "Ratio: 0.06639 (Z: +0.11σ)"
        },
        {
          "label": "11/03/26",
          "score": 39,
          "metric": "Ratio: 0.06427 (Z: -0.65σ)"
        },
        {
          "label": "16/03/26",
          "score": 100,
          "metric": "Ratio: 0.06227 (Z: -1.82σ)"
        },
        {
          "label": "20/03/26",
          "score": 76,
          "metric": "Ratio: 0.06492 (Z: +1.26σ)"
        },
        {
          "label": "25/03/26",
          "score": 21,
          "metric": "Ratio: 0.06392 (Z: -0.34σ)"
        },
        {
          "label": "30/03/26",
          "score": 47,
          "metric": "Ratio: 0.06689 (Z: +0.77σ)"
        },
        {
          "label": "03/04/26",
          "score": 23,
          "metric": "Ratio: 0.06726 (Z: +0.38σ)"
        },
        {
          "label": "08/04/26",
          "score": 100,
          "metric": "Ratio: 0.06324 (Z: -3.24σ)"
        },
        {
          "label": "12/04/26",
          "score": 35,
          "metric": "Ratio: 0.06312 (Z: -0.58σ)"
        },
        {
          "label": "16/04/26",
          "score": 60,
          "metric": "Ratio: 0.06114 (Z: -0.99σ)"
        },
        {
          "label": "20/04/26",
          "score": 47,
          "metric": "Ratio: 0.05993 (Z: -0.78σ)"
        },
        {
          "label": "24/04/26",
          "score": 38,
          "metric": "Ratio: 0.05895 (Z: -0.64σ)"
        },
        {
          "label": "29/04/26",
          "score": 29,
          "metric": "Ratio: 0.05911 (Z: +0.49σ)"
        },
        {
          "label": "03/05/26",
          "score": 83,
          "metric": "Ratio: 0.05812 (Z: -1.37σ)"
        },
        {
          "label": "07/05/26",
          "score": 20,
          "metric": "Ratio: 0.05732 (Z: -0.32σ)"
        },
        {
          "label": "13/05/26",
          "score": 100,
          "metric": "Ratio: 0.05763 (Z: +1.98σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "Ratio: 0.05946 (Z: +2.31σ)"
        },
        {
          "label": "22/05/26",
          "score": 13,
          "metric": "Ratio: 0.05893 (Z: +0.22σ)"
        },
        {
          "label": "26/05/26",
          "score": 18,
          "metric": "Ratio: 0.05955 (Z: +0.30σ)"
        },
        {
          "label": "30/05/26",
          "score": 58,
          "metric": "Ratio: 0.06151 (Z: +0.95σ)"
        },
        {
          "label": "04/06/26",
          "score": 100,
          "metric": "Ratio: 0.07103 (Z: +3.42σ)"
        },
        {
          "label": "08/06/26",
          "score": 33,
          "metric": "Ratio: 0.07078 (Z: +0.55σ)"
        },
        {
          "label": "12/06/26",
          "score": 98,
          "metric": "Ratio: 0.06994 (Z: -1.62σ)"
        },
        {
          "label": "16/06/26",
          "score": 87,
          "metric": "Ratio: 0.06790 (Z: -1.43σ)"
        },
        {
          "label": "20/06/26",
          "score": 64,
          "metric": "Ratio: 0.07029 (Z: +1.06σ)"
        },
        {
          "label": "24/06/26",
          "score": 75,
          "metric": "Ratio: 0.07096 (Z: +1.23σ)"
        },
        {
          "label": "28/06/26",
          "score": 59,
          "metric": "Ratio: 0.07369 (Z: +0.98σ)"
        },
        {
          "label": "02/07/26",
          "score": 41,
          "metric": "Ratio: 0.07347 (Z: -0.67σ)"
        },
        {
          "label": "06/07/26",
          "score": 91,
          "metric": "Ratio: 0.07043 (Z: -1.50σ)"
        },
        {
          "label": "10/07/26",
          "score": 100,
          "metric": "Ratio: 0.06981 (Z: -1.89σ)"
        },
        {
          "label": "14/07/26",
          "score": 65,
          "metric": "Ratio: 0.07121 (Z: +1.08σ)"
        },
        {
          "label": "18/07/26",
          "score": 6,
          "metric": "Ratio: 0.06972 (Z: -0.09σ)"
        },
        {
          "label": "22/07/26",
          "score": 100,
          "metric": "Ratio: 0.06756 (Z: -1.84σ)"
        },
        {
          "label": "26/07/26",
          "score": 41,
          "metric": "Ratio: 0.06911 (Z: +0.67σ)"
        },
        {
          "label": "30/07/26",
          "score": 27,
          "metric": "Ratio: 0.06946 (Z: +0.45σ)"
        },
        {
          "label": "03/08/26",
          "score": 59,
          "metric": "Ratio: 0.07046 (Z: +0.98σ)"
        },
        {
          "label": "07/08/26",
          "score": 54,
          "metric": "Ratio: 0.06935 (Z: -0.90σ)"
        },
        {
          "label": "11/08/26",
          "score": 69,
          "metric": "Ratio: 0.06953 (Z: +1.14σ)"
        },
        {
          "label": "15/08/26",
          "score": 84,
          "metric": "Ratio: 0.07073 (Z: +1.39σ)"
        },
        {
          "label": "19/08/26",
          "score": 80,
          "metric": "Ratio: 0.06957 (Z: -1.32σ)"
        },
        {
          "label": "22/08/26",
          "score": 81,
          "metric": "Ratio: 0.05955 (Z: -1.34σ)"
        }
      ]
    }
  },
  {
    "id": 2,
    "nome": "Plano Escudo de Aquiles",
    "badge": "🛡️ VIX Dip-Hunter",
    "categoria": "baixo_risco",
    "par": "BRL -> BTC",
    "lote_brl": 200.0,
    "lucro_min_pct": 2.0,
    "gatilho_desc": "VIX >= 22.50 E (PC1 >= 40% ou S <= 1.75)",
    "trava_ruptura": "Anti-Faca Caindo: Exige desaceleração de onda Ew < 50.0",
    "cooldown_horas": 4.0,
    "valor_atual_str": "VIX = 15.13 pts",
    "alvo_str": "VIX >= 22.50 pts (Pânico Global)",
    "distancia_display": "+7.37 pts de estresse no VIX",
    "proximidade_score": 67,
    "status": "AGUARDANDO_PANICO",
    "icone": "🛡️",
    "cor": "#10B981",
    "descricao_executiva": "Caçador de capitulação macroeconômica. Aproveita picos de aversão a risco no mercado global de ações (índice VIX) para efetuar compras cirúrgicas de Bitcoin com caixa BRL em fundos de liquidação forçada.",
    "condicoes_ativacao": "• Índice VIX sobe acima de 22.50 pontos base.<br>• Coerência sistêmica PC1 >= 40% indicando desova indiscriminada de ativos.<br>• Entropia Espectral S <= 1.75 comprovando sincronização de pânico.",
    "limitacoes_trava": "• <b>Filtro Anti-Faca Caindo:</b> Proíbe compras se a energia wavelet Ew estiver acelerando (> 50.0).<br>• <b>Trava de Caixa Líquido:</b> Preserva reserva mínima de 30% em BRL para suporte estrutural.<br>• <b>Cooldown:</b> 4 horas.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:20",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:20",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:21",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:21",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:22",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:22",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:23",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:23",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:24",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:24",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:27",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:27",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:28",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:28",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:29",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:29",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:30",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:30",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:31",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:31",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:32",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:32",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:33",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:33",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:34",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:34",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:35",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:35",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:36",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:36",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:37",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:37",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:38",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:38",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:40",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:40",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:41",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:41",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:42",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:42",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:43",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:43",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:44",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:44",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:45",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:46",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:47",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:47",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:48",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:48",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:49",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:49",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:50",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:50",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:51",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:51",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:52",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:52",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:52",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:53",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:54",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:55",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:56",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:57",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:58",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:01",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:01",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:02",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:03",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:04",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:05",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:06",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:09",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:10",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:12",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:13",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:14",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:15",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:16",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:17",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:18",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "23:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "23:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "23:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "00:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "00:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "00:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13:19",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13:39",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14:14",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14:24",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14:34",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14:44",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14:55",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:05",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:15",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:36",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:46",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15:57",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:18",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:28",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:38",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:48",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16:59",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17:09",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17:20",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17:30",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17:41",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17:51",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:01",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:12",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:22",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:32",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:42",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18:53",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:03",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:13",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:23",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:34",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:44",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19:56",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:17",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20:18",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08 22:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 00:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 02:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 04:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 06:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 08:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 10:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 12:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 14:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 15:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 16:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 17:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 18:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 19:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08 20:00",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "24/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "24/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "24/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "27/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "27/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "27/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "28/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "28/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "28/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "29/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "29/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "29/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "31/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "31/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "31/07",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/08/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/08/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "23/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "27/09/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "05/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "09/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "29/10/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/11/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/11/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/11/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/12/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/12/25",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/01/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/01/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "28/01/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "01/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "21/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/02/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "25/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/03/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "24/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "29/04/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "13/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "17/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/05/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "04/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "08/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "12/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "16/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "20/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "24/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "28/06/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "02/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "06/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "10/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "14/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "18/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "26/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "30/07/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "03/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "07/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "11/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "15/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "19/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        },
        {
          "label": "22/08/26",
          "score": 67,
          "metric": "VIX: 15.13 pts"
        }
      ]
    }
  },
  {
    "id": 3,
    "nome": "Plano Pátria Volátil",
    "badge": "💵 Dollar-Peg PTAX",
    "categoria": "baixo_risco",
    "par": "BRL <-> USDT",
    "lote_brl": 200.0,
    "lucro_min_pct": 0.8,
    "gatilho_desc": "Desconto USDT >= R$ 0.0400 vs PTAX Comercial",
    "trava_ruptura": "Ancorado no ágio estrutural histórico de 79.6% do tempo",
    "cooldown_horas": 4.0,
    "valor_atual_str": "USDT R$ 5.1582 (Spread: +0.0216)",
    "alvo_str": "Spread <= -R$ 0.0400 vs PTAX",
    "distancia_display": "Faltam R$ 0.0616 de desconto",
    "proximidade_score": 5,
    "status": "AGUARDANDO_DESCONTO",
    "icone": "💵",
    "cor": "#3B82F6",
    "descricao_executiva": "Arbitragem de estabilidade cambial. Compra Tether (USDT) quando o spread em relação ao Dólar Comercial PTAX fica abaixo de -R$ 0,0400, aproveitando o prêmio estrutural histórico do dólar cripto.",
    "condicoes_ativacao": "• Preço do USDT Spot na Binance fica pelo menos R$ 0,0400 mais barato que o USD PTAX oficial.<br>• Volume de livro de ofertas com profundidade > R$ 50.000 no bid.",
    "limitacoes_trava": "• <b>Trava de Descolamento de Peg:</b> Veta compras se USDT global cair abaixo de $0.985 USD.<br>• <b>Trava de Spread:</b> Exige retorno mínimo de 0.80% líquido de taxas.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "Spread: +0.0252 (USDT R$ 5.162)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "Spread: +0.0246 (USDT R$ 5.161)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "Spread: +0.0245 (USDT R$ 5.161)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "Spread: +0.0233 (USDT R$ 5.160)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "Spread: +0.0246 (USDT R$ 5.161)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "Spread: +0.0246 (USDT R$ 5.161)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "Spread: +0.0246 (USDT R$ 5.161)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "Spread: +0.0242 (USDT R$ 5.161)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "Spread: +0.0243 (USDT R$ 5.161)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:45",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:46",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "19:54",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:55",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "19:56",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "19:57",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "19:58",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "19:59",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:01",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:01",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:02",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:03",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:04",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:05",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:06",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:07",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:08",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:09",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:10",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:12",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:14",
          "score": 5,
          "metric": "Spread: +0.0217 (USDT R$ 5.158)"
        },
        {
          "label": "20:15",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:16",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 5,
          "metric": "Spread: +0.0252 (USDT R$ 5.162)"
        },
        {
          "label": "20:39",
          "score": 5,
          "metric": "Spread: +0.0215 (USDT R$ 5.158)"
        },
        {
          "label": "20:59",
          "score": 5,
          "metric": "Spread: +0.0203 (USDT R$ 5.157)"
        },
        {
          "label": "21:19",
          "score": 5,
          "metric": "Spread: +0.0186 (USDT R$ 5.155)"
        },
        {
          "label": "21:39",
          "score": 5,
          "metric": "Spread: +0.0295 (USDT R$ 5.166)"
        },
        {
          "label": "21:59",
          "score": 5,
          "metric": "Spread: +0.0276 (USDT R$ 5.164)"
        },
        {
          "label": "22:19",
          "score": 5,
          "metric": "Spread: +0.0337 (USDT R$ 5.170)"
        },
        {
          "label": "22:39",
          "score": 5,
          "metric": "Spread: +0.0336 (USDT R$ 5.170)"
        },
        {
          "label": "22:59",
          "score": 5,
          "metric": "Spread: +0.0333 (USDT R$ 5.170)"
        },
        {
          "label": "23:19",
          "score": 5,
          "metric": "Spread: +0.0320 (USDT R$ 5.169)"
        },
        {
          "label": "23:39",
          "score": 5,
          "metric": "Spread: +0.0331 (USDT R$ 5.170)"
        },
        {
          "label": "23:59",
          "score": 5,
          "metric": "Spread: +0.0296 (USDT R$ 5.166)"
        },
        {
          "label": "00:19",
          "score": 5,
          "metric": "Spread: +0.0300 (USDT R$ 5.167)"
        },
        {
          "label": "00:39",
          "score": 5,
          "metric": "Spread: +0.0317 (USDT R$ 5.168)"
        },
        {
          "label": "00:59",
          "score": 5,
          "metric": "Spread: +0.0316 (USDT R$ 5.168)"
        },
        {
          "label": "01:19",
          "score": 5,
          "metric": "Spread: +0.0295 (USDT R$ 5.166)"
        },
        {
          "label": "01:39",
          "score": 5,
          "metric": "Spread: +0.0311 (USDT R$ 5.168)"
        },
        {
          "label": "01:59",
          "score": 5,
          "metric": "Spread: +0.0314 (USDT R$ 5.168)"
        },
        {
          "label": "02:19",
          "score": 5,
          "metric": "Spread: +0.0309 (USDT R$ 5.168)"
        },
        {
          "label": "02:39",
          "score": 5,
          "metric": "Spread: +0.0296 (USDT R$ 5.166)"
        },
        {
          "label": "02:59",
          "score": 5,
          "metric": "Spread: +0.0298 (USDT R$ 5.166)"
        },
        {
          "label": "03:19",
          "score": 5,
          "metric": "Spread: +0.0305 (USDT R$ 5.167)"
        },
        {
          "label": "03:39",
          "score": 5,
          "metric": "Spread: +0.0311 (USDT R$ 5.168)"
        },
        {
          "label": "03:59",
          "score": 5,
          "metric": "Spread: +0.0311 (USDT R$ 5.168)"
        },
        {
          "label": "04:19",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "04:39",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "04:59",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "05:19",
          "score": 5,
          "metric": "Spread: +0.0302 (USDT R$ 5.167)"
        },
        {
          "label": "05:39",
          "score": 5,
          "metric": "Spread: +0.0302 (USDT R$ 5.167)"
        },
        {
          "label": "05:59",
          "score": 5,
          "metric": "Spread: +0.0303 (USDT R$ 5.167)"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "Spread: +0.0304 (USDT R$ 5.167)"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "Spread: +0.0307 (USDT R$ 5.167)"
        },
        {
          "label": "06:59",
          "score": 5,
          "metric": "Spread: +0.0313 (USDT R$ 5.168)"
        },
        {
          "label": "07:19",
          "score": 5,
          "metric": "Spread: +0.0313 (USDT R$ 5.168)"
        },
        {
          "label": "07:39",
          "score": 5,
          "metric": "Spread: +0.0314 (USDT R$ 5.168)"
        },
        {
          "label": "07:59",
          "score": 5,
          "metric": "Spread: +0.0310 (USDT R$ 5.168)"
        },
        {
          "label": "08:19",
          "score": 5,
          "metric": "Spread: +0.0306 (USDT R$ 5.167)"
        },
        {
          "label": "08:39",
          "score": 5,
          "metric": "Spread: +0.0286 (USDT R$ 5.165)"
        },
        {
          "label": "08:59",
          "score": 5,
          "metric": "Spread: +0.0285 (USDT R$ 5.165)"
        },
        {
          "label": "09:19",
          "score": 5,
          "metric": "Spread: +0.0286 (USDT R$ 5.165)"
        },
        {
          "label": "09:39",
          "score": 5,
          "metric": "Spread: +0.0285 (USDT R$ 5.165)"
        },
        {
          "label": "09:59",
          "score": 5,
          "metric": "Spread: +0.0300 (USDT R$ 5.167)"
        },
        {
          "label": "10:19",
          "score": 5,
          "metric": "Spread: +0.0299 (USDT R$ 5.167)"
        },
        {
          "label": "10:39",
          "score": 5,
          "metric": "Spread: +0.0299 (USDT R$ 5.167)"
        },
        {
          "label": "10:59",
          "score": 5,
          "metric": "Spread: +0.0299 (USDT R$ 5.167)"
        },
        {
          "label": "11:19",
          "score": 5,
          "metric": "Spread: +0.0300 (USDT R$ 5.167)"
        },
        {
          "label": "11:39",
          "score": 5,
          "metric": "Spread: +0.0299 (USDT R$ 5.167)"
        },
        {
          "label": "11:59",
          "score": 5,
          "metric": "Spread: +0.0297 (USDT R$ 5.166)"
        },
        {
          "label": "12:19",
          "score": 5,
          "metric": "Spread: +0.0290 (USDT R$ 5.166)"
        },
        {
          "label": "12:39",
          "score": 5,
          "metric": "Spread: +0.0290 (USDT R$ 5.166)"
        },
        {
          "label": "12:59",
          "score": 5,
          "metric": "Spread: +0.0289 (USDT R$ 5.165)"
        },
        {
          "label": "13:19",
          "score": 5,
          "metric": "Spread: +0.0290 (USDT R$ 5.166)"
        },
        {
          "label": "13:39",
          "score": 5,
          "metric": "Spread: +0.0241 (USDT R$ 5.161)"
        },
        {
          "label": "13:59",
          "score": 5,
          "metric": "Spread: +0.0263 (USDT R$ 5.163)"
        },
        {
          "label": "14:14",
          "score": 5,
          "metric": "Spread: +0.0262 (USDT R$ 5.163)"
        },
        {
          "label": "14:24",
          "score": 5,
          "metric": "Spread: +0.0261 (USDT R$ 5.163)"
        },
        {
          "label": "14:34",
          "score": 5,
          "metric": "Spread: +0.0261 (USDT R$ 5.163)"
        },
        {
          "label": "14:44",
          "score": 5,
          "metric": "Spread: +0.0247 (USDT R$ 5.161)"
        },
        {
          "label": "14:55",
          "score": 5,
          "metric": "Spread: +0.0247 (USDT R$ 5.161)"
        },
        {
          "label": "15:05",
          "score": 5,
          "metric": "Spread: +0.0261 (USDT R$ 5.163)"
        },
        {
          "label": "15:15",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "15:25",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "15:36",
          "score": 5,
          "metric": "Spread: +0.0258 (USDT R$ 5.162)"
        },
        {
          "label": "15:46",
          "score": 5,
          "metric": "Spread: +0.0258 (USDT R$ 5.162)"
        },
        {
          "label": "15:57",
          "score": 5,
          "metric": "Spread: +0.0258 (USDT R$ 5.162)"
        },
        {
          "label": "16:07",
          "score": 5,
          "metric": "Spread: +0.0252 (USDT R$ 5.162)"
        },
        {
          "label": "16:18",
          "score": 5,
          "metric": "Spread: +0.0228 (USDT R$ 5.159)"
        },
        {
          "label": "16:28",
          "score": 5,
          "metric": "Spread: +0.0215 (USDT R$ 5.158)"
        },
        {
          "label": "16:38",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "16:48",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "16:59",
          "score": 5,
          "metric": "Spread: +0.0230 (USDT R$ 5.160)"
        },
        {
          "label": "17:09",
          "score": 5,
          "metric": "Spread: +0.0233 (USDT R$ 5.160)"
        },
        {
          "label": "17:20",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "17:30",
          "score": 5,
          "metric": "Spread: +0.0259 (USDT R$ 5.162)"
        },
        {
          "label": "17:41",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "17:51",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "18:01",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "18:12",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "18:22",
          "score": 5,
          "metric": "Spread: +0.0259 (USDT R$ 5.162)"
        },
        {
          "label": "18:32",
          "score": 5,
          "metric": "Spread: +0.0238 (USDT R$ 5.160)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "Spread: +0.0240 (USDT R$ 5.161)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Spread: +0.0258 (USDT R$ 5.162)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "Spread: +0.0251 (USDT R$ 5.162)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "Spread: +0.0238 (USDT R$ 5.160)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "Spread: +0.0231 (USDT R$ 5.160)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "Spread: +0.0235 (USDT R$ 5.160)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "Spread: +0.0229 (USDT R$ 5.160)"
        },
        {
          "label": "19:56",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 5,
          "metric": "Spread: +0.1038 (USDT R$ 5.240)"
        },
        {
          "label": "15/08 22:00",
          "score": 5,
          "metric": "Spread: +0.1037 (USDT R$ 5.240)"
        },
        {
          "label": "16/08 00:00",
          "score": 5,
          "metric": "Spread: +0.1036 (USDT R$ 5.240)"
        },
        {
          "label": "16/08 02:00",
          "score": 5,
          "metric": "Spread: +0.1079 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 04:00",
          "score": 5,
          "metric": "Spread: +0.1125 (USDT R$ 5.249)"
        },
        {
          "label": "16/08 06:00",
          "score": 5,
          "metric": "Spread: +0.1109 (USDT R$ 5.247)"
        },
        {
          "label": "16/08 08:00",
          "score": 5,
          "metric": "Spread: +0.1086 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 10:00",
          "score": 5,
          "metric": "Spread: +0.1085 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 12:00",
          "score": 5,
          "metric": "Spread: +0.1086 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 14:00",
          "score": 5,
          "metric": "Spread: +0.1084 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 16:00",
          "score": 5,
          "metric": "Spread: +0.1032 (USDT R$ 5.240)"
        },
        {
          "label": "16/08 18:00",
          "score": 5,
          "metric": "Spread: +0.1051 (USDT R$ 5.242)"
        },
        {
          "label": "16/08 20:00",
          "score": 5,
          "metric": "Spread: +0.1015 (USDT R$ 5.238)"
        },
        {
          "label": "16/08 22:00",
          "score": 5,
          "metric": "Spread: +0.1001 (USDT R$ 5.237)"
        },
        {
          "label": "17/08 00:00",
          "score": 5,
          "metric": "Spread: +0.1102 (USDT R$ 5.247)"
        },
        {
          "label": "17/08 02:00",
          "score": 5,
          "metric": "Spread: +0.1114 (USDT R$ 5.248)"
        },
        {
          "label": "17/08 04:00",
          "score": 5,
          "metric": "Spread: +0.1136 (USDT R$ 5.250)"
        },
        {
          "label": "17/08 06:00",
          "score": 5,
          "metric": "Spread: +0.1096 (USDT R$ 5.246)"
        },
        {
          "label": "17/08 08:00",
          "score": 5,
          "metric": "Spread: +0.1031 (USDT R$ 5.240)"
        },
        {
          "label": "17/08 10:00",
          "score": 5,
          "metric": "Spread: +0.1052 (USDT R$ 5.242)"
        },
        {
          "label": "17/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0947 (USDT R$ 5.231)"
        },
        {
          "label": "17/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0734 (USDT R$ 5.210)"
        },
        {
          "label": "17/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0681 (USDT R$ 5.205)"
        },
        {
          "label": "17/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0799 (USDT R$ 5.216)"
        },
        {
          "label": "17/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0765 (USDT R$ 5.213)"
        },
        {
          "label": "17/08 22:00",
          "score": 5,
          "metric": "Spread: +0.0834 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 00:00",
          "score": 5,
          "metric": "Spread: +0.0838 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 02:00",
          "score": 5,
          "metric": "Spread: +0.0839 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 04:00",
          "score": 5,
          "metric": "Spread: +0.0839 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 06:00",
          "score": 5,
          "metric": "Spread: +0.0838 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 08:00",
          "score": 5,
          "metric": "Spread: +0.0838 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 10:00",
          "score": 5,
          "metric": "Spread: +0.0844 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0869 (USDT R$ 5.223)"
        },
        {
          "label": "18/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0718 (USDT R$ 5.208)"
        },
        {
          "label": "18/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0820 (USDT R$ 5.219)"
        },
        {
          "label": "18/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0872 (USDT R$ 5.224)"
        },
        {
          "label": "18/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0923 (USDT R$ 5.229)"
        },
        {
          "label": "18/08 22:00",
          "score": 5,
          "metric": "Spread: +0.1022 (USDT R$ 5.239)"
        },
        {
          "label": "19/08 00:00",
          "score": 5,
          "metric": "Spread: +0.1056 (USDT R$ 5.242)"
        },
        {
          "label": "19/08 02:00",
          "score": 5,
          "metric": "Spread: +0.1033 (USDT R$ 5.240)"
        },
        {
          "label": "19/08 04:00",
          "score": 5,
          "metric": "Spread: +0.1031 (USDT R$ 5.240)"
        },
        {
          "label": "19/08 06:00",
          "score": 5,
          "metric": "Spread: +0.0992 (USDT R$ 5.236)"
        },
        {
          "label": "19/08 08:00",
          "score": 5,
          "metric": "Spread: +0.0979 (USDT R$ 5.234)"
        },
        {
          "label": "19/08 10:00",
          "score": 5,
          "metric": "Spread: +0.0976 (USDT R$ 5.234)"
        },
        {
          "label": "19/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0792 (USDT R$ 5.216)"
        },
        {
          "label": "19/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0503 (USDT R$ 5.187)"
        },
        {
          "label": "19/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0497 (USDT R$ 5.186)"
        },
        {
          "label": "19/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0478 (USDT R$ 5.184)"
        },
        {
          "label": "19/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0529 (USDT R$ 5.189)"
        },
        {
          "label": "19/08 22:00",
          "score": 5,
          "metric": "Spread: +0.0556 (USDT R$ 5.192)"
        },
        {
          "label": "20/08 00:00",
          "score": 5,
          "metric": "Spread: +0.0444 (USDT R$ 5.181)"
        },
        {
          "label": "20/08 02:00",
          "score": 5,
          "metric": "Spread: +0.0513 (USDT R$ 5.188)"
        },
        {
          "label": "20/08 04:00",
          "score": 5,
          "metric": "Spread: +0.0562 (USDT R$ 5.193)"
        },
        {
          "label": "20/08 06:00",
          "score": 5,
          "metric": "Spread: +0.0565 (USDT R$ 5.193)"
        },
        {
          "label": "20/08 08:00",
          "score": 5,
          "metric": "Spread: +0.0492 (USDT R$ 5.186)"
        },
        {
          "label": "20/08 10:00",
          "score": 5,
          "metric": "Spread: +0.0500 (USDT R$ 5.187)"
        },
        {
          "label": "20/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0667 (USDT R$ 5.203)"
        },
        {
          "label": "20/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0749 (USDT R$ 5.212)"
        },
        {
          "label": "20/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0618 (USDT R$ 5.198)"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0689 (USDT R$ 5.205)"
        },
        {
          "label": "20/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0717 (USDT R$ 5.208)"
        },
        {
          "label": "20/08 22:00",
          "score": 5,
          "metric": "Spread: +0.0733 (USDT R$ 5.210)"
        },
        {
          "label": "21/08 00:00",
          "score": 5,
          "metric": "Spread: +0.0763 (USDT R$ 5.213)"
        },
        {
          "label": "21/08 02:00",
          "score": 5,
          "metric": "Spread: +0.0736 (USDT R$ 5.210)"
        },
        {
          "label": "21/08 04:00",
          "score": 5,
          "metric": "Spread: +0.0725 (USDT R$ 5.209)"
        },
        {
          "label": "21/08 06:00",
          "score": 5,
          "metric": "Spread: +0.0667 (USDT R$ 5.203)"
        },
        {
          "label": "21/08 08:00",
          "score": 5,
          "metric": "Spread: +0.0640 (USDT R$ 5.201)"
        },
        {
          "label": "21/08 10:00",
          "score": 5,
          "metric": "Spread: +0.0555 (USDT R$ 5.192)"
        },
        {
          "label": "21/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0564 (USDT R$ 5.193)"
        },
        {
          "label": "21/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0400 (USDT R$ 5.177)"
        },
        {
          "label": "21/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0273 (USDT R$ 5.164)"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0205 (USDT R$ 5.157)"
        },
        {
          "label": "21/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0222 (USDT R$ 5.159)"
        },
        {
          "label": "21/08 22:00",
          "score": 5,
          "metric": "Spread: +0.0337 (USDT R$ 5.170)"
        },
        {
          "label": "22/08 00:00",
          "score": 5,
          "metric": "Spread: +0.0301 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 02:00",
          "score": 5,
          "metric": "Spread: +0.0300 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 04:00",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "Spread: +0.0303 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 08:00",
          "score": 5,
          "metric": "Spread: +0.0293 (USDT R$ 5.166)"
        },
        {
          "label": "22/08 10:00",
          "score": 5,
          "metric": "Spread: +0.0300 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 12:00",
          "score": 5,
          "metric": "Spread: +0.0289 (USDT R$ 5.165)"
        },
        {
          "label": "22/08 14:00",
          "score": 5,
          "metric": "Spread: +0.0261 (USDT R$ 5.163)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "22/08 16:00",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "Spread: +0.0259 (USDT R$ 5.162)"
        },
        {
          "label": "22/08 18:00",
          "score": 5,
          "metric": "Spread: +0.0260 (USDT R$ 5.163)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "Spread: +0.0243 (USDT R$ 5.161)"
        },
        {
          "label": "22/08 20:00",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 88,
          "metric": "Spread: -0.0342 (USDT R$ 5.102)"
        },
        {
          "label": "24/07",
          "score": 73,
          "metric": "Spread: -0.0266 (USDT R$ 5.110)"
        },
        {
          "label": "24/07",
          "score": 84,
          "metric": "Spread: -0.0321 (USDT R$ 5.104)"
        },
        {
          "label": "24/07",
          "score": 95,
          "metric": "Spread: -0.0373 (USDT R$ 5.099)"
        },
        {
          "label": "25/07",
          "score": 63,
          "metric": "Spread: -0.0215 (USDT R$ 5.115)"
        },
        {
          "label": "25/07",
          "score": 90,
          "metric": "Spread: -0.0352 (USDT R$ 5.101)"
        },
        {
          "label": "25/07",
          "score": 80,
          "metric": "Spread: -0.0302 (USDT R$ 5.106)"
        },
        {
          "label": "26/07",
          "score": 77,
          "metric": "Spread: -0.0284 (USDT R$ 5.108)"
        },
        {
          "label": "26/07",
          "score": 72,
          "metric": "Spread: -0.0262 (USDT R$ 5.110)"
        },
        {
          "label": "26/07",
          "score": 88,
          "metric": "Spread: -0.0338 (USDT R$ 5.103)"
        },
        {
          "label": "27/07",
          "score": 91,
          "metric": "Spread: -0.0356 (USDT R$ 5.101)"
        },
        {
          "label": "27/07",
          "score": 85,
          "metric": "Spread: -0.0326 (USDT R$ 5.104)"
        },
        {
          "label": "27/07",
          "score": 42,
          "metric": "Spread: -0.0109 (USDT R$ 5.126)"
        },
        {
          "label": "28/07",
          "score": 45,
          "metric": "Spread: -0.0124 (USDT R$ 5.124)"
        },
        {
          "label": "28/07",
          "score": 15,
          "metric": "Spread: +0.0025 (USDT R$ 5.139)"
        },
        {
          "label": "28/07",
          "score": 35,
          "metric": "Spread: -0.0076 (USDT R$ 5.129)"
        },
        {
          "label": "29/07",
          "score": 7,
          "metric": "Spread: +0.0063 (USDT R$ 5.143)"
        },
        {
          "label": "29/07",
          "score": 27,
          "metric": "Spread: -0.0033 (USDT R$ 5.133)"
        },
        {
          "label": "29/07",
          "score": 40,
          "metric": "Spread: -0.0101 (USDT R$ 5.127)"
        },
        {
          "label": "30/07",
          "score": 37,
          "metric": "Spread: -0.0083 (USDT R$ 5.128)"
        },
        {
          "label": "30/07",
          "score": 71,
          "metric": "Spread: -0.0257 (USDT R$ 5.111)"
        },
        {
          "label": "30/07",
          "score": 100,
          "metric": "Spread: -0.0580 (USDT R$ 5.079)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "Spread: -0.0432 (USDT R$ 5.093)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "Spread: -0.0425 (USDT R$ 5.094)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "Spread: -0.0444 (USDT R$ 5.092)"
        },
        {
          "label": "01/08",
          "score": 80,
          "metric": "Spread: -0.0300 (USDT R$ 5.107)"
        },
        {
          "label": "01/08",
          "score": 80,
          "metric": "Spread: -0.0301 (USDT R$ 5.106)"
        },
        {
          "label": "01/08",
          "score": 79,
          "metric": "Spread: -0.0294 (USDT R$ 5.107)"
        },
        {
          "label": "02/08",
          "score": 82,
          "metric": "Spread: -0.0308 (USDT R$ 5.106)"
        },
        {
          "label": "02/08",
          "score": 82,
          "metric": "Spread: -0.0309 (USDT R$ 5.106)"
        },
        {
          "label": "02/08",
          "score": 87,
          "metric": "Spread: -0.0333 (USDT R$ 5.103)"
        },
        {
          "label": "03/08",
          "score": 100,
          "metric": "Spread: -0.0410 (USDT R$ 5.096)"
        },
        {
          "label": "03/08",
          "score": 100,
          "metric": "Spread: -0.0504 (USDT R$ 5.086)"
        },
        {
          "label": "03/08",
          "score": 94,
          "metric": "Spread: -0.0371 (USDT R$ 5.099)"
        },
        {
          "label": "04/08",
          "score": 92,
          "metric": "Spread: -0.0361 (USDT R$ 5.101)"
        },
        {
          "label": "04/08",
          "score": 91,
          "metric": "Spread: -0.0353 (USDT R$ 5.101)"
        },
        {
          "label": "04/08",
          "score": 18,
          "metric": "Spread: +0.0009 (USDT R$ 5.138)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Spread: +0.0100 (USDT R$ 5.147)"
        },
        {
          "label": "05/08",
          "score": 24,
          "metric": "Spread: -0.0022 (USDT R$ 5.134)"
        },
        {
          "label": "05/08",
          "score": 27,
          "metric": "Spread: -0.0037 (USDT R$ 5.133)"
        },
        {
          "label": "06/08",
          "score": 13,
          "metric": "Spread: +0.0037 (USDT R$ 5.140)"
        },
        {
          "label": "06/08",
          "score": 40,
          "metric": "Spread: -0.0098 (USDT R$ 5.127)"
        },
        {
          "label": "06/08",
          "score": 50,
          "metric": "Spread: -0.0151 (USDT R$ 5.122)"
        },
        {
          "label": "07/08",
          "score": 36,
          "metric": "Spread: -0.0081 (USDT R$ 5.128)"
        },
        {
          "label": "07/08",
          "score": 96,
          "metric": "Spread: -0.0379 (USDT R$ 5.099)"
        },
        {
          "label": "07/08",
          "score": 93,
          "metric": "Spread: -0.0367 (USDT R$ 5.100)"
        },
        {
          "label": "08/08",
          "score": 83,
          "metric": "Spread: -0.0315 (USDT R$ 5.105)"
        },
        {
          "label": "08/08",
          "score": 81,
          "metric": "Spread: -0.0305 (USDT R$ 5.106)"
        },
        {
          "label": "08/08",
          "score": 80,
          "metric": "Spread: -0.0301 (USDT R$ 5.106)"
        },
        {
          "label": "09/08",
          "score": 76,
          "metric": "Spread: -0.0281 (USDT R$ 5.109)"
        },
        {
          "label": "09/08",
          "score": 74,
          "metric": "Spread: -0.0272 (USDT R$ 5.109)"
        },
        {
          "label": "09/08",
          "score": 73,
          "metric": "Spread: -0.0265 (USDT R$ 5.110)"
        },
        {
          "label": "10/08",
          "score": 76,
          "metric": "Spread: -0.0282 (USDT R$ 5.108)"
        },
        {
          "label": "10/08",
          "score": 63,
          "metric": "Spread: -0.0215 (USDT R$ 5.115)"
        },
        {
          "label": "10/08",
          "score": 50,
          "metric": "Spread: -0.0150 (USDT R$ 5.122)"
        },
        {
          "label": "11/08",
          "score": 34,
          "metric": "Spread: -0.0072 (USDT R$ 5.129)"
        },
        {
          "label": "11/08",
          "score": 51,
          "metric": "Spread: -0.0156 (USDT R$ 5.121)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Spread: +0.0366 (USDT R$ 5.173)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.0398 (USDT R$ 5.176)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.0498 (USDT R$ 5.186)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.0631 (USDT R$ 5.200)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.0663 (USDT R$ 5.203)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.0626 (USDT R$ 5.199)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.0630 (USDT R$ 5.200)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.0703 (USDT R$ 5.207)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.0954 (USDT R$ 5.232)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.0968 (USDT R$ 5.233)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.1001 (USDT R$ 5.237)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.1038 (USDT R$ 5.240)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.1125 (USDT R$ 5.249)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.1084 (USDT R$ 5.245)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.0994 (USDT R$ 5.236)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.1103 (USDT R$ 5.247)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.0993 (USDT R$ 5.236)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.0764 (USDT R$ 5.213)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.0838 (USDT R$ 5.220)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.0830 (USDT R$ 5.220)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.0933 (USDT R$ 5.230)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.1030 (USDT R$ 5.240)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.0574 (USDT R$ 5.194)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.0565 (USDT R$ 5.193)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.0563 (USDT R$ 5.193)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.0608 (USDT R$ 5.197)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.0719 (USDT R$ 5.208)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.0725 (USDT R$ 5.209)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.0566 (USDT R$ 5.193)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.0212 (USDT R$ 5.158)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.0288 (USDT R$ 5.165)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.0289 (USDT R$ 5.165)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.0234 (USDT R$ 5.160)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "Spread: +0.2961 (USDT R$ 5.433)"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "Spread: +0.3022 (USDT R$ 5.439)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "Spread: +0.3335 (USDT R$ 5.470)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "Spread: +0.3242 (USDT R$ 5.461)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "Spread: +0.3141 (USDT R$ 5.451)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "Spread: +0.2613 (USDT R$ 5.398)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "Spread: +0.1948 (USDT R$ 5.331)"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "Spread: +0.1950 (USDT R$ 5.332)"
        },
        {
          "label": "23/09/25",
          "score": 5,
          "metric": "Spread: +0.1537 (USDT R$ 5.290)"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "Spread: +0.2361 (USDT R$ 5.373)"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "Spread: +0.2017 (USDT R$ 5.338)"
        },
        {
          "label": "05/10/25",
          "score": 5,
          "metric": "Spread: +0.2143 (USDT R$ 5.351)"
        },
        {
          "label": "09/10/25",
          "score": 5,
          "metric": "Spread: +0.2496 (USDT R$ 5.386)"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "Spread: +0.3658 (USDT R$ 5.502)"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "Spread: +0.2924 (USDT R$ 5.429)"
        },
        {
          "label": "21/10/25",
          "score": 5,
          "metric": "Spread: +0.2619 (USDT R$ 5.399)"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "Spread: +0.2637 (USDT R$ 5.400)"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "Spread: +0.2291 (USDT R$ 5.366)"
        },
        {
          "label": "02/11/25",
          "score": 5,
          "metric": "Spread: +0.2399 (USDT R$ 5.377)"
        },
        {
          "label": "06/11/25",
          "score": 5,
          "metric": "Spread: +0.2235 (USDT R$ 5.360)"
        },
        {
          "label": "10/11/25",
          "score": 5,
          "metric": "Spread: +0.1705 (USDT R$ 5.307)"
        },
        {
          "label": "03/12/25",
          "score": 5,
          "metric": "Spread: +0.1725 (USDT R$ 5.309)"
        },
        {
          "label": "07/12/25",
          "score": 5,
          "metric": "Spread: +0.3578 (USDT R$ 5.494)"
        },
        {
          "label": "18/01/26",
          "score": 5,
          "metric": "Spread: +0.2514 (USDT R$ 5.388)"
        },
        {
          "label": "22/01/26",
          "score": 5,
          "metric": "Spread: +0.1530 (USDT R$ 5.290)"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "Spread: +0.0439 (USDT R$ 5.181)"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "Spread: +0.1450 (USDT R$ 5.282)"
        },
        {
          "label": "06/02/26",
          "score": 5,
          "metric": "Spread: +0.1332 (USDT R$ 5.270)"
        },
        {
          "label": "10/02/26",
          "score": 5,
          "metric": "Spread: +0.0634 (USDT R$ 5.200)"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "Spread: +0.0952 (USDT R$ 5.232)"
        },
        {
          "label": "21/02/26",
          "score": 5,
          "metric": "Spread: +0.0499 (USDT R$ 5.186)"
        },
        {
          "label": "25/02/26",
          "score": 28,
          "metric": "Spread: -0.0042 (USDT R$ 5.132)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "Spread: +0.0542 (USDT R$ 5.191)"
        },
        {
          "label": "07/03/26",
          "score": 5,
          "metric": "Spread: +0.1380 (USDT R$ 5.275)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "Spread: +0.0309 (USDT R$ 5.168)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "Spread: +0.1677 (USDT R$ 5.304)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "Spread: +0.1815 (USDT R$ 5.318)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "Spread: +0.1044 (USDT R$ 5.241)"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "Spread: +0.1031 (USDT R$ 5.240)"
        },
        {
          "label": "03/04/26",
          "score": 5,
          "metric": "Spread: +0.0415 (USDT R$ 5.178)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "Spread: +0.0105 (USDT R$ 5.147)"
        },
        {
          "label": "12/04/26",
          "score": 100,
          "metric": "Spread: -0.1067 (USDT R$ 5.030)"
        },
        {
          "label": "16/04/26",
          "score": 100,
          "metric": "Spread: -0.1287 (USDT R$ 5.008)"
        },
        {
          "label": "20/04/26",
          "score": 100,
          "metric": "Spread: -0.1669 (USDT R$ 4.970)"
        },
        {
          "label": "24/04/26",
          "score": 100,
          "metric": "Spread: -0.1282 (USDT R$ 5.008)"
        },
        {
          "label": "29/04/26",
          "score": 100,
          "metric": "Spread: -0.1507 (USDT R$ 4.986)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "Spread: -0.1706 (USDT R$ 4.966)"
        },
        {
          "label": "07/05/26",
          "score": 100,
          "metric": "Spread: -0.2003 (USDT R$ 4.936)"
        },
        {
          "label": "13/05/26",
          "score": 100,
          "metric": "Spread: -0.1527 (USDT R$ 4.984)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "Spread: -0.0648 (USDT R$ 5.072)"
        },
        {
          "label": "22/05/26",
          "score": 100,
          "metric": "Spread: -0.1278 (USDT R$ 5.009)"
        },
        {
          "label": "26/05/26",
          "score": 100,
          "metric": "Spread: -0.0972 (USDT R$ 5.039)"
        },
        {
          "label": "30/05/26",
          "score": 100,
          "metric": "Spread: -0.0820 (USDT R$ 5.055)"
        },
        {
          "label": "04/06/26",
          "score": 100,
          "metric": "Spread: -0.0599 (USDT R$ 5.077)"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "Spread: +0.0676 (USDT R$ 5.204)"
        },
        {
          "label": "12/06/26",
          "score": 79,
          "metric": "Spread: -0.0295 (USDT R$ 5.107)"
        },
        {
          "label": "16/06/26",
          "score": 100,
          "metric": "Spread: -0.0632 (USDT R$ 5.073)"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "Spread: +0.0312 (USDT R$ 5.168)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "Spread: +0.0746 (USDT R$ 5.211)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "Spread: +0.1109 (USDT R$ 5.247)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "Spread: +0.1179 (USDT R$ 5.255)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "Spread: +0.1300 (USDT R$ 5.267)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "Spread: +0.0209 (USDT R$ 5.157)"
        },
        {
          "label": "14/07/26",
          "score": 5,
          "metric": "Spread: +0.0366 (USDT R$ 5.173)"
        },
        {
          "label": "18/07/26",
          "score": 5,
          "metric": "Spread: +0.0149 (USDT R$ 5.152)"
        },
        {
          "label": "22/07/26",
          "score": 86,
          "metric": "Spread: -0.0328 (USDT R$ 5.104)"
        },
        {
          "label": "26/07/26",
          "score": 77,
          "metric": "Spread: -0.0285 (USDT R$ 5.108)"
        },
        {
          "label": "30/07/26",
          "score": 36,
          "metric": "Spread: -0.0082 (USDT R$ 5.128)"
        },
        {
          "label": "03/08/26",
          "score": 100,
          "metric": "Spread: -0.0407 (USDT R$ 5.096)"
        },
        {
          "label": "07/08/26",
          "score": 37,
          "metric": "Spread: -0.0085 (USDT R$ 5.128)"
        },
        {
          "label": "11/08/26",
          "score": 34,
          "metric": "Spread: -0.0072 (USDT R$ 5.129)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "Spread: +0.0959 (USDT R$ 5.232)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "Spread: +0.1032 (USDT R$ 5.240)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "Spread: +0.0216 (USDT R$ 5.158)"
        }
      ]
    }
  },
  {
    "id": 4,
    "nome": "Plano Caboclo dos Oráculos",
    "badge": "🌐 Infraestrutura LINK",
    "categoria": "baixo_risco",
    "par": "BRL <-> LINK",
    "lote_brl": 100.0,
    "lucro_min_pct": 2.2,
    "gatilho_desc": "Reversão à Média 51h (Z_LINK <= -2.00σ)",
    "trava_ruptura": "Trava Causal: Exige STE >= 0 e Ew < 50 (Caudas de Lévy)",
    "cooldown_horas": 4.0,
    "valor_atual_str": "LINK R$ 59.78 (Z: -0.05σ)",
    "alvo_str": "Preço <= R$ 55.94 (Z <= -2.0σ)",
    "distancia_display": "+6.9% de distância",
    "proximidade_score": 5,
    "status": "MONITORANDO_BANDA",
    "icone": "🌐",
    "cor": "#8B5CF6",
    "descricao_executiva": "Operação de valor em infraestrutura de dados descentralizada (Chainlink). Atua em sobre-extensões de venda através de modelo estatístico Ornstein-Uhlenbeck calibrado em 51 horas.",
    "condicoes_ativacao": "• Z-Score de preço da LINK em relação à média móvel de 51 horas atinge Z <= -2.00σ.<br>• Fluxo Causal de Informação STE >= 0 comprovando liderança de fluxo da rede.",
    "limitacoes_trava": "• <b>Trava de Caudas Pesadas:</b> Veto automático se a curtose empírica exceder 6.5 (Risco de Lévy).<br>• <b>Trava de Pânico:</b> Bloqueado se PC1 > 70%.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.06σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.34σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.06σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.08σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.08σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.08σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.08σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.31σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.08σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "LINK: R$ 59.66 (Z: -0.05σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "LINK: R$ 59.71 (Z: -0.03σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "LINK: R$ 59.71 (Z: -0.03σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:34",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.12σ)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:35",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.12σ)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:36",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.12σ)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:37",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.12σ)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:38",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.12σ)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:39",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.13σ)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:40",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.13σ)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:41",
          "score": 6,
          "metric": "LINK: R$ 59.53 (Z: -0.13σ)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:42",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.13σ)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:43",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.13σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:44",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.14σ)"
        },
        {
          "label": "19:45",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:46",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:47",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.14σ)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:48",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.14σ)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:49",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.14σ)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:50",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.28σ)"
        },
        {
          "label": "19:51",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.28σ)"
        },
        {
          "label": "19:52",
          "score": 7,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:52",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:53",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:54",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:55",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:56",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:57",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "19:58",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "19:59",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:01",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:01",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:02",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:03",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:04",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:05",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:06",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:07",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:08",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.16σ)"
        },
        {
          "label": "20:09",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.04σ)"
        },
        {
          "label": "20:10",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.04σ)"
        },
        {
          "label": "20:12",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.04σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:14",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:15",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:16",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.05σ)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 5,
          "metric": "LINK: R$ 60.55 (Z: +1.97σ)"
        },
        {
          "label": "20:39",
          "score": 5,
          "metric": "LINK: R$ 60.73 (Z: +2.03σ)"
        },
        {
          "label": "20:59",
          "score": 5,
          "metric": "LINK: R$ 60.66 (Z: +1.98σ)"
        },
        {
          "label": "21:19",
          "score": 5,
          "metric": "LINK: R$ 61.36 (Z: +2.28σ)"
        },
        {
          "label": "21:39",
          "score": 5,
          "metric": "LINK: R$ 62.07 (Z: +2.56σ)"
        },
        {
          "label": "21:59",
          "score": 5,
          "metric": "LINK: R$ 62.73 (Z: +2.81σ)"
        },
        {
          "label": "22:19",
          "score": 5,
          "metric": "LINK: R$ 63.55 (Z: +3.10σ)"
        },
        {
          "label": "22:39",
          "score": 5,
          "metric": "LINK: R$ 62.75 (Z: +2.67σ)"
        },
        {
          "label": "22:59",
          "score": 5,
          "metric": "LINK: R$ 62.69 (Z: +2.58σ)"
        },
        {
          "label": "23:19",
          "score": 5,
          "metric": "LINK: R$ 62.82 (Z: +2.58σ)"
        },
        {
          "label": "23:39",
          "score": 5,
          "metric": "LINK: R$ 62.08 (Z: +2.21σ)"
        },
        {
          "label": "23:59",
          "score": 5,
          "metric": "LINK: R$ 62.08 (Z: +2.16σ)"
        },
        {
          "label": "00:19",
          "score": 5,
          "metric": "LINK: R$ 61.81 (Z: +2.00σ)"
        },
        {
          "label": "00:39",
          "score": 5,
          "metric": "LINK: R$ 61.80 (Z: +1.96σ)"
        },
        {
          "label": "00:59",
          "score": 5,
          "metric": "LINK: R$ 62.41 (Z: +2.16σ)"
        },
        {
          "label": "01:19",
          "score": 5,
          "metric": "LINK: R$ 62.63 (Z: +2.20σ)"
        },
        {
          "label": "01:39",
          "score": 5,
          "metric": "LINK: R$ 62.32 (Z: +2.04σ)"
        },
        {
          "label": "01:59",
          "score": 5,
          "metric": "LINK: R$ 62.03 (Z: +1.88σ)"
        },
        {
          "label": "02:19",
          "score": 5,
          "metric": "LINK: R$ 62.03 (Z: +1.85σ)"
        },
        {
          "label": "02:39",
          "score": 5,
          "metric": "LINK: R$ 62.71 (Z: +2.07σ)"
        },
        {
          "label": "02:59",
          "score": 5,
          "metric": "LINK: R$ 63.00 (Z: +2.14σ)"
        },
        {
          "label": "03:19",
          "score": 5,
          "metric": "LINK: R$ 63.55 (Z: +2.30σ)"
        },
        {
          "label": "03:39",
          "score": 5,
          "metric": "LINK: R$ 64.00 (Z: +2.41σ)"
        },
        {
          "label": "03:59",
          "score": 5,
          "metric": "LINK: R$ 64.00 (Z: +2.35σ)"
        },
        {
          "label": "04:19",
          "score": 5,
          "metric": "LINK: R$ 63.87 (Z: +2.25σ)"
        },
        {
          "label": "04:39",
          "score": 5,
          "metric": "LINK: R$ 64.50 (Z: +2.42σ)"
        },
        {
          "label": "04:59",
          "score": 5,
          "metric": "LINK: R$ 64.88 (Z: +2.49σ)"
        },
        {
          "label": "05:19",
          "score": 5,
          "metric": "LINK: R$ 60.02 (Z: +0.78σ)"
        },
        {
          "label": "05:39",
          "score": 5,
          "metric": "LINK: R$ 60.81 (Z: +1.04σ)"
        },
        {
          "label": "05:59",
          "score": 5,
          "metric": "LINK: R$ 61.00 (Z: +1.09σ)"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "LINK: R$ 60.92 (Z: +1.05σ)"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "LINK: R$ 61.39 (Z: +1.20σ)"
        },
        {
          "label": "06:59",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.23σ)"
        },
        {
          "label": "07:19",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.22σ)"
        },
        {
          "label": "07:39",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.20σ)"
        },
        {
          "label": "07:59",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.19σ)"
        },
        {
          "label": "08:19",
          "score": 5,
          "metric": "LINK: R$ 61.13 (Z: +1.03σ)"
        },
        {
          "label": "08:39",
          "score": 5,
          "metric": "LINK: R$ 59.46 (Z: +0.44σ)"
        },
        {
          "label": "08:59",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.47σ)"
        },
        {
          "label": "09:19",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.55σ)"
        },
        {
          "label": "09:39",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.54σ)"
        },
        {
          "label": "09:59",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.54σ)"
        },
        {
          "label": "10:19",
          "score": 5,
          "metric": "LINK: R$ 59.20 (Z: +0.29σ)"
        },
        {
          "label": "10:39",
          "score": 5,
          "metric": "LINK: R$ 58.98 (Z: +0.20σ)"
        },
        {
          "label": "10:59",
          "score": 5,
          "metric": "LINK: R$ 59.63 (Z: +0.43σ)"
        },
        {
          "label": "11:19",
          "score": 5,
          "metric": "LINK: R$ 59.86 (Z: +0.51σ)"
        },
        {
          "label": "11:39",
          "score": 5,
          "metric": "LINK: R$ 60.35 (Z: +0.68σ)"
        },
        {
          "label": "11:59",
          "score": 5,
          "metric": "LINK: R$ 60.45 (Z: +0.70σ)"
        },
        {
          "label": "12:19",
          "score": 5,
          "metric": "LINK: R$ 60.76 (Z: +0.81σ)"
        },
        {
          "label": "12:39",
          "score": 5,
          "metric": "LINK: R$ 60.76 (Z: +0.80σ)"
        },
        {
          "label": "12:59",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.93σ)"
        },
        {
          "label": "13:19",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.92σ)"
        },
        {
          "label": "13:39",
          "score": 5,
          "metric": "LINK: R$ 60.83 (Z: +0.79σ)"
        },
        {
          "label": "13:59",
          "score": 5,
          "metric": "LINK: R$ 60.84 (Z: +0.78σ)"
        },
        {
          "label": "14:14",
          "score": 5,
          "metric": "LINK: R$ 60.84 (Z: +0.77σ)"
        },
        {
          "label": "14:24",
          "score": 5,
          "metric": "LINK: R$ 60.47 (Z: +0.62σ)"
        },
        {
          "label": "14:34",
          "score": 5,
          "metric": "LINK: R$ 60.47 (Z: +0.61σ)"
        },
        {
          "label": "14:44",
          "score": 5,
          "metric": "LINK: R$ 60.47 (Z: +0.60σ)"
        },
        {
          "label": "14:55",
          "score": 5,
          "metric": "LINK: R$ 59.99 (Z: +0.41σ)"
        },
        {
          "label": "15:05",
          "score": 5,
          "metric": "LINK: R$ 59.99 (Z: +0.40σ)"
        },
        {
          "label": "15:15",
          "score": 5,
          "metric": "LINK: R$ 60.52 (Z: +0.59σ)"
        },
        {
          "label": "15:25",
          "score": 5,
          "metric": "LINK: R$ 60.66 (Z: +0.64σ)"
        },
        {
          "label": "15:36",
          "score": 5,
          "metric": "LINK: R$ 60.60 (Z: +0.60σ)"
        },
        {
          "label": "15:46",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.53σ)"
        },
        {
          "label": "15:57",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.52σ)"
        },
        {
          "label": "16:07",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.51σ)"
        },
        {
          "label": "16:18",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.17σ)"
        },
        {
          "label": "16:28",
          "score": 5,
          "metric": "LINK: R$ 60.20 (Z: +0.40σ)"
        },
        {
          "label": "16:38",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.47σ)"
        },
        {
          "label": "16:48",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.46σ)"
        },
        {
          "label": "16:59",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.45σ)"
        },
        {
          "label": "17:09",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.44σ)"
        },
        {
          "label": "17:20",
          "score": 5,
          "metric": "LINK: R$ 60.65 (Z: +0.54σ)"
        },
        {
          "label": "17:30",
          "score": 5,
          "metric": "LINK: R$ 60.41 (Z: +0.43σ)"
        },
        {
          "label": "17:41",
          "score": 5,
          "metric": "LINK: R$ 60.41 (Z: +0.42σ)"
        },
        {
          "label": "17:51",
          "score": 5,
          "metric": "LINK: R$ 60.70 (Z: +0.53σ)"
        },
        {
          "label": "18:01",
          "score": 5,
          "metric": "LINK: R$ 60.70 (Z: +0.52σ)"
        },
        {
          "label": "18:12",
          "score": 5,
          "metric": "LINK: R$ 60.52 (Z: +0.43σ)"
        },
        {
          "label": "18:22",
          "score": 5,
          "metric": "LINK: R$ 60.78 (Z: +0.54σ)"
        },
        {
          "label": "18:32",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.13σ)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.11σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.36σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.35σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: -0.08σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: -0.07σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.30σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "LINK: R$ 60.40 (Z: +0.29σ)"
        },
        {
          "label": "19:56",
          "score": 8,
          "metric": "LINK: R$ 59.53 (Z: -0.15σ)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "LINK: R$ 59.77 (Z: -0.05σ)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.05σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 50.22 (Z: +1.63σ)"
        },
        {
          "label": "15/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 50.20 (Z: +1.48σ)"
        },
        {
          "label": "16/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 49.36 (Z: +0.90σ)"
        },
        {
          "label": "16/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 49.80 (Z: +1.07σ)"
        },
        {
          "label": "16/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 49.49 (Z: +0.82σ)"
        },
        {
          "label": "16/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 49.11 (Z: +0.54σ)"
        },
        {
          "label": "16/08 08:00",
          "score": 5,
          "metric": "LINK: R$ 49.12 (Z: +0.49σ)"
        },
        {
          "label": "16/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 49.53 (Z: +0.69σ)"
        },
        {
          "label": "16/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 49.00 (Z: +0.28σ)"
        },
        {
          "label": "16/08 14:00",
          "score": 5,
          "metric": "LINK: R$ 48.97 (Z: +0.19σ)"
        },
        {
          "label": "16/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 49.30 (Z: +0.37σ)"
        },
        {
          "label": "16/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 49.33 (Z: +0.32σ)"
        },
        {
          "label": "16/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 49.64 (Z: +0.55σ)"
        },
        {
          "label": "16/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 49.19 (Z: +0.02σ)"
        },
        {
          "label": "17/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 49.18 (Z: -0.10σ)"
        },
        {
          "label": "17/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 49.65 (Z: +0.43σ)"
        },
        {
          "label": "17/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 49.81 (Z: +0.67σ)"
        },
        {
          "label": "17/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 49.47 (Z: -0.03σ)"
        },
        {
          "label": "17/08 08:00",
          "score": 32,
          "metric": "LINK: R$ 49.20 (Z: -0.63σ)"
        },
        {
          "label": "17/08 10:00",
          "score": 6,
          "metric": "LINK: R$ 49.41 (Z: -0.11σ)"
        },
        {
          "label": "17/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 50.07 (Z: +1.43σ)"
        },
        {
          "label": "17/08 14:00",
          "score": 30,
          "metric": "LINK: R$ 49.30 (Z: -0.60σ)"
        },
        {
          "label": "17/08 16:00",
          "score": 24,
          "metric": "LINK: R$ 49.37 (Z: -0.47σ)"
        },
        {
          "label": "17/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 49.71 (Z: +0.44σ)"
        },
        {
          "label": "17/08 20:00",
          "score": 17,
          "metric": "LINK: R$ 49.41 (Z: -0.33σ)"
        },
        {
          "label": "17/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 49.51 (Z: +0.02σ)"
        },
        {
          "label": "18/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 49.79 (Z: +0.99σ)"
        },
        {
          "label": "18/08 02:00",
          "score": 28,
          "metric": "LINK: R$ 49.30 (Z: -0.56σ)"
        },
        {
          "label": "18/08 04:00",
          "score": 46,
          "metric": "LINK: R$ 49.17 (Z: -0.93σ)"
        },
        {
          "label": "18/08 06:00",
          "score": 39,
          "metric": "LINK: R$ 49.20 (Z: -0.78σ)"
        },
        {
          "label": "18/08 08:00",
          "score": 61,
          "metric": "LINK: R$ 49.07 (Z: -1.23σ)"
        },
        {
          "label": "18/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 49.40 (Z: -0.10σ)"
        },
        {
          "label": "18/08 12:00",
          "score": 17,
          "metric": "LINK: R$ 49.35 (Z: -0.34σ)"
        },
        {
          "label": "18/08 14:00",
          "score": 65,
          "metric": "LINK: R$ 49.08 (Z: -1.30σ)"
        },
        {
          "label": "18/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 49.49 (Z: +0.17σ)"
        },
        {
          "label": "18/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 49.52 (Z: +0.21σ)"
        },
        {
          "label": "18/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 49.61 (Z: +0.50σ)"
        },
        {
          "label": "18/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 49.69 (Z: +0.76σ)"
        },
        {
          "label": "19/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 49.95 (Z: +1.67σ)"
        },
        {
          "label": "19/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 49.76 (Z: +0.85σ)"
        },
        {
          "label": "19/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 50.87 (Z: +4.13σ)"
        },
        {
          "label": "19/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 50.38 (Z: +2.20σ)"
        },
        {
          "label": "19/08 08:00",
          "score": 5,
          "metric": "LINK: R$ 51.00 (Z: +3.52σ)"
        },
        {
          "label": "19/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 51.01 (Z: +2.65σ)"
        },
        {
          "label": "19/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 50.83 (Z: +1.91σ)"
        },
        {
          "label": "19/08 14:00",
          "score": 5,
          "metric": "LINK: R$ 50.17 (Z: +0.64σ)"
        },
        {
          "label": "19/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 51.73 (Z: +2.98σ)"
        },
        {
          "label": "19/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 51.76 (Z: +2.57σ)"
        },
        {
          "label": "19/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 53.16 (Z: +3.69σ)"
        },
        {
          "label": "19/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 55.94 (Z: +4.22σ)"
        },
        {
          "label": "20/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 54.97 (Z: +2.79σ)"
        },
        {
          "label": "20/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 54.70 (Z: +2.25σ)"
        },
        {
          "label": "20/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 54.23 (Z: +1.76σ)"
        },
        {
          "label": "20/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 54.29 (Z: +1.62σ)"
        },
        {
          "label": "20/08 08:00",
          "score": 5,
          "metric": "LINK: R$ 55.02 (Z: +1.80σ)"
        },
        {
          "label": "20/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 55.29 (Z: +1.74σ)"
        },
        {
          "label": "20/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 55.30 (Z: +1.58σ)"
        },
        {
          "label": "20/08 14:00",
          "score": 5,
          "metric": "LINK: R$ 55.52 (Z: +1.54σ)"
        },
        {
          "label": "20/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 55.77 (Z: +1.53σ)"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 55.72 (Z: +1.37σ)"
        },
        {
          "label": "20/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 55.31 (Z: +1.11σ)"
        },
        {
          "label": "20/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 54.82 (Z: +0.82σ)"
        },
        {
          "label": "21/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 56.10 (Z: +1.30σ)"
        },
        {
          "label": "21/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 56.48 (Z: +1.38σ)"
        },
        {
          "label": "21/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 57.00 (Z: +1.49σ)"
        },
        {
          "label": "21/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 56.84 (Z: +1.33σ)"
        },
        {
          "label": "21/08 08:00",
          "score": 5,
          "metric": "LINK: R$ 60.07 (Z: +2.55σ)"
        },
        {
          "label": "21/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 59.39 (Z: +2.01σ)"
        },
        {
          "label": "21/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 58.74 (Z: +1.59σ)"
        },
        {
          "label": "21/08 14:00",
          "score": 5,
          "metric": "LINK: R$ 58.63 (Z: +1.42σ)"
        },
        {
          "label": "21/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 59.12 (Z: +1.51σ)"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 59.98 (Z: +1.81σ)"
        },
        {
          "label": "21/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 60.55 (Z: +1.97σ)"
        },
        {
          "label": "21/08 22:00",
          "score": 5,
          "metric": "LINK: R$ 63.55 (Z: +3.08σ)"
        },
        {
          "label": "22/08 00:00",
          "score": 5,
          "metric": "LINK: R$ 61.81 (Z: +1.99σ)"
        },
        {
          "label": "22/08 02:00",
          "score": 5,
          "metric": "LINK: R$ 62.03 (Z: +1.84σ)"
        },
        {
          "label": "22/08 04:00",
          "score": 5,
          "metric": "LINK: R$ 63.87 (Z: +2.24σ)"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "LINK: R$ 60.92 (Z: +1.05σ)"
        },
        {
          "label": "22/08 08:00",
          "score": 5,
          "metric": "LINK: R$ 61.13 (Z: +1.03σ)"
        },
        {
          "label": "22/08 10:00",
          "score": 5,
          "metric": "LINK: R$ 58.66 (Z: +0.10σ)"
        },
        {
          "label": "22/08 12:00",
          "score": 5,
          "metric": "LINK: R$ 60.76 (Z: +0.80σ)"
        },
        {
          "label": "22/08 14:00",
          "score": 5,
          "metric": "LINK: R$ 60.84 (Z: +0.77σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 60.78 (Z: +0.69σ)"
        },
        {
          "label": "22/08 16:00",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.17σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 60.53 (Z: +0.48σ)"
        },
        {
          "label": "22/08 18:00",
          "score": 5,
          "metric": "LINK: R$ 60.66 (Z: +0.48σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 60.44 (Z: +0.33σ)"
        },
        {
          "label": "22/08 20:00",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.05σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 73,
          "metric": "LINK: R$ 43.40 (Z: -1.46σ)"
        },
        {
          "label": "24/07",
          "score": 68,
          "metric": "LINK: R$ 43.22 (Z: -1.35σ)"
        },
        {
          "label": "24/07",
          "score": 58,
          "metric": "LINK: R$ 43.19 (Z: -1.17σ)"
        },
        {
          "label": "24/07",
          "score": 82,
          "metric": "LINK: R$ 42.62 (Z: -1.64σ)"
        },
        {
          "label": "25/07",
          "score": 46,
          "metric": "LINK: R$ 42.73 (Z: -0.92σ)"
        },
        {
          "label": "25/07",
          "score": 59,
          "metric": "LINK: R$ 42.39 (Z: -1.17σ)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "LINK: R$ 42.91 (Z: +0.18σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.02 (Z: +0.71σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.35 (Z: +1.93σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.69 (Z: +1.96σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.88 (Z: +2.35σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.63 (Z: +1.22σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.19 (Z: +0.46σ)"
        },
        {
          "label": "28/07",
          "score": 77,
          "metric": "LINK: R$ 42.67 (Z: -1.55σ)"
        },
        {
          "label": "28/07",
          "score": 69,
          "metric": "LINK: R$ 42.65 (Z: -1.39σ)"
        },
        {
          "label": "28/07",
          "score": 47,
          "metric": "LINK: R$ 42.87 (Z: -0.94σ)"
        },
        {
          "label": "29/07",
          "score": 42,
          "metric": "LINK: R$ 42.83 (Z: -0.84σ)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "LINK: R$ 43.24 (Z: -0.10σ)"
        },
        {
          "label": "29/07",
          "score": 100,
          "metric": "LINK: R$ 42.00 (Z: -2.11σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 42.86 (Z: +0.03σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 43.26 (Z: +1.16σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 43.02 (Z: +0.24σ)"
        },
        {
          "label": "31/07",
          "score": 58,
          "metric": "LINK: R$ 42.54 (Z: -1.16σ)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "LINK: R$ 42.01 (Z: -2.03σ)"
        },
        {
          "label": "31/07",
          "score": 87,
          "metric": "LINK: R$ 41.61 (Z: -1.73σ)"
        },
        {
          "label": "01/08",
          "score": 45,
          "metric": "LINK: R$ 41.90 (Z: -0.90σ)"
        },
        {
          "label": "01/08",
          "score": 65,
          "metric": "LINK: R$ 41.40 (Z: -1.30σ)"
        },
        {
          "label": "01/08",
          "score": 83,
          "metric": "LINK: R$ 40.86 (Z: -1.67σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.67 (Z: +1.94σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.34 (Z: +1.16σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.56 (Z: +1.30σ)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "LINK: R$ 42.11 (Z: +0.21σ)"
        },
        {
          "label": "03/08",
          "score": 34,
          "metric": "LINK: R$ 41.59 (Z: -0.69σ)"
        },
        {
          "label": "03/08",
          "score": 7,
          "metric": "LINK: R$ 42.04 (Z: -0.13σ)"
        },
        {
          "label": "04/08",
          "score": 76,
          "metric": "LINK: R$ 41.68 (Z: -1.52σ)"
        },
        {
          "label": "04/08",
          "score": 36,
          "metric": "LINK: R$ 41.82 (Z: -0.72σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "LINK: R$ 42.07 (Z: +0.09σ)"
        },
        {
          "label": "05/08",
          "score": 19,
          "metric": "LINK: R$ 41.85 (Z: -0.38σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "LINK: R$ 42.06 (Z: +0.67σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "LINK: R$ 42.14 (Z: +1.01σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "LINK: R$ 42.03 (Z: +0.52σ)"
        },
        {
          "label": "06/08",
          "score": 33,
          "metric": "LINK: R$ 41.84 (Z: -0.67σ)"
        },
        {
          "label": "06/08",
          "score": 7,
          "metric": "LINK: R$ 41.97 (Z: -0.14σ)"
        },
        {
          "label": "07/08",
          "score": 39,
          "metric": "LINK: R$ 41.83 (Z: -0.79σ)"
        },
        {
          "label": "07/08",
          "score": 23,
          "metric": "LINK: R$ 41.90 (Z: -0.47σ)"
        },
        {
          "label": "07/08",
          "score": 45,
          "metric": "LINK: R$ 41.82 (Z: -0.90σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.11 (Z: +0.60σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.47 (Z: +1.76σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.59 (Z: +1.59σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.35 (Z: +0.54σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.34 (Z: +0.24σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.61 (Z: +0.94σ)"
        },
        {
          "label": "10/08",
          "score": 92,
          "metric": "LINK: R$ 41.90 (Z: -1.85σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "LINK: R$ 42.55 (Z: +0.68σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "LINK: R$ 42.40 (Z: +0.20σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 42.95 (Z: +1.67σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 44.31 (Z: +2.61σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 44.99 (Z: +2.28σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.17 (Z: +1.47σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.51 (Z: +1.30σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.40 (Z: +0.90σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.32 (Z: +0.67σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.69 (Z: +1.19σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.96 (Z: +1.76σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 45.93 (Z: +1.17σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 46.29 (Z: +2.09σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 46.86 (Z: +2.29σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 49.54 (Z: +2.92σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 49.33 (Z: +1.73σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 50.15 (Z: +1.55σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 49.18 (Z: +0.63σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 48.96 (Z: +0.23σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 49.64 (Z: +0.53σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "LINK: R$ 49.74 (Z: +0.51σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "LINK: R$ 50.09 (Z: +1.47σ)"
        },
        {
          "label": "17/08",
          "score": 14,
          "metric": "LINK: R$ 49.42 (Z: -0.29σ)"
        },
        {
          "label": "18/08",
          "score": 20,
          "metric": "LINK: R$ 49.32 (Z: -0.39σ)"
        },
        {
          "label": "18/08",
          "score": 24,
          "metric": "LINK: R$ 49.31 (Z: -0.48σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "LINK: R$ 49.66 (Z: +0.69σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 50.35 (Z: +2.28σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 50.88 (Z: +1.95σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 54.85 (Z: +5.10σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 54.23 (Z: +1.71σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 55.30 (Z: +1.54σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 55.30 (Z: +1.08σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 56.86 (Z: +1.40σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 59.01 (Z: +1.66σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 60.66 (Z: +1.99σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 64.88 (Z: +2.50σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.93σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 60.70 (Z: +0.54σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.05σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "LINK: R$ 147.59 (Z: +1.74σ)"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "LINK: R$ 132.97 (Z: -0.03σ)"
        },
        {
          "label": "30/08/25",
          "score": 18,
          "metric": "LINK: R$ 127.78 (Z: -0.37σ)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "LINK: R$ 129.66 (Z: +1.25σ)"
        },
        {
          "label": "07/09/25",
          "score": 19,
          "metric": "LINK: R$ 120.99 (Z: -0.38σ)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "LINK: R$ 130.41 (Z: +2.35σ)"
        },
        {
          "label": "15/09/25",
          "score": 61,
          "metric": "LINK: R$ 125.57 (Z: -1.23σ)"
        },
        {
          "label": "19/09/25",
          "score": 74,
          "metric": "LINK: R$ 124.86 (Z: -1.48σ)"
        },
        {
          "label": "23/09/25",
          "score": 27,
          "metric": "LINK: R$ 114.86 (Z: -0.53σ)"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "LINK: R$ 112.02 (Z: +0.48σ)"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "LINK: R$ 119.27 (Z: +1.71σ)"
        },
        {
          "label": "05/10/25",
          "score": 43,
          "metric": "LINK: R$ 118.00 (Z: -0.85σ)"
        },
        {
          "label": "09/10/25",
          "score": 21,
          "metric": "LINK: R$ 117.44 (Z: -0.41σ)"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "LINK: R$ 110.61 (Z: +1.38σ)"
        },
        {
          "label": "17/10/25",
          "score": 53,
          "metric": "LINK: R$ 90.73 (Z: -1.06σ)"
        },
        {
          "label": "21/10/25",
          "score": 25,
          "metric": "LINK: R$ 97.02 (Z: -0.51σ)"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "LINK: R$ 97.28 (Z: +0.99σ)"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "LINK: R$ 99.82 (Z: +1.48σ)"
        },
        {
          "label": "02/11/25",
          "score": 13,
          "metric": "LINK: R$ 92.68 (Z: -0.25σ)"
        },
        {
          "label": "06/11/25",
          "score": 44,
          "metric": "LINK: R$ 78.64 (Z: -0.87σ)"
        },
        {
          "label": "10/11/25",
          "score": 5,
          "metric": "LINK: R$ 85.42 (Z: +0.30σ)"
        },
        {
          "label": "03/12/25",
          "score": 5,
          "metric": "LINK: R$ 76.50 (Z: +1.40σ)"
        },
        {
          "label": "07/12/25",
          "score": 33,
          "metric": "LINK: R$ 74.52 (Z: -0.65σ)"
        },
        {
          "label": "18/01/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "22/01/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "28/01/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "01/02/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "06/02/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "10/02/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "16/02/26",
          "score": 57,
          "metric": "LINK: R$ nan (Z: +nanσ)"
        },
        {
          "label": "21/02/26",
          "score": 5,
          "metric": "LINK: R$ 46.47 (Z: +1.67σ)"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "LINK: R$ 44.58 (Z: +2.17σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "LINK: R$ 45.91 (Z: +0.84σ)"
        },
        {
          "label": "07/03/26",
          "score": 68,
          "metric": "LINK: R$ 46.45 (Z: -1.36σ)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "LINK: R$ 46.77 (Z: +0.70σ)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "LINK: R$ 51.58 (Z: +2.44σ)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "LINK: R$ 48.11 (Z: +0.73σ)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "LINK: R$ 48.79 (Z: +1.38σ)"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "LINK: R$ 45.49 (Z: +1.60σ)"
        },
        {
          "label": "03/04/26",
          "score": 9,
          "metric": "LINK: R$ 44.89 (Z: -0.17σ)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "LINK: R$ 47.47 (Z: +1.84σ)"
        },
        {
          "label": "12/04/26",
          "score": 100,
          "metric": "LINK: R$ 44.27 (Z: -2.05σ)"
        },
        {
          "label": "16/04/26",
          "score": 5,
          "metric": "LINK: R$ 47.10 (Z: +1.96σ)"
        },
        {
          "label": "20/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.41 (Z: +0.96σ)"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "LINK: R$ 47.10 (Z: +1.27σ)"
        },
        {
          "label": "29/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.67 (Z: +0.70σ)"
        },
        {
          "label": "03/05/26",
          "score": 5,
          "metric": "LINK: R$ 45.46 (Z: +0.44σ)"
        },
        {
          "label": "07/05/26",
          "score": 28,
          "metric": "LINK: R$ 48.59 (Z: -0.56σ)"
        },
        {
          "label": "13/05/26",
          "score": 16,
          "metric": "LINK: R$ 50.88 (Z: -0.31σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "LINK: R$ 48.12 (Z: -2.04σ)"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "LINK: R$ 49.19 (Z: +1.95σ)"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "LINK: R$ 47.95 (Z: +0.24σ)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "LINK: R$ 46.70 (Z: +2.06σ)"
        },
        {
          "label": "04/06/26",
          "score": 100,
          "metric": "LINK: R$ 40.27 (Z: -2.35σ)"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "LINK: R$ 41.23 (Z: +1.85σ)"
        },
        {
          "label": "12/06/26",
          "score": 5,
          "metric": "LINK: R$ 40.22 (Z: +0.34σ)"
        },
        {
          "label": "16/06/26",
          "score": 5,
          "metric": "LINK: R$ 41.49 (Z: +0.32σ)"
        },
        {
          "label": "20/06/26",
          "score": 9,
          "metric": "LINK: R$ 40.84 (Z: -0.19σ)"
        },
        {
          "label": "24/06/26",
          "score": 42,
          "metric": "LINK: R$ 39.69 (Z: -0.83σ)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "LINK: R$ 38.29 (Z: +0.11σ)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "LINK: R$ 38.95 (Z: +1.59σ)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "LINK: R$ 42.32 (Z: +0.83σ)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "LINK: R$ 40.62 (Z: +1.70σ)"
        },
        {
          "label": "14/07/26",
          "score": 21,
          "metric": "LINK: R$ 40.98 (Z: -0.42σ)"
        },
        {
          "label": "18/07/26",
          "score": 12,
          "metric": "LINK: R$ 42.60 (Z: -0.24σ)"
        },
        {
          "label": "22/07/26",
          "score": 5,
          "metric": "LINK: R$ 44.33 (Z: +0.82σ)"
        },
        {
          "label": "26/07/26",
          "score": 5,
          "metric": "LINK: R$ 43.01 (Z: +0.68σ)"
        },
        {
          "label": "30/07/26",
          "score": 5,
          "metric": "LINK: R$ 42.86 (Z: +0.04σ)"
        },
        {
          "label": "03/08/26",
          "score": 5,
          "metric": "LINK: R$ 42.22 (Z: +0.40σ)"
        },
        {
          "label": "07/08/26",
          "score": 5,
          "metric": "LINK: R$ 41.98 (Z: -0.05σ)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "LINK: R$ 43.10 (Z: +2.25σ)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "LINK: R$ 50.35 (Z: +4.06σ)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "LINK: R$ 50.87 (Z: +4.45σ)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "LINK: R$ 59.78 (Z: -0.05σ)"
        }
      ]
    }
  },
  {
    "id": 5,
    "nome": "Plano Gravidade Zero",
    "badge": "🪐 Spillover SOL/BTC",
    "categoria": "baixo_risco",
    "par": "BTC <-> SOL",
    "lote_brl": 50.0,
    "lucro_min_pct": 3.0,
    "gatilho_desc": "Z_SOL/BTC 720h <= -1.75σ com PC1 >= 40%",
    "trava_ruptura": "Trava Pânico: Bloqueado se PC1 > 70% (Colapso Sistêmico)",
    "cooldown_horas": 4.0,
    "valor_atual_str": "SOL/BTC = 0.00122 (Z: +1.81σ)",
    "alvo_str": "Z_SOL/BTC <= -1.75σ (Sobrevenda de SOL)",
    "distancia_display": "Faltam 1.75σ para gatilho",
    "proximidade_score": 5,
    "status": "SENTINELA_CICLICA",
    "icone": "🪐",
    "cor": "#EC4899",
    "descricao_executiva": "Captura o efeito de transbordamento (spillover) de liquidez do Bitcoin para a Solana. Monitora o Z-score do ratio SOL/BTC em janela de 30 dias (720h), disparando quando a Solana fica sobrevendida em relação ao Bitcoin.",
    "condicoes_ativacao": "• Z-Score do par SOL/BTC atinge desvio Z <= -1.75σ na janela móvel de 720 horas (30 dias).<br>• Razão de Absorção PC1 >= 40% indicando correlação sistêmica de mercado.",
    "limitacoes_trava": "• <b>Trava de Ruptura de Rede:</b> Bloqueia compras se houver interrupção técnica no cluster Solana.<br>• <b>Trava de Pânico Sistêmico:</b> Abortado se PC1 > 70%.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.77σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.80σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.84σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.83σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.09σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.90σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.93σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.99σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.11σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.99σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.96σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.00σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.90σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.89σ)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.87σ)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.85σ)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.04σ)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.97σ)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.97σ)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.96σ)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.22σ)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.23σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "19:45",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "19:46",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.89σ)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.90σ)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.11σ)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.89σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.84σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "19:54",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.95σ)"
        },
        {
          "label": "19:55",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.96σ)"
        },
        {
          "label": "19:56",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "19:57",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.86σ)"
        },
        {
          "label": "19:58",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.86σ)"
        },
        {
          "label": "19:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.85σ)"
        },
        {
          "label": "20:01",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.79σ)"
        },
        {
          "label": "20:01",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.76σ)"
        },
        {
          "label": "20:02",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.77σ)"
        },
        {
          "label": "20:03",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.82σ)"
        },
        {
          "label": "20:04",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.84σ)"
        },
        {
          "label": "20:05",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.86σ)"
        },
        {
          "label": "20:06",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "20:07",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.90σ)"
        },
        {
          "label": "20:08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.87σ)"
        },
        {
          "label": "20:09",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.90σ)"
        },
        {
          "label": "20:10",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.85σ)"
        },
        {
          "label": "20:12",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.93σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.92σ)"
        },
        {
          "label": "20:14",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.84σ)"
        },
        {
          "label": "20:15",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.83σ)"
        },
        {
          "label": "20:16",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.84σ)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.85σ)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.81σ)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.52σ)"
        },
        {
          "label": "20:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.58σ)"
        },
        {
          "label": "20:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.64σ)"
        },
        {
          "label": "21:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.84σ)"
        },
        {
          "label": "21:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.74σ)"
        },
        {
          "label": "21:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.10σ)"
        },
        {
          "label": "22:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.02σ)"
        },
        {
          "label": "22:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.26σ)"
        },
        {
          "label": "22:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.42σ)"
        },
        {
          "label": "23:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.37σ)"
        },
        {
          "label": "23:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.21σ)"
        },
        {
          "label": "23:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.15σ)"
        },
        {
          "label": "00:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.44σ)"
        },
        {
          "label": "00:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.45σ)"
        },
        {
          "label": "00:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.52σ)"
        },
        {
          "label": "01:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.59σ)"
        },
        {
          "label": "01:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.60σ)"
        },
        {
          "label": "01:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.62σ)"
        },
        {
          "label": "02:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.75σ)"
        },
        {
          "label": "02:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.89σ)"
        },
        {
          "label": "02:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.19σ)"
        },
        {
          "label": "03:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.82σ)"
        },
        {
          "label": "03:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.80σ)"
        },
        {
          "label": "03:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.89σ)"
        },
        {
          "label": "04:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +2.95σ)"
        },
        {
          "label": "04:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00128 (Z: +4.83σ)"
        },
        {
          "label": "04:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00126 (Z: +4.09σ)"
        },
        {
          "label": "05:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "05:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.93σ)"
        },
        {
          "label": "05:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.94σ)"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.32σ)"
        },
        {
          "label": "06:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "07:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "07:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.38σ)"
        },
        {
          "label": "07:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.24σ)"
        },
        {
          "label": "08:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.29σ)"
        },
        {
          "label": "08:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.69σ)"
        },
        {
          "label": "08:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.10σ)"
        },
        {
          "label": "09:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "09:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "09:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "10:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.16σ)"
        },
        {
          "label": "10:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "10:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.49σ)"
        },
        {
          "label": "11:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.51σ)"
        },
        {
          "label": "11:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.70σ)"
        },
        {
          "label": "11:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.64σ)"
        },
        {
          "label": "12:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.95σ)"
        },
        {
          "label": "12:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.93σ)"
        },
        {
          "label": "12:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.86σ)"
        },
        {
          "label": "13:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "13:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.89σ)"
        },
        {
          "label": "13:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.02σ)"
        },
        {
          "label": "14:14",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.00σ)"
        },
        {
          "label": "14:24",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "14:34",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.05σ)"
        },
        {
          "label": "14:44",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.77σ)"
        },
        {
          "label": "14:55",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.59σ)"
        },
        {
          "label": "15:05",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.61σ)"
        },
        {
          "label": "15:15",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.03σ)"
        },
        {
          "label": "15:25",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "15:36",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "15:46",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.10σ)"
        },
        {
          "label": "15:57",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "16:07",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.17σ)"
        },
        {
          "label": "16:18",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.89σ)"
        },
        {
          "label": "16:28",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "16:38",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.21σ)"
        },
        {
          "label": "16:48",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.21σ)"
        },
        {
          "label": "16:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.15σ)"
        },
        {
          "label": "17:09",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.18σ)"
        },
        {
          "label": "17:20",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.05σ)"
        },
        {
          "label": "17:30",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.99σ)"
        },
        {
          "label": "17:41",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.02σ)"
        },
        {
          "label": "17:51",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.15σ)"
        },
        {
          "label": "18:01",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "18:12",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.00σ)"
        },
        {
          "label": "18:22",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "18:32",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.79σ)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.15σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.70σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.16σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.23σ)"
        },
        {
          "label": "19:56",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.91σ)"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.85σ)"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.81σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.57σ)"
        },
        {
          "label": "15/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.61σ)"
        },
        {
          "label": "16/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.43σ)"
        },
        {
          "label": "16/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.36σ)"
        },
        {
          "label": "16/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.50σ)"
        },
        {
          "label": "16/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.40σ)"
        },
        {
          "label": "16/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.51σ)"
        },
        {
          "label": "16/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.40σ)"
        },
        {
          "label": "16/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.36σ)"
        },
        {
          "label": "16/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.40σ)"
        },
        {
          "label": "16/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.40σ)"
        },
        {
          "label": "16/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.15σ)"
        },
        {
          "label": "16/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.27σ)"
        },
        {
          "label": "16/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.83σ)"
        },
        {
          "label": "17/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.93σ)"
        },
        {
          "label": "17/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.14σ)"
        },
        {
          "label": "17/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.16σ)"
        },
        {
          "label": "17/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.02σ)"
        },
        {
          "label": "17/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.10σ)"
        },
        {
          "label": "17/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.10σ)"
        },
        {
          "label": "17/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.98σ)"
        },
        {
          "label": "17/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.00σ)"
        },
        {
          "label": "17/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.87σ)"
        },
        {
          "label": "17/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.59σ)"
        },
        {
          "label": "17/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.44σ)"
        },
        {
          "label": "17/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.51σ)"
        },
        {
          "label": "18/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.53σ)"
        },
        {
          "label": "18/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.34σ)"
        },
        {
          "label": "18/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.55σ)"
        },
        {
          "label": "18/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.57σ)"
        },
        {
          "label": "18/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.68σ)"
        },
        {
          "label": "18/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.75σ)"
        },
        {
          "label": "18/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.88σ)"
        },
        {
          "label": "18/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.68σ)"
        },
        {
          "label": "18/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.05σ)"
        },
        {
          "label": "18/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.19σ)"
        },
        {
          "label": "18/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.16σ)"
        },
        {
          "label": "18/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.25σ)"
        },
        {
          "label": "19/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.14σ)"
        },
        {
          "label": "19/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.21σ)"
        },
        {
          "label": "19/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.48σ)"
        },
        {
          "label": "19/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.40σ)"
        },
        {
          "label": "19/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "19/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.61σ)"
        },
        {
          "label": "19/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.62σ)"
        },
        {
          "label": "19/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.59σ)"
        },
        {
          "label": "19/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.12σ)"
        },
        {
          "label": "19/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.27σ)"
        },
        {
          "label": "19/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.51σ)"
        },
        {
          "label": "19/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +3.38σ)"
        },
        {
          "label": "20/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.90σ)"
        },
        {
          "label": "20/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.69σ)"
        },
        {
          "label": "20/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.44σ)"
        },
        {
          "label": "20/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.49σ)"
        },
        {
          "label": "20/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.57σ)"
        },
        {
          "label": "20/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.98σ)"
        },
        {
          "label": "20/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.92σ)"
        },
        {
          "label": "20/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.74σ)"
        },
        {
          "label": "20/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.57σ)"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.36σ)"
        },
        {
          "label": "20/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.36σ)"
        },
        {
          "label": "20/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.45σ)"
        },
        {
          "label": "21/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.42σ)"
        },
        {
          "label": "21/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.97σ)"
        },
        {
          "label": "21/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.96σ)"
        },
        {
          "label": "21/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.36σ)"
        },
        {
          "label": "21/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.60σ)"
        },
        {
          "label": "21/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: +0.04σ)"
        },
        {
          "label": "21/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.27σ)"
        },
        {
          "label": "21/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.61σ)"
        },
        {
          "label": "21/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.52σ)"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.79σ)"
        },
        {
          "label": "21/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.62σ)"
        },
        {
          "label": "21/08 22:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.10σ)"
        },
        {
          "label": "22/08 00:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "22/08 02:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.91σ)"
        },
        {
          "label": "22/08 04:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +3.02σ)"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.03σ)"
        },
        {
          "label": "22/08 08:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.20σ)"
        },
        {
          "label": "22/08 10:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.14σ)"
        },
        {
          "label": "22/08 12:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "22/08 14:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.97σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.99σ)"
        },
        {
          "label": "22/08 16:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.06σ)"
        },
        {
          "label": "22/08 18:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.09σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.12σ)"
        },
        {
          "label": "22/08 20:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.81σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 50,
          "metric": "SOL/BTC: 0.00117 (Z: -0.88σ)"
        },
        {
          "label": "24/07",
          "score": 63,
          "metric": "SOL/BTC: 0.00116 (Z: -1.10σ)"
        },
        {
          "label": "24/07",
          "score": 67,
          "metric": "SOL/BTC: 0.00116 (Z: -1.17σ)"
        },
        {
          "label": "24/07",
          "score": 74,
          "metric": "SOL/BTC: 0.00115 (Z: -1.29σ)"
        },
        {
          "label": "25/07",
          "score": 67,
          "metric": "SOL/BTC: 0.00116 (Z: -1.17σ)"
        },
        {
          "label": "25/07",
          "score": 73,
          "metric": "SOL/BTC: 0.00115 (Z: -1.28σ)"
        },
        {
          "label": "25/07",
          "score": 73,
          "metric": "SOL/BTC: 0.00116 (Z: -1.27σ)"
        },
        {
          "label": "26/07",
          "score": 67,
          "metric": "SOL/BTC: 0.00116 (Z: -1.17σ)"
        },
        {
          "label": "26/07",
          "score": 69,
          "metric": "SOL/BTC: 0.00116 (Z: -1.21σ)"
        },
        {
          "label": "26/07",
          "score": 63,
          "metric": "SOL/BTC: 0.00117 (Z: -1.10σ)"
        },
        {
          "label": "27/07",
          "score": 56,
          "metric": "SOL/BTC: 0.00117 (Z: -0.98σ)"
        },
        {
          "label": "27/07",
          "score": 50,
          "metric": "SOL/BTC: 0.00118 (Z: -0.88σ)"
        },
        {
          "label": "27/07",
          "score": 57,
          "metric": "SOL/BTC: 0.00117 (Z: -1.00σ)"
        },
        {
          "label": "28/07",
          "score": 72,
          "metric": "SOL/BTC: 0.00116 (Z: -1.26σ)"
        },
        {
          "label": "28/07",
          "score": 74,
          "metric": "SOL/BTC: 0.00115 (Z: -1.30σ)"
        },
        {
          "label": "28/07",
          "score": 63,
          "metric": "SOL/BTC: 0.00116 (Z: -1.10σ)"
        },
        {
          "label": "29/07",
          "score": 84,
          "metric": "SOL/BTC: 0.00114 (Z: -1.46σ)"
        },
        {
          "label": "29/07",
          "score": 81,
          "metric": "SOL/BTC: 0.00114 (Z: -1.42σ)"
        },
        {
          "label": "29/07",
          "score": 79,
          "metric": "SOL/BTC: 0.00114 (Z: -1.38σ)"
        },
        {
          "label": "30/07",
          "score": 75,
          "metric": "SOL/BTC: 0.00115 (Z: -1.31σ)"
        },
        {
          "label": "30/07",
          "score": 77,
          "metric": "SOL/BTC: 0.00114 (Z: -1.35σ)"
        },
        {
          "label": "30/07",
          "score": 66,
          "metric": "SOL/BTC: 0.00115 (Z: -1.15σ)"
        },
        {
          "label": "31/07",
          "score": 68,
          "metric": "SOL/BTC: 0.00115 (Z: -1.19σ)"
        },
        {
          "label": "31/07",
          "score": 60,
          "metric": "SOL/BTC: 0.00115 (Z: -1.04σ)"
        },
        {
          "label": "31/07",
          "score": 52,
          "metric": "SOL/BTC: 0.00116 (Z: -0.91σ)"
        },
        {
          "label": "01/08",
          "score": 52,
          "metric": "SOL/BTC: 0.00116 (Z: -0.91σ)"
        },
        {
          "label": "01/08",
          "score": 55,
          "metric": "SOL/BTC: 0.00116 (Z: -0.97σ)"
        },
        {
          "label": "01/08",
          "score": 71,
          "metric": "SOL/BTC: 0.00114 (Z: -1.24σ)"
        },
        {
          "label": "02/08",
          "score": 55,
          "metric": "SOL/BTC: 0.00115 (Z: -0.97σ)"
        },
        {
          "label": "02/08",
          "score": 51,
          "metric": "SOL/BTC: 0.00116 (Z: -0.89σ)"
        },
        {
          "label": "02/08",
          "score": 46,
          "metric": "SOL/BTC: 0.00116 (Z: -0.80σ)"
        },
        {
          "label": "03/08",
          "score": 49,
          "metric": "SOL/BTC: 0.00116 (Z: -0.85σ)"
        },
        {
          "label": "03/08",
          "score": 49,
          "metric": "SOL/BTC: 0.00116 (Z: -0.86σ)"
        },
        {
          "label": "03/08",
          "score": 49,
          "metric": "SOL/BTC: 0.00116 (Z: -0.85σ)"
        },
        {
          "label": "04/08",
          "score": 52,
          "metric": "SOL/BTC: 0.00115 (Z: -0.91σ)"
        },
        {
          "label": "04/08",
          "score": 47,
          "metric": "SOL/BTC: 0.00116 (Z: -0.82σ)"
        },
        {
          "label": "04/08",
          "score": 50,
          "metric": "SOL/BTC: 0.00116 (Z: -0.88σ)"
        },
        {
          "label": "05/08",
          "score": 61,
          "metric": "SOL/BTC: 0.00115 (Z: -1.07σ)"
        },
        {
          "label": "05/08",
          "score": 55,
          "metric": "SOL/BTC: 0.00115 (Z: -0.97σ)"
        },
        {
          "label": "05/08",
          "score": 64,
          "metric": "SOL/BTC: 0.00115 (Z: -1.12σ)"
        },
        {
          "label": "06/08",
          "score": 72,
          "metric": "SOL/BTC: 0.00114 (Z: -1.26σ)"
        },
        {
          "label": "06/08",
          "score": 81,
          "metric": "SOL/BTC: 0.00114 (Z: -1.42σ)"
        },
        {
          "label": "06/08",
          "score": 93,
          "metric": "SOL/BTC: 0.00113 (Z: -1.63σ)"
        },
        {
          "label": "07/08",
          "score": 93,
          "metric": "SOL/BTC: 0.00113 (Z: -1.63σ)"
        },
        {
          "label": "07/08",
          "score": 93,
          "metric": "SOL/BTC: 0.00113 (Z: -1.62σ)"
        },
        {
          "label": "07/08",
          "score": 78,
          "metric": "SOL/BTC: 0.00114 (Z: -1.37σ)"
        },
        {
          "label": "08/08",
          "score": 55,
          "metric": "SOL/BTC: 0.00115 (Z: -0.97σ)"
        },
        {
          "label": "08/08",
          "score": 29,
          "metric": "SOL/BTC: 0.00116 (Z: -0.51σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: -0.01σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: +0.06σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.25σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.73σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.37σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.64σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.15σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.98σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.56σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.27σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.50σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.36σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.55σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.49σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.91σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.62σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.92σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.63σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.55σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.56σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.37σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.12σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.08σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.94σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.54σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.61σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.07σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.09σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.28σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +2.05σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +2.27σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.49σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.88σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.57σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.00σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.30σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.63σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +4.51σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.95σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.11σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.81σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00170 (Z: +2.20σ)"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00177 (Z: +1.95σ)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00184 (Z: +1.60σ)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00187 (Z: +1.36σ)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00183 (Z: +0.81σ)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00198 (Z: +1.63σ)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00203 (Z: +1.36σ)"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00206 (Z: +1.21σ)"
        },
        {
          "label": "23/09/25",
          "score": 8,
          "metric": "SOL/BTC: 0.00192 (Z: -0.14σ)"
        },
        {
          "label": "27/09/25",
          "score": 53,
          "metric": "SOL/BTC: 0.00185 (Z: -0.92σ)"
        },
        {
          "label": "01/10/25",
          "score": 42,
          "metric": "SOL/BTC: 0.00186 (Z: -0.73σ)"
        },
        {
          "label": "05/10/25",
          "score": 47,
          "metric": "SOL/BTC: 0.00186 (Z: -0.83σ)"
        },
        {
          "label": "09/10/25",
          "score": 75,
          "metric": "SOL/BTC: 0.00181 (Z: -1.32σ)"
        },
        {
          "label": "13/10/25",
          "score": 47,
          "metric": "SOL/BTC: 0.00180 (Z: -0.82σ)"
        },
        {
          "label": "17/10/25",
          "score": 65,
          "metric": "SOL/BTC: 0.00173 (Z: -1.13σ)"
        },
        {
          "label": "21/10/25",
          "score": 61,
          "metric": "SOL/BTC: 0.00172 (Z: -1.07σ)"
        },
        {
          "label": "25/10/25",
          "score": 33,
          "metric": "SOL/BTC: 0.00174 (Z: -0.58σ)"
        },
        {
          "label": "29/10/25",
          "score": 13,
          "metric": "SOL/BTC: 0.00176 (Z: -0.22σ)"
        },
        {
          "label": "02/11/25",
          "score": 59,
          "metric": "SOL/BTC: 0.00168 (Z: -1.04σ)"
        },
        {
          "label": "06/11/25",
          "score": 100,
          "metric": "SOL/BTC: 0.00154 (Z: -2.22σ)"
        },
        {
          "label": "10/11/25",
          "score": 82,
          "metric": "SOL/BTC: 0.00157 (Z: -1.43σ)"
        },
        {
          "label": "03/12/25",
          "score": 78,
          "metric": "SOL/BTC: 0.00152 (Z: -1.36σ)"
        },
        {
          "label": "07/12/25",
          "score": 91,
          "metric": "SOL/BTC: 0.00146 (Z: -1.59σ)"
        },
        {
          "label": "18/01/26",
          "score": 56,
          "metric": "SOL/BTC: 0.00149 (Z: -0.98σ)"
        },
        {
          "label": "22/01/26",
          "score": 71,
          "metric": "SOL/BTC: 0.00143 (Z: -1.24σ)"
        },
        {
          "label": "28/01/26",
          "score": 67,
          "metric": "SOL/BTC: 0.00142 (Z: -1.17σ)"
        },
        {
          "label": "01/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00133 (Z: -2.40σ)"
        },
        {
          "label": "06/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00122 (Z: -2.64σ)"
        },
        {
          "label": "10/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00120 (Z: -2.07σ)"
        },
        {
          "label": "16/02/26",
          "score": 62,
          "metric": "SOL/BTC: 0.00125 (Z: -1.09σ)"
        },
        {
          "label": "21/02/26",
          "score": 48,
          "metric": "SOL/BTC: 0.00125 (Z: -0.84σ)"
        },
        {
          "label": "25/02/26",
          "score": 21,
          "metric": "SOL/BTC: 0.00127 (Z: -0.36σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00128 (Z: +0.02σ)"
        },
        {
          "label": "07/03/26",
          "score": 13,
          "metric": "SOL/BTC: 0.00125 (Z: -0.23σ)"
        },
        {
          "label": "11/03/26",
          "score": 10,
          "metric": "SOL/BTC: 0.00124 (Z: -0.18σ)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +1.49σ)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +1.12σ)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00130 (Z: +2.09σ)"
        },
        {
          "label": "30/03/26",
          "score": 37,
          "metric": "SOL/BTC: 0.00124 (Z: -0.64σ)"
        },
        {
          "label": "03/04/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00120 (Z: -1.95σ)"
        },
        {
          "label": "08/04/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00118 (Z: -1.80σ)"
        },
        {
          "label": "12/04/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00115 (Z: -1.93σ)"
        },
        {
          "label": "16/04/26",
          "score": 64,
          "metric": "SOL/BTC: 0.00116 (Z: -1.12σ)"
        },
        {
          "label": "20/04/26",
          "score": 79,
          "metric": "SOL/BTC: 0.00113 (Z: -1.38σ)"
        },
        {
          "label": "24/04/26",
          "score": 75,
          "metric": "SOL/BTC: 0.00111 (Z: -1.31σ)"
        },
        {
          "label": "29/04/26",
          "score": 81,
          "metric": "SOL/BTC: 0.00110 (Z: -1.42σ)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00107 (Z: -1.81σ)"
        },
        {
          "label": "07/05/26",
          "score": 29,
          "metric": "SOL/BTC: 0.00110 (Z: -0.51σ)"
        },
        {
          "label": "13/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00114 (Z: +0.59σ)"
        },
        {
          "label": "17/05/26",
          "score": 22,
          "metric": "SOL/BTC: 0.00110 (Z: -0.39σ)"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.33σ)"
        },
        {
          "label": "26/05/26",
          "score": 17,
          "metric": "SOL/BTC: 0.00110 (Z: -0.30σ)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.30σ)"
        },
        {
          "label": "04/06/26",
          "score": 35,
          "metric": "SOL/BTC: 0.00109 (Z: -0.62σ)"
        },
        {
          "label": "08/06/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00105 (Z: -1.78σ)"
        },
        {
          "label": "12/06/26",
          "score": 73,
          "metric": "SOL/BTC: 0.00105 (Z: -1.28σ)"
        },
        {
          "label": "16/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00111 (Z: +0.55σ)"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00110 (Z: +0.21σ)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00111 (Z: +0.53σ)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +1.86σ)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00130 (Z: +2.84σ)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00128 (Z: +1.50σ)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +0.74σ)"
        },
        {
          "label": "14/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +0.13σ)"
        },
        {
          "label": "18/07/26",
          "score": 25,
          "metric": "SOL/BTC: 0.00118 (Z: -0.44σ)"
        },
        {
          "label": "22/07/26",
          "score": 35,
          "metric": "SOL/BTC: 0.00118 (Z: -0.61σ)"
        },
        {
          "label": "26/07/26",
          "score": 68,
          "metric": "SOL/BTC: 0.00116 (Z: -1.19σ)"
        },
        {
          "label": "30/07/26",
          "score": 70,
          "metric": "SOL/BTC: 0.00115 (Z: -1.23σ)"
        },
        {
          "label": "03/08/26",
          "score": 50,
          "metric": "SOL/BTC: 0.00116 (Z: -0.87σ)"
        },
        {
          "label": "07/08/26",
          "score": 96,
          "metric": "SOL/BTC: 0.00113 (Z: -1.68σ)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.89σ)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.57σ)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.43σ)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.81σ)"
        }
      ]
    }
  },
  {
    "id": 6,
    "nome": "Plano Corisco da Solana",
    "badge": "⚡ SOL Bounce 15m",
    "categoria": "medio_risco",
    "par": "BRL <-> SOL",
    "lote_brl": 50.0,
    "lucro_min_pct": 0.9,
    "gatilho_desc": "Banda Inferior Bollinger 15m (Z <= -2.0σ)",
    "trava_ruptura": "Filtro Causal: Exige STE >= 0, PC1 < 70% e Ew < 50",
    "cooldown_horas": 1.5,
    "valor_atual_str": "SOL R$ 482.70 (Z_15m: -1.28σ)",
    "alvo_str": "Preço <= R$ 482.42",
    "distancia_display": "+0.1% para banda inferior",
    "proximidade_score": 64,
    "status": "AGUARDANDO_CORRECAO_15M",
    "icone": "⚡",
    "cor": "#F59E0B",
    "descricao_executiva": "Sniper de alta frequência na Solana. Monitora o canal dinâmico de Bollinger no timeframe intradiário de 15 minutos, disparando compras rápidas no toque da banda inferior com liquidação em repique de média.",
    "condicoes_ativacao": "• Preço da SOL toca ou perfura a banda inferior de Bollinger (20 períodos, 2.0 desvios) em 15m.<br>• Vetor de aceleração cinética (d²P/dt²) indica exaustão vendedora.",
    "limitacoes_trava": "• <b>Weekend Shield:</b> Desativado aos finais de semana para anular falsos rompimentos.<br>• <b>Trava Wavelet Ew < 50:</b> Exige desaceleração de choque.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 40,
          "metric": "SOL 15m: R$ 482.90 (Z: -0.81σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "SOL 15m: R$ 487.90 (Z: +0.86σ)"
        },
        {
          "label": "19:19",
          "score": 44,
          "metric": "SOL 15m: R$ 482.80 (Z: -0.87σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "SOL 15m: R$ 487.40 (Z: +0.68σ)"
        },
        {
          "label": "19:20",
          "score": 30,
          "metric": "SOL 15m: R$ 483.70 (Z: -0.60σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "SOL 15m: R$ 487.40 (Z: +0.66σ)"
        },
        {
          "label": "19:21",
          "score": 27,
          "metric": "SOL 15m: R$ 484.00 (Z: -0.54σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "SOL 15m: R$ 486.90 (Z: +0.50σ)"
        },
        {
          "label": "19:22",
          "score": 32,
          "metric": "SOL 15m: R$ 483.80 (Z: -0.65σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL 15m: R$ 486.90 (Z: +0.55σ)"
        },
        {
          "label": "19:23",
          "score": 34,
          "metric": "SOL 15m: R$ 483.80 (Z: -0.68σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "SOL 15m: R$ 487.00 (Z: +0.64σ)"
        },
        {
          "label": "19:24",
          "score": 40,
          "metric": "SOL 15m: R$ 483.60 (Z: -0.80σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "SOL 15m: R$ 487.00 (Z: +0.69σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "SOL 15m: R$ 487.30 (Z: +0.92σ)"
        },
        {
          "label": "19:26",
          "score": 37,
          "metric": "SOL 15m: R$ 484.20 (Z: -0.74σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +1.20σ)"
        },
        {
          "label": "19:27",
          "score": 42,
          "metric": "SOL 15m: R$ 484.20 (Z: -0.85σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +1.19σ)"
        },
        {
          "label": "19:28",
          "score": 42,
          "metric": "SOL 15m: R$ 484.30 (Z: -0.83σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +1.16σ)"
        },
        {
          "label": "19:29",
          "score": 30,
          "metric": "SOL 15m: R$ 484.80 (Z: -0.59σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "SOL 15m: R$ 487.30 (Z: +0.85σ)"
        },
        {
          "label": "19:30",
          "score": 41,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.83σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "SOL 15m: R$ 487.50 (Z: +0.92σ)"
        },
        {
          "label": "19:31",
          "score": 47,
          "metric": "SOL 15m: R$ 484.40 (Z: -0.94σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +1.04σ)"
        },
        {
          "label": "19:32",
          "score": 51,
          "metric": "SOL 15m: R$ 484.40 (Z: -1.02σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +1.09σ)"
        },
        {
          "label": "19:33",
          "score": 69,
          "metric": "SOL 15m: R$ 483.40 (Z: -1.37σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +1.03σ)"
        },
        {
          "label": "19:34",
          "score": 73,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.46σ)"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +0.99σ)"
        },
        {
          "label": "19:35",
          "score": 68,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.35σ)"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +0.88σ)"
        },
        {
          "label": "19:36",
          "score": 63,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.25σ)"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "SOL 15m: R$ 488.20 (Z: +1.05σ)"
        },
        {
          "label": "19:37",
          "score": 57,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.14σ)"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +0.92σ)"
        },
        {
          "label": "19:38",
          "score": 14,
          "metric": "SOL 15m: R$ 485.00 (Z: -0.29σ)"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +0.81σ)"
        },
        {
          "label": "19:39",
          "score": 15,
          "metric": "SOL 15m: R$ 485.00 (Z: -0.31σ)"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +0.88σ)"
        },
        {
          "label": "19:40",
          "score": 34,
          "metric": "SOL 15m: R$ 484.10 (Z: -0.69σ)"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +0.88σ)"
        },
        {
          "label": "19:41",
          "score": 36,
          "metric": "SOL 15m: R$ 484.10 (Z: -0.72σ)"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +0.88σ)"
        },
        {
          "label": "19:42",
          "score": 39,
          "metric": "SOL 15m: R$ 484.10 (Z: -0.78σ)"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "SOL 15m: R$ 489.10 (Z: +1.32σ)"
        },
        {
          "label": "19:43",
          "score": 38,
          "metric": "SOL 15m: R$ 484.30 (Z: -0.77σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "SOL 15m: R$ 489.10 (Z: +1.25σ)"
        },
        {
          "label": "19:44",
          "score": 44,
          "metric": "SOL 15m: R$ 484.20 (Z: -0.88σ)"
        },
        {
          "label": "19:45",
          "score": 5,
          "metric": "SOL 15m: R$ 488.70 (Z: +1.05σ)"
        },
        {
          "label": "19:46",
          "score": 5,
          "metric": "SOL 15m: R$ 488.70 (Z: +1.01σ)"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "SOL 15m: R$ 488.50 (Z: +0.80σ)"
        },
        {
          "label": "19:47",
          "score": 58,
          "metric": "SOL 15m: R$ 483.90 (Z: -1.17σ)"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "SOL 15m: R$ 488.50 (Z: +0.77σ)"
        },
        {
          "label": "19:48",
          "score": 55,
          "metric": "SOL 15m: R$ 483.90 (Z: -1.10σ)"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "SOL 15m: R$ 488.40 (Z: +0.71σ)"
        },
        {
          "label": "19:49",
          "score": 60,
          "metric": "SOL 15m: R$ 483.60 (Z: -1.20σ)"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "SOL 15m: R$ 488.40 (Z: +0.70σ)"
        },
        {
          "label": "19:50",
          "score": 57,
          "metric": "SOL 15m: R$ 483.70 (Z: -1.13σ)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "SOL 15m: R$ 488.40 (Z: +0.68σ)"
        },
        {
          "label": "19:51",
          "score": 57,
          "metric": "SOL 15m: R$ 483.60 (Z: -1.14σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "SOL 15m: R$ 488.50 (Z: +0.75σ)"
        },
        {
          "label": "19:52",
          "score": 55,
          "metric": "SOL 15m: R$ 483.60 (Z: -1.11σ)"
        },
        {
          "label": "19:52",
          "score": 39,
          "metric": "SOL 15m: R$ 484.40 (Z: -0.79σ)"
        },
        {
          "label": "19:53",
          "score": 32,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.65σ)"
        },
        {
          "label": "19:54",
          "score": 27,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.55σ)"
        },
        {
          "label": "19:55",
          "score": 23,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.46σ)"
        },
        {
          "label": "19:56",
          "score": 41,
          "metric": "SOL 15m: R$ 483.70 (Z: -0.81σ)"
        },
        {
          "label": "19:57",
          "score": 48,
          "metric": "SOL 15m: R$ 483.10 (Z: -0.96σ)"
        },
        {
          "label": "19:58",
          "score": 52,
          "metric": "SOL 15m: R$ 482.80 (Z: -1.04σ)"
        },
        {
          "label": "19:59",
          "score": 42,
          "metric": "SOL 15m: R$ 483.00 (Z: -0.84σ)"
        },
        {
          "label": "20:01",
          "score": 57,
          "metric": "SOL 15m: R$ 482.20 (Z: -1.14σ)"
        },
        {
          "label": "20:01",
          "score": 57,
          "metric": "SOL 15m: R$ 482.00 (Z: -1.13σ)"
        },
        {
          "label": "20:02",
          "score": 43,
          "metric": "SOL 15m: R$ 482.40 (Z: -0.86σ)"
        },
        {
          "label": "20:03",
          "score": 26,
          "metric": "SOL 15m: R$ 482.90 (Z: -0.52σ)"
        },
        {
          "label": "20:04",
          "score": 18,
          "metric": "SOL 15m: R$ 483.10 (Z: -0.37σ)"
        },
        {
          "label": "20:05",
          "score": 5,
          "metric": "SOL 15m: R$ 483.50 (Z: +0.18σ)"
        },
        {
          "label": "20:06",
          "score": 5,
          "metric": "SOL 15m: R$ 483.50 (Z: +0.19σ)"
        },
        {
          "label": "20:07",
          "score": 5,
          "metric": "SOL 15m: R$ 483.70 (Z: +0.51σ)"
        },
        {
          "label": "20:08",
          "score": 5,
          "metric": "SOL 15m: R$ 483.60 (Z: +0.50σ)"
        },
        {
          "label": "20:09",
          "score": 5,
          "metric": "SOL 15m: R$ 483.60 (Z: +0.65σ)"
        },
        {
          "label": "20:10",
          "score": 5,
          "metric": "SOL 15m: R$ 483.20 (Z: +0.21σ)"
        },
        {
          "label": "20:12",
          "score": 5,
          "metric": "SOL 15m: R$ 483.70 (Z: +1.12σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "SOL 15m: R$ 483.50 (Z: +0.69σ)"
        },
        {
          "label": "20:14",
          "score": 36,
          "metric": "SOL 15m: R$ 482.70 (Z: -0.72σ)"
        },
        {
          "label": "20:15",
          "score": 34,
          "metric": "SOL 15m: R$ 482.70 (Z: -0.68σ)"
        },
        {
          "label": "20:16",
          "score": 31,
          "metric": "SOL 15m: R$ 482.80 (Z: -0.62σ)"
        },
        {
          "label": "20:17",
          "score": 33,
          "metric": "SOL 15m: R$ 482.90 (Z: -0.67σ)"
        },
        {
          "label": "20:18",
          "score": 64,
          "metric": "SOL 15m: R$ 482.70 (Z: -1.28σ)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 5,
          "metric": "SOL 15m: R$ 472.50 (Z: +1.87σ)"
        },
        {
          "label": "20:39",
          "score": 91,
          "metric": "SOL 15m: R$ 472.60 (Z: -1.82σ)"
        },
        {
          "label": "20:59",
          "score": 5,
          "metric": "SOL 15m: R$ 473.70 (Z: +1.16σ)"
        },
        {
          "label": "21:19",
          "score": 5,
          "metric": "SOL 15m: R$ 476.40 (Z: +1.24σ)"
        },
        {
          "label": "21:39",
          "score": 56,
          "metric": "SOL 15m: R$ 478.50 (Z: -1.12σ)"
        },
        {
          "label": "21:59",
          "score": 5,
          "metric": "SOL 15m: R$ 484.50 (Z: +1.17σ)"
        },
        {
          "label": "22:19",
          "score": 40,
          "metric": "SOL 15m: R$ 484.90 (Z: -0.80σ)"
        },
        {
          "label": "22:39",
          "score": 5,
          "metric": "SOL 15m: R$ 486.10 (Z: +0.92σ)"
        },
        {
          "label": "22:59",
          "score": 5,
          "metric": "SOL 15m: R$ 487.50 (Z: +0.67σ)"
        },
        {
          "label": "23:19",
          "score": 5,
          "metric": "SOL 15m: R$ 488.10 (Z: +2.01σ)"
        },
        {
          "label": "23:39",
          "score": 79,
          "metric": "SOL 15m: R$ 484.30 (Z: -1.57σ)"
        },
        {
          "label": "23:59",
          "score": 9,
          "metric": "SOL 15m: R$ 484.10 (Z: -0.17σ)"
        },
        {
          "label": "00:19",
          "score": 5,
          "metric": "SOL 15m: R$ 485.00 (Z: +1.58σ)"
        },
        {
          "label": "00:39",
          "score": 16,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.31σ)"
        },
        {
          "label": "00:59",
          "score": 5,
          "metric": "SOL 15m: R$ 485.10 (Z: +1.25σ)"
        },
        {
          "label": "01:19",
          "score": 36,
          "metric": "SOL 15m: R$ 485.90 (Z: -0.72σ)"
        },
        {
          "label": "01:39",
          "score": 23,
          "metric": "SOL 15m: R$ 486.20 (Z: -0.47σ)"
        },
        {
          "label": "01:59",
          "score": 5,
          "metric": "SOL 15m: R$ 485.50 (Z: +1.43σ)"
        },
        {
          "label": "02:19",
          "score": 5,
          "metric": "SOL 15m: R$ 488.20 (Z: +1.19σ)"
        },
        {
          "label": "02:39",
          "score": 5,
          "metric": "SOL 15m: R$ 491.00 (Z: +1.24σ)"
        },
        {
          "label": "02:59",
          "score": 5,
          "metric": "SOL 15m: R$ 494.10 (Z: +2.03σ)"
        },
        {
          "label": "03:19",
          "score": 5,
          "metric": "SOL 15m: R$ 500.60 (Z: +2.52σ)"
        },
        {
          "label": "03:39",
          "score": 25,
          "metric": "SOL 15m: R$ 501.20 (Z: -0.50σ)"
        },
        {
          "label": "03:59",
          "score": 68,
          "metric": "SOL 15m: R$ 500.20 (Z: -1.36σ)"
        },
        {
          "label": "04:19",
          "score": 81,
          "metric": "SOL 15m: R$ 499.50 (Z: -1.63σ)"
        },
        {
          "label": "04:39",
          "score": 5,
          "metric": "SOL 15m: R$ 519.20 (Z: +1.39σ)"
        },
        {
          "label": "04:59",
          "score": 96,
          "metric": "SOL 15m: R$ 511.60 (Z: -1.93σ)"
        },
        {
          "label": "05:19",
          "score": 12,
          "metric": "SOL 15m: R$ 485.10 (Z: -0.23σ)"
        },
        {
          "label": "05:39",
          "score": 37,
          "metric": "SOL 15m: R$ 484.00 (Z: -0.74σ)"
        },
        {
          "label": "05:59",
          "score": 5,
          "metric": "SOL 15m: R$ 487.30 (Z: +0.15σ)"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "SOL 15m: R$ 484.60 (Z: -0.04σ)"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "SOL 15m: R$ 490.00 (Z: +2.08σ)"
        },
        {
          "label": "06:59",
          "score": 13,
          "metric": "SOL 15m: R$ 487.60 (Z: -0.26σ)"
        },
        {
          "label": "07:19",
          "score": 54,
          "metric": "SOL 15m: R$ 486.70 (Z: -1.08σ)"
        },
        {
          "label": "07:39",
          "score": 53,
          "metric": "SOL 15m: R$ 490.00 (Z: -1.06σ)"
        },
        {
          "label": "07:59",
          "score": 89,
          "metric": "SOL 15m: R$ 487.90 (Z: -1.79σ)"
        },
        {
          "label": "08:19",
          "score": 15,
          "metric": "SOL 15m: R$ 488.70 (Z: -0.30σ)"
        },
        {
          "label": "08:39",
          "score": 30,
          "metric": "SOL 15m: R$ 482.00 (Z: -0.60σ)"
        },
        {
          "label": "08:59",
          "score": 5,
          "metric": "SOL 15m: R$ 485.80 (Z: +1.59σ)"
        },
        {
          "label": "09:19",
          "score": 5,
          "metric": "SOL 15m: R$ 487.20 (Z: +1.19σ)"
        },
        {
          "label": "09:39",
          "score": 97,
          "metric": "SOL 15m: R$ 486.10 (Z: -1.93σ)"
        },
        {
          "label": "09:59",
          "score": 5,
          "metric": "SOL 15m: R$ 485.10 (Z: +0.81σ)"
        },
        {
          "label": "10:19",
          "score": 85,
          "metric": "SOL 15m: R$ 474.50 (Z: -1.70σ)"
        },
        {
          "label": "10:39",
          "score": 5,
          "metric": "SOL 15m: R$ 481.20 (Z: +1.46σ)"
        },
        {
          "label": "10:59",
          "score": 63,
          "metric": "SOL 15m: R$ 479.40 (Z: -1.26σ)"
        },
        {
          "label": "11:19",
          "score": 80,
          "metric": "SOL 15m: R$ 478.60 (Z: -1.59σ)"
        },
        {
          "label": "11:39",
          "score": 5,
          "metric": "SOL 15m: R$ 482.20 (Z: +0.96σ)"
        },
        {
          "label": "11:59",
          "score": 22,
          "metric": "SOL 15m: R$ 481.70 (Z: -0.45σ)"
        },
        {
          "label": "12:19",
          "score": 5,
          "metric": "SOL 15m: R$ 485.30 (Z: +1.04σ)"
        },
        {
          "label": "12:39",
          "score": 53,
          "metric": "SOL 15m: R$ 485.00 (Z: -1.06σ)"
        },
        {
          "label": "12:59",
          "score": 100,
          "metric": "SOL 15m: R$ 484.80 (Z: -2.03σ)"
        },
        {
          "label": "13:19",
          "score": 48,
          "metric": "SOL 15m: R$ 484.50 (Z: -0.96σ)"
        },
        {
          "label": "13:39",
          "score": 54,
          "metric": "SOL 15m: R$ 483.50 (Z: -1.08σ)"
        },
        {
          "label": "13:59",
          "score": 5,
          "metric": "SOL 15m: R$ 485.90 (Z: +0.95σ)"
        },
        {
          "label": "14:14",
          "score": 53,
          "metric": "SOL 15m: R$ 484.10 (Z: -1.05σ)"
        },
        {
          "label": "14:24",
          "score": 54,
          "metric": "SOL 15m: R$ 483.50 (Z: -1.09σ)"
        },
        {
          "label": "14:34",
          "score": 5,
          "metric": "SOL 15m: R$ 485.20 (Z: +0.48σ)"
        },
        {
          "label": "14:44",
          "score": 96,
          "metric": "SOL 15m: R$ 481.50 (Z: -1.93σ)"
        },
        {
          "label": "14:55",
          "score": 53,
          "metric": "SOL 15m: R$ 479.90 (Z: -1.05σ)"
        },
        {
          "label": "15:05",
          "score": 55,
          "metric": "SOL 15m: R$ 480.80 (Z: -1.10σ)"
        },
        {
          "label": "15:15",
          "score": 5,
          "metric": "SOL 15m: R$ 485.80 (Z: +0.91σ)"
        },
        {
          "label": "15:25",
          "score": 5,
          "metric": "SOL 15m: R$ 487.10 (Z: +0.88σ)"
        },
        {
          "label": "15:36",
          "score": 5,
          "metric": "SOL 15m: R$ 487.30 (Z: +0.85σ)"
        },
        {
          "label": "15:46",
          "score": 5,
          "metric": "SOL 15m: R$ 486.40 (Z: +0.82σ)"
        },
        {
          "label": "15:57",
          "score": 5,
          "metric": "SOL 15m: R$ 486.70 (Z: +1.05σ)"
        },
        {
          "label": "16:07",
          "score": 5,
          "metric": "SOL 15m: R$ 487.00 (Z: +0.79σ)"
        },
        {
          "label": "16:18",
          "score": 19,
          "metric": "SOL 15m: R$ 483.80 (Z: -0.38σ)"
        },
        {
          "label": "16:28",
          "score": 53,
          "metric": "SOL 15m: R$ 484.30 (Z: -1.07σ)"
        },
        {
          "label": "16:38",
          "score": 5,
          "metric": "SOL 15m: R$ 488.20 (Z: +1.16σ)"
        },
        {
          "label": "16:48",
          "score": 5,
          "metric": "SOL 15m: R$ 488.60 (Z: +0.80σ)"
        },
        {
          "label": "16:59",
          "score": 5,
          "metric": "SOL 15m: R$ 488.20 (Z: +0.78σ)"
        },
        {
          "label": "17:09",
          "score": 5,
          "metric": "SOL 15m: R$ 488.50 (Z: +1.48σ)"
        },
        {
          "label": "17:20",
          "score": 40,
          "metric": "SOL 15m: R$ 486.70 (Z: -0.81σ)"
        },
        {
          "label": "17:30",
          "score": 74,
          "metric": "SOL 15m: R$ 485.20 (Z: -1.47σ)"
        },
        {
          "label": "17:41",
          "score": 51,
          "metric": "SOL 15m: R$ 485.70 (Z: -1.02σ)"
        },
        {
          "label": "17:51",
          "score": 5,
          "metric": "SOL 15m: R$ 487.70 (Z: +0.77σ)"
        },
        {
          "label": "18:01",
          "score": 93,
          "metric": "SOL 15m: R$ 486.10 (Z: -1.87σ)"
        },
        {
          "label": "18:12",
          "score": 5,
          "metric": "SOL 15m: R$ 485.80 (Z: +0.43σ)"
        },
        {
          "label": "18:22",
          "score": 5,
          "metric": "SOL 15m: R$ 487.90 (Z: +1.41σ)"
        },
        {
          "label": "18:32",
          "score": 81,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.62σ)"
        },
        {
          "label": "18:42",
          "score": 60,
          "metric": "SOL 15m: R$ 480.60 (Z: -1.20σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "SOL 15m: R$ 486.00 (Z: +0.77σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "SOL 15m: R$ 487.70 (Z: +1.01σ)"
        },
        {
          "label": "19:13",
          "score": 35,
          "metric": "SOL 15m: R$ 482.40 (Z: -0.71σ)"
        },
        {
          "label": "19:23",
          "score": 34,
          "metric": "SOL 15m: R$ 483.80 (Z: -0.68σ)"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +1.03σ)"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "SOL 15m: R$ 489.10 (Z: +1.25σ)"
        },
        {
          "label": "19:56",
          "score": 41,
          "metric": "SOL 15m: R$ 483.70 (Z: -0.81σ)"
        },
        {
          "label": "20:17",
          "score": 33,
          "metric": "SOL 15m: R$ 482.90 (Z: -0.67σ)"
        },
        {
          "label": "20:18",
          "score": 64,
          "metric": "SOL 15m: R$ 482.70 (Z: -1.28σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 69,
          "metric": "SOL 15m: R$ 395.50 (Z: -1.38σ)"
        },
        {
          "label": "15/08 22:00",
          "score": 24,
          "metric": "SOL 15m: R$ 396.20 (Z: -0.48σ)"
        },
        {
          "label": "16/08 00:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.70 (Z: +0.06σ)"
        },
        {
          "label": "16/08 02:00",
          "score": 85,
          "metric": "SOL 15m: R$ 394.60 (Z: -1.69σ)"
        },
        {
          "label": "16/08 04:00",
          "score": 45,
          "metric": "SOL 15m: R$ 396.40 (Z: -0.89σ)"
        },
        {
          "label": "16/08 06:00",
          "score": 100,
          "metric": "SOL 15m: R$ 395.10 (Z: -2.05σ)"
        },
        {
          "label": "16/08 08:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.60 (Z: +0.00σ)"
        },
        {
          "label": "16/08 10:00",
          "score": 72,
          "metric": "SOL 15m: R$ 394.60 (Z: -1.43σ)"
        },
        {
          "label": "16/08 12:00",
          "score": 66,
          "metric": "SOL 15m: R$ 394.50 (Z: -1.32σ)"
        },
        {
          "label": "16/08 14:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.20 (Z: +2.12σ)"
        },
        {
          "label": "16/08 16:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.10 (Z: +1.69σ)"
        },
        {
          "label": "16/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.00 (Z: -0.03σ)"
        },
        {
          "label": "16/08 20:00",
          "score": 94,
          "metric": "SOL 15m: R$ 394.20 (Z: -1.87σ)"
        },
        {
          "label": "16/08 22:00",
          "score": 18,
          "metric": "SOL 15m: R$ 389.90 (Z: -0.35σ)"
        },
        {
          "label": "17/08 00:00",
          "score": 34,
          "metric": "SOL 15m: R$ 391.20 (Z: -0.67σ)"
        },
        {
          "label": "17/08 02:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.20 (Z: +1.70σ)"
        },
        {
          "label": "17/08 04:00",
          "score": 28,
          "metric": "SOL 15m: R$ 396.70 (Z: -0.56σ)"
        },
        {
          "label": "17/08 06:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.10 (Z: +1.24σ)"
        },
        {
          "label": "17/08 08:00",
          "score": 100,
          "metric": "SOL 15m: R$ 395.30 (Z: -2.04σ)"
        },
        {
          "label": "17/08 10:00",
          "score": 57,
          "metric": "SOL 15m: R$ 394.90 (Z: -1.13σ)"
        },
        {
          "label": "17/08 12:00",
          "score": 33,
          "metric": "SOL 15m: R$ 395.20 (Z: -0.66σ)"
        },
        {
          "label": "17/08 14:00",
          "score": 98,
          "metric": "SOL 15m: R$ 393.80 (Z: -1.96σ)"
        },
        {
          "label": "17/08 16:00",
          "score": 14,
          "metric": "SOL 15m: R$ 395.60 (Z: -0.28σ)"
        },
        {
          "label": "17/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.60 (Z: +1.34σ)"
        },
        {
          "label": "17/08 20:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.90 (Z: +1.46σ)"
        },
        {
          "label": "17/08 22:00",
          "score": 52,
          "metric": "SOL 15m: R$ 395.80 (Z: -1.03σ)"
        },
        {
          "label": "18/08 00:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.90 (Z: +0.68σ)"
        },
        {
          "label": "18/08 02:00",
          "score": 42,
          "metric": "SOL 15m: R$ 394.10 (Z: -0.84σ)"
        },
        {
          "label": "18/08 04:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.90 (Z: +0.38σ)"
        },
        {
          "label": "18/08 06:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.30 (Z: +1.85σ)"
        },
        {
          "label": "18/08 08:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.40 (Z: +1.21σ)"
        },
        {
          "label": "18/08 10:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.40 (Z: +0.68σ)"
        },
        {
          "label": "18/08 12:00",
          "score": 66,
          "metric": "SOL 15m: R$ 398.40 (Z: -1.33σ)"
        },
        {
          "label": "18/08 14:00",
          "score": 5,
          "metric": "SOL 15m: R$ 398.20 (Z: +2.04σ)"
        },
        {
          "label": "18/08 16:00",
          "score": 54,
          "metric": "SOL 15m: R$ 401.80 (Z: -1.07σ)"
        },
        {
          "label": "18/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 403.40 (Z: +1.17σ)"
        },
        {
          "label": "18/08 20:00",
          "score": 100,
          "metric": "SOL 15m: R$ 402.70 (Z: -2.32σ)"
        },
        {
          "label": "18/08 22:00",
          "score": 7,
          "metric": "SOL 15m: R$ 403.80 (Z: -0.15σ)"
        },
        {
          "label": "19/08 00:00",
          "score": 5,
          "metric": "SOL 15m: R$ 403.50 (Z: +1.09σ)"
        },
        {
          "label": "19/08 02:00",
          "score": 5,
          "metric": "SOL 15m: R$ 402.50 (Z: +0.79σ)"
        },
        {
          "label": "19/08 04:00",
          "score": 5,
          "metric": "SOL 15m: R$ 404.00 (Z: +1.13σ)"
        },
        {
          "label": "19/08 06:00",
          "score": 5,
          "metric": "SOL 15m: R$ 402.90 (Z: +2.32σ)"
        },
        {
          "label": "19/08 08:00",
          "score": 10,
          "metric": "SOL 15m: R$ 403.50 (Z: -0.21σ)"
        },
        {
          "label": "19/08 10:00",
          "score": 5,
          "metric": "SOL 15m: R$ 404.60 (Z: +0.81σ)"
        },
        {
          "label": "19/08 12:00",
          "score": 81,
          "metric": "SOL 15m: R$ 404.10 (Z: -1.62σ)"
        },
        {
          "label": "19/08 14:00",
          "score": 81,
          "metric": "SOL 15m: R$ 407.40 (Z: -1.61σ)"
        },
        {
          "label": "19/08 16:00",
          "score": 5,
          "metric": "SOL 15m: R$ 424.90 (Z: +0.71σ)"
        },
        {
          "label": "19/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 422.80 (Z: +0.73σ)"
        },
        {
          "label": "19/08 20:00",
          "score": 5,
          "metric": "SOL 15m: R$ 428.10 (Z: +2.16σ)"
        },
        {
          "label": "19/08 22:00",
          "score": 87,
          "metric": "SOL 15m: R$ 444.80 (Z: -1.75σ)"
        },
        {
          "label": "20/08 00:00",
          "score": 18,
          "metric": "SOL 15m: R$ 443.50 (Z: -0.35σ)"
        },
        {
          "label": "20/08 02:00",
          "score": 68,
          "metric": "SOL 15m: R$ 441.60 (Z: -1.35σ)"
        },
        {
          "label": "20/08 04:00",
          "score": 72,
          "metric": "SOL 15m: R$ 439.20 (Z: -1.45σ)"
        },
        {
          "label": "20/08 06:00",
          "score": 5,
          "metric": "SOL 15m: R$ 442.00 (Z: +1.64σ)"
        },
        {
          "label": "20/08 08:00",
          "score": 51,
          "metric": "SOL 15m: R$ 451.60 (Z: -1.03σ)"
        },
        {
          "label": "20/08 10:00",
          "score": 5,
          "metric": "SOL 15m: R$ 454.40 (Z: +0.59σ)"
        },
        {
          "label": "20/08 12:00",
          "score": 5,
          "metric": "SOL 15m: R$ 452.50 (Z: +0.58σ)"
        },
        {
          "label": "20/08 14:00",
          "score": 10,
          "metric": "SOL 15m: R$ 450.70 (Z: -0.19σ)"
        },
        {
          "label": "20/08 16:00",
          "score": 24,
          "metric": "SOL 15m: R$ 452.60 (Z: -0.49σ)"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 454.10 (Z: +1.33σ)"
        },
        {
          "label": "20/08 20:00",
          "score": 54,
          "metric": "SOL 15m: R$ 454.80 (Z: -1.07σ)"
        },
        {
          "label": "20/08 22:00",
          "score": 5,
          "metric": "SOL 15m: R$ 455.70 (Z: +2.21σ)"
        },
        {
          "label": "21/08 00:00",
          "score": 5,
          "metric": "SOL 15m: R$ 462.20 (Z: +1.93σ)"
        },
        {
          "label": "21/08 02:00",
          "score": 49,
          "metric": "SOL 15m: R$ 464.00 (Z: -0.98σ)"
        },
        {
          "label": "21/08 04:00",
          "score": 5,
          "metric": "SOL 15m: R$ 465.10 (Z: +1.09σ)"
        },
        {
          "label": "21/08 06:00",
          "score": 100,
          "metric": "SOL 15m: R$ 469.50 (Z: -2.11σ)"
        },
        {
          "label": "21/08 08:00",
          "score": 5,
          "metric": "SOL 15m: R$ 474.10 (Z: +1.24σ)"
        },
        {
          "label": "21/08 10:00",
          "score": 5,
          "metric": "SOL 15m: R$ 474.60 (Z: +0.00σ)"
        },
        {
          "label": "21/08 12:00",
          "score": 15,
          "metric": "SOL 15m: R$ 468.70 (Z: -0.30σ)"
        },
        {
          "label": "21/08 14:00",
          "score": 5,
          "metric": "SOL 15m: R$ 471.30 (Z: +0.06σ)"
        },
        {
          "label": "21/08 16:00",
          "score": 5,
          "metric": "SOL 15m: R$ 471.20 (Z: +0.85σ)"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 474.40 (Z: +0.57σ)"
        },
        {
          "label": "21/08 20:00",
          "score": 5,
          "metric": "SOL 15m: R$ 473.20 (Z: +1.42σ)"
        },
        {
          "label": "21/08 22:00",
          "score": 21,
          "metric": "SOL 15m: R$ 485.10 (Z: -0.43σ)"
        },
        {
          "label": "22/08 00:00",
          "score": 5,
          "metric": "SOL 15m: R$ 486.80 (Z: +1.49σ)"
        },
        {
          "label": "22/08 02:00",
          "score": 5,
          "metric": "SOL 15m: R$ 489.70 (Z: +1.53σ)"
        },
        {
          "label": "22/08 04:00",
          "score": 5,
          "metric": "SOL 15m: R$ 501.90 (Z: +1.32σ)"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "SOL 15m: R$ 486.20 (Z: +1.34σ)"
        },
        {
          "label": "22/08 08:00",
          "score": 71,
          "metric": "SOL 15m: R$ 487.60 (Z: -1.42σ)"
        },
        {
          "label": "22/08 10:00",
          "score": 61,
          "metric": "SOL 15m: R$ 474.20 (Z: -1.22σ)"
        },
        {
          "label": "22/08 12:00",
          "score": 5,
          "metric": "SOL 15m: R$ 486.50 (Z: +1.16σ)"
        },
        {
          "label": "22/08 14:00",
          "score": 64,
          "metric": "SOL 15m: R$ 483.90 (Z: -1.29σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "SOL 15m: R$ 485.80 (Z: +1.00σ)"
        },
        {
          "label": "22/08 16:00",
          "score": 22,
          "metric": "SOL 15m: R$ 484.20 (Z: -0.43σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 44,
          "metric": "SOL 15m: R$ 486.70 (Z: -0.89σ)"
        },
        {
          "label": "22/08 18:00",
          "score": 5,
          "metric": "SOL 15m: R$ 487.10 (Z: +0.83σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "SOL 15m: R$ 487.30 (Z: +0.92σ)"
        },
        {
          "label": "22/08 20:00",
          "score": 64,
          "metric": "SOL 15m: R$ 482.70 (Z: -1.28σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "SOL 15m: R$ 388.20 (Z: +1.27σ)"
        },
        {
          "label": "24/07",
          "score": 33,
          "metric": "SOL 15m: R$ 386.90 (Z: -0.66σ)"
        },
        {
          "label": "24/07",
          "score": 76,
          "metric": "SOL 15m: R$ 383.70 (Z: -1.51σ)"
        },
        {
          "label": "24/07",
          "score": 35,
          "metric": "SOL 15m: R$ 376.90 (Z: -0.70σ)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "SOL 15m: R$ 379.90 (Z: +0.21σ)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "SOL 15m: R$ 377.10 (Z: +1.80σ)"
        },
        {
          "label": "25/07",
          "score": 92,
          "metric": "SOL 15m: R$ 380.10 (Z: -1.84σ)"
        },
        {
          "label": "26/07",
          "score": 45,
          "metric": "SOL 15m: R$ 382.90 (Z: -0.90σ)"
        },
        {
          "label": "26/07",
          "score": 38,
          "metric": "SOL 15m: R$ 383.00 (Z: -0.75σ)"
        },
        {
          "label": "26/07",
          "score": 52,
          "metric": "SOL 15m: R$ 384.50 (Z: -1.04σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "SOL 15m: R$ 390.40 (Z: +0.98σ)"
        },
        {
          "label": "27/07",
          "score": 63,
          "metric": "SOL 15m: R$ 390.30 (Z: -1.26σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "SOL 15m: R$ 389.30 (Z: +2.82σ)"
        },
        {
          "label": "28/07",
          "score": 66,
          "metric": "SOL 15m: R$ 375.00 (Z: -1.33σ)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "SOL 15m: R$ 376.10 (Z: +0.96σ)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "SOL 15m: R$ 381.00 (Z: +3.14σ)"
        },
        {
          "label": "29/07",
          "score": 46,
          "metric": "SOL 15m: R$ 375.00 (Z: -0.92σ)"
        },
        {
          "label": "29/07",
          "score": 33,
          "metric": "SOL 15m: R$ 377.80 (Z: -0.66σ)"
        },
        {
          "label": "29/07",
          "score": 100,
          "metric": "SOL 15m: R$ 372.20 (Z: -2.56σ)"
        },
        {
          "label": "30/07",
          "score": 33,
          "metric": "SOL 15m: R$ 377.00 (Z: -0.66σ)"
        },
        {
          "label": "30/07",
          "score": 78,
          "metric": "SOL 15m: R$ 379.00 (Z: -1.55σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "SOL 15m: R$ 378.90 (Z: +0.08σ)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "SOL 15m: R$ 376.40 (Z: +0.20σ)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "SOL 15m: R$ 375.00 (Z: +1.14σ)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "SOL 15m: R$ 372.30 (Z: +0.09σ)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "SOL 15m: R$ 373.30 (Z: +0.26σ)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "SOL 15m: R$ 372.40 (Z: +1.05σ)"
        },
        {
          "label": "01/08",
          "score": 42,
          "metric": "SOL 15m: R$ 364.70 (Z: -0.84σ)"
        },
        {
          "label": "02/08",
          "score": 28,
          "metric": "SOL 15m: R$ 374.40 (Z: -0.56σ)"
        },
        {
          "label": "02/08",
          "score": 71,
          "metric": "SOL 15m: R$ 373.40 (Z: -1.43σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "SOL 15m: R$ 375.80 (Z: +1.27σ)"
        },
        {
          "label": "03/08",
          "score": 57,
          "metric": "SOL 15m: R$ 371.70 (Z: -1.14σ)"
        },
        {
          "label": "03/08",
          "score": 56,
          "metric": "SOL 15m: R$ 368.70 (Z: -1.11σ)"
        },
        {
          "label": "03/08",
          "score": 15,
          "metric": "SOL 15m: R$ 377.40 (Z: -0.30σ)"
        },
        {
          "label": "04/08",
          "score": 29,
          "metric": "SOL 15m: R$ 376.10 (Z: -0.58σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "SOL 15m: R$ 377.50 (Z: +1.98σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "SOL 15m: R$ 381.10 (Z: +1.42σ)"
        },
        {
          "label": "05/08",
          "score": 24,
          "metric": "SOL 15m: R$ 379.10 (Z: -0.48σ)"
        },
        {
          "label": "05/08",
          "score": 35,
          "metric": "SOL 15m: R$ 380.90 (Z: -0.71σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "SOL 15m: R$ 382.00 (Z: -0.04σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "SOL 15m: R$ 379.60 (Z: +1.34σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "SOL 15m: R$ 376.50 (Z: +1.03σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "SOL 15m: R$ 373.60 (Z: +1.27σ)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "SOL 15m: R$ 373.00 (Z: +0.68σ)"
        },
        {
          "label": "07/08",
          "score": 30,
          "metric": "SOL 15m: R$ 376.10 (Z: -0.61σ)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "SOL 15m: R$ 377.00 (Z: -0.10σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL 15m: R$ 381.40 (Z: +2.14σ)"
        },
        {
          "label": "08/08",
          "score": 39,
          "metric": "SOL 15m: R$ 385.00 (Z: -0.79σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL 15m: R$ 389.20 (Z: +1.00σ)"
        },
        {
          "label": "09/08",
          "score": 15,
          "metric": "SOL 15m: R$ 388.20 (Z: -0.30σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL 15m: R$ 390.20 (Z: +0.17σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.60 (Z: +1.80σ)"
        },
        {
          "label": "10/08",
          "score": 100,
          "metric": "SOL 15m: R$ 391.00 (Z: -2.27σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL 15m: R$ 393.00 (Z: +1.35σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL 15m: R$ 391.60 (Z: +1.80σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL 15m: R$ 390.60 (Z: -0.00σ)"
        },
        {
          "label": "11/08",
          "score": 48,
          "metric": "SOL 15m: R$ 388.50 (Z: -0.97σ)"
        },
        {
          "label": "11/08",
          "score": 36,
          "metric": "SOL 15m: R$ 393.00 (Z: -0.71σ)"
        },
        {
          "label": "12/08",
          "score": 87,
          "metric": "SOL 15m: R$ 395.10 (Z: -1.73σ)"
        },
        {
          "label": "12/08",
          "score": 47,
          "metric": "SOL 15m: R$ 394.50 (Z: -0.93σ)"
        },
        {
          "label": "12/08",
          "score": 35,
          "metric": "SOL 15m: R$ 394.10 (Z: -0.70σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL 15m: R$ 396.10 (Z: +1.25σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL 15m: R$ 395.40 (Z: +0.78σ)"
        },
        {
          "label": "13/08",
          "score": 93,
          "metric": "SOL 15m: R$ 396.20 (Z: -1.86σ)"
        },
        {
          "label": "14/08",
          "score": 92,
          "metric": "SOL 15m: R$ 394.40 (Z: -1.85σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL 15m: R$ 393.10 (Z: -0.02σ)"
        },
        {
          "label": "14/08",
          "score": 42,
          "metric": "SOL 15m: R$ 393.40 (Z: -0.83σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL 15m: R$ 395.50 (Z: +0.68σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.20 (Z: +1.17σ)"
        },
        {
          "label": "15/08",
          "score": 17,
          "metric": "SOL 15m: R$ 395.60 (Z: -0.33σ)"
        },
        {
          "label": "16/08",
          "score": 19,
          "metric": "SOL 15m: R$ 396.40 (Z: -0.38σ)"
        },
        {
          "label": "16/08",
          "score": 30,
          "metric": "SOL 15m: R$ 394.50 (Z: -0.60σ)"
        },
        {
          "label": "16/08",
          "score": 83,
          "metric": "SOL 15m: R$ 392.80 (Z: -1.67σ)"
        },
        {
          "label": "17/08",
          "score": 89,
          "metric": "SOL 15m: R$ 396.30 (Z: -1.77σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.90 (Z: +0.41σ)"
        },
        {
          "label": "17/08",
          "score": 27,
          "metric": "SOL 15m: R$ 395.90 (Z: -0.54σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL 15m: R$ 395.70 (Z: +0.46σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL 15m: R$ 398.80 (Z: +1.49σ)"
        },
        {
          "label": "18/08",
          "score": 8,
          "metric": "SOL 15m: R$ 402.10 (Z: -0.16σ)"
        },
        {
          "label": "19/08",
          "score": 98,
          "metric": "SOL 15m: R$ 402.40 (Z: -1.95σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL 15m: R$ 407.30 (Z: +0.18σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL 15m: R$ 435.70 (Z: +1.03σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL 15m: R$ 440.80 (Z: +1.21σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL 15m: R$ 452.50 (Z: +1.40σ)"
        },
        {
          "label": "20/08",
          "score": 8,
          "metric": "SOL 15m: R$ 455.60 (Z: -0.16σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL 15m: R$ 466.00 (Z: +0.84σ)"
        },
        {
          "label": "21/08",
          "score": 74,
          "metric": "SOL 15m: R$ 471.90 (Z: -1.47σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL 15m: R$ 473.50 (Z: +0.18σ)"
        },
        {
          "label": "22/08",
          "score": 35,
          "metric": "SOL 15m: R$ 515.70 (Z: -0.71σ)"
        },
        {
          "label": "22/08",
          "score": 61,
          "metric": "SOL 15m: R$ 485.70 (Z: -1.22σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL 15m: R$ 487.20 (Z: +0.91σ)"
        },
        {
          "label": "22/08",
          "score": 64,
          "metric": "SOL 15m: R$ 482.70 (Z: -1.28σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 40,
          "metric": "SOL 15m: R$ 1079.90 (Z: -0.80σ)"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1074.00 (Z: +2.17σ)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1096.30 (Z: -0.06σ)"
        },
        {
          "label": "03/09/25",
          "score": 49,
          "metric": "SOL 15m: R$ 1143.70 (Z: -0.98σ)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1106.50 (Z: +0.96σ)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1220.20 (Z: +1.44σ)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1249.50 (Z: +1.78σ)"
        },
        {
          "label": "19/09/25",
          "score": 70,
          "metric": "SOL 15m: R$ 1264.10 (Z: -1.39σ)"
        },
        {
          "label": "23/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1138.20 (Z: +0.94σ)"
        },
        {
          "label": "27/09/25",
          "score": 71,
          "metric": "SOL 15m: R$ 1086.60 (Z: -1.42σ)"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1169.00 (Z: +0.47σ)"
        },
        {
          "label": "05/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1221.40 (Z: +2.03σ)"
        },
        {
          "label": "09/10/25",
          "score": 60,
          "metric": "SOL 15m: R$ 1180.40 (Z: -1.19σ)"
        },
        {
          "label": "13/10/25",
          "score": 80,
          "metric": "SOL 15m: R$ 1142.50 (Z: -1.60σ)"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1005.90 (Z: +1.48σ)"
        },
        {
          "label": "21/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1030.20 (Z: +0.81σ)"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1047.80 (Z: +0.30σ)"
        },
        {
          "label": "29/10/25",
          "score": 7,
          "metric": "SOL 15m: R$ 1052.20 (Z: -0.14σ)"
        },
        {
          "label": "02/11/25",
          "score": 80,
          "metric": "SOL 15m: R$ 995.70 (Z: -1.61σ)"
        },
        {
          "label": "06/11/25",
          "score": 80,
          "metric": "SOL 15m: R$ 838.20 (Z: -1.60σ)"
        },
        {
          "label": "10/11/25",
          "score": 76,
          "metric": "SOL 15m: R$ 876.80 (Z: -1.52σ)"
        },
        {
          "label": "03/12/25",
          "score": 23,
          "metric": "SOL 15m: R$ 749.80 (Z: -0.46σ)"
        },
        {
          "label": "07/12/25",
          "score": 27,
          "metric": "SOL 15m: R$ 718.20 (Z: -0.54σ)"
        },
        {
          "label": "18/01/26",
          "score": 5,
          "metric": "SOL 15m: R$ 765.70 (Z: +1.11σ)"
        },
        {
          "label": "22/01/26",
          "score": 52,
          "metric": "SOL 15m: R$ 678.80 (Z: -1.04σ)"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "SOL 15m: R$ 657.10 (Z: +0.10σ)"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 547.90 (Z: +1.48σ)"
        },
        {
          "label": "06/02/26",
          "score": 7,
          "metric": "SOL 15m: R$ 416.60 (Z: -0.13σ)"
        },
        {
          "label": "10/02/26",
          "score": 55,
          "metric": "SOL 15m: R$ 429.00 (Z: -1.10σ)"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 448.10 (Z: +2.69σ)"
        },
        {
          "label": "21/02/26",
          "score": 35,
          "metric": "SOL 15m: R$ 441.10 (Z: -0.70σ)"
        },
        {
          "label": "25/02/26",
          "score": 18,
          "metric": "SOL 15m: R$ 426.10 (Z: -0.36σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "SOL 15m: R$ 444.20 (Z: +2.13σ)"
        },
        {
          "label": "07/03/26",
          "score": 9,
          "metric": "SOL 15m: R$ 447.00 (Z: -0.18σ)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "SOL 15m: R$ 450.20 (Z: +0.95σ)"
        },
        {
          "label": "16/03/26",
          "score": 14,
          "metric": "SOL 15m: R$ 496.20 (Z: -0.28σ)"
        },
        {
          "label": "20/03/26",
          "score": 50,
          "metric": "SOL 15m: R$ 472.70 (Z: -1.00σ)"
        },
        {
          "label": "25/03/26",
          "score": 38,
          "metric": "SOL 15m: R$ 483.70 (Z: -0.75σ)"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "SOL 15m: R$ 438.00 (Z: +0.79σ)"
        },
        {
          "label": "03/04/26",
          "score": 45,
          "metric": "SOL 15m: R$ 415.00 (Z: -0.90σ)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 436.00 (Z: +1.88σ)"
        },
        {
          "label": "12/04/26",
          "score": 32,
          "metric": "SOL 15m: R$ 413.50 (Z: -0.65σ)"
        },
        {
          "label": "16/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 431.70 (Z: +1.69σ)"
        },
        {
          "label": "20/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 426.40 (Z: +1.81σ)"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 432.10 (Z: +0.73σ)"
        },
        {
          "label": "29/04/26",
          "score": 19,
          "metric": "SOL 15m: R$ 422.90 (Z: -0.38σ)"
        },
        {
          "label": "03/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 418.50 (Z: +0.97σ)"
        },
        {
          "label": "07/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 435.50 (Z: +0.28σ)"
        },
        {
          "label": "13/05/26",
          "score": 35,
          "metric": "SOL 15m: R$ 453.10 (Z: -0.71σ)"
        },
        {
          "label": "17/05/26",
          "score": 35,
          "metric": "SOL 15m: R$ 430.50 (Z: -0.69σ)"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 435.70 (Z: -0.03σ)"
        },
        {
          "label": "26/05/26",
          "score": 38,
          "metric": "SOL 15m: R$ 425.20 (Z: -0.75σ)"
        },
        {
          "label": "30/05/26",
          "score": 67,
          "metric": "SOL 15m: R$ 417.70 (Z: -1.34σ)"
        },
        {
          "label": "04/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 346.90 (Z: +0.70σ)"
        },
        {
          "label": "08/06/26",
          "score": 8,
          "metric": "SOL 15m: R$ 344.90 (Z: -0.15σ)"
        },
        {
          "label": "12/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 342.60 (Z: +0.87σ)"
        },
        {
          "label": "16/06/26",
          "score": 81,
          "metric": "SOL 15m: R$ 370.10 (Z: -1.62σ)"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 359.80 (Z: +0.86σ)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 363.70 (Z: +1.84σ)"
        },
        {
          "label": "28/06/26",
          "score": 10,
          "metric": "SOL 15m: R$ 371.20 (Z: -0.20σ)"
        },
        {
          "label": "02/07/26",
          "score": 59,
          "metric": "SOL 15m: R$ 411.80 (Z: -1.18σ)"
        },
        {
          "label": "06/07/26",
          "score": 11,
          "metric": "SOL 15m: R$ 426.80 (Z: -0.21σ)"
        },
        {
          "label": "10/07/26",
          "score": 71,
          "metric": "SOL 15m: R$ 407.50 (Z: -1.41σ)"
        },
        {
          "label": "14/07/26",
          "score": 5,
          "metric": "SOL 15m: R$ 388.50 (Z: -0.04σ)"
        },
        {
          "label": "18/07/26",
          "score": 65,
          "metric": "SOL 15m: R$ 387.50 (Z: -1.29σ)"
        },
        {
          "label": "22/07/26",
          "score": 52,
          "metric": "SOL 15m: R$ 398.40 (Z: -1.03σ)"
        },
        {
          "label": "26/07/26",
          "score": 53,
          "metric": "SOL 15m: R$ 382.80 (Z: -1.07σ)"
        },
        {
          "label": "30/07/26",
          "score": 80,
          "metric": "SOL 15m: R$ 378.80 (Z: -1.60σ)"
        },
        {
          "label": "03/08/26",
          "score": 79,
          "metric": "SOL 15m: R$ 371.90 (Z: -1.59σ)"
        },
        {
          "label": "07/08/26",
          "score": 28,
          "metric": "SOL 15m: R$ 372.80 (Z: -0.57σ)"
        },
        {
          "label": "11/08/26",
          "score": 70,
          "metric": "SOL 15m: R$ 390.20 (Z: -1.40σ)"
        },
        {
          "label": "15/08/26",
          "score": 84,
          "metric": "SOL 15m: R$ 394.70 (Z: -1.67σ)"
        },
        {
          "label": "19/08/26",
          "score": 97,
          "metric": "SOL 15m: R$ 403.50 (Z: -1.93σ)"
        },
        {
          "label": "22/08/26",
          "score": 64,
          "metric": "SOL 15m: R$ 482.70 (Z: -1.28σ)"
        }
      ]
    }
  },
  {
    "id": 7,
    "nome": "Plano Duelo de Titãs",
    "badge": "⚔️ Micro-Pairs ETH/BTC",
    "categoria": "medio_risco",
    "par": "BTC <-> ETH",
    "lote_brl": 60.0,
    "lucro_min_pct": 1.0,
    "gatilho_desc": "Desvio do Ratio Diário 24h (|Z_ETH/BTC| >= 1.50σ)",
    "trava_ruptura": "Coerência de Fase γ_ETH/BTC = 71.0% | Bloqueio PC1 > 75%",
    "cooldown_horas": 1.5,
    "valor_atual_str": "ETH/BTC = 0.03138 (Z: -0.54σ)",
    "alvo_str": "|Z| >= 1.50σ (Gatilho de Arbitragem)",
    "distancia_display": "Faltam 0.96σ para disparo",
    "proximidade_score": 36,
    "status": "MONITORANDO_SPREAD",
    "icone": "⚔️",
    "cor": "#06B6D4",
    "descricao_executiva": "Pairs trading clássico de Granger & Hatanaka (1964) entre os dois maiores pesos do ecossistema cripto. Explora o descolamento estatístico do ratio ETH/BTC em relação à sua média de cointegração de 24 horas.",
    "condicoes_ativacao": "• Z-Score do par sintético ETH/BTC atinge desvio absoluto |Z| >= 1.50σ.<br>• Coerência espectral de fase γ_ETH/BTC >= 0.70 confirmando reversibilidade do spread.",
    "limitacoes_trava": "• <b>Trava de Coerência:</b> Se a coerência espectral cair abaixo de 0.50, a operação é suspensa.<br>• <b>Trava de Pânico (PC1 > 75%):</b> Bloqueio de pairs durante choques sistêmicos.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 39,
          "metric": "ETH/BTC: 0.03139 (Z: -0.58σ)"
        },
        {
          "label": "19:19",
          "score": 30,
          "metric": "ETH/BTC: 0.03143 (Z: -0.45σ)"
        },
        {
          "label": "19:19",
          "score": 37,
          "metric": "ETH/BTC: 0.03140 (Z: -0.55σ)"
        },
        {
          "label": "19:20",
          "score": 31,
          "metric": "ETH/BTC: 0.03142 (Z: -0.46σ)"
        },
        {
          "label": "19:20",
          "score": 45,
          "metric": "ETH/BTC: 0.03135 (Z: -0.68σ)"
        },
        {
          "label": "19:21",
          "score": 31,
          "metric": "ETH/BTC: 0.03142 (Z: -0.47σ)"
        },
        {
          "label": "19:21",
          "score": 34,
          "metric": "ETH/BTC: 0.03140 (Z: -0.52σ)"
        },
        {
          "label": "19:22",
          "score": 32,
          "metric": "ETH/BTC: 0.03142 (Z: -0.47σ)"
        },
        {
          "label": "19:22",
          "score": 35,
          "metric": "ETH/BTC: 0.03140 (Z: -0.52σ)"
        },
        {
          "label": "19:23",
          "score": 29,
          "metric": "ETH/BTC: 0.03143 (Z: -0.43σ)"
        },
        {
          "label": "19:23",
          "score": 34,
          "metric": "ETH/BTC: 0.03140 (Z: -0.51σ)"
        },
        {
          "label": "19:24",
          "score": 30,
          "metric": "ETH/BTC: 0.03142 (Z: -0.44σ)"
        },
        {
          "label": "19:24",
          "score": 38,
          "metric": "ETH/BTC: 0.03138 (Z: -0.57σ)"
        },
        {
          "label": "19:25",
          "score": 30,
          "metric": "ETH/BTC: 0.03142 (Z: -0.45σ)"
        },
        {
          "label": "19:26",
          "score": 26,
          "metric": "ETH/BTC: 0.03144 (Z: -0.39σ)"
        },
        {
          "label": "19:26",
          "score": 30,
          "metric": "ETH/BTC: 0.03142 (Z: -0.46σ)"
        },
        {
          "label": "19:27",
          "score": 28,
          "metric": "ETH/BTC: 0.03143 (Z: -0.42σ)"
        },
        {
          "label": "19:27",
          "score": 31,
          "metric": "ETH/BTC: 0.03141 (Z: -0.47σ)"
        },
        {
          "label": "19:28",
          "score": 28,
          "metric": "ETH/BTC: 0.03143 (Z: -0.42σ)"
        },
        {
          "label": "19:28",
          "score": 23,
          "metric": "ETH/BTC: 0.03145 (Z: -0.34σ)"
        },
        {
          "label": "19:29",
          "score": 27,
          "metric": "ETH/BTC: 0.03143 (Z: -0.41σ)"
        },
        {
          "label": "19:29",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.37σ)"
        },
        {
          "label": "19:30",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.38σ)"
        },
        {
          "label": "19:30",
          "score": 22,
          "metric": "ETH/BTC: 0.03145 (Z: -0.33σ)"
        },
        {
          "label": "19:31",
          "score": 26,
          "metric": "ETH/BTC: 0.03144 (Z: -0.39σ)"
        },
        {
          "label": "19:31",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.38σ)"
        },
        {
          "label": "19:32",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.38σ)"
        },
        {
          "label": "19:32",
          "score": 31,
          "metric": "ETH/BTC: 0.03141 (Z: -0.47σ)"
        },
        {
          "label": "19:33",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.38σ)"
        },
        {
          "label": "19:33",
          "score": 46,
          "metric": "ETH/BTC: 0.03135 (Z: -0.68σ)"
        },
        {
          "label": "19:34",
          "score": 24,
          "metric": "ETH/BTC: 0.03144 (Z: -0.36σ)"
        },
        {
          "label": "19:34",
          "score": 52,
          "metric": "ETH/BTC: 0.03132 (Z: -0.78σ)"
        },
        {
          "label": "19:35",
          "score": 27,
          "metric": "ETH/BTC: 0.03143 (Z: -0.41σ)"
        },
        {
          "label": "19:35",
          "score": 54,
          "metric": "ETH/BTC: 0.03131 (Z: -0.81σ)"
        },
        {
          "label": "19:36",
          "score": 28,
          "metric": "ETH/BTC: 0.03142 (Z: -0.42σ)"
        },
        {
          "label": "19:36",
          "score": 41,
          "metric": "ETH/BTC: 0.03137 (Z: -0.62σ)"
        },
        {
          "label": "19:37",
          "score": 25,
          "metric": "ETH/BTC: 0.03144 (Z: -0.37σ)"
        },
        {
          "label": "19:37",
          "score": 41,
          "metric": "ETH/BTC: 0.03136 (Z: -0.62σ)"
        },
        {
          "label": "19:38",
          "score": 27,
          "metric": "ETH/BTC: 0.03143 (Z: -0.40σ)"
        },
        {
          "label": "19:38",
          "score": 39,
          "metric": "ETH/BTC: 0.03137 (Z: -0.59σ)"
        },
        {
          "label": "19:39",
          "score": 26,
          "metric": "ETH/BTC: 0.03143 (Z: -0.39σ)"
        },
        {
          "label": "19:39",
          "score": 43,
          "metric": "ETH/BTC: 0.03136 (Z: -0.65σ)"
        },
        {
          "label": "19:40",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.34σ)"
        },
        {
          "label": "19:40",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.66σ)"
        },
        {
          "label": "19:41",
          "score": 23,
          "metric": "ETH/BTC: 0.03144 (Z: -0.34σ)"
        },
        {
          "label": "19:41",
          "score": 43,
          "metric": "ETH/BTC: 0.03136 (Z: -0.64σ)"
        },
        {
          "label": "19:42",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.33σ)"
        },
        {
          "label": "19:42",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.66σ)"
        },
        {
          "label": "19:43",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.34σ)"
        },
        {
          "label": "19:43",
          "score": 46,
          "metric": "ETH/BTC: 0.03134 (Z: -0.69σ)"
        },
        {
          "label": "19:44",
          "score": 21,
          "metric": "ETH/BTC: 0.03145 (Z: -0.32σ)"
        },
        {
          "label": "19:44",
          "score": 45,
          "metric": "ETH/BTC: 0.03135 (Z: -0.67σ)"
        },
        {
          "label": "19:45",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.32σ)"
        },
        {
          "label": "19:46",
          "score": 14,
          "metric": "ETH/BTC: 0.03148 (Z: -0.20σ)"
        },
        {
          "label": "19:47",
          "score": 13,
          "metric": "ETH/BTC: 0.03148 (Z: -0.19σ)"
        },
        {
          "label": "19:47",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.66σ)"
        },
        {
          "label": "19:48",
          "score": 12,
          "metric": "ETH/BTC: 0.03148 (Z: -0.18σ)"
        },
        {
          "label": "19:48",
          "score": 41,
          "metric": "ETH/BTC: 0.03136 (Z: -0.61σ)"
        },
        {
          "label": "19:49",
          "score": 12,
          "metric": "ETH/BTC: 0.03148 (Z: -0.19σ)"
        },
        {
          "label": "19:49",
          "score": 46,
          "metric": "ETH/BTC: 0.03134 (Z: -0.68σ)"
        },
        {
          "label": "19:50",
          "score": 12,
          "metric": "ETH/BTC: 0.03148 (Z: -0.18σ)"
        },
        {
          "label": "19:50",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.71σ)"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "ETH/BTC: 0.03153 (Z: -0.01σ)"
        },
        {
          "label": "19:51",
          "score": 48,
          "metric": "ETH/BTC: 0.03133 (Z: -0.72σ)"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "ETH/BTC: 0.03153 (Z: -0.00σ)"
        },
        {
          "label": "19:52",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.70σ)"
        },
        {
          "label": "19:52",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.70σ)"
        },
        {
          "label": "19:53",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.67σ)"
        },
        {
          "label": "19:54",
          "score": 50,
          "metric": "ETH/BTC: 0.03133 (Z: -0.75σ)"
        },
        {
          "label": "19:55",
          "score": 48,
          "metric": "ETH/BTC: 0.03133 (Z: -0.72σ)"
        },
        {
          "label": "19:56",
          "score": 51,
          "metric": "ETH/BTC: 0.03132 (Z: -0.77σ)"
        },
        {
          "label": "19:57",
          "score": 48,
          "metric": "ETH/BTC: 0.03133 (Z: -0.73σ)"
        },
        {
          "label": "19:58",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.66σ)"
        },
        {
          "label": "19:59",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.67σ)"
        },
        {
          "label": "20:01",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.71σ)"
        },
        {
          "label": "20:01",
          "score": 46,
          "metric": "ETH/BTC: 0.03134 (Z: -0.69σ)"
        },
        {
          "label": "20:02",
          "score": 47,
          "metric": "ETH/BTC: 0.03133 (Z: -0.71σ)"
        },
        {
          "label": "20:03",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.70σ)"
        },
        {
          "label": "20:04",
          "score": 47,
          "metric": "ETH/BTC: 0.03134 (Z: -0.71σ)"
        },
        {
          "label": "20:05",
          "score": 43,
          "metric": "ETH/BTC: 0.03135 (Z: -0.64σ)"
        },
        {
          "label": "20:06",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.67σ)"
        },
        {
          "label": "20:07",
          "score": 43,
          "metric": "ETH/BTC: 0.03135 (Z: -0.65σ)"
        },
        {
          "label": "20:08",
          "score": 43,
          "metric": "ETH/BTC: 0.03135 (Z: -0.64σ)"
        },
        {
          "label": "20:09",
          "score": 40,
          "metric": "ETH/BTC: 0.03136 (Z: -0.60σ)"
        },
        {
          "label": "20:10",
          "score": 40,
          "metric": "ETH/BTC: 0.03136 (Z: -0.60σ)"
        },
        {
          "label": "20:12",
          "score": 38,
          "metric": "ETH/BTC: 0.03137 (Z: -0.57σ)"
        },
        {
          "label": "20:13",
          "score": 35,
          "metric": "ETH/BTC: 0.03138 (Z: -0.53σ)"
        },
        {
          "label": "20:14",
          "score": 39,
          "metric": "ETH/BTC: 0.03137 (Z: -0.58σ)"
        },
        {
          "label": "20:15",
          "score": 37,
          "metric": "ETH/BTC: 0.03137 (Z: -0.55σ)"
        },
        {
          "label": "20:16",
          "score": 38,
          "metric": "ETH/BTC: 0.03137 (Z: -0.57σ)"
        },
        {
          "label": "20:17",
          "score": 36,
          "metric": "ETH/BTC: 0.03137 (Z: -0.54σ)"
        },
        {
          "label": "20:18",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.54σ)"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 21,
          "metric": "ETH/BTC: 0.03140 (Z: +0.32σ)"
        },
        {
          "label": "20:39",
          "score": 32,
          "metric": "ETH/BTC: 0.03145 (Z: +0.48σ)"
        },
        {
          "label": "20:59",
          "score": 41,
          "metric": "ETH/BTC: 0.03149 (Z: +0.62σ)"
        },
        {
          "label": "21:19",
          "score": 67,
          "metric": "ETH/BTC: 0.03161 (Z: +1.01σ)"
        },
        {
          "label": "21:39",
          "score": 98,
          "metric": "ETH/BTC: 0.03175 (Z: +1.47σ)"
        },
        {
          "label": "21:59",
          "score": 100,
          "metric": "ETH/BTC: 0.03201 (Z: +2.25σ)"
        },
        {
          "label": "22:19",
          "score": 100,
          "metric": "ETH/BTC: 0.03233 (Z: +3.09σ)"
        },
        {
          "label": "22:39",
          "score": 100,
          "metric": "ETH/BTC: 0.03224 (Z: +2.71σ)"
        },
        {
          "label": "22:59",
          "score": 100,
          "metric": "ETH/BTC: 0.03214 (Z: +2.35σ)"
        },
        {
          "label": "23:19",
          "score": 100,
          "metric": "ETH/BTC: 0.03224 (Z: +2.54σ)"
        },
        {
          "label": "23:39",
          "score": 100,
          "metric": "ETH/BTC: 0.03218 (Z: +2.30σ)"
        },
        {
          "label": "23:59",
          "score": 100,
          "metric": "ETH/BTC: 0.03211 (Z: +2.08σ)"
        },
        {
          "label": "00:19",
          "score": 100,
          "metric": "ETH/BTC: 0.03206 (Z: +1.89σ)"
        },
        {
          "label": "00:39",
          "score": 100,
          "metric": "ETH/BTC: 0.03224 (Z: +2.28σ)"
        },
        {
          "label": "00:59",
          "score": 100,
          "metric": "ETH/BTC: 0.03236 (Z: +2.48σ)"
        },
        {
          "label": "01:19",
          "score": 100,
          "metric": "ETH/BTC: 0.03228 (Z: +2.21σ)"
        },
        {
          "label": "01:39",
          "score": 100,
          "metric": "ETH/BTC: 0.03226 (Z: +2.06σ)"
        },
        {
          "label": "01:59",
          "score": 100,
          "metric": "ETH/BTC: 0.03220 (Z: +1.86σ)"
        },
        {
          "label": "02:19",
          "score": 100,
          "metric": "ETH/BTC: 0.03213 (Z: +1.65σ)"
        },
        {
          "label": "02:39",
          "score": 87,
          "metric": "ETH/BTC: 0.03199 (Z: +1.30σ)"
        },
        {
          "label": "02:59",
          "score": 92,
          "metric": "ETH/BTC: 0.03204 (Z: +1.39σ)"
        },
        {
          "label": "03:19",
          "score": 95,
          "metric": "ETH/BTC: 0.03208 (Z: +1.42σ)"
        },
        {
          "label": "03:39",
          "score": 84,
          "metric": "ETH/BTC: 0.03201 (Z: +1.26σ)"
        },
        {
          "label": "03:59",
          "score": 95,
          "metric": "ETH/BTC: 0.03211 (Z: +1.43σ)"
        },
        {
          "label": "04:19",
          "score": 83,
          "metric": "ETH/BTC: 0.03204 (Z: +1.25σ)"
        },
        {
          "label": "04:39",
          "score": 84,
          "metric": "ETH/BTC: 0.03207 (Z: +1.27σ)"
        },
        {
          "label": "04:59",
          "score": 80,
          "metric": "ETH/BTC: 0.03205 (Z: +1.20σ)"
        },
        {
          "label": "05:19",
          "score": 29,
          "metric": "ETH/BTC: 0.03166 (Z: +0.44σ)"
        },
        {
          "label": "05:39",
          "score": 13,
          "metric": "ETH/BTC: 0.03154 (Z: +0.20σ)"
        },
        {
          "label": "05:59",
          "score": 13,
          "metric": "ETH/BTC: 0.03154 (Z: +0.20σ)"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "ETH/BTC: 0.03145 (Z: +0.02σ)"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "ETH/BTC: 0.03141 (Z: -0.06σ)"
        },
        {
          "label": "06:59",
          "score": 5,
          "metric": "ETH/BTC: 0.03146 (Z: +0.03σ)"
        },
        {
          "label": "07:19",
          "score": 5,
          "metric": "ETH/BTC: 0.03145 (Z: +0.00σ)"
        },
        {
          "label": "07:39",
          "score": 7,
          "metric": "ETH/BTC: 0.03151 (Z: +0.11σ)"
        },
        {
          "label": "07:59",
          "score": 5,
          "metric": "ETH/BTC: 0.03147 (Z: +0.03σ)"
        },
        {
          "label": "08:19",
          "score": 5,
          "metric": "ETH/BTC: 0.03149 (Z: +0.06σ)"
        },
        {
          "label": "08:39",
          "score": 13,
          "metric": "ETH/BTC: 0.03137 (Z: -0.19σ)"
        },
        {
          "label": "08:59",
          "score": 8,
          "metric": "ETH/BTC: 0.03141 (Z: -0.13σ)"
        },
        {
          "label": "09:19",
          "score": 13,
          "metric": "ETH/BTC: 0.03138 (Z: -0.19σ)"
        },
        {
          "label": "09:39",
          "score": 17,
          "metric": "ETH/BTC: 0.03136 (Z: -0.26σ)"
        },
        {
          "label": "09:59",
          "score": 9,
          "metric": "ETH/BTC: 0.03144 (Z: -0.13σ)"
        },
        {
          "label": "10:19",
          "score": 35,
          "metric": "ETH/BTC: 0.03125 (Z: -0.53σ)"
        },
        {
          "label": "10:39",
          "score": 35,
          "metric": "ETH/BTC: 0.03126 (Z: -0.52σ)"
        },
        {
          "label": "10:59",
          "score": 27,
          "metric": "ETH/BTC: 0.03133 (Z: -0.41σ)"
        },
        {
          "label": "11:19",
          "score": 27,
          "metric": "ETH/BTC: 0.03134 (Z: -0.40σ)"
        },
        {
          "label": "11:39",
          "score": 21,
          "metric": "ETH/BTC: 0.03139 (Z: -0.31σ)"
        },
        {
          "label": "11:59",
          "score": 17,
          "metric": "ETH/BTC: 0.03143 (Z: -0.25σ)"
        },
        {
          "label": "12:19",
          "score": 6,
          "metric": "ETH/BTC: 0.03151 (Z: -0.09σ)"
        },
        {
          "label": "12:39",
          "score": 13,
          "metric": "ETH/BTC: 0.03147 (Z: -0.19σ)"
        },
        {
          "label": "12:59",
          "score": 23,
          "metric": "ETH/BTC: 0.03141 (Z: -0.35σ)"
        },
        {
          "label": "13:19",
          "score": 19,
          "metric": "ETH/BTC: 0.03145 (Z: -0.29σ)"
        },
        {
          "label": "13:39",
          "score": 24,
          "metric": "ETH/BTC: 0.03143 (Z: -0.36σ)"
        },
        {
          "label": "13:59",
          "score": 23,
          "metric": "ETH/BTC: 0.03144 (Z: -0.34σ)"
        },
        {
          "label": "14:14",
          "score": 32,
          "metric": "ETH/BTC: 0.03140 (Z: -0.47σ)"
        },
        {
          "label": "14:24",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.55σ)"
        },
        {
          "label": "14:34",
          "score": 33,
          "metric": "ETH/BTC: 0.03141 (Z: -0.49σ)"
        },
        {
          "label": "14:44",
          "score": 44,
          "metric": "ETH/BTC: 0.03135 (Z: -0.66σ)"
        },
        {
          "label": "14:55",
          "score": 52,
          "metric": "ETH/BTC: 0.03132 (Z: -0.79σ)"
        },
        {
          "label": "15:05",
          "score": 51,
          "metric": "ETH/BTC: 0.03134 (Z: -0.76σ)"
        },
        {
          "label": "15:15",
          "score": 36,
          "metric": "ETH/BTC: 0.03143 (Z: -0.54σ)"
        },
        {
          "label": "15:25",
          "score": 29,
          "metric": "ETH/BTC: 0.03147 (Z: -0.44σ)"
        },
        {
          "label": "15:36",
          "score": 31,
          "metric": "ETH/BTC: 0.03147 (Z: -0.46σ)"
        },
        {
          "label": "15:46",
          "score": 40,
          "metric": "ETH/BTC: 0.03142 (Z: -0.60σ)"
        },
        {
          "label": "15:57",
          "score": 44,
          "metric": "ETH/BTC: 0.03141 (Z: -0.66σ)"
        },
        {
          "label": "16:07",
          "score": 40,
          "metric": "ETH/BTC: 0.03143 (Z: -0.60σ)"
        },
        {
          "label": "16:18",
          "score": 58,
          "metric": "ETH/BTC: 0.03134 (Z: -0.87σ)"
        },
        {
          "label": "16:28",
          "score": 55,
          "metric": "ETH/BTC: 0.03135 (Z: -0.83σ)"
        },
        {
          "label": "16:38",
          "score": 41,
          "metric": "ETH/BTC: 0.03143 (Z: -0.61σ)"
        },
        {
          "label": "16:48",
          "score": 32,
          "metric": "ETH/BTC: 0.03147 (Z: -0.49σ)"
        },
        {
          "label": "16:59",
          "score": 26,
          "metric": "ETH/BTC: 0.03151 (Z: -0.39σ)"
        },
        {
          "label": "17:09",
          "score": 16,
          "metric": "ETH/BTC: 0.03156 (Z: -0.24σ)"
        },
        {
          "label": "17:20",
          "score": 50,
          "metric": "ETH/BTC: 0.03139 (Z: -0.75σ)"
        },
        {
          "label": "17:30",
          "score": 47,
          "metric": "ETH/BTC: 0.03140 (Z: -0.71σ)"
        },
        {
          "label": "17:41",
          "score": 48,
          "metric": "ETH/BTC: 0.03140 (Z: -0.72σ)"
        },
        {
          "label": "17:51",
          "score": 29,
          "metric": "ETH/BTC: 0.03149 (Z: -0.44σ)"
        },
        {
          "label": "18:01",
          "score": 37,
          "metric": "ETH/BTC: 0.03145 (Z: -0.55σ)"
        },
        {
          "label": "18:12",
          "score": 41,
          "metric": "ETH/BTC: 0.03142 (Z: -0.61σ)"
        },
        {
          "label": "18:22",
          "score": 30,
          "metric": "ETH/BTC: 0.03147 (Z: -0.45σ)"
        },
        {
          "label": "18:32",
          "score": 52,
          "metric": "ETH/BTC: 0.03135 (Z: -0.78σ)"
        },
        {
          "label": "18:42",
          "score": 54,
          "metric": "ETH/BTC: 0.03134 (Z: -0.81σ)"
        },
        {
          "label": "18:53",
          "score": 37,
          "metric": "ETH/BTC: 0.03141 (Z: -0.55σ)"
        },
        {
          "label": "19:03",
          "score": 36,
          "metric": "ETH/BTC: 0.03141 (Z: -0.54σ)"
        },
        {
          "label": "19:13",
          "score": 46,
          "metric": "ETH/BTC: 0.03135 (Z: -0.70σ)"
        },
        {
          "label": "19:23",
          "score": 34,
          "metric": "ETH/BTC: 0.03140 (Z: -0.51σ)"
        },
        {
          "label": "19:34",
          "score": 24,
          "metric": "ETH/BTC: 0.03144 (Z: -0.36σ)"
        },
        {
          "label": "19:44",
          "score": 21,
          "metric": "ETH/BTC: 0.03145 (Z: -0.32σ)"
        },
        {
          "label": "19:56",
          "score": 51,
          "metric": "ETH/BTC: 0.03132 (Z: -0.77σ)"
        },
        {
          "label": "20:17",
          "score": 36,
          "metric": "ETH/BTC: 0.03137 (Z: -0.54σ)"
        },
        {
          "label": "20:18",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.54σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 5,
          "metric": "ETH/BTC: 0.02986 (Z: +0.06σ)"
        },
        {
          "label": "15/08 22:00",
          "score": 25,
          "metric": "ETH/BTC: 0.02985 (Z: -0.38σ)"
        },
        {
          "label": "16/08 00:00",
          "score": 7,
          "metric": "ETH/BTC: 0.02985 (Z: -0.10σ)"
        },
        {
          "label": "16/08 02:00",
          "score": 5,
          "metric": "ETH/BTC: 0.02985 (Z: -0.05σ)"
        },
        {
          "label": "16/08 04:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02981 (Z: -1.71σ)"
        },
        {
          "label": "16/08 06:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02981 (Z: -1.53σ)"
        },
        {
          "label": "16/08 08:00",
          "score": 62,
          "metric": "ETH/BTC: 0.02982 (Z: -0.93σ)"
        },
        {
          "label": "16/08 10:00",
          "score": 16,
          "metric": "ETH/BTC: 0.02984 (Z: -0.24σ)"
        },
        {
          "label": "16/08 12:00",
          "score": 56,
          "metric": "ETH/BTC: 0.02983 (Z: -0.84σ)"
        },
        {
          "label": "16/08 14:00",
          "score": 47,
          "metric": "ETH/BTC: 0.02986 (Z: +0.70σ)"
        },
        {
          "label": "16/08 16:00",
          "score": 26,
          "metric": "ETH/BTC: 0.02985 (Z: +0.40σ)"
        },
        {
          "label": "16/08 18:00",
          "score": 79,
          "metric": "ETH/BTC: 0.02986 (Z: +1.18σ)"
        },
        {
          "label": "16/08 20:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02990 (Z: +3.54σ)"
        },
        {
          "label": "16/08 22:00",
          "score": 43,
          "metric": "ETH/BTC: 0.02985 (Z: +0.64σ)"
        },
        {
          "label": "17/08 00:00",
          "score": 55,
          "metric": "ETH/BTC: 0.02982 (Z: -0.82σ)"
        },
        {
          "label": "17/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02994 (Z: +2.68σ)"
        },
        {
          "label": "17/08 04:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03000 (Z: +2.60σ)"
        },
        {
          "label": "17/08 06:00",
          "score": 37,
          "metric": "ETH/BTC: 0.02990 (Z: +0.55σ)"
        },
        {
          "label": "17/08 08:00",
          "score": 55,
          "metric": "ETH/BTC: 0.02983 (Z: -0.82σ)"
        },
        {
          "label": "17/08 10:00",
          "score": 5,
          "metric": "ETH/BTC: 0.02989 (Z: +0.07σ)"
        },
        {
          "label": "17/08 12:00",
          "score": 21,
          "metric": "ETH/BTC: 0.02991 (Z: +0.32σ)"
        },
        {
          "label": "17/08 14:00",
          "score": 62,
          "metric": "ETH/BTC: 0.02984 (Z: -0.93σ)"
        },
        {
          "label": "17/08 16:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02979 (Z: -1.71σ)"
        },
        {
          "label": "17/08 18:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: -3.39σ)"
        },
        {
          "label": "17/08 20:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: -2.31σ)"
        },
        {
          "label": "17/08 22:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02960 (Z: -2.08σ)"
        },
        {
          "label": "18/08 00:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: -1.51σ)"
        },
        {
          "label": "18/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02960 (Z: -1.52σ)"
        },
        {
          "label": "18/08 04:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02953 (Z: -1.68σ)"
        },
        {
          "label": "18/08 06:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02951 (Z: -1.49σ)"
        },
        {
          "label": "18/08 08:00",
          "score": 79,
          "metric": "ETH/BTC: 0.02954 (Z: -1.18σ)"
        },
        {
          "label": "18/08 10:00",
          "score": 57,
          "metric": "ETH/BTC: 0.02956 (Z: -0.86σ)"
        },
        {
          "label": "18/08 12:00",
          "score": 41,
          "metric": "ETH/BTC: 0.02958 (Z: -0.62σ)"
        },
        {
          "label": "18/08 14:00",
          "score": 97,
          "metric": "ETH/BTC: 0.02949 (Z: -1.45σ)"
        },
        {
          "label": "18/08 16:00",
          "score": 14,
          "metric": "ETH/BTC: 0.02958 (Z: -0.22σ)"
        },
        {
          "label": "18/08 18:00",
          "score": 20,
          "metric": "ETH/BTC: 0.02957 (Z: -0.30σ)"
        },
        {
          "label": "18/08 20:00",
          "score": 42,
          "metric": "ETH/BTC: 0.02961 (Z: +0.64σ)"
        },
        {
          "label": "18/08 22:00",
          "score": 96,
          "metric": "ETH/BTC: 0.02964 (Z: +1.44σ)"
        },
        {
          "label": "19/08 00:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02968 (Z: +2.55σ)"
        },
        {
          "label": "19/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02967 (Z: +1.79σ)"
        },
        {
          "label": "19/08 04:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02972 (Z: +2.33σ)"
        },
        {
          "label": "19/08 06:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02974 (Z: +2.12σ)"
        },
        {
          "label": "19/08 08:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: +2.48σ)"
        },
        {
          "label": "19/08 10:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02981 (Z: +1.69σ)"
        },
        {
          "label": "19/08 12:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: +1.51σ)"
        },
        {
          "label": "19/08 14:00",
          "score": 45,
          "metric": "ETH/BTC: 0.02962 (Z: -0.68σ)"
        },
        {
          "label": "19/08 16:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03053 (Z: +4.33σ)"
        },
        {
          "label": "19/08 18:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03055 (Z: +2.61σ)"
        },
        {
          "label": "19/08 20:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03077 (Z: +2.41σ)"
        },
        {
          "label": "19/08 22:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03268 (Z: +3.35σ)"
        },
        {
          "label": "20/08 00:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03249 (Z: +2.15σ)"
        },
        {
          "label": "20/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03253 (Z: +1.71σ)"
        },
        {
          "label": "20/08 04:00",
          "score": 93,
          "metric": "ETH/BTC: 0.03252 (Z: +1.40σ)"
        },
        {
          "label": "20/08 06:00",
          "score": 70,
          "metric": "ETH/BTC: 0.03235 (Z: +1.05σ)"
        },
        {
          "label": "20/08 08:00",
          "score": 40,
          "metric": "ETH/BTC: 0.03198 (Z: +0.59σ)"
        },
        {
          "label": "20/08 10:00",
          "score": 13,
          "metric": "ETH/BTC: 0.03165 (Z: +0.19σ)"
        },
        {
          "label": "20/08 12:00",
          "score": 9,
          "metric": "ETH/BTC: 0.03174 (Z: +0.13σ)"
        },
        {
          "label": "20/08 14:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03184 (Z: +0.08σ)"
        },
        {
          "label": "20/08 16:00",
          "score": 15,
          "metric": "ETH/BTC: 0.03207 (Z: +0.22σ)"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03208 (Z: +0.04σ)"
        },
        {
          "label": "20/08 20:00",
          "score": 45,
          "metric": "ETH/BTC: 0.03193 (Z: -0.67σ)"
        },
        {
          "label": "20/08 22:00",
          "score": 77,
          "metric": "ETH/BTC: 0.03180 (Z: -1.15σ)"
        },
        {
          "label": "21/08 00:00",
          "score": 76,
          "metric": "ETH/BTC: 0.03176 (Z: -1.14σ)"
        },
        {
          "label": "21/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03147 (Z: -1.92σ)"
        },
        {
          "label": "21/08 04:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03136 (Z: -2.06σ)"
        },
        {
          "label": "21/08 06:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03136 (Z: -1.72σ)"
        },
        {
          "label": "21/08 08:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03097 (Z: -2.73σ)"
        },
        {
          "label": "21/08 10:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03084 (Z: -2.21σ)"
        },
        {
          "label": "21/08 12:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03092 (Z: -1.53σ)"
        },
        {
          "label": "21/08 14:00",
          "score": 85,
          "metric": "ETH/BTC: 0.03093 (Z: -1.28σ)"
        },
        {
          "label": "21/08 16:00",
          "score": 53,
          "metric": "ETH/BTC: 0.03107 (Z: -0.79σ)"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03136 (Z: +0.02σ)"
        },
        {
          "label": "21/08 20:00",
          "score": 26,
          "metric": "ETH/BTC: 0.03143 (Z: +0.39σ)"
        },
        {
          "label": "21/08 22:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03226 (Z: +2.84σ)"
        },
        {
          "label": "22/08 00:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03214 (Z: +2.10σ)"
        },
        {
          "label": "22/08 02:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03216 (Z: +1.70σ)"
        },
        {
          "label": "22/08 04:00",
          "score": 79,
          "metric": "ETH/BTC: 0.03201 (Z: +1.18σ)"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03142 (Z: -0.04σ)"
        },
        {
          "label": "22/08 08:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03150 (Z: +0.07σ)"
        },
        {
          "label": "22/08 10:00",
          "score": 29,
          "metric": "ETH/BTC: 0.03129 (Z: -0.44σ)"
        },
        {
          "label": "22/08 12:00",
          "score": 7,
          "metric": "ETH/BTC: 0.03150 (Z: -0.11σ)"
        },
        {
          "label": "22/08 14:00",
          "score": 31,
          "metric": "ETH/BTC: 0.03140 (Z: -0.46σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 39,
          "metric": "ETH/BTC: 0.03141 (Z: -0.59σ)"
        },
        {
          "label": "22/08 16:00",
          "score": 55,
          "metric": "ETH/BTC: 0.03135 (Z: -0.83σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 51,
          "metric": "ETH/BTC: 0.03139 (Z: -0.76σ)"
        },
        {
          "label": "22/08 18:00",
          "score": 32,
          "metric": "ETH/BTC: 0.03146 (Z: -0.48σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 26,
          "metric": "ETH/BTC: 0.03144 (Z: -0.39σ)"
        },
        {
          "label": "22/08 20:00",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.54σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02896 (Z: -2.70σ)"
        },
        {
          "label": "24/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02873 (Z: -1.75σ)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "ETH/BTC: 0.02897 (Z: +0.07σ)"
        },
        {
          "label": "24/07",
          "score": 67,
          "metric": "ETH/BTC: 0.02902 (Z: +1.01σ)"
        },
        {
          "label": "25/07",
          "score": 36,
          "metric": "ETH/BTC: 0.02902 (Z: +0.53σ)"
        },
        {
          "label": "25/07",
          "score": 27,
          "metric": "ETH/BTC: 0.02900 (Z: -0.40σ)"
        },
        {
          "label": "25/07",
          "score": 55,
          "metric": "ETH/BTC: 0.02908 (Z: +0.83σ)"
        },
        {
          "label": "26/07",
          "score": 95,
          "metric": "ETH/BTC: 0.02916 (Z: +1.42σ)"
        },
        {
          "label": "26/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02926 (Z: +1.71σ)"
        },
        {
          "label": "26/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02958 (Z: +1.89σ)"
        },
        {
          "label": "27/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02992 (Z: +1.70σ)"
        },
        {
          "label": "27/07",
          "score": 49,
          "metric": "ETH/BTC: 0.02997 (Z: +0.73σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "ETH/BTC: 0.02994 (Z: +0.03σ)"
        },
        {
          "label": "28/07",
          "score": 83,
          "metric": "ETH/BTC: 0.02971 (Z: -1.25σ)"
        },
        {
          "label": "28/07",
          "score": 79,
          "metric": "ETH/BTC: 0.02959 (Z: -1.18σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "ETH/BTC: 0.03001 (Z: +1.53σ)"
        },
        {
          "label": "29/07",
          "score": 48,
          "metric": "ETH/BTC: 0.02971 (Z: -0.73σ)"
        },
        {
          "label": "29/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: -1.72σ)"
        },
        {
          "label": "29/07",
          "score": 60,
          "metric": "ETH/BTC: 0.02965 (Z: -0.89σ)"
        },
        {
          "label": "30/07",
          "score": 8,
          "metric": "ETH/BTC: 0.02974 (Z: +0.11σ)"
        },
        {
          "label": "30/07",
          "score": 85,
          "metric": "ETH/BTC: 0.02962 (Z: -1.27σ)"
        },
        {
          "label": "30/07",
          "score": 32,
          "metric": "ETH/BTC: 0.02969 (Z: -0.48σ)"
        },
        {
          "label": "31/07",
          "score": 63,
          "metric": "ETH/BTC: 0.02962 (Z: -0.94σ)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02945 (Z: -2.92σ)"
        },
        {
          "label": "31/07",
          "score": 21,
          "metric": "ETH/BTC: 0.02964 (Z: +0.31σ)"
        },
        {
          "label": "01/08",
          "score": 47,
          "metric": "ETH/BTC: 0.02965 (Z: +0.71σ)"
        },
        {
          "label": "01/08",
          "score": 50,
          "metric": "ETH/BTC: 0.02959 (Z: -0.75σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02935 (Z: -3.28σ)"
        },
        {
          "label": "02/08",
          "score": 15,
          "metric": "ETH/BTC: 0.02958 (Z: +0.23σ)"
        },
        {
          "label": "02/08",
          "score": 62,
          "metric": "ETH/BTC: 0.02942 (Z: -0.94σ)"
        },
        {
          "label": "02/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02967 (Z: +1.86σ)"
        },
        {
          "label": "03/08",
          "score": 12,
          "metric": "ETH/BTC: 0.02957 (Z: +0.18σ)"
        },
        {
          "label": "03/08",
          "score": 80,
          "metric": "ETH/BTC: 0.02941 (Z: -1.20σ)"
        },
        {
          "label": "03/08",
          "score": 83,
          "metric": "ETH/BTC: 0.02927 (Z: -1.25σ)"
        },
        {
          "label": "04/08",
          "score": 57,
          "metric": "ETH/BTC: 0.02924 (Z: -0.85σ)"
        },
        {
          "label": "04/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02937 (Z: +2.17σ)"
        },
        {
          "label": "04/08",
          "score": 70,
          "metric": "ETH/BTC: 0.02919 (Z: -1.05σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02910 (Z: -1.59σ)"
        },
        {
          "label": "05/08",
          "score": 10,
          "metric": "ETH/BTC: 0.02916 (Z: -0.16σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02954 (Z: +2.22σ)"
        },
        {
          "label": "06/08",
          "score": 50,
          "metric": "ETH/BTC: 0.02947 (Z: +0.76σ)"
        },
        {
          "label": "06/08",
          "score": 29,
          "metric": "ETH/BTC: 0.02950 (Z: +0.44σ)"
        },
        {
          "label": "06/08",
          "score": 72,
          "metric": "ETH/BTC: 0.02959 (Z: +1.07σ)"
        },
        {
          "label": "07/08",
          "score": 16,
          "metric": "ETH/BTC: 0.02953 (Z: -0.24σ)"
        },
        {
          "label": "07/08",
          "score": 45,
          "metric": "ETH/BTC: 0.02959 (Z: +0.68σ)"
        },
        {
          "label": "07/08",
          "score": 77,
          "metric": "ETH/BTC: 0.02950 (Z: -1.16σ)"
        },
        {
          "label": "08/08",
          "score": 60,
          "metric": "ETH/BTC: 0.02948 (Z: -0.90σ)"
        },
        {
          "label": "08/08",
          "score": 61,
          "metric": "ETH/BTC: 0.02954 (Z: +0.92σ)"
        },
        {
          "label": "08/08",
          "score": 47,
          "metric": "ETH/BTC: 0.02953 (Z: +0.71σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "ETH/BTC: 0.02952 (Z: -0.07σ)"
        },
        {
          "label": "09/08",
          "score": 39,
          "metric": "ETH/BTC: 0.02953 (Z: -0.58σ)"
        },
        {
          "label": "09/08",
          "score": 99,
          "metric": "ETH/BTC: 0.02948 (Z: -1.48σ)"
        },
        {
          "label": "10/08",
          "score": 68,
          "metric": "ETH/BTC: 0.02948 (Z: -1.03σ)"
        },
        {
          "label": "10/08",
          "score": 99,
          "metric": "ETH/BTC: 0.02946 (Z: -1.49σ)"
        },
        {
          "label": "10/08",
          "score": 84,
          "metric": "ETH/BTC: 0.02930 (Z: -1.26σ)"
        },
        {
          "label": "11/08",
          "score": 49,
          "metric": "ETH/BTC: 0.02929 (Z: -0.73σ)"
        },
        {
          "label": "11/08",
          "score": 74,
          "metric": "ETH/BTC: 0.02937 (Z: +1.10σ)"
        },
        {
          "label": "11/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02953 (Z: +2.71σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02961 (Z: +1.58σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02980 (Z: +1.76σ)"
        },
        {
          "label": "12/08",
          "score": 19,
          "metric": "ETH/BTC: 0.02970 (Z: +0.29σ)"
        },
        {
          "label": "13/08",
          "score": 8,
          "metric": "ETH/BTC: 0.02970 (Z: +0.12σ)"
        },
        {
          "label": "13/08",
          "score": 7,
          "metric": "ETH/BTC: 0.02967 (Z: -0.11σ)"
        },
        {
          "label": "13/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02975 (Z: +1.78σ)"
        },
        {
          "label": "14/08",
          "score": 67,
          "metric": "ETH/BTC: 0.02975 (Z: +1.01σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02988 (Z: +2.25σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02989 (Z: +1.70σ)"
        },
        {
          "label": "15/08",
          "score": 27,
          "metric": "ETH/BTC: 0.02986 (Z: +0.41σ)"
        },
        {
          "label": "15/08",
          "score": 28,
          "metric": "ETH/BTC: 0.02983 (Z: -0.41σ)"
        },
        {
          "label": "15/08",
          "score": 23,
          "metric": "ETH/BTC: 0.02985 (Z: -0.34σ)"
        },
        {
          "label": "16/08",
          "score": 92,
          "metric": "ETH/BTC: 0.02982 (Z: -1.37σ)"
        },
        {
          "label": "16/08",
          "score": 63,
          "metric": "ETH/BTC: 0.02983 (Z: -0.94σ)"
        },
        {
          "label": "16/08",
          "score": 75,
          "metric": "ETH/BTC: 0.02986 (Z: +1.13σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02998 (Z: +2.06σ)"
        },
        {
          "label": "17/08",
          "score": 22,
          "metric": "ETH/BTC: 0.02987 (Z: -0.33σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02960 (Z: -2.42σ)"
        },
        {
          "label": "18/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02954 (Z: -1.51σ)"
        },
        {
          "label": "18/08",
          "score": 34,
          "metric": "ETH/BTC: 0.02959 (Z: -0.52σ)"
        },
        {
          "label": "18/08",
          "score": 64,
          "metric": "ETH/BTC: 0.02962 (Z: +0.96σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02971 (Z: +1.92σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02987 (Z: +1.94σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "ETH/BTC: 0.03196 (Z: +5.00σ)"
        },
        {
          "label": "20/08",
          "score": 82,
          "metric": "ETH/BTC: 0.03240 (Z: +1.23σ)"
        },
        {
          "label": "20/08",
          "score": 15,
          "metric": "ETH/BTC: 0.03187 (Z: +0.22σ)"
        },
        {
          "label": "20/08",
          "score": 55,
          "metric": "ETH/BTC: 0.03192 (Z: -0.83σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "ETH/BTC: 0.03139 (Z: -1.87σ)"
        },
        {
          "label": "21/08",
          "score": 97,
          "metric": "ETH/BTC: 0.03092 (Z: -1.46σ)"
        },
        {
          "label": "21/08",
          "score": 38,
          "metric": "ETH/BTC: 0.03147 (Z: +0.57σ)"
        },
        {
          "label": "22/08",
          "score": 83,
          "metric": "ETH/BTC: 0.03207 (Z: +1.24σ)"
        },
        {
          "label": "22/08",
          "score": 26,
          "metric": "ETH/BTC: 0.03140 (Z: -0.38σ)"
        },
        {
          "label": "22/08",
          "score": 27,
          "metric": "ETH/BTC: 0.03150 (Z: -0.41σ)"
        },
        {
          "label": "22/08",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.54σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 100,
          "metric": "ETH/BTC: 0.04127 (Z: +2.10σ)"
        },
        {
          "label": "26/08/25",
          "score": 100,
          "metric": "ETH/BTC: 0.04141 (Z: +1.93σ)"
        },
        {
          "label": "30/08/25",
          "score": 90,
          "metric": "ETH/BTC: 0.03997 (Z: -1.34σ)"
        },
        {
          "label": "03/09/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03987 (Z: +1.56σ)"
        },
        {
          "label": "07/09/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03854 (Z: -1.75σ)"
        },
        {
          "label": "11/09/25",
          "score": 16,
          "metric": "ETH/BTC: 0.03864 (Z: +0.23σ)"
        },
        {
          "label": "15/09/25",
          "score": 79,
          "metric": "ETH/BTC: 0.03914 (Z: -1.18σ)"
        },
        {
          "label": "19/09/25",
          "score": 71,
          "metric": "ETH/BTC: 0.03865 (Z: -1.07σ)"
        },
        {
          "label": "23/09/25",
          "score": 71,
          "metric": "ETH/BTC: 0.03725 (Z: +1.06σ)"
        },
        {
          "label": "27/09/25",
          "score": 11,
          "metric": "ETH/BTC: 0.03667 (Z: +0.16σ)"
        },
        {
          "label": "01/10/25",
          "score": 47,
          "metric": "ETH/BTC: 0.03679 (Z: +0.70σ)"
        },
        {
          "label": "05/10/25",
          "score": 11,
          "metric": "ETH/BTC: 0.03671 (Z: -0.17σ)"
        },
        {
          "label": "09/10/25",
          "score": 42,
          "metric": "ETH/BTC: 0.03581 (Z: -0.62σ)"
        },
        {
          "label": "13/10/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03689 (Z: +2.33σ)"
        },
        {
          "label": "17/10/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03614 (Z: +1.63σ)"
        },
        {
          "label": "21/10/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03558 (Z: -2.20σ)"
        },
        {
          "label": "25/10/25",
          "score": 61,
          "metric": "ETH/BTC: 0.03542 (Z: +0.91σ)"
        },
        {
          "label": "29/10/25",
          "score": 8,
          "metric": "ETH/BTC: 0.03544 (Z: -0.12σ)"
        },
        {
          "label": "02/11/25",
          "score": 15,
          "metric": "ETH/BTC: 0.03508 (Z: -0.22σ)"
        },
        {
          "label": "06/11/25",
          "score": 16,
          "metric": "ETH/BTC: 0.03279 (Z: -0.25σ)"
        },
        {
          "label": "10/11/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03348 (Z: -1.67σ)"
        },
        {
          "label": "03/12/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03349 (Z: +2.96σ)"
        },
        {
          "label": "07/12/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03370 (Z: -1.64σ)"
        },
        {
          "label": "18/01/26",
          "score": 95,
          "metric": "ETH/BTC: 0.03504 (Z: +1.43σ)"
        },
        {
          "label": "22/01/26",
          "score": 77,
          "metric": "ETH/BTC: 0.03297 (Z: -1.16σ)"
        },
        {
          "label": "28/01/26",
          "score": 80,
          "metric": "ETH/BTC: 0.03377 (Z: +1.20σ)"
        },
        {
          "label": "01/02/26",
          "score": 85,
          "metric": "ETH/BTC: 0.03019 (Z: -1.27σ)"
        },
        {
          "label": "06/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02894 (Z: -2.44σ)"
        },
        {
          "label": "10/02/26",
          "score": 16,
          "metric": "ETH/BTC: 0.02938 (Z: -0.24σ)"
        },
        {
          "label": "16/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02905 (Z: +1.52σ)"
        },
        {
          "label": "21/02/26",
          "score": 38,
          "metric": "ETH/BTC: 0.02891 (Z: -0.57σ)"
        },
        {
          "label": "25/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02941 (Z: +2.53σ)"
        },
        {
          "label": "02/03/26",
          "score": 35,
          "metric": "ETH/BTC: 0.02952 (Z: -0.52σ)"
        },
        {
          "label": "07/03/26",
          "score": 32,
          "metric": "ETH/BTC: 0.02922 (Z: +0.49σ)"
        },
        {
          "label": "11/03/26",
          "score": 88,
          "metric": "ETH/BTC: 0.02930 (Z: +1.33σ)"
        },
        {
          "label": "16/03/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03065 (Z: +1.94σ)"
        },
        {
          "label": "20/03/26",
          "score": 17,
          "metric": "ETH/BTC: 0.03044 (Z: -0.26σ)"
        },
        {
          "label": "25/03/26",
          "score": 19,
          "metric": "ETH/BTC: 0.03052 (Z: +0.29σ)"
        },
        {
          "label": "30/03/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03040 (Z: +2.33σ)"
        },
        {
          "label": "03/04/26",
          "score": 81,
          "metric": "ETH/BTC: 0.03068 (Z: -1.21σ)"
        },
        {
          "label": "08/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03127 (Z: +2.12σ)"
        },
        {
          "label": "12/04/26",
          "score": 26,
          "metric": "ETH/BTC: 0.03091 (Z: -0.38σ)"
        },
        {
          "label": "16/04/26",
          "score": 78,
          "metric": "ETH/BTC: 0.03129 (Z: -1.17σ)"
        },
        {
          "label": "20/04/26",
          "score": 59,
          "metric": "ETH/BTC: 0.03056 (Z: -0.89σ)"
        },
        {
          "label": "24/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02991 (Z: +1.55σ)"
        },
        {
          "label": "29/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03011 (Z: +1.51σ)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02961 (Z: +1.99σ)"
        },
        {
          "label": "07/05/26",
          "score": 93,
          "metric": "ETH/BTC: 0.02862 (Z: -1.40σ)"
        },
        {
          "label": "13/05/26",
          "score": 63,
          "metric": "ETH/BTC: 0.02841 (Z: +0.94σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02743 (Z: -3.52σ)"
        },
        {
          "label": "22/05/26",
          "score": 15,
          "metric": "ETH/BTC: 0.02747 (Z: -0.23σ)"
        },
        {
          "label": "26/05/26",
          "score": 39,
          "metric": "ETH/BTC: 0.02737 (Z: +0.58σ)"
        },
        {
          "label": "30/05/26",
          "score": 12,
          "metric": "ETH/BTC: 0.02742 (Z: +0.18σ)"
        },
        {
          "label": "04/06/26",
          "score": 34,
          "metric": "ETH/BTC: 0.02800 (Z: +0.51σ)"
        },
        {
          "label": "08/06/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02667 (Z: +1.75σ)"
        },
        {
          "label": "12/06/26",
          "score": 31,
          "metric": "ETH/BTC: 0.02631 (Z: -0.47σ)"
        },
        {
          "label": "16/06/26",
          "score": 21,
          "metric": "ETH/BTC: 0.02697 (Z: +0.32σ)"
        },
        {
          "label": "20/06/26",
          "score": 96,
          "metric": "ETH/BTC: 0.02692 (Z: -1.44σ)"
        },
        {
          "label": "24/06/26",
          "score": 31,
          "metric": "ETH/BTC: 0.02658 (Z: -0.47σ)"
        },
        {
          "label": "28/06/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02614 (Z: -1.52σ)"
        },
        {
          "label": "02/07/26",
          "score": 14,
          "metric": "ETH/BTC: 0.02686 (Z: -0.21σ)"
        },
        {
          "label": "06/07/26",
          "score": 41,
          "metric": "ETH/BTC: 0.02811 (Z: -0.62σ)"
        },
        {
          "label": "10/07/26",
          "score": 22,
          "metric": "ETH/BTC: 0.02772 (Z: -0.33σ)"
        },
        {
          "label": "14/07/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02852 (Z: +1.54σ)"
        },
        {
          "label": "18/07/26",
          "score": 45,
          "metric": "ETH/BTC: 0.02882 (Z: -0.67σ)"
        },
        {
          "label": "22/07/26",
          "score": 8,
          "metric": "ETH/BTC: 0.02914 (Z: +0.11σ)"
        },
        {
          "label": "26/07/26",
          "score": 94,
          "metric": "ETH/BTC: 0.02915 (Z: +1.42σ)"
        },
        {
          "label": "30/07/26",
          "score": 25,
          "metric": "ETH/BTC: 0.02977 (Z: +0.38σ)"
        },
        {
          "label": "03/08/26",
          "score": 32,
          "metric": "ETH/BTC: 0.02952 (Z: -0.48σ)"
        },
        {
          "label": "07/08/26",
          "score": 11,
          "metric": "ETH/BTC: 0.02953 (Z: -0.17σ)"
        },
        {
          "label": "11/08/26",
          "score": 36,
          "metric": "ETH/BTC: 0.02932 (Z: -0.54σ)"
        },
        {
          "label": "15/08/26",
          "score": 32,
          "metric": "ETH/BTC: 0.02986 (Z: +0.48σ)"
        },
        {
          "label": "19/08/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02971 (Z: +2.28σ)"
        },
        {
          "label": "22/08/26",
          "score": 36,
          "metric": "ETH/BTC: 0.03138 (Z: -0.54σ)"
        }
      ]
    }
  },
  {
    "id": 8,
    "nome": "Plano Flecha de Sagarana",
    "badge": "🏹 BTC Micro-Dip 5m",
    "categoria": "medio_risco",
    "par": "BRL -> BTC",
    "lote_brl": 75.0,
    "lucro_min_pct": 0.8,
    "gatilho_desc": "Micro-Queda 5m <= -0.40% (> 1.5σ intradiário)",
    "trava_ruptura": "Trava Espectral: Exige Ew < 50.0 (Sem tempestade de choque)",
    "cooldown_horas": 1.5,
    "valor_atual_str": "Retorno 5m = +0.04%",
    "alvo_str": "Retorno 5m <= -0.40%",
    "distancia_display": "Faltam +0.44% de recuo rápido",
    "proximidade_score": 5,
    "status": "RADAR_ATIVO_5M",
    "icone": "🏹",
    "cor": "#EAB308",
    "descricao_executiva": "Caçador ultrarrápido de micro-quedas de 5 minutos no Bitcoin. Detecta quedas agudas provocadas por ordens a mercado agressivas que consomem a liquidez imediata, executando compras com ordem limite e realização em 0.80%.",
    "condicoes_ativacao": "• Retorno do Bitcoin nos últimos 5 minutos atinge queda <= -0.40% (desvio > 1.5σ de 5m).<br>• Presença de parede de liquidez no livro com bid/ask imbalance > 1.20.",
    "limitacoes_trava": "• <b>Trava Anti-Cascade:</b> Aborta se houver mais de 3 micro-quedas consecutivas sem repique.<br>• <b>Trava Wavelet Ew < 50.0:</b> Exige ausência de ondas de choque de alta energia.",
    "series_historica": {
      "1h": [
        {
          "label": "19:18",
          "score": 75,
          "metric": "Retorno 5m: -0.30%"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "Retorno 5m: +0.29%"
        },
        {
          "label": "19:19",
          "score": 97,
          "metric": "Retorno 5m: -0.39%"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "Retorno 5m: +0.24%"
        },
        {
          "label": "19:20",
          "score": 72,
          "metric": "Retorno 5m: -0.29%"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "Retorno 5m: +0.25%"
        },
        {
          "label": "19:21",
          "score": 64,
          "metric": "Retorno 5m: -0.26%"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "Retorno 5m: +0.31%"
        },
        {
          "label": "19:22",
          "score": 73,
          "metric": "Retorno 5m: -0.29%"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "Retorno 5m: +0.23%"
        },
        {
          "label": "19:23",
          "score": 82,
          "metric": "Retorno 5m: -0.33%"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "Retorno 5m: +0.23%"
        },
        {
          "label": "19:24",
          "score": 52,
          "metric": "Retorno 5m: -0.21%"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "19:26",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "19:28",
          "score": 66,
          "metric": "Retorno 5m: -0.26%"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "19:29",
          "score": 69,
          "metric": "Retorno 5m: -0.28%"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "Retorno 5m: +0.24%"
        },
        {
          "label": "19:30",
          "score": 85,
          "metric": "Retorno 5m: -0.34%"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "Retorno 5m: +0.31%"
        },
        {
          "label": "19:31",
          "score": 76,
          "metric": "Retorno 5m: -0.30%"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "Retorno 5m: +0.34%"
        },
        {
          "label": "19:32",
          "score": 98,
          "metric": "Retorno 5m: -0.39%"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "Retorno 5m: +0.39%"
        },
        {
          "label": "19:33",
          "score": 100,
          "metric": "Retorno 5m: -0.44%"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "Retorno 5m: +0.36%"
        },
        {
          "label": "19:34",
          "score": 100,
          "metric": "Retorno 5m: -0.54%"
        },
        {
          "label": "19:35",
          "score": 5,
          "metric": "Retorno 5m: +0.44%"
        },
        {
          "label": "19:35",
          "score": 100,
          "metric": "Retorno 5m: -0.49%"
        },
        {
          "label": "19:36",
          "score": 5,
          "metric": "Retorno 5m: +0.48%"
        },
        {
          "label": "19:36",
          "score": 100,
          "metric": "Retorno 5m: -0.48%"
        },
        {
          "label": "19:37",
          "score": 5,
          "metric": "Retorno 5m: +0.54%"
        },
        {
          "label": "19:37",
          "score": 100,
          "metric": "Retorno 5m: -0.44%"
        },
        {
          "label": "19:38",
          "score": 5,
          "metric": "Retorno 5m: +0.54%"
        },
        {
          "label": "19:38",
          "score": 99,
          "metric": "Retorno 5m: -0.40%"
        },
        {
          "label": "19:39",
          "score": 5,
          "metric": "Retorno 5m: +0.52%"
        },
        {
          "label": "19:39",
          "score": 100,
          "metric": "Retorno 5m: -0.45%"
        },
        {
          "label": "19:40",
          "score": 5,
          "metric": "Retorno 5m: +0.49%"
        },
        {
          "label": "19:40",
          "score": 100,
          "metric": "Retorno 5m: -0.50%"
        },
        {
          "label": "19:41",
          "score": 5,
          "metric": "Retorno 5m: +0.41%"
        },
        {
          "label": "19:41",
          "score": 100,
          "metric": "Retorno 5m: -0.48%"
        },
        {
          "label": "19:42",
          "score": 5,
          "metric": "Retorno 5m: +0.47%"
        },
        {
          "label": "19:42",
          "score": 100,
          "metric": "Retorno 5m: -0.47%"
        },
        {
          "label": "19:43",
          "score": 5,
          "metric": "Retorno 5m: +0.56%"
        },
        {
          "label": "19:43",
          "score": 94,
          "metric": "Retorno 5m: -0.37%"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "Retorno 5m: +0.53%"
        },
        {
          "label": "19:44",
          "score": 99,
          "metric": "Retorno 5m: -0.40%"
        },
        {
          "label": "19:45",
          "score": 5,
          "metric": "Retorno 5m: +0.53%"
        },
        {
          "label": "19:46",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "19:47",
          "score": 5,
          "metric": "Retorno 5m: +0.47%"
        },
        {
          "label": "19:47",
          "score": 100,
          "metric": "Retorno 5m: -0.44%"
        },
        {
          "label": "19:48",
          "score": 5,
          "metric": "Retorno 5m: +0.50%"
        },
        {
          "label": "19:48",
          "score": 100,
          "metric": "Retorno 5m: -0.48%"
        },
        {
          "label": "19:49",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "19:49",
          "score": 100,
          "metric": "Retorno 5m: -0.51%"
        },
        {
          "label": "19:50",
          "score": 5,
          "metric": "Retorno 5m: +0.49%"
        },
        {
          "label": "19:50",
          "score": 100,
          "metric": "Retorno 5m: -0.53%"
        },
        {
          "label": "19:51",
          "score": 5,
          "metric": "Retorno 5m: +0.54%"
        },
        {
          "label": "19:51",
          "score": 100,
          "metric": "Retorno 5m: -0.52%"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "Retorno 5m: +0.55%"
        },
        {
          "label": "19:52",
          "score": 100,
          "metric": "Retorno 5m: -0.45%"
        },
        {
          "label": "19:52",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "19:53",
          "score": 100,
          "metric": "Retorno 5m: -0.48%"
        },
        {
          "label": "19:54",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "19:55",
          "score": 100,
          "metric": "Retorno 5m: -0.51%"
        },
        {
          "label": "19:56",
          "score": 27,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "19:57",
          "score": 41,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "19:58",
          "score": 46,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "19:59",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "20:01",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "20:01",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "20:02",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "20:03",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "20:04",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "20:05",
          "score": 5,
          "metric": "Retorno 5m: +0.13%"
        },
        {
          "label": "20:06",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "20:07",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "20:08",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "20:09",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "20:10",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20:12",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "20:13",
          "score": 22,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "20:14",
          "score": 30,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "20:15",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "20:16",
          "score": 16,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        }
      ],
      "24h": [
        {
          "label": "20:19",
          "score": 5,
          "metric": "Retorno 5m: +0.22%"
        },
        {
          "label": "20:39",
          "score": 40,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "20:59",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "21:19",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "21:39",
          "score": 100,
          "metric": "Retorno 5m: -0.44%"
        },
        {
          "label": "21:59",
          "score": 49,
          "metric": "Retorno 5m: -0.20%"
        },
        {
          "label": "22:19",
          "score": 47,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "22:39",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "22:59",
          "score": 27,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "23:19",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "23:39",
          "score": 54,
          "metric": "Retorno 5m: -0.21%"
        },
        {
          "label": "23:59",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "00:19",
          "score": 5,
          "metric": "Retorno 5m: +0.21%"
        },
        {
          "label": "00:39",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "00:59",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "01:19",
          "score": 41,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "01:39",
          "score": 38,
          "metric": "Retorno 5m: -0.15%"
        },
        {
          "label": "01:59",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "02:19",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "02:39",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "02:59",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "03:19",
          "score": 5,
          "metric": "Retorno 5m: +0.22%"
        },
        {
          "label": "03:39",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "03:59",
          "score": 48,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "04:19",
          "score": 60,
          "metric": "Retorno 5m: -0.24%"
        },
        {
          "label": "04:39",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "04:59",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "05:19",
          "score": 100,
          "metric": "Retorno 5m: -0.42%"
        },
        {
          "label": "05:39",
          "score": 60,
          "metric": "Retorno 5m: -0.24%"
        },
        {
          "label": "05:59",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "06:19",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "06:39",
          "score": 5,
          "metric": "Retorno 5m: +0.54%"
        },
        {
          "label": "06:59",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "07:19",
          "score": 40,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "07:39",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "07:59",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "08:19",
          "score": 31,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "08:39",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "08:59",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "09:19",
          "score": 24,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "09:39",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "09:59",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "10:19",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "10:39",
          "score": 5,
          "metric": "Retorno 5m: +0.16%"
        },
        {
          "label": "10:59",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "11:19",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "11:39",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "11:59",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "12:19",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "12:39",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "12:59",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "13:19",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "13:39",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "13:59",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "14:14",
          "score": 74,
          "metric": "Retorno 5m: -0.30%"
        },
        {
          "label": "14:24",
          "score": 95,
          "metric": "Retorno 5m: -0.38%"
        },
        {
          "label": "14:34",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "14:44",
          "score": 77,
          "metric": "Retorno 5m: -0.31%"
        },
        {
          "label": "14:55",
          "score": 100,
          "metric": "Retorno 5m: -0.52%"
        },
        {
          "label": "15:05",
          "score": 84,
          "metric": "Retorno 5m: -0.33%"
        },
        {
          "label": "15:15",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "15:25",
          "score": 5,
          "metric": "Retorno 5m: +0.43%"
        },
        {
          "label": "15:36",
          "score": 5,
          "metric": "Retorno 5m: +0.25%"
        },
        {
          "label": "15:46",
          "score": 5,
          "metric": "Retorno 5m: +0.23%"
        },
        {
          "label": "15:57",
          "score": 5,
          "metric": "Retorno 5m: +0.33%"
        },
        {
          "label": "16:07",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "16:18",
          "score": 76,
          "metric": "Retorno 5m: -0.30%"
        },
        {
          "label": "16:28",
          "score": 31,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "16:38",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "16:48",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "16:59",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "17:09",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "17:20",
          "score": 22,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "17:30",
          "score": 49,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "17:41",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "17:51",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "18:01",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "18:12",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "18:22",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "18:32",
          "score": 70,
          "metric": "Retorno 5m: -0.28%"
        },
        {
          "label": "18:42",
          "score": 100,
          "metric": "Retorno 5m: -0.44%"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Retorno 5m: +0.25%"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "Retorno 5m: +0.53%"
        },
        {
          "label": "19:13",
          "score": 54,
          "metric": "Retorno 5m: -0.22%"
        },
        {
          "label": "19:23",
          "score": 82,
          "metric": "Retorno 5m: -0.33%"
        },
        {
          "label": "19:34",
          "score": 5,
          "metric": "Retorno 5m: +0.36%"
        },
        {
          "label": "19:44",
          "score": 5,
          "metric": "Retorno 5m: +0.53%"
        },
        {
          "label": "19:56",
          "score": 27,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "20:17",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "20:18",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        }
      ],
      "7d": [
        {
          "label": "15/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "15/08 22:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "16/08 00:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08 02:00",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "16/08 04:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "16/08 06:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08 08:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08 10:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "16/08 14:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "16/08 16:00",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "16/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "16/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "16/08 22:00",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "17/08 00:00",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "17/08 02:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "17/08 04:00",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "17/08 06:00",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "17/08 08:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "17/08 10:00",
          "score": 6,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "17/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "17/08 14:00",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "17/08 16:00",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "17/08 18:00",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "17/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "17/08 22:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "18/08 00:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "18/08 02:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "18/08 04:00",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "18/08 06:00",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "18/08 08:00",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "18/08 10:00",
          "score": 6,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "18/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "18/08 14:00",
          "score": 5,
          "metric": "Retorno 5m: +0.54%"
        },
        {
          "label": "18/08 16:00",
          "score": 9,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "18/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "18/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18/08 22:00",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19/08 00:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "19/08 02:00",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "19/08 04:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "19/08 06:00",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "19/08 08:00",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "19/08 10:00",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19/08 14:00",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19/08 16:00",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "19/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: +0.23%"
        },
        {
          "label": "19/08 22:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 00:00",
          "score": 32,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "20/08 02:00",
          "score": 19,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "20/08 04:00",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 06:00",
          "score": 5,
          "metric": "Retorno 5m: +0.26%"
        },
        {
          "label": "20/08 08:00",
          "score": 53,
          "metric": "Retorno 5m: -0.21%"
        },
        {
          "label": "20/08 10:00",
          "score": 37,
          "metric": "Retorno 5m: -0.15%"
        },
        {
          "label": "20/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "20/08 14:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "20/08 16:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "20/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "20/08 22:00",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "21/08 00:00",
          "score": 5,
          "metric": "Retorno 5m: +0.16%"
        },
        {
          "label": "21/08 02:00",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "21/08 04:00",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "21/08 06:00",
          "score": 71,
          "metric": "Retorno 5m: -0.28%"
        },
        {
          "label": "21/08 08:00",
          "score": 68,
          "metric": "Retorno 5m: -0.27%"
        },
        {
          "label": "21/08 10:00",
          "score": 62,
          "metric": "Retorno 5m: -0.25%"
        },
        {
          "label": "21/08 12:00",
          "score": 51,
          "metric": "Retorno 5m: -0.20%"
        },
        {
          "label": "21/08 14:00",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "21/08 16:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "21/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: +0.13%"
        },
        {
          "label": "21/08 20:00",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "21/08 22:00",
          "score": 34,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "22/08 00:00",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "22/08 02:00",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "22/08 04:00",
          "score": 5,
          "metric": "Retorno 5m: +0.32%"
        },
        {
          "label": "22/08 06:00",
          "score": 5,
          "metric": "Retorno 5m: +0.16%"
        },
        {
          "label": "22/08 08:00",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "22/08 10:00",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "22/08 12:00",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "22/08 14:00",
          "score": 74,
          "metric": "Retorno 5m: -0.30%"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "Retorno 5m: +0.49%"
        },
        {
          "label": "22/08 16:00",
          "score": 64,
          "metric": "Retorno 5m: -0.26%"
        },
        {
          "label": "22/08 17:00",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "22/08 18:00",
          "score": 5,
          "metric": "Retorno 5m: +0.24%"
        },
        {
          "label": "22/08 19:00",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "22/08 20:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "Retorno 5m: +0.13%"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "24/07",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "25/07",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "25/07",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "25/07",
          "score": 24,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "26/07",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "27/07",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "28/07",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "29/07",
          "score": 84,
          "metric": "Retorno 5m: -0.34%"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "30/07",
          "score": 32,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "30/07",
          "score": 33,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Retorno 5m: +0.19%"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "01/08",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "05/08",
          "score": 9,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "06/08",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "07/08",
          "score": 22,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Retorno 5m: +0.20%"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Retorno 5m: +0.15%"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "11/08",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Retorno 5m: +0.17%"
        },
        {
          "label": "12/08",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "13/08",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "14/08",
          "score": 39,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "17/08",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18/08",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "19/08",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19/08",
          "score": 24,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Retorno 5m: +0.20%"
        },
        {
          "label": "20/08",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "21/08",
          "score": 48,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "21/08",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Retorno 5m: +0.19%"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "03/09/25",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "19/09/25",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "23/09/25",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "05/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "09/10/25",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "21/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "29/10/25",
          "score": 24,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "02/11/25",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "06/11/25",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "10/11/25",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "03/12/25",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "07/12/25",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "18/01/26",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "22/01/26",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.21%"
        },
        {
          "label": "06/02/26",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "10/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "21/02/26",
          "score": 6,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.21%"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.60%"
        },
        {
          "label": "07/03/26",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "16/03/26",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "30/03/26",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "03/04/26",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "12/04/26",
          "score": 41,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "16/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "20/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "29/04/26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "03/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "07/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "13/05/26",
          "score": 19,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "17/05/26",
          "score": 23,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "30/05/26",
          "score": 27,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "04/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.35%"
        },
        {
          "label": "08/06/26",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
        },
        {
          "label": "12/06/26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "16/06/26",
          "score": 77,
          "metric": "Retorno 5m: -0.31%"
        },
        {
          "label": "20/06/26",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.13%"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "02/07/26",
          "score": 29,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "10/07/26",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "14/07/26",
          "score": 32,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "18/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "22/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "26/07/26",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "30/07/26",
          "score": 26,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "03/08/26",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "07/08/26",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        }
      ]
    }
  }
];

window.PORTFOLIO_STATE = {
  "total_brl": 1709.72,
  "aportado_brl": 1731.0,
  "prejuizo_residual_brl": -21.28,
  "caixa_brl": 1150.0,
  "caixa_pct": 67.26,
  "btc_brl": 448.19,
  "btc_qtd": 0.00112671,
  "btc_pct": 26.21,
  "paxg_brl": 81.48,
  "paxg_qtd": 0.00344075,
  "paxg_pct": 4.77,
  "usdt_brl": 30.05,
  "usdt_qtd": 5.8206,
  "usdt_pct": 1.76,
  "cotacoes_ao_vivo": {
    "BTCBRL": 397227.0,
    "USDTBRL": 5.1582,
    "PAXGBRL": 23655.350454,
    "SOLBRL": 482.7,
    "ETHBRL": 12463.47,
    "LINKBRL": 59.78,
    "BNBBRL": 3573.0,
    "ADABRL": 1.165,
    "VIX": 15.13,
    "USDBRL_COMERCIAL": 5.1366
  },
  "harmonicus_sensores": {
    "pc1": 0.6284,
    "entropia": 1.2425,
    "energia_fourier": 20.9885,
    "energia_wavelet_morlet": -0.5913,
    "t0_ehlers": 13.7,
    "snr_ehlers": 12.8,
    "fluxo_ste": 0.0,
    "regime": "RESONANCIA_SISTEMICA",
    "fator_lote": 1.0
  }
};
