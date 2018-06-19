$(document).ready(function() {

	$('.menu_btn').click(function(){
		$(this).toggleClass('menu_btn__opened');
		$('.navigation').slideToggle();
	})
	
});


$('.carousel').carousel({
  interval: 2000,
  pause: 'hover',
  wrap: true
});