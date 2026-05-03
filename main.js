const jobs = {
  warrior: {
    title: "전사",
    role: "근거리 · 강인 체력",
    tagline: ["강인한 체력과 근접 공격으로", "전장을 돌파하는 전사"],
    intro: "높은 생존력으로 전열을 지키며, 안정적인 근접 전투를 이끄는 선봉형 직업입니다.",
    traits: ["선봉", "난이도 낮음", "솔로 안정"],
    character: "images/redesign_img/character-warrior-sword.png",
    background: "images/redesign_img/class-warrior-bg.png",
    scale: 0.88,
    stats: [85, 90, 60, 30],
    color: "#C8861A",
    colorRgb: "200, 134, 26"
  },
  assassin: {
    title: "자객",
    role: "근거리 · 빠른 공격",
    tagline: ["빠른 움직임과 치명적인 일격으로", "적의 빈틈을 파고드는 자객"],
    intro: "짧은 순간에 거리를 좁혀 폭발적인 피해를 넣는 기습형 직업입니다.",
    traits: ["기습", "고속 전투", "손맛 강함"],
    character: "images/redesign_img/character-assassin-purple.png",
    background: "images/redesign_img/class-assassin-bg.png",
    scale: 0.88,
    stats: [94, 42, 55, 96],
    color: "#9B6FD4",
    colorRgb: "155, 111, 212"
  },
  archer: {
    title: "사수",
    role: "원거리 · 정밀 사격",
    tagline: ["활과 원거리 공격으로", "전장을 넓게 장악하는 사수"],
    intro: "먼 거리에서 적의 움직임을 읽고 안정적으로 전장을 통제하는 원거리 직업입니다.",
    traits: ["원거리", "견제", "정밀 타격"],
    character: "images/redesign_img/character-ranger-bow.png",
    background: "images/redesign_img/class-ranger-bg.png",
    scale: 0.9,
    stats: [78, 52, 58, 88],
    color: "#4CAF82",
    colorRgb: "76, 175, 130"
  },
  fighter: {
    title: "역도",
    role: "근거리 · 강한 일격",
    tagline: ["묵직한 무기와 힘으로", "적진을 흔드는 파괴형 전투가"],
    intro: "강한 한 방과 넓은 타격 범위로 적진을 흔드는 돌파형 직업입니다.",
    traits: ["파괴력", "범위 공격", "묵직한 조작"],
    character: "images/redesign_img/character-fighter-axe.png",
    background: "images/redesign_img/class-fighter-bg.png",
    scale: 1.04,
    stats: [92, 78, 82, 38],
    color: "#E05A28",
    colorRgb: "224, 90, 40"
  },
  daoist: {
    title: "도사",
    role: "도술 · 영력 지원",
    tagline: ["도술과 부적의 힘으로", "전투 흐름을 바꾸는 도사"],
    intro: "도술과 영력으로 아군을 돕고 전투 흐름을 유리하게 바꾸는 지원형 직업입니다.",
    traits: ["지원", "도술", "파티 추천"],
    character: "images/redesign_img/character-ascetic-white.png",
    background: "images/redesign_img/class-ascetic-bg.png",
    scale: 0.92,
    stats: [64, 62, 76, 70],
    color: "#5BA8D8",
    colorRgb: "91, 168, 216"
  }
};

