/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

//mobile menu
$('#mobile').click(function (event) {
	if($('.mobile').hasClass('.active'))
	   $('.mobile').removeClass('.active');
	else($('.mobile')).addClass('.active');
});


//Desktop event details interaction
   	var detail = $(".detail"),
        circle = $(".circle");
    
    //Event trigger
    triggers.on("click", ".circle", function(e){
        var i = $(this).addClass("open").index();
        $(this).siblings().removeClass("open");
        detail.find(".detail").eq(i).addClass("open").siblings().removeClass("open");
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


