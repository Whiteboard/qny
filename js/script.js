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

	$('.box').addClass('.visible');
});

4('.close')on('click',function(event){
	event.preventDefault();
	$('.box').removeClass('.visible');
});