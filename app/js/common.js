$(document).ready(function() {
  // Главная карусель
  $(".owl-carousel.main-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Карусель товаров
  $(".right-tabs-block__content.owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    margin: 5,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // Селекты
  $(".item-choose-count").on("click", function() {
    $(this)
      .find(".item-choose-count-list")
      .slideToggle();
  });
  $(".count-list-item").on("click", function() {
    var thisText = $(this).text();
    $(this)
      .parent(".item-choose-count-list")
      .siblings(".item-choose-count-choosen")
      .text(thisText);
  });

  // Табы
  if (screen.width > 768) {
    $(".right-tabs-block__menu .tab").on("click", function() {
      $(".right-tabs-block__menu .tab").removeClass("active");
      $(this).addClass("active");
    });
    $("#tabs").tabs();
  }
  $("#partners").tabs();

  // Мобильна версия
  if (screen.width < 1025) {
    var logo = $(
      ".main__left-content .left-content-container .left-containe-logo"
    );
    $(".header__body").prepend(logo);
  }

  var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener(
        "click",
        function() {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }

  $(".mobile-menu").on("click", function() {
    $("#menu").toggleClass("visible");
    if ($("#menu").hasClass("visible")) {
      $("#menu").css({ left: 0, transition: ".4s ease-in-out" });
      $(".content-wrapper").css({
        "padding-left": "235px",
        transition: ".4s ease-in-out"
      });
      $(".menu-overlay").show();
    } else {
      $("#menu").css({ left: -270, transition: ".4s ease-in-out" });
      $(".content-wrapper").css({
        "padding-left": "0",
        transition: ".4s ease-in-out"
      });
      $(".menu-overlay").hide();
    }
  });

  $(".menu-overlay").on("click", function() {
    $(".mobile-menu").click();
    $(".mobile-menu .hamburger").toggleClass("is-active");
  });

  // Блокирую хлебную крошку на текущей странице
  $(".breadcrumb-item.current")
    .find(".breadcrumb-link")
    .attr("href", "javascript:void(0)");

  $(".partners-content__tabs .partners-tab").on("click", function() {
    $(".partners-content__tabs .partners-tab").removeClass("active");
    $(this).addClass("active");
  });

  // Скрываю label когда input активен
  $(" .label .input").on("click", function() {
    $(this)
      .siblings("label").css({'opacity':'0', 'transition':'.2s ease-in-out'});
  });
  $(".label .input").on("blur", function() {
    if ($(this).val().length == "") {
      $(this)
        .siblings("label").css({'opacity':'1', 'transition':'.2s ease-in-out'});
    }
  });
});
