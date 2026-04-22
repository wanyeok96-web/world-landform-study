const TERRAIN_TYPES = ["대지형", "건조지형", "빙하지형", "하천지형", "해안지형", "화산지형", "카르스트지형"];
const BASIC_TAB = "BASIC";
const QUIZ_TAB = "QUIZ";
const ALL_TABS = [BASIC_TAB, QUIZ_TAB, ...TERRAIN_TYPES];

const TERRAIN_DATA = {
  BASIC: {
    mainImage: "images/지형 형성.png",
    basicSections: [
      {
        title: "🌋 지형을 만드는 두 가지 힘",
        renderUnderBasicHero: true,
        blocks: [
          {
            heading: "내적 작용 (Endogenic Process)",
            paragraphs: [
              "지구 내부의 열에너지를 주요 에너지원으로 하여 나타나는 지형 형성 작용이다. 에너지가 맨틀 대류를 일으키고 지각 판을 움직이며 다양한 지형이 만들어진다.",
            ],
            detailRows: [
              ["조륙 운동", "지각이 넓은 범위에 걸쳐 천천히 솟아오르거나(융기) 내려앉는(침강) 운동"],
              ["조산 운동", "지각 판이 충돌하면서 산맥을 만드는 과정이다. 이 과정에서 습곡(지층이 휘어짐)이나 단층(지층이 끊어짐)이 발생"],
              ["화산 활동", "마그마가 지표로 분출하거나 지하에서 굳으면서 지형을 변화시킴"],
              ["지진", "지구 내부 에너지가 갑작스럽게 방출되면서 지각이 흔들리는 현상"],
            ],
          },
          {
            heading: "외적 작용 (Exogenic Process)",
            paragraphs: [
              "태양 에너지를 주요 에너지원으로 하여 나타나는 지형 형성 작용이다. 태양열은 물의 순환을 일으키고 기온 차를 만들어 대기를 움직이는데, 이 과정에서 발생하는 비, 바람, 파도, 흐르는 물, 빙하 등이 지표면을 변화시키는 실질적인 도구가 된다.",
            ],
            detailRows: [
              ["풍화 작용", "암석이 제자리에서 물리적으로 깨지거나(기계적 풍화), 화학적으로 성분이 변하여(화학적 풍화) 잘게 부서지는 현상"],
              ["침식 작용", "흐르는 물, 빙하, 바람, 파도 등이 암석이나 토양을 깎아내는 과정"],
              ["운반 작용", "침식된 물질들이 물이나 바람에 실려 다른 곳으로 이동하는 과정"],
              ["퇴적 작용", "운반되던 물질들이 에너지가 약해진 지점에서 내려앉아 쌓이는 과정"],
            ],
          },
        ],
      },
      {
        title: "🔄 지형 형성의 4단계 프로세스",
        steps: [
          "1️⃣ 풍화: 암석이 제자리에서 부서지는 현상.",
          "2️⃣ 침식: 물, 빙하, 바람이 지표를 깎는 현상.",
          "3️⃣ 운반: 깎인 물질이 낮은 곳으로 이동하는 과정.",
          "4️⃣ 퇴적: 에너지가 약해진 곳에 물질이 쌓여 새로운 지형을 만드는 과정.",
        ],
      },
      {
        title: "🧱 지형의 재료: 암석의 특징",
        rocks: [
          { emoji: "🌑", name: "화성암", text: "마그마가 굳은 단단한 암석 (화산 지형, 주상절리)." },
          { emoji: "📜", name: "퇴적암", text: "퇴적물이 쌓여 굳은 암석 (카르스트, 석회암 지형)." },
          { emoji: "💎", name: "변성암", text: "열과 압력을 견딘 견고한 암석 (고산 지형)." },
        ],
      },
      {
        title: "🗺️ 우리가 배우는 지형 종류 (Terrain Navigator)",
        navigatorIntro: "우리가 현재 다루고 있는 7가지 지형군을 분류하여 보여줍니다.",
        navigator: [
          { terrain: "대지형", label: "🌍 대지형" },
          { terrain: "하천지형", label: "💧 하천 지형" },
          { terrain: "빙하지형", label: "❄️ 빙하 지형" },
          { terrain: "건조지형", label: "🏜️ 건조 지형" },
          { terrain: "해안지형", label: "🌊 해안 지형" },
          { terrain: "화산지형", label: "🌋 화산 지형" },
          { terrain: "카르스트지형", label: "🪨 카르스트 지형" },
        ],
      },
    ],
  },
  대지형: {
    descriptionList: [
      "개요: 판 구조론에 바탕을 둔 대륙 규모의 거대한 골격으로, 지구의 거시적인 지표 형태를 결정한다.",
      "형성 기구: 판의 이동과 충돌에 의한 거대한 조산 운동 및 수억 년에 걸친 광범위한 침식 작용의 산물이다.",
      "현재의 이용: 지형별로 철광석, 석탄, 석유 등 주요 자원이 매장되어 있어 세계 산업 입지의 기초가 된다.",
    ],
    featureTable: [
      [
        "안정육괴",
        "시원생대",
        "오랜 침식으로 평탄하며 지각이 매우 안정된 지형(순상지, 탁상지, 구조평야 등)으로, 철광석 매장량이 풍부하다. 대표 사례: 발트순상지, 시베리아순상지, 캐나다순상지, 브라질순상지, 오스트레일리아 순상지, 아프리카순상지",
      ],
      [
        "고기습곡산지",
        "고생대",
        "오랜 시간 침식을 받아 해발 고도가 낮고 경사가 완만해진 산지로, 석탄 매장량이 풍부하다. 대표 사례: 스칸디나비아 산맥, 우랄산맥, 애팔래치아산맥, 그레이트디바이딩산맥, 드라켄즈버그산맥",
      ],
      [
        "신기습곡산지",
        "신생대",
        "비교적 최근에 형성된 산지로, 고도가 높고 험준하며, 지각이 불안정해 화산·지진이 잦다. 석유·천연가스가 풍부하다. 대표 사례: 알프스산맥, 아틀라스산맥, 캅카스산맥, 히말라야산맥, 로키산맥, 안데스산맥",
      ],
    ],
    processColor: "#a2845e",
    beforeIcon: "🪨",
    afterIcon: "⛰️",
    quizzes: [
      {
        question: "신생대 조산 운동으로 형성되어 해발 고도가 높고 지각 운동이 활발한 산맥은?",
        choices: ["고기습곡산지", "안정 지괴", "신기습곡산지", "용암 대지"],
        answer: 2,
      },
      {
        question: "안정 지괴에 주로 매장되어 있으며, 제철 공업의 주요 원료가 되는 자원은?",
        choices: ["석탄", "철광석", "석유", "천연가스"],
        answer: 1,
      },
      {
        question: "고생대 조산 운동 이후 오랜 침식을 받아 경사가 완만해진 산맥의 명칭은?",
        choices: ["신기습곡산지", "고기습곡산지", "종상 화산", "우발라"],
        answer: 1,
      },
      {
        question: "대지형 분류 중 형성 시기가 가장 오래된 지형은?",
        choices: ["안정육괴", "고기습곡산지", "신기습곡산지", "화산지형"],
        answer: 0,
      },
      {
        question: "알프스산맥, 히말라야산맥처럼 지각 운동이 활발한 산지 유형은?",
        choices: ["안정육괴", "고기습곡산지", "신기습곡산지", "구조평야"],
        answer: 2,
      },
    ],
  },
  하천지형: {
    descriptionList: [
      "개요: 하천의 침식, 운반, 퇴적 작용을 통해 형성되는 지형으로 상류에서 하류로 갈수록 지형의 특성이 변화한다.",
      "상류 지형: 경사가 급해 침식 작용이 우세하며, 침식분지, 감입곡류하천, 하안단구 등이 발달한다.",
      "하류 지형: 경사가 완만해 퇴적 작용이 우세하며, 범람원, 삼각주 등이 발달한다.",
    ],
    featureTable: [
      ["침식분지", "하천 침식", "주위가 산지로 둘러싸인 저지대로, 암석의 경연차에 의한 차별 침식으로 형성"],
      ["하안단구", "하천 침식/퇴적", "과거의 하천 바닥이 지반 융기로 인해 현재의 하천 옆에 계단 모양으로 남은 지형"],
      ["감입곡류하천", "하천 침식", "산지 사이를 깊게 파며 흐르는 하천. 지반의 융기나 해수면 하강 시 형성"],
      ["선상지", "하천 퇴적", "계곡 입구에서 경사가 완만해지며 자갈과 모래가 부채꼴 모양으로 쌓인 지형"],
      ["자유곡류하천", "하천 침식/퇴적", "평야를 뱀처럼 휘어 흐르는 하천. 구하도, 하중도, 우각호 등이 함께 발달"],
      ["범람원", "하천 퇴적", "홍수 시 하천 주변에 형성되는 평야. 자연제방과 배후습지로 구성"],
      ["삼각주", "하천 퇴적", "하천이 바다나 호수로 들어가는 입구에 미세한 물질이 쌓여 만든 삼각형 모양의 땅"],
    ],
    processColor: "#d9f4ff",
    beforeIcon: "🌄",
    afterIcon: "🏞️",
    quizzes: [
      {
        question: "하천 하류 범람원에서 배수가 양호하여 주로 취락이나 과수원으로 이용되는 곳은?",
        choices: ["배후습지", "자연제방", "우각호", "선상지"],
        answer: 1,
      },
      {
        question: "자유 곡류 하천의 물길이 바뀌면서 분리되어 만들어진 초승달 모양의 호수는?",
        choices: ["석호", "플라야", "우각호", "권곡"],
        answer: 2,
      },
      {
        question: "하천 하구에서 유속이 느려져 미세 물질이 쌓인 비옥한 평야 지형은?",
        choices: ["삼각주", "모레인", "바하다", "해식애"],
        answer: 0,
      },
      {
        question: "자연제방 뒤쪽의 배수가 불량하여 습지가 발달하기 쉬운 지형은?",
        choices: ["하중도", "배후습지", "선상지", "하안단구"],
        answer: 1,
      },
      {
        question: "여러 개의 선상지가 이어져 넓은 완경사면을 이루는 지형은?",
        choices: ["바하다", "우각호", "리아스", "파식대"],
        answer: 0,
      },
    ],
  },
  해안지형: {
    descriptionList: [
      "개요: 파랑, 조류, 연안류 등의 작용으로 형성되는 지형으로, 암석 해안과 모래/갯벌 해안으로 구분된다.",
      "침식 지형: 파랑의 에너지가 집중되는 곳에서 해식애, 파식대, 시스텍 등이 형성된다.",
      "퇴적 지형: 파랑의 에너지가 분산되거나 조류의 영향이 큰 곳에서 사구, 사주, 갯벌 등이 형성된다.",
    ],
    featureTable: [
      ["해식애", "해안 침식", "파도의 침식으로 형성된 가파른 해안 절벽"],
      ["해안단구", "해안 침식/지반 융기", "과거 파식대가 지반 융기나 해수면 변동으로 육지화되어 계단 모양으로 남은 지형"],
      ["해식동", "해안 침식", "해식애 하단에 파도의 침식으로 뚫린 동굴"],
      ["파식대", "해안 침식", "해식애 아래에 발달한 평탄한 암석 해안 바닥"],
      ["시아치", "해안 침식", "침식이 계속되어 구멍이 뚫린 아치 모양의 바위"],
      ["시스텍", "해안 침식", "침식 후 남은 촛대 모양의 고립된 바위 기둥"],
      ["사빈", "해안 퇴적", "파랑과 연안류에 의해 모래가 쌓여 형성된 넓고 완만한 모래 해변"],
      ["사주", "해안 퇴적", "모래나 자갈이 제방 모양으로 길게 쌓인 지형"],
      ["육계도", "해안 퇴적", "사주에 의해 육지와 연결된 섬"],
      ["석호", "해안 퇴적", "사주가 만의 입구를 막아 형성된 바닷가 호수"],
      ["해안사구", "해안 퇴적", "바람에 날린 모래가 해안 뒤쪽에 쌓여 만든 모래 언덕"],
    ],
    processColor: "#007aff",
    beforeIcon: "🌊",
    afterIcon: "🏖️",
    quizzes: [
      {
        question: "파랑 에너지가 집중되는 '곶'에서 주로 발생하는 작용은?",
        choices: ["퇴적 작용", "침식 작용", "용식 작용", "빙식 작용"],
        answer: 1,
      },
      {
        question: "만의 입구를 사주가 가로막아 바다와 분리되어 형성된 호수의 명칭은?",
        choices: ["우각호", "플라야", "석호", "피오르"],
        answer: 2,
      },
      {
        question: "과거의 파식대가 지반 융기나 해수면 변동으로 인해 육지화된 계단 모양의 지형은?",
        choices: ["해식애", "해안 단구", "사구", "갯벌"],
        answer: 1,
      },
      {
        question: "파랑의 침식으로 해식애 아래에 넓고 평탄하게 발달한 암반 지형은?",
        choices: ["파식대", "사빈", "우발라", "폴리에"],
        answer: 0,
      },
      {
        question: "사주가 발달해 섬이 육지와 연결된 지형을 무엇이라 하는가?",
        choices: ["육계도", "석호", "삼각주", "에스커"],
        answer: 0,
      },
    ],
  },
  건조지형: {
    descriptionList: [
      "개요: 강수량보다 증발량이 많아 식생이 빈약하고 지표가 쉽게 노출되는 지형이다.",
      "형성 기구: 물리적 풍화와 더불어 일시적인 포상홍수(유수) 및 강한 바람에 의한 침식·퇴적 작용이 핵심이다.",
      "현재의 이용: 외래 하천 주변의 오아시스 농업, 태양광 발전 및 독특한 사막 경관을 활용한 관광업이 활발하다.",
    ],
    featureTable: [
      ["와디", "유수 지형", "비가 올 때만 물이 흐르는 건천(마른 골짜기), 교통로 활용"],
      ["선상지", "유수 지형", "산지 계곡 입구에서 유속 감소로 형성된 부채꼴 모양 퇴적 지형 (여러 개의 선상지가 합쳐진 경우 '바하다'라고 함)"],
      ["플라야", "유수 지형", "건조 분지 저지대의 일시적 호수, 물 증발 시 소금층 노출"],
      ["메사·뷰트", "바람 지형", "수평 퇴적층이 차별 침식을 받아 정상부가 평탄한 탁상 지형으로 남은 것(메사는 크고, 뷰트는 더 작고 고립됨)"],
      ["사구", "바람 지형", "바람이 모래를 운반·퇴적해 만든 모래 언덕 지형(바르한은 사구의 한 형태)"],
      ["사막포도", "바람 지형", "암석 파편이 풍화·침식 후 둥글게 연마되며 포도송이처럼 모여 나타나는 자갈 집합체"],
      ["버섯 바위", "바람 지형", "바람에 날린 모래가 암석 하단을 집중 침식하여 형성된 지형"],
      ["삼릉석", "바람 지형", "바람에 날린 모래로 인해 여러 면이 깎여, 여러 개의 모서리를 이루고 있는 돌"],
    ],
    processColor: "#f5e4c8",
    beforeIcon: "🏜️",
    afterIcon: "🌬️",
    quizzes: [
      {
        question: "비가 올 때만 일시적으로 물이 흐르는 마른 골짜기로, 평소에는 교통로로 이용되는 지형은?",
        choices: ["선상지", "와디", "삼릉석", "플라야"],
        answer: 1,
      },
      {
        question: "건조 분지 저지에 빗물·유수가 모였다가 증발하며 백색 염판 등이 드러나기도 하는 일시적 호수 지형은?",
        choices: ["플라야", "와디", "석호", "우각호"],
        answer: 0,
      },
      {
        question: "바람에 날리는 모래가 암석의 하단을 깎아 만든 지형은?",
        choices: ["선상지", "버섯 바위", "플라야", "삼각주"],
        answer: 1,
      },
      {
        question: "메사보다 규모가 작고 더 고립된 탁상 지형은?",
        choices: ["뷰트", "와디", "사구", "석회동굴"],
        answer: 0,
      },
      {
        question: "바람이 모래를 운반해 만든 대표적인 퇴적 지형은?",
        choices: ["사구", "U자곡", "해안단구", "침식분지"],
        answer: 0,
      },
    ],
  },
  화산지형: {
    descriptionList: [
      "개요: 지하 깊은 곳의 마그마가 지표로 분출하여 형성된 지형으로, 용암의 점성과 분출 방식에 따라 다양한 형태를 띱니다.",
      "화산체 종류: 용암의 성질에 따라 종 모양, 방패 모양, 층을 이룬 모양 등 화산체의 외형이 달라진다.",
      "세부 지형: 화산 분출 과정과 그 후의 침식/함몰 작용으로 칼데라, 용암동굴, 주상절리 등의 특수한 지형이 만들어진다.",
    ],
    featureTable: [
      ["종상화산", "화산체", "점성이 강한 용암이 멀리 흐르지 못하고 쌓여 만든 종 모양의 가파른 화산"],
      ["순상화산", "화산체", "점성이 약한 용암이 넓게 퍼져 흐르며 만든 방패 모양의 완만한 화산"],
      ["성층화산", "화산체", "용암과 화산쇄설물이 번갈아 쌓여 만들어진 전형적인 원뿔 모양의 큰 화산"],
      ["측화산", "화산체", "주화산의 중턱이나 기슭에 새로 구멍이 뚫려 형성된 작은 화산 (기생화산)"],
      ["용암대지", "퇴적/유출", "점성이 매우 약한 용암이 갈라진 틈으로 대량 분출하여 넓은 평원을 이룬 지형"],
      ["용암동굴", "퇴적/유출", "용암 표면은 식었으나 내부의 뜨거운 용암이 흘러나가면서 생긴 동굴"],
      ["주상절리", "퇴적/유출", "용암이 식으면서 부피가 수축하여 생긴 육각형 모양의 기둥 절벽"],
      ["칼데라", "함몰", "화산 폭발 후 지하의 마그마 방이 비어 화산체가 둥글게 주저앉은 대규모 함몰지"],
      ["칼데라호", "함몰", "칼데라에 물이 고여 형성된 호수"],
    ],
    processColor: "#ff9500",
    beforeIcon: "🌋",
    afterIcon: "🧱",
    quizzes: [
      {
        question: "점성이 약한 용암이 넓게 퍼져 방패 모양의 완만한 화산을 이루는 지형은?",
        choices: ["종상화산", "순상화산", "성층화산", "용암대지"],
        answer: 1,
      },
      {
        question: "화산 폭발 후 마그마 방이 비어 화산체가 둥글게 주저앉은 대규모 함몰지는?",
        choices: ["칼데라", "칼데라호", "측화산", "주상절리"],
        answer: 0,
      },
      {
        question: "용암이 식으며 부피가 수축하여 생긴 육각형 기둥 절벽은?",
        choices: ["용암동굴", "주상절리", "성층화산", "해식애"],
        answer: 1,
      },
      {
        question: "주화산의 사면에 새로 형성된 작은 화산체를 무엇이라 하는가?",
        choices: ["칼데라", "측화산", "순상화산", "드럼린"],
        answer: 1,
      },
      {
        question: "점성이 매우 약한 용암이 대량 분출해 넓은 평원을 이루는 지형은?",
        choices: ["용암대지", "종상화산", "폴리에", "사주"],
        answer: 0,
      },
    ],
  },
  카르스트지형: {
    descriptionList: [
      "개요: 석회암 지대에서 빗물이나 지하수의 용식 작용(화학적 풍화)으로 형성된 독특한 지형들을 말한다.",
      "지표 지형: 빗물의 용식으로 형성된 와지(돌리네, 우발라)와 넓은 평원(폴리에), 붉은 잔류 토양인 테라로사가 특징이다.",
      "지하 지형: 지하수에 의해 형성된 거대한 석회동굴 내부에는 종유석, 석순, 석주 등 다양한 침전 지형이 발달한다.",
    ],
    featureTable: [
      ["돌리네", "지표 용식", "석회암 표면이 빗물에 녹아 형성된 깔때기 모양의 오목한 저지"],
      ["우발라", "지표 용식", "여러 개의 돌리네가 합쳐져 만들어진 거대한 와지."],
      ["폴리에", "지표 용식", "카르스트 지대의 넓고 평탄한 평원으로, 배수가 지하로 이루어지며 농경지로 활용되기도 한다."],
      ["탑카르스트", "특수 용식", "고온 다습한 지역에서 차별 용식을 받아 솟아오른 탑 모양의 가파른 석회암 봉우리"],
      ["석회화단구", "특수 침전", "석회 성분이 풍부한 물이 지표로 흘러나오며 계단 모양으로 침전된 지형"],
      ["석회동굴", "지하 용식", "지하수가 석회암의 절리를 따라 흐르며 녹여 만든 거대한 지하 통로"],
      ["스펠레오뎀", "지하 침전", "동굴 내부에서 탄산칼슘이 침전되어 만든 종유석(천장), 석순(바닥), 석주(기둥)"],
      ["테라로사", "토양/풍화", "석회암이 용식되고 남은 불용성 물질이 산화되어 만들어진 붉은색 점토질 토양"],
    ],
    processColor: "#efeff4",
    beforeIcon: "🧪",
    afterIcon: "🕳️",
    quizzes: [
      {
        question: "석회암이 빗물이나 지하수에 녹는 화학적 풍화 작용을 무엇이라 하는가?",
        choices: ["풍식 작용", "용식 작용", "빙식 작용", "파식 작용"],
        answer: 1,
      },
      {
        question: "석회암 지대의 지표면이 깔때기 모양으로 움푹 패어 만들어진 지형은?",
        choices: ["우발라", "석회동굴", "돌리네", "칼데라"],
        answer: 2,
      },
      {
        question: "고온 다습한 지역에서 차별 용식을 받아 탑 모양으로 솟은 가파른 석회암 봉우리는?",
        choices: ["탑카르스트", "피오르", "사주", "드럼린"],
        answer: 0,
      },
      {
        question: "여러 개의 돌리네가 서로 연결되어 형성된 지형은?",
        choices: ["우발라", "테라로사", "칼데라호", "해안사구"],
        answer: 0,
      },
      {
        question: "석회암이 용식되고 남은 불용성 물질이 산화되어 형성된 붉은 토양은?",
        choices: ["테라로사", "모레인", "배후습지", "사빈"],
        answer: 0,
      },
    ],
  },
  빙하지형: {
    descriptionList: [
      "개요: 과거 빙하기에 대륙이나 산악을 덮었던 거대한 빙하의 이동과 해빙으로 만들어진 지형이다.",
      "형성 기구: 빙하의 거대한 무게에 의한 강력한 굴식(침식) 및 녹으면서 물질을 쌓는 퇴적 작용으로 형성된다.",
      "현재의 이용: U자곡의 수력 발전, 피오르의 천연 항구 및 알프스 등 고산 지대의 관광 자원으로 이용된다.",
    ],
    featureTable: [
      ["U자곡(빙식곡)", "침식 지형", "빙하가 골짜기를 따라 이동하며 바닥과 측면을 깎아 만든 급경사의 깊은 골짜기"],
      ["호른", "침식 지형", "사방에서 빙하의 침식을 받아 형성된 날카로운 피라미드 모양의 산봉우리"],
      ["권곡", "침식 지형", "빙하가 시작되는 산 정상부 근처에 형성된 반원형(반달 모양)의 와지"],
      ["모레인(빙퇴석)", "퇴적 지형", "빙하가 운반하던 자갈, 모래 등이 빙하가 녹은 자리에 불규칙하게 쌓인 언덕"],
      ["드럼린", "퇴적 지형", "빙하 이동 방향을 따라 형성된 숟가락을 엎어놓은 모양의 타원형 언덕"],
      ["에스커", "퇴적 지형", "빙하 밑 하천이 모래와 자갈을 쌓아 만든 좁고 긴 제방 모양의 언덕"],
    ],
    processColor: "#e0f7fa",
    beforeIcon: "🧊",
    afterIcon: "🏔️",
    quizzes: [
      {
        question: "빙하 침식으로 만들어진 U자곡에 해수면 상승으로 바닷물이 침입하여 형성된 좁고 깊은 만은?",
        choices: ["리아스", "피오르", "석호", "삼각주"],
        answer: 1,
      },
      {
        question: "빙하가 운반하던 퇴적물들이 빙하가 녹은 자리에 불규칙하게 쌓여 만들어진 언덕은?",
        choices: ["바하다", "모레인", "드럼린", "선상지"],
        answer: 1,
      },
      {
        question: "알프스의 마터호른처럼 빙하의 침식으로 만들어진 날카로운 산봉우리를 무엇이라 하는가?",
        choices: ["피오르", "권곡", "호른", "U자곡"],
        answer: 2,
      },
      {
        question: "빙하 밑 하천의 퇴적 작용으로 형성되는 좁고 긴 제방 모양의 지형은?",
        choices: ["에스커", "사주", "폴리에", "침식분지"],
        answer: 0,
      },
      {
        question: "빙하가 이동한 방향을 따라 길게 형성된 타원형 언덕은?",
        choices: ["드럼린", "주상절리", "와디", "해식동"],
        answer: 0,
      },
    ],
  },
};

