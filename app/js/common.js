$(function() {

	// Custom JS
  // hover dropdown
  $('.js-dropdown')
  .mouseover(function() {
    $( this ).parent().find( '.nav-dropdown__content' ).show(300)
  })
  .mouseleave(function() {
    $('.nav-dropdown__content').hide(100)
  });


  // navbar hamburger

    $('.nav__item--mobile').click(function() {
      $( this ).addClass('theme__bg--accent');
      $( this ).removeClass('theme__bg--black');
  });

    $('.hamburger').click(function() {
	  	$('.js-navbar').toggleClass('nav-show');
	});



});
