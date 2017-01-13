$(document).ready(function($){
  //hamburger toggle
  $('.nav__icon').click(function(){
    $(this).toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end hamburger toggle

  //menu close on link click
  $('#mobile-about, #mobile-purpose, #mobile-team, #mobile-links, #mobile-newsletter, #mobile-contact, #mobile-home').click(function(){
    $('.nav__icon').toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end menu close
});

//Email Validation
function validateEmail(email){
  var emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(emailTest.test(email)){
    $(".email").addClass("success");
    $(".form__error").css('display', 'none');
    $(".email").removeClass("error");
    return true;
  } else {
    $(".form__error").css('display', 'block');
    $(".email").addClass("error");
    $(".email").removeClass("success");
    return false;
  }
}