let currentTerrain = BASIC_TAB;
let quizState = null;
let quizLocked = false;
let integratedQuizState = null;
let integratedQuizLocked = false;
let integratedQuizSelectedTerrain = TERRAIN_TYPES[0];
let goldenBellState = null;
let imageQuizState = null;
let dailyQuizState = null;
let teacherSelectedTerrains = new Set();
let selectedQuizMode = "";

const INTEGRATED_QUIZ_BEST_KEY = "geoex-integrated-quiz-best";
const INTEGRATED_QUIZ_LAST_MODE_KEY = "geoex-integrated-quiz-last-mode";
const DAILY_QUIZ_BEST_KEY = "geoex-daily-quiz-best";
const DAILY_QUIZ_LAST_PLAYED_KEY = "geoex-daily-quiz-last-played";

const IMAGE_QUIZ_EXCLUDED_TERRAINS = new Set(["대지형"]);
const IMAGE_QUIZ_QUESTION_COUNT = 5;
const IMAGE_QUIZ_EXCLUDED_HOTSPOTS = new Set(["item-moraine", "item-esker"]);

function escapeHtml(text) {
  return String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function renderBasicHeroForceCardHtml(bl) {
  let inner = `<h3 class="basic-hero-force-title">${escapeHtml(bl.heading)}</h3>`;
  if (bl.summary) {
    inner += `<p class="section-lead basic-hero-force-summary">${escapeHtml(bl.summary)}</p>`;
  }
  if (bl.text && !(bl.paragraphs?.length || bl.bullets?.length)) {
    inner += `<p class="section-lead basic-hero-force-text">${escapeHtml(bl.text)}</p>`;
  }
  for (const p of bl.paragraphs || []) {
    inner += `<p class="section-lead basic-hero-force-text">${escapeHtml(p)}</p>`;
  }
  if (bl.detailRows?.length) {
    inner += `<table class="basic-hero-force-table" aria-label="${escapeHtml(bl.heading)} 상세"><tbody>${bl.detailRows
      .map(
        (row) =>
          `<tr><td class="basic-hero-force-table-term">${escapeHtml(row[0])}</td><td class="basic-hero-force-table-desc">${escapeHtml(row[1])}</td></tr>`
      )
      .join("")}</tbody></table>`;
  } else if (bl.bullets?.length) {
    inner += `<ul class="basic-hero-force-list">${bl.bullets
      .map((t) => `<li class="section-lead basic-hero-force-li">${escapeHtml(t)}</li>`)
      .join("")}</ul>`;
  }
  return `<div class="basic-hero-force-card">${inner}</div>`;
}

function renderBasicHeroForcesHtml(forceSection) {
  if (!forceSection?.blocks?.length) return "";
  const cards = forceSection.blocks.map((bl) => renderBasicHeroForceCardHtml(bl)).join("");
  return `<div class="basic-hero-forces" role="group" aria-label="${escapeHtml(forceSection.title)}">${cards}</div>`;
}

function renderBasicPanel() {
  const b = TERRAIN_DATA.BASIC;
  if (!b?.basicSections?.length) return "";
  const heroForceSection = b.basicSections.find((s) => s.renderUnderBasicHero);
  const heroForcesHtml = heroForceSection ? renderBasicHeroForcesHtml(heroForceSection) : "";
  const sectionsForArticles = heroForceSection ? b.basicSections.filter((s) => !s.renderUnderBasicHero) : b.basicSections;
  let sectionsHtml = "";
  for (const sec of sectionsForArticles) {
    if (sec.blocks?.length) {
      const blocks = sec.blocks
        .map(
          (bl) =>
            `<div class="basic-block"><h3 class="basic-block-title">${escapeHtml(bl.heading)}</h3><p class="section-lead basic-block-text">${escapeHtml(bl.text)}</p></div>`
        )
        .join("");
      sectionsHtml += `<article class="terrain-section-card basic-section-card"><h2 class="section-title">${escapeHtml(sec.title)}</h2>${blocks}</article>`;
    } else if (sec.steps?.length) {
      const lis = sec.steps.map((s) => `<li class="section-lead basic-process-step">${escapeHtml(s)}</li>`).join("");
      sectionsHtml += `<article class="terrain-section-card basic-section-card"><h2 class="section-title">${escapeHtml(sec.title)}</h2><ul class="basic-process-list">${lis}</ul></article>`;
    } else if (sec.rocks?.length) {
      const rocks = sec.rocks
        .map(
          (r) =>
            `<li class="section-lead basic-rock-item"><span class="basic-rock-emoji" aria-hidden="true">${r.emoji}</span> <strong>${escapeHtml(r.name)}</strong>: ${escapeHtml(r.text)}</li>`
        )
        .join("");
      sectionsHtml += `<article class="terrain-section-card basic-section-card"><h2 class="section-title">${escapeHtml(sec.title)}</h2><ul class="basic-rock-list">${rocks}</ul></article>`;
    } else if (sec.navigator?.length) {
      const intro = sec.navigatorIntro
        ? `<p class="section-lead basic-nav-intro">${escapeHtml(sec.navigatorIntro)}</p>`
        : "";
      const buttons = sec.navigator
        .map(
          (n) =>
            `<button type="button" class="step-pill basic-nav-pill" data-terrain="${escapeHtml(n.terrain)}">${escapeHtml(n.label)}</button>`
        )
        .join("");
      sectionsHtml += `<article class="terrain-section-card basic-section-card"><h2 class="section-title">${escapeHtml(sec.title)}</h2>${intro}<div class="basic-navigator-grid" role="group" aria-label="지형군으로 이동">${buttons}</div></article>`;
    }
  }

  return `
    <section class="terrain-content step-panel basic-panel" data-terrain-panel="BASIC">
      <article class="terrain-section-card basic-hero-card">
        <h2 class="section-title">🧭 BASIC · 지형 학습의 시작</h2>
        <p class="section-lead basic-hero-lead">내적·외적 작용이 빚어내는 지표의 모습을 한눈에 살펴보세요.</p>
        <div class="basic-hero-image-wrap">
          <img src="${escapeHtml(b.mainImage)}" alt="지형의 내적 작용과 외적 작용 인포그래픽" class="basic-main-img" width="1200" height="675" loading="eager" />
        </div>
        ${heroForcesHtml}
      </article>
      ${sectionsHtml}
    </section>
  `;
}

function shuffle(list) {
  const cloned = [...list];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function closeResultModal() {
  const modal = document.getElementById("terrain-result-modal");
  if (modal) modal.hidden = true;
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (_error) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (_error) {
    // localStorage 사용 불가 환경에서는 조용히 무시
  }
}

function loadIntegratedQuizBest() {
  const raw = safeStorageGet(INTEGRATED_QUIZ_BEST_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const score = Number(parsed.score);
    const total = Number(parsed.total);
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return null;
    return { score, total };
  } catch (_error) {
    return null;
  }
}

function saveIntegratedQuizBest(score, total) {
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;
  safeStorageSet(INTEGRATED_QUIZ_BEST_KEY, JSON.stringify({ score, total }));
}

function loadIntegratedQuizLastMode() {
  const raw = safeStorageGet(INTEGRATED_QUIZ_LAST_MODE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    const mode = String(parsed?.mode || "").trim();
    const terrainKey = String(parsed?.terrainKey || "").trim();
    if (!mode) return null;
    return { mode, terrainKey };
  } catch (_error) {
    return null;
  }
}

function saveIntegratedQuizLastMode(mode, terrainKey = "") {
  if (!mode) return;
  safeStorageSet(INTEGRATED_QUIZ_LAST_MODE_KEY, JSON.stringify({ mode, terrainKey }));
}

function getIntegratedModeMeta(mode) {
  if (mode === "teacher") return { label: "교사용 단원 선택 세트", count: 10 };
  if (mode === "goldenbell") return { label: "골든벨", count: 10 };
  if (mode === "image") return { label: "이미지 퀴즈", count: 5 };
  if (mode === "daily") return { label: "오늘의 챌린지", count: 5 };
  if (mode === "terrain") return { label: "단원별 퀴즈", count: 5 };
  if (mode === "exam") return { label: "실전 모드", count: 20 };
  return { label: "랜덤 퀴즈", count: 10 };
}

function getTodayDateKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function generateDailySeed(dateKey = getTodayDateKey()) {
  let hash = 0;
  for (const ch of String(dateKey)) {
    hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  }
  return hash || 1;
}

function seededShuffle(list, seed) {
  let state = seed >>> 0;
  const next = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  const cloned = [...list];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(next() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function getDailyQuestions() {
  const all = getAllTerrainQuizQuestions();
  return seededShuffle(all, generateDailySeed()).slice(0, Math.min(5, all.length));
}

function clearGoldenBellTimer() {
  if (goldenBellState?.timerId) {
    window.clearInterval(goldenBellState.timerId);
  }
  if (goldenBellState) goldenBellState.timerId = null;
}

function normalizeAnswerText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
}

function resetQuizV2States() {
  clearGoldenBellTimer();
  integratedQuizState = null;
  integratedQuizLocked = false;
  imageQuizState = null;
  dailyQuizState = null;
  goldenBellState = null;
}

function getComboBadgeText(comboCount) {
  if (!Number.isFinite(comboCount) || comboCount < 3) return "";
  if (comboCount >= 10) return "👑 GODLIKE 10 COMBO!";
  if (comboCount >= 5) return "⚡ AMAZING 5 COMBO!";
  return "🔥 3 COMBO!";
}

function getComboCelebration(comboCount) {
  const badge = getComboBadgeText(comboCount);
  return badge ? ` ${badge}` : "";
}

function loadDailyBest() {
  const raw = safeStorageGet(DAILY_QUIZ_BEST_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch (_error) {
    return null;
  }
}

function saveDailyBest(bestObj) {
  if (!bestObj || typeof bestObj !== "object") return;
  safeStorageSet(DAILY_QUIZ_BEST_KEY, JSON.stringify(bestObj));
}

function loadDailyBestForDate(dateKey) {
  const best = loadDailyBest();
  if (!best || best.dateKey !== dateKey) return null;
  const score = Number(best.score);
  const total = Number(best.total);
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return null;
  return { score, total };
}

function saveDailyBestForDate(dateKey, score, total) {
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;
  const prev = loadDailyBestForDate(dateKey);
  if (!prev || score > prev.score) {
    saveDailyBest({ dateKey, score, total });
  }
}

function renderIntegratedQuizStats() {
  const statsEl = document.getElementById("integrated-quiz-stats");
  if (!statsEl) return;

  const best = loadIntegratedQuizBest();
  if (goldenBellState?.questions?.length) {
    statsEl.innerHTML = `
      <div class="integrated-quiz-scoreboard">
        <p class="quiz-stat-item">모드: <strong>골든벨</strong></p>
        <p class="quiz-stat-item">진행: <strong>${Math.min(goldenBellState.index + 1, goldenBellState.questions.length)} / ${goldenBellState.questions.length}</strong></p>
      </div>
    `;
    return;
  }

  if (imageQuizState?.questions?.length) {
    const comboBadge = getComboBadgeText(imageQuizState.comboCount);
    statsEl.innerHTML = `
      <div class="integrated-quiz-scoreboard">
        <p class="quiz-stat-item">모드: <strong>이미지 퀴즈</strong></p>
        <p class="quiz-stat-item">진행: <strong>${Math.min(imageQuizState.index + 1, imageQuizState.questions.length)} / ${imageQuizState.questions.length}</strong></p>
        <p class="quiz-stat-item">점수: <strong>${imageQuizState.score}점</strong></p>
        ${comboBadge ? `<p class="quiz-stat-item combo-badge"><strong>${comboBadge}</strong></p>` : ""}
      </div>
    `;
    return;
  }

  if (dailyQuizState?.questions?.length) {
    const todayBest = loadDailyBestForDate(dailyQuizState.dateKey);
    statsEl.innerHTML = `
      <div class="integrated-quiz-scoreboard">
        <p class="quiz-stat-item">모드: <strong>오늘의 챌린지</strong></p>
        <p class="quiz-stat-item">오늘 날짜: <strong>${escapeHtml(dailyQuizState.dateKey)}</strong></p>
        <p class="quiz-stat-item">진행: <strong>${Math.min(dailyQuizState.index + 1, dailyQuizState.questions.length)} / ${dailyQuizState.questions.length}</strong></p>
        <p class="quiz-stat-item">점수: <strong>${dailyQuizState.score}점</strong></p>
        <p class="quiz-stat-item">오늘 최고: <strong>${todayBest ? `${todayBest.score} / ${todayBest.total}` : "기록 없음"}</strong></p>
      </div>
    `;
    return;
  }

  if (!integratedQuizState) {
    const last = loadIntegratedQuizLastMode();
    const lastLabel = last ? getIntegratedModeMeta(last.mode).label : "없음";
    statsEl.innerHTML = `
      <div class="integrated-quiz-scoreboard">
        <p class="quiz-stat-item">모드: <strong>${escapeHtml(lastLabel)}</strong></p>
        <p class="quiz-stat-item">진행: <strong>0 / 0</strong></p>
        <p class="quiz-stat-item">점수: <strong>0점</strong></p>
        <p class="quiz-stat-item">최고 점수: <strong>${best ? `${best.score} / ${best.total}` : "기록 없음"}</strong></p>
      </div>
    `;
    return;
  }

  const modeLabel = getIntegratedModeMeta(integratedQuizState.mode).label;
  const progress = Math.min(integratedQuizState.index + 1, integratedQuizState.questions.length);
  const comboBadge = getComboBadgeText(integratedQuizState.comboCount || 0);
  statsEl.innerHTML = `
    <div class="integrated-quiz-scoreboard">
      <p class="quiz-stat-item">모드: <strong>${escapeHtml(modeLabel)}</strong></p>
      <p class="quiz-stat-item">진행: <strong>${progress} / ${integratedQuizState.questions.length}</strong></p>
      <p class="quiz-stat-item">점수: <strong>${integratedQuizState.score}점</strong></p>
      <p class="quiz-stat-item">최고 점수: <strong>${best ? `${best.score} / ${best.total}` : "기록 없음"}</strong></p>
      ${comboBadge ? `<p class="quiz-stat-item combo-badge"><strong>${comboBadge}</strong></p>` : ""}
    </div>
  `;
}

function renderIntegratedQuizResultCard() {
  const root = document.getElementById("integrated-quiz-root");
  if (!root || !integratedQuizState) return;
  const total = integratedQuizState.questions.length;
  const score = integratedQuizState.score;
  const percent = Math.round((score / total) * 100);
  const message = percent >= 90 ? "완벽해요! 전 단원을 정말 탄탄하게 이해했어요." : percent >= 70 ? "좋아요! 조금만 더 복습하면 만점도 가능해요." : "핵심 개념을 다시 확인하고 다시 도전해보세요.";
  const prevBest = loadIntegratedQuizBest();
  if (!prevBest || score / total > prevBest.score / prevBest.total) {
    saveIntegratedQuizBest(score, total);
  }

  root.innerHTML = `
    <article class="integrated-quiz-result-card">
      <h3 class="section-title">🏁 통합 퀴즈 결과</h3>
      <p class="section-lead">총 ${total}문제 중 <strong>${score}문제</strong>를 맞혔습니다. (${percent}%)</p>
      <p class="section-lead">${message}</p>
      <div class="quiz-mode-grid">
        <button type="button" class="ios-button" data-action="integrated-retry">같은 모드로 다시 풀기</button>
        <button type="button" class="ios-button ios-button--secondary" data-action="integrated-reset">모드 다시 선택</button>
      </div>
    </article>
  `;
  renderIntegratedQuizStats();
}

function renderIntegratedQuizQuestion() {
  const root = document.getElementById("integrated-quiz-root");
  if (!root) return;
  if (!integratedQuizState || !integratedQuizState.questions.length) {
    root.innerHTML = `<p class="section-lead">모드를 선택하고 퀴즈를 시작하세요.</p>`;
    renderIntegratedQuizStats();
    return;
  }
  const currentQuestion = integratedQuizState.questions[integratedQuizState.index];
  if (!currentQuestion) {
    renderIntegratedQuizResultCard();
    return;
  }

  const optionsHtml = currentQuestion.choices
    .map(
      (choice, idx) =>
        `<button class="integrated-quiz-option ios-button ios-button--secondary" type="button" data-action="integrated-answer" data-choice-index="${idx}">${idx + 1}. ${escapeHtml(choice)}</button>`
    )
    .join("");

  root.innerHTML = `
    <div class="integrated-quiz-shell">
      <div class="quiz-filter-row">
        <span class="quiz-terrain-chip is-static">${escapeHtml(currentQuestion.sourceTerrain || "통합")}</span>
      </div>
      <p class="quiz-progress">문제 ${integratedQuizState.index + 1} / ${integratedQuizState.questions.length}</p>
      <p class="quiz-question">${escapeHtml(currentQuestion.question)}</p>
      <div class="quiz-options">${optionsHtml}</div>
      <p id="integrated-quiz-feedback" class="quiz-feedback"></p>
    </div>
  `;
  renderIntegratedQuizStats();
}

function startIntegratedQuiz(mode, terrainKey = "", customPool = null) {
  const allQuestions = getAllTerrainQuizQuestions();
  const modeMeta = getIntegratedModeMeta(mode);
  if (!allQuestions.length) return;

  let pool = Array.isArray(customPool) && customPool.length ? customPool : allQuestions;
  if (mode === "terrain") {
    const filtered = allQuestions.filter((q) => q.sourceTerrain === terrainKey);
    if (filtered.length) pool = filtered;
  } else if (mode === "random" && terrainKey.includes("|")) {
    const allowed = terrainKey
      .split("|")
      .map((t) => t.trim())
      .filter((t) => TERRAIN_TYPES.includes(t));
    const filtered = allQuestions.filter((q) => allowed.includes(q.sourceTerrain));
    if (filtered.length) pool = filtered;
  } else if (mode === "teacher" && !customPool) {
    const allowed = terrainKey
      .split("|")
      .map((t) => t.trim())
      .filter((t) => TERRAIN_TYPES.includes(t));
    const filtered = allQuestions.filter((q) => allowed.includes(q.sourceTerrain));
    if (filtered.length) pool = filtered;
  }
  const questions = shuffle(pool).slice(0, Math.min(modeMeta.count, pool.length));
  if (!questions.length) return;

  const terrainScope = mode === "terrain" || mode === "teacher" ? terrainKey : "";
  resetQuizV2States();
  integratedQuizState = {
    mode,
    terrainKey: terrainScope,
    questions,
    index: 0,
    score: 0,
    comboCount: 0,
  };
  integratedQuizLocked = false;
  saveIntegratedQuizLastMode(mode, integratedQuizState.terrainKey);
  renderIntegratedQuizQuestion();
}

function handleIntegratedQuizAnswer(choiceIndex) {
  if (!integratedQuizState || integratedQuizLocked) return;
  const root = document.getElementById("integrated-quiz-root");
  const feedback = document.getElementById("integrated-quiz-feedback");
  if (!root || !feedback) return;

  integratedQuizLocked = true;
  const currentQuestion = integratedQuizState.questions[integratedQuizState.index];
  const optionButtons = root.querySelectorAll("[data-action=\"integrated-answer\"]");
  const isCorrect = choiceIndex === currentQuestion.answer;

  optionButtons.forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    const idx = Number(btn.dataset.choiceIndex);
    btn.disabled = true;
    btn.classList.add("integrated-quiz-option");
    if (idx === currentQuestion.answer) btn.classList.add("is-correct");
    if (idx === choiceIndex && !isCorrect) btn.classList.add("is-wrong");
  });

  if (isCorrect) {
    integratedQuizState.score += 1;
    integratedQuizState.comboCount = Number(integratedQuizState.comboCount || 0) + 1;
    feedback.textContent = `정답입니다!${getComboCelebration(integratedQuizState.comboCount)}`;
    feedback.className = "quiz-feedback correct";
  } else {
    integratedQuizState.comboCount = 0;
    const answerText = currentQuestion.choices[currentQuestion.answer];
    feedback.textContent = `오답입니다. 정답은 ${answerText}입니다.`;
    feedback.className = "quiz-feedback wrong";
  }
  renderIntegratedQuizStats();

  window.setTimeout(() => {
    if (!integratedQuizState) return;
    integratedQuizState.index += 1;
    integratedQuizLocked = false;
    renderIntegratedQuizQuestion();
  }, 750);
}

function startTeacherCustomQuiz() {
  const selected = Array.from(teacherSelectedTerrains).filter((terrain) => TERRAIN_TYPES.includes(terrain));
  if (!selected.length) {
    window.alert("최소 1개 단원을 선택하세요.");
    return;
  }
  const pool = getAllTerrainQuizQuestions().filter((q) => selected.includes(q.sourceTerrain));
  if (!pool.length) {
    window.alert("선택한 단원에 퀴즈가 없습니다.");
    return;
  }
  startIntegratedQuiz("teacher", selected.join("|"), pool);
}

function toggleTeacherTerrainChip(terrainKey) {
  if (!TERRAIN_TYPES.includes(terrainKey)) return;
  if (teacherSelectedTerrains.has(terrainKey)) {
    teacherSelectedTerrains.delete(terrainKey);
  } else {
    teacherSelectedTerrains.add(terrainKey);
  }
}

function resetIntegratedQuiz() {
  resetQuizV2States();
  const root = document.getElementById("integrated-quiz-root");
  if (root) {
    root.innerHTML = `<p class="section-lead">모드를 선택하고 퀴즈를 시작하세요.</p>`;
  }
  renderIntegratedQuizStats();
}

function setQuizModeCardActive(mode) {
  selectedQuizMode = String(mode || "random");
  const modeButtons = document.querySelectorAll(".quiz-mode-card[data-mode]");
  modeButtons.forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    const isActive = String(btn.dataset.mode || "") === String(mode || "");
    btn.classList.toggle("is-last-selected", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function getSelectedTerrainsForQuizStart() {
  return Array.from(teacherSelectedTerrains).filter((terrain) => TERRAIN_TYPES.includes(terrain));
}

function startGoldenBellMode(selectedTerrains = null) {
  const allowedTerrains = Array.isArray(selectedTerrains) ? selectedTerrains.filter((t) => TERRAIN_TYPES.includes(t)) : null;
  const all = getAllTerrainQuizQuestions().filter((q) => !allowedTerrains || allowedTerrains.includes(q.sourceTerrain));
  if (!all.length) {
    window.alert("선택한 단원에 문제가 없습니다.");
    return;
  }
  resetQuizV2States();
  saveIntegratedQuizLastMode("goldenbell");
  goldenBellState = {
    questions: shuffle(all).slice(0, Math.min(10, all.length)),
    index: 0,
    revealed: false,
    timerId: null,
    answerChecked: false,
    selectedTerrains: allowedTerrains ? [...allowedTerrains] : null,
  };
  renderGoldenBellQuestion();
}

function renderGoldenBellQuestion() {
  const root = document.getElementById("integrated-quiz-root");
  if (!root || !goldenBellState) return;
  const current = goldenBellState.questions[goldenBellState.index];
  if (!current) {
    root.innerHTML = `
      <article class="integrated-quiz-result-card">
        <h3 class="section-title">🎤 골든벨 완료</h3>
        <p class="section-lead">모든 문제를 확인했습니다.</p>
        <button type="button" class="ios-button" data-action="goldenbell-restart">다시 시작</button>
      </article>
    `;
    renderIntegratedQuizStats();
    return;
  }

  const answerReveal = goldenBellState.revealed
    ? `<p class="quiz-feedback correct">정답 공개: ${escapeHtml(current.choices[current.answer])}</p>`
    : `<p class="quiz-feedback">정답 공개 전입니다.</p>`;

  const isFirst = goldenBellState.index <= 0;
  const isLast = goldenBellState.index >= goldenBellState.questions.length - 1;

  root.innerHTML = `
    <section class="goldenbell-shell">
      <div class="goldenbell-head-row">
        <div class="integrated-quiz-scoreboard">
          <p class="quiz-stat-item">진행: <strong>${goldenBellState.index + 1} / ${goldenBellState.questions.length}</strong></p>
          <p class="quiz-stat-item">출처: <strong>${escapeHtml(current.sourceTerrain || "통합")}</strong></p>
        </div>
        <button type="button" class="ios-button ios-button--secondary goldenbell-reveal-btn" data-action="goldenbell-reveal">정답 공개</button>
      </div>
      <div class="goldenbell-question-nav">
        <button type="button" class="ios-button ios-button--secondary goldenbell-nav-btn" data-action="goldenbell-prev" ${isFirst ? "disabled" : ""} aria-label="이전 문제">&lt;</button>
        <article class="goldenbell-question-card" aria-live="polite">
          <p class="quiz-question goldenbell-question">${escapeHtml(current.question)}</p>
        </article>
        <button type="button" class="ios-button ios-button--secondary goldenbell-nav-btn" data-action="goldenbell-next" ${isLast ? "disabled" : ""} aria-label="다음 문제">&gt;</button>
      </div>
      <div class="goldenbell-answer-row">
        <input id="goldenbell-answer-input" class="goldenbell-answer-input" type="text" placeholder="정답을 입력하세요." autocomplete="off" />
        <button type="button" class="ios-button" data-action="goldenbell-submit-answer">답안 확인</button>
      </div>
      <p id="goldenbell-answer-feedback" class="quiz-feedback"></p>
      ${answerReveal}
    </section>
  `;
  renderIntegratedQuizStats();
}

function submitGoldenBellAnswer() {
  if (!goldenBellState) return;
  const input = document.getElementById("goldenbell-answer-input");
  const feedback = document.getElementById("goldenbell-answer-feedback");
  const current = goldenBellState.questions[goldenBellState.index];
  if (!(input instanceof HTMLInputElement) || !feedback || !current) return;
  const userAnswer = normalizeAnswerText(input.value);
  if (!userAnswer) {
    feedback.textContent = "답안을 입력하세요.";
    feedback.className = "quiz-feedback wrong";
    return;
  }
  const correct = normalizeAnswerText(current.choices[current.answer]);
  if (userAnswer === correct) {
    feedback.textContent = "정답입니다!";
    feedback.className = "quiz-feedback correct";
  } else {
    feedback.textContent = `오답입니다. 정답은 ${current.choices[current.answer]}입니다.`;
    feedback.className = "quiz-feedback wrong";
  }
  goldenBellState.answerChecked = true;
}

function revealGoldenBellAnswer() {
  if (!goldenBellState || goldenBellState.revealed) return;
  goldenBellState.revealed = true;
  clearGoldenBellTimer();
  renderGoldenBellQuestion();
}

function nextGoldenBellQuestion() {
  if (!goldenBellState) return;
  if (goldenBellState.index >= goldenBellState.questions.length - 1) return;
  goldenBellState.index += 1;
  goldenBellState.revealed = false;
  goldenBellState.answerChecked = false;
  renderGoldenBellQuestion();
}

function prevGoldenBellQuestion() {
  if (!goldenBellState) return;
  if (goldenBellState.index <= 0) return;
  goldenBellState.index -= 1;
  goldenBellState.revealed = false;
  goldenBellState.answerChecked = false;
  renderGoldenBellQuestion();
}

function startImageQuiz(selectedTerrains = null) {
  const sourceTerrains = Array.isArray(selectedTerrains) ? selectedTerrains.filter((t) => TERRAIN_TYPES.includes(t)) : getSelectedTerrainsForQuizStart();
  const selectedForImage = getImageQuizTerrainCandidates(sourceTerrains);
  if (!selectedForImage.length || sourceTerrains.every((terrain) => IMAGE_QUIZ_EXCLUDED_TERRAINS.has(terrain))) {
    window.alert("다른 지형을 선택하세요.");
    return;
  }
  const questions = createImageQuizQuestions(selectedForImage);
  if (!questions.length) {
    window.alert("선택한 단원에서 이미지 퀴즈 문제를 만들 수 없습니다.");
    return;
  }
  resetQuizV2States();
  saveIntegratedQuizLastMode("image");
  imageQuizState = {
    questions,
    index: 0,
    score: 0,
    comboCount: 0,
    selectedTerrains: [...selectedForImage],
  };
  renderImageQuizQuestion();
}

function bindImageQuizFallback() {
  const img = document.querySelector("#integrated-quiz-root .image-quiz-figure img");
  const fallback = document.querySelector("#integrated-quiz-root .image-quiz-fallback");
  if (!(img instanceof HTMLImageElement) || !(fallback instanceof HTMLElement)) return;
  const showFallback = () => {
    img.hidden = true;
    fallback.hidden = false;
  };
  if (!img.complete) {
    img.addEventListener("error", showFallback, { once: true });
  } else if (img.naturalWidth === 0) {
    showFallback();
  }
}

function renderImageQuizQuestion() {
  const root = document.getElementById("integrated-quiz-root");
  if (!root) return;
  if (!imageQuizState || !imageQuizState.questions.length) {
    root.innerHTML = `<p class="section-lead">이미지 퀴즈를 시작하세요.</p>`;
    renderIntegratedQuizStats();
    return;
  }
  const current = imageQuizState.questions[imageQuizState.index];
  if (!current) {
    root.innerHTML = `
      <article class="integrated-quiz-result-card">
        <h3 class="section-title">🖼️ 이미지 퀴즈 결과</h3>
        <p class="section-lead">${imageQuizState.questions.length}문제 중 <strong>${imageQuizState.score}</strong>문제를 맞혔습니다.</p>
        <div class="quiz-mode-grid">
          <button type="button" class="ios-button" data-action="image-quiz-retry">다시 풀기</button>
          <button type="button" class="ios-button ios-button--secondary" data-action="integrated-reset">모드 다시 선택</button>
        </div>
      </article>
    `;
    renderIntegratedQuizStats();
    return;
  }

  const options = current.choices
    .map((choice, idx) => `<button class="integrated-quiz-option ios-button ios-button--secondary" type="button" data-action="image-quiz-answer" data-choice-index="${idx}">${idx + 1}. ${escapeHtml(choice)}</button>`)
    .join("");

  root.innerHTML = `
    <div class="integrated-quiz-shell">
      <figure class="image-quiz-figure">
        <img src="${escapeHtml(current.image || "")}" alt="${escapeHtml(current.question)}" loading="lazy" />
        <figcaption class="image-quiz-fallback" hidden>이미지를 불러오지 못했습니다. 텍스트 문제로 풀어주세요.</figcaption>
      </figure>
      <div class="quiz-filter-row">
        <span class="quiz-terrain-chip is-static">${escapeHtml(current.terrain || "지형 이미지")}</span>
      </div>
      <p class="quiz-progress">문제 ${imageQuizState.index + 1} / ${imageQuizState.questions.length}</p>
      <p class="quiz-question">${escapeHtml(current.question)}</p>
      <div class="quiz-options">${options}</div>
      <p id="image-quiz-feedback" class="quiz-feedback"></p>
    </div>
  `;
  bindImageQuizFallback();
  renderIntegratedQuizStats();
}

function handleImageQuizAnswer(choiceIndex) {
  if (!imageQuizState) return;
  const root = document.getElementById("integrated-quiz-root");
  const feedback = document.getElementById("image-quiz-feedback");
  if (!root || !feedback) return;
  const current = imageQuizState.questions[imageQuizState.index];
  if (!current) return;

  const buttons = root.querySelectorAll("[data-action=\"image-quiz-answer\"]");
  const isCorrect = choiceIndex === current.answer;
  buttons.forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    const idx = Number(btn.dataset.choiceIndex);
    btn.disabled = true;
    if (idx === current.answer) btn.classList.add("is-correct");
    if (idx === choiceIndex && !isCorrect) btn.classList.add("is-wrong");
  });

  if (isCorrect) {
    imageQuizState.score += 1;
    imageQuizState.comboCount += 1;
    feedback.textContent = `정답입니다!${getComboCelebration(imageQuizState.comboCount)}`;
    feedback.className = "quiz-feedback correct";
  } else {
    imageQuizState.comboCount = 0;
    feedback.textContent = `오답입니다. 정답은 ${current.choices[current.answer]}입니다.`;
    feedback.className = "quiz-feedback wrong";
  }
  renderIntegratedQuizStats();

  window.setTimeout(() => {
    if (!imageQuizState) return;
    imageQuizState.index += 1;
    renderImageQuizQuestion();
  }, 800);
}

function startDailyChallenge() {
  const questions = getDailyQuestions();
  if (!questions.length) return;
  resetQuizV2States();
  saveIntegratedQuizLastMode("daily");
  const today = getTodayDateKey();
  safeStorageSet(DAILY_QUIZ_LAST_PLAYED_KEY, today);
  dailyQuizState = {
    dateKey: today,
    questions,
    index: 0,
    score: 0,
  };
  renderDailyChallengeQuestion();
}

function renderDailyChallengeQuestion() {
  const root = document.getElementById("integrated-quiz-root");
  if (!root) return;
  if (!dailyQuizState || !dailyQuizState.questions.length) {
    root.innerHTML = `<p class="section-lead">오늘의 챌린지를 시작하세요.</p>`;
    renderIntegratedQuizStats();
    return;
  }
  const current = dailyQuizState.questions[dailyQuizState.index];
  if (!current) {
    const todayBest = loadDailyBestForDate(dailyQuizState.dateKey);
    root.innerHTML = `
      <article class="integrated-quiz-result-card daily-card">
        <h3 class="section-title">📅 오늘의 챌린지 결과</h3>
        <p class="section-lead">오늘(${escapeHtml(dailyQuizState.dateKey)}) 점수: <strong>${dailyQuizState.score} / ${dailyQuizState.questions.length}</strong></p>
        <p class="section-lead">오늘 최고 점수: <strong>${todayBest ? `${todayBest.score} / ${todayBest.total}` : "기록 없음"}</strong></p>
        <div class="quiz-mode-grid">
          <button type="button" class="ios-button" data-action="daily-retry">오늘 문제 다시 풀기</button>
          <button type="button" class="ios-button ios-button--secondary" data-action="integrated-reset">모드 다시 선택</button>
        </div>
      </article>
    `;
    renderIntegratedQuizStats();
    return;
  }

  const options = current.choices
    .map((choice, idx) => `<button class="integrated-quiz-option ios-button ios-button--secondary" type="button" data-action="daily-quiz-answer" data-choice-index="${idx}">${idx + 1}. ${escapeHtml(choice)}</button>`)
    .join("");

  root.innerHTML = `
    <div class="integrated-quiz-shell">
      <div class="quiz-filter-row">
        <span class="quiz-terrain-chip is-static">${escapeHtml(current.sourceTerrain || "통합")}</span>
        <span class="quiz-terrain-chip is-static">오늘: ${escapeHtml(dailyQuizState.dateKey)}</span>
      </div>
      <p class="quiz-progress">문제 ${dailyQuizState.index + 1} / ${dailyQuizState.questions.length}</p>
      <p class="quiz-question">${escapeHtml(current.question)}</p>
      <div class="quiz-options">${options}</div>
      <p id="daily-quiz-feedback" class="quiz-feedback"></p>
    </div>
  `;
  renderIntegratedQuizStats();
}

function handleDailyQuizAnswer(choiceIndex) {
  if (!dailyQuizState) return;
  const root = document.getElementById("integrated-quiz-root");
  const feedback = document.getElementById("daily-quiz-feedback");
  if (!root || !feedback) return;
  const current = dailyQuizState.questions[dailyQuizState.index];
  if (!current) return;

  const buttons = root.querySelectorAll("[data-action=\"daily-quiz-answer\"]");
  const isCorrect = choiceIndex === current.answer;
  buttons.forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    const idx = Number(btn.dataset.choiceIndex);
    btn.disabled = true;
    if (idx === current.answer) btn.classList.add("is-correct");
    if (idx === choiceIndex && !isCorrect) btn.classList.add("is-wrong");
  });
  if (isCorrect) {
    dailyQuizState.score += 1;
    feedback.textContent = "정답입니다!";
    feedback.className = "quiz-feedback correct";
  } else {
    feedback.textContent = `오답입니다. 정답은 ${current.choices[current.answer]}입니다.`;
    feedback.className = "quiz-feedback wrong";
  }
  renderIntegratedQuizStats();

  window.setTimeout(() => {
    if (!dailyQuizState) return;
    dailyQuizState.index += 1;
    if (dailyQuizState.index >= dailyQuizState.questions.length) {
      saveDailyBestForDate(dailyQuizState.dateKey, dailyQuizState.score, dailyQuizState.questions.length);
    }
    renderDailyChallengeQuestion();
  }, 800);
}

