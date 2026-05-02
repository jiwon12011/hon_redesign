const jobs = {
  warrior: {
    title: "전사",
    tagline: "강력한 힘과 체력으로 전장을 지배하는 근접 전투의 달인",
    character: "images/redesign_img/character-warrior-sword.png",
    stats: [85, 90, 60, 30]
  },
  assassin: {
    title: "자객",
    tagline: "빠른 움직임과 치명적인 일격으로 적의 빈틈을 파고드는 암살자",
    character: "images/redesign_img/character-assassin-purple.png",
    stats: [94, 42, 55, 96]
  },
  archer: {
    title: "사수",
    tagline: "활과 원거리 공격으로 전장을 넓게 장악하는 정밀 사격 전문가",
    character: "images/redesign_img/character-ranger-bow.png",
    stats: [78, 52, 58, 88]
  },
  fighter: {
    title: "역도",
    tagline: "묵직한 무기와 강한 힘으로 적진을 흔드는 파괴형 근접 전투가",
    character: "images/redesign_img/character-fighter-axe.png",
    stats: [92, 78, 82, 38]
  },
  daoist: {
    title: "도사",
    tagline: "도술과 부적의 힘으로 전투 흐름을 바꾸는 영력 전문가",
    character: "images/redesign_img/character-ascetic-white.png",
    stats: [64, 62, 76, 70]
  }
};

const statLabels = ["공격력", "방어력", "체력", "민첩성"];
const title = document.getElementById("class-title");
const tagline = document.querySelector(".class-tagline");
const statList = document.querySelector(".stat-list");
const classPreview = document.querySelector(".class-preview-img");

function renderStats(stats) {
  statList.innerHTML = stats.map((value, index) => `
    <div class="stat-row">
      <span>${statLabels[index]}</span>
      <div><i style="width:${value}%"></i></div>
      <strong>${value}</strong>
    </div>
  `).join("");
}

document.querySelectorAll(".job-card").forEach((card) => {
  card.addEventListener("click", () => {
    const job = jobs[card.dataset.job];
    if (!job) return;

    document.querySelectorAll(".job-card").forEach((item) => {
      item.classList.remove("character-selected");
      item.setAttribute("aria-selected", "false");
    });

    card.classList.add("character-selected");
    card.setAttribute("aria-selected", "true");
    title.textContent = job.title;
    tagline.textContent = job.tagline;
    classPreview.src = job.character;
    renderStats(job.stats);
  });
});
