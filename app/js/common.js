$(document).ready(function() {
  // Главная карусель
  $(".owl-carousel.main-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
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
  $(
    ".action-detail__products-carousel.owl-carousel, .detail-product__list.owl-carousel"
  ).owlCarousel({
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
  $(".main-catalog-item-img.owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
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
        left: "235px",
        transition: ".4s ease-in-out"
      });
      $(".menu-overlay").show();
    } else {
      $("#menu").css({ left: -270, transition: ".4s ease-in-out" });
      $(".content-wrapper").css({
        left: "0",
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

  $(".tile-view").on("click", function() {
    $(".list-view").removeClass("active");
    $(this).addClass("active");
    $(".product").removeClass("list-view");
  });
  $(".list-view").on("click", function() {
    $(".tile-view").removeClass("active");
    $(this).addClass("active");
    $(".product").addClass("list-view");
  });

  // Галерея
  $(".detail-product-galelry-carousel img").each(function(i, img) {
    var mainImg = $(".detail-product-galelry-main-image img");

    $(img).on("click", function() {
      mainImg.attr("src", $(this).attr("src"));
    });
  });

  // Выпадающее меню
  $(".catalog-list-item").each(function(i, elem) {
    $(elem).hover(
      function() {
        $(this)
          .find(".catalog-sub-list")
          .show(100);
      },
      function() {
        $(this)
          .find(".catalog-sub-list")
          .hide(100);
      }
    );
  });

  // Крошка
  // var breadWidth = $('.breadcrumb-item');
  // breadWidth.each(function(i, elem){
  //   if($(elem).width() > 300){
  //     $(this).css({ 'white-space':'nowrap',});
  //     $(this).find('.breadcrumb-link').css({'max-width':'300px', 'overflow':'hidden'});
  //     $(this).append('<span style="color:#fff", padding-left: 5px" class="dots">...</span>');

  //     if(screen.width < 767){
  //       if($(elem).width() >= 150){
  //         $(this).find('.breadcrumb-link').css({'max-width':'150px', 'overflow':'hidden'});
  //       }
  //     }
  //     if(screen.width < 550){
  //       if($(elem).width() >=100){
  //         $(this).find('.breadcrumb-link').css({'max-width':'100px', 'overflow':'hidden'});
  //       }
  //     }
  //   }
  // });

  // Мобильный каталог
  $(".mobile-catalog .title").on("click", function() {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".mobile-catalog-list").slideUp();
    } else {
      $(".mobile-catalog-list").slideDown();
    }
  });

  $(".mobile-catalog-item-img").on("click", function() {
    $(this)
      .parent()
      .siblings(".mobile-catalog-sub-list")
      .slideToggle();
    $(this)
      .parent()
      .parent()
      .toggleClass("active");
    $(this).toggleClass("rotate");
  });

  $('.catalog-item-link').hover(function(){
    $(this).find('img').attr('src',"img/catalog-item-arr-red.png");
  }, function(){
    $(this).find('img').attr('src',"img/catalog-item-arr.png");
  });

  $('.catalog-sub-list-item').hover(function(){
    $(this).parent().siblings('.catalog-item-link').addClass('active');
      $(this).parent().siblings('.catalog-item-link').find('img').attr('src',"img/catalog-item-arr-red.png");
  }, function(){
    $(this).parent().siblings('.catalog-item-link').removeClass('active');
    $(this).parent().siblings('.catalog-item-link').find('img').attr('src',"img/catalog-item-arr.png");
  });

  // Кастомный чекбокс
  $(".styled-checkbox").on("click", function() {
    $(this).toggleClass("checked");

    if ($(this).hasClass("checked")) {
      $(this)
        .find(".checkbox-default")
        .attr("checked", true);
    } else {
      $(this)
        .find(".checkbox-default")
        .attr("checked", false);
    }
  });

  // Динамические label
  $(
    ".contacts-content__form-inputs input, .contacts-content__form-textarea textarea, .right-content-subscription-form input"
  ).on("click", function() {
    $(this)
      .siblings(".dynamic-label")
      .css({
        transition: ".1s ease-in-out",
        top: "-7px",
        "z-index": "5",
        padding: "0px 10px",
        background: "#ffff",
        left: "15px",
        "font-size": "10px",
        "box-shadow": "0px 0px 3px 0px rgba(0,0,0,0.1)"
      });
  });
  $(
    ".contacts-content__form-inputs input, .contacts-content__form-textarea textaream, .right-content-subscription-form input"
  ).on("blur", function() {
    if ($(this).val().length == "") {
      $(this)
      .siblings(".dynamic-label")
        .css({
          transition: ".1s ease-in-out",
          top: "17px",
          "z-index": "1",
          padding: "0px",
          background: "transparent",
          left: "15px",
          "font-size": "15px",
          "box-shadow": "none"
        });
    }
  });

  // Закрытие выпадающих списков
  $(document).mouseup(function(e) {
    // событие клика по веб-документу
    var div = $(".choose-sort, .show-choose"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      div.find("ul").slideUp(); // скрываем его
    }
  });

  // Валидация
  $("#contact_form, #subscription-form").validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
      email: {
        email: true,
        required: true
      },
      name: {
        minlength: 2,
        required: true
      },
      phone: {
        minlength: 10,
        maxlength: 13,
        digits: true,
        required: true
      },
      mess: {
        minlength: 10,
        required: true
      },
      // check: {
      //   required: true
      // }
    },
    messages: {
      name: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина имени - 2 символа"
      },
      email: {
        required: "Поле обязательно для заполнения",
        email: "Введите корректный email"
      },
      phone: {
        required: "Поле обязательно для заполнения",
        digits: "Поле должно содержать только цифры",
        minlength: "Минимальная длина номера 10 цифр",
        maxlength: "Максимальная длина номера 13 цифр"
      },
      mess: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина сообщения 10 символов"
      },
      check: {
        required: "Поле обязательно для заполнения"
      }
    }
  });
  $("#cont-phone").keypress(function(e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
    return false;
    }
    });

    // $('.contacts-img').hover(function(){
    //   $(this).find('img').attr('src','img/phone.gif');
    // }, function() {
    //   $(this).find('img').attr('src','img/phone.png');
    // });

});
