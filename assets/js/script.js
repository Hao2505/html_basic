$(".slider-home .slider").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  responsive: {
    450: {
      stagePadding: 50,
    },
    991: {
      stagePadding: 200,
      items: 1,
    },
  },
});

$(".section-slider-with-dots-image .slider-bottom").owlCarousel({
  items: 1,
  loop: false,
  autoplay: true,
  autoplayHoverPause: true,
  margin: 0,
});

$(".warp-slider .slider-product-quick-view").owlCarousel({
  items: 1,
  loop: false,
  autoplay: true,
  autoplayHoverPause: true,
  margin: 0,
});

$(".warp-slider .list-dots-image-slider img").click(function () {
  $(this)
    .closest(".warp-slider")
    .find(".owl-carousel")
    .trigger("to.owl.carousel", $(this).index());
});

if ($(".control-slider .control-slider-left").length > 0) {
  $(".control-slider .control-slider-left").click(function () {
    $(this)
      .closest(".wrapper-slider")
      .find(".owl-carousel")
      .trigger("prev.owl.carousel");
  });
}

if ($(".control-slider .control-slider-right")) {
  $(".control-slider .control-slider-right").click(function () {
    $(this)
      .closest(".wrapper-slider")
      .find(".owl-carousel")
      .trigger("next.owl.carousel");
  });
}

if ($(".list-dots-image-slider img").length > 0) {
  $(".list-dots-image-slider img").click(function () {
    $(this)
      .closest(".warp-slider-bottom")
      .find(".owl-carousel")
      .trigger("to.owl.carousel", $(this).index());
  });

  var scorll = 0;

  $(".section-slider-with-dots-image .slider-bottom").on(
    "changed.owl.carousel",
    function (e) {
      $(".list-dots-image-slider img").removeClass("active");
      $(".list-dots-image-slider img").eq(e.page.index).addClass("active");

      scorll =
        e.page.index * 100 -
        ($(this)
          .closest(".warp-slider-bottom")
          .find(".list-dots-image-slider")[0].offsetWidth /
          2 -
          $(this)
            .closest(".warp-slider-bottom")
            .find(".list-dots-image-slider img")[0].offsetWidth /
            2);

      $(this)
        .closest(".warp-slider-bottom")
        .find(".list-dots-image-slider")[0]
        .scroll({
          top: 0,
          left: scorll,
          behavior: "smooth",
        });
    }
  );
}

$(".product-item .image button").click(function (e) {
  e.preventDefault();
  $(
    ".modal-quick-view-product[product-id='" + $(this).attr("product-id") + "']"
  ).show();
});

$(".modal-quick-view-product .close-modal").click(function () {
  $(this).closest(".modal-quick-view-product").hide();
});

$(".action-forgot-password").click(function () {
  $(this).closest(".form-login").find(".frm-login").toggle();
  $(this).closest(".form-login").find(".frm-reset").toggle();
});

if (window.innerWidth > 991) {
  VanillaTilt.init(
    document.querySelectorAll(
      ".box-button a, .tts-btn-primary, .list-dots-image-slider img, .product-item img"
    ),
    {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    }
  );
}

AOS.init();
