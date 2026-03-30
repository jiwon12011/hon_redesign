/**
 * 달걀귀신 이스터에그
 * - 5초마다 왼쪽 하단에서 고개를 빼꼼 내밀었다가 숨는다.
 * - .is-peeking 클래스로 CSS transition 제어
 */
(function () {
  const ghost = document.getElementById('eggGhost');
  if (!ghost) return;

  const PEEK_INTERVAL = 5000;  // 5초마다 등장
  const PEEK_DURATION = 2200;  // 2.2초간 노출

  function peek() {
    // 올라옴
    ghost.classList.add('is-peeking');

    // PEEK_DURATION 후 다시 숨음
    setTimeout(function () {
      ghost.classList.remove('is-peeking');
    }, PEEK_DURATION);
  }

  // 페이지 로드 후 1초 뒤 첫 등장, 이후 PEEK_INTERVAL마다 반복
  setTimeout(function () {
    peek();
    setInterval(peek, PEEK_INTERVAL);
  }, 1000);
})();
