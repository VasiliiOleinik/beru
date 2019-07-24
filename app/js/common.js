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
    // Акционная карусель
    $(".action-detail__products-carousel.owl-carousel").owlCarousel({
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
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });

  // Селекты
  $(".product-count").on("click", function() {
    $(this)
      .find(".product-choose-count-list")
      .slideToggle();
  });
  $(".product-list-item").on("click", function() {
    var thisText = $(this).text();
    $(this)
      .parent(".product-choose-count-list")
      .siblings(".product-choose-count-choosen")
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
    $(".mobile-menu .hamburger").toggleClass('is-active');
  });

  // Блокирую хлебную крошку на текущей странице
    $('.breadcrumb-item.current').find('.breadcrumb-link').attr('href', 'javascript:void(0)');

  $('.partners-content__tabs .partners-tab').on('click', function(){
    $('.partners-content__tabs .partners-tab').removeClass('active');
    $(this).addClass('active');
  });

});
