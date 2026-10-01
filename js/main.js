(function () {
  // Шапка: меняет вид после прокрутки
  var switchable = document.querySelectorAll("[data-top]");
  var scrolled = null;
  function swap(el, from, to) {
    from.split(" ").forEach(function (c) {
      if (c) el.classList.remove(c);
    });
    to.split(" ").forEach(function (c) {
      if (c) el.classList.add(c);
    });
  }
  function onScroll() {
    var s = window.scrollY > 20;
    if (s === scrolled) return;
    scrolled = s;
    switchable.forEach(function (el) {
      swap(el, s ? el.dataset.top : el.dataset.scrolled, s ? el.dataset.scrolled : el.dataset.top);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Мобильное меню
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector('[data-icon="open"]').classList.toggle("hidden", open);
    toggle.querySelector('[data-icon="close"]').classList.toggle("hidden", !open);
  }
  toggle.addEventListener("click", function () {
    setMenu(menu.hidden);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Появление блоков; соседние блоки — с небольшой задержкой друг за другом
  var items = document.querySelectorAll("[data-reveal]");
  items.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) {
      return c.hasAttribute("data-reveal");
    });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.setProperty("--rd", Math.min(i, 6) * 0.1 + "s");
  });
  // первый экран анимируется сразу при загрузке, как в оригинале
  var hero = document.querySelector("main > section");
  if (hero)
    hero.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    });
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Лайтбокс документов
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector("p");
  function openLb(card) {
    var img = card.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    lb.hidden = false;
  }
  function closeLb() {
    lb.hidden = true;
  }
  document.querySelectorAll("[data-lightbox]").forEach(function (card) {
    card.addEventListener("click", function () {
      openLb(card);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLb(card);
      }
    });
  });
  lb.addEventListener("click", closeLb);
  lb.querySelector(".lb-inner").addEventListener("click", function (e) {
    e.stopPropagation();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLb();
  });
})();
