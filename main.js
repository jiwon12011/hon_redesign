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
