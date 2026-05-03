const jobs = {
  warrior: {
    name: "전사",
    resultTitle: "전사형 플레이어",
    type: "VG-선봉형",
    position: "선봉 돌파",
    image: "images/redesign_img/character-warrior-sword.png",
    summary:
      "위험한 순간에 먼저 앞으로 나서는 타입입니다. 흔들리는 전투에서도 중심을 잡고, 파티가 믿고 따라갈 수 있는 안정적인 전열을 만듭니다.",
    tags: ["높은 생존력", "정면 승부", "파티의 방패"]
  },
  assassin: {
    name: "자객",
    resultTitle: "자객형 플레이어",
    type: "NS-기습형",
    position: "후방 암습",
    image: "images/redesign_img/character-assassin-purple.png",
    summary:
      "눈에 띄지 않게 흐름을 읽고 결정적인 한 방을 노리는 타입입니다. 복잡한 상황에서도 빈틈을 찾는 감각이 좋아 전투의 판을 빠르게 뒤집습니다.",
    tags: ["빠른 판단", "기습 공격", "빈틈 포착"]
  },
  archer: {
    name: "사수",
    resultTitle: "사수형 플레이어",
    type: "FP-정밀형",
    position: "원거리 견제",
    image: "images/redesign_img/character-ranger-bow.png",
    summary:
      "거리를 유지하며 전장을 넓게 보는 타입입니다. 무리하게 달려들기보다 타이밍과 위치를 계산해 가장 효율적인 공격 루트를 만듭니다.",
    tags: ["정밀 타격", "거리 조절", "상황 분석"]
  },
  fighter: {
    name: "역도",
    resultTitle: "역도형 플레이어",
    type: "BR-파괴형",
    position: "근접 제압",
    image: "images/redesign_img/character-fighter-axe.png",
    summary:
      "망설임 없이 힘으로 길을 여는 타입입니다. 전투가 길어질수록 존재감이 커지고, 단단한 적도 꾸준히 밀어붙여 흐름을 가져옵니다.",
    tags: ["묵직한 한 방", "전열 압박", "불굴의 추진력"]
  },
  daoist: {
    name: "도사",
    resultTitle: "도사형 플레이어",
    type: "SP-지원형",
    position: "도술 지원",
    image: "images/redesign_img/character-ascetic-white.png",
    summary:
      "혼란스러운 전투를 차분하게 정리하는 타입입니다. 공격과 회복, 보호의 균형을 맞추며 파티 전체가 오래 싸울 수 있는 판을 만듭니다.",
    tags: ["도술 운용", "보호 지원", "균형 감각"]
  }
};

