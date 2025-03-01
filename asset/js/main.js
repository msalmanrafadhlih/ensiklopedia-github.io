// Memunculkan toggle menu saat layar kecil
$(document).ready(function () {
  $("#check").click(function () {
    $("ul").toggleClass("show");
  });
});

// Nav ganti warna saat di scroll
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 550);
});

$(".client").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
