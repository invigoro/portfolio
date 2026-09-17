/* Progressive enhancement only — every page works with this file blocked. */
(function () {
  'use strict';

  /* ---------------------------------------------------------- nav menu -- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------- dark toggle -- */
  var themeButton = document.querySelector('.theme-toggle');

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = document.documentElement.dataset.theme || (prefersDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';

      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  /* --------------------------------------------------- project filters -- */
  var filterBar = document.querySelector('[data-filters]');
  var stripes = Array.prototype.slice.call(document.querySelectorAll('.stripe[data-tags]'));

  /* The alternating background and the flipped column only line up if the
     pattern is recounted over the rows that are actually visible. */
  function restripe() {
    var visible = stripes.filter(function (row) {
      return !row.classList.contains('is-hidden');
    });
    visible.forEach(function (row, i) {
      row.classList.toggle('is-alt', i % 2 === 1);
    });

    var empty = document.querySelector('[data-empty]');
    if (empty) empty.classList.toggle('is-hidden', visible.length > 0);
  }

  function applyFilter(key) {
    stripes.forEach(function (row) {
      var tags = (row.dataset.tags || '').split(' ');
      row.classList.toggle('is-hidden', key !== 'all' && tags.indexOf(key) === -1);
    });

    filterBar.querySelectorAll('[data-filter]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === key));
    });

    restripe();
  }

  if (filterBar && stripes.length) {
    filterBar.addEventListener('click', function (e) {
      var button = e.target.closest('[data-filter]');
      if (!button) return;

      var key = button.dataset.filter;
      applyFilter(key);

      var url = key === 'all' ? location.pathname : location.pathname + '?filter=' + key;
      history.replaceState(null, '', url);
    });

    var requested = new URLSearchParams(location.search).get('filter');
    if (requested && filterBar.querySelector('[data-filter="' + CSS.escape(requested) + '"]')) {
      applyFilter(requested);
    }
  }

  /* -------------------------------------------------- lazy loop videos -- */
  /* Clips marked data-autoplay hold preload="none" until they scroll into
     view, so nothing downloads a video the visitor never reaches. */
  var loops = document.querySelectorAll('video[data-autoplay]');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (loops.length && !still && 'IntersectionObserver' in window) {
    var watcher = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(function () {});
          } else if (!video.paused) {
            video.pause();
          }
        });
      },
      { rootMargin: '150px 0px', threshold: 0.25 }
    );

    loops.forEach(function (video) {
      watcher.observe(video);
    });
  }
})();
