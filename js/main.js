$(document).ready(function () {
  
  $('#toggle-box-checkbox').on("change", function () {
    if (this.checked) {
      $('#dark-mode').prop("disabled", false);
      localStorage.setItem("darkmode", "on");
    } else {
      $('#dark-mode').prop("disabled", true);
      localStorage.setItem("darkmode", "off");
    }
  });

  var amountScrolled = 300;

  $(".post-listing").scroll(function() {
    if ( $(".post-listing").scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });

  $('a.back-to-top').click(function () {
    $('.post-listing').animate({
      scrollTop: 0
    }, 700);
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

});