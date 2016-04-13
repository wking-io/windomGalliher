$(document).ready(function($){
  //variables
  var anchorAbout       = $('#about').offset().top - 1,
      anchorPurpose  = $('#purpose').offset().top - 1,
      anchorTeam  = $('#team').offset().top - 1,
      anchorNewsletter   = $('#newsletter').offset().top - 1,
      anchorLinks     = $('#links').offset().top - 1,
      anchorContact     = $('#contact').offset().top - 1;

  //nav background change on scroll
   $(window).scroll(function() {
    //underline on current page
    if ($(document).scrollTop() >= anchorPurpose && $(document).scrollTop() < anchorAbout) {
      $("#border-purpose").css('border-bottom', '3px solid #FFFFFF');
      $("#border-about, #border-team, #border-links, #border-newsletter, #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#212121');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#FFFFFF');
    } else if($(document).scrollTop() >= anchorAbout && $(document).scrollTop() < anchorTeam) {
      $("#border-about").css('border-bottom', '3px solid #212121');
      $("#border-purpose, #border-team, #border-newsletter, #border-links, #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#F2F2F2');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#212121');
    } else if($(document).scrollTop() >= anchorTeam && $(document).scrollTop() < anchorNewsletter) {
      $("#border-team").css('border-bottom', '3px solid #212121');
      $("#border-about, #border-purpose, #border-links, #border-newsletter, #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#FFFFFF');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#212121');
    } else if($(document).scrollTop() >= anchorNewsletter && $(document).scrollTop() < anchorLinks) {
      $("#border-newsletter").css('border-bottom', '3px solid #FFFFFF');
      $("#border-about, #border-purpose, #border-links, #border-team, #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#212121');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#FFFFFF');
    } else if($(document).scrollTop() >= anchorLinks && $(document).scrollTop() < anchorContact) {
      $("#border-links").css('border-bottom', '3px solid #212121');
      $("#border-about, #border-purpose, #border-team, #border-newsletter, #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#FFFFFF');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#212121');
    } else if($(document).scrollTop() >= anchorContact) {
      $("#border-contact").css('border-bottom', '3px solid #212121');
      $("#border-about, #border-purpose, #border-team, #border-links, #border-newsletter").css('border-bottom', 'none');
      $("#nav-bar").css('background', '#F2F2F2');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#212121');
    } else {
      $("#border-about, #border-purpose, #border-team, #border-newsletter, #border-links #border-contact").css('border-bottom', 'none');
      $("#nav-bar").css('background', 'transparent');
      $(".nav__title-text, #nav-about, #nav-purpose, #nav-team, #nav-links, #nav-newsletter, #nav-contact").css('color', '#FFFFFF');
    }
    //end underline
  });
  //end nav background change on scroll
  // Bio function
  $('#steve').click(function(){
    $(this).addClass('active');
    $('#steveBio').css('display', 'block');
    $('#blaine, #ragan, #andre, #sharon').removeClass('active');
    $('#blaineBio, #raganBio, #andreBio, #sharonBio').css('display', 'none');
  });
  $('#blaine').click(function(){
    $(this).addClass('active');
    $('#blaineBio').css('display', 'block');
    $('#steve, #ragan, #andre, #sharon').removeClass('active');
    $('#steveBio, #raganBio, #andreBio, #sharonBio').css('display', 'none');
  });
  $('#ragan').click(function(){
    $(this).addClass('active');
    $('#raganBio').css('display', 'block');
    $('#blaine, #steve, #andre, #sharon').removeClass('active');
    $('#blaineBio, #steveBio, #andreBio, #sharonBio').css('display', 'none');
  });
  $('#andre').click(function(){
    $(this).addClass('active');
    $('#andreBio').css('display', 'block');
    $('#blaine, #ragan, #steve, #sharon').removeClass('active');
    $('#blaineBio, #raganBio, #steveBio, #sharonBio').css('display', 'none');
  });
  $('#sharon').click(function(){
    $(this).addClass('active');
    $('#sharonBio').css('display', 'block');
    $('#blaine, #ragan, #andre, #steve').removeClass('active');
    $('#blaineBio, #raganBio, #andreBio, #steveBio').css('display', 'none');
  });
  //hamburger toggle
  $('.nav__icon').click(function(){
    $(this).toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end hamburger toggle

  //menu close on link click
  $('#mobile-about, #mobile-purpose, #mobile-team, #mobile-links, #mobile-newsletter, #mobile-contact').click(function(){
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