const questions = [
  {
    type: "던전 입장",
    title: "처음 보는 귀문이 열렸습니다. 당신의 첫 행동은?",
    desc: "낯선 전장에 들어가기 직전, 가장 자연스럽게 손이 가는 선택을 골라주세요.",
    choices: [
      {
        title: "앞장서서 길을 연다",
        desc: "파티가 흔들리지 않게 위험한 길목부터 확인한다.",
        scores: { warrior: 3, fighter: 1 },
        axes: { front: 2, guard: 2, team: 1, plan: 1 }
      },
      {
        title: "그림자처럼 먼저 살핀다",
        desc: "소리와 시야를 숨기고 함정과 몬스터 배치를 확인한다.",
        scores: { assassin: 3, archer: 1 },
        axes: { shadow: 2, burst: 2, solo: 1, instinct: 1 }
      },
      {
        title: "거리와 지형을 계산한다",
        desc: "높은 곳과 안전 지대를 먼저 찾고 전투 동선을 만든다.",
        scores: { archer: 3, daoist: 1 },
        axes: { range: 2, plan: 2, control: 1, team: 1 }
      },
      {
        title: "파티 상태부터 맞춘다",
        desc: "버프와 회복 수단을 확인해 오래 싸울 준비를 한다.",
        scores: { daoist: 3, warrior: 1 },
        axes: { support: 2, guard: 2, team: 2, plan: 1 }
      }
    ]
  },
  {
    type: "보스전",
    title: "보스가 큰 기술을 준비합니다. 당신은?",
    desc: "한 번의 선택으로 파티 분위기가 바뀌는 순간입니다.",
    choices: [
      {
        title: "몸으로 받아내며 버틴다",
        desc: "피해를 줄이고 시선을 붙잡아 파티가 재정비할 시간을 번다.",
        scores: { warrior: 3, daoist: 1 },
        axes: { front: 2, guard: 2, team: 2 }
      },
      {
        title: "시전 빈틈을 끊는다",
        desc: "가장 위험한 순간에 파고들어 흐름을 강제로 끊는다.",
        scores: { assassin: 3, fighter: 1 },
        axes: { shadow: 1, burst: 3, solo: 1, instinct: 2 }
      },
      {
        title: "약점만 집중 조준한다",
        desc: "사거리 밖에서 공격 타이밍을 맞춰 안정적으로 압박한다.",
        scores: { archer: 3, assassin: 1 },
        axes: { range: 3, plan: 2, control: 1 }
      },
      {
        title: "보호 도술을 펼친다",
        desc: "광역 피해를 줄이고 쓰러질 수 있는 팀원을 먼저 챙긴다.",
        scores: { daoist: 3, warrior: 1 },
        axes: { support: 3, guard: 2, team: 2 }
      }
    ]
  },
  {
    type: "성장 루트",
    title: "가장 먼저 강화하고 싶은 능력은?",
    desc: "캐릭터를 키울 때 가장 설레는 성장 방향을 골라주세요.",
    choices: [
      {
        title: "절대 쉽게 무너지지 않는 체력",
        desc: "오래 버티면서 마지막까지 전투에 남는 힘.",
        scores: { warrior: 3, fighter: 1 },
        axes: { front: 2, guard: 3, team: 1 }
      },
      {
        title: "눈 깜짝할 사이 터지는 폭딜",
        desc: "짧은 순간에 전투의 결과를 바꾸는 날카로움.",
        scores: { assassin: 3, archer: 1 },
        axes: { burst: 3, shadow: 2, instinct: 1 }
      },
      {
        title: "한 치 오차 없는 명중률",
        desc: "거리를 지배하고 실수를 줄이는 정밀함.",
        scores: { archer: 3, daoist: 1 },
        axes: { range: 3, plan: 2, control: 1 }
      },
      {
        title: "전장을 흔드는 묵직한 힘",
        desc: "한 번 부딪히면 밀리지 않는 압도감.",
        scores: { fighter: 3, warrior: 1 },
        axes: { front: 2, burst: 2, instinct: 1 }
      }
    ]
  },
  {
    type: "파티 플레이",
    title: "팀원이 위기에 빠졌을 때 당신의 선택은?",
    desc: "내 캐릭터보다 파티 흐름을 먼저 보게 되는 순간입니다.",
    choices: [
      {
        title: "적의 시선을 끌어낸다",
        desc: "위험을 내 쪽으로 돌려 팀원이 빠질 틈을 만든다.",
        scores: { warrior: 3, fighter: 1 },
        axes: { front: 2, guard: 2, team: 2 }
      },
      {
        title: "후방을 찔러 압박을 끊는다",
        desc: "적이 정신없는 틈에 핵심 위협을 제거한다.",
        scores: { assassin: 3, archer: 1 },
        axes: { shadow: 2, burst: 2, instinct: 2 }
      },
      {
        title: "멀리서 퇴로를 만들어준다",
        desc: "견제와 유도로 파티가 다시 진형을 잡게 한다.",
        scores: { archer: 3, daoist: 1 },
        axes: { range: 2, control: 2, plan: 2, team: 1 }
      },
      {
        title: "회복과 보호를 먼저 건다",
        desc: "급한 피해를 막고 전투를 이어갈 수 있게 돕는다.",
        scores: { daoist: 3, warrior: 1 },
        axes: { support: 3, guard: 1, team: 3 }
      }
    ]
  },
  {
    type: "플레이 성향",
    title: "전투가 길어질수록 당신은 어떤 쪽에 가까운가요?",
    desc: "반복 전투에서 드러나는 습관이 직업 성향을 결정합니다.",
    choices: [
      {
        title: "안정적으로 전열을 유지한다",
        desc: "조급해하지 않고 파티의 기준점이 된다.",
        scores: { warrior: 3, daoist: 1 },
        axes: { front: 1, guard: 3, team: 2, plan: 1 }
      },
      {
        title: "위험해도 결정타를 노린다",
        desc: "승부를 걸 타이밍이 보이면 과감히 움직인다.",
        scores: { assassin: 3, fighter: 1 },
        axes: { burst: 3, instinct: 2, solo: 1 }
      },
      {
        title: "위치와 거리부터 다시 잡는다",
        desc: "손해를 줄이며 가장 유리한 각도를 만든다.",
        scores: { archer: 3, assassin: 1 },
        axes: { range: 3, plan: 2, control: 2 }
      },
      {
        title: "버프 타이밍을 계속 맞춘다",
        desc: "작은 보조를 쌓아 전투 전체를 편하게 만든다.",
        scores: { daoist: 3, warrior: 1 },
        axes: { support: 3, team: 2, plan: 2 }
      }
    ]
  },
  {
    type: "혼의 별명",
    title: "귀혼 세계에서 당신에게 붙을 별명은?",
    desc: "마지막 선택입니다. 가장 마음이 가는 이름을 골라주세요.",
    choices: [
      {
        title: "선봉의 방패",
        desc: "언제나 맨 앞에서 파티를 지키는 사람.",
        scores: { warrior: 4 },
        axes: { front: 2, guard: 2, team: 1 }
      },
      {
        title: "그림자 칼날",
        desc: "보이지 않는 곳에서 결정적인 한 수를 두는 사람.",
        scores: { assassin: 4 },
        axes: { shadow: 2, burst: 2, solo: 1 }
      },
      {
        title: "달빛 명중",
        desc: "차분하게 기다렸다가 정확히 맞히는 사람.",
        scores: { archer: 4 },
        axes: { range: 2, plan: 2, control: 1 }
      },
      {
        title: "천근의 일격",
        desc: "막힌 길을 힘으로 열어내는 사람.",
        scores: { fighter: 4 },
        axes: { front: 1, burst: 2, instinct: 2 }
      },
      {
        title: "혼의 부적",
        desc: "위험한 순간에도 모두를 살려내는 사람.",
        scores: { daoist: 4 },
        axes: { support: 2, guard: 1, team: 2 }
      }
    ]
  }
];

