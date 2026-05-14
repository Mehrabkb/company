// document.querySelectorAll('.js-social').forEach(btn => {

//   // Desktop hover
//   btn.addEventListener('mouseenter', () => {
//     closeAllSocials();
//     btn.classList.add('is-open');
//   });

//   btn.addEventListener('mouseleave', () => {
//     btn.classList.remove('is-open');
//   });

//   // Mobile tap
//   btn.addEventListener('click', (e) => {
//     if (window.innerWidth <= 991) {
//       e.preventDefault();
//       if (!btn.classList.contains('is-open')) {
//         closeAllSocials();
//       }
//       btn.classList.toggle('is-open');
//     }
//   });

// });

// // تابع بستن همه دکمه‌ها
// function closeAllSocials() {
//   document.querySelectorAll('.js-social.is-open').forEach(openBtn => {
//     openBtn.classList.remove('is-open');
//   });
// }



$(function () {

  /* ── Scroll reveal ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        $(e.target).delay(i * 80).queue(function (next) {
          $(this).addClass('visible'); next();
        });
      }
    });
  }, { threshold: 0.12 });

  $('.reveal').each(function () { observer.observe(this); });

  /* ── Smooth scroll for all anchor links ── */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 600, 'swing');
      $('.navbar-collapse').collapse('hide');
    }
  });

  /* ── Navbar active state on scroll ── */
  $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop();
    $('section[id]').each(function () {
      const top = $(this).offset().top - 120;
      const bot = top + $(this).outerHeight();
      const id = $(this).attr('id');
      if (scrollY >= top && scrollY < bot) {
        $('.nav-link').removeClass('active').css('color', '');
        $(`.nav-link[href="#${id}"]`).addClass('active').css('color', 'var(--accent)');
      }
    });
  });

  /* ── Contact form submit (demo) ── */
  $('button.btn-primary-custom').on('click', function () {
    const btn = $(this);
    btn.html('<i class="bi bi-check-circle-fill me-1"></i> پیام ارسال شد!').css('opacity', '.7');
    setTimeout(() => btn.html('ارسال پیام <i class="bi bi-send-fill me-1"></i>').css('opacity', '1'), 3000);
  });

});