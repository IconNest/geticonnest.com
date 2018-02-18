document.addEventListener('DOMContentLoaded', () => {
  var nav = document.getElementById('main-nav-btn');

  nav.addEventListener('click', function() {
    var menu = document.querySelector('.mobile-navs')
    var svgIcon = document.getElementById('menuSvgIcon')
    var menuOpened = document.querySelector('.mobile-navs.open')

    if (!menuOpened) {
      menu.classList.add('open')
      svgIcon.setAttribute('href', '#close')
    } else {
      menu.classList.remove('open')
      svgIcon.setAttribute('href', '#menu')
    }
  });

  // Modal box load
  var btn = document.getElementById('open-modal');
  if (btn) {
    btn.addEventListener('click', function() {
      $('#product-modal').modal();
    });

    $('#product-modal').on('shown.bs.modal', function () {
      // $('#myInput').focus()
    });
  }
});

