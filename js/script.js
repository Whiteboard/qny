/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

$('#mobile').click(function (event) {
	if($('.mobile').hasClass('.active'))
	   $('.mobile').removeClass('.active');
	else($('.mobile')).addClass('.active');
});


/*Details Interaction*/
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
  });




/*Speaker Bios*/
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