function renderQuizHub() {
  const activeMode = ["random", "image", "goldenbell"].includes(selectedQuizMode) ? selectedQuizMode : "";

  const modeCards = [
    { action: "select-quiz-mode", mode: "random", label: "랜덤 퀴즈", desc: "선택한 단원에서 무작위로 최대 10문제를 출제합니다." },
    { action: "select-quiz-mode", mode: "image", label: "이미지 퀴즈", desc: "지형 이미지를 보고 4지선다 문제를 풉니다." },
    { action: "select-quiz-mode", mode: "goldenbell", label: "골든벨", desc: "문제를 중앙 카드로 보여 주고 답안 입력으로 진행합니다." },
  ]
    .map(
      (item) => `
      <button
        type="button"
        class="quiz-mode-card ${activeMode === item.mode ? "is-last-selected" : ""}"
        data-action="${item.action}"
        data-mode="${item.mode}"
        aria-pressed="${activeMode === item.mode ? "true" : "false"}"
      >
        <strong>${item.label}</strong>
        <span>${item.desc}</span>
      </button>`
    )
    .join("");

  const teacherChips = TERRAIN_TYPES.map((terrain) => {
    const selected = teacherSelectedTerrains.has(terrain);
    return `
      <button
        type="button"
        class="teacher-chip ${selected ? "active" : ""}"
        data-action="teacher-toggle-chip"
        data-terrain="${terrain}"
        aria-pressed="${selected ? "true" : "false"}"
      >
        ${terrain}
      </button>`;
  }).join("");

  return `
    <section class="quiz-hub" aria-label="통합 퀴즈">
      <article id="integrated-quiz-controls" class="terrain-section-card">
        <h3 class="section-title">🎯 모드 선택</h3>
        <div class="quiz-mode-grid" role="group" aria-label="퀴즈 모드 선택">
          ${modeCards}
        </div>
      </article>
      <article class="terrain-section-card">
        <h3 class="section-title">🧑‍🏫 단원 선택</h3>
        <div class="teacher-chip-row" role="group" aria-label="교사용 단원 선택">${teacherChips}</div>
      </article>
      <div class="quiz-start-row">
        <button type="button" class="ios-button" data-action="quiz-v2-start">퀴즈 시작</button>
      </div>
      <article class="terrain-section-card">
        <h3 class="section-title">📝 문제 풀이</h3>
        <div id="integrated-quiz-root" class="integrated-quiz-shell">
          <p class="section-lead">모드와 단원을 선택한 뒤 퀴즈 시작 버튼을 누르세요.</p>
        </div>
      </article>
    </section>
  `;
}
function getAllTerrainQuizQuestions() {
  const all = [];
  for (const terrainKey of TERRAIN_TYPES) {
    const quizzes = TERRAIN_DATA[terrainKey]?.quizzes || [];
    quizzes.forEach((q) => {
      all.push({
        ...q,
        sourceTerrain: terrainKey,
      });
    });
  }
  return all;
}

