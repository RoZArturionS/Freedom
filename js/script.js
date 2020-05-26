$(document).ready(function() {
 $('.header_burger').click(function(event) {
 	 $('.header_burger,.header_menu').toggleClass('active');
 	 $('body').toggleClass('lock');
 })
});
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
	$('.slidera,.slidersa').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});