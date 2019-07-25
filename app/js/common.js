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
    //
    $(".action-detail__products-carousel.owl-carousel, .detail-product__list.owl-carousel").owlCarousel({
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

    // Карусель превьюшек
    $(".detail-product-galelry-carousel.owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      margin: 15,
      responsive: {
        0: {
          items: 2
        },
        450: {
          items: 3
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });

    // Карусель на главной с категориями
    $(".catalog-slider.owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      margin: 15,
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 2
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

  // Сортировки
  $(".choose-sort").on("click", function() {
    $(this)
      .find(".choose-sort-list")
      .slideToggle();
  });
  $(".choose-sort-list-item").on("click", function() {
    var thisText = $(this).text();
    $(this)
      .parent(".choose-sort-list")
      .siblings(".choose-sort-choosen")
      .text(thisText);
  });
  $(".show-choose").on("click", function() {
    $(this)
      .find(".show-choose-list")
      .slideToggle();
  });
  $(".show-choose-list-item").on("click", function() {
    var thisText = $(this).text();
    $(this)
      .parent(".show-choose-list")
      .siblings(".show-choose-schoosen")
      .text(thisText);
  });

  // Переключение видов

  $('.tile-view').on('click', function(){
    $('.list-view').removeClass('active');
    $(this).addClass('active');
  });
  $('.list-view').on('click', function(){
    $('.tile-view').removeClass('active');
    $(this).addClass('active');
  });


  // Галерея
    $('.detail-product-galelry-carousel img').each(function(i, img){
      var mainImg = $('.detail-product-galelry-main-image img');

      $(img).on('click', function(){
          mainImg.attr('src', $(this).attr('src'));
      });
    });

  // Выпадающее меню
    $('.catalog-list-item').each(function(i, elem){
      $(elem).hover(function(){
        $(this).find('.catalog-sub-list').slideDown();
      }, function(){
        $(this).find('.catalog-sub-list').slideUp();
      });
    });



  // Крошка
  var breadWidth = $('.breadcrumb-item');
  breadWidth.each(function(i, elem){
    if($(elem).width() > 300){
      $(this).css({ 'white-space':'nowrap',});
      $(this).find('.breadcrumb-link').css({'max-width':'300px', 'overflow':'hidden'});
      $(this).append('<span style="color:#fff", padding-left: 5px" class="dots">...</span>');

      if(screen.width < 767){
        if($(elem).width() >= 150){
          $(this).find('.breadcrumb-link').css({'max-width':'150px', 'overflow':'hidden'});
        }
      }
      if(screen.width < 550){
        if($(elem).width() >=100){
          $(this).find('.breadcrumb-link').css({'max-width':'100px', 'overflow':'hidden'});
        }
      }
    }
  });

});