function getImageQuizTerrainCandidates(selectedTerrains = null) {
  const source = Array.isArray(selectedTerrains) ? selectedTerrains : Array.from(teacherSelectedTerrains);
  const selected = source.filter(
    (terrain) => TERRAIN_TYPES.includes(terrain) && !IMAGE_QUIZ_EXCLUDED_TERRAINS.has(terrain)
  );
  if (selected.length) return selected;
  return TERRAIN_TYPES.filter((terrain) => !IMAGE_QUIZ_EXCLUDED_TERRAINS.has(terrain));
}

function getImageQuizBankByTerrain() {
  const bankByTerrain = {};
  for (const terrain of TERRAIN_TYPES) {
    if (IMAGE_QUIZ_EXCLUDED_TERRAINS.has(terrain)) continue;
    const detailImageMap = LANDFORM_DETAIL_IMAGES[terrain];
    const hotspots = getLandscapeConfig(terrain)?.hotspots || [];
    if (!detailImageMap || !hotspots.length) continue;
    const bucket = [];
    for (const spot of hotspots) {
      const hotspotId = String(spot.className || "").trim();
      const label = String(spot.name || "").trim();
      const imagePath = String(detailImageMap[hotspotId] || "").trim();
      if (IMAGE_QUIZ_EXCLUDED_HOTSPOTS.has(hotspotId)) continue;
      if (!hotspotId || !label || !imagePath) continue;
      bucket.push({
        terrain,
        hotspotId,
        label,
        image: imagePath,
      });
    }
    if (bucket.length) bankByTerrain[terrain] = bucket;
  }
  return bankByTerrain;
}

function buildImageQuizChoices(terrain, correctLabel, bankByTerrain) {
  const labels = Array.from(new Set((bankByTerrain[terrain] || []).map((item) => item.label)));
  const wrongPool = labels.filter((label) => label !== correctLabel);
  if (wrongPool.length < 3) return null;
  const choices = shuffle([correctLabel, ...shuffle(wrongPool).slice(0, 3)]);
  const answer = choices.findIndex((choice) => choice === correctLabel);
  if (answer < 0) return null;
  return { choices, answer };
}

function createImageQuizQuestions(selectedTerrains) {
  const bankByTerrain = getImageQuizBankByTerrain();
  const basePool = selectedTerrains.flatMap((terrain) => bankByTerrain[terrain] || []);
  const questions = [];
  for (const item of shuffle(basePool)) {
    const choiceSet = buildImageQuizChoices(item.terrain, item.label, bankByTerrain);
    if (!choiceSet) continue;
    questions.push({
      terrain: item.terrain,
      hotspotId: item.hotspotId,
      image: item.image,
      question: "다음 지형의 명칭은?",
      choices: choiceSet.choices,
      answer: choiceSet.answer,
    });
  }
  return questions.slice(0, Math.min(IMAGE_QUIZ_QUESTION_COUNT, questions.length));
}

/**
 * 경관(섹션2) 핫스팟 → 지형 상세 모달. 개요(이미지 칸·형성 과정·특징)는 HTML, 제목만 JS로 채움.
 * 영문 부제: LANDFORM_DETAIL_EN[data-hotspot-id] 에 키를 추가하면 표시된다.
 */
const LANDFORM_DETAIL_EN = {
  "item-alluvial": "Alluvial Fan",
  "item-alluvial-fan": "Alluvial Fan",
  "item-samneung": "Inselberg",
  "item-mesa-butte": "Mesa & Butte",
  "item-barchan": "Sand Dune",
  "item-desert-grape": "Desert Grape",
  "item-erosion-basin": "Erosional Basin",
  "item-river-terrace": "River Terrace",
  "item-incised-meander": "Incised Meandering River",
  "item-free-meander": "Free Meandering River",
  "item-floodplain": "Floodplain",
  "item-delta": "Delta",
  "item-sandy-beach": "Sandy Beach",
  "item-coastal-dune": "Coastal Sand Dune",
  "item-spit": "Sand Bar",
  "item-lagoon": "Lagoon",
  "item-tied-island": "Tied Island & Tombolo",
  "item-mudflat": "Mudflat",
  "item-coastal-cliff": "Sea Cliff",
  "item-sea-cave": "Sea Cave",
  "item-wave-cut-platform": "Wave-cut Platform",
  "item-sea-arch": "Sea Arch",
  "item-sea-stack": "Sea Stack",
  "item-coastal-terrace": "Marine Terrace",
  "item-world-fjord-coast": "Fjord Coast",
  "item-world-rias-coast": "Rias Coast",
  "item-world-mudflat-coast": "Mudflat Coast",
};

/** 경관 핫스팟 상세 모달 상단 이미지: 지형별 data-hotspot-id(class) → images 경로 (없으면 슬롯만 비움) */
const LANDFORM_DETAIL_IMAGES = {
  건조지형: {
    "item-samneung": "images/건조_삼릉석.png",
    "item-alluvial": "images/건조_선상지.png",
    "item-mesa-butte": "images/건조_메사와 뷰트.png",
    "item-barchan": "images/건조_사구.png",
    "item-desert-grape": "images/건조_사막포도.png",
    "item-mushroom": "images/건조_버섯바위.png",
    "item-wadi": "images/건조_와디.png",
    "item-playa": "images/건조_플라야.png",
  },
  빙하지형: {
    "item-horn": "images/빙하_호른.jpg",
    "item-cirque": "images/빙하_권곡.jpg",
    "item-uvalley": "images/빙하_U자곡.png",
    "item-esker": "images/빙하_에스커.png",
    "item-drumlin": "images/빙하_드럼린.png",
    "item-moraine": "images/빙하_모레인.png",
    "item-fjord": "images/빙하_피오르.png",
  },
  하천지형: {
    "item-erosion-basin": "images/하천_침식분지.png",
    "item-river-terrace": "images/하천_하안단구.png",
    "item-incised-meander": "images/하천_감입곡류하천.png",
    "item-alluvial-fan": "images/하천_선상지.png",
    "item-free-meander": "images/하천_자유곡류하천.png",
    "item-floodplain": "images/하천_범람원.png",
    "item-delta": "images/하천_삼각주.png",
  },
  해안지형: {
    "item-coastal-cliff": "images/해안_해식애.png",
    "item-coastal-terrace": "images/해안_해안단구.png",
    "item-sea-cave": "images/해안_해식동.png",
    "item-wave-cut-platform": "images/해안_파식대.png",
    "item-sea-arch": "images/해안_시아치.png",
    "item-sea-stack": "images/해안_시스텍.png",
    "item-sandy-beach": "images/해안_사빈.png",
    "item-spit": "images/해안_사주.png",
    "item-tied-island": "images/해안_육계도.png",
    "item-lagoon": "images/해안_석호.png",
    "item-coastal-dune": "images/해안_해안사구.png",
    "item-mudflat": "images/하천_갯벌.png",
    "item-world-fjord-coast": "images/해안_피오르.png",
    "item-world-rias-coast": "images/해안_리아스.png",
    "item-world-mudflat-coast": "images/해안_갯벌.png",
  },
  화산지형: {
    "item-volcano-strato": "images/화산_성층화산.png",
    "item-volcano-parasite": "images/화산_측화산.png",
    "item-volcano-lava-cave": "images/화산_용암동굴.png",
    "item-volcano-caldera": "images/화산_칼데라.png",
    "item-volcano-columnar": "images/화산_주상절리.png",
    "item-volcano-shield": "images/화산_순상화산.png",
    "item-volcano-plateau": "images/화산_용암대지.png",
    "item-volcano-cinder": "images/화산_종상화산.png",
  },
  카르스트지형: {
    "item-karst-tower": "IMAGES/카르스트_탑카르스트.png",
    "item-karst-doline": "IMAGES/카르스트_돌리네.png",
    "item-karst-uvala": "IMAGES/카르스트_우발라.png",
    "item-karst-polje": "IMAGES/카르스트_폴리에.png",
    "item-karst-travertine": "IMAGES/카르스트_석회화단구.png",
    "item-karst-cave": "IMAGES/카르스트_석회동굴.png",
  },
};

/** 상단 참고 이미지 바로 아래에 추가로 표시할 이미지 (지형·핫스팟별) */
const LANDFORM_DETAIL_EXTRA_IMAGE = {
  하천지형: {
    "item-free-meander": "images/하천_자유곡류하천(2).png",
  },
};

