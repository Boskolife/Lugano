initBurger();
updateYear();
initHeaderScroll();

function initBurger() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.header_nav');
  const header = document.querySelector('.header');

  burger.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    burger.classList.toggle('active');
    header.classList.toggle('active');
    burger.setAttribute('aria-expanded', isActive.toString());
  });
}

function updateYear() {
  const year = document.querySelector('.footer_links_item_year');
  year.textContent = new Date().getFullYear();
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  const menu = document.querySelector('.header_nav');
  const burger = document.querySelector('.header_burger');
  let lastScrollTop = 0;
  const scrollThreshold = 10;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      header.classList.add('header_hidden');
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
      }
    } else if (scrollTop < lastScrollTop) {
      header.classList.remove('header_hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}
