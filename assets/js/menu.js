// Header: each caret toggles the sub-pages of the item next to it (hover already opens them on desktop).
// Autoplaying videos stay as stills for people who asked for reduced motion.
(function () {
  var menus = document.querySelectorAll('.menu');
  function close(menu) {
    menu.classList.remove('open');
    var c = menu.querySelector('.caret'); if (c) c.setAttribute('aria-expanded', 'false');
  }
  menus.forEach(function (menu) {
    var caret = menu.querySelector('.caret');
    if (!caret) return;
    caret.addEventListener('click', function (e) {
      e.stopPropagation();
      menus.forEach(function (m) { if (m !== menu) close(m); });
      var open = menu.classList.toggle('open');
      caret.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    menus.forEach(function (m) { if (!m.contains(e.target)) close(m); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') menus.forEach(close);
  });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video.auto').forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
  }
})();
