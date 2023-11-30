$(function () {
  $(window).scroll(function () {
    let windowWidth = $(window).width();
    if (windowWidth > 800) {
      let scroll = $(window).scrollTop();

      $(".contenedor-descripcion").css({
        transform: "translate(0px," + scroll / 2 + "%)",
      });

      $(".seccion-acerca-de__article").css({
        transform: "translate(0px, -" + scroll / 6 + "%)",
      });
    }
  });

  $(window).resize(function () {
    let windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".contenedor-descripcion").css({
        transform: "translate(0px, 0px)",
      });

      $(".seccion-acerca-de__article").css({
        transform: "translate(0px, 0px)",
      });
    }
  });
});