/** 건조지형 경관 핫스팟 모달 본문: data-hotspot-id → 형성 과정·특징 문단(+선상지 하위 불릿) */
const LANDFORM_MODAL_BODY = {
  건조지형: {
    "item-wadi": {
      formation: [
        "1단계 : 건조지역에 골짜기 형태의 하천로가 존재한다.",
        "2단계 : 평소에는 강수량이 적어 물이 거의 흐르지 않는다.",
        "3단계 : 드물게 내리는 집중호우 때 급류가 흘러 침식·운반 작용을 한다.",
      ],
      features: [
        "평소에는 마른 하천이다.",
        "비가 올 때만 일시적으로 물이 흐른다.",
        "갑작스러운 홍수가 자주 발생한다.",
        "자갈과 모래가 넓게 깔린 하상이 많다.",
      ],
    },
    "item-alluvial": {
      formation: [
        "1단계 : 건조지역 산지에 집중호우가 내리면, 계곡을 따라 자갈·모래·흙이 함께 빠르게 운반된다.",
        "2단계 : 하천이 산지 출구를 벗어나 평야로 나오면서 경사가 완만해지고 유속이 급격히 감소한다.",
        "3단계 : 운반력이 약해진 하천이 퇴적물을 쌓아 산지 앞에 부채꼴 지형이 형성된다.",
      ],
      features: [
        "산지와 평야의 경계에 발달한다.",
        "위쪽은 자갈, 아래쪽은 모래가 많다.",
        "배수가 양호하고 경사가 완만하다.",
      ],
      featureParagraphParts: [[{ text: "여러 개가 연결되면 " }, { text: "바하다", strong: true }, { text: "가 된다." }]],
      featureImageCards: [{ label: "바하다", src: "IMAGES/건조_바하다.png", alt: "바하다 지형 예시 사진" }],
    },
    "item-playa": {
      formation: [
        "1단계 : 건조지역의 폐쇄 분지 저지대에 물이 흘러 들어온다.",
        "2단계 : 비가 온 뒤 분지 바닥에 얕은 호수가 일시적으로 형성된다.",
        "3단계 : 강한 증발로 물이 사라지고, 진흙·염류가 남아 평탄한 지면이 된다.",
      ],
      features: [
        "내륙 분지의 가장 낮은 곳에 발달한다.",
        "비가 오면 잠시 물이 고인다.",
        "평소에는 마른 진흙 평야 상태이다.",
        "표면에 소금기와 균열이 나타난다.",
      ],
    },
    "item-barchan": {
      formation: [
        "1단계 : 건조지역 지표에 모래가 공급된다.",
        "2단계 : 바람이 모래를 이동시키며 한곳에 쌓이기 시작한다.",
        "3단계 : 모래가 계속 퇴적되어 언덕 모양의 사구가 형성된다.",
      ],
      features: [
        "바람에 의해 형성되는 대표적인 퇴적 지형이다.",
        "바람 맞는 쪽은 완만하다.",
        "반대쪽은 급경사이다.",
        "풍향에 따라 이동하기도 한다.",
      ],
      featureParagraphParts: [[{ text: "대표적인 사구 유형으로 " }, { text: "바르한", strong: true }, { text: "이 있다." }]],
      featureImageCards: [{ label: "바르한", src: "IMAGES/건조_바르한.png", alt: "바르한 사구 예시 사진" }],
    },
    "item-mesa-butte": {
      formation: [
        "두꺼운 수평 퇴적층 지역에서 하천·풍식이 장기간 작용해 주변 지표가 깎인다.",
        "상부의 단단한 지층이 보호막 역할을 하며 침식에 상대적으로 강한 부분이 고립되어 남는다.",
        "넓고 평탄한 정상부를 가진 큰 탁상 지형은 메사, 더 작고 고립된 잔구는 뷰트로 발달한다.",
      ],
      features: [
        "정상부가 평탄하고 가장자리가 급경사인 계단형 경관이 잘 나타난다.",
        "차별 침식의 결과를 보여 주는 대표적인 건조 지역 잔존 지형이다.",
      ],
    },
    "item-desert-grape": {
      formation: [
        "1단계 : 지표면에 자갈·모래·먼지가 함께 섞여 있다.",
        "2단계 : 바람이 고운 입자를 날려 보내 제거한다.",
        "3단계 : 무거운 자갈만 표면에 남아 자갈층을 이룬다.",
      ],
      features: [
        "자갈이 지표를 덮는다.",
        "고운 입자는 아래쪽에 남는다.",
        "사막 평원에서 흔히 나타난다.",
        "풍식 후 남은 잔류 지형이다.",
      ],
    },
    "item-mushroom": {
      formation: [
        "1단계 : 일반적인 암석 기둥이나 바위가 존재한다.",
        "2단계 : 모래를 실은 바람이 지표 가까운 하부를 집중적으로 깎는다.",
        "3단계 : 아래는 가늘고 위는 넓은 버섯 모양 바위가 된다.",
      ],
      features: [
        "하부 침식이 상부보다 강하다.",
        "사막의 풍식 지형이다.",
        "바람 방향과 침식 흔적을 관찰할 수 있다.",
      ],
    },
    "item-samneung": {
      formation: [
        "1단계 : 자갈이나 암석 조각이 사막 지표에 놓여 있다.",
        "2단계 : 서로 다른 방향의 바람이 모래를 실어 암석 표면을 깎는다.",
        "3단계 : 세 개의 면과 세 개의 능선을 가진 각진 돌이 된다.",
      ],
      features: [
        "세 면이 평평하게 발달한다.",
        "날카로운 능선이 형성된다.",
        "풍향 변화의 흔적을 알 수 있다.",
      ],
    },
  },
  빙하지형: {
    "item-horn": {
      formation: [
        "여러 개의 권곡이 서로 다른 방향에서 산 정상부를 침식한다.",
        "권곡의 침식이 반복되면서 정상부가 점점 깎여 첨예한 봉우리로 남는다.",
        "결국 사면이 가파르고 뾰족한 봉우리인 호른이 형성된다.",
      ],
      features: [
        "여러 방향에서 깎인 결과, 능선과 면이 날카롭게 교차하는 형태를 보인다.",
        "산악 경관이 매우 험준하며 낙석·붕괴 위험이 큰 급경사 사면이 발달한다.",
      ],
    },
    "item-cirque": {
      formation: [
        "산지 상부의 음지 사면에 눈이 장기간 쌓여 만년설화되고, 이것이 빙하로 발달한다.",
        "빙하는 기반암을 뜯어내는 빙식과 마찰 침식으로 사면을 깊게 깎는다.",
        "침식이 계속되면 오목한 반원형 분지(권곡)가 만들어진다.",
      ],
      features: [
        "반달형·원형에 가까운 와지 형태로, 빙하 발원지의 전형적 지표이다.",
        "권곡 바닥에는 빙하가 사라진 뒤 작은 호수(권곡호)가 형성되기도 한다.",
        "여러 권곡이 인접하면 산릉이 날카로워지고, 호른 형성과도 연결된다.",
      ],
    },
    "item-uvalley": {
      formation: [
        "1단계: 하천 침식으로 형성되어 있던 기존의 V자 모양 골짜기가 나타난다.",
        "2단계: 빙하의 확장으로 V자 모양 골짜기가 U자 모양으로 침식된다.",
        "3단계: 빙하의 후퇴로 인해 U자 모양 골짜기(빙식곡, U자곡)가 노출된다.",
      ],
      features: ["바닥이 넓고 평탄하며, 급경사인 깊은 골짜기 형태가 뚜렷하다."],
      featureParagraphParts: [
        [
          { text: "주변에 본류 빙하로 합류하는 지류 빙하의 골짜기가 " },
          { text: "현곡", strong: true },
          { text: " 형태로 남아 있는 모습을 볼 수도 있다." },
        ],
        [
          { text: "해수면 상승으로 인해 U자곡이 침수된 해안을 '" },
          { text: "피오르", strong: true },
          { text: "' 해안이라고 한다." },
        ],
        [
          { text: "현곡", strong: true },
          { text: ": 본류 빙하로 합류하는 지류 빙하의 골짜기" },
        ],
        [
          { text: "피오르", strong: true },
          { text: ": 빙하의 침식으로 만들어진 U자곡에, 해수면 상승으로 바닷물이 유입되어 형성된 좁고 깊은 만" },
        ],
      ],
      featureImageCards: [
        { label: "현곡", src: "IMAGES/빙하_현곡.png", alt: "현곡 지형 예시 사진" },
        { label: "피오르", src: "IMAGES/빙하_피오르.png", alt: "피오르 해안 예시 사진" },
      ],
    },
    "item-esker": {
      formation: [
        "빙하 내부의 터널 수로를 따라 융빙수가 흐르며 퇴적물을 운반한다.",
        "수로 내부에서 모래·자갈이 길게 쌓이고, 빙하가 사라진 뒤 능선 형태로 남는다.",
      ],
      features: [
        "구불구불하고 좁고 긴 둑 모양의 제방형 지형으로 나타난다.",
        "입자가 비교적 굵은 모래·자갈이 주를 이룬다.",
        "융빙수에 의해 퇴적된 결과, 퇴적물의 크기에 따른 분급이 양호하다.",
      ],
    },
    "item-drumlin": {
      formation: [
        "빙하 아래에 자갈, 모래, 진흙이 뒤섞인 퇴적물이 두껍게 쌓인다.",
        "빙하가 이동하며 이 퇴적물을 강한 압력으로 누르고, 이동 방향을 따라 퇴적물이 길게 늘어난다.",
        "빙하가 후퇴하면 다수의 드럼린 군이 남아 과거 빙하 이동 방향을 보여준다.",
      ],
      features: [
        "숟가락을 엎어놓은 모양이나 고래의 등과 같은 유선형을 띠는 것이 특징이다.",
        "드럼린의 모양을 통해 빙하의 이동 방향을 알 수 있다.",
      ],
    },
    "item-moraine": {
      formation: [
        "빙하는 암설(자갈·모래·점토·암괴)을 운반하고, 정지·후퇴 시 이를 퇴적한다.",
        "퇴적 위치에 따라 측면, 중앙, 말단 등 다양한 형태의 모레인이 만들어진다.",
      ],
      features: [
        "빙하에 의해 끌리듯 운반되어 퇴적물의 크기에 따른 분급이 불량하다.",
        "말단부의 종퇴석을 통해, 빙하의 최대 확장 범위를 확인할 수 있다.",
      ],
    },
  },
  하천지형: {
    "item-erosion-basin": {
      formation: [
        "1단계: 시원생대 변성암으로 구성된 산지가 존재한다.",
        "2단계: 이 지역에 중생대 화강암이 관입하며, 지표면에 절리가 형성된다.",
        "3단계: 암석의 경연차에 따라 차별 침식이 발생하여, 산지로 둘러싸인 평탄한 분지가 형성된다.",
      ],
      features: [
        "주변은 산지, 내부는 평탄한 저지대이다.",
        "사람이 거주하기 좋은 공간이 많다.",
        "하천이 내부를 흐르기도 한다.",
      ],
    },
    "item-river-terrace": {
      formation: [
        "하천 주변에 범람원이나 하천 평야가 형성된다.",
        "지반 융기 또는 해수면 하강으로 하천의 하방침식이 다시 활발해진다.",
        "옛 범람원이 하천 양안에 계단 모양으로 남는다.",
      ],
      features: [
        "하천 양쪽에 평탄한 계단 지형이 나타난다.",
        "과거 하천면의 흔적이다.",
        "상류~중류 계곡 주변에서 잘 발달한다.",
      ],
    },
    "item-incised-meander": {
      formation: [
        "평야 지역에서 하천이 자유롭게 곡류하며 흐른다.",
        "지반 융기 또는 하천 침식력 증가로 하천이 아래로 파고든다.",
        "기존 곡류 형태를 유지한 채 깊은 골짜기 속으로 감입된다.",
      ],
      features: [
        "굽이치는 하천 형태가 유지된다.",
        "깊은 V자 계곡 또는 협곡이 발달한다.",
        "상류~중류 산지 지역에서 나타난다.",
      ],
    },
    "item-alluvial-fan": {
      formation: [
        "산지 계곡을 흐르던 하천이 평야로 나온다.",
        "2단계: 하천 바닥의 경사가 급격히 완만해지는 지점(경사급변점)에서, 하천의 유속이 느려진다.",
        "3단계: 유속의 감소로 하천의 운반력이 약화되며, 운반되던 자갈, 모래가 부채꼴 모양으로 퇴적되어 선상지가 형성된다.",
      ],
      features: [
        "산지 입구에 부채 모양 지형이 형성된다.",
        "입자가 굵은 퇴적물이 많다.",
        "물길이 자주 바뀐다.",
        "선상지의 형성 지점부터 선정, 선앙, 선단으로 구분되며, 선정에서 선앙으로 갈수록 입자의 크기가 작아진다.",
      ],
      featureBullets: [
        "선정: 선상지의 형성 시작 부분(조립질 퇴적, 하천 복류, 경사가 높아 인간 거주 불리)",
        "선앙: 선상지의 중간 부분(하천 복류 상태 유지, 밭농사를 주로 실시)",
        "선단: 선상지의 끝 부분(미립질 퇴적, 하천 용천, 물을 얻기 쉬움, 논농사를 주로 실시)",
      ],
    },
    "item-free-meander": {
      formation: [
        "1단계 : 하천이 중·하류의 평야 지역으로 들어오며 경사가 완만해진다.",
        "2단계 : 유속이 느려지고 좌우 측방침식이 활발해지며, 큰 S자 형태의 곡류를 만든다.",
        "3단계 : 곡류가 심해지면서 우각호·구하도 등이 형성되며, 하천 내부에는 하중도가 나타나기도 한다.",
      ],
      features: [
        "넓은 평야에서 크게 굽이치며 흐른다.",
        "하천 바깥쪽은 침식, 안쪽은 퇴적 작용이 활발하게 나타난다.",
      ],
      featureParagraphParts: [
        [
          { text: "하천이 굽이치며 흐르는 과정에서 " },
          { text: "하중도", strong: true },
          { text: ", " },
          { text: "우각호", strong: true },
          { text: ", " },
          { text: "구하도", strong: true },
          { text: " 등의 부수 지형이 나타난다." },
        ],
      ],
    },
    "item-floodplain": {
      formation: [],
      formationParagraphParts: [
        [{ text: "1단계: 하천이 범람하며 주변에 범람원이 형성된다." }],
        [
          { text: "2단계: 하천 근처에서는 조립질이 퇴적되어 " },
          { text: "자연제방", strong: true },
          { text: "이 형성된다." },
        ],
        [
          { text: "3단계: 하천으로부터 멀어질수록 미립질이 퇴적되어 " },
          { text: "배후습지", strong: true },
          { text: "가 형성된다." },
        ],
      ],
      features: [
        "하천 주변에 형성된 넓고 평탄한 충적 평야이다.",
        "토양이 비옥하여 농업에 유리하다.",
        "하천 범람 시 홍수 피해 가능성이 있다.",
      ],
      featureParagraphParts: [
        [
          { text: "하천 근처에서는 " },
          { text: "자연제방", strong: true },
          { text: "이, 하천으로부터 멀어질수록 " },
          { text: "배후습지", strong: true },
          { text: "가 나타난다." },
        ],
        [
          { text: "- " },
          { text: "자연제방", strong: true },
          {
            text: ": 하천 근처에서 나타나는 범람원의 일부이다. 조립질 퇴적물로 구성되어 배수가 상대적으로 양호하고, 밭농사가 주로 이루어진다.",
          },
        ],
        [
          { text: "- " },
          { text: "배후습지", strong: true },
          {
            text: ": 자연제방 이후에 나타나는 범람원의 일부이다. 미립질 퇴적물로 구성되어 배수가 불량하고, 논농사가 주로 이루어진다.",
          },
        ],
      ],
    },
    "item-delta": {
      formation: [
        "1단계: 모래와 자갈을 운반하던 하천이 바다나 호수로 흘러들어간다.",
        "2단계: 유속이 급격히 느려지며, 운반되던 모래와 자갈이 퇴적되기 시작한다.",
        "3단계: 퇴적물이 수면 위로 노출되며, 하나의 퇴적지형을 이루고, 이를 삼각주라고 한다.",
      ],
      features: [
        "하천 하구(바다와 하천이 만나는 지점)에 나타나는 부채꼴 모양의 퇴적 지형이다.",
        "퇴적 지형이 형성되면서, 하천의 흐름이 갈라지는 '분류' 현상이 함께 발생할 수 있다.",
        "토질이 비옥하여, 농경지로 이용되기도 한다.",
      ],
    },
  },
  해안지형: {
    "item-sandy-beach": {
      formation: [
        "형성 과정 1: 하천·해식애에서 공급된 모래가 해안으로 유입된다.",
        "형성 과정 2: 육지로 밀려오는 파랑에 의해 해안에 모래가 퇴적된다.",
        "형성 과정 3: 파랑 에너지가 약한 만에서 모래가 집중 퇴적되어 사빈이 발달한다.",
      ],
      features: [
        "특징 1: 파랑 에너지를 줄여 배후 육지를 보호하는 완충 지대 역할을 한다.",
        "특징 2: 평탄한 모래 지형으로 해수욕장 등 관광·여가 활용도가 높다.",
        "특징 3: 배후 식생 발달과 함께 해안 사구 형성의 기반이 된다.",
      ],
    },
    "item-coastal-dune": {
      formation: [
        "형성 과정 1: 사빈에 쌓인 모래가 건조되어 바람에 이동 가능한 상태가 된다.",
        "형성 과정 2: 바다에서 불어오는 바람이 모래를 내륙 쪽으로 운반한다.",
        "형성 과정 3: 식생·장애물 주변에 모래가 쌓여 사구가 성장·고정된다.",
      ],
      features: [
        "특징 1: 사구는 폭풍·해일 시 배후 지역을 보호하는 1차 방어선 역할을 한다.",
        "특징 2: 모래층 공극에 담수가 저장되어 해안 지하수원 기능을 한다.",
        "특징 3: 염분·건조 환경에 적응한 특이 생태계가 발달한다.",
        "특징 4: 주로 사빈 배후에 해안선과 평행하게 분포한다.",
      ],
    },
    "item-spit": {
      formation: [
        "형성 과정 1: 연안류와 파랑이 해안선을 따라 모래·자갈을 운반한다.",
        "형성 과정 2: 파랑 에너지가 약해지는 구간에서 퇴적이 시작된다.",
        "형성 과정 3: 퇴적지형이 길게 자라 해안선과 평행한 둑 모양 사주가 형성된다.",
      ],
      features: [
        "특징 1: 사주가 만 입구를 막으면 뒤쪽에 석호가 형성될 수 있다.",
        "특징 2: 사주가 섬과 육지를 연결하면 육계사주가 된다.",
        "특징 3: 사주는 파랑·조류 변화에 따라 형태와 위치가 쉽게 변한다.",
      ],
    },
    "item-lagoon": {
      formation: [
        "형성 과정 1: 연안 퇴적으로 사주가 발달해 만 입구가 점차 좁아진다.",
        "형성 과정 2: 사주가 입구를 대부분 차단하면 바다와 분리된 석호가 형성된다.",
        "형성 과정 3: 하천 퇴적물이 누적되며 석호는 점차 얕아져 습지·육지로 변한다.",
      ],
      features: [
        "특징 1: 초기에는 바닷물과 민물이 섞인 기수호 성격을 보인다.",
        "특징 2: 시간이 지날수록 토사 퇴적으로 면적과 수심이 감소한다.",
      ],
    },
    "item-tied-island": {
      formation: [
        "형성 과정 1: 육지 가까이에 섬이 위치한 해안 조건이 먼저 갖춰진다.",
        "형성 과정 2: 섬 뒤편에서 파랑 에너지가 약해져 모래 퇴적이 진행된다.",
        "형성 과정 3: 퇴적체가 성장해 육지와 섬이 연결되면 육계도가 된다.",
      ],
      features: [
        "특징 1: 썰물 때만 연결되거나 상시 연결되는 등 연결 형태가 다양하다.",
        "특징 2: 파랑 차폐와 퇴적이 결합된 대표적인 공생 해안 지형이다.",
        "특징 3: 경관 가치가 높아 관광 자원으로 활용된다.",
      ],
    },
    "item-mudflat": {
      formation: [
        "형성 과정 1: 하천·파랑·조류가 운반한 미세 퇴적물이 조간대에 쌓인다.",
      ],
      features: [
        "특징 1: 조차가 크고 파랑이 약한 해안에서 발달한다.",
        "특징 2: 갯벌은 어업·염전·생태 보전 가치가 높은 생산적 지형이다.",
      ],
    },
    "item-coastal-cliff": {
      formation: [
        "형성 과정 1: 파랑이 해안 절벽의 하단을 집중 침식한다.",
        "형성 과정 2: 하단에 해식동 등이 발달해 상부 지지력이 약해진다.",
        "형성 과정 3: 상부가 무너지며 급경사 해식애가 형성된다.",
        "형성 과정 4: 침식이 지속되며 해식애는 점차 육지 쪽으로 후퇴한다.",
      ],
      features: [
        "특징 1: 파랑 에너지가 집중되는 곶에서 특히 잘 발달한다.",
        "특징 2: 암석 강도와 절리 발달 정도에 따라 절벽 형태가 달라진다.",
        "특징 3: 경관성이 뛰어나 주요 해안 관광 자원이 된다.",
      ],
    },
    "item-sea-cave": {
      formation: [
        "형성 과정 1: 절리·단층 등 약한 구조를 따라 침식이 시작된다.",
        "형성 과정 2: 파랑 수압과 마찰 침식이 결합해 틈이 확대된다.",
        "형성 과정 3: 침식이 진행되며 입구가 좁고 내부가 깊은 동굴이 형성된다.",
      ],
      features: [
        "특징 1: 주로 해식애 하단의 해수면 부근에서 발달한다.",
        "특징 2: 침식이 계속되면 새로운 해식애가 만들어지거나, 시아치, 시스텍으로 지형이 진화할 수 있다.",
        "특징 3: 동굴 내부 압축 공기로 강한 파음이 발생하기도 한다.",
      ],
    },
    "item-wave-cut-platform": {
      formation: [
        "형성 과정 1: 해식애 하단 침식과 붕괴로 절벽이 후퇴한다.",
        "형성 과정 2: 후퇴한 자리의 암반 바닥이 평탄면으로 노출된다.",
        "형성 과정 3: 파도와 자갈의 마모로 평탄한 파식대가 완성된다.",
      ],
      features: [
        "특징 1: 파식대는 만조 시 잠기고 간조 시 드러나는 완만한 암반면이다.",
        "특징 2: 표면에는 자갈 회전에 의한 포트홀(돌개구멍)이 발달할 수 있다.",
        "특징 3: 융기하면 해안 단구의 단구면으로 이어진다.",
      ],
    },
    "item-sea-arch": {
      formation: [
        "형성 과정 1: 곶의 양측 또는 약한 암반을 따라 해식동이 발달한다.",
        "형성 과정 2: 침식이 연결되며 아치 형태의 관통 지형이 형성된다.",
      ],
      features: [
        "특징 1: 시아치는 구조적으로 불안정해 붕괴 가능성이 큰 일시적 지형이다.",
        "특징 2: 붕괴 후에는 고립된 기둥 지형인 시스텍으로 전환된다.",
        "특징 3: 독특한 형상으로 경관·관광 가치가 높다.",
      ],
    },
    "item-sea-stack": {
      formation: [
        "형성 과정 1: 곶 침식으로 해식동과 시아치가 발달한다.",
        "형성 과정 2: 시아치 상부가 붕괴해 육지와 분리된 바위 기둥이 남는다.",
      ],
      features: [
        "특징 1: 시스텍은 과거 해안선 위치를 보여 주는 지형 지표다.",
        "특징 2: 주변보다 단단하거나 절리가 적은 암석이 잔존해 형성된다.",
        "특징 3: 독도·오륙도 등에서 대표 사례를 볼 수 있다.",
      ],
    },
    "item-coastal-terrace": {
      formation: [
        "형성 과정 1: 파랑 침식으로 해식애와 파식대가 형성된다.",
        "형성 과정 2: 지반 융기 또는 해수면 하강으로 파식대가 높은 곳으로 올라간다.",
        "형성 과정 3: 융기된 파식대가 단구면으로 남고, 하부에 새 해식 지형이 재형성된다.",
      ],
      features: [
        "특징 1: 평탄하고 배수가 양호해 취락·농경·교통 입지에 유리하다.",
        "특징 2: 동해안 등에서 전형적인 계단식 해안 지형으로 관찰된다.",
      ],
    },
    "item-world-fjord-coast": {
      formation: [
        "형성 과정 1: 빙하기 이전 하천 침식으로 V자곡이 형성된다.",
        "형성 과정 2: 빙하기 빙하 침식으로 골짜기가 깊고 넓은 U자곡으로 확대된다.",
        "형성 과정 3: 후빙기 해수면 상승으로 U자곡이 침수되어 피오르가 된다.",
      ],
      features: [
        "특징 1: 수심이 깊고 양측이 급경사 절벽인 해안이 발달한다.",
        "특징 2: 리아스 해안과 달리 빙하 침식곡의 침수가 핵심 형성 원인이다.",
      ],
    },
    "item-world-rias-coast": {
      formation: [
        "형성 과정 1: 하천 침식으로 좁고 깊은 V자곡이 형성된다.",
        "형성 과정 2: 해수면 상승 또는 지반 침강으로 낮은 골짜기가 침수된다.",
        "형성 과정 3: 침수된 골짜기들이 연결되어 복잡한 만·반도 해안선이 형성된다.",
      ],
      features: [
        "특징 1: 해안선 출입이 복잡하고 길이가 길다.",
        "특징 2: 비교적 완만한 배후 지형과 양호한 항만 조건을 보인다.",
        "특징 3: 남해안·서해안 등에서 대표적으로 발달한다.",
      ],
    },
    "item-world-mudflat-coast": {
      formation: [
        "형성 과정 1: 하천이 공급한 미세 퇴적물이 조간대로 운반된다.",
        "형성 과정 2: 조차가 크고 파랑이 약한 환경에서 퇴적이 축적된다.",
        "형성 과정 3: 밀물·썰물 반복으로 두꺼운 진흙층의 갯벌이 형성된다.",
      ],
      features: [
        "특징 1: 썰물 시 물길인 갯골이 발달한다.",
        "특징 2: 높은 생물다양성과 정화 기능을 지닌 핵심 생태 공간이다.",
      ],
    },
  },
  화산지형: {
    "item-volcano-strato": {
      formation: [
        "1단계 마그마 상승은 지하의 마그마가 화산 통로를 따라 상승하여 분화를 준비하는 단계이다. 이때 마그마는 지표 가까이로 올라오며 분출 에너지를 축적하는 상태이다.",
        "2단계 용암과 화산재의 반복 분출은 화산이 분화하면서 용암과 함께 화산재, 화산암 조각 등의 분출물이 주변에 쌓이는 단계이다. 용암이 흘러 굳은 층과 화산재가 쌓인 층이 반복적으로 형성되면서 낮은 원뿔형 화산체가 점차 자라나는 과정이다.",
        "3단계 성층화산 완성은 이러한 분출이 오랜 시간 반복되면서 용암층과 화산재층이 층층이 쌓여 높은 원뿔형 화산이 형성되는 단계이다. 그 결과 경사가 비교적 뚜렷하고 대칭적인 모습을 가진 성층화산이 만들어지는 것이다.",
      ],
      features: [
        "성층화산은 용암층과 화산재층이 반복적으로 쌓여 형성된 화산이다.",
        "단면을 보면 여러 개의 층리가 나타나며, 이것이 성층화산의 가장 대표적인 특징이다.",
        "대체로 높은 원뿔형을 이루며 산체가 크고 웅장하게 발달하는 경우가 많은 화산이다.",
        "분화 양상은 용암 분출과 폭발적 분출이 함께 나타날 수 있어 비교적 복합적인 화산이다.",
        "유명한 성층화산으로는 일본의 후지산과 같은 사례가 대표적이다.",
      ],
    },
    "item-volcano-parasite": {
      formation: [
        "1단계 주화산 내부의 마그마 상승은 큰 화산체 내부에서 마그마가 중심 통로를 따라 상승하는 단계이다. 이때 주화산은 이미 형성되어 있으며 내부 압력이 점차 높아지는 상태이다.",
        "2단계 사면 균열과 측면 분화는 마그마가 중심 통로에서만 이동하지 않고 화산 사면 쪽으로 갈라진 틈이나 가지 통로를 따라 이동하는 단계이다. 그 결과 화산의 옆면에서 새로운 분출구가 열리고 그 주변으로 용암과 화산 분출물이 쌓이기 시작하는 과정이다.",
        "3단계 측화산 완성은 측면 분출이 반복되면서 주화산의 사면에 작은 보조 화산체가 형성되는 단계이다. 이렇게 주화산 옆에 붙어 발달한 작은 화산체를 측화산이라고 하는 것이다.",
      ],
      features: [
        "측화산은 큰 화산의 옆면에서 새롭게 분출이 일어나 형성된 작은 화산이다.",
        "주화산의 중심 분화구가 아니라 사면의 갈라진 틈이나 측면 분출구에서 만들어진다는 점이 특징이다.",
        "보통 주화산보다 규모가 작으며 주화산의 사면에 붙어 있는 형태로 나타나는 화산이다.",
        "주화산 내부의 마그마 이동 경로가 변하거나 내부 압력이 달라질 때 형성되기 쉬운 지형이다.",
        "하나의 화산체 안에서도 분출 위치가 다양하게 나타날 수 있음을 보여주는 화산 지형이다.",
      ],
    },
    "item-volcano-plateau": {
      formation: [
        "1단계 지하 마그마 상승은 지하 깊은 곳의 마그마가 지각의 틈을 따라 위로 상승하는 단계이다. 이때 마그마는 넓은 지역 아래에 퍼져 있으며 지표면에는 긴 균열이 생기기 시작하는 상태이다.",
        "2단계 균열 분출과 용암 확산은 지표면의 긴 균열을 따라 현무암질 용암이 분출하는 단계이다. 점성이 낮은 용암은 산처럼 높게 쌓이지 않고 사방으로 넓게 퍼지며 지표면을 덮는 과정이다.",
        "3단계 반복 분출과 대지 형성은 이와 같은 균열 분출이 여러 차례 반복되면서 넓은 지역에 용암층이 차곡차곡 쌓이는 단계이다. 그 결과 넓고 평탄한 고원 또는 대지 형태의 용암대지가 형성되는 것이다.",
      ],
      features: [
        "용암대지는 넓은 지역이 용암으로 덮여 만들어진 평탄한 화산 지형이다.",
        "중앙에 높은 화산체가 솟아 있는 것이 아니라 넓은 평지 형태를 이루는 것이 특징인 지형이다.",
        "주로 현무암질 용암이 분출하여 형성되므로 층층이 쌓인 용암층이 나타나기도 하는 화산 지형이다.",
        "규모가 매우 커서 하나의 지역 전체를 덮는 경우도 많은 지형이다.",
        "대표적인 사례로 인도의 데칸 고원 등이 있는 화산 지형이다.",
      ],
    },
    "item-volcano-lava-cave": {
      formation: [
        "1단계 용암류 형성은 화산 분화로 나온 용암이 지표면 위를 따라 길게 흘러가는 단계이다. 이때 용암은 높은 온도를 유지하며 계속 이동하는 상태이다.",
        "2단계 외부 냉각과 내부 흐름 지속은 용암류의 겉면이 공기와 접촉하여 먼저 식어 굳는 단계이다. 그러나 내부의 용암은 여전히 뜨거운 상태로 통로 안을 따라 계속 흘러가는 과정이다.",
        "3단계 내부 용암 유출과 동굴 형성은 시간이 지나 내부의 용암까지 밖으로 빠져나가면 속이 빈 터널 모양의 공간이 남는 단계이다. 이렇게 형성된 긴 관 모양의 지형이 용암동굴인 것이다.",
      ],
      features: [
        "용암동굴은 용암이 흘러가던 통로가 비어 형성된 동굴이다.",
        "일반적인 석회암 동굴과 달리 화산 활동으로 만들어진다는 점이 특징인 지형이다.",
        "길게 이어진 터널 형태를 이루며 내부 벽면은 현무암질 암석으로 이루어진 동굴 지형이다.",
        "동굴 내부에는 용암이 식으며 남긴 다양한 구조물이 나타나기도 하는 지형이다.",
        "우리나라 제주도의 만장굴이 대표적인 사례인 화산 지형이다.",
      ],
    },
    "item-volcano-columnar": {
      formation: [
        "1단계 두꺼운 용암층 형성은 현무암질 용암이 넓게 퍼져 두껍게 쌓이는 단계이다. 용암은 높은 온도를 유지하며 아직 굳지 않은 상태이다.",
        "2단계 냉각과 수축 균열 발생은 용암이 식으면서 부피가 줄어들어 수축하는 단계이다. 이 과정에서 표면에 균열이 생기고 균열은 아래쪽으로 점차 깊어지며 퍼져 나가는 과정이다.",
        "3단계 기둥 모양 암석 발달은 균열이 일정한 간격으로 발달하면서 여러 개의 다각형 기둥 모양 암석이 형성되는 단계이다. 이렇게 만들어진 수직 기둥 모양의 암석 지형이 주상절리인 것이다.",
      ],
      features: [
        "주상절리는 용암이 식으며 수축할 때 생긴 규칙적인 절리 구조인 지형이다.",
        "기둥 단면은 육각형이나 오각형 등 다각형 모양으로 나타나는 경우가 많은 지형이다.",
        "기둥들은 대체로 수직 방향으로 길게 발달하는 특징을 보이는 지형이다.",
        "절벽이나 해안가에서 드러나면 매우 웅장한 경관을 만드는 지형이다.",
        "제주도의 주상절리대와 북아일랜드의 자이언츠 코즈웨이가 대표적인 사례인 지형이다.",
      ],
    },
    "item-volcano-caldera": {
      formation: [
        "1단계 대규모 화산 분출은 거대한 화산이 강하게 분화하여 많은 양의 화산재와 용암을 분출하는 단계이다. 이 과정에서 지하 마그마방의 마그마가 빠르게 줄어들게 되는 상태이다.",
        "2단계 마그마방 공동화는 분화가 멈춘 뒤 지하 마그마방 내부가 비어 커다란 빈 공간이 생기는 단계이다. 지표면 아래 구조는 점차 불안정해지는 상태이다.",
        "3단계 정상부 붕괴와 함몰지 형성은 지하 공간을 지탱하지 못한 화산 정상부가 아래로 무너져 내리는 단계이다. 그 결과 넓고 큰 원형 함몰지가 만들어지는데 이것이 칼데라인 것이다.",
        "4단계 칼데라호 형성은 함몰지 내부에 빗물이나 지하수가 고이면서 호수가 형성되는 단계이다. 이렇게 생긴 호수를 칼데라호라고 하는 것이다.",
      ],
      features: [
        "칼데라는 대규모 분화 후 화산체 일부가 붕괴하여 형성된 거대한 함몰 지형이다.",
        "일반적인 분화구보다 규모가 훨씬 크고 넓다는 특징을 보이는 지형이다.",
        "가운데에 호수가 형성되면 매우 아름다운 칼데라호 경관이 나타나는 지형이다.",
        "일부 칼데라는 내부에 새로운 화산체가 다시 만들어지기도 하는 지형이다.",
        "대표적인 사례로 미국의 크레이터호와 일본의 아소산 칼데라가 있는 지형이다.",
      ],
    },
    "item-volcano-shield": {
      formation: [
        "1단계 마그마 상승은 지하의 마그마가 지표면 아래에 모여 있다가 약한 지각 틈이나 화산 통로를 따라 위로 상승하는 단계이다. 이때 마그마는 비교적 유동성이 크며 지표면 가까이로 올라오면서 분출을 준비하는 상태이다.",
        "2단계 용암 분출 및 확산은 점성이 낮은 현무암질 용암이 분출하여 지표면 위로 흘러나오는 단계이다. 이 용암은 끈적임이 적어 멀리까지 넓게 퍼져 나가며 급하게 쌓이기보다 얇고 넓게 펼쳐지는 특징을 보이는 과정이다.",
        "3단계 순상화산 완성은 이와 같은 용암 분출이 여러 차례 반복되면서 넓고 완만한 경사의 화산체가 형성되는 단계이다. 그 결과 전체 모습이 방패를 엎어놓은 것과 비슷한 순상화산이 만들어지는 것이다.",
      ],
      features: [
        "순상화산은 전체적으로 경사가 매우 완만한 화산 지형이다.",
        "현무암질 용암이 주로 분출하므로 용암의 점성이 낮고 유동성이 크다는 특징이 있는 화산이다.",
        "용암이 멀리까지 퍼지기 때문에 화산체는 높이보다 폭이 훨씬 넓게 발달하는 편인 지형이다.",
        "폭발적인 분화보다 비교적 조용한 용암 분출이 많이 나타나는 화산이다.",
        "대표적으로 하와이의 화산들이 이러한 형태를 보이는 경우가 많은 유형이다.",
      ],
    },
    "item-volcano-cinder": {
      formation: [
        "1단계 마그마 상승은 지하 깊은 곳에 있던 마그마가 화산 통로를 따라 천천히 상승하는 단계이다. 이 마그마는 점성이 매우 커서 쉽게 흐르지 못하고 통로 주변에 압력을 높이며 위로 밀려 올라오는 상태이다.",
        "2단계 끈적한 용암의 분출과 축적은 점성이 큰 용암이 분화구 부근으로 천천히 밀려 나오며 주변으로 멀리 퍼지지 못하는 단계이다. 용암은 흘러내리기보다 분화구 주변에 쌓이며 둥글고 가파른 언덕 모양의 화산체를 이루기 시작하는 과정이다.",
        "3단계 종상화산 완성은 이러한 과정이 반복되면서 분화구 주변에 점성이 큰 용암이 계속 쌓여 종 모양의 화산체가 만들어지는 단계이다. 결국 높고 급한 경사를 가진 돔 형태의 종상화산이 형성되는 것이다.",
      ],
      features: [
        "종상화산은 점성이 큰 용암이 분출하여 형성되는 화산 지형이다.",
        "용암이 멀리 흐르지 못하고 분화구 주변에 집중적으로 쌓이므로 경사가 매우 급한 편인 화산이다.",
        "전체 형태는 둥글게 부풀어 오른 종이나 돔과 비슷한 모습인 지형이다.",
        "화산체가 불안정할 경우 일부가 무너지거나 폭발적인 분화를 일으킬 가능성도 있는 화산이다.",
        "순상화산에 비해 규모는 작을 수 있으나 경사는 훨씬 급하고 응집된 형태를 보이는 것이 특징인 화산이다.",
      ],
    },
  },
  카르스트지형: {
    "item-karst-doline": {
      formation: [
        "1단계 빗물에 녹은 탄산 성분이 석회암의 틈을 따라 스며들어 암석을 녹이기 시작한다.",
        "2단계 석회암이 점차 용식되어 지표면이 서서히 움푹 꺼진다.",
        "3단계 원형 또는 타원형의 폐쇄된 함몰지인 돌리네가 완성된다.",
      ],
      features: [
        "카르스트 지형의 가장 기본적인 함몰 지형이다.",
        "지름 수 m ~ 수백 m 규모로 나타난다.",
        "배수가 잘되어 물이 오래 고이지 않는 경우가 많다.",
        "여러 개가 모여 분포하기도 한다.",
      ],
    },
    "item-karst-uvala": {
      formation: [
        "1단계 인접한 지역에 여러 개의 돌리네가 형성된다.",
        "2단계 돌리네의 경계가 점차 침식·확대된다.",
        "3단계 여러 돌리네가 서로 연결되어 불규칙한 대형 함몰지가 된다.",
      ],
      features: [
        "돌리네 여러 개가 합쳐진 복합 함몰지이다.",
        "돌리네보다 규모가 크고 형태가 불규칙하다.",
        "바닥은 비교적 완만하다.",
        "폴리에로 발달하는 중간 단계 지형으로 볼 수 있다.",
      ],
    },
    "item-karst-polje": {
      formation: [
        "1단계 우발라 규모의 함몰지가 더욱 확대된다.",
        "2단계 주변 용식과 침식이 계속되어 분지가 넓어진다.",
        "3단계 넓고 평탄한 바닥을 가진 대형 폐쇄분지인 폴리에가 형성된다.",
      ],
      features: [
        "카르스트 지역의 대표적인 대형 분지이다.",
        "바닥이 평탄하여 농경지로 이용되기도 한다.",
        "배수구(포노르)를 통해 물이 지하로 빠진다.",
        "테라로사가 쌓이는 경우가 많다.",
      ],
    },
    "item-karst-tower": {
      formation: [
        "1단계 넓은 석회암 지대가 오랜 기간 용식·침식을 받는다.",
        "2단계 낮은 지역은 깎여 사라지고 일부 암석만 남는다.",
        "3단계 남은 석회암이 급경사의 봉우리 형태로 솟아 탑카르스트가 된다.",
      ],
      features: [
        "탑 모양의 독립된 석회암 봉우리 지형이다.",
        "주변은 낮은 평야나 저지대로 나타난다.",
        "중국 계림, 베트남 하롱베이가 대표 사례이다.",
        "카르스트 지형 중 경관이 매우 뛰어나다.",
      ],
    },
    "item-karst-travertine": {
      formation: [
        "1단계 석회 성분이 녹아 있는 지하수·온천수가 지표로 흘러나온다.",
        "2단계 물이 흐르며 탄산칼슘이 침전되어 낮은 둑이 형성된다.",
        "3단계 침전이 반복되어 층층의 계단식 단구가 만들어진다.",
      ],
      features: [
        "카르스트 지역의 대표적인 퇴적 지형이다.",
        "계단식 수조와 맑은 물웅덩이가 나타난다.",
        "물이 계속 흐르며 현재도 성장할 수 있다.",
        "석회동굴 내부 생성물과 성분이 유사하다.",
      ],
    },
    "item-karst-cave": {
      formation: [
        "1단계 빗물이 석회암의 틈을 따라 지하로 스며든다.",
        "2단계 지하에서 석회암이 녹아 작은 통로와 공동이 형성된다.",
        "3단계 공동이 점차 확대되어 큰 동굴 공간이 만들어진다.",
        "4단계 동굴 내부에 종유석, 석순, 석주가 발달한 석회동굴이 완성된다.",
      ],
      features: [
        "카르스트 지역의 대표적인 지하 지형이다.",
        "지하수의 용식 작용으로 형성된다.",
        "내부에는 다양한 생성물이 발달한다.",
        "관광지·학술 연구지로 활용된다.",
      ],
      featureCallout: {
        title: "스펠레오뎀(종유석 · 석순 · 석주)",
        intro: "석회동굴 내부의 미지형으로, 탄산칼슘이 침전되어 생긴 결과물이다.",
        bullets: [
          "종유석: 천장에서 떨어지는 물방울 속 탄산칼슘이 침전되어 아래로 자란다.",
          "석순: 바닥에 떨어진 물방울 속 탄산칼슘이 쌓여 위로 자란다.",
          "석주: 종유석과 석순이 서로 연결되어 기둥이 된다.",
        ],
      },
    },
  },
};

