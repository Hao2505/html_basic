$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(this).closest("header").find(".header-menu").toggleClass("active");
  });

  $(".menu-back a").click(function () {
    $(this).closest(".menu-item-child").find("ul").removeClass("active");
  });

  $(".menu-item .menu-item-child .title").click(function () {
    $(this).closest(".menu-item-child").find("ul").addClass("active");
  });
});
