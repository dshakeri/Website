console.log("this is actually pretty cool")

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $title = $(".title")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $title.height());
  });
});
