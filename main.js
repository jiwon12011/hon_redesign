const jobs = {
  warrior: {
    title: "전사",
    symbol: "검",
    role: "근거리 · 강인 체력",
    tagline: ["전열을 지키는 선봉형 전사"],
    intro: "높은 생존력으로 전장을 안정적으로 여는 직업입니다.",
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
    symbol: "암",
    role: "근거리 · 빠른 공격",
    tagline: ["빈틈을 찌르는 기습형 자객"],
    intro: "빠른 접근과 폭발적인 일격으로 흐름을 뒤집습니다.",
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
    symbol: "궁",
    role: "원거리 · 정밀 사격",
    tagline: ["거리를 지배하는 정밀형 사수"],
    intro: "전장을 넓게 보고 안정적으로 적을 압박합니다.",
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
    symbol: "권",
    role: "근거리 · 강한 일격",
    tagline: ["적진을 흔드는 파괴형 역도"],
    intro: "묵직한 한 방과 넓은 범위로 길을 엽니다.",
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
    symbol: "부",
    role: "도술 · 영력 지원",
    tagline: ["전투 흐름을 바꾸는 지원형 도사"],
    intro: "도술과 영력으로 파티의 전투 지속력을 높입니다.",
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
const radarChart = document.querySelector(".radar-chart");
const radarFill = document.querySelector(".radar-fill");
const radarStroke = document.querySelector(".radar-stroke");
const radarPoints = document.querySelector(".radar-points");
const chartStatList = document.querySelector(".chart-stat-list");
const classChart = document.querySelector(".class-chart");
const characterSection = document.querySelector(".character-section");
const characterWrap = document.querySelector(".character-wrap");
const classDetail = document.querySelector(".class-detail");
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

function restartChartMotion() {
  if (!classChart) return;
  classChart.classList.remove("is-charting");
  void classChart.offsetWidth;
  classChart.classList.add("is-charting");
}

function renderStats(stats) {
  const maxRadius = 62;
  const center = 80;
  const angles = [-90, 0, 90, 180];
  const points = stats.map((value, index) => {
    const radius = (Math.max(0, Math.min(value, 100)) / 100) * maxRadius;
    const angle = (angles[index] * Math.PI) / 180;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  if (radarFill) radarFill.setAttribute("points", points.join(" "));
  if (radarStroke) radarStroke.setAttribute("points", `${points.join(" ")} ${points[0]}`);
  if (radarPoints) {
    radarPoints.innerHTML = points.map((point) => {
      const [x, y] = point.split(",");
      return `<circle cx="${x}" cy="${y}" r="3.4" />`;
    }).join("");
  }
  if (radarChart) {
    radarChart.setAttribute(
      "aria-label",
      stats.map((value, index) => `${statLabels[index]} ${value}`).join(", ")
    );
  }

  const statMarkup = stats.map((value, index) => `
    <div>
      <dt>${statLabels[index]}</dt>
      <dd>${value}</dd>
    </div>
  `).join("");

  if (chartStatList) chartStatList.innerHTML = statMarkup;
  if (statList) {
    statList.innerHTML = stats.map((value, index) => `
      <div class="stat-row">
        <span>${statLabels[index]}</span>
        <div><i style="width:${value}%"></i></div>
        <strong>${value}</strong>
      </div>
    `).join("");
  }

  restartChartMotion();
}

renderStats(jobs.warrior.stats);

function runClassMotion(direction) {
  characterWrap.classList.remove("slide-next", "slide-prev");
  classDetail.classList.remove("is-swapping");
  characterSection.classList.remove("is-sliding", "slide-next", "slide-prev");

  window.requestAnimationFrame(() => {
    characterWrap.classList.add(direction === "prev" ? "slide-prev" : "slide-next");
    classDetail.classList.add("is-swapping");
    characterSection.classList.add("is-sliding", direction === "prev" ? "slide-prev" : "slide-next");
  });

  runGsapClassAccent(direction);
}

function selectJob(jobKey, direction = "next") {
  const nextIndex = jobOrder.indexOf(jobKey);
  const job = jobs[jobKey];
  if (!job || nextIndex < 0) return;
  if (nextIndex === currentJobIndex && title.textContent === job.title) return;

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

const heroVideo = document.querySelector(".hero-video");
if (heroVideo) {
  heroVideo.play().catch(() => {
    document.addEventListener("click", () => heroVideo.play(), { once: true });
  });
}

// 요괴 도감 모바일 슬라이더
(() => {
  const grid = document.querySelector(".bestiary-grid");
  const prevBtn = document.querySelector(".bestiary-prev");
  const nextBtn = document.querySelector(".bestiary-next");
  const dotsWrap = document.querySelector(".bestiary-dots");
  if (!grid || !prevBtn || !dotsWrap) return;

  const cards = [...grid.querySelectorAll(".yokai-card")];

  // 점 생성
  const dots = cards.map((_, i) => {
    const d = document.createElement("span");
    d.className = "bestiary-dot" + (i === 0 ? " is-active" : "");
    d.addEventListener("click", () => {
      grid.scrollTo({ left: cards[i].offsetLeft - 20, behavior: "smooth" });
    });
    dotsWrap.appendChild(d);
    return d;
  });

  function getActiveIdx() {
    const cardW = cards[0].offsetWidth + 12;
    return Math.min(Math.round(grid.scrollLeft / cardW), cards.length - 1);
  }

  function updateDots() {
    const idx = getActiveIdx();
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  }

  grid.addEventListener("scroll", updateDots, { passive: true });

  prevBtn.addEventListener("click", () => {
    const idx = Math.max(getActiveIdx() - 1, 0);
    grid.scrollTo({ left: cards[idx].offsetLeft - 20, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    const idx = Math.min(getActiveIdx() + 1, cards.length - 1);
    grid.scrollTo({ left: cards[idx].offsetLeft - 20, behavior: "smooth" });
  });
})();

initHomeGsapMotions();

function hasGsap() {
  return Boolean(window.gsap);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function runGsapClassAccent(direction = "next") {
  if (!hasGsap() || prefersReducedMotion() || !document.body.classList.contains("home-page")) return;

  const x = direction === "prev" ? -18 : 18;
  gsap.fromTo(
    ".class-detail > *",
    { autoAlpha: 0.72, x: -x * 0.45 },
    { autoAlpha: 1, x: 0, duration: 0.46, stagger: 0.045, ease: "power2.out", overwrite: true }
  );
  gsap.fromTo(
    ".class-chart",
    { rotate: direction === "prev" ? -1.6 : 1.6, scale: 0.985 },
    { rotate: 0, scale: 1, duration: 0.72, ease: "elastic.out(1, 0.65)", overwrite: true }
  );
  gsap.fromTo(
    ".class-ground-glow",
    { opacity: 0.52, filter: "blur(8px)" },
    { opacity: 0.9, filter: "blur(5px)", duration: 0.68, ease: "power3.out", overwrite: true }
  );
}

function initHomeGsapMotions() {
  if (!hasGsap() || prefersReducedMotion() || !document.body.classList.contains("home-page")) return;

  const { gsap } = window;
  const ScrollTrigger = window.ScrollTrigger;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  gsap.set([".hero-eyebrow", ".hero-logo-title", ".hero-desc", ".hero-buttons", ".download-link"], {
    autoAlpha: 0,
    y: 18
  });
  gsap.set(".hero-status > article", { autoAlpha: 0, x: 28, y: 10 });

  const heroIntro = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroIntro
    .fromTo(".hero-video", { scale: 1.035, filter: "brightness(0.82)" }, { scale: 1, filter: "brightness(1)", duration: 1.35 }, 0)
    .to(".hero-eyebrow", { autoAlpha: 1, y: 0, duration: 0.42 }, 0.18)
    .to(".hero-logo-title", { autoAlpha: 1, y: 0, duration: 0.58 }, 0.28)
    .to(".hero-desc", { autoAlpha: 1, y: 0, duration: 0.48 }, 0.46)
    .to(".hero-buttons", { autoAlpha: 1, y: 0, duration: 0.46 }, 0.62)
    .to(".download-link", { autoAlpha: 1, y: 0, duration: 0.38 }, 0.76)
    .to(".hero-status > article", { autoAlpha: 1, x: 0, y: 0, duration: 0.56, stagger: 0.12 }, 0.48);

  gsap.to(".live-dot", {
    scale: 1.28,
    boxShadow: "0 0 22px rgba(108, 231, 168, 0.95)",
    duration: 0.9,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  if (ScrollTrigger) {
    gsap.from(".bestiary-strip .section-head", {
      scrollTrigger: { trigger: ".bestiary-strip", start: "top 78%" },
      autoAlpha: 0,
      y: 18,
      duration: 0.55,
      ease: "power2.out"
    });
    gsap.from(".yokai-card", {
      scrollTrigger: { trigger: ".bestiary-grid", start: "top 80%" },
      autoAlpha: 0,
      y: 28,
      rotateX: -7,
      transformOrigin: "center bottom",
      duration: 0.62,
      stagger: 0.08,
      ease: "back.out(1.45)"
    });
    gsap.from(".character-section .class-detail", {
      scrollTrigger: { trigger: ".character-section", start: "top 70%" },
      autoAlpha: 0,
      x: -34,
      duration: 0.72,
      ease: "power3.out"
    });
    gsap.from(".class-character-stage", {
      scrollTrigger: { trigger: ".character-section", start: "top 70%" },
      autoAlpha: 0,
      scale: 0.92,
      y: 26,
      duration: 0.86,
      ease: "back.out(1.25)"
    });
    gsap.from(".job-card", {
      scrollTrigger: { trigger: ".character-picker", start: "top 88%" },
      autoAlpha: 0,
      y: 18,
      scale: 0.86,
      duration: 0.42,
      stagger: 0.045,
      ease: "back.out(1.7)"
    });
    gsap.from(".recommend-copy > *", {
      scrollTrigger: { trigger: ".recommend-section", start: "top 76%" },
      autoAlpha: 0,
      x: -24,
      duration: 0.54,
      stagger: 0.075,
      ease: "power2.out"
    });
    gsap.from(".recommend-stage", {
      scrollTrigger: { trigger: ".recommend-stage", start: "top 82%" },
      autoAlpha: 0,
      y: 34,
      scale: 0.96,
      duration: 0.72,
      ease: "power3.out"
    });
    gsap.from(".speech-bubble", {
      scrollTrigger: { trigger: ".recommend-stage", start: "top 76%" },
      autoAlpha: 0,
      scale: 0.78,
      y: 10,
      duration: 0.42,
      stagger: 0.08,
      ease: "back.out(2)"
    });
    gsap.from(".hot-section .section-head", {
      scrollTrigger: { trigger: ".hot-section", start: "top 80%" },
      autoAlpha: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.from(".featured-item", {
      scrollTrigger: { trigger: ".hot-grid", start: "top 82%" },
      autoAlpha: 0,
      x: -30,
      duration: 0.68,
      ease: "power3.out"
    });
    gsap.from(".hot-row", {
      scrollTrigger: { trigger: ".hot-list", start: "top 84%" },
      autoAlpha: 0,
      x: 32,
      duration: 0.5,
      stagger: 0.09,
      ease: "power2.out"
    });
  }

  if (ScrollTrigger) {
    gsap.to(".hero-video", {
      yPercent: 4,
      ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 0.7 }
    });
  }

  gsap.to(".class-ground-glow", {
    opacity: 0.74,
    filter: "blur(7px)",
    duration: 1.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".class-ring", {
    rotate: 360,
    duration: 18,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".magic-core", {
    rotate: 360,
    duration: 16,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".test-character", {
    y: (index) => [-8, 6, -5, 7, -6][index] || -6,
    x: (index) => [5, -4, 3, -5, 4][index] || 3,
    duration: (index) => 2.6 + index * 0.18,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.12
  });

  gsap.to(".speech-bubble", {
    y: (index) => [-5, 4, -4, 5][index] || 4,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.18
  });

  const featuredItem = document.querySelector(".featured-item");
  if (featuredItem && !featuredItem.querySelector(".motion-scan-line")) {
    const scanLine = document.createElement("span");
    scanLine.className = "motion-scan-line";
    scanLine.setAttribute("aria-hidden", "true");
    featuredItem.appendChild(scanLine);
  }

  gsap.to(".item-aura", {
    scale: 1.24,
    opacity: 0.58,
    duration: 1.25,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".featured-item .motion-scan-line", {
    xPercent: 520,
    opacity: 0.9,
    duration: 1.35,
    repeat: -1,
    repeatDelay: 2.1,
    ease: "power2.inOut"
  });

  document.querySelectorAll(".yokai-card, .hot-row, .featured-item").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -6, scale: 1.015, duration: 0.24, ease: "power2.out", overwrite: "auto" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.28, ease: "power2.out", overwrite: "auto" });
    });
  });

  document.querySelectorAll(".button-primary, .item-detail-link, .hero-status a").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.035, duration: 0.2, ease: "power2.out", overwrite: "auto" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.24, ease: "power2.out", overwrite: "auto" });
    });
  });
}
