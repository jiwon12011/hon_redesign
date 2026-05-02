const jobs = {
  warrior: {
    name: "전사",
    tagline: "강인한 체력과 근접 공격으로 전장을 돌파하는 전사",
    type: "근거리 · 강인 체력",
    weapon: "두손검 · 전용 무기",
    bg: "images/redesign_img/class-warrior-bg.png",
    character: "images/redesign_img/character-warrior-sword.png",
    result: "당신은 앞에서 길을 열고 팀을 지키는 전사형 플레이어입니다."
  },
  assassin: {
    name: "자객",
    tagline: "빠른 움직임과 치명적인 한 방으로 빈틈을 찌르는 자객",
    type: "암살 · 고속 기동",
    weapon: "단검 · 암기",
    bg: "images/redesign_img/class-assassin-bg.png",
    character: "images/redesign_img/character-assassin-purple.png",
    result: "당신은 기회를 기다렸다가 완벽하게 마무리하는 자객형 플레이어입니다."
  },
  ascetic: {
    name: "선인",
    tagline: "도술과 지혜로 전장의 흐름을 바꾸는 신비로운 선인",
    type: "도술 · 지원",
    weapon: "부채 · 지팡이",
    bg: "images/redesign_img/class-ascetic-bg.png",
    character: "images/redesign_img/character-ascetic-white.png",
    result: "당신은 상황을 읽고 동료를 이끄는 선인형 플레이어입니다."
  },
  ranger: {
    name: "힐러",
    tagline: "멀리서 전장을 살피며 팀의 생존을 책임지는 지원형 캐릭터",
    type: "원거리 · 회복 지원",
    weapon: "활 · 부적",
    bg: "images/redesign_img/class-ranger-bg.png",
    character: "images/redesign_img/character-ranger-bow.png",
    result: "당신은 안정적으로 팀을 살리고 승리를 설계하는 힐러형 플레이어입니다."
  }
};

const questions = [
  {
    step: "질문 1 / 3",
    title: "전투가 시작되면 가장 먼저 무엇을 하나요?",
    options: [
      ["warrior", "앞에서 길을 연다"],
      ["assassin", "빈틈을 기다린다"],
      ["ascetic", "흐름을 읽고 지원한다"],
      ["ranger", "거리를 두고 팀을 살핀다"]
    ]
  },
  {
    step: "질문 2 / 3",
    title: "파티에서 가장 자신 있는 역할은?",
    options: [
      ["warrior", "맞아도 버티는 선봉"],
      ["assassin", "빠르게 끝내는 결정타"],
      ["ascetic", "위기를 뒤집는 도술"],
      ["ranger", "아군을 살리는 운영"]
    ]
  },
  {
    step: "질문 3 / 3",
    title: "보상을 고른다면 어떤 쪽이 끌리나요?",
    options: [
      ["warrior", "강력한 무기"],
      ["assassin", "속도 증가 장비"],
      ["ascetic", "신비한 주문서"],
      ["ranger", "회복과 보호 부적"]
    ]
  }
];

const classTitle = document.querySelector(".class-info h2");
const classTagline = document.querySelector(".class-tagline");
const classMetaValues = document.querySelectorAll(".class-meta dd");
const classBg = document.querySelector(".class-bg-img");
const classMain = document.querySelector(".class-main-img");

document.querySelectorAll(".job-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const job = jobs[tab.dataset.job];
    if (!job) return;

    document.querySelectorAll(".job-tab").forEach((item) => {
      item.classList.remove("character-selected");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("character-selected");
    tab.setAttribute("aria-selected", "true");
    classTitle.textContent = job.name;
    classTagline.textContent = job.tagline;
    classMetaValues[0].textContent = job.type;
    classMetaValues[1].textContent = job.weapon;
    classBg.src = job.bg;
    classMain.src = job.character;
    classMain.alt = `${job.name} 캐릭터`;
  });
});

const quiz = document.getElementById("jobQuiz");
let currentQuestion = 0;
const score = {
  warrior: 0,
  assassin: 0,
  ascetic: 0,
  ranger: 0
};

function renderQuestion() {
  const question = questions[currentQuestion];
  quiz.innerHTML = `
    <p class="quiz-step">${question.step}</p>
    <h3>${question.title}</h3>
    <div class="quiz-options">
      ${question.options.map(([job, label]) => `<button data-score="${job}">${label}</button>`).join("")}
    </div>
  `;
}

function renderResult() {
  const winner = Object.keys(score).sort((a, b) => score[b] - score[a])[0];
  const job = jobs[winner];
  quiz.innerHTML = `
    <div class="result-card">
      <img src="${job.character}" alt="${job.name} 캐릭터" />
      <div>
        <p class="quiz-step">RESULT</p>
        <h3>당신은 ${job.name}형 플레이어</h3>
        <p>${job.result}</p>
        <button class="button-primary" data-restart>다시 테스트하기</button>
      </div>
    </div>
  `;
}

if (quiz) {
  renderQuestion();

  quiz.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.restart !== undefined) {
      currentQuestion = 0;
      Object.keys(score).forEach((key) => {
        score[key] = 0;
      });
      renderQuestion();
      return;
    }

    const target = button.dataset.score;
    if (!target) return;

    score[target] += 1;
    currentQuestion += 1;

    if (currentQuestion >= questions.length) {
      renderResult();
    } else {
      renderQuestion();
    }
  });
}
