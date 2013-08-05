/*
	depends on:
		jQuery

		if($('.circle').hasClass('.open'))
		$('.circle').removeclass('.open');
	else($('circle')).addClass('.open');
*/
(function($,w,undefined){

}(jQuery, window));

//mobile menu
$('.nav-button').click(function (event) {
	if($('#nav-mobile').hasClass('active'))
	   $('#nav-mobile').removeClass('active');
	else($('#nav-mobile')).addClass('active');
});

//sticky nav
$('#nav-static').scrollToFixed();


//Desktop event details interaction
$('.circle').click(function (event) {
	if($('.circle').hasClass('open'))
	   $('.circle').removeClass('open');
	else($(this)).addClass('open');
});



//Mobile event details accordion
    
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



//speaker bios
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