const yokai = {
  nineTail: {
    name: "구미호",
    rarity: "COMMON",
    rarityClass: "rarity-common-tag",
    score: "12,360 혼",
    desc: "오래된 산길에 나타나는 여우 요괴. 환영을 만들고 빠른 몸놀림으로 모험가의 빈틈을 노립니다.",
    info: "환술과 꼬리 공격을 섞어 전투 흐름을 흔드는 기민한 요괴입니다.",
    region: "청음 숲길 · 달빛 고개",
    reward: "여우 혼석, 낡은 부적, 금전",
    difficulty: 42,
    difficultyText: "2 / 5"
  },
  fireWolf: {
    name: "화염 멧돼지",
    rarity: "RARE",
    rarityClass: "rarity-rare-tag",
    score: "21,365 혼",
    desc: "불씨를 두른 돌진형 요괴. 짧은 예고 뒤 빠르게 들이받아 전열을 무너뜨립니다.",
    info: "화상 장판과 돌진을 반복하므로 옆으로 피한 뒤 공격 타이밍을 잡는 것이 좋습니다.",
    region: "붉은 숲 외곽 · 재의 언덕",
    reward: "화염 가죽, 붉은 송곳니, 금전",
    difficulty: 58,
    difficultyText: "3 / 5"
  },
  maidenGhost: {
    name: "처녀귀신",
    rarity: "EPIC",
    rarityClass: "rarity-epic-tag",
    score: "45,262 혼",
    desc: "차가운 기운을 품은 원혼. 먼 거리에서 영력을 날리고 이동을 둔화시킵니다.",
    info: "빙결과 침묵 계열 공격이 강해 회피기와 해제 아이템을 준비하면 안정적입니다.",
    region: "버려진 사당 · 안개 묘지",
    reward: "한기 어린 혼, 비단 조각, 봉인석",
    difficulty: 76,
    difficultyText: "4 / 5"
  },
  clawFiend: {
    name: "만조각신",
    rarity: "EPIC",
    rarityClass: "rarity-epic-tag",
    score: "7,998 혼",
    desc: "날카로운 손톱으로 가까운 적을 찢는 기괴한 요괴. 체력은 낮지만 공격 속도가 빠릅니다.",
    info: "짧은 연속 공격 후 틈이 생기며, 방어보다 거리 조절이 더 중요합니다.",
    region: "폐가 골목 · 그림자 장터",
    reward: "날카로운 발톱, 검은 천, 금전",
    difficulty: 64,
    difficultyText: "3 / 5"
  },
  fishGhost: {
    name: "독도 설귀",
    rarity: "LEGENDARY",
    rarityClass: "rarity-legendary-tag",
    score: "32,609 혼",
    desc: "거친 물살을 타고 나타나는 희귀 요괴. 물기둥과 꼬리 휩쓸기로 넓은 범위를 장악합니다.",
    info: "광역 공격 범위가 넓어 이동 경로를 먼저 확보하고 짧게 치고 빠지는 전투가 유리합니다.",
    region: "동해 절벽 · 파도 동굴",
    reward: "설귀 비늘, 푸른 혼석, 희귀 강화재",
    difficulty: 88,
    difficultyText: "5 / 5"
  }
};

const statLabels = ["공격력", "방어력", "체력", "민첩성"];
const jobOrder = Object.keys(jobs);
const title = document.getElementById("class-title");
const tagline = document.querySelector(".class-tagline");
const classIntro = document.querySelector(".class-intro");
const classTraits = document.querySelector(".class-traits");
const statList = document.querySelector(".stat-list");
const characterSection = document.querySelector(".character-section");
const characterWrap = document.querySelector(".character-wrap");
const classDetail = document.querySelector(".class-detail");
const classPathTitle = document.querySelector(".class-path-title");
const classPathDesc = document.querySelector(".class-path-desc");
const classSceneCurrent = document.querySelector(".class-scene-current");
const classSceneNext = document.querySelector(".class-scene-next");
const classCharacterCurrent = document.querySelector(".class-character-current");
const classCharacterNext = document.querySelector(".class-character-next");
const classRing = document.querySelector(".class-ring");
const groundGlow = document.querySelector(".class-ground-glow");
const jobCards = [...document.querySelectorAll(".job-card")];
let currentJobIndex = 0;

// Set initial warrior theme color and scale
characterSection.style.setProperty("--job-color", jobs.warrior.color);
characterSection.style.setProperty("--job-color-rgb", jobs.warrior.colorRgb);
classCharacterCurrent?.style.setProperty("--character-scale", jobs.warrior.scale);