function htmlLandformModalParagraphs(lines) {
  return (lines || []).map((t) => `<p class="landform-section-lead">${escapeHtml(t)}</p>`).join("");
}

/** 형성 과정 문단: 모든 항목을「N단계 : ...」형식으로 통일하고 N단계를 굵게 표시 */
function parseFormationStepText(text) {
  const s = String(text || "").trim();
  const m = s.match(/^(\d+)\s*단계(?:\s*[:：]\s*|\s+)?([\s\S]*)$/);
  if (!m) return null;
  return {
    step: Number(m[1]),
    body: String(m[2] || "").trim(),
  };
}

function buildFormationLineHtml(text, fallbackStep) {
  const parsed = parseFormationStepText(text);
  const step = parsed?.step ?? fallbackStep;
  const body = (parsed?.body ?? String(text || "")).trim();
  const lead = `<strong>${escapeHtml(`${step}단계`)}</strong>`;
  const suffix = body ? ` : ${escapeHtml(body)}` : "";
  return {
    html: `${lead}${suffix}`,
    nextStep: step + 1,
  };
}

function renderLandformModalBodyHtml(terrainKey, hotspotId) {
  const entry = LANDFORM_MODAL_BODY[terrainKey]?.[hotspotId];
  if (!entry) {
    const muted = '<p class="landform-section-lead landform-section-lead--muted">설명을 준비 중이다.</p>';
    return { s1: muted, s2: muted };
  }
  let s1 = "";
  let formationStep = 1;
  (entry.formation || []).forEach((line) => {
    const rendered = buildFormationLineHtml(line, formationStep);
    s1 += `<p class="landform-section-lead">${rendered.html}</p>`;
    formationStep = rendered.nextStep;
  });
  if (entry.formationLineWithStrong) {
    const { before, strong, after } = entry.formationLineWithStrong;
    const beforeParsed = parseFormationStepText(before);
    const step = beforeParsed?.step ?? formationStep;
    const beforeBody = beforeParsed ? beforeParsed.body : String(before || "");
    const lead = `<strong>${escapeHtml(`${step}단계`)}</strong>`;
    const bodyHtml = `${escapeHtml(beforeBody)}<strong>${escapeHtml(strong)}</strong>${escapeHtml(after)}`;
    s1 += `<p class="landform-section-lead">${lead} : ${bodyHtml}</p>`;
    formationStep = step + 1;
  }
  if (entry.formationParagraphParts?.length) {
    s1 += entry.formationParagraphParts
      .map(
        (parts) => {
          const plain = parts.map((p) => String(p.text || "")).join("");
          const parsed = parseFormationStepText(plain);
          const step = parsed?.step ?? formationStep;
          const lead = `<strong>${escapeHtml(`${step}단계`)}</strong>`;
          let removedPrefix = false;
          const bodyHtml = parts
            .map((p) => {
              const raw = String(p.text || "");
              let textToRender = raw;
              if (!removedPrefix && parsed) {
                removedPrefix = true;
                textToRender = raw.replace(/^(\d+)\s*단계(?:\s*[:：]\s*|\s+)?/, "");
              }
              return p.strong ? `<strong>${escapeHtml(textToRender)}</strong>` : escapeHtml(textToRender);
            })
            .join("");
          formationStep = step + 1;
          return `<p class="landform-section-lead">${lead} : ${bodyHtml}</p>`;
        }
      )
      .join("");
  }
  let s2 = htmlLandformModalParagraphs(entry.features);
  if (entry.featureParagraphParts?.length) {
    s2 += entry.featureParagraphParts
      .map(
        (parts) =>
          `<p class="landform-section-lead">${parts
            .map((p) => (p.strong ? `<strong>${escapeHtml(p.text)}</strong>` : escapeHtml(p.text)))
            .join("")}</p>`
      )
      .join("");
  }
  if (entry.featureBullets?.length) {
    s2 += `<ul class="landform-detail-bullet-list">${entry.featureBullets
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("")}</ul>`;
  }
  if (entry.featureImageCards?.length) {
    const imageCardsClass =
      entry.featureImageCards.length === 1
        ? "landform-feature-image-cards landform-feature-image-cards--single"
        : "landform-feature-image-cards";
    s2 += `<div class="${imageCardsClass}" role="group" aria-label="참고 사진">${entry.featureImageCards
      .map((c) => {
        const src = escapeHtml(c.src);
        const label = escapeHtml(c.label);
        const alt = escapeHtml(c.alt || c.label);
        return `<figure class="landform-feature-image-card"><figcaption class="landform-feature-image-card-caption">${label}</figcaption><div class="landform-feature-image-card-frame"><img class="landform-feature-image-card-img" src="${src}" alt="${alt}" loading="lazy" decoding="async" /></div></figure>`;
      })
      .join("")}</div>`;
  }
  if (entry.featureCallout?.title) {
    const co = entry.featureCallout;
    const title = escapeHtml(co.title);
    const intro = co.intro ? `<p class="landform-detail-feature-callout-intro">${escapeHtml(co.intro)}</p>` : "";
    const bullets =
      co.bullets?.length > 0
        ? `<ul class="landform-detail-bullet-list landform-detail-bullet-list--in-callout">${co.bullets
            .map((t) => `<li>${escapeHtml(t)}</li>`)
            .join("")}</ul>`
        : "";
    s2 += `<aside class="landform-detail-feature-callout" aria-label="${title}"><h4 class="landform-detail-feature-callout-title">${title}</h4>${intro}${bullets}</aside>`;
  }
  return { s1, s2 };
}

function applyLandformModalBodies(terrainKey, hotspotId) {
  const b1 = document.getElementById("landform-outline-body-s1");
  const b2 = document.getElementById("landform-outline-body-s2");
  const { s1, s2 } = renderLandformModalBodyHtml(terrainKey, hotspotId);
  if (b1) b1.innerHTML = s1;
  if (b2) b2.innerHTML = s2;
}

function resetLandformModalBodies() {
  const b1 = document.getElementById("landform-outline-body-s1");
  const b2 = document.getElementById("landform-outline-body-s2");
  if (b1) b1.innerHTML = "";
  if (b2) b2.innerHTML = "";
}

function resetLandformDetailVisual() {
  const slot = document.getElementById("landform-detail-visual-slot");
  const img = document.getElementById("landform-detail-visual-img");
  if (img instanceof HTMLImageElement) {
    img.hidden = true;
    img.removeAttribute("src");
    img.alt = "";
  }
  if (slot) {
    slot.classList.remove("landform-detail-visual-slot--has-image");
    slot.setAttribute("aria-label", "지형 참고 이미지. 등록된 사진이 없다.");
  }
  const slotExtra = document.getElementById("landform-detail-visual-slot-extra");
  const imgExtra = document.getElementById("landform-detail-visual-img-extra");
  if (imgExtra instanceof HTMLImageElement) {
    imgExtra.hidden = true;
    imgExtra.removeAttribute("src");
    imgExtra.alt = "";
  }
  if (slotExtra) {
    slotExtra.hidden = true;
    slotExtra.classList.remove("landform-detail-visual-slot--has-image");
    slotExtra.setAttribute("aria-label", "추가 참고 이미지");
  }
}

function applyLandformDetailVisual(terrainKey, hotspotId, titleKo) {
  const slot = document.getElementById("landform-detail-visual-slot");
  const img = document.getElementById("landform-detail-visual-img");
  const slotExtra = document.getElementById("landform-detail-visual-slot-extra");
  const imgExtra = document.getElementById("landform-detail-visual-img-extra");
  if (!(img instanceof HTMLImageElement) || !slot) return;

  const byTerrain = LANDFORM_DETAIL_IMAGES[terrainKey];
  const src = byTerrain && hotspotId ? byTerrain[hotspotId] : null;
  const label = String(titleKo || "").trim() || "지형";
  const extraSrc =
    LANDFORM_DETAIL_EXTRA_IMAGE[terrainKey] && hotspotId
      ? LANDFORM_DETAIL_EXTRA_IMAGE[terrainKey][hotspotId]
      : null;

  if (imgExtra instanceof HTMLImageElement) {
    imgExtra.hidden = true;
    imgExtra.removeAttribute("src");
    imgExtra.alt = "";
  }
  if (slotExtra) {
    slotExtra.hidden = true;
    slotExtra.classList.remove("landform-detail-visual-slot--has-image");
  }

  if (src) {
    img.alt = `${label} 참고 이미지`;
    img.src = src;
    img.hidden = false;
    slot.classList.add("landform-detail-visual-slot--has-image");
    slot.setAttribute("aria-label", `${label} 참고 이미지`);
  } else {
    resetLandformDetailVisual();
    return;
  }

  if (extraSrc && imgExtra instanceof HTMLImageElement && slotExtra) {
    imgExtra.alt = `${label} 추가 참고 이미지`;
    imgExtra.src = extraSrc;
    imgExtra.hidden = false;
    slotExtra.hidden = false;
    slotExtra.classList.add("landform-detail-visual-slot--has-image");
    slotExtra.setAttribute("aria-label", `${label} 추가 참고 이미지`);
  }
}

