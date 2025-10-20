$(document).ready(function () {
  // ==========================
  //  AOS Init
  // ==========================
  AOS.init({
    duration: 700,
    offset: 120
  });

  // ==========================
  //  Typed.js Typing Effect
  // ==========================
  if ($('.typing').length) {
    new Typed('.typing', {
      strings: ['Fullstack Developer', 'Beginner Mobile Developer', 'Amature Photographer', 'Problem Solver', 'API Development', 'Laravel Expertise'],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1600,
      loop: true,
    });
  }

  // ==========================
  //  Canvas Particle Trail
  // ==========================
  const canvas = document.getElementById('mouseCanvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = $(window).width();
  let h = canvas.height = $(window).height();
  let particles = [];

  $(window).on('resize', function () {
    w = canvas.width = $(window).width();
    h = canvas.height = $(window).height();
  });

  $(window).on('mousemove', function (e) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      r: 4 + Math.random() * 3,
      a: 1,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -0.6 - Math.random() * 0.6
    });
    if (particles.length > 120) particles.shift();
  });

  function render() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = `rgba(0,120,255,${p.a.toFixed(2)})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.a -= 0.015;
    }
    particles = particles.filter(p => p.a > 0.02);
    requestAnimationFrame(render);
  }
  render();

  // ==========================
  //  Dark Mode Toggle
  // ==========================
  const $toggle = $('#darkToggle');

  function setDark(val) {
    if (val) $('html').addClass('dark');
    else $('html').removeClass('dark');
    localStorage.setItem('prefDark', val ? '1' : '0');
  }

  $toggle.on('click', function () {
    const isDark = $('html').hasClass('dark');
    setDark(!isDark);
  });

  if (localStorage.getItem('prefDark') === '1') setDark(true);

  // ==========================
  //  Contact Form Demo
  // ==========================
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const name = $(this).find('[name="name"]').val() || 'friend';
    alert('Thank you, ' + name + '! This demo does not actually send messages. Replace with Formspree or EmailJS.');
    this.reset();
  });

});



