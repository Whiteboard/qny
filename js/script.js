/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

$('.more').on('click',function(event){
	event.preventDefault();
	var desc = $(this).attr('data-description');
	//var speaker = $(this).attr('data-title');

	$('.box').find('.description').html(desc);

	$('.box-wrap').addClass('visible');
});

$('.close').click(function (event) {
    if ($('.box-wrap').hasClass('visible'))
        $('.box-wrap').removeClass("visible");
   event.stopPropagation();
});

$('.box-wrap').click(function (event) {
	if ($('.box-wrap').hasClass('visible'))
		$('.box-wrap').removeClass("visible");
	event.stopPropagation();
});