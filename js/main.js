//---visual animation
$(document).ready(function() {
  $('h1, h2, .nav-bar, .email-me, .header, .header-2, .center-float-box-1').addClass('animated fadeInDown');
  $('.social-icons, .quote, .vinyl, .contact-form, .underheader-description, .tags-block, .buy-buttons, .about-me').addClass('animated flipInX');
  $('.label-left, .label-right .inner-label').addClass('animated fadeInLeft');
  $('section, .contact, .triangle, .center-float-box-2').addClass('animated fadeInUp');
  $('.share, .playlist').addClass('animated fadeInUpBig');
});

//$('.vinyl').on('mouseenter', function() {
//	event.preventDefault();
  //$('.vinyl span').css('opacity','0');
  //$('.vinyl p').fadeTo("slow", 0); 
//  $('.vinyl p').animate({opacity: 0},500);

//---vinyl animation
$('.vinyl').on('mouseenter', function (event) {
	$('.vinyl p').animate({opacity: 0},500);
    $('.arrow-img').toggleClass('rotate');
    $('.arrow-img').toggleClass('rotate-reset');
});

$('.vinyl').on('mouseleave', function() {
  $('.vinyl p').animate({opacity: 1},3500);
});

//---sound animation
var audio = new Audio('../audio/click.mp3');
$('a').on('mouseenter', function() {
  audio.play();
});


var audio2 = new Audio('audio/click.mp3');
if( $( "body" ).hasClass( ".home-sound" ) !== true  ){
	$('a').on('mouseenter', function() {
  		audio2.play();
	});
}

//---share-modal-box
$(document).ready(function() {
	$('.share').on('click', function(event){
		event.preventDefault();
		$('.overlay').fadeIn(300,
		 	function(){
				$('.modal-box') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);	
		});
	});
	$('.overlay').on('click', function(){ 
		$('.modal-box')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400); 
				}
			);
	});
});

//---categories box
$(document).ready(function() {
	$('.hamburger').on('click', function(event){
		event.preventDefault();
		$('.overlay').fadeIn(300,
		 	function(){
				$('.categories-box') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
					$('.hamburger')
					.css('display','none');	
		});
	});
	$('.overlay').on('click', function(){ 
		$('.categories-box')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400); 
					$('.hamburger')
					.css('display','block');	
				}
			);
	});
});

//---email sender code
$('form').on('submit', function(e){
	//e.preventDefault();
	alert("Your Message was sent!");
	$('input[type="text"], input[type="email"], textarea').val('');
});


