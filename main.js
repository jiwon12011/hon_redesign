/**
 * ① 실시간 요괴 퇴치 카운터 애니메이션
 *    IntersectionObserver로 뷰포트 진입 시 숫자 카운트업
 */
(function () {
  var nums = document.querySelectorAll('.ci-num[data-target]');
  if (!nums.length) return;

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCount(el) {
    var target  = parseInt(el.dataset.target, 10);
    var duration = target > 1000000 ? 2800 : target > 1000 ? 2200 : 1600;
    var start   = performance.now();

    function tick(now) {
      var elapsed  = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = easeOutExpo(progress);
      var current  = Math.round(eased * target);

      // 큰 숫자는 콤마 포맷
      el.textContent = current.toLocaleString('ko-KR');

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString('ko-KR');
      }
    }
    requestAnimationFrame(tick);
  }

  // 뷰포트 진입 시 1회 실행
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    nums.forEach(function (el) { observer.observe(el); });
  } else {
    // 폴백: 즉시 실행
    nums.forEach(function (el) { animateCount(el); });
  }
})();

/**
 * 캐릭터 클래스 탭 전환
 */
(function () {
  const tabs   = document.querySelectorAll('.ctab');
  const panels = document.querySelectorAll('.cpanel');

  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.dataset.target;

      // 탭 active 전환
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      // 패널 전환 (stat-bar 재애니메이션을 위해 fill width 리셋)
      panels.forEach(function (p) {
        p.classList.remove('active');
        // stat bar 리셋
        p.querySelectorAll('.cps-fill').forEach(function (fill) {
          fill.style.width = '0';
        });
      });

      const active = document.getElementById('cp-' + target);
      if (!active) return;

      active.classList.add('active');

      // 리플로우 후 width 복원 → CSS transition 실행
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          active.querySelectorAll('.cps-fill').forEach(function (fill) {
            fill.style.width = fill.style.getPropertyValue('--w') || getComputedStyle(fill).getPropertyValue('--w');
          });
        });
      });
    });
  });

  // 초기 active 패널 stat bar 애니메이션 실행
  const firstPanel = document.querySelector('.cpanel.active');
  if (firstPanel) {
    setTimeout(function () {
      firstPanel.querySelectorAll('.cps-fill').forEach(function (fill) {
        fill.style.width = fill.style.getPropertyValue('--w') || getComputedStyle(fill).getPropertyValue('--w');
      });
    }, 300);
  }
})();

/**
 * 요괴 도감 모달
 */
(function () {
  var modal    = document.getElementById('yokaiModal');
  var backdrop = document.getElementById('ymBackdrop');
  var closeBtn = document.getElementById('ymClose');
  if (!modal) return;

  function openModal(item) {
    document.getElementById('ymImg').src      = item.dataset.img || '';
    document.getElementById('ymImg').alt      = item.dataset.nameKo || '';
    document.getElementById('ymNameKo').textContent = item.dataset.nameKo || '';
    document.getElementById('ymNameCn').textContent = item.dataset.nameCn || '';
    document.getElementById('ymDesc').textContent   = item.dataset.desc || '';
    document.getElementById('ymZone').textContent   = item.dataset.zone || '';
    document.getElementById('ymLikes').textContent  = item.dataset.likes || '';
    document.getElementById('ymUser').textContent   = item.dataset.user || '';

    var rankLabel = item.dataset.rankLabel || '';
    var rankClass = item.dataset.rank || 'common';
    var badge = document.getElementById('ymRankBadge');
    badge.textContent  = rankLabel;
    badge.className    = 'ym-rank-badge ' + rankClass;

    modal.classList.add('is-open');
    modal.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // 갤러리 아이템 클릭
  document.querySelectorAll('.gg-item').forEach(function (item) {
    item.addEventListener('click', function () { openModal(item); });
  });

  // 닫기 버튼 / 배경 클릭 / ESC
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