const state = {
  currentIndex: 0,
  answers: []
};

const screens = {
  start: document.querySelector('[data-screen="start"]'),
  question: document.querySelector('[data-screen="question"]'),
  result: document.querySelector('[data-screen="result"]')
};

const startButtons = document.querySelectorAll("[data-start-test]");
const prevButton = document.querySelector("[data-prev-question]");
const restartButton = document.querySelector("[data-restart-test]");
const questionCount = document.querySelector(".question-count");
const questionType = document.querySelector(".question-type");
const questionTitle = document.querySelector(".question-title");
const questionDesc = document.querySelector(".question-desc");
const choiceGrid = document.querySelector(".choice-grid");
const soulFill = document.querySelector(".soul-meter-fill");
const stepText = document.querySelector(".quiz-step-text");
const scoreBars = [...document.querySelectorAll(".job-score-list i")];
const resultType = document.querySelector(".result-type");
const resultTitle = document.querySelector(".result-title");
const resultSummary = document.querySelector(".result-summary");
const resultTags = document.querySelector(".result-tags");
const resultMatch = document.querySelector(".result-match");
const resultPosition = document.querySelector(".result-position");
const resultCharacter = document.querySelector(".result-character");

function showScreen(name) {
  Object.entries(screens).forEach(([screenName, element]) => {
    element.classList.toggle("is-active", screenName === name);
  });
}