function renderStats(stats) {
  if (!statList) return;

  statList.innerHTML = stats.map((value, index) => `
    <div class="stat-row">
      <span>${statLabels[index]}</span>
      <div><i style="width:${value}%"></i></div>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function runClassMotion(direction) {
  characterWrap.classList.remove("slide-next", "slide-prev");
  classDetail.classList.remove("is-swapping");
  characterSection.classList.remove("is-sliding", "slide-next", "slide-prev");

  window.requestAnimationFrame(() => {
    characterWrap.classList.add(direction === "prev" ? "slide-prev" : "slide-next");
    classDetail.classList.add("is-swapping");
    characterSection.classList.add("is-sliding", direction === "prev" ? "slide-prev" : "slide-next");
  });
}

function selectJob(jobKey, direction = "next") {
  const nextIndex = jobOrder.indexOf(jobKey);
  const job = jobs[jobKey];
  if (!job || nextIndex < 0) return;
  if (nextIndex === currentJobIndex && classPathTitle.textContent === job.title) return;

  currentJobIndex = nextIndex;

  jobCards.forEach((item) => {
    const selected = item.dataset.job === jobKey;
    item.classList.toggle("character-selected", selected);
    item.setAttribute("aria-selected", selected ? "true" : "false");
  });

  title.textContent = job.title;
  tagline.innerHTML = job.tagline.map((line) => `<span>${line}</span>`).join("");
  classIntro.textContent = job.intro;
  classTraits.innerHTML = job.traits.map((trait) => `<span>${trait}</span>`).join("");
  classPathTitle.textContent = job.title;
  classPathDesc.textContent = job.role;
  if (classSceneNext) classSceneNext.setAttribute("src", job.background);
  if (classCharacterNext) {
    classCharacterNext.setAttribute("src", job.character);
    classCharacterNext.style.setProperty("--character-scale", job.scale);
  }
  characterSection.style.setProperty("--job-color", job.color);
  characterSection.style.setProperty("--job-color-rgb", job.colorRgb);
  renderStats(job.stats);
  runClassMotion(direction);
}

classCharacterNext?.addEventListener("animationend", (event) => {
  if (!event.animationName.startsWith("class-character-enter")) return;

  const nextScene = classSceneNext.getAttribute("src");
  if (nextScene) classSceneCurrent?.setAttribute("src", nextScene);
  classSceneNext.removeAttribute("src");
  const nextCharacter = classCharacterNext.getAttribute("src");
  if (nextCharacter) {
    classCharacterCurrent?.setAttribute("src", nextCharacter);
    classCharacterCurrent?.style.setProperty("--character-scale", classCharacterNext.style.getPropertyValue("--character-scale") || 1);
  }
  classCharacterNext.removeAttribute("src");
  characterSection.classList.remove("is-sliding", "slide-next", "slide-prev");

  // Landing impact
  groundGlow.classList.remove("is-landing");
  classRing?.classList.remove("is-landing");
  characterSection.classList.remove("is-landing");
  void groundGlow.offsetWidth;
  groundGlow.classList.add("is-landing");
  classRing?.classList.add("is-landing");
  setTimeout(() => {
    groundGlow.classList.remove("is-landing");
    classRing?.classList.remove("is-landing");
  }, 600);
});

jobCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const direction = index < currentJobIndex ? "prev" : "next";
    selectJob(card.dataset.job, direction);
  });
});

document.querySelector(".class-nav-prev").addEventListener("click", () => {
  const nextIndex = (currentJobIndex - 1 + jobOrder.length) % jobOrder.length;
  selectJob(jobOrder[nextIndex], "prev");
});

document.querySelector(".class-nav-next").addEventListener("click", () => {
  const nextIndex = (currentJobIndex + 1) % jobOrder.length;
  selectJob(jobOrder[nextIndex], "next");
});

const bestiarySection = document.querySelector(".bestiary-strip");
const yokaiCards = [...document.querySelectorAll(".yokai-card")];
const detailClose = document.querySelector(".detail-close");
const detailRarity = document.querySelector(".detail-rarity");
const detailScore = document.querySelector(".detail-score");
const detailName = document.querySelector(".detail-name");
const detailDesc = document.querySelector(".detail-desc");
const detailInfo = document.querySelector(".detail-info");
const detailRegion = document.querySelector(".detail-region");
const detailReward = document.querySelector(".detail-reward");
const detailMeter = document.querySelector(".difficulty-meter i");
const detailDifficulty = document.querySelector(".detail-difficulty strong");

function openYokaiDetail(yokaiKey) {
  const data = yokai[yokaiKey];
  if (!data) return;

  bestiarySection.classList.add("is-expanded");
  detailRarity.className = `rarity detail-rarity ${data.rarityClass}`;
  detailRarity.textContent = data.rarity;
  detailScore.textContent = data.score;
  detailName.textContent = data.name;
  detailDesc.textContent = data.desc;
  detailInfo.textContent = data.info;
  detailRegion.textContent = data.region;
  detailReward.textContent = data.reward;
  detailMeter.style.width = `${data.difficulty}%`;
  detailDifficulty.textContent = data.difficultyText;

  yokaiCards.forEach((card) => {
    const selected = card.dataset.yokai === yokaiKey;
    card.classList.toggle("yokai-selected", selected);
    card.setAttribute("aria-expanded", selected ? "true" : "false");
  });
}

function closeYokaiDetail() {
  bestiarySection.classList.remove("is-expanded");
  yokaiCards.forEach((card) => {
    card.classList.remove("yokai-selected");
    card.setAttribute("aria-expanded", "false");
  });
}

yokaiCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("yokai-selected")) {
      closeYokaiDetail();
      return;
    }

    openYokaiDetail(card.dataset.yokai);
  });
});

detailClose.addEventListener("click", closeYokaiDetail);
