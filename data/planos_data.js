// Gerado automaticamente pelo MoneyLab Data Engine (2026-08-22 19:33:56)
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
    "valor_atual_str": "Ratio 0.05968 (Z: -1.43σ)",
    "alvo_str": "Ratio <= 0.05580 (Alvo BTC: ~R$ 424.000)",
    "distancia_display": "+7.0% de distância do alvo",
    "proximidade_score": 87,
    "status": "SENTINELA_QUENTE",
    "icone": "🥇",
    "cor": "#F59E0B",
    "descricao_executiva": "Arbitragem secular entre a reserva milenar de valor (Ouro Físico Tokenizado PAXG) e a reserva digital soberana (Bitcoin). Monetiza topos eufóricos de BTC girando para Ouro e recompra BTC com desconto nos fundos de pânico.",
    "condicoes_ativacao": "• Z-Score do par PAXG/BTC ultrapassa ±1.65σ na janela de 168 horas.<br>• Ratio PAXG/BTC atinge bandas extremas (0.05580 ou 0.07520).<br>• Confirmação de cointegração pelo teste Engle-Granger (p < 0.05).",
    "limitacoes_trava": "• <b>Trava de Pânico (PC1 > 70%):</b> Reduz tamanho de lote pela metade se a correlação global colapsar.<br>• <b>Trava Wavelet (Ew >= 50):</b> Pausa execução durante tempestades de volatilidade de cauda longa.<br>• <b>Cooldown Mandatório:</b> 4 horas de intervalo mínimo entre execuções.",
    "series_historica": {
      "1h": [
        {
          "label": "18:33",
          "score": 91,
          "metric": "Ratio: 0.05940 (Z: -1.51σ)"
        },
        {
          "label": "18:34",
          "score": 92,
          "metric": "Ratio: 0.05937 (Z: -1.51σ)"
        },
        {
          "label": "18:35",
          "score": 92,
          "metric": "Ratio: 0.05939 (Z: -1.51σ)"
        },
        {
          "label": "18:36",
          "score": 91,
          "metric": "Ratio: 0.05941 (Z: -1.51σ)"
        },
        {
          "label": "18:37",
          "score": 89,
          "metric": "Ratio: 0.05956 (Z: -1.47σ)"
        },
        {
          "label": "18:38",
          "score": 89,
          "metric": "Ratio: 0.05954 (Z: -1.48σ)"
        },
        {
          "label": "18:39",
          "score": 89,
          "metric": "Ratio: 0.05957 (Z: -1.47σ)"
        },
        {
          "label": "18:40",
          "score": 89,
          "metric": "Ratio: 0.05959 (Z: -1.46σ)"
        },
        {
          "label": "18:41",
          "score": 89,
          "metric": "Ratio: 0.05960 (Z: -1.46σ)"
        },
        {
          "label": "18:42",
          "score": 88,
          "metric": "Ratio: 0.05962 (Z: -1.46σ)"
        },
        {
          "label": "18:43",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:44",
          "score": 89,
          "metric": "Ratio: 0.05956 (Z: -1.47σ)"
        },
        {
          "label": "18:45",
          "score": 89,
          "metric": "Ratio: 0.05958 (Z: -1.47σ)"
        },
        {
          "label": "18:46",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:47",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:48",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:49",
          "score": 88,
          "metric": "Ratio: 0.05960 (Z: -1.46σ)"
        },
        {
          "label": "18:50",
          "score": 89,
          "metric": "Ratio: 0.05959 (Z: -1.46σ)"
        },
        {
          "label": "18:51",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:52",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:53",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "18:54",
          "score": 88,
          "metric": "Ratio: 0.05963 (Z: -1.45σ)"
        },
        {
          "label": "18:55",
          "score": 88,
          "metric": "Ratio: 0.05962 (Z: -1.45σ)"
        },
        {
          "label": "18:56",
          "score": 87,
          "metric": "Ratio: 0.05967 (Z: -1.44σ)"
        },
        {
          "label": "18:57",
          "score": 88,
          "metric": "Ratio: 0.05964 (Z: -1.45σ)"
        },
        {
          "label": "18:58",
          "score": 88,
          "metric": "Ratio: 0.05964 (Z: -1.45σ)"
        },
        {
          "label": "18:59",
          "score": 87,
          "metric": "Ratio: 0.05966 (Z: -1.44σ)"
        },
        {
          "label": "19:00",
          "score": 88,
          "metric": "Ratio: 0.05965 (Z: -1.45σ)"
        },
        {
          "label": "19:01",
          "score": 87,
          "metric": "Ratio: 0.05966 (Z: -1.44σ)"
        },
        {
          "label": "19:02",
          "score": 87,
          "metric": "Ratio: 0.05970 (Z: -1.43σ)"
        },
        {
          "label": "19:03",
          "score": 88,
          "metric": "Ratio: 0.05960 (Z: -1.46σ)"
        },
        {
          "label": "19:04",
          "score": 88,
          "metric": "Ratio: 0.05960 (Z: -1.45σ)"
        },
        {
          "label": "19:05",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:06",
          "score": 89,
          "metric": "Ratio: 0.05953 (Z: -1.47σ)"
        },
        {
          "label": "19:07",
          "score": 89,
          "metric": "Ratio: 0.05953 (Z: -1.47σ)"
        },
        {
          "label": "19:08",
          "score": 90,
          "metric": "Ratio: 0.05949 (Z: -1.48σ)"
        },
        {
          "label": "19:09",
          "score": 89,
          "metric": "Ratio: 0.05951 (Z: -1.47σ)"
        },
        {
          "label": "19:10",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:11",
          "score": 89,
          "metric": "Ratio: 0.05953 (Z: -1.47σ)"
        },
        {
          "label": "19:12",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:13",
          "score": 89,
          "metric": "Ratio: 0.05953 (Z: -1.47σ)"
        },
        {
          "label": "19:14",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:15",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:16",
          "score": 89,
          "metric": "Ratio: 0.05950 (Z: -1.47σ)"
        },
        {
          "label": "19:17",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:18",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:19",
          "score": 89,
          "metric": "Ratio: 0.05955 (Z: -1.46σ)"
        },
        {
          "label": "19:20",
          "score": 89,
          "metric": "Ratio: 0.05949 (Z: -1.47σ)"
        },
        {
          "label": "19:21",
          "score": 89,
          "metric": "Ratio: 0.05950 (Z: -1.47σ)"
        },
        {
          "label": "19:22",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.47σ)"
        },
        {
          "label": "19:23",
          "score": 88,
          "metric": "Ratio: 0.05955 (Z: -1.46σ)"
        },
        {
          "label": "19:24",
          "score": 89,
          "metric": "Ratio: 0.05949 (Z: -1.47σ)"
        },
        {
          "label": "19:25",
          "score": 89,
          "metric": "Ratio: 0.05948 (Z: -1.48σ)"
        },
        {
          "label": "19:26",
          "score": 89,
          "metric": "Ratio: 0.05950 (Z: -1.47σ)"
        },
        {
          "label": "19:27",
          "score": 89,
          "metric": "Ratio: 0.05949 (Z: -1.47σ)"
        },
        {
          "label": "19:28",
          "score": 89,
          "metric": "Ratio: 0.05952 (Z: -1.46σ)"
        },
        {
          "label": "19:29",
          "score": 88,
          "metric": "Ratio: 0.05954 (Z: -1.46σ)"
        },
        {
          "label": "19:30",
          "score": 89,
          "metric": "Ratio: 0.05954 (Z: -1.46σ)"
        },
        {
          "label": "19:31",
          "score": 88,
          "metric": "Ratio: 0.05956 (Z: -1.46σ)"
        },
        {
          "label": "19:32",
          "score": 88,
          "metric": "Ratio: 0.05958 (Z: -1.45σ)"
        },
        {
          "label": "19:33",
          "score": 87,
          "metric": "Ratio: 0.05968 (Z: -1.43σ)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 100,
          "metric": "Ratio: 0.05939 (Z: -2.25σ)"
        },
        {
          "label": "19:53",
          "score": 100,
          "metric": "Ratio: 0.05948 (Z: -2.21σ)"
        },
        {
          "label": "20:13",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -2.22σ)"
        },
        {
          "label": "20:33",
          "score": 100,
          "metric": "Ratio: 0.05924 (Z: -2.24σ)"
        },
        {
          "label": "20:53",
          "score": 100,
          "metric": "Ratio: 0.05925 (Z: -2.22σ)"
        },
        {
          "label": "21:13",
          "score": 100,
          "metric": "Ratio: 0.05909 (Z: -2.25σ)"
        },
        {
          "label": "21:33",
          "score": 100,
          "metric": "Ratio: 0.05868 (Z: -2.34σ)"
        },
        {
          "label": "21:53",
          "score": 100,
          "metric": "Ratio: 0.05865 (Z: -2.33σ)"
        },
        {
          "label": "22:13",
          "score": 100,
          "metric": "Ratio: 0.05850 (Z: -2.35σ)"
        },
        {
          "label": "22:33",
          "score": 100,
          "metric": "Ratio: 0.05870 (Z: -2.28σ)"
        },
        {
          "label": "22:53",
          "score": 100,
          "metric": "Ratio: 0.05861 (Z: -2.29σ)"
        },
        {
          "label": "23:13",
          "score": 100,
          "metric": "Ratio: 0.05863 (Z: -2.27σ)"
        },
        {
          "label": "23:33",
          "score": 100,
          "metric": "Ratio: 0.05867 (Z: -2.24σ)"
        },
        {
          "label": "23:53",
          "score": 100,
          "metric": "Ratio: 0.05873 (Z: -2.21σ)"
        },
        {
          "label": "00:13",
          "score": 100,
          "metric": "Ratio: 0.05904 (Z: -2.12σ)"
        },
        {
          "label": "00:33",
          "score": 100,
          "metric": "Ratio: 0.05894 (Z: -2.13σ)"
        },
        {
          "label": "00:53",
          "score": 100,
          "metric": "Ratio: 0.05904 (Z: -2.09σ)"
        },
        {
          "label": "01:13",
          "score": 100,
          "metric": "Ratio: 0.05885 (Z: -2.13σ)"
        },
        {
          "label": "01:33",
          "score": 100,
          "metric": "Ratio: 0.05881 (Z: -2.12σ)"
        },
        {
          "label": "01:53",
          "score": 100,
          "metric": "Ratio: 0.05904 (Z: -2.05σ)"
        },
        {
          "label": "02:13",
          "score": 100,
          "metric": "Ratio: 0.05888 (Z: -2.08σ)"
        },
        {
          "label": "02:33",
          "score": 100,
          "metric": "Ratio: 0.05874 (Z: -2.10σ)"
        },
        {
          "label": "02:53",
          "score": 100,
          "metric": "Ratio: 0.05863 (Z: -2.11σ)"
        },
        {
          "label": "03:13",
          "score": 100,
          "metric": "Ratio: 0.05866 (Z: -2.09σ)"
        },
        {
          "label": "03:33",
          "score": 100,
          "metric": "Ratio: 0.05851 (Z: -2.11σ)"
        },
        {
          "label": "03:53",
          "score": 100,
          "metric": "Ratio: 0.05854 (Z: -2.09σ)"
        },
        {
          "label": "04:13",
          "score": 100,
          "metric": "Ratio: 0.05869 (Z: -2.04σ)"
        },
        {
          "label": "04:33",
          "score": 100,
          "metric": "Ratio: 0.05853 (Z: -2.07σ)"
        },
        {
          "label": "04:53",
          "score": 100,
          "metric": "Ratio: 0.05858 (Z: -2.04σ)"
        },
        {
          "label": "05:13",
          "score": 100,
          "metric": "Ratio: 0.05938 (Z: -1.84σ)"
        },
        {
          "label": "05:33",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -1.83σ)"
        },
        {
          "label": "05:53",
          "score": 100,
          "metric": "Ratio: 0.05937 (Z: -1.83σ)"
        },
        {
          "label": "06:13",
          "score": 100,
          "metric": "Ratio: 0.05944 (Z: -1.80σ)"
        },
        {
          "label": "06:33",
          "score": 100,
          "metric": "Ratio: 0.05952 (Z: -1.77σ)"
        },
        {
          "label": "06:53",
          "score": 100,
          "metric": "Ratio: 0.05928 (Z: -1.82σ)"
        },
        {
          "label": "07:13",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -1.78σ)"
        },
        {
          "label": "07:33",
          "score": 100,
          "metric": "Ratio: 0.05927 (Z: -1.80σ)"
        },
        {
          "label": "07:53",
          "score": 100,
          "metric": "Ratio: 0.05938 (Z: -1.76σ)"
        },
        {
          "label": "08:13",
          "score": 100,
          "metric": "Ratio: 0.05934 (Z: -1.76σ)"
        },
        {
          "label": "08:33",
          "score": 100,
          "metric": "Ratio: 0.05953 (Z: -1.71σ)"
        },
        {
          "label": "08:53",
          "score": 100,
          "metric": "Ratio: 0.05946 (Z: -1.72σ)"
        },
        {
          "label": "09:13",
          "score": 100,
          "metric": "Ratio: 0.05935 (Z: -1.74σ)"
        },
        {
          "label": "09:33",
          "score": 100,
          "metric": "Ratio: 0.05942 (Z: -1.71σ)"
        },
        {
          "label": "09:53",
          "score": 100,
          "metric": "Ratio: 0.05959 (Z: -1.66σ)"
        },
        {
          "label": "10:13",
          "score": 97,
          "metric": "Ratio: 0.05979 (Z: -1.61σ)"
        },
        {
          "label": "10:33",
          "score": 99,
          "metric": "Ratio: 0.05965 (Z: -1.63σ)"
        },
        {
          "label": "10:53",
          "score": 100,
          "metric": "Ratio: 0.05956 (Z: -1.64σ)"
        },
        {
          "label": "11:13",
          "score": 98,
          "metric": "Ratio: 0.05965 (Z: -1.62σ)"
        },
        {
          "label": "11:33",
          "score": 99,
          "metric": "Ratio: 0.05956 (Z: -1.63σ)"
        },
        {
          "label": "11:53",
          "score": 99,
          "metric": "Ratio: 0.05951 (Z: -1.63σ)"
        },
        {
          "label": "12:13",
          "score": 99,
          "metric": "Ratio: 0.05943 (Z: -1.64σ)"
        },
        {
          "label": "12:33",
          "score": 99,
          "metric": "Ratio: 0.05942 (Z: -1.64σ)"
        },
        {
          "label": "12:53",
          "score": 99,
          "metric": "Ratio: 0.05939 (Z: -1.64σ)"
        },
        {
          "label": "13:13",
          "score": 98,
          "metric": "Ratio: 0.05943 (Z: -1.62σ)"
        },
        {
          "label": "13:33",
          "score": 97,
          "metric": "Ratio: 0.05948 (Z: -1.60σ)"
        },
        {
          "label": "13:53",
          "score": 98,
          "metric": "Ratio: 0.05935 (Z: -1.62σ)"
        },
        {
          "label": "14:13",
          "score": 95,
          "metric": "Ratio: 0.05953 (Z: -1.57σ)"
        },
        {
          "label": "14:33",
          "score": 95,
          "metric": "Ratio: 0.05951 (Z: -1.57σ)"
        },
        {
          "label": "14:53",
          "score": 94,
          "metric": "Ratio: 0.05959 (Z: -1.55σ)"
        },
        {
          "label": "15:13",
          "score": 93,
          "metric": "Ratio: 0.05961 (Z: -1.53σ)"
        },
        {
          "label": "15:33",
          "score": 94,
          "metric": "Ratio: 0.05952 (Z: -1.55σ)"
        },
        {
          "label": "15:53",
          "score": 92,
          "metric": "Ratio: 0.05961 (Z: -1.52σ)"
        },
        {
          "label": "16:13",
          "score": 93,
          "metric": "Ratio: 0.05954 (Z: -1.53σ)"
        },
        {
          "label": "16:33",
          "score": 94,
          "metric": "Ratio: 0.05943 (Z: -1.54σ)"
        },
        {
          "label": "16:53",
          "score": 94,
          "metric": "Ratio: 0.05936 (Z: -1.55σ)"
        },
        {
          "label": "17:13",
          "score": 93,
          "metric": "Ratio: 0.05940 (Z: -1.54σ)"
        },
        {
          "label": "17:33",
          "score": 92,
          "metric": "Ratio: 0.05947 (Z: -1.52σ)"
        },
        {
          "label": "17:53",
          "score": 92,
          "metric": "Ratio: 0.05939 (Z: -1.52σ)"
        },
        {
          "label": "18:13",
          "score": 92,
          "metric": "Ratio: 0.05942 (Z: -1.51σ)"
        },
        {
          "label": "18:33",
          "score": 91,
          "metric": "Ratio: 0.05940 (Z: -1.51σ)"
        },
        {
          "label": "18:53",
          "score": 88,
          "metric": "Ratio: 0.05961 (Z: -1.46σ)"
        },
        {
          "label": "19:13",
          "score": 89,
          "metric": "Ratio: 0.05953 (Z: -1.47σ)"
        },
        {
          "label": "19:33",
          "score": 87,
          "metric": "Ratio: 0.05968 (Z: -1.43σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 70,
          "metric": "Ratio: 0.07074 (Z: +1.16σ)"
        },
        {
          "label": "15/08 21:00",
          "score": 65,
          "metric": "Ratio: 0.07069 (Z: +1.07σ)"
        },
        {
          "label": "15/08 23:00",
          "score": 66,
          "metric": "Ratio: 0.07072 (Z: +1.09σ)"
        },
        {
          "label": "16/08 01:00",
          "score": 68,
          "metric": "Ratio: 0.07076 (Z: +1.12σ)"
        },
        {
          "label": "16/08 03:00",
          "score": 64,
          "metric": "Ratio: 0.07073 (Z: +1.05σ)"
        },
        {
          "label": "16/08 05:00",
          "score": 65,
          "metric": "Ratio: 0.07077 (Z: +1.07σ)"
        },
        {
          "label": "16/08 07:00",
          "score": 65,
          "metric": "Ratio: 0.07078 (Z: +1.07σ)"
        },
        {
          "label": "16/08 09:00",
          "score": 63,
          "metric": "Ratio: 0.07077 (Z: +1.03σ)"
        },
        {
          "label": "16/08 11:00",
          "score": 66,
          "metric": "Ratio: 0.07084 (Z: +1.10σ)"
        },
        {
          "label": "16/08 13:00",
          "score": 59,
          "metric": "Ratio: 0.07076 (Z: +0.97σ)"
        },
        {
          "label": "16/08 15:00",
          "score": 52,
          "metric": "Ratio: 0.07069 (Z: +0.85σ)"
        },
        {
          "label": "16/08 17:00",
          "score": 51,
          "metric": "Ratio: 0.07069 (Z: +0.84σ)"
        },
        {
          "label": "16/08 19:00",
          "score": 44,
          "metric": "Ratio: 0.07062 (Z: +0.73σ)"
        },
        {
          "label": "16/08 21:00",
          "score": 56,
          "metric": "Ratio: 0.07077 (Z: +0.93σ)"
        },
        {
          "label": "16/08 23:00",
          "score": 71,
          "metric": "Ratio: 0.07093 (Z: +1.16σ)"
        },
        {
          "label": "17/08 01:00",
          "score": 40,
          "metric": "Ratio: 0.07062 (Z: +0.66σ)"
        },
        {
          "label": "17/08 03:00",
          "score": 29,
          "metric": "Ratio: 0.07051 (Z: +0.47σ)"
        },
        {
          "label": "17/08 05:00",
          "score": 14,
          "metric": "Ratio: 0.07038 (Z: +0.24σ)"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "Ratio: 0.07028 (Z: +0.04σ)"
        },
        {
          "label": "17/08 09:00",
          "score": 25,
          "metric": "Ratio: 0.07050 (Z: +0.41σ)"
        },
        {
          "label": "17/08 11:00",
          "score": 16,
          "metric": "Ratio: 0.07016 (Z: -0.27σ)"
        },
        {
          "label": "17/08 13:00",
          "score": 30,
          "metric": "Ratio: 0.07008 (Z: -0.50σ)"
        },
        {
          "label": "17/08 15:00",
          "score": 78,
          "metric": "Ratio: 0.06975 (Z: -1.29σ)"
        },
        {
          "label": "17/08 17:00",
          "score": 83,
          "metric": "Ratio: 0.06972 (Z: -1.36σ)"
        },
        {
          "label": "17/08 19:00",
          "score": 100,
          "metric": "Ratio: 0.06949 (Z: -1.85σ)"
        },
        {
          "label": "17/08 21:00",
          "score": 100,
          "metric": "Ratio: 0.06954 (Z: -1.74σ)"
        },
        {
          "label": "17/08 23:00",
          "score": 100,
          "metric": "Ratio: 0.06938 (Z: -2.07σ)"
        },
        {
          "label": "18/08 01:00",
          "score": 100,
          "metric": "Ratio: 0.06954 (Z: -1.69σ)"
        },
        {
          "label": "18/08 03:00",
          "score": 78,
          "metric": "Ratio: 0.06973 (Z: -1.29σ)"
        },
        {
          "label": "18/08 05:00",
          "score": 86,
          "metric": "Ratio: 0.06967 (Z: -1.42σ)"
        },
        {
          "label": "18/08 07:00",
          "score": 94,
          "metric": "Ratio: 0.06961 (Z: -1.55σ)"
        },
        {
          "label": "18/08 09:00",
          "score": 85,
          "metric": "Ratio: 0.06968 (Z: -1.40σ)"
        },
        {
          "label": "18/08 11:00",
          "score": 100,
          "metric": "Ratio: 0.06949 (Z: -1.84σ)"
        },
        {
          "label": "18/08 13:00",
          "score": 83,
          "metric": "Ratio: 0.06972 (Z: -1.36σ)"
        },
        {
          "label": "18/08 15:00",
          "score": 100,
          "metric": "Ratio: 0.06911 (Z: -2.65σ)"
        },
        {
          "label": "18/08 17:00",
          "score": 100,
          "metric": "Ratio: 0.06916 (Z: -2.44σ)"
        },
        {
          "label": "18/08 19:00",
          "score": 100,
          "metric": "Ratio: 0.06919 (Z: -2.26σ)"
        },
        {
          "label": "18/08 21:00",
          "score": 100,
          "metric": "Ratio: 0.06931 (Z: -1.95σ)"
        },
        {
          "label": "18/08 23:00",
          "score": 100,
          "metric": "Ratio: 0.06918 (Z: -2.14σ)"
        },
        {
          "label": "19/08 01:00",
          "score": 97,
          "metric": "Ratio: 0.06944 (Z: -1.59σ)"
        },
        {
          "label": "19/08 03:00",
          "score": 81,
          "metric": "Ratio: 0.06956 (Z: -1.34σ)"
        },
        {
          "label": "19/08 05:00",
          "score": 80,
          "metric": "Ratio: 0.06956 (Z: -1.33σ)"
        },
        {
          "label": "19/08 07:00",
          "score": 85,
          "metric": "Ratio: 0.06951 (Z: -1.40σ)"
        },
        {
          "label": "19/08 09:00",
          "score": 84,
          "metric": "Ratio: 0.06950 (Z: -1.38σ)"
        },
        {
          "label": "19/08 11:00",
          "score": 97,
          "metric": "Ratio: 0.06938 (Z: -1.60σ)"
        },
        {
          "label": "19/08 13:00",
          "score": 100,
          "metric": "Ratio: 0.06897 (Z: -2.30σ)"
        },
        {
          "label": "19/08 15:00",
          "score": 100,
          "metric": "Ratio: 0.06588 (Z: -7.12σ)"
        },
        {
          "label": "19/08 17:00",
          "score": 100,
          "metric": "Ratio: 0.06625 (Z: -5.08σ)"
        },
        {
          "label": "19/08 19:00",
          "score": 100,
          "metric": "Ratio: 0.06607 (Z: -4.54σ)"
        },
        {
          "label": "19/08 21:00",
          "score": 100,
          "metric": "Ratio: 0.06502 (Z: -4.93σ)"
        },
        {
          "label": "19/08 23:00",
          "score": 100,
          "metric": "Ratio: 0.06523 (Z: -4.14σ)"
        },
        {
          "label": "20/08 01:00",
          "score": 100,
          "metric": "Ratio: 0.06501 (Z: -3.88σ)"
        },
        {
          "label": "20/08 03:00",
          "score": 100,
          "metric": "Ratio: 0.06540 (Z: -3.26σ)"
        },
        {
          "label": "20/08 05:00",
          "score": 100,
          "metric": "Ratio: 0.06501 (Z: -3.28σ)"
        },
        {
          "label": "20/08 07:00",
          "score": 100,
          "metric": "Ratio: 0.06500 (Z: -3.06σ)"
        },
        {
          "label": "20/08 09:00",
          "score": 100,
          "metric": "Ratio: 0.06314 (Z: -3.88σ)"
        },
        {
          "label": "20/08 11:00",
          "score": 100,
          "metric": "Ratio: 0.06295 (Z: -3.64σ)"
        },
        {
          "label": "20/08 13:00",
          "score": 100,
          "metric": "Ratio: 0.06375 (Z: -2.95σ)"
        },
        {
          "label": "20/08 15:00",
          "score": 100,
          "metric": "Ratio: 0.06294 (Z: -3.14σ)"
        },
        {
          "label": "20/08 17:00",
          "score": 100,
          "metric": "Ratio: 0.06260 (Z: -3.08σ)"
        },
        {
          "label": "20/08 19:00",
          "score": 100,
          "metric": "Ratio: 0.06265 (Z: -2.87σ)"
        },
        {
          "label": "20/08 21:00",
          "score": 100,
          "metric": "Ratio: 0.06257 (Z: -2.74σ)"
        },
        {
          "label": "20/08 23:00",
          "score": 100,
          "metric": "Ratio: 0.06233 (Z: -2.69σ)"
        },
        {
          "label": "21/08 01:00",
          "score": 100,
          "metric": "Ratio: 0.06123 (Z: -2.96σ)"
        },
        {
          "label": "21/08 03:00",
          "score": 100,
          "metric": "Ratio: 0.06138 (Z: -2.72σ)"
        },
        {
          "label": "21/08 05:00",
          "score": 100,
          "metric": "Ratio: 0.06081 (Z: -2.76σ)"
        },
        {
          "label": "21/08 07:00",
          "score": 100,
          "metric": "Ratio: 0.06008 (Z: -2.85σ)"
        },
        {
          "label": "21/08 09:00",
          "score": 100,
          "metric": "Ratio: 0.05900 (Z: -3.01σ)"
        },
        {
          "label": "21/08 11:00",
          "score": 100,
          "metric": "Ratio: 0.05968 (Z: -2.63σ)"
        },
        {
          "label": "21/08 13:00",
          "score": 100,
          "metric": "Ratio: 0.05989 (Z: -2.44σ)"
        },
        {
          "label": "21/08 15:00",
          "score": 100,
          "metric": "Ratio: 0.05924 (Z: -2.50σ)"
        },
        {
          "label": "21/08 17:00",
          "score": 100,
          "metric": "Ratio: 0.05921 (Z: -2.39σ)"
        },
        {
          "label": "21/08 19:00",
          "score": 100,
          "metric": "Ratio: 0.05942 (Z: -2.24σ)"
        },
        {
          "label": "21/08 21:00",
          "score": 100,
          "metric": "Ratio: 0.05882 (Z: -2.30σ)"
        },
        {
          "label": "21/08 23:00",
          "score": 100,
          "metric": "Ratio: 0.05874 (Z: -2.22σ)"
        },
        {
          "label": "22/08 01:00",
          "score": 100,
          "metric": "Ratio: 0.05890 (Z: -2.10σ)"
        },
        {
          "label": "22/08 03:00",
          "score": 100,
          "metric": "Ratio: 0.05849 (Z: -2.12σ)"
        },
        {
          "label": "22/08 05:00",
          "score": 100,
          "metric": "Ratio: 0.05945 (Z: -1.81σ)"
        },
        {
          "label": "22/08 07:00",
          "score": 100,
          "metric": "Ratio: 0.05929 (Z: -1.79σ)"
        },
        {
          "label": "22/08 09:00",
          "score": 100,
          "metric": "Ratio: 0.05945 (Z: -1.70σ)"
        },
        {
          "label": "22/08 11:00",
          "score": 100,
          "metric": "Ratio: 0.05948 (Z: -1.65σ)"
        },
        {
          "label": "22/08 13:00",
          "score": 97,
          "metric": "Ratio: 0.05949 (Z: -1.59σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 93,
          "metric": "Ratio: 0.05954 (Z: -1.54σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 92,
          "metric": "Ratio: 0.05947 (Z: -1.51σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 87,
          "metric": "Ratio: 0.05968 (Z: -1.43σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "Ratio: 0.06878 (Z: -0.04σ)"
        },
        {
          "label": "24/07",
          "score": 23,
          "metric": "Ratio: 0.06843 (Z: -0.38σ)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Ratio: 0.06870 (Z: +0.04σ)"
        },
        {
          "label": "24/07",
          "score": 60,
          "metric": "Ratio: 0.06937 (Z: +0.99σ)"
        },
        {
          "label": "25/07",
          "score": 75,
          "metric": "Ratio: 0.06953 (Z: +1.23σ)"
        },
        {
          "label": "25/07",
          "score": 75,
          "metric": "Ratio: 0.06952 (Z: +1.25σ)"
        },
        {
          "label": "25/07",
          "score": 54,
          "metric": "Ratio: 0.06925 (Z: +0.89σ)"
        },
        {
          "label": "26/07",
          "score": 39,
          "metric": "Ratio: 0.06908 (Z: +0.64σ)"
        },
        {
          "label": "26/07",
          "score": 44,
          "metric": "Ratio: 0.06916 (Z: +0.73σ)"
        },
        {
          "label": "26/07",
          "score": 27,
          "metric": "Ratio: 0.06893 (Z: +0.44σ)"
        },
        {
          "label": "27/07",
          "score": 15,
          "metric": "Ratio: 0.06841 (Z: -0.24σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Ratio: 0.06850 (Z: -0.06σ)"
        },
        {
          "label": "27/07",
          "score": 18,
          "metric": "Ratio: 0.06874 (Z: +0.29σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "Ratio: 0.07026 (Z: +2.24σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "Ratio: 0.07018 (Z: +1.86σ)"
        },
        {
          "label": "28/07",
          "score": 80,
          "metric": "Ratio: 0.06987 (Z: +1.33σ)"
        },
        {
          "label": "29/07",
          "score": 78,
          "metric": "Ratio: 0.06989 (Z: +1.28σ)"
        },
        {
          "label": "29/07",
          "score": 23,
          "metric": "Ratio: 0.06929 (Z: +0.38σ)"
        },
        {
          "label": "29/07",
          "score": 57,
          "metric": "Ratio: 0.06971 (Z: +0.93σ)"
        },
        {
          "label": "30/07",
          "score": 31,
          "metric": "Ratio: 0.06950 (Z: +0.51σ)"
        },
        {
          "label": "30/07",
          "score": 23,
          "metric": "Ratio: 0.06905 (Z: -0.39σ)"
        },
        {
          "label": "30/07",
          "score": 54,
          "metric": "Ratio: 0.06878 (Z: -0.89σ)"
        },
        {
          "label": "31/07",
          "score": 7,
          "metric": "Ratio: 0.06922 (Z: -0.11σ)"
        },
        {
          "label": "31/07",
          "score": 50,
          "metric": "Ratio: 0.06974 (Z: +0.82σ)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "Ratio: 0.07050 (Z: +2.04σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "Ratio: 0.07055 (Z: +1.86σ)"
        },
        {
          "label": "01/08",
          "score": 94,
          "metric": "Ratio: 0.07047 (Z: +1.55σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "Ratio: 0.07103 (Z: +2.18σ)"
        },
        {
          "label": "02/08",
          "score": 40,
          "metric": "Ratio: 0.07008 (Z: +0.67σ)"
        },
        {
          "label": "02/08",
          "score": 62,
          "metric": "Ratio: 0.07039 (Z: +1.02σ)"
        },
        {
          "label": "02/08",
          "score": 36,
          "metric": "Ratio: 0.07015 (Z: +0.60σ)"
        },
        {
          "label": "03/08",
          "score": 72,
          "metric": "Ratio: 0.07061 (Z: +1.19σ)"
        },
        {
          "label": "03/08",
          "score": 87,
          "metric": "Ratio: 0.07083 (Z: +1.43σ)"
        },
        {
          "label": "03/08",
          "score": 30,
          "metric": "Ratio: 0.06966 (Z: -0.50σ)"
        },
        {
          "label": "04/08",
          "score": 22,
          "metric": "Ratio: 0.06976 (Z: -0.37σ)"
        },
        {
          "label": "04/08",
          "score": 32,
          "metric": "Ratio: 0.06965 (Z: -0.53σ)"
        },
        {
          "label": "04/08",
          "score": 57,
          "metric": "Ratio: 0.06939 (Z: -0.94σ)"
        },
        {
          "label": "05/08",
          "score": 40,
          "metric": "Ratio: 0.06953 (Z: -0.67σ)"
        },
        {
          "label": "05/08",
          "score": 37,
          "metric": "Ratio: 0.06957 (Z: -0.61σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "Ratio: 0.06884 (Z: -1.78σ)"
        },
        {
          "label": "06/08",
          "score": 65,
          "metric": "Ratio: 0.06921 (Z: -1.07σ)"
        },
        {
          "label": "06/08",
          "score": 67,
          "metric": "Ratio: 0.06914 (Z: -1.11σ)"
        },
        {
          "label": "06/08",
          "score": 66,
          "metric": "Ratio: 0.06918 (Z: -1.09σ)"
        },
        {
          "label": "07/08",
          "score": 53,
          "metric": "Ratio: 0.06936 (Z: -0.88σ)"
        },
        {
          "label": "07/08",
          "score": 100,
          "metric": "Ratio: 0.06870 (Z: -1.89σ)"
        },
        {
          "label": "07/08",
          "score": 100,
          "metric": "Ratio: 0.06872 (Z: -1.65σ)"
        },
        {
          "label": "08/08",
          "score": 94,
          "metric": "Ratio: 0.06868 (Z: -1.56σ)"
        },
        {
          "label": "08/08",
          "score": 82,
          "metric": "Ratio: 0.06872 (Z: -1.35σ)"
        },
        {
          "label": "08/08",
          "score": 84,
          "metric": "Ratio: 0.06861 (Z: -1.38σ)"
        },
        {
          "label": "09/08",
          "score": 53,
          "metric": "Ratio: 0.06889 (Z: -0.87σ)"
        },
        {
          "label": "09/08",
          "score": 62,
          "metric": "Ratio: 0.06874 (Z: -1.02σ)"
        },
        {
          "label": "09/08",
          "score": 75,
          "metric": "Ratio: 0.06854 (Z: -1.24σ)"
        },
        {
          "label": "10/08",
          "score": 50,
          "metric": "Ratio: 0.06873 (Z: -0.83σ)"
        },
        {
          "label": "10/08",
          "score": 68,
          "metric": "Ratio: 0.06857 (Z: -1.12σ)"
        },
        {
          "label": "10/08",
          "score": 75,
          "metric": "Ratio: 0.06961 (Z: +1.23σ)"
        },
        {
          "label": "11/08",
          "score": 69,
          "metric": "Ratio: 0.06953 (Z: +1.13σ)"
        },
        {
          "label": "11/08",
          "score": 37,
          "metric": "Ratio: 0.06928 (Z: +0.61σ)"
        },
        {
          "label": "11/08",
          "score": 100,
          "metric": "Ratio: 0.07011 (Z: +2.50σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "Ratio: 0.06992 (Z: +1.81σ)"
        },
        {
          "label": "12/08",
          "score": 55,
          "metric": "Ratio: 0.06954 (Z: +0.91σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "Ratio: 0.07026 (Z: +2.12σ)"
        },
        {
          "label": "13/08",
          "score": 97,
          "metric": "Ratio: 0.07012 (Z: +1.60σ)"
        },
        {
          "label": "13/08",
          "score": 100,
          "metric": "Ratio: 0.07030 (Z: +1.75σ)"
        },
        {
          "label": "13/08",
          "score": 100,
          "metric": "Ratio: 0.07040 (Z: +1.71σ)"
        },
        {
          "label": "14/08",
          "score": 94,
          "metric": "Ratio: 0.07039 (Z: +1.54σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "Ratio: 0.07083 (Z: +1.93σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "Ratio: 0.07081 (Z: +1.66σ)"
        },
        {
          "label": "15/08",
          "score": 84,
          "metric": "Ratio: 0.07073 (Z: +1.38σ)"
        },
        {
          "label": "15/08",
          "score": 81,
          "metric": "Ratio: 0.07080 (Z: +1.34σ)"
        },
        {
          "label": "15/08",
          "score": 69,
          "metric": "Ratio: 0.07073 (Z: +1.14σ)"
        },
        {
          "label": "16/08",
          "score": 62,
          "metric": "Ratio: 0.07072 (Z: +1.03σ)"
        },
        {
          "label": "16/08",
          "score": 63,
          "metric": "Ratio: 0.07080 (Z: +1.04σ)"
        },
        {
          "label": "16/08",
          "score": 51,
          "metric": "Ratio: 0.07070 (Z: +0.85σ)"
        },
        {
          "label": "17/08",
          "score": 15,
          "metric": "Ratio: 0.07037 (Z: +0.24σ)"
        },
        {
          "label": "17/08",
          "score": 10,
          "metric": "Ratio: 0.07022 (Z: -0.16σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "Ratio: 0.06954 (Z: -1.73σ)"
        },
        {
          "label": "18/08",
          "score": 80,
          "metric": "Ratio: 0.06972 (Z: -1.32σ)"
        },
        {
          "label": "18/08",
          "score": 100,
          "metric": "Ratio: 0.06958 (Z: -1.66σ)"
        },
        {
          "label": "18/08",
          "score": 100,
          "metric": "Ratio: 0.06927 (Z: -2.09σ)"
        },
        {
          "label": "19/08",
          "score": 78,
          "metric": "Ratio: 0.06959 (Z: -1.29σ)"
        },
        {
          "label": "19/08",
          "score": 98,
          "metric": "Ratio: 0.06937 (Z: -1.61σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "Ratio: 0.06578 (Z: -4.68σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06518 (Z: -3.35σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06334 (Z: -3.34σ)"
        },
        {
          "label": "20/08",
          "score": 100,
          "metric": "Ratio: 0.06259 (Z: -2.85σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.06113 (Z: -2.77σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.05980 (Z: -2.56σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "Ratio: 0.05940 (Z: -2.22σ)"
        },
        {
          "label": "22/08",
          "score": 100,
          "metric": "Ratio: 0.05871 (Z: -2.04σ)"
        },
        {
          "label": "22/08",
          "score": 100,
          "metric": "Ratio: 0.05942 (Z: -1.65σ)"
        },
        {
          "label": "22/08",
          "score": 87,
          "metric": "Ratio: 0.05968 (Z: -1.43σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 42,
          "metric": "Ratio: 0.04218 (Z: -0.69σ)"
        },
        {
          "label": "26/08/25",
          "score": 78,
          "metric": "Ratio: 0.04403 (Z: +1.29σ)"
        },
        {
          "label": "30/08/25",
          "score": 80,
          "metric": "Ratio: 0.04477 (Z: +1.32σ)"
        },
        {
          "label": "03/09/25",
          "score": 73,
          "metric": "Ratio: 0.04369 (Z: -1.21σ)"
        },
        {
          "label": "07/09/25",
          "score": 37,
          "metric": "Ratio: 0.04395 (Z: -0.61σ)"
        },
        {
          "label": "11/09/25",
          "score": 100,
          "metric": "Ratio: 0.04285 (Z: -2.04σ)"
        },
        {
          "label": "15/09/25",
          "score": 45,
          "metric": "Ratio: 0.04245 (Z: -0.75σ)"
        },
        {
          "label": "19/09/25",
          "score": 51,
          "metric": "Ratio: 0.04246 (Z: +0.84σ)"
        },
        {
          "label": "23/09/25",
          "score": 100,
          "metric": "Ratio: 0.04356 (Z: +2.06σ)"
        },
        {
          "label": "27/09/25",
          "score": 81,
          "metric": "Ratio: 0.04449 (Z: +1.33σ)"
        },
        {
          "label": "01/10/25",
          "score": 100,
          "metric": "Ratio: 0.04184 (Z: -2.27σ)"
        },
        {
          "label": "05/10/25",
          "score": 71,
          "metric": "Ratio: 0.04024 (Z: -1.18σ)"
        },
        {
          "label": "09/10/25",
          "score": 77,
          "metric": "Ratio: 0.04085 (Z: +1.27σ)"
        },
        {
          "label": "13/10/25",
          "score": 30,
          "metric": "Ratio: 0.04258 (Z: +0.49σ)"
        },
        {
          "label": "17/10/25",
          "score": 100,
          "metric": "Ratio: 0.04533 (Z: +1.68σ)"
        },
        {
          "label": "21/10/25",
          "score": 50,
          "metric": "Ratio: 0.04402 (Z: -0.83σ)"
        },
        {
          "label": "25/10/25",
          "score": 69,
          "metric": "Ratio: 0.04382 (Z: -1.14σ)"
        },
        {
          "label": "29/10/25",
          "score": 16,
          "metric": "Ratio: 0.04374 (Z: +0.27σ)"
        },
        {
          "label": "02/11/25",
          "score": 41,
          "metric": "Ratio: 0.04427 (Z: +0.67σ)"
        },
        {
          "label": "06/11/25",
          "score": 100,
          "metric": "Ratio: 0.04772 (Z: +1.80σ)"
        },
        {
          "label": "10/11/25",
          "score": 89,
          "metric": "Ratio: 0.04575 (Z: -1.47σ)"
        },
        {
          "label": "03/12/25",
          "score": 35,
          "metric": "Ratio: 0.05124 (Z: +0.58σ)"
        },
        {
          "label": "07/12/25",
          "score": 24,
          "metric": "Ratio: 0.05297 (Z: +0.39σ)"
        },
        {
          "label": "18/01/26",
          "score": 80,
          "metric": "Ratio: 0.05011 (Z: -1.32σ)"
        },
        {
          "label": "22/01/26",
          "score": 63,
          "metric": "Ratio: 0.05269 (Z: +1.03σ)"
        },
        {
          "label": "28/01/26",
          "score": 8,
          "metric": "Ratio: 0.05276 (Z: +0.14σ)"
        },
        {
          "label": "01/02/26",
          "score": 100,
          "metric": "Ratio: 0.05931 (Z: +2.25σ)"
        },
        {
          "label": "06/02/26",
          "score": 100,
          "metric": "Ratio: 0.06911 (Z: +2.34σ)"
        },
        {
          "label": "10/02/26",
          "score": 35,
          "metric": "Ratio: 0.06578 (Z: +0.59σ)"
        },
        {
          "label": "16/02/26",
          "score": 23,
          "metric": "Ratio: 0.06625 (Z: +0.39σ)"
        },
        {
          "label": "21/02/26",
          "score": 30,
          "metric": "Ratio: 0.06624 (Z: -0.49σ)"
        },
        {
          "label": "25/02/26",
          "score": 42,
          "metric": "Ratio: 0.06845 (Z: +0.70σ)"
        },
        {
          "label": "02/03/26",
          "score": 29,
          "metric": "Ratio: 0.06859 (Z: +0.48σ)"
        },
        {
          "label": "07/03/26",
          "score": 11,
          "metric": "Ratio: 0.06653 (Z: +0.18σ)"
        },
        {
          "label": "11/03/26",
          "score": 49,
          "metric": "Ratio: 0.06403 (Z: -0.81σ)"
        },
        {
          "label": "16/03/26",
          "score": 100,
          "metric": "Ratio: 0.06200 (Z: -2.05σ)"
        },
        {
          "label": "20/03/26",
          "score": 86,
          "metric": "Ratio: 0.06510 (Z: +1.42σ)"
        },
        {
          "label": "25/03/26",
          "score": 25,
          "metric": "Ratio: 0.06382 (Z: -0.41σ)"
        },
        {
          "label": "30/03/26",
          "score": 49,
          "metric": "Ratio: 0.06693 (Z: +0.81σ)"
        },
        {
          "label": "03/04/26",
          "score": 22,
          "metric": "Ratio: 0.06724 (Z: +0.36σ)"
        },
        {
          "label": "08/04/26",
          "score": 100,
          "metric": "Ratio: 0.06341 (Z: -3.15σ)"
        },
        {
          "label": "12/04/26",
          "score": 38,
          "metric": "Ratio: 0.06306 (Z: -0.62σ)"
        },
        {
          "label": "16/04/26",
          "score": 55,
          "metric": "Ratio: 0.06124 (Z: -0.91σ)"
        },
        {
          "label": "20/04/26",
          "score": 54,
          "metric": "Ratio: 0.05983 (Z: -0.89σ)"
        },
        {
          "label": "24/04/26",
          "score": 33,
          "metric": "Ratio: 0.05902 (Z: -0.55σ)"
        },
        {
          "label": "29/04/26",
          "score": 19,
          "metric": "Ratio: 0.05904 (Z: +0.31σ)"
        },
        {
          "label": "03/05/26",
          "score": 79,
          "metric": "Ratio: 0.05816 (Z: -1.31σ)"
        },
        {
          "label": "07/05/26",
          "score": 17,
          "metric": "Ratio: 0.05737 (Z: -0.27σ)"
        },
        {
          "label": "13/05/26",
          "score": 100,
          "metric": "Ratio: 0.05760 (Z: +1.92σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "Ratio: 0.05931 (Z: +2.17σ)"
        },
        {
          "label": "22/05/26",
          "score": 11,
          "metric": "Ratio: 0.05889 (Z: +0.19σ)"
        },
        {
          "label": "26/05/26",
          "score": 17,
          "metric": "Ratio: 0.05955 (Z: +0.29σ)"
        },
        {
          "label": "30/05/26",
          "score": 52,
          "metric": "Ratio: 0.06140 (Z: +0.86σ)"
        },
        {
          "label": "04/06/26",
          "score": 100,
          "metric": "Ratio: 0.07076 (Z: +3.40σ)"
        },
        {
          "label": "08/06/26",
          "score": 34,
          "metric": "Ratio: 0.07084 (Z: +0.57σ)"
        },
        {
          "label": "12/06/26",
          "score": 81,
          "metric": "Ratio: 0.07023 (Z: -1.33σ)"
        },
        {
          "label": "16/06/26",
          "score": 100,
          "metric": "Ratio: 0.06743 (Z: -1.77σ)"
        },
        {
          "label": "20/06/26",
          "score": 57,
          "metric": "Ratio: 0.07015 (Z: +0.95σ)"
        },
        {
          "label": "24/06/26",
          "score": 62,
          "metric": "Ratio: 0.07077 (Z: +1.02σ)"
        },
        {
          "label": "28/06/26",
          "score": 56,
          "metric": "Ratio: 0.07357 (Z: +0.92σ)"
        },
        {
          "label": "02/07/26",
          "score": 21,
          "metric": "Ratio: 0.07371 (Z: -0.34σ)"
        },
        {
          "label": "06/07/26",
          "score": 92,
          "metric": "Ratio: 0.07044 (Z: -1.51σ)"
        },
        {
          "label": "10/07/26",
          "score": 100,
          "metric": "Ratio: 0.06982 (Z: -1.89σ)"
        },
        {
          "label": "14/07/26",
          "score": 71,
          "metric": "Ratio: 0.07127 (Z: +1.17σ)"
        },
        {
          "label": "18/07/26",
          "score": 7,
          "metric": "Ratio: 0.06970 (Z: -0.11σ)"
        },
        {
          "label": "22/07/26",
          "score": 100,
          "metric": "Ratio: 0.06753 (Z: -1.91σ)"
        },
        {
          "label": "26/07/26",
          "score": 49,
          "metric": "Ratio: 0.06921 (Z: +0.81σ)"
        },
        {
          "label": "30/07/26",
          "score": 22,
          "metric": "Ratio: 0.06940 (Z: +0.36σ)"
        },
        {
          "label": "03/08/26",
          "score": 54,
          "metric": "Ratio: 0.07039 (Z: +0.89σ)"
        },
        {
          "label": "07/08/26",
          "score": 60,
          "metric": "Ratio: 0.06929 (Z: -0.99σ)"
        },
        {
          "label": "11/08/26",
          "score": 77,
          "metric": "Ratio: 0.06959 (Z: +1.27σ)"
        },
        {
          "label": "15/08/26",
          "score": 80,
          "metric": "Ratio: 0.07067 (Z: +1.33σ)"
        },
        {
          "label": "19/08/26",
          "score": 84,
          "metric": "Ratio: 0.06954 (Z: -1.39σ)"
        },
        {
          "label": "22/08/26",
          "score": 87,
          "metric": "Ratio: 0.05968 (Z: -1.43σ)"
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
    "valor_atual_str": "VIX = 16.09 pts",
    "alvo_str": "VIX >= 22.50 pts (Pânico Global)",
    "distancia_display": "+6.41 pts de estresse no VIX",
    "proximidade_score": 72,
    "status": "AGUARDANDO_PANICO",
    "icone": "🛡️",
    "cor": "#10B981",
    "descricao_executiva": "Caçador de capitulação macroeconômica. Aproveita picos de aversão a risco no mercado global de ações (índice VIX) para efetuar compras cirúrgicas de Bitcoin com caixa BRL em fundos de liquidação forçada.",
    "condicoes_ativacao": "• Índice VIX sobe acima de 22.50 pontos base.<br>• Coerência sistêmica PC1 >= 40% indicando desova indiscriminada de ativos.<br>• Entropia Espectral S <= 1.75 comprovando sincronização de pânico.",
    "limitacoes_trava": "• <b>Filtro Anti-Faca Caindo:</b> Proíbe compras se a energia wavelet Ew estiver acelerando (> 50.0).<br>• <b>Trava de Caixa Líquido:</b> Preserva reserva mínima de 30% em BRL para suporte estrutural.<br>• <b>Cooldown:</b> 4 horas.",
    "series_historica": {
      "1h": [
        {
          "label": "18:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:34",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:35",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:36",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:37",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:38",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:39",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:40",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:41",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:42",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:43",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:44",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:45",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:46",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:47",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:48",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:49",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:50",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:51",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:52",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:54",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:55",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:56",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:57",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:58",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:59",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:01",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:02",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:03",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:04",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:05",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:06",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:09",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:10",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:11",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:12",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:14",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:15",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:16",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:17",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:18",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:19",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:20",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:21",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:22",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:23",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:24",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:27",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:28",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:29",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:30",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:31",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:32",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "23:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "23:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "23:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "00:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "00:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "00:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18:53",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:13",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19:33",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 21:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08 23:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 01:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 03:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 05:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 07:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 09:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 11:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 13:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 15:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 17:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08 19:00",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "24/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "24/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "24/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "27/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "27/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "27/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "28/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "28/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "28/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "29/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "29/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "29/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "31/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "31/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "31/07",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/08/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/08/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "23/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "27/09/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "05/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "09/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "29/10/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/11/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/11/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/11/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/12/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/12/25",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/01/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/01/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "28/01/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "01/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "21/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/02/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "25/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/03/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "24/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "29/04/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "13/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "17/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/05/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "04/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "08/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "12/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "16/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "20/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "24/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "28/06/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "02/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "06/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "10/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "14/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "18/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "26/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "30/07/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "03/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "07/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "11/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "15/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "19/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
        },
        {
          "label": "22/08/26",
          "score": 72,
          "metric": "VIX: 16.09 pts"
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
    "valor_atual_str": "USDT R$ 5.1597 (Spread: +0.1482)",
    "alvo_str": "Spread <= -R$ 0.0400 vs PTAX",
    "distancia_display": "Faltam R$ 0.1882 de desconto",
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
          "label": "18:33",
          "score": 5,
          "metric": "Spread: +0.1509 (USDT R$ 5.162)"
        },
        {
          "label": "18:34",
          "score": 5,
          "metric": "Spread: +0.1509 (USDT R$ 5.162)"
        },
        {
          "label": "18:35",
          "score": 5,
          "metric": "Spread: +0.1510 (USDT R$ 5.162)"
        },
        {
          "label": "18:36",
          "score": 5,
          "metric": "Spread: +0.1510 (USDT R$ 5.162)"
        },
        {
          "label": "18:37",
          "score": 5,
          "metric": "Spread: +0.1485 (USDT R$ 5.160)"
        },
        {
          "label": "18:38",
          "score": 5,
          "metric": "Spread: +0.1490 (USDT R$ 5.160)"
        },
        {
          "label": "18:39",
          "score": 5,
          "metric": "Spread: +0.1490 (USDT R$ 5.160)"
        },
        {
          "label": "18:40",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "18:41",
          "score": 5,
          "metric": "Spread: +0.1490 (USDT R$ 5.160)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:43",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:44",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:45",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:46",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:47",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:48",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:49",
          "score": 5,
          "metric": "Spread: +0.1493 (USDT R$ 5.161)"
        },
        {
          "label": "18:50",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "18:51",
          "score": 5,
          "metric": "Spread: +0.1490 (USDT R$ 5.160)"
        },
        {
          "label": "18:52",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:54",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:55",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:56",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:57",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "18:58",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "18:59",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "19:00",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "19:01",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "19:02",
          "score": 5,
          "metric": "Spread: +0.1491 (USDT R$ 5.161)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:04",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:05",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:06",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:07",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:08",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:09",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:10",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:11",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:12",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:14",
          "score": 5,
          "metric": "Spread: +0.1489 (USDT R$ 5.160)"
        },
        {
          "label": "19:15",
          "score": 5,
          "metric": "Spread: +0.1486 (USDT R$ 5.160)"
        },
        {
          "label": "19:16",
          "score": 5,
          "metric": "Spread: +0.1485 (USDT R$ 5.160)"
        },
        {
          "label": "19:17",
          "score": 5,
          "metric": "Spread: +0.1485 (USDT R$ 5.160)"
        },
        {
          "label": "19:18",
          "score": 5,
          "metric": "Spread: +0.1486 (USDT R$ 5.160)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "Spread: +0.1485 (USDT R$ 5.160)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "Spread: +0.1485 (USDT R$ 5.160)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "Spread: +0.1481 (USDT R$ 5.160)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Spread: +0.1481 (USDT R$ 5.160)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "Spread: +0.1481 (USDT R$ 5.160)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "Spread: +0.1481 (USDT R$ 5.160)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 5,
          "metric": "Spread: +0.1412 (USDT R$ 5.153)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "Spread: +0.1414 (USDT R$ 5.153)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "Spread: +0.1483 (USDT R$ 5.160)"
        },
        {
          "label": "20:33",
          "score": 5,
          "metric": "Spread: +0.1487 (USDT R$ 5.160)"
        },
        {
          "label": "20:53",
          "score": 5,
          "metric": "Spread: +0.1459 (USDT R$ 5.157)"
        },
        {
          "label": "21:13",
          "score": 5,
          "metric": "Spread: +0.1438 (USDT R$ 5.155)"
        },
        {
          "label": "21:33",
          "score": 5,
          "metric": "Spread: +0.1502 (USDT R$ 5.162)"
        },
        {
          "label": "21:53",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "22:13",
          "score": 5,
          "metric": "Spread: +0.1584 (USDT R$ 5.170)"
        },
        {
          "label": "22:33",
          "score": 5,
          "metric": "Spread: +0.1587 (USDT R$ 5.170)"
        },
        {
          "label": "22:53",
          "score": 5,
          "metric": "Spread: +0.1585 (USDT R$ 5.170)"
        },
        {
          "label": "23:13",
          "score": 5,
          "metric": "Spread: +0.1585 (USDT R$ 5.170)"
        },
        {
          "label": "23:33",
          "score": 5,
          "metric": "Spread: +0.1583 (USDT R$ 5.170)"
        },
        {
          "label": "23:53",
          "score": 5,
          "metric": "Spread: +0.1568 (USDT R$ 5.168)"
        },
        {
          "label": "00:13",
          "score": 5,
          "metric": "Spread: +0.1551 (USDT R$ 5.167)"
        },
        {
          "label": "00:33",
          "score": 5,
          "metric": "Spread: +0.1568 (USDT R$ 5.168)"
        },
        {
          "label": "00:53",
          "score": 5,
          "metric": "Spread: +0.1567 (USDT R$ 5.168)"
        },
        {
          "label": "01:13",
          "score": 5,
          "metric": "Spread: +0.1567 (USDT R$ 5.168)"
        },
        {
          "label": "01:33",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "01:53",
          "score": 5,
          "metric": "Spread: +0.1567 (USDT R$ 5.168)"
        },
        {
          "label": "02:13",
          "score": 5,
          "metric": "Spread: +0.1564 (USDT R$ 5.168)"
        },
        {
          "label": "02:33",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "02:53",
          "score": 5,
          "metric": "Spread: +0.1546 (USDT R$ 5.166)"
        },
        {
          "label": "03:13",
          "score": 5,
          "metric": "Spread: +0.1551 (USDT R$ 5.167)"
        },
        {
          "label": "03:33",
          "score": 5,
          "metric": "Spread: +0.1562 (USDT R$ 5.168)"
        },
        {
          "label": "03:53",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "04:13",
          "score": 5,
          "metric": "Spread: +0.1562 (USDT R$ 5.168)"
        },
        {
          "label": "04:33",
          "score": 5,
          "metric": "Spread: +0.1539 (USDT R$ 5.165)"
        },
        {
          "label": "04:53",
          "score": 5,
          "metric": "Spread: +0.1539 (USDT R$ 5.165)"
        },
        {
          "label": "05:13",
          "score": 5,
          "metric": "Spread: +0.1554 (USDT R$ 5.167)"
        },
        {
          "label": "05:33",
          "score": 5,
          "metric": "Spread: +0.1553 (USDT R$ 5.167)"
        },
        {
          "label": "05:53",
          "score": 5,
          "metric": "Spread: +0.1554 (USDT R$ 5.167)"
        },
        {
          "label": "06:13",
          "score": 5,
          "metric": "Spread: +0.1554 (USDT R$ 5.167)"
        },
        {
          "label": "06:33",
          "score": 5,
          "metric": "Spread: +0.1558 (USDT R$ 5.167)"
        },
        {
          "label": "06:53",
          "score": 5,
          "metric": "Spread: +0.1564 (USDT R$ 5.168)"
        },
        {
          "label": "07:13",
          "score": 5,
          "metric": "Spread: +0.1565 (USDT R$ 5.168)"
        },
        {
          "label": "07:33",
          "score": 5,
          "metric": "Spread: +0.1565 (USDT R$ 5.168)"
        },
        {
          "label": "07:53",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "08:13",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "08:33",
          "score": 5,
          "metric": "Spread: +0.1536 (USDT R$ 5.165)"
        },
        {
          "label": "08:53",
          "score": 5,
          "metric": "Spread: +0.1536 (USDT R$ 5.165)"
        },
        {
          "label": "09:13",
          "score": 5,
          "metric": "Spread: +0.1537 (USDT R$ 5.165)"
        },
        {
          "label": "09:33",
          "score": 5,
          "metric": "Spread: +0.1536 (USDT R$ 5.165)"
        },
        {
          "label": "09:53",
          "score": 5,
          "metric": "Spread: +0.1551 (USDT R$ 5.167)"
        },
        {
          "label": "10:13",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "10:33",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "10:53",
          "score": 5,
          "metric": "Spread: +0.1551 (USDT R$ 5.167)"
        },
        {
          "label": "11:13",
          "score": 5,
          "metric": "Spread: +0.1551 (USDT R$ 5.167)"
        },
        {
          "label": "11:33",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "11:53",
          "score": 5,
          "metric": "Spread: +0.1547 (USDT R$ 5.166)"
        },
        {
          "label": "12:13",
          "score": 5,
          "metric": "Spread: +0.1541 (USDT R$ 5.166)"
        },
        {
          "label": "12:33",
          "score": 5,
          "metric": "Spread: +0.1541 (USDT R$ 5.166)"
        },
        {
          "label": "12:53",
          "score": 5,
          "metric": "Spread: +0.1540 (USDT R$ 5.165)"
        },
        {
          "label": "13:13",
          "score": 5,
          "metric": "Spread: +0.1540 (USDT R$ 5.165)"
        },
        {
          "label": "13:33",
          "score": 5,
          "metric": "Spread: +0.1515 (USDT R$ 5.163)"
        },
        {
          "label": "13:53",
          "score": 5,
          "metric": "Spread: +0.1505 (USDT R$ 5.162)"
        },
        {
          "label": "14:13",
          "score": 5,
          "metric": "Spread: +0.1513 (USDT R$ 5.163)"
        },
        {
          "label": "14:33",
          "score": 5,
          "metric": "Spread: +0.1512 (USDT R$ 5.163)"
        },
        {
          "label": "14:53",
          "score": 5,
          "metric": "Spread: +0.1498 (USDT R$ 5.161)"
        },
        {
          "label": "15:13",
          "score": 5,
          "metric": "Spread: +0.1498 (USDT R$ 5.161)"
        },
        {
          "label": "15:33",
          "score": 5,
          "metric": "Spread: +0.1510 (USDT R$ 5.162)"
        },
        {
          "label": "15:53",
          "score": 5,
          "metric": "Spread: +0.1508 (USDT R$ 5.162)"
        },
        {
          "label": "16:13",
          "score": 5,
          "metric": "Spread: +0.1499 (USDT R$ 5.161)"
        },
        {
          "label": "16:33",
          "score": 5,
          "metric": "Spread: +0.1445 (USDT R$ 5.156)"
        },
        {
          "label": "16:53",
          "score": 5,
          "metric": "Spread: +0.1501 (USDT R$ 5.162)"
        },
        {
          "label": "17:13",
          "score": 5,
          "metric": "Spread: +0.1511 (USDT R$ 5.163)"
        },
        {
          "label": "17:33",
          "score": 5,
          "metric": "Spread: +0.1512 (USDT R$ 5.163)"
        },
        {
          "label": "17:53",
          "score": 5,
          "metric": "Spread: +0.1511 (USDT R$ 5.163)"
        },
        {
          "label": "18:13",
          "score": 5,
          "metric": "Spread: +0.1511 (USDT R$ 5.163)"
        },
        {
          "label": "18:33",
          "score": 5,
          "metric": "Spread: +0.1509 (USDT R$ 5.162)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Spread: +0.1492 (USDT R$ 5.161)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "Spread: +0.1488 (USDT R$ 5.160)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 5,
          "metric": "Spread: +0.2273 (USDT R$ 5.239)"
        },
        {
          "label": "15/08 21:00",
          "score": 5,
          "metric": "Spread: +0.2289 (USDT R$ 5.240)"
        },
        {
          "label": "15/08 23:00",
          "score": 5,
          "metric": "Spread: +0.2287 (USDT R$ 5.240)"
        },
        {
          "label": "16/08 01:00",
          "score": 5,
          "metric": "Spread: +0.2303 (USDT R$ 5.242)"
        },
        {
          "label": "16/08 03:00",
          "score": 5,
          "metric": "Spread: +0.2373 (USDT R$ 5.249)"
        },
        {
          "label": "16/08 05:00",
          "score": 5,
          "metric": "Spread: +0.2359 (USDT R$ 5.247)"
        },
        {
          "label": "16/08 07:00",
          "score": 5,
          "metric": "Spread: +0.2359 (USDT R$ 5.247)"
        },
        {
          "label": "16/08 09:00",
          "score": 5,
          "metric": "Spread: +0.2337 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 11:00",
          "score": 5,
          "metric": "Spread: +0.2336 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 13:00",
          "score": 5,
          "metric": "Spread: +0.2334 (USDT R$ 5.245)"
        },
        {
          "label": "16/08 15:00",
          "score": 5,
          "metric": "Spread: +0.2301 (USDT R$ 5.242)"
        },
        {
          "label": "16/08 17:00",
          "score": 5,
          "metric": "Spread: +0.2301 (USDT R$ 5.242)"
        },
        {
          "label": "16/08 19:00",
          "score": 5,
          "metric": "Spread: +0.2284 (USDT R$ 5.240)"
        },
        {
          "label": "16/08 21:00",
          "score": 5,
          "metric": "Spread: +0.2259 (USDT R$ 5.237)"
        },
        {
          "label": "16/08 23:00",
          "score": 5,
          "metric": "Spread: +0.2332 (USDT R$ 5.245)"
        },
        {
          "label": "17/08 01:00",
          "score": 5,
          "metric": "Spread: +0.2332 (USDT R$ 5.245)"
        },
        {
          "label": "17/08 03:00",
          "score": 5,
          "metric": "Spread: +0.2387 (USDT R$ 5.250)"
        },
        {
          "label": "17/08 05:00",
          "score": 5,
          "metric": "Spread: +0.2348 (USDT R$ 5.246)"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "Spread: +0.2283 (USDT R$ 5.240)"
        },
        {
          "label": "17/08 09:00",
          "score": 5,
          "metric": "Spread: +0.2304 (USDT R$ 5.242)"
        },
        {
          "label": "17/08 11:00",
          "score": 5,
          "metric": "Spread: +0.2291 (USDT R$ 5.241)"
        },
        {
          "label": "17/08 13:00",
          "score": 5,
          "metric": "Spread: +0.2113 (USDT R$ 5.223)"
        },
        {
          "label": "17/08 15:00",
          "score": 5,
          "metric": "Spread: +0.1901 (USDT R$ 5.202)"
        },
        {
          "label": "17/08 17:00",
          "score": 5,
          "metric": "Spread: +0.2058 (USDT R$ 5.217)"
        },
        {
          "label": "17/08 19:00",
          "score": 5,
          "metric": "Spread: +0.2014 (USDT R$ 5.213)"
        },
        {
          "label": "17/08 21:00",
          "score": 5,
          "metric": "Spread: +0.2052 (USDT R$ 5.217)"
        },
        {
          "label": "17/08 23:00",
          "score": 5,
          "metric": "Spread: +0.2086 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 01:00",
          "score": 5,
          "metric": "Spread: +0.2089 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 03:00",
          "score": 5,
          "metric": "Spread: +0.2090 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 05:00",
          "score": 5,
          "metric": "Spread: +0.2089 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 07:00",
          "score": 5,
          "metric": "Spread: +0.2090 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 09:00",
          "score": 5,
          "metric": "Spread: +0.2096 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 11:00",
          "score": 5,
          "metric": "Spread: +0.2102 (USDT R$ 5.222)"
        },
        {
          "label": "18/08 13:00",
          "score": 5,
          "metric": "Spread: +0.2084 (USDT R$ 5.220)"
        },
        {
          "label": "18/08 15:00",
          "score": 5,
          "metric": "Spread: +0.2153 (USDT R$ 5.227)"
        },
        {
          "label": "18/08 17:00",
          "score": 5,
          "metric": "Spread: +0.2094 (USDT R$ 5.221)"
        },
        {
          "label": "18/08 19:00",
          "score": 5,
          "metric": "Spread: +0.2191 (USDT R$ 5.231)"
        },
        {
          "label": "18/08 21:00",
          "score": 5,
          "metric": "Spread: +0.2196 (USDT R$ 5.231)"
        },
        {
          "label": "18/08 23:00",
          "score": 5,
          "metric": "Spread: +0.2273 (USDT R$ 5.239)"
        },
        {
          "label": "19/08 01:00",
          "score": 5,
          "metric": "Spread: +0.2292 (USDT R$ 5.241)"
        },
        {
          "label": "19/08 03:00",
          "score": 5,
          "metric": "Spread: +0.2284 (USDT R$ 5.240)"
        },
        {
          "label": "19/08 05:00",
          "score": 5,
          "metric": "Spread: +0.2254 (USDT R$ 5.237)"
        },
        {
          "label": "19/08 07:00",
          "score": 5,
          "metric": "Spread: +0.2231 (USDT R$ 5.235)"
        },
        {
          "label": "19/08 09:00",
          "score": 5,
          "metric": "Spread: +0.2229 (USDT R$ 5.234)"
        },
        {
          "label": "19/08 11:00",
          "score": 5,
          "metric": "Spread: +0.2187 (USDT R$ 5.230)"
        },
        {
          "label": "19/08 13:00",
          "score": 5,
          "metric": "Spread: +0.1679 (USDT R$ 5.179)"
        },
        {
          "label": "19/08 15:00",
          "score": 5,
          "metric": "Spread: +0.1758 (USDT R$ 5.187)"
        },
        {
          "label": "19/08 17:00",
          "score": 5,
          "metric": "Spread: +0.1737 (USDT R$ 5.185)"
        },
        {
          "label": "19/08 19:00",
          "score": 5,
          "metric": "Spread: +0.1746 (USDT R$ 5.186)"
        },
        {
          "label": "19/08 21:00",
          "score": 5,
          "metric": "Spread: +0.1807 (USDT R$ 5.192)"
        },
        {
          "label": "19/08 23:00",
          "score": 5,
          "metric": "Spread: +0.1794 (USDT R$ 5.191)"
        },
        {
          "label": "20/08 01:00",
          "score": 5,
          "metric": "Spread: +0.1724 (USDT R$ 5.184)"
        },
        {
          "label": "20/08 03:00",
          "score": 5,
          "metric": "Spread: +0.1807 (USDT R$ 5.192)"
        },
        {
          "label": "20/08 05:00",
          "score": 5,
          "metric": "Spread: +0.1805 (USDT R$ 5.192)"
        },
        {
          "label": "20/08 07:00",
          "score": 5,
          "metric": "Spread: +0.1792 (USDT R$ 5.191)"
        },
        {
          "label": "20/08 09:00",
          "score": 5,
          "metric": "Spread: +0.1752 (USDT R$ 5.187)"
        },
        {
          "label": "20/08 11:00",
          "score": 5,
          "metric": "Spread: +0.1769 (USDT R$ 5.188)"
        },
        {
          "label": "20/08 13:00",
          "score": 5,
          "metric": "Spread: +0.1930 (USDT R$ 5.205)"
        },
        {
          "label": "20/08 15:00",
          "score": 5,
          "metric": "Spread: +0.1893 (USDT R$ 5.201)"
        },
        {
          "label": "20/08 17:00",
          "score": 5,
          "metric": "Spread: +0.1925 (USDT R$ 5.204)"
        },
        {
          "label": "20/08 19:00",
          "score": 5,
          "metric": "Spread: +0.1941 (USDT R$ 5.206)"
        },
        {
          "label": "20/08 21:00",
          "score": 5,
          "metric": "Spread: +0.2016 (USDT R$ 5.213)"
        },
        {
          "label": "20/08 23:00",
          "score": 5,
          "metric": "Spread: +0.1990 (USDT R$ 5.210)"
        },
        {
          "label": "21/08 01:00",
          "score": 5,
          "metric": "Spread: +0.1977 (USDT R$ 5.209)"
        },
        {
          "label": "21/08 03:00",
          "score": 5,
          "metric": "Spread: +0.1975 (USDT R$ 5.209)"
        },
        {
          "label": "21/08 05:00",
          "score": 5,
          "metric": "Spread: +0.1917 (USDT R$ 5.203)"
        },
        {
          "label": "21/08 07:00",
          "score": 5,
          "metric": "Spread: +0.1905 (USDT R$ 5.202)"
        },
        {
          "label": "21/08 09:00",
          "score": 5,
          "metric": "Spread: +0.1813 (USDT R$ 5.193)"
        },
        {
          "label": "21/08 11:00",
          "score": 5,
          "metric": "Spread: +0.1820 (USDT R$ 5.194)"
        },
        {
          "label": "21/08 13:00",
          "score": 5,
          "metric": "Spread: +0.1777 (USDT R$ 5.189)"
        },
        {
          "label": "21/08 15:00",
          "score": 5,
          "metric": "Spread: +0.1615 (USDT R$ 5.173)"
        },
        {
          "label": "21/08 17:00",
          "score": 5,
          "metric": "Spread: +0.1497 (USDT R$ 5.161)"
        },
        {
          "label": "21/08 19:00",
          "score": 5,
          "metric": "Spread: +0.1413 (USDT R$ 5.153)"
        },
        {
          "label": "21/08 21:00",
          "score": 5,
          "metric": "Spread: +0.1516 (USDT R$ 5.163)"
        },
        {
          "label": "21/08 23:00",
          "score": 5,
          "metric": "Spread: +0.1583 (USDT R$ 5.170)"
        },
        {
          "label": "22/08 01:00",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "22/08 03:00",
          "score": 5,
          "metric": "Spread: +0.1563 (USDT R$ 5.168)"
        },
        {
          "label": "22/08 05:00",
          "score": 5,
          "metric": "Spread: +0.1553 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 07:00",
          "score": 5,
          "metric": "Spread: +0.1565 (USDT R$ 5.168)"
        },
        {
          "label": "22/08 09:00",
          "score": 5,
          "metric": "Spread: +0.1537 (USDT R$ 5.165)"
        },
        {
          "label": "22/08 11:00",
          "score": 5,
          "metric": "Spread: +0.1550 (USDT R$ 5.167)"
        },
        {
          "label": "22/08 13:00",
          "score": 5,
          "metric": "Spread: +0.1493 (USDT R$ 5.161)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "Spread: +0.1510 (USDT R$ 5.162)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "Spread: +0.1496 (USDT R$ 5.161)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "Spread: +0.0926 (USDT R$ 5.104)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Spread: +0.0985 (USDT R$ 5.110)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Spread: +0.0922 (USDT R$ 5.104)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Spread: +0.0806 (USDT R$ 5.092)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "Spread: +0.1046 (USDT R$ 5.116)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "Spread: +0.0904 (USDT R$ 5.102)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "Spread: +0.1013 (USDT R$ 5.113)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Spread: +0.0967 (USDT R$ 5.108)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Spread: +0.0990 (USDT R$ 5.111)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Spread: +0.0925 (USDT R$ 5.104)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Spread: +0.0897 (USDT R$ 5.101)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Spread: +0.0896 (USDT R$ 5.101)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Spread: +0.1115 (USDT R$ 5.123)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Spread: +0.1126 (USDT R$ 5.124)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Spread: +0.1213 (USDT R$ 5.133)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Spread: +0.1182 (USDT R$ 5.130)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Spread: +0.1313 (USDT R$ 5.143)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Spread: +0.1313 (USDT R$ 5.143)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Spread: +0.1078 (USDT R$ 5.119)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Spread: +0.1168 (USDT R$ 5.128)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Spread: +0.1106 (USDT R$ 5.122)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Spread: +0.0696 (USDT R$ 5.081)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Spread: +0.0819 (USDT R$ 5.093)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Spread: +0.0882 (USDT R$ 5.100)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Spread: +0.0771 (USDT R$ 5.089)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Spread: +0.0951 (USDT R$ 5.107)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Spread: +0.0951 (USDT R$ 5.107)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Spread: +0.0956 (USDT R$ 5.107)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Spread: +0.0946 (USDT R$ 5.106)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Spread: +0.0941 (USDT R$ 5.106)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Spread: +0.0918 (USDT R$ 5.103)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Spread: +0.0844 (USDT R$ 5.096)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Spread: +0.0820 (USDT R$ 5.093)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Spread: +0.0885 (USDT R$ 5.100)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Spread: +0.0893 (USDT R$ 5.101)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Spread: +0.0850 (USDT R$ 5.096)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Spread: +0.1342 (USDT R$ 5.146)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Spread: +0.1364 (USDT R$ 5.148)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Spread: +0.1271 (USDT R$ 5.139)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Spread: +0.1287 (USDT R$ 5.140)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Spread: +0.1284 (USDT R$ 5.140)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Spread: +0.1285 (USDT R$ 5.140)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Spread: +0.1052 (USDT R$ 5.117)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Spread: +0.1167 (USDT R$ 5.128)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Spread: +0.1111 (USDT R$ 5.123)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Spread: +0.0873 (USDT R$ 5.099)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Spread: +0.0935 (USDT R$ 5.105)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Spread: +0.0939 (USDT R$ 5.105)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Spread: +0.0929 (USDT R$ 5.104)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Spread: +0.0971 (USDT R$ 5.109)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Spread: +0.0971 (USDT R$ 5.109)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Spread: +0.0971 (USDT R$ 5.109)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Spread: +0.0970 (USDT R$ 5.109)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Spread: +0.0868 (USDT R$ 5.098)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Spread: +0.1147 (USDT R$ 5.126)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Spread: +0.1179 (USDT R$ 5.129)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Spread: +0.1146 (USDT R$ 5.126)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Spread: +0.1646 (USDT R$ 5.176)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.1669 (USDT R$ 5.178)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.1673 (USDT R$ 5.179)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Spread: +0.1782 (USDT R$ 5.190)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.1883 (USDT R$ 5.200)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.1892 (USDT R$ 5.201)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Spread: +0.1895 (USDT R$ 5.201)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.1880 (USDT R$ 5.199)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.1800 (USDT R$ 5.191)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Spread: +0.2222 (USDT R$ 5.234)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.2210 (USDT R$ 5.232)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.2229 (USDT R$ 5.234)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Spread: +0.2289 (USDT R$ 5.240)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.2374 (USDT R$ 5.249)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.2336 (USDT R$ 5.245)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Spread: +0.2266 (USDT R$ 5.238)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.2386 (USDT R$ 5.250)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.2201 (USDT R$ 5.232)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Spread: +0.2013 (USDT R$ 5.213)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.2089 (USDT R$ 5.220)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.2138 (USDT R$ 5.225)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Spread: +0.2174 (USDT R$ 5.229)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.2282 (USDT R$ 5.240)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.2058 (USDT R$ 5.217)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Spread: +0.1767 (USDT R$ 5.188)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.1814 (USDT R$ 5.193)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.1974 (USDT R$ 5.209)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Spread: +0.1968 (USDT R$ 5.208)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.1975 (USDT R$ 5.209)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.1773 (USDT R$ 5.189)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Spread: +0.1429 (USDT R$ 5.154)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.1561 (USDT R$ 5.168)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.1540 (USDT R$ 5.165)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "Spread: +0.4230 (USDT R$ 5.434)"
        },
        {
          "label": "26/08/25",
          "score": 5,
          "metric": "Spread: +0.4313 (USDT R$ 5.443)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "Spread: +0.4584 (USDT R$ 5.470)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "Spread: +0.4514 (USDT R$ 5.463)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "Spread: +0.4422 (USDT R$ 5.454)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "Spread: +0.3882 (USDT R$ 5.400)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "Spread: +0.3183 (USDT R$ 5.330)"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "Spread: +0.3186 (USDT R$ 5.330)"
        },
        {
          "label": "23/09/25",
          "score": 5,
          "metric": "Spread: +0.2815 (USDT R$ 5.293)"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "Spread: +0.3624 (USDT R$ 5.374)"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "Spread: +0.3264 (USDT R$ 5.338)"
        },
        {
          "label": "05/10/25",
          "score": 5,
          "metric": "Spread: +0.3394 (USDT R$ 5.351)"
        },
        {
          "label": "09/10/25",
          "score": 5,
          "metric": "Spread: +0.3702 (USDT R$ 5.382)"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "Spread: +0.4846 (USDT R$ 5.496)"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "Spread: +0.4160 (USDT R$ 5.428)"
        },
        {
          "label": "21/10/25",
          "score": 5,
          "metric": "Spread: +0.3828 (USDT R$ 5.394)"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "Spread: +0.3905 (USDT R$ 5.402)"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "Spread: +0.3528 (USDT R$ 5.364)"
        },
        {
          "label": "02/11/25",
          "score": 5,
          "metric": "Spread: +0.3650 (USDT R$ 5.377)"
        },
        {
          "label": "06/11/25",
          "score": 5,
          "metric": "Spread: +0.3427 (USDT R$ 5.354)"
        },
        {
          "label": "10/11/25",
          "score": 5,
          "metric": "Spread: +0.2929 (USDT R$ 5.304)"
        },
        {
          "label": "03/12/25",
          "score": 5,
          "metric": "Spread: +0.2942 (USDT R$ 5.306)"
        },
        {
          "label": "07/12/25",
          "score": 5,
          "metric": "Spread: +0.4775 (USDT R$ 5.489)"
        },
        {
          "label": "18/01/26",
          "score": 5,
          "metric": "Spread: +0.3747 (USDT R$ 5.386)"
        },
        {
          "label": "22/01/26",
          "score": 5,
          "metric": "Spread: +0.2794 (USDT R$ 5.291)"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "Spread: +0.1673 (USDT R$ 5.179)"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "Spread: +0.2650 (USDT R$ 5.277)"
        },
        {
          "label": "06/02/26",
          "score": 5,
          "metric": "Spread: +0.2554 (USDT R$ 5.267)"
        },
        {
          "label": "10/02/26",
          "score": 5,
          "metric": "Spread: +0.1845 (USDT R$ 5.196)"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "Spread: +0.2248 (USDT R$ 5.236)"
        },
        {
          "label": "21/02/26",
          "score": 5,
          "metric": "Spread: +0.1752 (USDT R$ 5.187)"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "Spread: +0.1345 (USDT R$ 5.146)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "Spread: +0.1965 (USDT R$ 5.208)"
        },
        {
          "label": "07/03/26",
          "score": 5,
          "metric": "Spread: +0.2649 (USDT R$ 5.276)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "Spread: +0.1527 (USDT R$ 5.164)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "Spread: +0.2907 (USDT R$ 5.302)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "Spread: +0.3152 (USDT R$ 5.327)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "Spread: +0.2300 (USDT R$ 5.242)"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "Spread: +0.2315 (USDT R$ 5.243)"
        },
        {
          "label": "03/04/26",
          "score": 5,
          "metric": "Spread: +0.1669 (USDT R$ 5.178)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "Spread: +0.1378 (USDT R$ 5.149)"
        },
        {
          "label": "12/04/26",
          "score": 5,
          "metric": "Spread: +0.0184 (USDT R$ 5.030)"
        },
        {
          "label": "16/04/26",
          "score": 26,
          "metric": "Spread: -0.0029 (USDT R$ 5.009)"
        },
        {
          "label": "20/04/26",
          "score": 91,
          "metric": "Spread: -0.0357 (USDT R$ 4.976)"
        },
        {
          "label": "24/04/26",
          "score": 31,
          "metric": "Spread: -0.0056 (USDT R$ 5.006)"
        },
        {
          "label": "29/04/26",
          "score": 69,
          "metric": "Spread: -0.0247 (USDT R$ 4.987)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "Spread: -0.0455 (USDT R$ 4.966)"
        },
        {
          "label": "07/05/26",
          "score": 100,
          "metric": "Spread: -0.0761 (USDT R$ 4.935)"
        },
        {
          "label": "13/05/26",
          "score": 100,
          "metric": "Spread: -0.0523 (USDT R$ 4.959)"
        },
        {
          "label": "17/05/26",
          "score": 5,
          "metric": "Spread: +0.0582 (USDT R$ 5.070)"
        },
        {
          "label": "22/05/26",
          "score": 21,
          "metric": "Spread: -0.0003 (USDT R$ 5.011)"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "Spread: +0.0241 (USDT R$ 5.036)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "Spread: +0.0464 (USDT R$ 5.058)"
        },
        {
          "label": "04/06/26",
          "score": 5,
          "metric": "Spread: +0.0642 (USDT R$ 5.076)"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "Spread: +0.1992 (USDT R$ 5.211)"
        },
        {
          "label": "12/06/26",
          "score": 5,
          "metric": "Spread: +0.0964 (USDT R$ 5.108)"
        },
        {
          "label": "16/06/26",
          "score": 5,
          "metric": "Spread: +0.0647 (USDT R$ 5.076)"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "Spread: +0.1569 (USDT R$ 5.168)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "Spread: +0.1993 (USDT R$ 5.211)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "Spread: +0.2362 (USDT R$ 5.248)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "Spread: +0.2434 (USDT R$ 5.255)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "Spread: +0.2541 (USDT R$ 5.266)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "Spread: +0.1460 (USDT R$ 5.157)"
        },
        {
          "label": "14/07/26",
          "score": 5,
          "metric": "Spread: +0.1618 (USDT R$ 5.173)"
        },
        {
          "label": "18/07/26",
          "score": 5,
          "metric": "Spread: +0.1401 (USDT R$ 5.152)"
        },
        {
          "label": "22/07/26",
          "score": 5,
          "metric": "Spread: +0.0930 (USDT R$ 5.104)"
        },
        {
          "label": "26/07/26",
          "score": 5,
          "metric": "Spread: +0.0967 (USDT R$ 5.108)"
        },
        {
          "label": "30/07/26",
          "score": 5,
          "metric": "Spread: +0.1169 (USDT R$ 5.128)"
        },
        {
          "label": "03/08/26",
          "score": 5,
          "metric": "Spread: +0.0850 (USDT R$ 5.096)"
        },
        {
          "label": "07/08/26",
          "score": 5,
          "metric": "Spread: +0.1163 (USDT R$ 5.128)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "Spread: +0.1189 (USDT R$ 5.130)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "Spread: +0.2209 (USDT R$ 5.232)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "Spread: +0.2284 (USDT R$ 5.240)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "Spread: +0.1482 (USDT R$ 5.160)"
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
    "valor_atual_str": "LINK R$ 59.53 (Z: +0.10σ)",
    "alvo_str": "Preço <= R$ 54.47 (Z <= -2.0σ)",
    "distancia_display": "+9.3% de distância",
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
          "label": "18:33",
          "score": 5,
          "metric": "LINK: R$ 60.60 (Z: +0.57σ)"
        },
        {
          "label": "18:34",
          "score": 5,
          "metric": "LINK: R$ 60.60 (Z: +0.56σ)"
        },
        {
          "label": "18:35",
          "score": 5,
          "metric": "LINK: R$ 60.60 (Z: +0.56σ)"
        },
        {
          "label": "18:36",
          "score": 5,
          "metric": "LINK: R$ 60.51 (Z: +0.53σ)"
        },
        {
          "label": "18:37",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.27σ)"
        },
        {
          "label": "18:38",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.27σ)"
        },
        {
          "label": "18:39",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.27σ)"
        },
        {
          "label": "18:40",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.26σ)"
        },
        {
          "label": "18:41",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.26σ)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.26σ)"
        },
        {
          "label": "18:43",
          "score": 5,
          "metric": "LINK: R$ 59.87 (Z: +0.26σ)"
        },
        {
          "label": "18:44",
          "score": 5,
          "metric": "LINK: R$ 59.55 (Z: +0.13σ)"
        },
        {
          "label": "18:45",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.16σ)"
        },
        {
          "label": "18:46",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.16σ)"
        },
        {
          "label": "18:47",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.16σ)"
        },
        {
          "label": "18:48",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.16σ)"
        },
        {
          "label": "18:49",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:50",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:51",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:52",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:54",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:55",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:56",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:57",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:58",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "18:59",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "19:00",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "19:01",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "19:02",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:04",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:05",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:06",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:07",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:08",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:09",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:10",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:11",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:12",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:14",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:15",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:16",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:17",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:18",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.13σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "LINK: R$ 59.66 (Z: +0.16σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "LINK: R$ 59.66 (Z: +0.16σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "LINK: R$ 59.71 (Z: +0.18σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.10σ)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 5,
          "metric": "LINK: R$ 60.04 (Z: +1.78σ)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "LINK: R$ 59.89 (Z: +1.69σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "LINK: R$ 60.23 (Z: +1.83σ)"
        },
        {
          "label": "20:33",
          "score": 5,
          "metric": "LINK: R$ 60.55 (Z: +1.96σ)"
        },
        {
          "label": "20:53",
          "score": 5,
          "metric": "LINK: R$ 60.62 (Z: +1.97σ)"
        },
        {
          "label": "21:13",
          "score": 5,
          "metric": "LINK: R$ 61.04 (Z: +2.14σ)"
        },
        {
          "label": "21:33",
          "score": 5,
          "metric": "LINK: R$ 62.00 (Z: +2.54σ)"
        },
        {
          "label": "21:53",
          "score": 5,
          "metric": "LINK: R$ 62.27 (Z: +2.61σ)"
        },
        {
          "label": "22:13",
          "score": 5,
          "metric": "LINK: R$ 63.55 (Z: +3.13σ)"
        },
        {
          "label": "22:33",
          "score": 5,
          "metric": "LINK: R$ 63.06 (Z: +2.83σ)"
        },
        {
          "label": "22:53",
          "score": 5,
          "metric": "LINK: R$ 62.69 (Z: +2.60σ)"
        },
        {
          "label": "23:13",
          "score": 5,
          "metric": "LINK: R$ 63.02 (Z: +2.68σ)"
        },
        {
          "label": "23:33",
          "score": 5,
          "metric": "LINK: R$ 62.82 (Z: +2.54σ)"
        },
        {
          "label": "23:53",
          "score": 5,
          "metric": "LINK: R$ 62.08 (Z: +2.17σ)"
        },
        {
          "label": "00:13",
          "score": 5,
          "metric": "LINK: R$ 61.79 (Z: +2.01σ)"
        },
        {
          "label": "00:33",
          "score": 5,
          "metric": "LINK: R$ 61.81 (Z: +1.97σ)"
        },
        {
          "label": "00:53",
          "score": 5,
          "metric": "LINK: R$ 62.35 (Z: +2.15σ)"
        },
        {
          "label": "01:13",
          "score": 5,
          "metric": "LINK: R$ 62.63 (Z: +2.22σ)"
        },
        {
          "label": "01:33",
          "score": 5,
          "metric": "LINK: R$ 62.43 (Z: +2.09σ)"
        },
        {
          "label": "01:53",
          "score": 5,
          "metric": "LINK: R$ 62.03 (Z: +1.89σ)"
        },
        {
          "label": "02:13",
          "score": 5,
          "metric": "LINK: R$ 62.03 (Z: +1.86σ)"
        },
        {
          "label": "02:33",
          "score": 5,
          "metric": "LINK: R$ 62.46 (Z: +1.99σ)"
        },
        {
          "label": "02:53",
          "score": 5,
          "metric": "LINK: R$ 62.71 (Z: +2.04σ)"
        },
        {
          "label": "03:13",
          "score": 5,
          "metric": "LINK: R$ 63.00 (Z: +2.11σ)"
        },
        {
          "label": "03:33",
          "score": 5,
          "metric": "LINK: R$ 64.00 (Z: +2.42σ)"
        },
        {
          "label": "03:53",
          "score": 5,
          "metric": "LINK: R$ 64.00 (Z: +2.36σ)"
        },
        {
          "label": "04:13",
          "score": 5,
          "metric": "LINK: R$ 63.87 (Z: +2.26σ)"
        },
        {
          "label": "04:33",
          "score": 5,
          "metric": "LINK: R$ 63.69 (Z: +2.15σ)"
        },
        {
          "label": "04:53",
          "score": 5,
          "metric": "LINK: R$ 64.88 (Z: +2.51σ)"
        },
        {
          "label": "05:13",
          "score": 5,
          "metric": "LINK: R$ 58.46 (Z: +0.24σ)"
        },
        {
          "label": "05:33",
          "score": 5,
          "metric": "LINK: R$ 60.81 (Z: +1.04σ)"
        },
        {
          "label": "05:53",
          "score": 5,
          "metric": "LINK: R$ 61.00 (Z: +1.09σ)"
        },
        {
          "label": "06:13",
          "score": 5,
          "metric": "LINK: R$ 60.92 (Z: +1.05σ)"
        },
        {
          "label": "06:33",
          "score": 5,
          "metric": "LINK: R$ 60.92 (Z: +1.04σ)"
        },
        {
          "label": "06:53",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.24σ)"
        },
        {
          "label": "07:13",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.22σ)"
        },
        {
          "label": "07:33",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.21σ)"
        },
        {
          "label": "07:53",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.19σ)"
        },
        {
          "label": "08:13",
          "score": 5,
          "metric": "LINK: R$ 61.13 (Z: +1.04σ)"
        },
        {
          "label": "08:33",
          "score": 5,
          "metric": "LINK: R$ 60.26 (Z: +0.72σ)"
        },
        {
          "label": "08:53",
          "score": 5,
          "metric": "LINK: R$ 59.59 (Z: +0.48σ)"
        },
        {
          "label": "09:13",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.56σ)"
        },
        {
          "label": "09:33",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.55σ)"
        },
        {
          "label": "09:53",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.54σ)"
        },
        {
          "label": "10:13",
          "score": 5,
          "metric": "LINK: R$ 59.20 (Z: +0.30σ)"
        },
        {
          "label": "10:33",
          "score": 5,
          "metric": "LINK: R$ 58.98 (Z: +0.21σ)"
        },
        {
          "label": "10:53",
          "score": 5,
          "metric": "LINK: R$ 59.41 (Z: +0.35σ)"
        },
        {
          "label": "11:13",
          "score": 5,
          "metric": "LINK: R$ 59.68 (Z: +0.44σ)"
        },
        {
          "label": "11:33",
          "score": 5,
          "metric": "LINK: R$ 60.54 (Z: +0.75σ)"
        },
        {
          "label": "11:53",
          "score": 5,
          "metric": "LINK: R$ 60.37 (Z: +0.68σ)"
        },
        {
          "label": "12:13",
          "score": 5,
          "metric": "LINK: R$ 60.76 (Z: +0.81σ)"
        },
        {
          "label": "12:33",
          "score": 5,
          "metric": "LINK: R$ 60.76 (Z: +0.80σ)"
        },
        {
          "label": "12:53",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.93σ)"
        },
        {
          "label": "13:13",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.92σ)"
        },
        {
          "label": "13:33",
          "score": 5,
          "metric": "LINK: R$ 61.15 (Z: +0.91σ)"
        },
        {
          "label": "13:53",
          "score": 5,
          "metric": "LINK: R$ 60.84 (Z: +0.78σ)"
        },
        {
          "label": "14:13",
          "score": 5,
          "metric": "LINK: R$ 60.84 (Z: +0.77σ)"
        },
        {
          "label": "14:33",
          "score": 5,
          "metric": "LINK: R$ 60.47 (Z: +0.62σ)"
        },
        {
          "label": "14:53",
          "score": 5,
          "metric": "LINK: R$ 60.27 (Z: +0.54σ)"
        },
        {
          "label": "15:13",
          "score": 5,
          "metric": "LINK: R$ 59.84 (Z: +0.36σ)"
        },
        {
          "label": "15:33",
          "score": 5,
          "metric": "LINK: R$ 59.46 (Z: +0.21σ)"
        },
        {
          "label": "15:53",
          "score": 5,
          "metric": "LINK: R$ 59.83 (Z: +0.34σ)"
        },
        {
          "label": "16:13",
          "score": 5,
          "metric": "LINK: R$ 59.62 (Z: +0.25σ)"
        },
        {
          "label": "16:33",
          "score": 5,
          "metric": "LINK: R$ 60.20 (Z: +0.47σ)"
        },
        {
          "label": "16:53",
          "score": 5,
          "metric": "LINK: R$ 60.54 (Z: +0.59σ)"
        },
        {
          "label": "17:13",
          "score": 5,
          "metric": "LINK: R$ 60.49 (Z: +0.56σ)"
        },
        {
          "label": "17:33",
          "score": 5,
          "metric": "LINK: R$ 60.41 (Z: +0.52σ)"
        },
        {
          "label": "17:53",
          "score": 5,
          "metric": "LINK: R$ 60.70 (Z: +0.63σ)"
        },
        {
          "label": "18:13",
          "score": 5,
          "metric": "LINK: R$ 60.52 (Z: +0.54σ)"
        },
        {
          "label": "18:33",
          "score": 5,
          "metric": "LINK: R$ 60.60 (Z: +0.57σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.12σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.11σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.10σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 50.17 (Z: +1.66σ)"
        },
        {
          "label": "15/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 50.12 (Z: +1.48σ)"
        },
        {
          "label": "15/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 49.68 (Z: +1.11σ)"
        },
        {
          "label": "16/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 49.64 (Z: +1.01σ)"
        },
        {
          "label": "16/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 49.46 (Z: +0.83σ)"
        },
        {
          "label": "16/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 49.18 (Z: +0.61σ)"
        },
        {
          "label": "16/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 49.02 (Z: +0.46σ)"
        },
        {
          "label": "16/08 09:00",
          "score": 5,
          "metric": "LINK: R$ 49.39 (Z: +0.62σ)"
        },
        {
          "label": "16/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 49.52 (Z: +0.65σ)"
        },
        {
          "label": "16/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 49.04 (Z: +0.26σ)"
        },
        {
          "label": "16/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 49.09 (Z: +0.23σ)"
        },
        {
          "label": "16/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 49.39 (Z: +0.40σ)"
        },
        {
          "label": "16/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 49.30 (Z: +0.25σ)"
        },
        {
          "label": "16/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 49.48 (Z: +0.35σ)"
        },
        {
          "label": "16/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 49.21 (Z: -0.02σ)"
        },
        {
          "label": "17/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 50.05 (Z: +1.02σ)"
        },
        {
          "label": "17/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 50.20 (Z: +1.41σ)"
        },
        {
          "label": "17/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 49.74 (Z: +0.51σ)"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 49.47 (Z: +0.00σ)"
        },
        {
          "label": "17/08 09:00",
          "score": 19,
          "metric": "LINK: R$ 49.30 (Z: -0.37σ)"
        },
        {
          "label": "17/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 49.77 (Z: +0.71σ)"
        },
        {
          "label": "17/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 49.67 (Z: +0.39σ)"
        },
        {
          "label": "17/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 49.55 (Z: +0.01σ)"
        },
        {
          "label": "17/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 49.57 (Z: +0.06σ)"
        },
        {
          "label": "17/08 19:00",
          "score": 23,
          "metric": "LINK: R$ 49.37 (Z: -0.47σ)"
        },
        {
          "label": "17/08 21:00",
          "score": 13,
          "metric": "LINK: R$ 49.42 (Z: -0.27σ)"
        },
        {
          "label": "17/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 49.81 (Z: +1.01σ)"
        },
        {
          "label": "18/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 49.59 (Z: +0.42σ)"
        },
        {
          "label": "18/08 03:00",
          "score": 86,
          "metric": "LINK: R$ 48.95 (Z: -1.73σ)"
        },
        {
          "label": "18/08 05:00",
          "score": 10,
          "metric": "LINK: R$ 49.37 (Z: -0.20σ)"
        },
        {
          "label": "18/08 07:00",
          "score": 14,
          "metric": "LINK: R$ 49.34 (Z: -0.28σ)"
        },
        {
          "label": "18/08 09:00",
          "score": 13,
          "metric": "LINK: R$ 49.35 (Z: -0.26σ)"
        },
        {
          "label": "18/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 49.54 (Z: +0.37σ)"
        },
        {
          "label": "18/08 13:00",
          "score": 25,
          "metric": "LINK: R$ 49.30 (Z: -0.50σ)"
        },
        {
          "label": "18/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 49.70 (Z: +0.97σ)"
        },
        {
          "label": "18/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 49.44 (Z: -0.08σ)"
        },
        {
          "label": "18/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 49.78 (Z: +1.20σ)"
        },
        {
          "label": "18/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 49.79 (Z: +1.18σ)"
        },
        {
          "label": "18/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 49.99 (Z: +1.89σ)"
        },
        {
          "label": "19/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 49.87 (Z: +1.30σ)"
        },
        {
          "label": "19/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 50.64 (Z: +3.93σ)"
        },
        {
          "label": "19/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 50.38 (Z: +2.28σ)"
        },
        {
          "label": "19/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 50.51 (Z: +2.45σ)"
        },
        {
          "label": "19/08 09:00",
          "score": 5,
          "metric": "LINK: R$ 51.40 (Z: +3.74σ)"
        },
        {
          "label": "19/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 51.04 (Z: +2.42σ)"
        },
        {
          "label": "19/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 50.60 (Z: +1.41σ)"
        },
        {
          "label": "19/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 51.19 (Z: +2.30σ)"
        },
        {
          "label": "19/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 51.35 (Z: +2.13σ)"
        },
        {
          "label": "19/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 52.33 (Z: +3.00σ)"
        },
        {
          "label": "19/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 56.36 (Z: +5.39σ)"
        },
        {
          "label": "19/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 54.60 (Z: +2.76σ)"
        },
        {
          "label": "20/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 54.35 (Z: +2.17σ)"
        },
        {
          "label": "20/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 54.21 (Z: +1.83σ)"
        },
        {
          "label": "20/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 54.22 (Z: +1.65σ)"
        },
        {
          "label": "20/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 54.79 (Z: +1.76σ)"
        },
        {
          "label": "20/08 09:00",
          "score": 5,
          "metric": "LINK: R$ 55.38 (Z: +1.85σ)"
        },
        {
          "label": "20/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 55.60 (Z: +1.77σ)"
        },
        {
          "label": "20/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 54.85 (Z: +1.29σ)"
        },
        {
          "label": "20/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 55.51 (Z: +1.47σ)"
        },
        {
          "label": "20/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 56.16 (Z: +1.61σ)"
        },
        {
          "label": "20/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 55.31 (Z: +1.14σ)"
        },
        {
          "label": "20/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 55.00 (Z: +0.92σ)"
        },
        {
          "label": "20/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 55.74 (Z: +1.17σ)"
        },
        {
          "label": "21/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 55.91 (Z: +1.16σ)"
        },
        {
          "label": "21/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 57.19 (Z: +1.62σ)"
        },
        {
          "label": "21/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 56.83 (Z: +1.36σ)"
        },
        {
          "label": "21/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 60.79 (Z: +3.02σ)"
        },
        {
          "label": "21/08 09:00",
          "score": 5,
          "metric": "LINK: R$ 59.18 (Z: +1.99σ)"
        },
        {
          "label": "21/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 58.46 (Z: +1.52σ)"
        },
        {
          "label": "21/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 58.55 (Z: +1.43σ)"
        },
        {
          "label": "21/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 59.63 (Z: +1.77σ)"
        },
        {
          "label": "21/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 59.34 (Z: +1.56σ)"
        },
        {
          "label": "21/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 60.04 (Z: +1.77σ)"
        },
        {
          "label": "21/08 21:00",
          "score": 5,
          "metric": "LINK: R$ 62.07 (Z: +2.56σ)"
        },
        {
          "label": "21/08 23:00",
          "score": 5,
          "metric": "LINK: R$ 62.08 (Z: +2.21σ)"
        },
        {
          "label": "22/08 01:00",
          "score": 5,
          "metric": "LINK: R$ 62.32 (Z: +2.04σ)"
        },
        {
          "label": "22/08 03:00",
          "score": 5,
          "metric": "LINK: R$ 64.00 (Z: +2.41σ)"
        },
        {
          "label": "22/08 05:00",
          "score": 5,
          "metric": "LINK: R$ 60.81 (Z: +1.04σ)"
        },
        {
          "label": "22/08 07:00",
          "score": 5,
          "metric": "LINK: R$ 61.53 (Z: +1.20σ)"
        },
        {
          "label": "22/08 09:00",
          "score": 5,
          "metric": "LINK: R$ 59.85 (Z: +0.55σ)"
        },
        {
          "label": "22/08 11:00",
          "score": 5,
          "metric": "LINK: R$ 60.54 (Z: +0.75σ)"
        },
        {
          "label": "22/08 13:00",
          "score": 5,
          "metric": "LINK: R$ 60.83 (Z: +0.79σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "LINK: R$ 59.66 (Z: +0.28σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "LINK: R$ 60.41 (Z: +0.52σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.10σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 100,
          "metric": "LINK: R$ 43.24 (Z: -2.05σ)"
        },
        {
          "label": "24/07",
          "score": 70,
          "metric": "LINK: R$ 43.22 (Z: -1.40σ)"
        },
        {
          "label": "24/07",
          "score": 57,
          "metric": "LINK: R$ 43.21 (Z: -1.15σ)"
        },
        {
          "label": "24/07",
          "score": 95,
          "metric": "LINK: R$ 42.52 (Z: -1.90σ)"
        },
        {
          "label": "25/07",
          "score": 64,
          "metric": "LINK: R$ 42.57 (Z: -1.28σ)"
        },
        {
          "label": "25/07",
          "score": 60,
          "metric": "LINK: R$ 42.39 (Z: -1.20σ)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "LINK: R$ 42.92 (Z: +0.19σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.02 (Z: +0.71σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.11 (Z: +1.09σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "LINK: R$ 43.69 (Z: +2.05σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.65 (Z: +2.15σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.72 (Z: +1.36σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "LINK: R$ 44.25 (Z: +0.56σ)"
        },
        {
          "label": "28/07",
          "score": 78,
          "metric": "LINK: R$ 42.67 (Z: -1.56σ)"
        },
        {
          "label": "28/07",
          "score": 70,
          "metric": "LINK: R$ 42.65 (Z: -1.41σ)"
        },
        {
          "label": "28/07",
          "score": 44,
          "metric": "LINK: R$ 42.94 (Z: -0.88σ)"
        },
        {
          "label": "29/07",
          "score": 33,
          "metric": "LINK: R$ 43.01 (Z: -0.66σ)"
        },
        {
          "label": "29/07",
          "score": 14,
          "metric": "LINK: R$ 43.13 (Z: -0.29σ)"
        },
        {
          "label": "29/07",
          "score": 37,
          "metric": "LINK: R$ 42.69 (Z: -0.74σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 42.86 (Z: +0.03σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 43.16 (Z: +0.90σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "LINK: R$ 43.22 (Z: +0.84σ)"
        },
        {
          "label": "31/07",
          "score": 59,
          "metric": "LINK: R$ 42.54 (Z: -1.18σ)"
        },
        {
          "label": "31/07",
          "score": 90,
          "metric": "LINK: R$ 42.13 (Z: -1.79σ)"
        },
        {
          "label": "31/07",
          "score": 90,
          "metric": "LINK: R$ 41.61 (Z: -1.80σ)"
        },
        {
          "label": "01/08",
          "score": 48,
          "metric": "LINK: R$ 41.88 (Z: -0.95σ)"
        },
        {
          "label": "01/08",
          "score": 72,
          "metric": "LINK: R$ 41.33 (Z: -1.45σ)"
        },
        {
          "label": "01/08",
          "score": 86,
          "metric": "LINK: R$ 40.86 (Z: -1.71σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.37 (Z: +1.24σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.39 (Z: +1.24σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "LINK: R$ 42.61 (Z: +1.44σ)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "LINK: R$ 42.02 (Z: +0.07σ)"
        },
        {
          "label": "03/08",
          "score": 16,
          "metric": "LINK: R$ 41.81 (Z: -0.32σ)"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "LINK: R$ 42.06 (Z: -0.07σ)"
        },
        {
          "label": "04/08",
          "score": 73,
          "metric": "LINK: R$ 41.68 (Z: -1.47σ)"
        },
        {
          "label": "04/08",
          "score": 40,
          "metric": "LINK: R$ 41.80 (Z: -0.80σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "LINK: R$ 42.29 (Z: +0.71σ)"
        },
        {
          "label": "05/08",
          "score": 31,
          "metric": "LINK: R$ 41.80 (Z: -0.61σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "LINK: R$ 41.97 (Z: +0.25σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "LINK: R$ 42.23 (Z: +1.43σ)"
        },
        {
          "label": "06/08",
          "score": 48,
          "metric": "LINK: R$ 41.72 (Z: -0.95σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "LINK: R$ 42.00 (Z: +0.20σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "LINK: R$ 41.99 (Z: -0.04σ)"
        },
        {
          "label": "07/08",
          "score": 45,
          "metric": "LINK: R$ 41.81 (Z: -0.89σ)"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "LINK: R$ 42.05 (Z: +0.25σ)"
        },
        {
          "label": "07/08",
          "score": 30,
          "metric": "LINK: R$ 41.89 (Z: -0.59σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.11 (Z: +0.62σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.49 (Z: +1.91σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "LINK: R$ 42.53 (Z: +1.40σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.35 (Z: +0.55σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.41 (Z: +0.48σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "LINK: R$ 42.47 (Z: +0.51σ)"
        },
        {
          "label": "10/08",
          "score": 100,
          "metric": "LINK: R$ 41.81 (Z: -2.15σ)"
        },
        {
          "label": "10/08",
          "score": 8,
          "metric": "LINK: R$ 42.33 (Z: -0.16σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "LINK: R$ 42.42 (Z: +0.27σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 43.10 (Z: +2.23σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 44.55 (Z: +3.22σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "LINK: R$ 44.46 (Z: +1.80σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.17 (Z: +1.52σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.95 (Z: +1.71σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "LINK: R$ 45.29 (Z: +0.83σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.32 (Z: +0.69σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.19 (Z: +0.13σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "LINK: R$ 45.88 (Z: +1.52σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 45.97 (Z: +1.32σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 45.86 (Z: +0.82σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "LINK: R$ 46.86 (Z: +2.43σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 50.26 (Z: +3.88σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 48.78 (Z: +1.41σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "LINK: R$ 50.22 (Z: +1.64σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 49.49 (Z: +0.83σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 49.28 (Z: +0.47σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "LINK: R$ 49.45 (Z: +0.37σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "LINK: R$ 50.20 (Z: +1.45σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "LINK: R$ 49.78 (Z: +0.72σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "LINK: R$ 49.50 (Z: -0.09σ)"
        },
        {
          "label": "18/08",
          "score": 47,
          "metric": "LINK: R$ 49.17 (Z: -0.93σ)"
        },
        {
          "label": "18/08",
          "score": 17,
          "metric": "LINK: R$ 49.35 (Z: -0.34σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "LINK: R$ 49.67 (Z: +0.74σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 50.87 (Z: +4.31σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 51.04 (Z: +2.32σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "LINK: R$ 52.79 (Z: +3.35σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 54.23 (Z: +1.78σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 55.30 (Z: +1.59σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "LINK: R$ 55.31 (Z: +1.11σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 57.00 (Z: +1.50σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 58.45 (Z: +1.48σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "LINK: R$ 60.23 (Z: +1.83σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 63.87 (Z: +2.27σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 60.64 (Z: +0.77σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.10σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "LINK: R$ 147.13 (Z: +1.69σ)"
        },
        {
          "label": "26/08/25",
          "score": 11,
          "metric": "LINK: R$ 131.93 (Z: -0.22σ)"
        },
        {
          "label": "30/08/25",
          "score": 19,
          "metric": "LINK: R$ 127.83 (Z: -0.38σ)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "LINK: R$ 129.60 (Z: +1.27σ)"
        },
        {
          "label": "07/09/25",
          "score": 7,
          "metric": "LINK: R$ 121.12 (Z: -0.14σ)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "LINK: R$ 129.28 (Z: +1.53σ)"
        },
        {
          "label": "15/09/25",
          "score": 81,
          "metric": "LINK: R$ 124.39 (Z: -1.62σ)"
        },
        {
          "label": "19/09/25",
          "score": 69,
          "metric": "LINK: R$ 124.98 (Z: -1.37σ)"
        },
        {
          "label": "23/09/25",
          "score": 38,
          "metric": "LINK: R$ 114.21 (Z: -0.77σ)"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "LINK: R$ 111.93 (Z: +0.45σ)"
        },
        {
          "label": "01/10/25",
          "score": 5,
          "metric": "LINK: R$ 119.91 (Z: +2.08σ)"
        },
        {
          "label": "05/10/25",
          "score": 53,
          "metric": "LINK: R$ 117.74 (Z: -1.05σ)"
        },
        {
          "label": "09/10/25",
          "score": 41,
          "metric": "LINK: R$ 116.86 (Z: -0.82σ)"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "LINK: R$ 110.16 (Z: +1.34σ)"
        },
        {
          "label": "17/10/25",
          "score": 67,
          "metric": "LINK: R$ 89.75 (Z: -1.33σ)"
        },
        {
          "label": "21/10/25",
          "score": 22,
          "metric": "LINK: R$ 97.20 (Z: -0.43σ)"
        },
        {
          "label": "25/10/25",
          "score": 5,
          "metric": "LINK: R$ 97.65 (Z: +1.30σ)"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "LINK: R$ 98.74 (Z: +0.74σ)"
        },
        {
          "label": "02/11/25",
          "score": 40,
          "metric": "LINK: R$ 92.25 (Z: -0.81σ)"
        },
        {
          "label": "06/11/25",
          "score": 63,
          "metric": "LINK: R$ 78.06 (Z: -1.26σ)"
        },
        {
          "label": "10/11/25",
          "score": 5,
          "metric": "LINK: R$ 85.02 (Z: +0.14σ)"
        },
        {
          "label": "03/12/25",
          "score": 5,
          "metric": "LINK: R$ 76.46 (Z: +1.44σ)"
        },
        {
          "label": "07/12/25",
          "score": 64,
          "metric": "LINK: R$ 73.80 (Z: -1.28σ)"
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
          "metric": "LINK: R$ 46.20 (Z: +1.35σ)"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "LINK: R$ 44.38 (Z: +1.98σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "LINK: R$ 44.80 (Z: -0.08σ)"
        },
        {
          "label": "07/03/26",
          "score": 79,
          "metric": "LINK: R$ 46.26 (Z: -1.57σ)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "LINK: R$ 46.84 (Z: +0.95σ)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "LINK: R$ 51.38 (Z: +2.39σ)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "LINK: R$ 47.99 (Z: +0.46σ)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "LINK: R$ 48.79 (Z: +1.41σ)"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "LINK: R$ 45.62 (Z: +1.90σ)"
        },
        {
          "label": "03/04/26",
          "score": 6,
          "metric": "LINK: R$ 44.95 (Z: -0.12σ)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "LINK: R$ 47.51 (Z: +1.95σ)"
        },
        {
          "label": "12/04/26",
          "score": 100,
          "metric": "LINK: R$ 44.30 (Z: -2.09σ)"
        },
        {
          "label": "16/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.90 (Z: +1.68σ)"
        },
        {
          "label": "20/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.60 (Z: +1.40σ)"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.93 (Z: +0.91σ)"
        },
        {
          "label": "29/04/26",
          "score": 5,
          "metric": "LINK: R$ 46.70 (Z: +0.71σ)"
        },
        {
          "label": "03/05/26",
          "score": 5,
          "metric": "LINK: R$ 45.41 (Z: +0.16σ)"
        },
        {
          "label": "07/05/26",
          "score": 24,
          "metric": "LINK: R$ 48.61 (Z: -0.48σ)"
        },
        {
          "label": "13/05/26",
          "score": 43,
          "metric": "LINK: R$ 50.49 (Z: -0.87σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "LINK: R$ 48.12 (Z: -2.10σ)"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "LINK: R$ 49.19 (Z: +2.01σ)"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "LINK: R$ 47.95 (Z: +0.23σ)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "LINK: R$ 46.54 (Z: +1.84σ)"
        },
        {
          "label": "04/06/26",
          "score": 96,
          "metric": "LINK: R$ 40.90 (Z: -1.93σ)"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "LINK: R$ 40.84 (Z: +1.57σ)"
        },
        {
          "label": "12/06/26",
          "score": 5,
          "metric": "LINK: R$ 40.22 (Z: +0.32σ)"
        },
        {
          "label": "16/06/26",
          "score": 5,
          "metric": "LINK: R$ 42.10 (Z: +0.92σ)"
        },
        {
          "label": "20/06/26",
          "score": 10,
          "metric": "LINK: R$ 40.84 (Z: -0.20σ)"
        },
        {
          "label": "24/06/26",
          "score": 31,
          "metric": "LINK: R$ 39.87 (Z: -0.62σ)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "LINK: R$ 38.29 (Z: +0.12σ)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "LINK: R$ 39.00 (Z: +1.70σ)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "LINK: R$ 42.64 (Z: +1.67σ)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "LINK: R$ 40.62 (Z: +1.58σ)"
        },
        {
          "label": "14/07/26",
          "score": 13,
          "metric": "LINK: R$ 41.03 (Z: -0.27σ)"
        },
        {
          "label": "18/07/26",
          "score": 13,
          "metric": "LINK: R$ 42.60 (Z: -0.27σ)"
        },
        {
          "label": "22/07/26",
          "score": 5,
          "metric": "LINK: R$ 44.51 (Z: +1.20σ)"
        },
        {
          "label": "26/07/26",
          "score": 5,
          "metric": "LINK: R$ 42.88 (Z: +0.28σ)"
        },
        {
          "label": "30/07/26",
          "score": 5,
          "metric": "LINK: R$ 43.02 (Z: +0.51σ)"
        },
        {
          "label": "03/08/26",
          "score": 5,
          "metric": "LINK: R$ 42.37 (Z: +0.67σ)"
        },
        {
          "label": "07/08/26",
          "score": 5,
          "metric": "LINK: R$ 41.99 (Z: +0.00σ)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "LINK: R$ 43.35 (Z: +3.23σ)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "LINK: R$ 50.87 (Z: +5.36σ)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "LINK: R$ 50.32 (Z: +2.95σ)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "LINK: R$ 59.53 (Z: +0.10σ)"
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
    "valor_atual_str": "SOL/BTC = 0.00122 (Z: +1.98σ)",
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
          "label": "18:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.18σ)"
        },
        {
          "label": "18:34",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.18σ)"
        },
        {
          "label": "18:35",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.15σ)"
        },
        {
          "label": "18:36",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.15σ)"
        },
        {
          "label": "18:37",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.71σ)"
        },
        {
          "label": "18:38",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.69σ)"
        },
        {
          "label": "18:39",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.71σ)"
        },
        {
          "label": "18:40",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "18:41",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.67σ)"
        },
        {
          "label": "18:42",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.67σ)"
        },
        {
          "label": "18:43",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.67σ)"
        },
        {
          "label": "18:44",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.71σ)"
        },
        {
          "label": "18:45",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.72σ)"
        },
        {
          "label": "18:46",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.62σ)"
        },
        {
          "label": "18:47",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.58σ)"
        },
        {
          "label": "18:48",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.58σ)"
        },
        {
          "label": "18:49",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.66σ)"
        },
        {
          "label": "18:50",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.61σ)"
        },
        {
          "label": "18:51",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.51σ)"
        },
        {
          "label": "18:52",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.52σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.52σ)"
        },
        {
          "label": "18:54",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.54σ)"
        },
        {
          "label": "18:55",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.54σ)"
        },
        {
          "label": "18:56",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.59σ)"
        },
        {
          "label": "18:57",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.56σ)"
        },
        {
          "label": "18:58",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.58σ)"
        },
        {
          "label": "18:59",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.60σ)"
        },
        {
          "label": "19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.60σ)"
        },
        {
          "label": "19:01",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.64σ)"
        },
        {
          "label": "19:02",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.46σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.54σ)"
        },
        {
          "label": "19:04",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.43σ)"
        },
        {
          "label": "19:05",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.57σ)"
        },
        {
          "label": "19:06",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.67σ)"
        },
        {
          "label": "19:07",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.68σ)"
        },
        {
          "label": "19:08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.69σ)"
        },
        {
          "label": "19:09",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.73σ)"
        },
        {
          "label": "19:10",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.77σ)"
        },
        {
          "label": "19:11",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.75σ)"
        },
        {
          "label": "19:12",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.75σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.78σ)"
        },
        {
          "label": "19:14",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.80σ)"
        },
        {
          "label": "19:15",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.83σ)"
        },
        {
          "label": "19:16",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.80σ)"
        },
        {
          "label": "19:17",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.82σ)"
        },
        {
          "label": "19:18",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.86σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.84σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.88σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.92σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.93σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.96σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.87σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.92σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.95σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.95σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.97σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.03σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.01σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.03σ)"
        },
        {
          "label": "19:32",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.38σ)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.39σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.46σ)"
        },
        {
          "label": "20:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.59σ)"
        },
        {
          "label": "20:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.64σ)"
        },
        {
          "label": "21:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.70σ)"
        },
        {
          "label": "21:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.64σ)"
        },
        {
          "label": "21:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.06σ)"
        },
        {
          "label": "22:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.22σ)"
        },
        {
          "label": "22:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.18σ)"
        },
        {
          "label": "22:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.23σ)"
        },
        {
          "label": "23:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.20σ)"
        },
        {
          "label": "23:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.31σ)"
        },
        {
          "label": "23:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.18σ)"
        },
        {
          "label": "00:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.26σ)"
        },
        {
          "label": "00:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.28σ)"
        },
        {
          "label": "00:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.46σ)"
        },
        {
          "label": "01:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.48σ)"
        },
        {
          "label": "01:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.68σ)"
        },
        {
          "label": "01:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.48σ)"
        },
        {
          "label": "02:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.64σ)"
        },
        {
          "label": "02:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.89σ)"
        },
        {
          "label": "02:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.04σ)"
        },
        {
          "label": "03:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.42σ)"
        },
        {
          "label": "03:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.79σ)"
        },
        {
          "label": "03:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +2.97σ)"
        },
        {
          "label": "04:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +3.04σ)"
        },
        {
          "label": "04:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00126 (Z: +4.06σ)"
        },
        {
          "label": "04:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +4.57σ)"
        },
        {
          "label": "05:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.69σ)"
        },
        {
          "label": "05:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        },
        {
          "label": "05:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.14σ)"
        },
        {
          "label": "06:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.90σ)"
        },
        {
          "label": "06:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.75σ)"
        },
        {
          "label": "06:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        },
        {
          "label": "07:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.13σ)"
        },
        {
          "label": "07:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.65σ)"
        },
        {
          "label": "07:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.29σ)"
        },
        {
          "label": "08:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.43σ)"
        },
        {
          "label": "08:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.67σ)"
        },
        {
          "label": "08:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.91σ)"
        },
        {
          "label": "09:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.94σ)"
        },
        {
          "label": "09:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.21σ)"
        },
        {
          "label": "09:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.09σ)"
        },
        {
          "label": "10:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.30σ)"
        },
        {
          "label": "10:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.35σ)"
        },
        {
          "label": "10:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.56σ)"
        },
        {
          "label": "11:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.59σ)"
        },
        {
          "label": "11:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.66σ)"
        },
        {
          "label": "11:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.65σ)"
        },
        {
          "label": "12:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.86σ)"
        },
        {
          "label": "12:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.96σ)"
        },
        {
          "label": "12:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.97σ)"
        },
        {
          "label": "13:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.93σ)"
        },
        {
          "label": "13:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.92σ)"
        },
        {
          "label": "13:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.00σ)"
        },
        {
          "label": "14:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.05σ)"
        },
        {
          "label": "14:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "14:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "15:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.65σ)"
        },
        {
          "label": "15:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.79σ)"
        },
        {
          "label": "15:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.63σ)"
        },
        {
          "label": "16:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.71σ)"
        },
        {
          "label": "16:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.00σ)"
        },
        {
          "label": "16:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "17:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.03σ)"
        },
        {
          "label": "17:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.08σ)"
        },
        {
          "label": "17:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.20σ)"
        },
        {
          "label": "18:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.01σ)"
        },
        {
          "label": "18:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.18σ)"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.52σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.78σ)"
        },
        {
          "label": "19:33",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.60σ)"
        },
        {
          "label": "15/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.64σ)"
        },
        {
          "label": "15/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.43σ)"
        },
        {
          "label": "16/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.46σ)"
        },
        {
          "label": "16/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.60σ)"
        },
        {
          "label": "16/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.50σ)"
        },
        {
          "label": "16/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.53σ)"
        },
        {
          "label": "16/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "16/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.45σ)"
        },
        {
          "label": "16/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.45σ)"
        },
        {
          "label": "16/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.51σ)"
        },
        {
          "label": "16/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.38σ)"
        },
        {
          "label": "16/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.23σ)"
        },
        {
          "label": "16/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.12σ)"
        },
        {
          "label": "16/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.90σ)"
        },
        {
          "label": "17/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.15σ)"
        },
        {
          "label": "17/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.20σ)"
        },
        {
          "label": "17/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.10σ)"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.31σ)"
        },
        {
          "label": "17/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.11σ)"
        },
        {
          "label": "17/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.17σ)"
        },
        {
          "label": "17/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.96σ)"
        },
        {
          "label": "17/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.84σ)"
        },
        {
          "label": "17/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.68σ)"
        },
        {
          "label": "17/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.45σ)"
        },
        {
          "label": "17/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.56σ)"
        },
        {
          "label": "17/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.50σ)"
        },
        {
          "label": "18/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.56σ)"
        },
        {
          "label": "18/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.34σ)"
        },
        {
          "label": "18/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.53σ)"
        },
        {
          "label": "18/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.76σ)"
        },
        {
          "label": "18/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.77σ)"
        },
        {
          "label": "18/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.90σ)"
        },
        {
          "label": "18/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.91σ)"
        },
        {
          "label": "18/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.03σ)"
        },
        {
          "label": "18/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.00σ)"
        },
        {
          "label": "18/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.25σ)"
        },
        {
          "label": "18/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.15σ)"
        },
        {
          "label": "18/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.17σ)"
        },
        {
          "label": "19/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.12σ)"
        },
        {
          "label": "19/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.39σ)"
        },
        {
          "label": "19/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.33σ)"
        },
        {
          "label": "19/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.38σ)"
        },
        {
          "label": "19/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.56σ)"
        },
        {
          "label": "19/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.67σ)"
        },
        {
          "label": "19/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.99σ)"
        },
        {
          "label": "19/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.67σ)"
        },
        {
          "label": "19/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.21σ)"
        },
        {
          "label": "19/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.83σ)"
        },
        {
          "label": "19/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +3.79σ)"
        },
        {
          "label": "19/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +3.07σ)"
        },
        {
          "label": "20/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.55σ)"
        },
        {
          "label": "20/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.54σ)"
        },
        {
          "label": "20/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.54σ)"
        },
        {
          "label": "20/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +3.15σ)"
        },
        {
          "label": "20/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.21σ)"
        },
        {
          "label": "20/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.23σ)"
        },
        {
          "label": "20/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.98σ)"
        },
        {
          "label": "20/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.42σ)"
        },
        {
          "label": "20/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.56σ)"
        },
        {
          "label": "20/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.40σ)"
        },
        {
          "label": "20/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "20/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.30σ)"
        },
        {
          "label": "21/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.62σ)"
        },
        {
          "label": "21/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.29σ)"
        },
        {
          "label": "21/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.11σ)"
        },
        {
          "label": "21/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.42σ)"
        },
        {
          "label": "21/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: +0.17σ)"
        },
        {
          "label": "21/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.26σ)"
        },
        {
          "label": "21/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.36σ)"
        },
        {
          "label": "21/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.37σ)"
        },
        {
          "label": "21/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.59σ)"
        },
        {
          "label": "21/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.35σ)"
        },
        {
          "label": "21/08 21:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.68σ)"
        },
        {
          "label": "21/08 23:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.32σ)"
        },
        {
          "label": "22/08 01:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.68σ)"
        },
        {
          "label": "22/08 03:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.80σ)"
        },
        {
          "label": "22/08 05:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.99σ)"
        },
        {
          "label": "22/08 07:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00123 (Z: +2.44σ)"
        },
        {
          "label": "22/08 09:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.22σ)"
        },
        {
          "label": "22/08 11:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.73σ)"
        },
        {
          "label": "22/08 13:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.89σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.73σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.11σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 51,
          "metric": "SOL/BTC: 0.00117 (Z: -0.89σ)"
        },
        {
          "label": "24/07",
          "score": 59,
          "metric": "SOL/BTC: 0.00116 (Z: -1.03σ)"
        },
        {
          "label": "24/07",
          "score": 66,
          "metric": "SOL/BTC: 0.00116 (Z: -1.16σ)"
        },
        {
          "label": "24/07",
          "score": 73,
          "metric": "SOL/BTC: 0.00115 (Z: -1.28σ)"
        },
        {
          "label": "25/07",
          "score": 68,
          "metric": "SOL/BTC: 0.00116 (Z: -1.18σ)"
        },
        {
          "label": "25/07",
          "score": 74,
          "metric": "SOL/BTC: 0.00115 (Z: -1.30σ)"
        },
        {
          "label": "25/07",
          "score": 70,
          "metric": "SOL/BTC: 0.00116 (Z: -1.22σ)"
        },
        {
          "label": "26/07",
          "score": 68,
          "metric": "SOL/BTC: 0.00116 (Z: -1.20σ)"
        },
        {
          "label": "26/07",
          "score": 65,
          "metric": "SOL/BTC: 0.00116 (Z: -1.14σ)"
        },
        {
          "label": "26/07",
          "score": 66,
          "metric": "SOL/BTC: 0.00116 (Z: -1.16σ)"
        },
        {
          "label": "27/07",
          "score": 57,
          "metric": "SOL/BTC: 0.00117 (Z: -0.99σ)"
        },
        {
          "label": "27/07",
          "score": 50,
          "metric": "SOL/BTC: 0.00118 (Z: -0.88σ)"
        },
        {
          "label": "27/07",
          "score": 59,
          "metric": "SOL/BTC: 0.00117 (Z: -1.04σ)"
        },
        {
          "label": "28/07",
          "score": 70,
          "metric": "SOL/BTC: 0.00116 (Z: -1.23σ)"
        },
        {
          "label": "28/07",
          "score": 74,
          "metric": "SOL/BTC: 0.00115 (Z: -1.29σ)"
        },
        {
          "label": "28/07",
          "score": 62,
          "metric": "SOL/BTC: 0.00116 (Z: -1.08σ)"
        },
        {
          "label": "29/07",
          "score": 77,
          "metric": "SOL/BTC: 0.00115 (Z: -1.35σ)"
        },
        {
          "label": "29/07",
          "score": 77,
          "metric": "SOL/BTC: 0.00115 (Z: -1.35σ)"
        },
        {
          "label": "29/07",
          "score": 76,
          "metric": "SOL/BTC: 0.00115 (Z: -1.33σ)"
        },
        {
          "label": "30/07",
          "score": 72,
          "metric": "SOL/BTC: 0.00115 (Z: -1.25σ)"
        },
        {
          "label": "30/07",
          "score": 73,
          "metric": "SOL/BTC: 0.00115 (Z: -1.27σ)"
        },
        {
          "label": "30/07",
          "score": 66,
          "metric": "SOL/BTC: 0.00115 (Z: -1.16σ)"
        },
        {
          "label": "31/07",
          "score": 65,
          "metric": "SOL/BTC: 0.00115 (Z: -1.13σ)"
        },
        {
          "label": "31/07",
          "score": 63,
          "metric": "SOL/BTC: 0.00115 (Z: -1.11σ)"
        },
        {
          "label": "31/07",
          "score": 53,
          "metric": "SOL/BTC: 0.00116 (Z: -0.93σ)"
        },
        {
          "label": "01/08",
          "score": 54,
          "metric": "SOL/BTC: 0.00116 (Z: -0.94σ)"
        },
        {
          "label": "01/08",
          "score": 56,
          "metric": "SOL/BTC: 0.00116 (Z: -0.98σ)"
        },
        {
          "label": "01/08",
          "score": 73,
          "metric": "SOL/BTC: 0.00114 (Z: -1.28σ)"
        },
        {
          "label": "02/08",
          "score": 57,
          "metric": "SOL/BTC: 0.00115 (Z: -0.99σ)"
        },
        {
          "label": "02/08",
          "score": 51,
          "metric": "SOL/BTC: 0.00116 (Z: -0.88σ)"
        },
        {
          "label": "02/08",
          "score": 45,
          "metric": "SOL/BTC: 0.00116 (Z: -0.79σ)"
        },
        {
          "label": "03/08",
          "score": 50,
          "metric": "SOL/BTC: 0.00116 (Z: -0.87σ)"
        },
        {
          "label": "03/08",
          "score": 49,
          "metric": "SOL/BTC: 0.00116 (Z: -0.86σ)"
        },
        {
          "label": "03/08",
          "score": 48,
          "metric": "SOL/BTC: 0.00116 (Z: -0.84σ)"
        },
        {
          "label": "04/08",
          "score": 52,
          "metric": "SOL/BTC: 0.00115 (Z: -0.91σ)"
        },
        {
          "label": "04/08",
          "score": 50,
          "metric": "SOL/BTC: 0.00116 (Z: -0.88σ)"
        },
        {
          "label": "04/08",
          "score": 53,
          "metric": "SOL/BTC: 0.00115 (Z: -0.92σ)"
        },
        {
          "label": "05/08",
          "score": 57,
          "metric": "SOL/BTC: 0.00115 (Z: -1.00σ)"
        },
        {
          "label": "05/08",
          "score": 56,
          "metric": "SOL/BTC: 0.00115 (Z: -0.98σ)"
        },
        {
          "label": "05/08",
          "score": 61,
          "metric": "SOL/BTC: 0.00115 (Z: -1.06σ)"
        },
        {
          "label": "06/08",
          "score": 76,
          "metric": "SOL/BTC: 0.00114 (Z: -1.33σ)"
        },
        {
          "label": "06/08",
          "score": 80,
          "metric": "SOL/BTC: 0.00114 (Z: -1.41σ)"
        },
        {
          "label": "06/08",
          "score": 96,
          "metric": "SOL/BTC: 0.00113 (Z: -1.68σ)"
        },
        {
          "label": "07/08",
          "score": 96,
          "metric": "SOL/BTC: 0.00113 (Z: -1.69σ)"
        },
        {
          "label": "07/08",
          "score": 92,
          "metric": "SOL/BTC: 0.00113 (Z: -1.61σ)"
        },
        {
          "label": "07/08",
          "score": 81,
          "metric": "SOL/BTC: 0.00114 (Z: -1.41σ)"
        },
        {
          "label": "08/08",
          "score": 55,
          "metric": "SOL/BTC: 0.00115 (Z: -0.96σ)"
        },
        {
          "label": "08/08",
          "score": 21,
          "metric": "SOL/BTC: 0.00116 (Z: -0.37σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: -0.06σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00117 (Z: +0.10σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.32σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.70σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.43σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.65σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.00σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.90σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.79σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.17σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.53σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.54σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.47σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.69σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.38σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.93σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.58σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.86σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.39σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.53σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.47σ)"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.59σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.60σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.40σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.31σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.12σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.97σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.46σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.53σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.98σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.28σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.43σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.65σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.60σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +2.51σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.91σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.44σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +1.01σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.18σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +0.44σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +2.98σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00121 (Z: +1.75σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
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
          "metric": "SOL/BTC: 0.00177 (Z: +1.87σ)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00185 (Z: +1.64σ)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00187 (Z: +1.41σ)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00182 (Z: +0.80σ)"
        },
        {
          "label": "11/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00198 (Z: +1.65σ)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00202 (Z: +1.29σ)"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "SOL/BTC: 0.00205 (Z: +1.18σ)"
        },
        {
          "label": "23/09/25",
          "score": 12,
          "metric": "SOL/BTC: 0.00192 (Z: -0.20σ)"
        },
        {
          "label": "27/09/25",
          "score": 52,
          "metric": "SOL/BTC: 0.00185 (Z: -0.91σ)"
        },
        {
          "label": "01/10/25",
          "score": 37,
          "metric": "SOL/BTC: 0.00187 (Z: -0.65σ)"
        },
        {
          "label": "05/10/25",
          "score": 50,
          "metric": "SOL/BTC: 0.00186 (Z: -0.87σ)"
        },
        {
          "label": "09/10/25",
          "score": 77,
          "metric": "SOL/BTC: 0.00180 (Z: -1.34σ)"
        },
        {
          "label": "13/10/25",
          "score": 47,
          "metric": "SOL/BTC: 0.00180 (Z: -0.81σ)"
        },
        {
          "label": "17/10/25",
          "score": 70,
          "metric": "SOL/BTC: 0.00172 (Z: -1.22σ)"
        },
        {
          "label": "21/10/25",
          "score": 56,
          "metric": "SOL/BTC: 0.00173 (Z: -0.99σ)"
        },
        {
          "label": "25/10/25",
          "score": 33,
          "metric": "SOL/BTC: 0.00174 (Z: -0.58σ)"
        },
        {
          "label": "29/10/25",
          "score": 15,
          "metric": "SOL/BTC: 0.00175 (Z: -0.27σ)"
        },
        {
          "label": "02/11/25",
          "score": 63,
          "metric": "SOL/BTC: 0.00168 (Z: -1.10σ)"
        },
        {
          "label": "06/11/25",
          "score": 100,
          "metric": "SOL/BTC: 0.00154 (Z: -2.24σ)"
        },
        {
          "label": "10/11/25",
          "score": 77,
          "metric": "SOL/BTC: 0.00157 (Z: -1.35σ)"
        },
        {
          "label": "03/12/25",
          "score": 76,
          "metric": "SOL/BTC: 0.00153 (Z: -1.33σ)"
        },
        {
          "label": "07/12/25",
          "score": 88,
          "metric": "SOL/BTC: 0.00147 (Z: -1.54σ)"
        },
        {
          "label": "18/01/26",
          "score": 55,
          "metric": "SOL/BTC: 0.00149 (Z: -0.97σ)"
        },
        {
          "label": "22/01/26",
          "score": 68,
          "metric": "SOL/BTC: 0.00144 (Z: -1.19σ)"
        },
        {
          "label": "28/01/26",
          "score": 66,
          "metric": "SOL/BTC: 0.00143 (Z: -1.16σ)"
        },
        {
          "label": "01/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00131 (Z: -2.62σ)"
        },
        {
          "label": "06/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00123 (Z: -2.59σ)"
        },
        {
          "label": "10/02/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00120 (Z: -2.05σ)"
        },
        {
          "label": "16/02/26",
          "score": 63,
          "metric": "SOL/BTC: 0.00125 (Z: -1.09σ)"
        },
        {
          "label": "21/02/26",
          "score": 49,
          "metric": "SOL/BTC: 0.00125 (Z: -0.85σ)"
        },
        {
          "label": "25/02/26",
          "score": 21,
          "metric": "SOL/BTC: 0.00127 (Z: -0.36σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: -0.07σ)"
        },
        {
          "label": "07/03/26",
          "score": 15,
          "metric": "SOL/BTC: 0.00124 (Z: -0.26σ)"
        },
        {
          "label": "11/03/26",
          "score": 6,
          "metric": "SOL/BTC: 0.00124 (Z: -0.10σ)"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +1.22σ)"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00127 (Z: +0.93σ)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00130 (Z: +2.22σ)"
        },
        {
          "label": "30/03/26",
          "score": 36,
          "metric": "SOL/BTC: 0.00124 (Z: -0.63σ)"
        },
        {
          "label": "03/04/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00120 (Z: -1.94σ)"
        },
        {
          "label": "08/04/26",
          "score": 94,
          "metric": "SOL/BTC: 0.00119 (Z: -1.64σ)"
        },
        {
          "label": "12/04/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00115 (Z: -1.93σ)"
        },
        {
          "label": "16/04/26",
          "score": 68,
          "metric": "SOL/BTC: 0.00116 (Z: -1.19σ)"
        },
        {
          "label": "20/04/26",
          "score": 80,
          "metric": "SOL/BTC: 0.00113 (Z: -1.40σ)"
        },
        {
          "label": "24/04/26",
          "score": 74,
          "metric": "SOL/BTC: 0.00111 (Z: -1.30σ)"
        },
        {
          "label": "29/04/26",
          "score": 82,
          "metric": "SOL/BTC: 0.00110 (Z: -1.44σ)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00107 (Z: -1.83σ)"
        },
        {
          "label": "07/05/26",
          "score": 32,
          "metric": "SOL/BTC: 0.00110 (Z: -0.57σ)"
        },
        {
          "label": "13/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00114 (Z: +0.63σ)"
        },
        {
          "label": "17/05/26",
          "score": 25,
          "metric": "SOL/BTC: 0.00110 (Z: -0.44σ)"
        },
        {
          "label": "22/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.31σ)"
        },
        {
          "label": "26/05/26",
          "score": 12,
          "metric": "SOL/BTC: 0.00110 (Z: -0.21σ)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.25σ)"
        },
        {
          "label": "04/06/26",
          "score": 11,
          "metric": "SOL/BTC: 0.00111 (Z: -0.18σ)"
        },
        {
          "label": "08/06/26",
          "score": 100,
          "metric": "SOL/BTC: 0.00104 (Z: -2.01σ)"
        },
        {
          "label": "12/06/26",
          "score": 79,
          "metric": "SOL/BTC: 0.00105 (Z: -1.39σ)"
        },
        {
          "label": "16/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.82σ)"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00110 (Z: +0.21σ)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00112 (Z: +0.64σ)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00118 (Z: +1.87σ)"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00130 (Z: +2.86σ)"
        },
        {
          "label": "06/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00128 (Z: +1.53σ)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00124 (Z: +0.73σ)"
        },
        {
          "label": "14/07/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +0.14σ)"
        },
        {
          "label": "18/07/26",
          "score": 24,
          "metric": "SOL/BTC: 0.00118 (Z: -0.42σ)"
        },
        {
          "label": "22/07/26",
          "score": 31,
          "metric": "SOL/BTC: 0.00118 (Z: -0.55σ)"
        },
        {
          "label": "26/07/26",
          "score": 68,
          "metric": "SOL/BTC: 0.00116 (Z: -1.19σ)"
        },
        {
          "label": "30/07/26",
          "score": 70,
          "metric": "SOL/BTC: 0.00115 (Z: -1.22σ)"
        },
        {
          "label": "03/08/26",
          "score": 50,
          "metric": "SOL/BTC: 0.00116 (Z: -0.87σ)"
        },
        {
          "label": "07/08/26",
          "score": 98,
          "metric": "SOL/BTC: 0.00113 (Z: -1.72σ)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00119 (Z: +0.99σ)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.72σ)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00120 (Z: +1.37σ)"
        },
        {
          "label": "22/08/26",
          "score": 5,
          "metric": "SOL/BTC: 0.00122 (Z: +1.98σ)"
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
    "valor_atual_str": "SOL R$ 483.00 (Z_15m: -1.79σ)",
    "alvo_str": "Preço <= R$ 482.89",
    "distancia_display": "+0.0% para banda inferior",
    "proximidade_score": 90,
    "status": "AGUARDANDO_CORRECAO_15M",
    "icone": "⚡",
    "cor": "#F59E0B",
    "descricao_executiva": "Sniper de alta frequência na Solana. Monitora o canal dinâmico de Bollinger no timeframe intradiário de 15 minutos, disparando compras rápidas no toque da banda inferior com liquidação em repique de média.",
    "condicoes_ativacao": "• Preço da SOL toca ou perfura a banda inferior de Bollinger (20 períodos, 2.0 desvios) em 15m.<br>• Vetor de aceleração cinética (d²P/dt²) indica exaustão vendedora.",
    "limitacoes_trava": "• <b>Weekend Shield:</b> Desativado aos finais de semana para anular falsos rompimentos.<br>• <b>Trava Wavelet Ew < 50:</b> Exige desaceleração de choque.",
    "series_historica": {
      "1h": [
        {
          "label": "18:33",
          "score": 5,
          "metric": "SOL 15m: R$ 487.60 (Z: +0.72σ)"
        },
        {
          "label": "18:34",
          "score": 5,
          "metric": "SOL 15m: R$ 487.80 (Z: +1.16σ)"
        },
        {
          "label": "18:35",
          "score": 5,
          "metric": "SOL 15m: R$ 487.40 (Z: -0.10σ)"
        },
        {
          "label": "18:36",
          "score": 40,
          "metric": "SOL 15m: R$ 487.20 (Z: -0.80σ)"
        },
        {
          "label": "18:37",
          "score": 100,
          "metric": "SOL 15m: R$ 481.50 (Z: -3.56σ)"
        },
        {
          "label": "18:38",
          "score": 100,
          "metric": "SOL 15m: R$ 481.50 (Z: -2.44σ)"
        },
        {
          "label": "18:39",
          "score": 97,
          "metric": "SOL 15m: R$ 481.40 (Z: -1.95σ)"
        },
        {
          "label": "18:40",
          "score": 92,
          "metric": "SOL 15m: R$ 480.50 (Z: -1.84σ)"
        },
        {
          "label": "18:41",
          "score": 73,
          "metric": "SOL 15m: R$ 480.80 (Z: -1.47σ)"
        },
        {
          "label": "18:42",
          "score": 66,
          "metric": "SOL 15m: R$ 480.60 (Z: -1.32σ)"
        },
        {
          "label": "18:43",
          "score": 56,
          "metric": "SOL 15m: R$ 480.70 (Z: -1.12σ)"
        },
        {
          "label": "18:44",
          "score": 37,
          "metric": "SOL 15m: R$ 481.60 (Z: -0.74σ)"
        },
        {
          "label": "18:45",
          "score": 33,
          "metric": "SOL 15m: R$ 481.50 (Z: -0.66σ)"
        },
        {
          "label": "18:46",
          "score": 47,
          "metric": "SOL 15m: R$ 480.20 (Z: -0.94σ)"
        },
        {
          "label": "18:47",
          "score": 46,
          "metric": "SOL 15m: R$ 479.90 (Z: -0.91σ)"
        },
        {
          "label": "18:48",
          "score": 40,
          "metric": "SOL 15m: R$ 479.90 (Z: -0.81σ)"
        },
        {
          "label": "18:49",
          "score": 21,
          "metric": "SOL 15m: R$ 480.70 (Z: -0.42σ)"
        },
        {
          "label": "18:50",
          "score": 29,
          "metric": "SOL 15m: R$ 480.20 (Z: -0.58σ)"
        },
        {
          "label": "18:51",
          "score": 100,
          "metric": "SOL 15m: R$ 479.20 (Z: -2.05σ)"
        },
        {
          "label": "18:52",
          "score": 81,
          "metric": "SOL 15m: R$ 479.30 (Z: -1.61σ)"
        },
        {
          "label": "18:53",
          "score": 70,
          "metric": "SOL 15m: R$ 479.30 (Z: -1.40σ)"
        },
        {
          "label": "18:54",
          "score": 56,
          "metric": "SOL 15m: R$ 479.40 (Z: -1.12σ)"
        },
        {
          "label": "18:55",
          "score": 49,
          "metric": "SOL 15m: R$ 479.40 (Z: -0.99σ)"
        },
        {
          "label": "18:56",
          "score": 43,
          "metric": "SOL 15m: R$ 479.40 (Z: -0.86σ)"
        },
        {
          "label": "18:57",
          "score": 38,
          "metric": "SOL 15m: R$ 479.40 (Z: -0.76σ)"
        },
        {
          "label": "18:58",
          "score": 21,
          "metric": "SOL 15m: R$ 479.60 (Z: -0.43σ)"
        },
        {
          "label": "18:59",
          "score": 16,
          "metric": "SOL 15m: R$ 479.60 (Z: -0.32σ)"
        },
        {
          "label": "19:00",
          "score": 5,
          "metric": "SOL 15m: R$ 479.70 (Z: +0.05σ)"
        },
        {
          "label": "19:01",
          "score": 5,
          "metric": "SOL 15m: R$ 480.00 (Z: +0.81σ)"
        },
        {
          "label": "19:02",
          "score": 100,
          "metric": "SOL 15m: R$ 477.90 (Z: -2.69σ)"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "SOL 15m: R$ 479.60 (Z: +0.14σ)"
        },
        {
          "label": "19:04",
          "score": 71,
          "metric": "SOL 15m: R$ 478.60 (Z: -1.42σ)"
        },
        {
          "label": "19:05",
          "score": 5,
          "metric": "SOL 15m: R$ 480.60 (Z: +2.02σ)"
        },
        {
          "label": "19:06",
          "score": 5,
          "metric": "SOL 15m: R$ 481.40 (Z: +2.37σ)"
        },
        {
          "label": "19:07",
          "score": 5,
          "metric": "SOL 15m: R$ 481.50 (Z: +1.95σ)"
        },
        {
          "label": "19:08",
          "score": 5,
          "metric": "SOL 15m: R$ 482.00 (Z: +1.95σ)"
        },
        {
          "label": "19:09",
          "score": 5,
          "metric": "SOL 15m: R$ 482.20 (Z: +1.73σ)"
        },
        {
          "label": "19:10",
          "score": 5,
          "metric": "SOL 15m: R$ 482.40 (Z: +1.58σ)"
        },
        {
          "label": "19:11",
          "score": 5,
          "metric": "SOL 15m: R$ 482.20 (Z: +1.23σ)"
        },
        {
          "label": "19:12",
          "score": 5,
          "metric": "SOL 15m: R$ 482.30 (Z: +1.13σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "SOL 15m: R$ 482.40 (Z: +1.05σ)"
        },
        {
          "label": "19:14",
          "score": 5,
          "metric": "SOL 15m: R$ 482.70 (Z: +1.09σ)"
        },
        {
          "label": "19:15",
          "score": 5,
          "metric": "SOL 15m: R$ 482.90 (Z: +1.06σ)"
        },
        {
          "label": "19:16",
          "score": 5,
          "metric": "SOL 15m: R$ 482.90 (Z: +0.93σ)"
        },
        {
          "label": "19:17",
          "score": 5,
          "metric": "SOL 15m: R$ 482.90 (Z: +0.89σ)"
        },
        {
          "label": "19:18",
          "score": 5,
          "metric": "SOL 15m: R$ 483.20 (Z: +1.02σ)"
        },
        {
          "label": "19:19",
          "score": 5,
          "metric": "SOL 15m: R$ 482.80 (Z: +0.73σ)"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "SOL 15m: R$ 483.70 (Z: +1.96σ)"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "SOL 15m: R$ 484.00 (Z: +2.06σ)"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "SOL 15m: R$ 483.80 (Z: +1.57σ)"
        },
        {
          "label": "19:23",
          "score": 5,
          "metric": "SOL 15m: R$ 483.80 (Z: +1.37σ)"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "SOL 15m: R$ 483.60 (Z: +0.92σ)"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "SOL 15m: R$ 484.20 (Z: +1.61σ)"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "SOL 15m: R$ 484.20 (Z: +1.41σ)"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "SOL 15m: R$ 484.30 (Z: +1.39σ)"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "SOL 15m: R$ 484.20 (Z: +1.11σ)"
        },
        {
          "label": "19:29",
          "score": 5,
          "metric": "SOL 15m: R$ 484.60 (Z: +1.55σ)"
        },
        {
          "label": "19:30",
          "score": 5,
          "metric": "SOL 15m: R$ 484.40 (Z: +1.07σ)"
        },
        {
          "label": "19:31",
          "score": 5,
          "metric": "SOL 15m: R$ 484.40 (Z: +0.95σ)"
        },
        {
          "label": "19:32",
          "score": 23,
          "metric": "SOL 15m: R$ 483.70 (Z: -0.47σ)"
        },
        {
          "label": "19:33",
          "score": 90,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.79σ)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 34,
          "metric": "SOL 15m: R$ 469.50 (Z: -0.67σ)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "SOL 15m: R$ 468.80 (Z: +0.21σ)"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "SOL 15m: R$ 470.90 (Z: +1.35σ)"
        },
        {
          "label": "20:33",
          "score": 5,
          "metric": "SOL 15m: R$ 473.50 (Z: +0.53σ)"
        },
        {
          "label": "20:53",
          "score": 5,
          "metric": "SOL 15m: R$ 473.60 (Z: +0.49σ)"
        },
        {
          "label": "21:13",
          "score": 5,
          "metric": "SOL 15m: R$ 475.40 (Z: +1.63σ)"
        },
        {
          "label": "21:33",
          "score": 5,
          "metric": "SOL 15m: R$ 479.40 (Z: +0.91σ)"
        },
        {
          "label": "21:53",
          "score": 5,
          "metric": "SOL 15m: R$ 483.90 (Z: +1.40σ)"
        },
        {
          "label": "22:13",
          "score": 5,
          "metric": "SOL 15m: R$ 487.20 (Z: +1.17σ)"
        },
        {
          "label": "22:33",
          "score": 18,
          "metric": "SOL 15m: R$ 484.90 (Z: -0.35σ)"
        },
        {
          "label": "22:53",
          "score": 5,
          "metric": "SOL 15m: R$ 486.30 (Z: +0.05σ)"
        },
        {
          "label": "23:13",
          "score": 73,
          "metric": "SOL 15m: R$ 485.80 (Z: -1.45σ)"
        },
        {
          "label": "23:33",
          "score": 81,
          "metric": "SOL 15m: R$ 486.40 (Z: -1.62σ)"
        },
        {
          "label": "23:53",
          "score": 12,
          "metric": "SOL 15m: R$ 484.40 (Z: -0.23σ)"
        },
        {
          "label": "00:13",
          "score": 29,
          "metric": "SOL 15m: R$ 482.00 (Z: -0.57σ)"
        },
        {
          "label": "00:33",
          "score": 91,
          "metric": "SOL 15m: R$ 483.30 (Z: -1.82σ)"
        },
        {
          "label": "00:53",
          "score": 5,
          "metric": "SOL 15m: R$ 484.00 (Z: +0.55σ)"
        },
        {
          "label": "01:13",
          "score": 5,
          "metric": "SOL 15m: R$ 486.00 (Z: +0.09σ)"
        },
        {
          "label": "01:33",
          "score": 5,
          "metric": "SOL 15m: R$ 488.00 (Z: +2.35σ)"
        },
        {
          "label": "01:53",
          "score": 28,
          "metric": "SOL 15m: R$ 484.10 (Z: -0.56σ)"
        },
        {
          "label": "02:13",
          "score": 5,
          "metric": "SOL 15m: R$ 487.00 (Z: +1.43σ)"
        },
        {
          "label": "02:33",
          "score": 5,
          "metric": "SOL 15m: R$ 490.50 (Z: +0.78σ)"
        },
        {
          "label": "02:53",
          "score": 11,
          "metric": "SOL 15m: R$ 492.90 (Z: -0.23σ)"
        },
        {
          "label": "03:13",
          "score": 5,
          "metric": "SOL 15m: R$ 496.00 (Z: +0.31σ)"
        },
        {
          "label": "03:33",
          "score": 5,
          "metric": "SOL 15m: R$ 501.00 (Z: -0.05σ)"
        },
        {
          "label": "03:53",
          "score": 5,
          "metric": "SOL 15m: R$ 502.30 (Z: +1.23σ)"
        },
        {
          "label": "04:13",
          "score": 5,
          "metric": "SOL 15m: R$ 501.50 (Z: +1.32σ)"
        },
        {
          "label": "04:33",
          "score": 5,
          "metric": "SOL 15m: R$ 512.00 (Z: +2.03σ)"
        },
        {
          "label": "04:53",
          "score": 40,
          "metric": "SOL 15m: R$ 516.30 (Z: -0.79σ)"
        },
        {
          "label": "05:13",
          "score": 51,
          "metric": "SOL 15m: R$ 482.90 (Z: -1.02σ)"
        },
        {
          "label": "05:33",
          "score": 5,
          "metric": "SOL 15m: R$ 485.30 (Z: +0.63σ)"
        },
        {
          "label": "05:53",
          "score": 5,
          "metric": "SOL 15m: R$ 487.10 (Z: +0.66σ)"
        },
        {
          "label": "06:13",
          "score": 42,
          "metric": "SOL 15m: R$ 484.30 (Z: -0.85σ)"
        },
        {
          "label": "06:33",
          "score": 100,
          "metric": "SOL 15m: R$ 482.30 (Z: -2.02σ)"
        },
        {
          "label": "06:53",
          "score": 81,
          "metric": "SOL 15m: R$ 486.80 (Z: -1.61σ)"
        },
        {
          "label": "07:13",
          "score": 66,
          "metric": "SOL 15m: R$ 486.90 (Z: -1.33σ)"
        },
        {
          "label": "07:33",
          "score": 5,
          "metric": "SOL 15m: R$ 492.90 (Z: +1.52σ)"
        },
        {
          "label": "07:53",
          "score": 76,
          "metric": "SOL 15m: R$ 488.60 (Z: -1.52σ)"
        },
        {
          "label": "08:13",
          "score": 5,
          "metric": "SOL 15m: R$ 490.30 (Z: +1.57σ)"
        },
        {
          "label": "08:33",
          "score": 79,
          "metric": "SOL 15m: R$ 481.40 (Z: -1.58σ)"
        },
        {
          "label": "08:53",
          "score": 5,
          "metric": "SOL 15m: R$ 484.20 (Z: +1.38σ)"
        },
        {
          "label": "09:13",
          "score": 5,
          "metric": "SOL 15m: R$ 485.60 (Z: +1.02σ)"
        },
        {
          "label": "09:33",
          "score": 5,
          "metric": "SOL 15m: R$ 487.40 (Z: +0.69σ)"
        },
        {
          "label": "09:53",
          "score": 21,
          "metric": "SOL 15m: R$ 484.80 (Z: -0.42σ)"
        },
        {
          "label": "10:13",
          "score": 79,
          "metric": "SOL 15m: R$ 475.90 (Z: -1.59σ)"
        },
        {
          "label": "10:33",
          "score": 5,
          "metric": "SOL 15m: R$ 477.70 (Z: +1.03σ)"
        },
        {
          "label": "10:53",
          "score": 73,
          "metric": "SOL 15m: R$ 480.40 (Z: -1.45σ)"
        },
        {
          "label": "11:13",
          "score": 5,
          "metric": "SOL 15m: R$ 479.80 (Z: +0.17σ)"
        },
        {
          "label": "11:33",
          "score": 5,
          "metric": "SOL 15m: R$ 481.30 (Z: +1.41σ)"
        },
        {
          "label": "11:53",
          "score": 67,
          "metric": "SOL 15m: R$ 481.70 (Z: -1.34σ)"
        },
        {
          "label": "12:13",
          "score": 5,
          "metric": "SOL 15m: R$ 484.20 (Z: +1.54σ)"
        },
        {
          "label": "12:33",
          "score": 70,
          "metric": "SOL 15m: R$ 485.30 (Z: -1.39σ)"
        },
        {
          "label": "12:53",
          "score": 46,
          "metric": "SOL 15m: R$ 485.70 (Z: -0.91σ)"
        },
        {
          "label": "13:13",
          "score": 5,
          "metric": "SOL 15m: R$ 484.90 (Z: +0.43σ)"
        },
        {
          "label": "13:33",
          "score": 50,
          "metric": "SOL 15m: R$ 484.10 (Z: -1.00σ)"
        },
        {
          "label": "13:53",
          "score": 5,
          "metric": "SOL 15m: R$ 486.00 (Z: +1.47σ)"
        },
        {
          "label": "14:13",
          "score": 8,
          "metric": "SOL 15m: R$ 484.90 (Z: -0.17σ)"
        },
        {
          "label": "14:33",
          "score": 5,
          "metric": "SOL 15m: R$ 485.30 (Z: +2.03σ)"
        },
        {
          "label": "14:53",
          "score": 58,
          "metric": "SOL 15m: R$ 480.40 (Z: -1.16σ)"
        },
        {
          "label": "15:13",
          "score": 64,
          "metric": "SOL 15m: R$ 480.30 (Z: -1.28σ)"
        },
        {
          "label": "15:33",
          "score": 5,
          "metric": "SOL 15m: R$ 482.60 (Z: +2.04σ)"
        },
        {
          "label": "15:53",
          "score": 100,
          "metric": "SOL 15m: R$ 480.40 (Z: -2.19σ)"
        },
        {
          "label": "16:13",
          "score": 5,
          "metric": "SOL 15m: R$ 481.60 (Z: +0.01σ)"
        },
        {
          "label": "16:33",
          "score": 5,
          "metric": "SOL 15m: R$ 484.70 (Z: +0.77σ)"
        },
        {
          "label": "16:53",
          "score": 33,
          "metric": "SOL 15m: R$ 486.80 (Z: -0.65σ)"
        },
        {
          "label": "17:13",
          "score": 79,
          "metric": "SOL 15m: R$ 486.10 (Z: -1.58σ)"
        },
        {
          "label": "17:33",
          "score": 12,
          "metric": "SOL 15m: R$ 485.90 (Z: -0.23σ)"
        },
        {
          "label": "17:53",
          "score": 5,
          "metric": "SOL 15m: R$ 487.70 (Z: +1.25σ)"
        },
        {
          "label": "18:13",
          "score": 88,
          "metric": "SOL 15m: R$ 485.80 (Z: -1.77σ)"
        },
        {
          "label": "18:33",
          "score": 5,
          "metric": "SOL 15m: R$ 487.60 (Z: +0.72σ)"
        },
        {
          "label": "18:53",
          "score": 70,
          "metric": "SOL 15m: R$ 479.30 (Z: -1.40σ)"
        },
        {
          "label": "19:13",
          "score": 5,
          "metric": "SOL 15m: R$ 482.40 (Z: +1.05σ)"
        },
        {
          "label": "19:33",
          "score": 90,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.79σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 19,
          "metric": "SOL 15m: R$ 395.60 (Z: -0.37σ)"
        },
        {
          "label": "15/08 21:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.40 (Z: +0.92σ)"
        },
        {
          "label": "15/08 23:00",
          "score": 32,
          "metric": "SOL 15m: R$ 394.90 (Z: -0.64σ)"
        },
        {
          "label": "16/08 01:00",
          "score": 46,
          "metric": "SOL 15m: R$ 395.00 (Z: -0.92σ)"
        },
        {
          "label": "16/08 03:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.70 (Z: +0.00σ)"
        },
        {
          "label": "16/08 05:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.80 (Z: +0.00σ)"
        },
        {
          "label": "16/08 07:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.90 (Z: +3.61σ)"
        },
        {
          "label": "16/08 09:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.80 (Z: +0.79σ)"
        },
        {
          "label": "16/08 11:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.90 (Z: +1.18σ)"
        },
        {
          "label": "16/08 13:00",
          "score": 34,
          "metric": "SOL 15m: R$ 395.40 (Z: -0.68σ)"
        },
        {
          "label": "16/08 15:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.00 (Z: +0.67σ)"
        },
        {
          "label": "16/08 17:00",
          "score": 80,
          "metric": "SOL 15m: R$ 395.20 (Z: -1.61σ)"
        },
        {
          "label": "16/08 19:00",
          "score": 24,
          "metric": "SOL 15m: R$ 394.60 (Z: -0.48σ)"
        },
        {
          "label": "16/08 21:00",
          "score": 5,
          "metric": "SOL 15m: R$ 392.80 (Z: +0.58σ)"
        },
        {
          "label": "16/08 23:00",
          "score": 5,
          "metric": "SOL 15m: R$ 391.00 (Z: +0.36σ)"
        },
        {
          "label": "17/08 01:00",
          "score": 50,
          "metric": "SOL 15m: R$ 394.60 (Z: -0.99σ)"
        },
        {
          "label": "17/08 03:00",
          "score": 59,
          "metric": "SOL 15m: R$ 396.20 (Z: -1.18σ)"
        },
        {
          "label": "17/08 05:00",
          "score": 97,
          "metric": "SOL 15m: R$ 396.10 (Z: -1.93σ)"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "SOL 15m: R$ 397.50 (Z: +1.39σ)"
        },
        {
          "label": "17/08 09:00",
          "score": 59,
          "metric": "SOL 15m: R$ 395.00 (Z: -1.18σ)"
        },
        {
          "label": "17/08 11:00",
          "score": 5,
          "metric": "SOL 15m: R$ 397.50 (Z: +1.11σ)"
        },
        {
          "label": "17/08 13:00",
          "score": 5,
          "metric": "SOL 15m: R$ 395.20 (Z: +1.60σ)"
        },
        {
          "label": "17/08 15:00",
          "score": 5,
          "metric": "SOL 15m: R$ 394.80 (Z: +0.11σ)"
        },
        {
          "label": "17/08 17:00",
          "score": 56,
          "metric": "SOL 15m: R$ 395.40 (Z: -1.12σ)"
        },
        {
          "label": "17/08 19:00",
          "score": 65,
          "metric": "SOL 15m: R$ 395.10 (Z: -1.31σ)"
        },
        {
          "label": "17/08 21:00",
          "score": 95,
          "metric": "SOL 15m: R$ 395.80 (Z: -1.90σ)"
        },
        {
          "label": "17/08 23:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.80 (Z: +0.84σ)"
        },
        {
          "label": "18/08 01:00",
          "score": 29,
          "metric": "SOL 15m: R$ 396.10 (Z: -0.58σ)"
        },
        {
          "label": "18/08 03:00",
          "score": 14,
          "metric": "SOL 15m: R$ 393.50 (Z: -0.28σ)"
        },
        {
          "label": "18/08 05:00",
          "score": 53,
          "metric": "SOL 15m: R$ 395.10 (Z: -1.05σ)"
        },
        {
          "label": "18/08 07:00",
          "score": 41,
          "metric": "SOL 15m: R$ 397.00 (Z: -0.83σ)"
        },
        {
          "label": "18/08 09:00",
          "score": 5,
          "metric": "SOL 15m: R$ 396.60 (Z: +0.00σ)"
        },
        {
          "label": "18/08 11:00",
          "score": 5,
          "metric": "SOL 15m: R$ 398.80 (Z: +1.36σ)"
        },
        {
          "label": "18/08 13:00",
          "score": 77,
          "metric": "SOL 15m: R$ 397.20 (Z: -1.53σ)"
        },
        {
          "label": "18/08 15:00",
          "score": 23,
          "metric": "SOL 15m: R$ 402.70 (Z: -0.45σ)"
        },
        {
          "label": "18/08 17:00",
          "score": 33,
          "metric": "SOL 15m: R$ 401.70 (Z: -0.67σ)"
        },
        {
          "label": "18/08 19:00",
          "score": 90,
          "metric": "SOL 15m: R$ 404.00 (Z: -1.80σ)"
        },
        {
          "label": "18/08 21:00",
          "score": 11,
          "metric": "SOL 15m: R$ 402.60 (Z: -0.21σ)"
        },
        {
          "label": "18/08 23:00",
          "score": 5,
          "metric": "SOL 15m: R$ 404.30 (Z: +1.54σ)"
        },
        {
          "label": "19/08 01:00",
          "score": 32,
          "metric": "SOL 15m: R$ 402.40 (Z: -0.63σ)"
        },
        {
          "label": "19/08 03:00",
          "score": 100,
          "metric": "SOL 15m: R$ 403.30 (Z: -2.17σ)"
        },
        {
          "label": "19/08 05:00",
          "score": 31,
          "metric": "SOL 15m: R$ 402.70 (Z: -0.63σ)"
        },
        {
          "label": "19/08 07:00",
          "score": 5,
          "metric": "SOL 15m: R$ 403.20 (Z: +1.37σ)"
        },
        {
          "label": "19/08 09:00",
          "score": 100,
          "metric": "SOL 15m: R$ 404.40 (Z: -2.85σ)"
        },
        {
          "label": "19/08 11:00",
          "score": 68,
          "metric": "SOL 15m: R$ 405.60 (Z: -1.37σ)"
        },
        {
          "label": "19/08 13:00",
          "score": 71,
          "metric": "SOL 15m: R$ 405.90 (Z: -1.42σ)"
        },
        {
          "label": "19/08 15:00",
          "score": 5,
          "metric": "SOL 15m: R$ 427.10 (Z: +0.91σ)"
        },
        {
          "label": "19/08 17:00",
          "score": 5,
          "metric": "SOL 15m: R$ 420.90 (Z: +0.66σ)"
        },
        {
          "label": "19/08 19:00",
          "score": 5,
          "metric": "SOL 15m: R$ 426.70 (Z: +0.95σ)"
        },
        {
          "label": "19/08 21:00",
          "score": 46,
          "metric": "SOL 15m: R$ 449.50 (Z: -0.92σ)"
        },
        {
          "label": "19/08 23:00",
          "score": 10,
          "metric": "SOL 15m: R$ 442.90 (Z: -0.21σ)"
        },
        {
          "label": "20/08 01:00",
          "score": 5,
          "metric": "SOL 15m: R$ 440.40 (Z: +0.98σ)"
        },
        {
          "label": "20/08 03:00",
          "score": 5,
          "metric": "SOL 15m: R$ 438.20 (Z: +0.78σ)"
        },
        {
          "label": "20/08 05:00",
          "score": 5,
          "metric": "SOL 15m: R$ 441.40 (Z: +0.91σ)"
        },
        {
          "label": "20/08 07:00",
          "score": 5,
          "metric": "SOL 15m: R$ 446.20 (Z: +0.11σ)"
        },
        {
          "label": "20/08 09:00",
          "score": 11,
          "metric": "SOL 15m: R$ 454.20 (Z: -0.23σ)"
        },
        {
          "label": "20/08 11:00",
          "score": 5,
          "metric": "SOL 15m: R$ 456.30 (Z: +1.63σ)"
        },
        {
          "label": "20/08 13:00",
          "score": 64,
          "metric": "SOL 15m: R$ 449.30 (Z: -1.28σ)"
        },
        {
          "label": "20/08 15:00",
          "score": 33,
          "metric": "SOL 15m: R$ 451.40 (Z: -0.67σ)"
        },
        {
          "label": "20/08 17:00",
          "score": 60,
          "metric": "SOL 15m: R$ 455.80 (Z: -1.21σ)"
        },
        {
          "label": "20/08 19:00",
          "score": 28,
          "metric": "SOL 15m: R$ 454.30 (Z: -0.56σ)"
        },
        {
          "label": "20/08 21:00",
          "score": 5,
          "metric": "SOL 15m: R$ 457.00 (Z: +1.55σ)"
        },
        {
          "label": "20/08 23:00",
          "score": 34,
          "metric": "SOL 15m: R$ 456.90 (Z: -0.68σ)"
        },
        {
          "label": "21/08 01:00",
          "score": 5,
          "metric": "SOL 15m: R$ 460.80 (Z: +0.06σ)"
        },
        {
          "label": "21/08 03:00",
          "score": 63,
          "metric": "SOL 15m: R$ 465.00 (Z: -1.26σ)"
        },
        {
          "label": "21/08 05:00",
          "score": 5,
          "metric": "SOL 15m: R$ 468.00 (Z: +1.80σ)"
        },
        {
          "label": "21/08 07:00",
          "score": 64,
          "metric": "SOL 15m: R$ 468.70 (Z: -1.27σ)"
        },
        {
          "label": "21/08 09:00",
          "score": 5,
          "metric": "SOL 15m: R$ 475.70 (Z: +1.54σ)"
        },
        {
          "label": "21/08 11:00",
          "score": 42,
          "metric": "SOL 15m: R$ 470.10 (Z: -0.84σ)"
        },
        {
          "label": "21/08 13:00",
          "score": 31,
          "metric": "SOL 15m: R$ 468.60 (Z: -0.63σ)"
        },
        {
          "label": "21/08 15:00",
          "score": 70,
          "metric": "SOL 15m: R$ 473.00 (Z: -1.40σ)"
        },
        {
          "label": "21/08 17:00",
          "score": 5,
          "metric": "SOL 15m: R$ 473.90 (Z: +0.93σ)"
        },
        {
          "label": "21/08 19:00",
          "score": 76,
          "metric": "SOL 15m: R$ 469.00 (Z: -1.51σ)"
        },
        {
          "label": "21/08 21:00",
          "score": 50,
          "metric": "SOL 15m: R$ 478.60 (Z: -1.00σ)"
        },
        {
          "label": "21/08 23:00",
          "score": 65,
          "metric": "SOL 15m: R$ 485.80 (Z: -1.30σ)"
        },
        {
          "label": "22/08 01:00",
          "score": 5,
          "metric": "SOL 15m: R$ 487.20 (Z: +0.88σ)"
        },
        {
          "label": "22/08 03:00",
          "score": 5,
          "metric": "SOL 15m: R$ 501.30 (Z: -0.08σ)"
        },
        {
          "label": "22/08 05:00",
          "score": 5,
          "metric": "SOL 15m: R$ 485.00 (Z: -0.10σ)"
        },
        {
          "label": "22/08 07:00",
          "score": 5,
          "metric": "SOL 15m: R$ 490.80 (Z: -0.06σ)"
        },
        {
          "label": "22/08 09:00",
          "score": 5,
          "metric": "SOL 15m: R$ 487.10 (Z: +0.87σ)"
        },
        {
          "label": "22/08 11:00",
          "score": 5,
          "metric": "SOL 15m: R$ 482.70 (Z: +1.73σ)"
        },
        {
          "label": "22/08 13:00",
          "score": 63,
          "metric": "SOL 15m: R$ 483.50 (Z: -1.26σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "SOL 15m: R$ 481.90 (Z: +0.45σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 5,
          "metric": "SOL 15m: R$ 486.00 (Z: +0.20σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 90,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.79σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "SOL 15m: R$ 386.70 (Z: +0.77σ)"
        },
        {
          "label": "24/07",
          "score": 36,
          "metric": "SOL 15m: R$ 387.60 (Z: -0.73σ)"
        },
        {
          "label": "24/07",
          "score": 84,
          "metric": "SOL 15m: R$ 383.50 (Z: -1.68σ)"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "SOL 15m: R$ 376.50 (Z: +1.18σ)"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "SOL 15m: R$ 379.70 (Z: +0.41σ)"
        },
        {
          "label": "25/07",
          "score": 100,
          "metric": "SOL 15m: R$ 377.00 (Z: -2.41σ)"
        },
        {
          "label": "25/07",
          "score": 35,
          "metric": "SOL 15m: R$ 381.40 (Z: -0.70σ)"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "SOL 15m: R$ 382.90 (Z: +1.08σ)"
        },
        {
          "label": "26/07",
          "score": 55,
          "metric": "SOL 15m: R$ 383.60 (Z: -1.11σ)"
        },
        {
          "label": "26/07",
          "score": 25,
          "metric": "SOL 15m: R$ 384.10 (Z: -0.49σ)"
        },
        {
          "label": "27/07",
          "score": 29,
          "metric": "SOL 15m: R$ 389.80 (Z: -0.58σ)"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "SOL 15m: R$ 390.90 (Z: +1.51σ)"
        },
        {
          "label": "27/07",
          "score": 42,
          "metric": "SOL 15m: R$ 388.50 (Z: -0.84σ)"
        },
        {
          "label": "28/07",
          "score": 15,
          "metric": "SOL 15m: R$ 375.60 (Z: -0.29σ)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "SOL 15m: R$ 375.60 (Z: +0.56σ)"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "SOL 15m: R$ 380.50 (Z: +0.52σ)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "SOL 15m: R$ 376.80 (Z: +0.46σ)"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "SOL 15m: R$ 380.10 (Z: +0.70σ)"
        },
        {
          "label": "29/07",
          "score": 60,
          "metric": "SOL 15m: R$ 375.20 (Z: -1.20σ)"
        },
        {
          "label": "30/07",
          "score": 93,
          "metric": "SOL 15m: R$ 378.20 (Z: -1.87σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "SOL 15m: R$ 379.70 (Z: +1.00σ)"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "SOL 15m: R$ 379.30 (Z: +0.30σ)"
        },
        {
          "label": "31/07",
          "score": 31,
          "metric": "SOL 15m: R$ 377.60 (Z: -0.62σ)"
        },
        {
          "label": "31/07",
          "score": 82,
          "metric": "SOL 15m: R$ 374.80 (Z: -1.65σ)"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "SOL 15m: R$ 371.80 (Z: +1.47σ)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "SOL 15m: R$ 372.50 (Z: +1.25σ)"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "SOL 15m: R$ 372.10 (Z: +0.54σ)"
        },
        {
          "label": "01/08",
          "score": 28,
          "metric": "SOL 15m: R$ 363.70 (Z: -0.56σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "SOL 15m: R$ 373.80 (Z: +0.27σ)"
        },
        {
          "label": "02/08",
          "score": 42,
          "metric": "SOL 15m: R$ 373.30 (Z: -0.84σ)"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "SOL 15m: R$ 375.90 (Z: +0.00σ)"
        },
        {
          "label": "03/08",
          "score": 76,
          "metric": "SOL 15m: R$ 371.00 (Z: -1.51σ)"
        },
        {
          "label": "03/08",
          "score": 44,
          "metric": "SOL 15m: R$ 369.60 (Z: -0.87σ)"
        },
        {
          "label": "03/08",
          "score": 45,
          "metric": "SOL 15m: R$ 377.60 (Z: -0.90σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "SOL 15m: R$ 375.90 (Z: +0.47σ)"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "SOL 15m: R$ 376.40 (Z: +1.33σ)"
        },
        {
          "label": "04/08",
          "score": 31,
          "metric": "SOL 15m: R$ 381.80 (Z: -0.62σ)"
        },
        {
          "label": "05/08",
          "score": 58,
          "metric": "SOL 15m: R$ 380.00 (Z: -1.17σ)"
        },
        {
          "label": "05/08",
          "score": 20,
          "metric": "SOL 15m: R$ 379.10 (Z: -0.39σ)"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "SOL 15m: R$ 383.00 (Z: +0.65σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "SOL 15m: R$ 377.70 (Z: -0.07σ)"
        },
        {
          "label": "06/08",
          "score": 57,
          "metric": "SOL 15m: R$ 377.50 (Z: -1.13σ)"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "SOL 15m: R$ 372.80 (Z: +2.19σ)"
        },
        {
          "label": "07/08",
          "score": 79,
          "metric": "SOL 15m: R$ 372.70 (Z: -1.57σ)"
        },
        {
          "label": "07/08",
          "score": 57,
          "metric": "SOL 15m: R$ 377.10 (Z: -1.14σ)"
        },
        {
          "label": "07/08",
          "score": 9,
          "metric": "SOL 15m: R$ 376.60 (Z: -0.17σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL 15m: R$ 381.30 (Z: +3.30σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL 15m: R$ 385.90 (Z: +1.57σ)"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "SOL 15m: R$ 388.90 (Z: +1.23σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL 15m: R$ 388.40 (Z: +0.84σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "SOL 15m: R$ 390.80 (Z: +0.51σ)"
        },
        {
          "label": "09/08",
          "score": 18,
          "metric": "SOL 15m: R$ 394.60 (Z: -0.37σ)"
        },
        {
          "label": "10/08",
          "score": 100,
          "metric": "SOL 15m: R$ 391.20 (Z: -2.09σ)"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "SOL 15m: R$ 392.60 (Z: +1.49σ)"
        },
        {
          "label": "10/08",
          "score": 24,
          "metric": "SOL 15m: R$ 390.30 (Z: -0.48σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL 15m: R$ 390.30 (Z: +0.00σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL 15m: R$ 390.80 (Z: +1.01σ)"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "SOL 15m: R$ 392.00 (Z: +1.90σ)"
        },
        {
          "label": "12/08",
          "score": 23,
          "metric": "SOL 15m: R$ 395.60 (Z: -0.46σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL 15m: R$ 398.00 (Z: +0.94σ)"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "SOL 15m: R$ 393.50 (Z: +1.83σ)"
        },
        {
          "label": "13/08",
          "score": 23,
          "metric": "SOL 15m: R$ 396.50 (Z: -0.46σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL 15m: R$ 393.50 (Z: +1.87σ)"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "SOL 15m: R$ 396.10 (Z: +0.18σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.00 (Z: +0.00σ)"
        },
        {
          "label": "14/08",
          "score": 80,
          "metric": "SOL 15m: R$ 392.10 (Z: -1.60σ)"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "SOL 15m: R$ 393.20 (Z: +1.73σ)"
        },
        {
          "label": "15/08",
          "score": 100,
          "metric": "SOL 15m: R$ 394.50 (Z: -2.55σ)"
        },
        {
          "label": "15/08",
          "score": 52,
          "metric": "SOL 15m: R$ 393.90 (Z: -1.03σ)"
        },
        {
          "label": "15/08",
          "score": 52,
          "metric": "SOL 15m: R$ 395.80 (Z: -1.03σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL 15m: R$ 396.80 (Z: +1.33σ)"
        },
        {
          "label": "16/08",
          "score": 22,
          "metric": "SOL 15m: R$ 394.80 (Z: -0.44σ)"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.40 (Z: +2.36σ)"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "SOL 15m: R$ 396.60 (Z: +0.50σ)"
        },
        {
          "label": "17/08",
          "score": 58,
          "metric": "SOL 15m: R$ 395.10 (Z: -1.16σ)"
        },
        {
          "label": "17/08",
          "score": 49,
          "metric": "SOL 15m: R$ 394.80 (Z: -0.97σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL 15m: R$ 394.80 (Z: +1.93σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL 15m: R$ 399.10 (Z: +0.20σ)"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "SOL 15m: R$ 403.50 (Z: +1.00σ)"
        },
        {
          "label": "19/08",
          "score": 30,
          "metric": "SOL 15m: R$ 403.40 (Z: -0.61σ)"
        },
        {
          "label": "19/08",
          "score": 51,
          "metric": "SOL 15m: R$ 404.40 (Z: -1.02σ)"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "SOL 15m: R$ 427.50 (Z: +1.05σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL 15m: R$ 439.90 (Z: +1.74σ)"
        },
        {
          "label": "20/08",
          "score": 36,
          "metric": "SOL 15m: R$ 452.50 (Z: -0.72σ)"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "SOL 15m: R$ 455.50 (Z: +2.18σ)"
        },
        {
          "label": "21/08",
          "score": 7,
          "metric": "SOL 15m: R$ 464.90 (Z: -0.14σ)"
        },
        {
          "label": "21/08",
          "score": 49,
          "metric": "SOL 15m: R$ 467.90 (Z: -0.99σ)"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "SOL 15m: R$ 470.20 (Z: +1.33σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL 15m: R$ 500.80 (Z: +0.75σ)"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "SOL 15m: R$ 483.40 (Z: +1.61σ)"
        },
        {
          "label": "22/08",
          "score": 90,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.79σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1077.60 (Z: +1.39σ)"
        },
        {
          "label": "26/08/25",
          "score": 52,
          "metric": "SOL 15m: R$ 1065.70 (Z: -1.05σ)"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1101.00 (Z: +1.34σ)"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1147.00 (Z: +1.43σ)"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1106.80 (Z: +1.18σ)"
        },
        {
          "label": "11/09/25",
          "score": 19,
          "metric": "SOL 15m: R$ 1222.50 (Z: -0.37σ)"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1244.00 (Z: +1.59σ)"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1261.00 (Z: +0.96σ)"
        },
        {
          "label": "23/09/25",
          "score": 82,
          "metric": "SOL 15m: R$ 1133.40 (Z: -1.63σ)"
        },
        {
          "label": "27/09/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1087.50 (Z: +2.38σ)"
        },
        {
          "label": "01/10/25",
          "score": 46,
          "metric": "SOL 15m: R$ 1172.80 (Z: -0.93σ)"
        },
        {
          "label": "05/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1221.20 (Z: +1.93σ)"
        },
        {
          "label": "09/10/25",
          "score": 6,
          "metric": "SOL 15m: R$ 1174.20 (Z: -0.12σ)"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1141.40 (Z: +0.39σ)"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 998.30 (Z: +2.17σ)"
        },
        {
          "label": "21/10/25",
          "score": 10,
          "metric": "SOL 15m: R$ 1033.00 (Z: -0.21σ)"
        },
        {
          "label": "25/10/25",
          "score": 34,
          "metric": "SOL 15m: R$ 1048.80 (Z: -0.67σ)"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "SOL 15m: R$ 1049.80 (Z: +2.08σ)"
        },
        {
          "label": "02/11/25",
          "score": 78,
          "metric": "SOL 15m: R$ 993.20 (Z: -1.57σ)"
        },
        {
          "label": "06/11/25",
          "score": 5,
          "metric": "SOL 15m: R$ 831.10 (Z: +0.30σ)"
        },
        {
          "label": "10/11/25",
          "score": 14,
          "metric": "SOL 15m: R$ 880.80 (Z: -0.28σ)"
        },
        {
          "label": "03/12/25",
          "score": 20,
          "metric": "SOL 15m: R$ 748.70 (Z: -0.41σ)"
        },
        {
          "label": "07/12/25",
          "score": 11,
          "metric": "SOL 15m: R$ 719.90 (Z: -0.22σ)"
        },
        {
          "label": "18/01/26",
          "score": 75,
          "metric": "SOL 15m: R$ 764.80 (Z: -1.49σ)"
        },
        {
          "label": "22/01/26",
          "score": 5,
          "metric": "SOL 15m: R$ 680.20 (Z: +1.67σ)"
        },
        {
          "label": "28/01/26",
          "score": 24,
          "metric": "SOL 15m: R$ 656.10 (Z: -0.49σ)"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 538.30 (Z: +0.16σ)"
        },
        {
          "label": "06/02/26",
          "score": 61,
          "metric": "SOL 15m: R$ 419.10 (Z: -1.23σ)"
        },
        {
          "label": "10/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 429.30 (Z: +3.09σ)"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 445.40 (Z: +2.63σ)"
        },
        {
          "label": "21/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 439.60 (Z: +0.95σ)"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "SOL 15m: R$ 426.00 (Z: +0.71σ)"
        },
        {
          "label": "02/03/26",
          "score": 5,
          "metric": "SOL 15m: R$ 432.40 (Z: -0.01σ)"
        },
        {
          "label": "07/03/26",
          "score": 38,
          "metric": "SOL 15m: R$ 445.60 (Z: -0.75σ)"
        },
        {
          "label": "11/03/26",
          "score": 5,
          "metric": "SOL 15m: R$ 452.50 (Z: +1.24σ)"
        },
        {
          "label": "16/03/26",
          "score": 36,
          "metric": "SOL 15m: R$ 496.00 (Z: -0.72σ)"
        },
        {
          "label": "20/03/26",
          "score": 39,
          "metric": "SOL 15m: R$ 470.60 (Z: -0.77σ)"
        },
        {
          "label": "25/03/26",
          "score": 52,
          "metric": "SOL 15m: R$ 485.70 (Z: -1.05σ)"
        },
        {
          "label": "30/03/26",
          "score": 34,
          "metric": "SOL 15m: R$ 438.10 (Z: -0.68σ)"
        },
        {
          "label": "03/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 415.30 (Z: +0.32σ)"
        },
        {
          "label": "08/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 436.80 (Z: +0.54σ)"
        },
        {
          "label": "12/04/26",
          "score": 18,
          "metric": "SOL 15m: R$ 414.00 (Z: -0.36σ)"
        },
        {
          "label": "16/04/26",
          "score": 100,
          "metric": "SOL 15m: R$ 429.80 (Z: -2.53σ)"
        },
        {
          "label": "20/04/26",
          "score": 48,
          "metric": "SOL 15m: R$ 427.60 (Z: -0.97σ)"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 431.40 (Z: -0.04σ)"
        },
        {
          "label": "29/04/26",
          "score": 5,
          "metric": "SOL 15m: R$ 423.40 (Z: +2.22σ)"
        },
        {
          "label": "03/05/26",
          "score": 22,
          "metric": "SOL 15m: R$ 417.80 (Z: -0.45σ)"
        },
        {
          "label": "07/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 434.10 (Z: +0.00σ)"
        },
        {
          "label": "13/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 451.20 (Z: +1.35σ)"
        },
        {
          "label": "17/05/26",
          "score": 32,
          "metric": "SOL 15m: R$ 431.00 (Z: -0.64σ)"
        },
        {
          "label": "22/05/26",
          "score": 64,
          "metric": "SOL 15m: R$ 436.00 (Z: -1.28σ)"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 425.90 (Z: +0.58σ)"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "SOL 15m: R$ 418.40 (Z: +1.27σ)"
        },
        {
          "label": "04/06/26",
          "score": 41,
          "metric": "SOL 15m: R$ 352.50 (Z: -0.83σ)"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 342.50 (Z: +0.29σ)"
        },
        {
          "label": "12/06/26",
          "score": 13,
          "metric": "SOL 15m: R$ 339.80 (Z: -0.26σ)"
        },
        {
          "label": "16/06/26",
          "score": 35,
          "metric": "SOL 15m: R$ 376.30 (Z: -0.69σ)"
        },
        {
          "label": "20/06/26",
          "score": 26,
          "metric": "SOL 15m: R$ 360.70 (Z: -0.52σ)"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 366.00 (Z: +0.28σ)"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "SOL 15m: R$ 372.00 (Z: +0.54σ)"
        },
        {
          "label": "02/07/26",
          "score": 18,
          "metric": "SOL 15m: R$ 410.20 (Z: -0.36σ)"
        },
        {
          "label": "06/07/26",
          "score": 57,
          "metric": "SOL 15m: R$ 427.50 (Z: -1.14σ)"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "SOL 15m: R$ 407.10 (Z: +0.60σ)"
        },
        {
          "label": "14/07/26",
          "score": 81,
          "metric": "SOL 15m: R$ 388.30 (Z: -1.62σ)"
        },
        {
          "label": "18/07/26",
          "score": 5,
          "metric": "SOL 15m: R$ 388.10 (Z: +0.78σ)"
        },
        {
          "label": "22/07/26",
          "score": 47,
          "metric": "SOL 15m: R$ 399.80 (Z: -0.94σ)"
        },
        {
          "label": "26/07/26",
          "score": 5,
          "metric": "SOL 15m: R$ 382.20 (Z: +1.08σ)"
        },
        {
          "label": "30/07/26",
          "score": 5,
          "metric": "SOL 15m: R$ 379.40 (Z: +0.98σ)"
        },
        {
          "label": "03/08/26",
          "score": 15,
          "metric": "SOL 15m: R$ 372.50 (Z: -0.30σ)"
        },
        {
          "label": "07/08/26",
          "score": 19,
          "metric": "SOL 15m: R$ 372.80 (Z: -0.37σ)"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "SOL 15m: R$ 390.60 (Z: +0.38σ)"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "SOL 15m: R$ 396.00 (Z: +0.95σ)"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "SOL 15m: R$ 403.30 (Z: +3.05σ)"
        },
        {
          "label": "22/08/26",
          "score": 90,
          "metric": "SOL 15m: R$ 483.00 (Z: -1.79σ)"
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
    "valor_atual_str": "ETH/BTC = 0.03134 (Z: -0.85σ)",
    "alvo_str": "|Z| >= 1.50σ (Gatilho de Arbitragem)",
    "distancia_display": "Faltam 0.65σ para disparo",
    "proximidade_score": 57,
    "status": "MONITORANDO_SPREAD",
    "icone": "⚔️",
    "cor": "#06B6D4",
    "descricao_executiva": "Pairs trading clássico de Granger & Hatanaka (1964) entre os dois maiores pesos do ecossistema cripto. Explora o descolamento estatístico do ratio ETH/BTC em relação à sua média de cointegração de 24 horas.",
    "condicoes_ativacao": "• Z-Score do par sintético ETH/BTC atinge desvio absoluto |Z| >= 1.50σ.<br>• Coerência espectral de fase γ_ETH/BTC >= 0.70 confirmando reversibilidade do spread.",
    "limitacoes_trava": "• <b>Trava de Coerência:</b> Se a coerência espectral cair abaixo de 0.50, a operação é suspensa.<br>• <b>Trava de Pânico (PC1 > 75%):</b> Bloqueio de pairs durante choques sistêmicos.",
    "series_historica": {
      "1h": [
        {
          "label": "18:33",
          "score": 34,
          "metric": "ETH/BTC: 0.03146 (Z: -0.51σ)"
        },
        {
          "label": "18:34",
          "score": 31,
          "metric": "ETH/BTC: 0.03148 (Z: -0.46σ)"
        },
        {
          "label": "18:35",
          "score": 35,
          "metric": "ETH/BTC: 0.03146 (Z: -0.52σ)"
        },
        {
          "label": "18:36",
          "score": 36,
          "metric": "ETH/BTC: 0.03145 (Z: -0.54σ)"
        },
        {
          "label": "18:37",
          "score": 54,
          "metric": "ETH/BTC: 0.03136 (Z: -0.81σ)"
        },
        {
          "label": "18:38",
          "score": 60,
          "metric": "ETH/BTC: 0.03132 (Z: -0.89σ)"
        },
        {
          "label": "18:39",
          "score": 58,
          "metric": "ETH/BTC: 0.03133 (Z: -0.87σ)"
        },
        {
          "label": "18:40",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        },
        {
          "label": "18:41",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.86σ)"
        },
        {
          "label": "18:42",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.86σ)"
        },
        {
          "label": "18:43",
          "score": 53,
          "metric": "ETH/BTC: 0.03136 (Z: -0.80σ)"
        },
        {
          "label": "18:44",
          "score": 60,
          "metric": "ETH/BTC: 0.03132 (Z: -0.90σ)"
        },
        {
          "label": "18:45",
          "score": 54,
          "metric": "ETH/BTC: 0.03135 (Z: -0.81σ)"
        },
        {
          "label": "18:46",
          "score": 58,
          "metric": "ETH/BTC: 0.03133 (Z: -0.87σ)"
        },
        {
          "label": "18:47",
          "score": 58,
          "metric": "ETH/BTC: 0.03133 (Z: -0.87σ)"
        },
        {
          "label": "18:48",
          "score": 59,
          "metric": "ETH/BTC: 0.03133 (Z: -0.88σ)"
        },
        {
          "label": "18:49",
          "score": 56,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        },
        {
          "label": "18:50",
          "score": 55,
          "metric": "ETH/BTC: 0.03135 (Z: -0.82σ)"
        },
        {
          "label": "18:51",
          "score": 61,
          "metric": "ETH/BTC: 0.03132 (Z: -0.92σ)"
        },
        {
          "label": "18:52",
          "score": 63,
          "metric": "ETH/BTC: 0.03131 (Z: -0.94σ)"
        },
        {
          "label": "18:53",
          "score": 63,
          "metric": "ETH/BTC: 0.03131 (Z: -0.94σ)"
        },
        {
          "label": "18:54",
          "score": 61,
          "metric": "ETH/BTC: 0.03132 (Z: -0.91σ)"
        },
        {
          "label": "18:55",
          "score": 65,
          "metric": "ETH/BTC: 0.03130 (Z: -0.97σ)"
        },
        {
          "label": "18:56",
          "score": 59,
          "metric": "ETH/BTC: 0.03133 (Z: -0.89σ)"
        },
        {
          "label": "18:57",
          "score": 59,
          "metric": "ETH/BTC: 0.03133 (Z: -0.89σ)"
        },
        {
          "label": "18:58",
          "score": 59,
          "metric": "ETH/BTC: 0.03133 (Z: -0.89σ)"
        },
        {
          "label": "18:59",
          "score": 61,
          "metric": "ETH/BTC: 0.03132 (Z: -0.92σ)"
        },
        {
          "label": "19:00",
          "score": 52,
          "metric": "ETH/BTC: 0.03136 (Z: -0.78σ)"
        },
        {
          "label": "19:01",
          "score": 52,
          "metric": "ETH/BTC: 0.03136 (Z: -0.78σ)"
        },
        {
          "label": "19:02",
          "score": 62,
          "metric": "ETH/BTC: 0.03131 (Z: -0.93σ)"
        },
        {
          "label": "19:03",
          "score": 62,
          "metric": "ETH/BTC: 0.03131 (Z: -0.92σ)"
        },
        {
          "label": "19:04",
          "score": 63,
          "metric": "ETH/BTC: 0.03131 (Z: -0.94σ)"
        },
        {
          "label": "19:05",
          "score": 52,
          "metric": "ETH/BTC: 0.03137 (Z: -0.78σ)"
        },
        {
          "label": "19:06",
          "score": 52,
          "metric": "ETH/BTC: 0.03136 (Z: -0.78σ)"
        },
        {
          "label": "19:07",
          "score": 49,
          "metric": "ETH/BTC: 0.03138 (Z: -0.73σ)"
        },
        {
          "label": "19:08",
          "score": 50,
          "metric": "ETH/BTC: 0.03138 (Z: -0.75σ)"
        },
        {
          "label": "19:09",
          "score": 50,
          "metric": "ETH/BTC: 0.03138 (Z: -0.74σ)"
        },
        {
          "label": "19:10",
          "score": 54,
          "metric": "ETH/BTC: 0.03135 (Z: -0.81σ)"
        },
        {
          "label": "19:11",
          "score": 53,
          "metric": "ETH/BTC: 0.03136 (Z: -0.80σ)"
        },
        {
          "label": "19:12",
          "score": 54,
          "metric": "ETH/BTC: 0.03136 (Z: -0.81σ)"
        },
        {
          "label": "19:13",
          "score": 44,
          "metric": "ETH/BTC: 0.03141 (Z: -0.65σ)"
        },
        {
          "label": "19:14",
          "score": 46,
          "metric": "ETH/BTC: 0.03140 (Z: -0.68σ)"
        },
        {
          "label": "19:15",
          "score": 50,
          "metric": "ETH/BTC: 0.03138 (Z: -0.74σ)"
        },
        {
          "label": "19:16",
          "score": 51,
          "metric": "ETH/BTC: 0.03137 (Z: -0.76σ)"
        },
        {
          "label": "19:17",
          "score": 49,
          "metric": "ETH/BTC: 0.03138 (Z: -0.73σ)"
        },
        {
          "label": "19:18",
          "score": 49,
          "metric": "ETH/BTC: 0.03138 (Z: -0.73σ)"
        },
        {
          "label": "19:19",
          "score": 47,
          "metric": "ETH/BTC: 0.03139 (Z: -0.70σ)"
        },
        {
          "label": "19:20",
          "score": 46,
          "metric": "ETH/BTC: 0.03140 (Z: -0.69σ)"
        },
        {
          "label": "19:21",
          "score": 45,
          "metric": "ETH/BTC: 0.03140 (Z: -0.67σ)"
        },
        {
          "label": "19:22",
          "score": 45,
          "metric": "ETH/BTC: 0.03140 (Z: -0.68σ)"
        },
        {
          "label": "19:23",
          "score": 45,
          "metric": "ETH/BTC: 0.03140 (Z: -0.67σ)"
        },
        {
          "label": "19:24",
          "score": 48,
          "metric": "ETH/BTC: 0.03138 (Z: -0.73σ)"
        },
        {
          "label": "19:25",
          "score": 42,
          "metric": "ETH/BTC: 0.03142 (Z: -0.63σ)"
        },
        {
          "label": "19:26",
          "score": 43,
          "metric": "ETH/BTC: 0.03141 (Z: -0.64σ)"
        },
        {
          "label": "19:27",
          "score": 43,
          "metric": "ETH/BTC: 0.03141 (Z: -0.65σ)"
        },
        {
          "label": "19:28",
          "score": 38,
          "metric": "ETH/BTC: 0.03144 (Z: -0.57σ)"
        },
        {
          "label": "19:29",
          "score": 37,
          "metric": "ETH/BTC: 0.03145 (Z: -0.56σ)"
        },
        {
          "label": "19:30",
          "score": 38,
          "metric": "ETH/BTC: 0.03144 (Z: -0.57σ)"
        },
        {
          "label": "19:31",
          "score": 36,
          "metric": "ETH/BTC: 0.03145 (Z: -0.54σ)"
        },
        {
          "label": "19:32",
          "score": 54,
          "metric": "ETH/BTC: 0.03136 (Z: -0.81σ)"
        },
        {
          "label": "19:33",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 5,
          "metric": "ETH/BTC: 0.03129 (Z: -0.07σ)"
        },
        {
          "label": "19:53",
          "score": 5,
          "metric": "ETH/BTC: 0.03130 (Z: +0.00σ)"
        },
        {
          "label": "20:13",
          "score": 16,
          "metric": "ETH/BTC: 0.03138 (Z: +0.23σ)"
        },
        {
          "label": "20:33",
          "score": 40,
          "metric": "ETH/BTC: 0.03150 (Z: +0.61σ)"
        },
        {
          "label": "20:53",
          "score": 45,
          "metric": "ETH/BTC: 0.03151 (Z: +0.68σ)"
        },
        {
          "label": "21:13",
          "score": 56,
          "metric": "ETH/BTC: 0.03155 (Z: +0.83σ)"
        },
        {
          "label": "21:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03180 (Z: +1.61σ)"
        },
        {
          "label": "21:53",
          "score": 100,
          "metric": "ETH/BTC: 0.03195 (Z: +2.07σ)"
        },
        {
          "label": "22:13",
          "score": 100,
          "metric": "ETH/BTC: 0.03231 (Z: +3.07σ)"
        },
        {
          "label": "22:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03217 (Z: +2.54σ)"
        },
        {
          "label": "22:53",
          "score": 100,
          "metric": "ETH/BTC: 0.03216 (Z: +2.41σ)"
        },
        {
          "label": "23:13",
          "score": 100,
          "metric": "ETH/BTC: 0.03213 (Z: +2.28σ)"
        },
        {
          "label": "23:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03222 (Z: +2.42σ)"
        },
        {
          "label": "23:53",
          "score": 100,
          "metric": "ETH/BTC: 0.03212 (Z: +2.10σ)"
        },
        {
          "label": "00:13",
          "score": 100,
          "metric": "ETH/BTC: 0.03208 (Z: +1.96σ)"
        },
        {
          "label": "00:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03221 (Z: +2.22σ)"
        },
        {
          "label": "00:53",
          "score": 100,
          "metric": "ETH/BTC: 0.03229 (Z: +2.35σ)"
        },
        {
          "label": "01:13",
          "score": 100,
          "metric": "ETH/BTC: 0.03227 (Z: +2.20σ)"
        },
        {
          "label": "01:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03231 (Z: +2.20σ)"
        },
        {
          "label": "01:53",
          "score": 100,
          "metric": "ETH/BTC: 0.03234 (Z: +2.19σ)"
        },
        {
          "label": "02:13",
          "score": 100,
          "metric": "ETH/BTC: 0.03214 (Z: +1.67σ)"
        },
        {
          "label": "02:33",
          "score": 100,
          "metric": "ETH/BTC: 0.03208 (Z: +1.50σ)"
        },
        {
          "label": "02:53",
          "score": 86,
          "metric": "ETH/BTC: 0.03200 (Z: +1.30σ)"
        },
        {
          "label": "03:13",
          "score": 91,
          "metric": "ETH/BTC: 0.03204 (Z: +1.36σ)"
        },
        {
          "label": "03:33",
          "score": 86,
          "metric": "ETH/BTC: 0.03202 (Z: +1.29σ)"
        },
        {
          "label": "03:53",
          "score": 89,
          "metric": "ETH/BTC: 0.03206 (Z: +1.33σ)"
        },
        {
          "label": "04:13",
          "score": 97,
          "metric": "ETH/BTC: 0.03214 (Z: +1.46σ)"
        },
        {
          "label": "04:33",
          "score": 83,
          "metric": "ETH/BTC: 0.03205 (Z: +1.25σ)"
        },
        {
          "label": "04:53",
          "score": 83,
          "metric": "ETH/BTC: 0.03207 (Z: +1.24σ)"
        },
        {
          "label": "05:13",
          "score": 17,
          "metric": "ETH/BTC: 0.03157 (Z: +0.26σ)"
        },
        {
          "label": "05:33",
          "score": 16,
          "metric": "ETH/BTC: 0.03156 (Z: +0.24σ)"
        },
        {
          "label": "05:53",
          "score": 11,
          "metric": "ETH/BTC: 0.03153 (Z: +0.17σ)"
        },
        {
          "label": "06:13",
          "score": 5,
          "metric": "ETH/BTC: 0.03146 (Z: +0.04σ)"
        },
        {
          "label": "06:33",
          "score": 6,
          "metric": "ETH/BTC: 0.03139 (Z: -0.09σ)"
        },
        {
          "label": "06:53",
          "score": 5,
          "metric": "ETH/BTC: 0.03143 (Z: -0.02σ)"
        },
        {
          "label": "07:13",
          "score": 5,
          "metric": "ETH/BTC: 0.03141 (Z: -0.07σ)"
        },
        {
          "label": "07:33",
          "score": 7,
          "metric": "ETH/BTC: 0.03151 (Z: +0.11σ)"
        },
        {
          "label": "07:53",
          "score": 7,
          "metric": "ETH/BTC: 0.03150 (Z: +0.10σ)"
        },
        {
          "label": "08:13",
          "score": 11,
          "metric": "ETH/BTC: 0.03154 (Z: +0.16σ)"
        },
        {
          "label": "08:33",
          "score": 17,
          "metric": "ETH/BTC: 0.03134 (Z: -0.25σ)"
        },
        {
          "label": "08:53",
          "score": 11,
          "metric": "ETH/BTC: 0.03138 (Z: -0.17σ)"
        },
        {
          "label": "09:13",
          "score": 15,
          "metric": "ETH/BTC: 0.03136 (Z: -0.23σ)"
        },
        {
          "label": "09:33",
          "score": 12,
          "metric": "ETH/BTC: 0.03140 (Z: -0.18σ)"
        },
        {
          "label": "09:53",
          "score": 10,
          "metric": "ETH/BTC: 0.03142 (Z: -0.15σ)"
        },
        {
          "label": "10:13",
          "score": 22,
          "metric": "ETH/BTC: 0.03134 (Z: -0.33σ)"
        },
        {
          "label": "10:33",
          "score": 33,
          "metric": "ETH/BTC: 0.03127 (Z: -0.50σ)"
        },
        {
          "label": "10:53",
          "score": 29,
          "metric": "ETH/BTC: 0.03131 (Z: -0.43σ)"
        },
        {
          "label": "11:13",
          "score": 30,
          "metric": "ETH/BTC: 0.03131 (Z: -0.45σ)"
        },
        {
          "label": "11:33",
          "score": 23,
          "metric": "ETH/BTC: 0.03138 (Z: -0.34σ)"
        },
        {
          "label": "11:53",
          "score": 17,
          "metric": "ETH/BTC: 0.03143 (Z: -0.25σ)"
        },
        {
          "label": "12:13",
          "score": 10,
          "metric": "ETH/BTC: 0.03148 (Z: -0.15σ)"
        },
        {
          "label": "12:33",
          "score": 8,
          "metric": "ETH/BTC: 0.03150 (Z: -0.12σ)"
        },
        {
          "label": "12:53",
          "score": 22,
          "metric": "ETH/BTC: 0.03142 (Z: -0.33σ)"
        },
        {
          "label": "13:13",
          "score": 21,
          "metric": "ETH/BTC: 0.03143 (Z: -0.32σ)"
        },
        {
          "label": "13:33",
          "score": 21,
          "metric": "ETH/BTC: 0.03144 (Z: -0.32σ)"
        },
        {
          "label": "13:53",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.33σ)"
        },
        {
          "label": "14:13",
          "score": 32,
          "metric": "ETH/BTC: 0.03139 (Z: -0.48σ)"
        },
        {
          "label": "14:33",
          "score": 27,
          "metric": "ETH/BTC: 0.03143 (Z: -0.41σ)"
        },
        {
          "label": "14:53",
          "score": 46,
          "metric": "ETH/BTC: 0.03133 (Z: -0.69σ)"
        },
        {
          "label": "15:13",
          "score": 53,
          "metric": "ETH/BTC: 0.03130 (Z: -0.79σ)"
        },
        {
          "label": "15:33",
          "score": 52,
          "metric": "ETH/BTC: 0.03131 (Z: -0.77σ)"
        },
        {
          "label": "15:53",
          "score": 56,
          "metric": "ETH/BTC: 0.03130 (Z: -0.84σ)"
        },
        {
          "label": "16:13",
          "score": 54,
          "metric": "ETH/BTC: 0.03132 (Z: -0.81σ)"
        },
        {
          "label": "16:33",
          "score": 50,
          "metric": "ETH/BTC: 0.03135 (Z: -0.75σ)"
        },
        {
          "label": "16:53",
          "score": 53,
          "metric": "ETH/BTC: 0.03134 (Z: -0.79σ)"
        },
        {
          "label": "17:13",
          "score": 51,
          "metric": "ETH/BTC: 0.03136 (Z: -0.76σ)"
        },
        {
          "label": "17:33",
          "score": 43,
          "metric": "ETH/BTC: 0.03140 (Z: -0.65σ)"
        },
        {
          "label": "17:53",
          "score": 43,
          "metric": "ETH/BTC: 0.03141 (Z: -0.64σ)"
        },
        {
          "label": "18:13",
          "score": 42,
          "metric": "ETH/BTC: 0.03141 (Z: -0.64σ)"
        },
        {
          "label": "18:33",
          "score": 34,
          "metric": "ETH/BTC: 0.03146 (Z: -0.51σ)"
        },
        {
          "label": "18:53",
          "score": 63,
          "metric": "ETH/BTC: 0.03131 (Z: -0.94σ)"
        },
        {
          "label": "19:13",
          "score": 44,
          "metric": "ETH/BTC: 0.03141 (Z: -0.65σ)"
        },
        {
          "label": "19:33",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 35,
          "metric": "ETH/BTC: 0.02987 (Z: +0.53σ)"
        },
        {
          "label": "15/08 21:00",
          "score": 38,
          "metric": "ETH/BTC: 0.02984 (Z: -0.58σ)"
        },
        {
          "label": "15/08 23:00",
          "score": 60,
          "metric": "ETH/BTC: 0.02983 (Z: -0.91σ)"
        },
        {
          "label": "16/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: -1.57σ)"
        },
        {
          "label": "16/08 03:00",
          "score": 34,
          "metric": "ETH/BTC: 0.02984 (Z: -0.51σ)"
        },
        {
          "label": "16/08 05:00",
          "score": 61,
          "metric": "ETH/BTC: 0.02982 (Z: -0.92σ)"
        },
        {
          "label": "16/08 07:00",
          "score": 45,
          "metric": "ETH/BTC: 0.02983 (Z: -0.67σ)"
        },
        {
          "label": "16/08 09:00",
          "score": 17,
          "metric": "ETH/BTC: 0.02984 (Z: -0.26σ)"
        },
        {
          "label": "16/08 11:00",
          "score": 26,
          "metric": "ETH/BTC: 0.02985 (Z: +0.39σ)"
        },
        {
          "label": "16/08 13:00",
          "score": 49,
          "metric": "ETH/BTC: 0.02983 (Z: -0.73σ)"
        },
        {
          "label": "16/08 15:00",
          "score": 8,
          "metric": "ETH/BTC: 0.02985 (Z: +0.11σ)"
        },
        {
          "label": "16/08 17:00",
          "score": 20,
          "metric": "ETH/BTC: 0.02984 (Z: -0.29σ)"
        },
        {
          "label": "16/08 19:00",
          "score": 72,
          "metric": "ETH/BTC: 0.02986 (Z: +1.09σ)"
        },
        {
          "label": "16/08 21:00",
          "score": 19,
          "metric": "ETH/BTC: 0.02984 (Z: -0.29σ)"
        },
        {
          "label": "16/08 23:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02980 (Z: -1.87σ)"
        },
        {
          "label": "17/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02998 (Z: +4.58σ)"
        },
        {
          "label": "17/08 03:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02997 (Z: +2.46σ)"
        },
        {
          "label": "17/08 05:00",
          "score": 66,
          "metric": "ETH/BTC: 0.02992 (Z: +0.99σ)"
        },
        {
          "label": "17/08 07:00",
          "score": 69,
          "metric": "ETH/BTC: 0.02993 (Z: +1.03σ)"
        },
        {
          "label": "17/08 09:00",
          "score": 38,
          "metric": "ETH/BTC: 0.02991 (Z: +0.57σ)"
        },
        {
          "label": "17/08 11:00",
          "score": 37,
          "metric": "ETH/BTC: 0.02992 (Z: +0.56σ)"
        },
        {
          "label": "17/08 13:00",
          "score": 24,
          "metric": "ETH/BTC: 0.02991 (Z: +0.36σ)"
        },
        {
          "label": "17/08 15:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02979 (Z: -1.95σ)"
        },
        {
          "label": "17/08 17:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02973 (Z: -2.42σ)"
        },
        {
          "label": "17/08 19:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02965 (Z: -2.36σ)"
        },
        {
          "label": "17/08 21:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02964 (Z: -1.90σ)"
        },
        {
          "label": "17/08 23:00",
          "score": 79,
          "metric": "ETH/BTC: 0.02969 (Z: -1.18σ)"
        },
        {
          "label": "18/08 01:00",
          "score": 85,
          "metric": "ETH/BTC: 0.02965 (Z: -1.27σ)"
        },
        {
          "label": "18/08 03:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02950 (Z: -2.02σ)"
        },
        {
          "label": "18/08 05:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02950 (Z: -1.73σ)"
        },
        {
          "label": "18/08 07:00",
          "score": 63,
          "metric": "ETH/BTC: 0.02958 (Z: -0.95σ)"
        },
        {
          "label": "18/08 09:00",
          "score": 58,
          "metric": "ETH/BTC: 0.02957 (Z: -0.87σ)"
        },
        {
          "label": "18/08 11:00",
          "score": 44,
          "metric": "ETH/BTC: 0.02958 (Z: -0.67σ)"
        },
        {
          "label": "18/08 13:00",
          "score": 42,
          "metric": "ETH/BTC: 0.02957 (Z: -0.64σ)"
        },
        {
          "label": "18/08 15:00",
          "score": 11,
          "metric": "ETH/BTC: 0.02959 (Z: -0.16σ)"
        },
        {
          "label": "18/08 17:00",
          "score": 37,
          "metric": "ETH/BTC: 0.02956 (Z: -0.55σ)"
        },
        {
          "label": "18/08 19:00",
          "score": 15,
          "metric": "ETH/BTC: 0.02959 (Z: +0.23σ)"
        },
        {
          "label": "18/08 21:00",
          "score": 41,
          "metric": "ETH/BTC: 0.02961 (Z: +0.62σ)"
        },
        {
          "label": "18/08 23:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02965 (Z: +1.67σ)"
        },
        {
          "label": "19/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02970 (Z: +2.88σ)"
        },
        {
          "label": "19/08 03:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02970 (Z: +2.21σ)"
        },
        {
          "label": "19/08 05:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02973 (Z: +2.24σ)"
        },
        {
          "label": "19/08 07:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02983 (Z: +2.92σ)"
        },
        {
          "label": "19/08 09:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: +1.97σ)"
        },
        {
          "label": "19/08 11:00",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: +1.62σ)"
        },
        {
          "label": "19/08 13:00",
          "score": 59,
          "metric": "ETH/BTC: 0.02977 (Z: +0.88σ)"
        },
        {
          "label": "19/08 15:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03042 (Z: +5.56σ)"
        },
        {
          "label": "19/08 17:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03059 (Z: +3.32σ)"
        },
        {
          "label": "19/08 19:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03075 (Z: +2.68σ)"
        },
        {
          "label": "19/08 21:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03272 (Z: +4.50σ)"
        },
        {
          "label": "19/08 23:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03250 (Z: +2.43σ)"
        },
        {
          "label": "20/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03250 (Z: +1.83σ)"
        },
        {
          "label": "20/08 03:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03252 (Z: +1.51σ)"
        },
        {
          "label": "20/08 05:00",
          "score": 76,
          "metric": "ETH/BTC: 0.03237 (Z: +1.14σ)"
        },
        {
          "label": "20/08 07:00",
          "score": 60,
          "metric": "ETH/BTC: 0.03229 (Z: +0.90σ)"
        },
        {
          "label": "20/08 09:00",
          "score": 26,
          "metric": "ETH/BTC: 0.03182 (Z: +0.39σ)"
        },
        {
          "label": "20/08 11:00",
          "score": 27,
          "metric": "ETH/BTC: 0.03197 (Z: +0.40σ)"
        },
        {
          "label": "20/08 13:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03174 (Z: +0.03σ)"
        },
        {
          "label": "20/08 15:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03185 (Z: -0.03σ)"
        },
        {
          "label": "20/08 17:00",
          "score": 19,
          "metric": "ETH/BTC: 0.03218 (Z: +0.28σ)"
        },
        {
          "label": "20/08 19:00",
          "score": 16,
          "metric": "ETH/BTC: 0.03203 (Z: -0.23σ)"
        },
        {
          "label": "20/08 21:00",
          "score": 59,
          "metric": "ETH/BTC: 0.03189 (Z: -0.89σ)"
        },
        {
          "label": "20/08 23:00",
          "score": 61,
          "metric": "ETH/BTC: 0.03184 (Z: -0.92σ)"
        },
        {
          "label": "21/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03159 (Z: -1.62σ)"
        },
        {
          "label": "21/08 03:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03153 (Z: -1.53σ)"
        },
        {
          "label": "21/08 05:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03129 (Z: -2.11σ)"
        },
        {
          "label": "21/08 07:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03107 (Z: -2.67σ)"
        },
        {
          "label": "21/08 09:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03080 (Z: -2.63σ)"
        },
        {
          "label": "21/08 11:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03087 (Z: -1.78σ)"
        },
        {
          "label": "21/08 13:00",
          "score": 67,
          "metric": "ETH/BTC: 0.03109 (Z: -1.00σ)"
        },
        {
          "label": "21/08 15:00",
          "score": 80,
          "metric": "ETH/BTC: 0.03090 (Z: -1.20σ)"
        },
        {
          "label": "21/08 17:00",
          "score": 25,
          "metric": "ETH/BTC: 0.03121 (Z: -0.37σ)"
        },
        {
          "label": "21/08 19:00",
          "score": 5,
          "metric": "ETH/BTC: 0.03131 (Z: -0.00σ)"
        },
        {
          "label": "21/08 21:00",
          "score": 97,
          "metric": "ETH/BTC: 0.03175 (Z: +1.46σ)"
        },
        {
          "label": "21/08 23:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03217 (Z: +2.28σ)"
        },
        {
          "label": "22/08 01:00",
          "score": 100,
          "metric": "ETH/BTC: 0.03228 (Z: +2.12σ)"
        },
        {
          "label": "22/08 03:00",
          "score": 80,
          "metric": "ETH/BTC: 0.03198 (Z: +1.20σ)"
        },
        {
          "label": "22/08 05:00",
          "score": 22,
          "metric": "ETH/BTC: 0.03161 (Z: +0.33σ)"
        },
        {
          "label": "22/08 07:00",
          "score": 6,
          "metric": "ETH/BTC: 0.03149 (Z: +0.09σ)"
        },
        {
          "label": "22/08 09:00",
          "score": 14,
          "metric": "ETH/BTC: 0.03139 (Z: -0.20σ)"
        },
        {
          "label": "22/08 11:00",
          "score": 26,
          "metric": "ETH/BTC: 0.03136 (Z: -0.39σ)"
        },
        {
          "label": "22/08 13:00",
          "score": 22,
          "metric": "ETH/BTC: 0.03144 (Z: -0.33σ)"
        },
        {
          "label": "22/08 15:00",
          "score": 54,
          "metric": "ETH/BTC: 0.03130 (Z: -0.82σ)"
        },
        {
          "label": "22/08 17:00",
          "score": 44,
          "metric": "ETH/BTC: 0.03140 (Z: -0.66σ)"
        },
        {
          "label": "22/08 19:00",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02899 (Z: -2.90σ)"
        },
        {
          "label": "24/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02876 (Z: -1.75σ)"
        },
        {
          "label": "24/07",
          "score": 13,
          "metric": "ETH/BTC: 0.02894 (Z: -0.20σ)"
        },
        {
          "label": "24/07",
          "score": 55,
          "metric": "ETH/BTC: 0.02900 (Z: +0.82σ)"
        },
        {
          "label": "25/07",
          "score": 29,
          "metric": "ETH/BTC: 0.02900 (Z: +0.44σ)"
        },
        {
          "label": "25/07",
          "score": 55,
          "metric": "ETH/BTC: 0.02898 (Z: -0.83σ)"
        },
        {
          "label": "25/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02912 (Z: +1.90σ)"
        },
        {
          "label": "26/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02917 (Z: +1.69σ)"
        },
        {
          "label": "26/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02926 (Z: +1.81σ)"
        },
        {
          "label": "26/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02959 (Z: +2.09σ)"
        },
        {
          "label": "27/07",
          "score": 86,
          "metric": "ETH/BTC: 0.02979 (Z: +1.29σ)"
        },
        {
          "label": "27/07",
          "score": 78,
          "metric": "ETH/BTC: 0.03007 (Z: +1.16σ)"
        },
        {
          "label": "27/07",
          "score": 44,
          "metric": "ETH/BTC: 0.03002 (Z: +0.66σ)"
        },
        {
          "label": "28/07",
          "score": 98,
          "metric": "ETH/BTC: 0.02968 (Z: -1.47σ)"
        },
        {
          "label": "28/07",
          "score": 95,
          "metric": "ETH/BTC: 0.02957 (Z: -1.42σ)"
        },
        {
          "label": "28/07",
          "score": 100,
          "metric": "ETH/BTC: 0.03008 (Z: +2.07σ)"
        },
        {
          "label": "29/07",
          "score": 11,
          "metric": "ETH/BTC: 0.02981 (Z: -0.16σ)"
        },
        {
          "label": "29/07",
          "score": 80,
          "metric": "ETH/BTC: 0.02969 (Z: -1.20σ)"
        },
        {
          "label": "29/07",
          "score": 21,
          "metric": "ETH/BTC: 0.02975 (Z: -0.32σ)"
        },
        {
          "label": "30/07",
          "score": 26,
          "metric": "ETH/BTC: 0.02977 (Z: +0.39σ)"
        },
        {
          "label": "30/07",
          "score": 11,
          "metric": "ETH/BTC: 0.02971 (Z: -0.16σ)"
        },
        {
          "label": "30/07",
          "score": 31,
          "metric": "ETH/BTC: 0.02969 (Z: -0.47σ)"
        },
        {
          "label": "31/07",
          "score": 36,
          "metric": "ETH/BTC: 0.02965 (Z: -0.54σ)"
        },
        {
          "label": "31/07",
          "score": 100,
          "metric": "ETH/BTC: 0.02951 (Z: -2.26σ)"
        },
        {
          "label": "31/07",
          "score": 37,
          "metric": "ETH/BTC: 0.02966 (Z: +0.55σ)"
        },
        {
          "label": "01/08",
          "score": 52,
          "metric": "ETH/BTC: 0.02966 (Z: +0.79σ)"
        },
        {
          "label": "01/08",
          "score": 37,
          "metric": "ETH/BTC: 0.02959 (Z: -0.55σ)"
        },
        {
          "label": "01/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02940 (Z: -3.27σ)"
        },
        {
          "label": "02/08",
          "score": 18,
          "metric": "ETH/BTC: 0.02959 (Z: +0.27σ)"
        },
        {
          "label": "02/08",
          "score": 71,
          "metric": "ETH/BTC: 0.02942 (Z: -1.06σ)"
        },
        {
          "label": "02/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02964 (Z: +1.67σ)"
        },
        {
          "label": "03/08",
          "score": 53,
          "metric": "ETH/BTC: 0.02949 (Z: -0.79σ)"
        },
        {
          "label": "03/08",
          "score": 90,
          "metric": "ETH/BTC: 0.02940 (Z: -1.36σ)"
        },
        {
          "label": "03/08",
          "score": 84,
          "metric": "ETH/BTC: 0.02929 (Z: -1.25σ)"
        },
        {
          "label": "04/08",
          "score": 66,
          "metric": "ETH/BTC: 0.02923 (Z: -0.99σ)"
        },
        {
          "label": "04/08",
          "score": 50,
          "metric": "ETH/BTC: 0.02931 (Z: +0.75σ)"
        },
        {
          "label": "04/08",
          "score": 72,
          "metric": "ETH/BTC: 0.02919 (Z: -1.07σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02911 (Z: -1.53σ)"
        },
        {
          "label": "05/08",
          "score": 14,
          "metric": "ETH/BTC: 0.02916 (Z: -0.21σ)"
        },
        {
          "label": "05/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02957 (Z: +2.76σ)"
        },
        {
          "label": "06/08",
          "score": 42,
          "metric": "ETH/BTC: 0.02944 (Z: +0.64σ)"
        },
        {
          "label": "06/08",
          "score": 39,
          "metric": "ETH/BTC: 0.02952 (Z: +0.59σ)"
        },
        {
          "label": "06/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: +1.86σ)"
        },
        {
          "label": "07/08",
          "score": 6,
          "metric": "ETH/BTC: 0.02954 (Z: -0.10σ)"
        },
        {
          "label": "07/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02944 (Z: -2.96σ)"
        },
        {
          "label": "07/08",
          "score": 36,
          "metric": "ETH/BTC: 0.02953 (Z: -0.54σ)"
        },
        {
          "label": "08/08",
          "score": 38,
          "metric": "ETH/BTC: 0.02950 (Z: -0.57σ)"
        },
        {
          "label": "08/08",
          "score": 92,
          "metric": "ETH/BTC: 0.02956 (Z: +1.38σ)"
        },
        {
          "label": "08/08",
          "score": 6,
          "metric": "ETH/BTC: 0.02951 (Z: -0.09σ)"
        },
        {
          "label": "09/08",
          "score": 55,
          "metric": "ETH/BTC: 0.02954 (Z: +0.82σ)"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "ETH/BTC: 0.02954 (Z: -0.02σ)"
        },
        {
          "label": "09/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02948 (Z: -1.55σ)"
        },
        {
          "label": "10/08",
          "score": 53,
          "metric": "ETH/BTC: 0.02949 (Z: -0.79σ)"
        },
        {
          "label": "10/08",
          "score": 52,
          "metric": "ETH/BTC: 0.02948 (Z: -0.78σ)"
        },
        {
          "label": "10/08",
          "score": 69,
          "metric": "ETH/BTC: 0.02934 (Z: -1.03σ)"
        },
        {
          "label": "11/08",
          "score": 33,
          "metric": "ETH/BTC: 0.02932 (Z: -0.49σ)"
        },
        {
          "label": "11/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02943 (Z: +1.94σ)"
        },
        {
          "label": "11/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02960 (Z: +4.45σ)"
        },
        {
          "label": "12/08",
          "score": 80,
          "metric": "ETH/BTC: 0.02955 (Z: +1.20σ)"
        },
        {
          "label": "12/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02982 (Z: +2.06σ)"
        },
        {
          "label": "12/08",
          "score": 17,
          "metric": "ETH/BTC: 0.02964 (Z: -0.26σ)"
        },
        {
          "label": "13/08",
          "score": 30,
          "metric": "ETH/BTC: 0.02965 (Z: -0.44σ)"
        },
        {
          "label": "13/08",
          "score": 55,
          "metric": "ETH/BTC: 0.02961 (Z: -0.83σ)"
        },
        {
          "label": "13/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02978 (Z: +2.47σ)"
        },
        {
          "label": "14/08",
          "score": 72,
          "metric": "ETH/BTC: 0.02975 (Z: +1.08σ)"
        },
        {
          "label": "14/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02985 (Z: +1.91σ)"
        },
        {
          "label": "14/08",
          "score": 94,
          "metric": "ETH/BTC: 0.02987 (Z: +1.42σ)"
        },
        {
          "label": "15/08",
          "score": 30,
          "metric": "ETH/BTC: 0.02986 (Z: +0.45σ)"
        },
        {
          "label": "15/08",
          "score": 44,
          "metric": "ETH/BTC: 0.02983 (Z: -0.65σ)"
        },
        {
          "label": "15/08",
          "score": 8,
          "metric": "ETH/BTC: 0.02986 (Z: +0.11σ)"
        },
        {
          "label": "16/08",
          "score": 35,
          "metric": "ETH/BTC: 0.02983 (Z: -0.53σ)"
        },
        {
          "label": "16/08",
          "score": 46,
          "metric": "ETH/BTC: 0.02983 (Z: -0.69σ)"
        },
        {
          "label": "16/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02988 (Z: +2.56σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02998 (Z: +2.31σ)"
        },
        {
          "label": "17/08",
          "score": 30,
          "metric": "ETH/BTC: 0.02991 (Z: +0.45σ)"
        },
        {
          "label": "17/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02965 (Z: -2.19σ)"
        },
        {
          "label": "18/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02954 (Z: -1.65σ)"
        },
        {
          "label": "18/08",
          "score": 46,
          "metric": "ETH/BTC: 0.02957 (Z: -0.69σ)"
        },
        {
          "label": "18/08",
          "score": 29,
          "metric": "ETH/BTC: 0.02960 (Z: +0.44σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "ETH/BTC: 0.02971 (Z: +2.28σ)"
        },
        {
          "label": "19/08",
          "score": 99,
          "metric": "ETH/BTC: 0.02981 (Z: +1.48σ)"
        },
        {
          "label": "19/08",
          "score": 100,
          "metric": "ETH/BTC: 0.03081 (Z: +2.63σ)"
        },
        {
          "label": "20/08",
          "score": 96,
          "metric": "ETH/BTC: 0.03254 (Z: +1.45σ)"
        },
        {
          "label": "20/08",
          "score": 10,
          "metric": "ETH/BTC: 0.03174 (Z: +0.14σ)"
        },
        {
          "label": "20/08",
          "score": 34,
          "metric": "ETH/BTC: 0.03197 (Z: -0.50σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "ETH/BTC: 0.03136 (Z: -2.09σ)"
        },
        {
          "label": "21/08",
          "score": 100,
          "metric": "ETH/BTC: 0.03092 (Z: -1.56σ)"
        },
        {
          "label": "21/08",
          "score": 25,
          "metric": "ETH/BTC: 0.03143 (Z: +0.38σ)"
        },
        {
          "label": "22/08",
          "score": 96,
          "metric": "ETH/BTC: 0.03213 (Z: +1.44σ)"
        },
        {
          "label": "22/08",
          "score": 10,
          "metric": "ETH/BTC: 0.03148 (Z: -0.16σ)"
        },
        {
          "label": "22/08",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 100,
          "metric": "ETH/BTC: 0.04125 (Z: +2.36σ)"
        },
        {
          "label": "26/08/25",
          "score": 98,
          "metric": "ETH/BTC: 0.04109 (Z: +1.46σ)"
        },
        {
          "label": "30/08/25",
          "score": 86,
          "metric": "ETH/BTC: 0.03999 (Z: -1.29σ)"
        },
        {
          "label": "03/09/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03990 (Z: +1.74σ)"
        },
        {
          "label": "07/09/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03858 (Z: -1.52σ)"
        },
        {
          "label": "11/09/25",
          "score": 18,
          "metric": "ETH/BTC: 0.03864 (Z: +0.26σ)"
        },
        {
          "label": "15/09/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03896 (Z: -1.76σ)"
        },
        {
          "label": "19/09/25",
          "score": 98,
          "metric": "ETH/BTC: 0.03858 (Z: -1.46σ)"
        },
        {
          "label": "23/09/25",
          "score": 21,
          "metric": "ETH/BTC: 0.03719 (Z: +0.31σ)"
        },
        {
          "label": "27/09/25",
          "score": 51,
          "metric": "ETH/BTC: 0.03659 (Z: -0.77σ)"
        },
        {
          "label": "01/10/25",
          "score": 65,
          "metric": "ETH/BTC: 0.03686 (Z: +0.98σ)"
        },
        {
          "label": "05/10/25",
          "score": 46,
          "metric": "ETH/BTC: 0.03665 (Z: -0.68σ)"
        },
        {
          "label": "09/10/25",
          "score": 37,
          "metric": "ETH/BTC: 0.03586 (Z: -0.56σ)"
        },
        {
          "label": "13/10/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03685 (Z: +2.55σ)"
        },
        {
          "label": "17/10/25",
          "score": 79,
          "metric": "ETH/BTC: 0.03604 (Z: +1.18σ)"
        },
        {
          "label": "21/10/25",
          "score": 94,
          "metric": "ETH/BTC: 0.03570 (Z: -1.42σ)"
        },
        {
          "label": "25/10/25",
          "score": 69,
          "metric": "ETH/BTC: 0.03543 (Z: +1.03σ)"
        },
        {
          "label": "29/10/25",
          "score": 38,
          "metric": "ETH/BTC: 0.03537 (Z: -0.57σ)"
        },
        {
          "label": "02/11/25",
          "score": 56,
          "metric": "ETH/BTC: 0.03501 (Z: -0.84σ)"
        },
        {
          "label": "06/11/25",
          "score": 10,
          "metric": "ETH/BTC: 0.03282 (Z: -0.14σ)"
        },
        {
          "label": "10/11/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03353 (Z: -1.56σ)"
        },
        {
          "label": "03/12/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03344 (Z: +3.03σ)"
        },
        {
          "label": "07/12/25",
          "score": 100,
          "metric": "ETH/BTC: 0.03361 (Z: -2.33σ)"
        },
        {
          "label": "18/01/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03505 (Z: +1.62σ)"
        },
        {
          "label": "22/01/26",
          "score": 72,
          "metric": "ETH/BTC: 0.03301 (Z: -1.08σ)"
        },
        {
          "label": "28/01/26",
          "score": 72,
          "metric": "ETH/BTC: 0.03371 (Z: +1.08σ)"
        },
        {
          "label": "01/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02985 (Z: -2.48σ)"
        },
        {
          "label": "06/02/26",
          "score": 71,
          "metric": "ETH/BTC: 0.02925 (Z: -1.06σ)"
        },
        {
          "label": "10/02/26",
          "score": 29,
          "metric": "ETH/BTC: 0.02933 (Z: -0.43σ)"
        },
        {
          "label": "16/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02904 (Z: +1.57σ)"
        },
        {
          "label": "21/02/26",
          "score": 16,
          "metric": "ETH/BTC: 0.02894 (Z: -0.25σ)"
        },
        {
          "label": "25/02/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02939 (Z: +2.73σ)"
        },
        {
          "label": "02/03/26",
          "score": 59,
          "metric": "ETH/BTC: 0.02946 (Z: -0.88σ)"
        },
        {
          "label": "07/03/26",
          "score": 36,
          "metric": "ETH/BTC: 0.02923 (Z: +0.53σ)"
        },
        {
          "label": "11/03/26",
          "score": 99,
          "metric": "ETH/BTC: 0.02931 (Z: +1.49σ)"
        },
        {
          "label": "16/03/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03068 (Z: +2.22σ)"
        },
        {
          "label": "20/03/26",
          "score": 72,
          "metric": "ETH/BTC: 0.03037 (Z: -1.09σ)"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "ETH/BTC: 0.03049 (Z: -0.06σ)"
        },
        {
          "label": "30/03/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03038 (Z: +2.50σ)"
        },
        {
          "label": "03/04/26",
          "score": 91,
          "metric": "ETH/BTC: 0.03068 (Z: -1.36σ)"
        },
        {
          "label": "08/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03137 (Z: +2.87σ)"
        },
        {
          "label": "12/04/26",
          "score": 16,
          "metric": "ETH/BTC: 0.03094 (Z: -0.24σ)"
        },
        {
          "label": "16/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03121 (Z: -1.81σ)"
        },
        {
          "label": "20/04/26",
          "score": 16,
          "metric": "ETH/BTC: 0.03065 (Z: +0.24σ)"
        },
        {
          "label": "24/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02990 (Z: +1.58σ)"
        },
        {
          "label": "29/04/26",
          "score": 100,
          "metric": "ETH/BTC: 0.03022 (Z: +2.57σ)"
        },
        {
          "label": "03/05/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02963 (Z: +2.47σ)"
        },
        {
          "label": "07/05/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02860 (Z: -1.76σ)"
        },
        {
          "label": "13/05/26",
          "score": 62,
          "metric": "ETH/BTC: 0.02840 (Z: +0.93σ)"
        },
        {
          "label": "17/05/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02735 (Z: -5.62σ)"
        },
        {
          "label": "22/05/26",
          "score": 13,
          "metric": "ETH/BTC: 0.02747 (Z: -0.20σ)"
        },
        {
          "label": "26/05/26",
          "score": 5,
          "metric": "ETH/BTC: 0.02734 (Z: -0.06σ)"
        },
        {
          "label": "30/05/26",
          "score": 9,
          "metric": "ETH/BTC: 0.02740 (Z: -0.14σ)"
        },
        {
          "label": "04/06/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02831 (Z: +2.22σ)"
        },
        {
          "label": "08/06/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02666 (Z: +1.89σ)"
        },
        {
          "label": "12/06/26",
          "score": 69,
          "metric": "ETH/BTC: 0.02626 (Z: -1.04σ)"
        },
        {
          "label": "16/06/26",
          "score": 36,
          "metric": "ETH/BTC: 0.02706 (Z: +0.54σ)"
        },
        {
          "label": "20/06/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02689 (Z: -2.10σ)"
        },
        {
          "label": "24/06/26",
          "score": 28,
          "metric": "ETH/BTC: 0.02659 (Z: -0.41σ)"
        },
        {
          "label": "28/06/26",
          "score": 96,
          "metric": "ETH/BTC: 0.02615 (Z: -1.45σ)"
        },
        {
          "label": "02/07/26",
          "score": 44,
          "metric": "ETH/BTC: 0.02691 (Z: +0.66σ)"
        },
        {
          "label": "06/07/26",
          "score": 47,
          "metric": "ETH/BTC: 0.02810 (Z: -0.71σ)"
        },
        {
          "label": "10/07/26",
          "score": 38,
          "metric": "ETH/BTC: 0.02769 (Z: -0.58σ)"
        },
        {
          "label": "14/07/26",
          "score": 99,
          "metric": "ETH/BTC: 0.02852 (Z: +1.49σ)"
        },
        {
          "label": "18/07/26",
          "score": 51,
          "metric": "ETH/BTC: 0.02881 (Z: -0.76σ)"
        },
        {
          "label": "22/07/26",
          "score": 25,
          "metric": "ETH/BTC: 0.02907 (Z: -0.37σ)"
        },
        {
          "label": "26/07/26",
          "score": 99,
          "metric": "ETH/BTC: 0.02915 (Z: +1.49σ)"
        },
        {
          "label": "30/07/26",
          "score": 38,
          "metric": "ETH/BTC: 0.02979 (Z: +0.57σ)"
        },
        {
          "label": "03/08/26",
          "score": 9,
          "metric": "ETH/BTC: 0.02957 (Z: +0.14σ)"
        },
        {
          "label": "07/08/26",
          "score": 48,
          "metric": "ETH/BTC: 0.02958 (Z: +0.72σ)"
        },
        {
          "label": "11/08/26",
          "score": 25,
          "metric": "ETH/BTC: 0.02934 (Z: -0.37σ)"
        },
        {
          "label": "15/08/26",
          "score": 55,
          "metric": "ETH/BTC: 0.02987 (Z: +0.82σ)"
        },
        {
          "label": "19/08/26",
          "score": 100,
          "metric": "ETH/BTC: 0.02972 (Z: +2.70σ)"
        },
        {
          "label": "22/08/26",
          "score": 57,
          "metric": "ETH/BTC: 0.03134 (Z: -0.85σ)"
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
    "valor_atual_str": "Retorno 5m = -0.27%",
    "alvo_str": "Retorno 5m <= -0.40%",
    "distancia_display": "Faltam +0.13% de recuo rápido",
    "proximidade_score": 67,
    "status": "RADAR_ATIVO_5M",
    "icone": "🏹",
    "cor": "#EAB308",
    "descricao_executiva": "Caçador ultrarrápido de micro-quedas de 5 minutos no Bitcoin. Detecta quedas agudas provocadas por ordens a mercado agressivas que consomem a liquidez imediata, executando compras com ordem limite e realização em 0.80%.",
    "condicoes_ativacao": "• Retorno do Bitcoin nos últimos 5 minutos atinge queda <= -0.40% (desvio > 1.5σ de 5m).<br>• Presença de parede de liquidez no livro com bid/ask imbalance > 1.20.",
    "limitacoes_trava": "• <b>Trava Anti-Cascade:</b> Aborta se houver mais de 3 micro-quedas consecutivas sem repique.<br>• <b>Trava Wavelet Ew < 50.0:</b> Exige ausência de ondas de choque de alta energia.",
    "series_historica": {
      "1h": [
        {
          "label": "18:33",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "18:34",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "18:35",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18:36",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "18:37",
          "score": 91,
          "metric": "Retorno 5m: -0.36%"
        },
        {
          "label": "18:38",
          "score": 84,
          "metric": "Retorno 5m: -0.33%"
        },
        {
          "label": "18:39",
          "score": 100,
          "metric": "Retorno 5m: -0.43%"
        },
        {
          "label": "18:40",
          "score": 100,
          "metric": "Retorno 5m: -0.43%"
        },
        {
          "label": "18:41",
          "score": 100,
          "metric": "Retorno 5m: -0.41%"
        },
        {
          "label": "18:42",
          "score": 26,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "18:43",
          "score": 32,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "18:44",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "18:45",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "18:46",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "18:47",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "18:48",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18:49",
          "score": 19,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "18:50",
          "score": 14,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "18:51",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18:52",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "18:54",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "18:55",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "18:56",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "18:57",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "18:58",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "18:59",
          "score": 19,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "19:00",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "19:01",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19:02",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "19:03",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "19:04",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "19:05",
          "score": 5,
          "metric": "Retorno 5m: +0.25%"
        },
        {
          "label": "19:06",
          "score": 5,
          "metric": "Retorno 5m: +0.25%"
        },
        {
          "label": "19:07",
          "score": 5,
          "metric": "Retorno 5m: +0.33%"
        },
        {
          "label": "19:08",
          "score": 5,
          "metric": "Retorno 5m: +0.21%"
        },
        {
          "label": "19:09",
          "score": 5,
          "metric": "Retorno 5m: +0.19%"
        },
        {
          "label": "19:10",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "19:11",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "19:12",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19:13",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "19:14",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19:15",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "19:16",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "19:17",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "19:18",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "19:19",
          "score": 14,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "19:20",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "19:21",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "19:22",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19:23",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "19:24",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "19:25",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19:26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "19:27",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "19:28",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "19:29",
          "score": 24,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "19:30",
          "score": 30,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "19:31",
          "score": 29,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "19:32",
          "score": 47,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "19:33",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
        }
      ],
      "24h": [
        {
          "label": "19:33",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19:53",
          "score": 35,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "20:13",
          "score": 5,
          "metric": "Retorno 5m: +0.26%"
        },
        {
          "label": "20:33",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "20:53",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "21:13",
          "score": 5,
          "metric": "Retorno 5m: +0.37%"
        },
        {
          "label": "21:33",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "21:53",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "22:13",
          "score": 5,
          "metric": "Retorno 5m: +0.23%"
        },
        {
          "label": "22:33",
          "score": 42,
          "metric": "Retorno 5m: -0.17%"
        },
        {
          "label": "22:53",
          "score": 5,
          "metric": "Retorno 5m: +0.22%"
        },
        {
          "label": "23:13",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "23:33",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "23:53",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "00:13",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "00:33",
          "score": 11,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "00:53",
          "score": 5,
          "metric": "Retorno 5m: +0.17%"
        },
        {
          "label": "01:13",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "01:33",
          "score": 5,
          "metric": "Retorno 5m: +0.22%"
        },
        {
          "label": "01:53",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "02:13",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "02:33",
          "score": 30,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "02:53",
          "score": 5,
          "metric": "Retorno 5m: +0.16%"
        },
        {
          "label": "03:13",
          "score": 47,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "03:33",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "03:53",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "04:13",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "04:33",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "04:53",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "05:13",
          "score": 100,
          "metric": "Retorno 5m: -1.04%"
        },
        {
          "label": "05:33",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "05:53",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "06:13",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "06:33",
          "score": 48,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "06:53",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "07:13",
          "score": 82,
          "metric": "Retorno 5m: -0.33%"
        },
        {
          "label": "07:33",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "07:53",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "08:13",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "08:33",
          "score": 56,
          "metric": "Retorno 5m: -0.22%"
        },
        {
          "label": "08:53",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "09:13",
          "score": 5,
          "metric": "Retorno 5m: +0.27%"
        },
        {
          "label": "09:33",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "09:53",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "10:13",
          "score": 42,
          "metric": "Retorno 5m: -0.17%"
        },
        {
          "label": "10:33",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "10:53",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "11:13",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "11:33",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "11:53",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "12:13",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "12:33",
          "score": 21,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "12:53",
          "score": 22,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "13:13",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "13:33",
          "score": 23,
          "metric": "Retorno 5m: -0.09%"
        },
        {
          "label": "13:53",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "14:13",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "14:33",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "14:53",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "15:13",
          "score": 24,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "15:33",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "15:53",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "16:13",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16:33",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "16:53",
          "score": 40,
          "metric": "Retorno 5m: -0.16%"
        },
        {
          "label": "17:13",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "17:33",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "17:53",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "18:13",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "18:33",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "18:53",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "19:13",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "19:33",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
        }
      ],
      "7d": [
        {
          "label": "15/08 19:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "15/08 21:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "15/08 23:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "16/08 01:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08 03:00",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "16/08 05:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08 07:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08 09:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "16/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08 13:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "16/08 15:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "16/08 17:00",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "16/08 19:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "16/08 21:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "16/08 23:00",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "17/08 01:00",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "17/08 03:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "17/08 05:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "17/08 07:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "17/08 09:00",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "17/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "17/08 13:00",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "17/08 15:00",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "17/08 17:00",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "17/08 19:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "17/08 21:00",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "17/08 23:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18/08 01:00",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "18/08 03:00",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "18/08 05:00",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "18/08 07:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "18/08 09:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "18/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "18/08 13:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "18/08 15:00",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "18/08 17:00",
          "score": 36,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "18/08 19:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "18/08 21:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "18/08 23:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "19/08 01:00",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "19/08 03:00",
          "score": 9,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "19/08 05:00",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "19/08 07:00",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "19/08 09:00",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19/08 11:00",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19/08 13:00",
          "score": 57,
          "metric": "Retorno 5m: -0.23%"
        },
        {
          "label": "19/08 15:00",
          "score": 5,
          "metric": "Retorno 5m: +0.37%"
        },
        {
          "label": "19/08 17:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "19/08 19:00",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "19/08 21:00",
          "score": 54,
          "metric": "Retorno 5m: -0.22%"
        },
        {
          "label": "19/08 23:00",
          "score": 11,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 01:00",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "20/08 03:00",
          "score": 11,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 05:00",
          "score": 17,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "20/08 07:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "20/08 09:00",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "20/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.22%"
        },
        {
          "label": "20/08 13:00",
          "score": 100,
          "metric": "Retorno 5m: -0.60%"
        },
        {
          "label": "20/08 15:00",
          "score": 100,
          "metric": "Retorno 5m: -0.47%"
        },
        {
          "label": "20/08 17:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "20/08 19:00",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "20/08 21:00",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "20/08 23:00",
          "score": 68,
          "metric": "Retorno 5m: -0.27%"
        },
        {
          "label": "21/08 01:00",
          "score": 80,
          "metric": "Retorno 5m: -0.32%"
        },
        {
          "label": "21/08 03:00",
          "score": 56,
          "metric": "Retorno 5m: -0.22%"
        },
        {
          "label": "21/08 05:00",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "21/08 07:00",
          "score": 44,
          "metric": "Retorno 5m: -0.18%"
        },
        {
          "label": "21/08 09:00",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "21/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "21/08 13:00",
          "score": 48,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "21/08 15:00",
          "score": 72,
          "metric": "Retorno 5m: -0.29%"
        },
        {
          "label": "21/08 17:00",
          "score": 28,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "21/08 19:00",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "21/08 21:00",
          "score": 27,
          "metric": "Retorno 5m: -0.11%"
        },
        {
          "label": "21/08 23:00",
          "score": 47,
          "metric": "Retorno 5m: -0.19%"
        },
        {
          "label": "22/08 01:00",
          "score": 32,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "22/08 03:00",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "22/08 05:00",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "22/08 07:00",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "22/08 09:00",
          "score": 6,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "22/08 11:00",
          "score": 5,
          "metric": "Retorno 5m: +0.17%"
        },
        {
          "label": "22/08 13:00",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "22/08 15:00",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "22/08 17:00",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "22/08 19:00",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
        }
      ],
      "30d": [
        {
          "label": "23/07",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "24/07",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "24/07",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "25/07",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "25/07",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "26/07",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "27/07",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "27/07",
          "score": 36,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "28/07",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "28/07",
          "score": 13,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "28/07",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "29/07",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "29/07",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "29/07",
          "score": 31,
          "metric": "Retorno 5m: -0.13%"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "30/07",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "30/07",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "31/07",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "31/07",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "01/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "02/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "03/08",
          "score": 61,
          "metric": "Retorno 5m: -0.24%"
        },
        {
          "label": "03/08",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "03/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "04/08",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "04/08",
          "score": 16,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "05/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "06/08",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "06/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "07/08",
          "score": 11,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "07/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "07/08",
          "score": 9,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "08/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "09/08",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "09/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "10/08",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "10/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "11/08",
          "score": 5,
          "metric": "Retorno 5m: +0.19%"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "12/08",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "13/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "13/08",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "14/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "15/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "16/08",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "17/08",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "18/08",
          "score": 16,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "18/08",
          "score": 5,
          "metric": "Retorno 5m: +0.06%"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "19/08",
          "score": 5,
          "metric": "Retorno 5m: +0.13%"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Retorno 5m: +0.17%"
        },
        {
          "label": "20/08",
          "score": 5,
          "metric": "Retorno 5m: +0.07%"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Retorno 5m: +0.14%"
        },
        {
          "label": "21/08",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "21/08",
          "score": 5,
          "metric": "Retorno 5m: +0.31%"
        },
        {
          "label": "22/08",
          "score": 19,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "22/08",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "22/08",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
        }
      ],
      "365d": [
        {
          "label": "22/08/25",
          "score": 25,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "26/08/25",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "30/08/25",
          "score": 5,
          "metric": "Retorno 5m: +0.04%"
        },
        {
          "label": "03/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.12%"
        },
        {
          "label": "07/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "11/09/25",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "15/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "19/09/25",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "23/09/25",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
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
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "09/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "13/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.11%"
        },
        {
          "label": "17/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "21/10/25",
          "score": 64,
          "metric": "Retorno 5m: -0.26%"
        },
        {
          "label": "25/10/25",
          "score": 6,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "29/10/25",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "02/11/25",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "06/11/25",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "10/11/25",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "03/12/25",
          "score": 25,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "07/12/25",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "18/01/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "22/01/26",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "28/01/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "01/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.10%"
        },
        {
          "label": "06/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.30%"
        },
        {
          "label": "10/02/26",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "16/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.18%"
        },
        {
          "label": "21/02/26",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "25/02/26",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "02/03/26",
          "score": 30,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "07/03/26",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "11/03/26",
          "score": 7,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "16/03/26",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "20/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.00%"
        },
        {
          "label": "25/03/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "30/03/26",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "03/04/26",
          "score": 8,
          "metric": "Retorno 5m: -0.03%"
        },
        {
          "label": "08/04/26",
          "score": 20,
          "metric": "Retorno 5m: -0.08%"
        },
        {
          "label": "12/04/26",
          "score": 15,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "16/04/26",
          "score": 54,
          "metric": "Retorno 5m: -0.22%"
        },
        {
          "label": "20/04/26",
          "score": 36,
          "metric": "Retorno 5m: -0.14%"
        },
        {
          "label": "24/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "29/04/26",
          "score": 5,
          "metric": "Retorno 5m: +0.26%"
        },
        {
          "label": "03/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "07/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.09%"
        },
        {
          "label": "13/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.33%"
        },
        {
          "label": "17/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.20%"
        },
        {
          "label": "22/05/26",
          "score": 10,
          "metric": "Retorno 5m: -0.04%"
        },
        {
          "label": "26/05/26",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "30/05/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "04/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "08/06/26",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "12/06/26",
          "score": 29,
          "metric": "Retorno 5m: -0.12%"
        },
        {
          "label": "16/06/26",
          "score": 18,
          "metric": "Retorno 5m: -0.07%"
        },
        {
          "label": "20/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "24/06/26",
          "score": 5,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "28/06/26",
          "score": 5,
          "metric": "Retorno 5m: +0.03%"
        },
        {
          "label": "02/07/26",
          "score": 5,
          "metric": "Retorno 5m: -0.01%"
        },
        {
          "label": "06/07/26",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "10/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.02%"
        },
        {
          "label": "14/07/26",
          "score": 25,
          "metric": "Retorno 5m: -0.10%"
        },
        {
          "label": "18/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "22/07/26",
          "score": 6,
          "metric": "Retorno 5m: -0.02%"
        },
        {
          "label": "26/07/26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "30/07/26",
          "score": 5,
          "metric": "Retorno 5m: +0.01%"
        },
        {
          "label": "03/08/26",
          "score": 12,
          "metric": "Retorno 5m: -0.05%"
        },
        {
          "label": "07/08/26",
          "score": 14,
          "metric": "Retorno 5m: -0.06%"
        },
        {
          "label": "11/08/26",
          "score": 5,
          "metric": "Retorno 5m: +0.05%"
        },
        {
          "label": "15/08/26",
          "score": 5,
          "metric": "Retorno 5m: -0.00%"
        },
        {
          "label": "19/08/26",
          "score": 5,
          "metric": "Retorno 5m: +0.08%"
        },
        {
          "label": "22/08/26",
          "score": 67,
          "metric": "Retorno 5m: -0.27%"
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
    "BTCBRL": 396657.0,
    "USDTBRL": 5.1597,
    "PAXGBRL": 23673.167973,
    "SOLBRL": 483.0,
    "ETHBRL": 12432.35,
    "LINKBRL": 59.53,
    "BNBBRL": 3588.0,
    "ADABRL": 1.172,
    "VIX": 16.09,
    "USDBRL_COMERCIAL": 5.011499881744385
  },
  "harmonicus_sensores": {
    "pc1": 0.3939,
    "entropia": 1.7516,
    "energia_fourier": 39.3157,
    "energia_wavelet_morlet": -0.0282,
    "t0_ehlers": 13.7,
    "snr_ehlers": -15.71,
    "fluxo_ste": 0.1325,
    "regime": "TURBULENCIA_LOCAL",
    "fator_lote": 1.0
  }
};
