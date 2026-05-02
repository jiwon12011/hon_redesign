const jobs = {
  warrior: {
    title: "전사",
    tagline: "강력한 힘과 체력으로 전장을 지배하는 근접 전투의 달인",
    stats: [85, 90, 60, 30]
  },
  assassin: {
    title: "자객",
    tagline: "빠른 움직임과 치명적인 일격으로 적의 빈틈을 파고드는 암살자",
    stats: [94, 42, 55, 96]
  },
  ascetic: {
    title: "선인",
    tagline: "도술과 지혜로 전장의 흐름을 바꾸는 원거리 전투 전문가",
    stats: [72, 58, 70, 82]
  },
  healer: {
    title: "힐러",
    tagline: "회복과 보호의 힘으로 파티의 생존을 책임지는 지원가",
    stats: [48, 64, 88, 74]
  }
};

const statLabels = ["공격력", "방어력", "체력", "민첩성"];
const title = document.getElementById("class-title");
const tagline = document.querySelector(".class-tagline");
const statList = document.querySelector(".stat-list");

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
    renderStats(job.stats);
  });
});
