$(function () {
  //Efecto Menu
  $(".menu__a").each(function (index, element) {
    $(this).css({
      top: "-200px",
    });

    $(this).animate(
      {
        top: "0px",
      },
      2000 + index * 500
    );
  });

  //Efecto Header
  if ($(window).width() > "800") {
    $(".contenedor-descripcion").css({
      opacity: 0,
      marginTop: 0,
    });

    $(".contenedor-descripcion").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }

  //Scroll Elementos Menu

  const seccionAcercaDe = $("#seccion-acerca-de").offset().top,
    seccionMenu = $(".seccion-menu__contenedor").offset().top,
    seccionGaleria = $("#seccion-galeria").offset().top,
    seccionUbicacion = $("#seccion-ubicacion").offset().top;

  $("#btn-acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: seccionAcercaDe,
      },
      500
    );
  });

  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: seccionMenu,
      },
      500
    );
  });

  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: seccionGaleria,
      },
      500
    );
  });

  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: seccionUbicacion,
      },
      500
    );
  });
});