function openLandformDetailModal(titleKo, titleEn, hotspotId) {
  const modal = document.getElementById("landform-detail-modal");
  if (!modal) return;

  const koEl = document.getElementById("landform-detail-title-ko");
  const enEl = document.getElementById("landform-detail-suben");
  const searchLinkEl = document.getElementById("landform-detail-search-link");
  if (koEl) koEl.textContent = String(titleKo || "").trim() || "지형 상세";
  if (enEl) {
    const en = String(titleEn || "").trim();
    if (en) {
      enEl.textContent = en;
      enEl.hidden = false;
    } else {
      enEl.textContent = "";
      enEl.hidden = true;
    }
  }
  if (searchLinkEl instanceof HTMLAnchorElement) {
    const ko = String(koEl?.textContent || titleKo || "").trim();
    const query = ko || "지형";
    searchLinkEl.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
    searchLinkEl.setAttribute("aria-label", `${ko || "지형"} 구글 검색하기`);
  }

  applyLandformDetailVisual(currentTerrain, hotspotId, koEl?.textContent || titleKo);
  applyLandformModalBodies(currentTerrain, hotspotId);

  modal.hidden = false;
  document.body.classList.add("landform-modal-open");

  const sheet = modal.querySelector(".landform-detail-sheet");
  if (sheet) {
    sheet.classList.remove("animate__fadeInUp");
    void sheet.offsetWidth;
    sheet.classList.add("animate__fadeInUp");
  }

  const closeBtn = modal.querySelector(".landform-detail-close");
  if (closeBtn instanceof HTMLElement) closeBtn.focus();
}

function closeLandformDetailModal() {
  const modal = document.getElementById("landform-detail-modal");
  if (modal) modal.hidden = true;
  document.body.classList.remove("landform-modal-open");
  resetLandformModalBodies();
  resetLandformDetailVisual();
}

function initLandformDetailModal() {
  const modal = document.getElementById("landform-detail-modal");
  if (!modal) return;

  modal.querySelectorAll("[data-close-landform-detail]").forEach((el) => {
    el.addEventListener("click", () => closeLandformDetailModal());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (modal.hidden) return;
    closeLandformDetailModal();
  });
}

function openGlacialEraModal() {
  const modal = document.getElementById("glacial-era-modal");
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("glacial-era-modal-open");
  const closeBtn = modal.querySelector(".glacial-era-close");
  if (closeBtn instanceof HTMLElement) closeBtn.focus();
}

