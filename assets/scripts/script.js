document.querySelectorAll('.js-social').forEach(btn => {

  // Desktop hover
  btn.addEventListener('mouseenter', () => {
    closeAllSocials();
    btn.classList.add('is-open');
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('is-open');
  });

  // Mobile tap
  btn.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      if (!btn.classList.contains('is-open')) {
        closeAllSocials();
      }
      btn.classList.toggle('is-open');
    }
  });

});

// تابع بستن همه دکمه‌ها
function closeAllSocials() {
  document.querySelectorAll('.js-social.is-open').forEach(openBtn => {
    openBtn.classList.remove('is-open');
  });
}

$(document).ready(function() {
  $('#page').verticalScroll({
    // options here
  });
}); 