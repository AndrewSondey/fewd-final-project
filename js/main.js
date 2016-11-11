//visual animation
$(document).ready(function() {
  $('h1, h2, .nav-bar, .email-me, .header, .center-float-box-1').addClass('animated fadeInDown');
  $('.social-icons, .contact-form, #vinyl-video').addClass('animated flipInX');
  $('.label-left, .label-right .inner-label').addClass('animated fadeInLeft');
  $('section, .row-3, .about-me, .contact, .triangle, .center-float-box-2').addClass('animated fadeInUp');
  $('.share, .playlist').addClass('animated fadeInUpBig');
});

//sound animation
var audio = new Audio('audio/click.mp3');
$('a').on('mouseenter', function() {
  audio.play();
});

//share-modal-box
$(document).ready(function() {
	$('.share').on('click', function(event){
		event.preventDefault();
		$('.overlay').fadeIn(300,
		 	function(){
				$('.share-modal-box') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);	
		});
	});
	$('.overlay').on('click', function(){ 
		$('.share-modal-box')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400); 
				}
			);
	});
});

//categories box
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