function closeGlacialEraModal() {
  const modal = document.getElementById("glacial-era-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("glacial-era-modal-open");
}

function initGlacialEraModal() {
  const modal = document.getElementById("glacial-era-modal");
  if (!modal) return;

  modal.querySelectorAll("[data-close-glacial-era-modal]").forEach((el) => {
    el.addEventListener("click", closeGlacialEraModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (modal.hidden) return;
    closeGlacialEraModal();
  });
}

const HOTSPOT_POSITIONS_KEY = "geoex-landform-hotspot-positions";
const HOTSPOT_DRAG_THRESHOLD_PX = 10;

/**
 * 핫스팟 기본 좌표(%). style.css의 구 positioning 규칙을 이곳으로 옮김.
 * 드래그로 저장된 값(localStorage)이 같은 키에 있으면 그 값이 우선한다.
 * 브라우저 콘솔: copy(JSON.stringify(JSON.parse(localStorage.getItem("geoex-landform-hotspot-positions")||"{}"),null,2))
 * 복사한 뒤, 아래 DEFAULT_HOTSPOT_POSITIONS 객체를 그 값으로 바꿀 수 있다.
 */
const DEFAULT_HOTSPOT_POSITIONS = {
  건조지형: {
    "item-samneung": { top: 52.7, left: 32.8 },
    "item-alluvial": { top: 36.1, left: 27.2 },
    "item-mesa-butte": { top: 28.2, left: 35.5 },
    "item-mushroom": { top: 50.9, left: 24.1 },
    "item-barchan": { top: 39.3, left: 84.9 },
    "item-desert-grape": { top: 77.9, left: 78.6 },
    "item-wadi": { top: 64.2, left: 47.5 },
    "item-playa": { top: 48.9, left: 64 },
    "item-pediment": { top: 37.7, left: 33.6 },
    "item-bajada": { top: 29.2, left: 45.8 },
  },
  빙하지형: {
    "item-horn": { top: 20.7, left: 27 },
    "item-cirque": { top: 28.6, left: 78.4 },
    "item-uvalley": { top: 42.3, left: 50.9 },
    "item-esker": { top: 63.1, left: 49.3 },
    "item-drumlin": { top: 73.9, left: 57 },
    "item-moraine": { top: 70.8, left: 34.7 },
    "item-fjord": { top: 69.4, left: 90.9 },
    "item-hanging-valley": { top: 22.3, left: 83.7 },
  },
  하천지형: {
    "item-erosion-basin": { top: 21.7, left: 26.8 },
    "item-incised-meander": { top: 36.7, left: 20.3 },
    "item-river-terrace": { top: 33.2, left: 15.6 },
    "item-alluvial-fan": { top: 51.5, left: 21 },
    "item-free-meander": { top: 37.8, left: 54.7 },
    "item-floodplain": { top: 37, left: 66.2 },
    "item-delta": { top: 61.8, left: 81.8 },
  },
  해안지형: {
    "item-coastal-cliff": { top: 39.1, left: 26.2 },
    "item-coastal-terrace": { top: 32.7, left: 18.4 },
    "item-sea-cave": { top: 53.7, left: 22 },
    "item-wave-cut-platform": { top: 61.8, left: 29 },
    "item-sea-arch": { top: 47.7, left: 44.2 },
    "item-sea-stack": { top: 67.9, left: 57.2 },
    "item-sandy-beach": { top: 25.8, left: 64.7 },
    "item-spit": { top: 50, left: 72.5 },
    "item-tied-island": { top: 34.7, left: 82.1 },
    "item-lagoon": { top: 41.7, left: 62.1 },
    "item-coastal-dune": { top: 17.3, left: 62.3 },
    "item-mudflat": { top: 24.9, left: 83.3 },
  },
  화산지형: {
    "item-volcano-strato": { top: 19.8, left: 42 },
    "item-volcano-parasite": { top: 41.7, left: 30.2 },
    "item-volcano-lava-cave": { top: 61.9, left: 15.3 },
    "item-volcano-caldera": { top: 32.1, left: 67.3 },
    "item-volcano-caldera-lake": { top: 34, left: 67.9 },
    "item-volcano-columnar": { top: 58, left: 5.4 },
    "item-volcano-shield": { top: 46.4, left: 83.7 },
    "item-volcano-plateau": { top: 58.5, left: 73.7 },
    "item-volcano-cinder": { top: 46.4, left: 59.7 },
  },
  카르스트지형: {
    "item-karst-tower": { top: 62.4, left: 80.7 },
    "item-karst-doline": { top: 34.7, left: 23.7 },
    "item-karst-uvala": { top: 23.5, left: 43.3 },
    "item-karst-polje": { top: 34.7, left: 61.9 },
    "item-karst-travertine": { top: 56.8, left: 17.2 },
    "item-karst-cave": { top: 64.9, left: 55.2 },
    "item-karst-speleothem": { top: 77.3, left: 39.6 },
    "item-karst-terra": { top: 33.6, left: 48.3 },
  },
  대지형: {
    "item-shield-baltic": { top: 20.8, left: 56.3 },
    "item-shield-siberia": { top: 17.6, left: 74.6 },
    "item-shield-canada": { top: 22.2, left: 17 },
    "item-shield-brazil": { top: 58.6, left: 28.5 },
    "item-shield-australia": { top: 70.3, left: 80.4 },
    "item-shield-africa": { top: 50.1, left: 50.4 },
    "item-range-scandinavia": { top: 13.6, left: 50.2 },
    "item-range-ural": { top: 18.6, left: 63.2, rotate: 110 },
    "item-range-appalachian": { top: 30.1, left: 24.2 },
    "item-range-dividing": { top: 71.7, left: 88.8, rotate: 70 },
    "item-range-drakensberg": { top: 66.9, left: 54.1 },
    "item-young-alps": { top: 27, left: 48.9 },
    "item-young-atlas": { top: 37.2, left: 43.5 },
    "item-young-caucasus": { top: 30.3, left: 58.3 },
    "item-young-himalaya": { top: 36.3, left: 68.4 },
    "item-young-rockies": { top: 28.5, left: 10.3 },
    "item-young-andes": { top: 57.5, left: 22.1 },
  },
};

function mergedHotspotPosition(terrainKey, hotspotId) {
  const defaults = DEFAULT_HOTSPOT_POSITIONS[terrainKey] || {};
  const saved = loadAllHotspotPositions()[terrainKey] || {};
  const pos = { ...defaults, ...saved }[hotspotId];
  if (!pos || typeof pos.top !== "number" || typeof pos.left !== "number") return null;
  return pos;
}

function hotspotPositionStyleAttr(terrainKey, hotspotId) {
  const p = mergedHotspotPosition(terrainKey, hotspotId);
  if (!p) return "";
  return ` style="top:${p.top}%;left:${p.left}%"`;
}

function loadAllHotspotPositions() {
  try {
    const raw = localStorage.getItem(HOTSPOT_POSITIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveHotspotPosition(terrainKey, hotspotId, topPct, leftPct) {
  const all = loadAllHotspotPositions();
  if (!all[terrainKey]) all[terrainKey] = {};
  const round1 = (n) => Math.round(Number(n) * 10) / 10;
  const prev = all[terrainKey][hotspotId];
  const def = (DEFAULT_HOTSPOT_POSITIONS[terrainKey] || {})[hotspotId];
  const next = { top: round1(topPct), left: round1(leftPct) };
  const rot =
    typeof prev?.rotate === "number"
      ? prev.rotate
      : typeof def?.rotate === "number"
        ? def.rotate
        : undefined;
  if (typeof rot === "number") next.rotate = round1(rot);
  all[terrainKey][hotspotId] = next;
  localStorage.setItem(HOTSPOT_POSITIONS_KEY, JSON.stringify(all));
}

/** 화면에 적용 중인 좌표(기본+localStorage 병합) JSON — DEFAULT_HOTSPOT_POSITIONS 갱신에 사용. 전역 함수로 선언해 콘솔에서도 호출 가능 */
function exportLandformHotspotsMerged() {
  const terrainKeys = ["건조지형", "빙하지형", "하천지형", "해안지형", "화산지형", "카르스트지형", "대지형"];
  const out = {};
  for (const t of terrainKeys) {
    const def = DEFAULT_HOTSPOT_POSITIONS[t] || {};
    const sav = loadAllHotspotPositions()[t] || {};
    out[t] = { ...def, ...sav };
  }
  const text = JSON.stringify(out, null, 2);
  console.log(text);
  return text;
}
window.exportLandformHotspotsMerged = exportLandformHotspotsMerged;
if (typeof globalThis !== "undefined") {
  globalThis.exportLandformHotspotsMerged = exportLandformHotspotsMerged;
}

async function copyHotspotLayoutToClipboard() {
  const text = exportLandformHotspotsMerged();
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사했다.\nscript.js의 DEFAULT_HOTSPOT_POSITIONS를 이 내용으로 바꾼 뒤 저장하세요.");
      return;
    }
  } catch {
    /* file:// 등에서 클립보드 API가 막힐 수 있음 */
  }
  window.prompt("아래 전체를 선택(Ctrl+A) 후 복사(Ctrl+C)하세요:", text);
}

/** 건조~카르스트 경관 핫스팟: 끌어 위치 조정 후 localStorage 저장 (초기 위치는 HTML 인라인 + DEFAULT_HOTSPOT_POSITIONS) */
function initLandscapeHotspotDragging(container, terrainKey) {
  let dragState = null;

  const clampPct = (v) => Math.min(98, Math.max(2, v));

  const posFromEvent = (e, rect) => {
    const left = clampPct(((e.clientX - rect.left) / rect.width) * 100);
    const top = clampPct(((e.clientY - rect.top) / rect.height) * 100);
    return { left, top };
  };

  const endDrag = (e) => {
    if (!dragState || e.pointerId !== dragState.pointerId) return;
    const { btn, dragging, lastLeft, lastTop } = dragState;
    try {
      btn.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    btn.classList.remove("is-dragging");
    if (dragging && btn.dataset.hotspotId && lastLeft != null && lastTop != null) {
      saveHotspotPosition(terrainKey, btn.dataset.hotspotId, lastTop, lastLeft);
      btn.dataset.suppressHotspotClick = "1";
    }
    dragState = null;
  };

  container.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest(".hotspot");
    if (!(btn instanceof HTMLButtonElement) || !container.contains(btn)) return;
    if (e.button !== 0) return;
    dragState = {
      pointerId: e.pointerId,
      btn,
      startX: e.clientX,
      startY: e.clientY,
      dragging: false,
      lastLeft: null,
      lastTop: null,
    };
    try {
      btn.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  });

  container.addEventListener("pointermove", (e) => {
    if (!dragState || e.pointerId !== dragState.pointerId) return;
    const dx = e.clientX - dragState.startX;
    const dy = e.clientY - dragState.startY;
    const th = HOTSPOT_DRAG_THRESHOLD_PX;
    if (!dragState.dragging && dx * dx + dy * dy >= th * th) {
      dragState.dragging = true;
      dragState.btn.classList.add("is-dragging");
    }
    if (!dragState.dragging) return;
    const rect = container.getBoundingClientRect();
    const { left, top } = posFromEvent(e, rect);
    dragState.lastLeft = left;
    dragState.lastTop = top;
    dragState.btn.style.left = `${left}%`;
    dragState.btn.style.top = `${top}%`;
  });

  container.addEventListener("pointerup", endDrag);
  container.addEventListener("pointercancel", endDrag);
}

function getLandscapeConfig(terrainType) {
  const configs = {
    건조지형: {
      title: "🎨 건조지형 경관",
      image: "images/건조지형.png",
      hotspots: [
        { name: "삼릉석", className: "item-samneung" },
        { name: "선상지", className: "item-alluvial" },
        { name: "메사·뷰트", className: "item-mesa-butte" },
        { name: "사막포도", className: "item-desert-grape" },
        { name: "버섯바위", className: "item-mushroom" },
        { name: "사구", className: "item-barchan" },
        { name: "와디", className: "item-wadi" },
        { name: "플라야", className: "item-playa" },
      ],
    },
    빙하지형: {
      title: "🎨 빙하지형 경관",
      image: "images/빙하지형.png",
      hotspots: [
        { name: "호른", className: "item-horn" },
        { name: "권곡", className: "item-cirque" },
        { name: "U자곡", className: "item-uvalley" },
        { name: "에스커", className: "item-esker" },
        { name: "드럼린", className: "item-drumlin" },
        { name: "모레인", className: "item-moraine" },
      ],
    },
    하천지형: {
      title: "🎨 하천지형 경관",
      image: "images/하천지형.png",
      hotspots: [
        { name: "침식분지", className: "item-erosion-basin" },
        { name: "하안단구", className: "item-river-terrace" },
        { name: "감입곡류하천", className: "item-incised-meander" },
        { name: "선상지", className: "item-alluvial-fan" },
        { name: "자유곡류하천", className: "item-free-meander" },
        { name: "범람원", className: "item-floodplain" },
        { name: "삼각주", className: "item-delta" },
      ],
    },
    해안지형: {
      title: "🎨 해안지형 경관",
      image: "images/해안지형.png?v=20260410",
      hotspots: [
        { name: "해식애", className: "item-coastal-cliff" },
        { name: "해안단구", className: "item-coastal-terrace" },
        { name: "해식동", className: "item-sea-cave" },
        { name: "파식대", className: "item-wave-cut-platform" },
        { name: "시아치", className: "item-sea-arch" },
        { name: "시스텍", className: "item-sea-stack" },
        { name: "사빈", className: "item-sandy-beach" },
        { name: "사주", className: "item-spit" },
        { name: "육계도", className: "item-tied-island" },
        { name: "석호", className: "item-lagoon" },
        { name: "해안사구", className: "item-coastal-dune" },
      ],
    },
    화산지형: {
      title: "🎨 화산지형 경관",
      image: "images/화산지형.png",
      /* 좌표: images/화산지형.png 단면도·경관 기준 (A→I 순) */
      hotspots: [
        { name: "성층화산", className: "item-volcano-strato" },
        { name: "측화산", className: "item-volcano-parasite" },
        { name: "용암동굴", className: "item-volcano-lava-cave" },
        { name: "칼데라", className: "item-volcano-caldera" },
        { name: "주상절리", className: "item-volcano-columnar" },
        { name: "순상화산", className: "item-volcano-shield" },
        { name: "용암대지", className: "item-volcano-plateau" },
        { name: "종상화산", className: "item-volcano-cinder" },
      ],
    },
    카르스트지형: {
      title: "🎨 카르스트지형 경관",
      image: "images/카르스트지형.png",
      /* 좌표: images/카르스트지형.png 경관 기준 (A→H) */
      hotspots: [
        { name: "탑카르스트", className: "item-karst-tower" },
        { name: "돌리네", className: "item-karst-doline" },
        { name: "우발라", className: "item-karst-uvala" },
        { name: "폴리에", className: "item-karst-polje" },
        { name: "석회화단구", className: "item-karst-travertine" },
        { name: "석회동굴", className: "item-karst-cave" },
      ],
    },
    대지형: {
      title: "🌍 세계의 주요 대지형",
      image: "images/대지형.png",
      hotspots: [
        { name: "발트순상지", className: "item-shield-baltic" },
        { name: "시베리아순상지", className: "item-shield-siberia" },
        { name: "캐나다순상지", className: "item-shield-canada" },
        { name: "브라질순상지", className: "item-shield-brazil" },
        { name: "오스트레일리아 순상지", className: "item-shield-australia" },
        { name: "아프리카순상지", className: "item-shield-africa" },
        {
          name: "스칸디나비아 산맥",
          className: "item-range-scandinavia",
          kind: "range-old",
          rotate: -22,
        },
        { name: "우랄산맥", className: "item-range-ural", kind: "range-old", rotate: 110 },
        {
          name: "애팔래치아산맥",
          className: "item-range-appalachian",
          kind: "range-old",
          rotate: -24,
        },
        {
          name: "그레이트디바이딩산맥",
          className: "item-range-dividing",
          kind: "range-old",
          rotate: 70,
        },
        {
          name: "드라켄즈버그산맥",
          className: "item-range-drakensberg",
          kind: "range-old",
          rotate: 32,
        },
        { name: "알프스산맥", className: "item-young-alps" },
        { name: "아틀라스산맥", className: "item-young-atlas" },
        { name: "캅카스산맥", className: "item-young-caucasus" },
        { name: "히말라야산맥", className: "item-young-himalaya" },
        { name: "로키산맥", className: "item-young-rockies" },
        { name: "안데스산맥", className: "item-young-andes" },
      ],
    },
  };

  return configs[terrainType] || null;
}

/** 경관 핫스팟 HTML (점형 / 고기습곡 산맥 곡선형 등) */
function landscapeHotspotMarkup(terrainKey, spot) {
  const cn = spot.className;
  const nm = spot.name;
  const posAttr = hotspotPositionStyleAttr(terrainKey, cn);
  const isContinental = terrainKey === "대지형";
  const terrainClass = isContinental ? " hotspot--continental" : "";
  const continentalGroup = isContinental
    ? cn.startsWith("item-shield")
      ? "stable-shield"
      : cn.startsWith("item-range")
        ? "old-fold"
        : cn.startsWith("item-young")
          ? "young-fold"
          : ""
    : "";
  const groupClass = continentalGroup ? ` hotspot--group-${continentalGroup}` : "";
  const groupAttr = continentalGroup ? ` data-hotspot-group="${continentalGroup}"` : "";
  const noModalAttr = isContinental ? ' data-no-modal="1"' : "";
  const inner = isContinental
    ? `<span class="hotspot-bubble-label">${escapeHtml(nm)}</span>`
    : `<span class="hotspot-tooltip" role="tooltip">${escapeHtml(nm)}</span>`;
  return `<button class="hotspot ${escapeHtml(cn)}${terrainClass}${groupClass}" data-hotspot-id="${escapeHtml(cn)}" data-terrain="${escapeHtml(nm)}"${groupAttr}${noModalAttr} type="button" aria-label="${escapeHtml(nm)}"${posAttr}>${inner}</button>`;
}

function setTerrain(terrainName) {
  const selectedType = ALL_TABS.includes(terrainName) ? terrainName : BASIC_TAB;
  const contentEl = document.getElementById("terrain-content");
  if (!contentEl) return;

  document.querySelectorAll(".terrain-tab").forEach((tab) => {
    const isActive = tab.dataset.terrain === selectedType;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (selectedType === BASIC_TAB) {
    currentTerrain = BASIC_TAB;
    quizState = null;
    quizLocked = false;
    resetQuizV2States();
    contentEl.innerHTML = renderBasicPanel();
    return;
  }

  if (selectedType === QUIZ_TAB) {
    currentTerrain = QUIZ_TAB;
    quizState = null;
    quizLocked = false;
    selectedQuizMode = "";
    teacherSelectedTerrains = new Set();
    contentEl.innerHTML = renderQuizHub();
    renderIntegratedQuizStats();
    return;
  }

  const data = TERRAIN_DATA[selectedType];
  if (!data) return;
  currentTerrain = selectedType;
  quizState = null;
  quizLocked = false;
  resetQuizV2States();

  const featureRows = data.featureTable
    .map((row) => {
      const col0 = escapeHtml(row[0]);
      const col1 = escapeHtml(row[1]);
      const col2 = escapeHtml(row[2])
        .replaceAll("대표 사례:", "<br /><strong>대표 사례:</strong>")
        .replaceAll("'바하다'", "'<strong>바하다</strong>'")
        .replaceAll("‘바하다’", "‘<strong>바하다</strong>’");
      return `<tr><td>${col0}</td><td>${col1}</td><td>${col2}</td></tr>`;
    })
    .join("");
  const descriptionItems = (data.descriptionList || [])
    .map((item) => `<li class="section-lead">${escapeHtml(item)}</li>`)
    .join("");
  const landscape = getLandscapeConfig(selectedType);
  const hotspotButtons = (landscape?.hotspots || [])
    .filter((spot) => spot.name)
    .map((spot) => landscapeHotspotMarkup(selectedType, spot))
    .join("");
  const glacialEraButton =
    selectedType === "빙하지형"
      ? '<button type="button" class="glacial-era-open-btn" data-action="open-glacial-era-modal">과거 빙하기 모습 보기</button>'
      : "";
  const landscapeLegend = "";
  const landscapeGuideText =
    selectedType === "대지형" ? "" : "";
  const isContinentalTerrain = selectedType === "대지형";
  const locationFilterControls = isContinentalTerrain
    ? `<div class="continental-hotspot-controls" role="group" aria-label="대지형 위치 확인">
         <span class="continental-hotspot-label">위치 확인:</span>
         <button type="button" class="landscape-copy-json-btn" data-action="show-continental-group" data-group="stable-shield" aria-pressed="false">🟡 안정육괴</button>
         <button type="button" class="landscape-copy-json-btn" data-action="show-continental-group" data-group="old-fold" aria-pressed="false">🟢 고기습곡산지</button>
         <button type="button" class="landscape-copy-json-btn" data-action="show-continental-group" data-group="young-fold" aria-pressed="false">🔴 신기습곡산지</button>
       </div>`
    : "";
  const landscapeHotspotsClass = isContinentalTerrain ? "hotspots hotspots--hidden" : "hotspots";
  const landscapeSection = landscape
    ? `
      <article id="landscape-explorer-section" class="terrain-section-card landscape-explorer-section">
        <div class="landscape-section-head">
          <div class="landscape-section-title-wrap">
            <h2 class="section-title landscape-section-title">${escapeHtml(landscape.title)}</h2>
            ${landscapeGuideText}
          </div>
          <div class="landscape-action-buttons">
            ${locationFilterControls}
          </div>
        </div>
        <div class="landscape-container">
          <img src="${escapeHtml(landscape.image)}" alt="${escapeHtml(selectedType)} 경관" class="landscape-img" />
          ${glacialEraButton}
          <div class="${landscapeHotspotsClass}">${hotspotButtons}</div>
        </div>
        ${landscapeLegend}
      </article>
  `
    : "";
  const tectonicsSection =
    selectedType === "대지형"
      ? `
      <article class="terrain-section-card landscape-explorer-section">
        <h2 class="section-title">🧩 판구조론</h2>
        <div class="plate-tectonics-container plate-tectonics-image-wrap">
          <img src="images/판구조론.png" alt="판구조론" class="landscape-img plate-tectonics-img" loading="lazy" decoding="async" />
          <p class="section-lead plate-tectonics-placeholder" hidden>판구조론 이미지를 넣으면 여기에 표시된다. (images/판구조론.png)</p>
        </div>
      </article>
  `
      : "";
  const coastalWorldSection =
    selectedType === "해안지형"
      ? `
      <div class="coastal-world-wrap" role="group" aria-label="세계의 해안">
        <p class="coastal-world-title"><strong>세계의 해안</strong></p>
        <div class="coastal-world-buttons">
          <button type="button" class="coastal-world-btn" data-action="open-coastal-world-modal" data-hotspot-id="item-world-fjord-coast" data-title="피오르 해안">피오르 해안</button>
          <button type="button" class="coastal-world-btn" data-action="open-coastal-world-modal" data-hotspot-id="item-world-rias-coast" data-title="리아스 해안">리아스 해안</button>
          <button type="button" class="coastal-world-btn" data-action="open-coastal-world-modal" data-hotspot-id="item-world-mudflat-coast" data-title="갯벌 해안">갯벌 해안</button>
        </div>
      </div>
  `
      : "";

  const compareTableHeadRow =
    selectedType === "대지형"
      ? "<thead><tr><th>대지형</th><th>형성시기</th><th>형성 과정 및 특징</th></tr></thead>"
      : "<thead><tr><th>지형</th><th>분류</th><th>형성 과정 및 특징</th></tr></thead>";

  contentEl.innerHTML = `
    <section class="terrain-content step-panel" data-terrain-panel="${escapeHtml(selectedType)}">
      <article class="terrain-section-card terrain-intro-card">
        <h2 class="section-title">📍 ${escapeHtml(selectedType)}이란?</h2>
        <ul class="terrain-intro-list">${descriptionItems}</ul>
      </article>
      ${tectonicsSection}
      ${landscapeSection}

      <article class="terrain-section-card">
        <h2 class="section-title">📋 ${escapeHtml(selectedType)}</h2>
        <table class="terrain-compare-table" aria-label="${escapeHtml(selectedType)} 특징표">
          ${compareTableHeadRow}
          <tbody>${featureRows}</tbody>
        </table>
        ${coastalWorldSection}
      </article>

      <article class="terrain-section-card">
        <h2 class="section-title">❓ 어나더 퀴즈</h2>
        <p class="section-lead">지형별 4지선다 문제를 무작위로 풀어보세요.</p>
        <div id="quiz-root" class="quiz-wrap">
          <button id="quiz-start-btn" class="quiz-start" type="button">퀴즈 시작하기</button>
        </div>
      </article>
    </section>
  `;

  const landscapeContainer = contentEl.querySelector(".landscape-container .hotspots")?.closest(".landscape-container");
  if (landscapeContainer) {
    initLandscapeHotspotDragging(landscapeContainer, selectedType);
  }
  const plateImg = contentEl.querySelector(".plate-tectonics-img");
  if (plateImg instanceof HTMLImageElement) {
    const placeholder = contentEl.querySelector(".plate-tectonics-placeholder");
    const showPlaceholder = () => {
      plateImg.hidden = true;
      if (placeholder) placeholder.hidden = false;
    };
    if (!plateImg.complete) {
      plateImg.addEventListener("error", showPlaceholder, { once: true });
    } else if (plateImg.naturalWidth === 0) {
      showPlaceholder();
    }
  }
}

function startQuiz() {
  const data = TERRAIN_DATA[currentTerrain];
  const quizRoot = document.getElementById("quiz-root");
  if (!data?.quizzes?.length || !quizRoot) return;

  quizState = {
    terrain: currentTerrain,
    questions: shuffle(data.quizzes).slice(0, 3),
    index: 0,
    score: 0,
  };

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quizRoot = document.getElementById("quiz-root");
  if (!quizRoot || !quizState) return;
  const q = quizState.questions[quizState.index];
  if (!q) return;

  const options = q.choices
    .map((choice, idx) => `<button class="quiz-option ios-button ios-button--secondary" type="button" data-choice-index="${idx}">${idx + 1}. ${escapeHtml(choice)}</button>`)
    .join("");

  quizRoot.innerHTML = `
    <p class="quiz-progress">문제 ${quizState.index + 1} / ${quizState.questions.length}</p>
    <p class="quiz-question">${escapeHtml(q.question)}</p>
    <div class="quiz-options">${options}</div>
    <p id="quiz-feedback" class="quiz-feedback"></p>
  `;

}

function handleQuizAnswer(choiceIndex) {
  if (!quizState || quizLocked) return;
  quizLocked = true;
  const quizRoot = document.getElementById("quiz-root");
  const feedback = document.getElementById("quiz-feedback");
  if (!quizRoot || !feedback) return;

  const currentQuestion = quizState.questions[quizState.index];
  const optionButtons = quizRoot.querySelectorAll(".quiz-option");
  const isCorrect = choiceIndex === currentQuestion.answer;

  optionButtons.forEach((btn) => {
    const idx = Number(btn.dataset.choiceIndex);
    btn.disabled = true;
    if (idx === currentQuestion.answer) btn.classList.add("is-correct");
    if (idx === choiceIndex && !isCorrect) btn.classList.add("is-wrong");
  });

  if (isCorrect) {
    quizState.score += 1;
    feedback.textContent = "정답입니다!";
    feedback.className = "quiz-feedback correct";
  } else {
    feedback.textContent = `오답이다. 정답은 ${currentQuestion.choices[currentQuestion.answer]}이다.`;
    feedback.className = "quiz-feedback wrong";
  }

  window.setTimeout(() => {
    if (!quizState) return;
    quizState.index += 1;
    if (quizState.index >= quizState.questions.length) {
      quizLocked = false;
      openResultModal();
      return;
    }
    quizLocked = false;
    renderQuizQuestion();
  }, 700);
}

function openResultModal() {
  if (!quizState) return;
  const modal = document.getElementById("terrain-result-modal");
  const scoreEl = document.getElementById("result-score");
  const messageEl = document.getElementById("result-message");
  if (!modal || !scoreEl || !messageEl) return;

  const total = quizState.questions.length;
  const score = quizState.score;
  scoreEl.textContent = `${score} / ${total} 정답`;
  messageEl.textContent = score === total ? "완벽해요! 지형 개념을 정확히 이해했어요." : score >= 2 ? "좋아요! 핵심 개념을 잘 잡고 있어요." : "괜찮아요. 형성 과정을 다시 보고 재도전해봐요.";
  modal.hidden = false;
}

function initResultModalHandlers() {
  const retryBtn = document.getElementById("result-retry-btn");
  const closeBtn = document.getElementById("result-close-btn");
  const closeTargets = document.querySelectorAll("[data-close-result-modal]");

  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      closeResultModal();
      startQuiz();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeResultModal);
  closeTargets.forEach((el) => {
    el.addEventListener("click", closeResultModal);
  });
}

function initTerrainTabs() {
  document.querySelectorAll(".terrain-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      setTerrain(tab.dataset.terrain || BASIC_TAB);
    });
  });
}

function initDelegatedActions() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const basicNavBtn = target.closest(".basic-nav-pill");
    if (basicNavBtn instanceof HTMLButtonElement && basicNavBtn.dataset.terrain) {
      setTerrain(basicNavBtn.dataset.terrain);
      return;
    }

    const copyHotspotLayoutBtn = target.closest("[data-action=\"copy-hotspot-layout\"]");
    if (copyHotspotLayoutBtn instanceof HTMLButtonElement) {
      void copyHotspotLayoutToClipboard();
      return;
    }

    const glacialEraModalBtn = target.closest("[data-action=\"open-glacial-era-modal\"]");
    if (glacialEraModalBtn instanceof HTMLButtonElement) {
      openGlacialEraModal();
      return;
    }
    const continentalGroupBtn = target.closest("[data-action=\"show-continental-group\"]");
    if (continentalGroupBtn instanceof HTMLButtonElement) {
      const section = continentalGroupBtn.closest("#landscape-explorer-section");
      const hotspotsLayer = section?.querySelector(".hotspots");
      if (hotspotsLayer) {
        const wasActive = continentalGroupBtn.classList.contains("is-active");
        continentalGroupBtn.classList.toggle("is-active", !wasActive);
        continentalGroupBtn.setAttribute("aria-pressed", String(!wasActive));

        const activeGroups = new Set(
          Array.from(section.querySelectorAll('[data-action="show-continental-group"].is-active'))
            .map((btn) => (btn instanceof HTMLButtonElement ? String(btn.dataset.group || "").trim() : ""))
            .filter(Boolean)
        );
        const hasActiveGroup = activeGroups.size > 0;
        hotspotsLayer.classList.toggle("hotspots--hidden", !hasActiveGroup);
        hotspotsLayer.querySelectorAll(".hotspot").forEach((hotspotEl) => {
          if (!(hotspotEl instanceof HTMLButtonElement)) return;
          if (!hasActiveGroup) {
            hotspotEl.classList.add("is-filter-hidden");
            return;
          }
          const group = String(hotspotEl.dataset.hotspotGroup || "").trim();
          const isVisible = activeGroups.has(group);
          hotspotEl.classList.toggle("is-filter-hidden", !isVisible);
        });
      }
      return;
    }
    const coastalWorldBtn = target.closest("[data-action=\"open-coastal-world-modal\"]");
    if (coastalWorldBtn instanceof HTMLButtonElement) {
      const hid = coastalWorldBtn.dataset.hotspotId || "";
      const label = String(coastalWorldBtn.dataset.title || "").trim() || "세계의 해안";
      const titleEn = LANDFORM_DETAIL_EN[hid] || "";
      openLandformDetailModal(label, titleEn, hid);
      return;
    }

    const integratedTerrainBtn = target.closest("[data-action=\"integrated-select-terrain\"]");
    if (integratedTerrainBtn instanceof HTMLButtonElement) {
      const nextTerrain = String(integratedTerrainBtn.dataset.terrain || "").trim();
      if (!TERRAIN_TYPES.includes(nextTerrain)) return;
      integratedQuizSelectedTerrain = nextTerrain;
      const chips = document.querySelectorAll("[data-action=\"integrated-select-terrain\"]");
      chips.forEach((chip) => {
        if (!(chip instanceof HTMLButtonElement)) return;
        const isActive = chip.dataset.terrain === nextTerrain;
        chip.classList.toggle("is-active", isActive);
        chip.setAttribute("aria-pressed", String(isActive));
      });
      return;
    }

    const modeSelectBtn = target.closest("[data-action=\"select-quiz-mode\"]");
    if (modeSelectBtn instanceof HTMLButtonElement) {
      const mode = String(modeSelectBtn.dataset.mode || "random").trim();
      if (!["random", "image", "goldenbell"].includes(mode)) return;
      setQuizModeCardActive(mode);
      return;
    }

    const quizV2StartBtn = target.closest("[data-action=\"quiz-v2-start\"]");
    if (quizV2StartBtn instanceof HTMLButtonElement) {
      if (!["random", "image", "goldenbell"].includes(selectedQuizMode)) {
        window.alert("모드를 선택하세요.");
        return;
      }
      const selectedTerrains = getSelectedTerrainsForQuizStart();
      if (!selectedTerrains.length) {
        window.alert("최소 1개 단원을 선택하세요.");
        return;
      }
      if (selectedQuizMode === "image") {
        startImageQuiz(selectedTerrains);
        setQuizModeCardActive("image");
        return;
      }
      if (selectedQuizMode === "goldenbell") {
        startGoldenBellMode(selectedTerrains);
        setQuizModeCardActive("goldenbell");
        return;
      }
      const pool = getAllTerrainQuizQuestions().filter((q) => selectedTerrains.includes(q.sourceTerrain));
      if (!pool.length) {
        window.alert("선택한 단원에 문제가 없습니다.");
        return;
      }
      startIntegratedQuiz("random", selectedTerrains.join("|"), pool);
      setQuizModeCardActive("random");
      return;
    }

    const dailyStartBtn = target.closest("[data-action=\"start-daily-challenge\"]");
    if (dailyStartBtn instanceof HTMLButtonElement) {
      startDailyChallenge();
      setQuizModeCardActive("daily");
      return;
    }

    const teacherChipBtn = target.closest("[data-action=\"teacher-toggle-chip\"]");
    if (teacherChipBtn instanceof HTMLButtonElement) {
      const terrain = String(teacherChipBtn.dataset.terrain || "").trim();
      toggleTeacherTerrainChip(terrain);
      const isActive = teacherSelectedTerrains.has(terrain);
      teacherChipBtn.classList.toggle("active", isActive);
      teacherChipBtn.setAttribute("aria-pressed", String(isActive));
      return;
    }

    const integratedAnswerBtn = target.closest("[data-action=\"integrated-answer\"]");
    if (integratedAnswerBtn instanceof HTMLButtonElement) {
      handleIntegratedQuizAnswer(Number(integratedAnswerBtn.dataset.choiceIndex));
      return;
    }

    const integratedRetryBtn = target.closest("[data-action=\"integrated-retry\"]");
    if (integratedRetryBtn instanceof HTMLButtonElement) {
      if (integratedQuizState) {
        startIntegratedQuiz(integratedQuizState.mode, integratedQuizState.terrainKey || integratedQuizSelectedTerrain);
        setQuizModeCardActive(integratedQuizState.mode);
      }
      return;
    }

    const imageQuizRetryBtn = target.closest("[data-action=\"image-quiz-retry\"]");
    if (imageQuizRetryBtn instanceof HTMLButtonElement) {
      startImageQuiz(imageQuizState?.selectedTerrains || getSelectedTerrainsForQuizStart());
      setQuizModeCardActive("image");
      return;
    }

    const dailyRetryBtn = target.closest("[data-action=\"daily-retry\"]");
    if (dailyRetryBtn instanceof HTMLButtonElement) {
      startDailyChallenge();
      setQuizModeCardActive("daily");
      return;
    }

    const goldenBellRestartBtn = target.closest("[data-action=\"goldenbell-restart\"]");
    if (goldenBellRestartBtn instanceof HTMLButtonElement) {
      startGoldenBellMode(goldenBellState?.selectedTerrains || getSelectedTerrainsForQuizStart());
      setQuizModeCardActive("goldenbell");
      return;
    }

    const goldenBellSubmitBtn = target.closest("[data-action=\"goldenbell-submit-answer\"]");
    if (goldenBellSubmitBtn instanceof HTMLButtonElement) {
      submitGoldenBellAnswer();
      return;
    }

    const goldenBellRevealBtn = target.closest("[data-action=\"goldenbell-reveal\"]");
    if (goldenBellRevealBtn instanceof HTMLButtonElement) {
      revealGoldenBellAnswer();
      return;
    }

    const goldenBellNextBtn = target.closest("[data-action=\"goldenbell-next\"]");
    if (goldenBellNextBtn instanceof HTMLButtonElement) {
      nextGoldenBellQuestion();
      return;
    }

    const goldenBellPrevBtn = target.closest("[data-action=\"goldenbell-prev\"]");
    if (goldenBellPrevBtn instanceof HTMLButtonElement) {
      prevGoldenBellQuestion();
      return;
    }

    const imageQuizAnswerBtn = target.closest("[data-action=\"image-quiz-answer\"]");
    if (imageQuizAnswerBtn instanceof HTMLButtonElement) {
      handleImageQuizAnswer(Number(imageQuizAnswerBtn.dataset.choiceIndex));
      return;
    }

    const dailyQuizAnswerBtn = target.closest("[data-action=\"daily-quiz-answer\"]");
    if (dailyQuizAnswerBtn instanceof HTMLButtonElement) {
      handleDailyQuizAnswer(Number(dailyQuizAnswerBtn.dataset.choiceIndex));
      return;
    }

    const integratedResetBtn = target.closest("[data-action=\"integrated-reset\"]");
    if (integratedResetBtn instanceof HTMLButtonElement) {
      resetIntegratedQuiz();
      return;
    }

    const quizStartBtn = target.closest("#quiz-start-btn");
    if (quizStartBtn) {
      startQuiz();
      return;
    }

    const quizOptionBtn = target.closest(".quiz-option");
    if (quizOptionBtn instanceof HTMLButtonElement) {
      handleQuizAnswer(Number(quizOptionBtn.dataset.choiceIndex));
      return;
    }

    const hotspotBtn = target.closest(".hotspot");
    if (hotspotBtn instanceof HTMLButtonElement) {
      if (hotspotBtn.dataset.suppressHotspotClick === "1") {
        delete hotspotBtn.dataset.suppressHotspotClick;
        return;
      }
      if (hotspotBtn.dataset.noModal === "1") return;
      if (TERRAIN_TYPES.includes(currentTerrain)) {
        const hid = hotspotBtn.dataset.hotspotId || "";
        const label = String(hotspotBtn.dataset.terrain || "").trim() || "지형";
        const titleEn = LANDFORM_DETAIL_EN[hid] || "";
        openLandformDetailModal(label, titleEn, hid);
        return;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTerrainTabs();
  initResultModalHandlers();
  initLandformDetailModal();
  initGlacialEraModal();
  initDelegatedActions();
  setTerrain(BASIC_TAB);

  const loadingEl = document.getElementById("app-loading");
  if (loadingEl) {
    loadingEl.setAttribute("hidden", "");
    loadingEl.style.display = "none";
    loadingEl.remove();
  }
  document.body.classList.add("app-ready");
});