function emptyScoreMap() {
  return Object.keys(jobs).reduce((scores, key) => {
    scores[key] = 0;
    return scores;
  }, {});
}

function emptyAxisMap() {
  return {
    front: 0,
    shadow: 0,
    range: 0,
    support: 0,
    burst: 0,
    guard: 0,
    team: 0,
    solo: 0,
    plan: 0,
    instinct: 0,
    control: 0
  };
}

function getCurrentProfile() {
  const scores = emptyScoreMap();
  const axes = emptyAxisMap();

  state.answers.forEach((choice) => {
    Object.entries(choice.scores).forEach(([key, value]) => {
      scores[key] += value;
    });

    Object.entries(choice.axes).forEach(([key, value]) => {
      axes[key] += value;
    });
  });

  return { scores, axes };
}

function updateStatus() {
  const { scores } = getCurrentProfile();
  const maxScore = Math.max(...Object.values(scores), 1);
  const progress = Math.round((state.answers.length / questions.length) * 100);

  soulFill.style.width = `${progress}%`;
  stepText.textContent =
    state.answers.length === 0
      ? "대기 중"
      : `${state.answers.length}개의 선택 완료`;

  Object.keys(jobs).forEach((key, index) => {
    const visibleScore = 18 + Math.round((scores[key] / maxScore) * 72);
    scoreBars[index].style.setProperty("--score", `${visibleScore}%`);
  });
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  showScreen("question");
  updateStatus();

  questionCount.textContent = `Q${state.currentIndex + 1} / ${questions.length}`;
  questionType.textContent = question.type;
  questionTitle.textContent = question.title;
  questionDesc.textContent = question.desc;
  prevButton.disabled = state.currentIndex === 0;
  choiceGrid.textContent = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-card";
    button.type = "button";
    button.innerHTML = `
      <strong>${choice.title}</strong>
      <span>${choice.desc}</span>
      <em>0${index + 1}</em>
    `;
    button.addEventListener("click", () => selectChoice(choice));
    choiceGrid.appendChild(button);
  });
}

function selectChoice(choice) {
  state.answers[state.currentIndex] = choice;
  state.currentIndex += 1;

  if (state.currentIndex >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function getTypeCode(axes) {
  return [
    axes.front + axes.guard >= axes.shadow + axes.range ? "V" : "S",
    axes.burst + axes.instinct >= axes.plan + axes.control ? "B" : "T",
    axes.team + axes.support >= axes.solo + axes.burst ? "P" : "A",
    axes.guard + axes.support >= axes.range + axes.shadow ? "G" : "R"
  ].join("");
}

function showResult() {
  const { scores, axes } = getCurrentProfile();
  const sortedJobs = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const winnerKey = sortedJobs[0];
  const winner = jobs[winnerKey];
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0) || 1;
  const match = Math.min(98, Math.max(74, Math.round(68 + (scores[winnerKey] / totalScore) * 44)));

  showScreen("result");
  updateStatus();

  resultType.textContent = `${winner.type} · ${getTypeCode(axes)}`;
  resultTitle.textContent = winner.resultTitle;
  resultSummary.textContent = winner.summary;
  resultMatch.textContent = `${match}%`;
  resultPosition.textContent = winner.position;
  resultCharacter.src = winner.image;
  resultCharacter.alt = `${winner.name} 캐릭터`;
  resultTags.textContent = "";

  winner.tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.textContent = tag;
    resultTags.appendChild(badge);
  });
}

function startTest() {
  state.currentIndex = 0;
  state.answers = [];
  renderQuestion();
  document.querySelector(".quiz-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

startButtons.forEach((button) => {
  button.addEventListener("click", startTest);
});

prevButton.addEventListener("click", () => {
  if (state.currentIndex === 0) return;
  state.answers.splice(state.currentIndex - 1, 1);
  state.currentIndex -= 1;
  renderQuestion();
});

restartButton.addEventListener("click", startTest);
updateStatus();
