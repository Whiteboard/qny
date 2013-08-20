/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

//mobile menu
$('.nav-button').click(function (event) {
	if($('#nav-mobile').hasClass('active'))
	   $('#nav-mobile').removeClass('active');
	else($('#nav-mobile')).addClass('active');
});



//set responsive variable
var responsive_viewport = $(window).width();

// if viewport is larger than 481px
    if (responsive_viewport > 481) {

        //sticky nav
$(window).on("scroll", function(){
    var windowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (windowScroll > (windowHeight - 630)) {
        $("#nav, #nav-mobile").addClass('sticky');
    } else {
        $("#nav, #nav-mobile").removeClass('sticky');
    }
});

//scrollTo animation
$(".navigation div a:not(.out)").on("click", function(e) {
    e.preventDefault();
    var target_id = $(this).attr("href");
    var new_scroll = $(target_id).offset();
    $("body,html").animate({scrollTop: new_scroll.top-"60"+"px"}, 1000);
});

//parallax for background images
    //for hero div
    var topBG = $("#one").css('background-position','center -10px');

    if (topBG.length){
        $(window).on("scroll", function(){
            topBG.css({
                "background-position" : "center "+ ($(window).scrollTop()/15 - 20) + "px"
            });
        });
    }

    //for newyork div
    var bottomBG = $("#newyork").css('background-position','center -20px');

    if (bottomBG.length){
        $(window).on("scroll", function(){
            bottomBG.css({
                "background-position" : "center "+ ($(window).scrollTop()/15 - 220) + "px"
            });
        });
    }


//desktop event details interaction
    $('.circle').click(function (event) {
    if($('.circle').hasClass('open'))
       $('.circle').removeClass('open');
    else($(this)).addClass('open');
});
        
    } //


//review slider
    var delay = 5000,
        tO; // timeout
    
    function startSlider(){
        clearTimeout(tO);
        tO = setTimeout(goToSlide, delay);
    }
    
    function setupControls(){
        
        $(".slidecontrol").on("click", ".slidecontrol", function(e){
            e.preventDefault();
            
            //$(this).addClass("current").siblings().removeClass("current");

            goToSlide(theIndex);
        });
        
    }
    
    function goToSlide(i){
        var allslides = $(".slide"),
            currslide = allslides.filter(".current");        
        if (i){
            var nextslide = currslide.eq(i);

            });
        } else {
            // let's go to the next slide by default
            var nextslideIndex = (function(){
            
                if (currslide.index() == allslides.length -3){
                    // loop the loop the loop the loop
                    return 0;
                } else {
                    return currslide.index()+1;
                }
            
            }());
            var nextslide = allslides.eq(nextslideIndex);
        }
        
        // now, go.
        $(".slide").eq(nextslideIndex).addClass("current").siblings().removeClass("current");
        nextslide.addClass("current").siblings().removeClass("current");

        animateSlides(nextslide);
        startSlider();
    }
    function animateSlides(toslide){

        var strip = $(".slidewrap-inner");
        var dist = $('.slide').width();
        strip.css({
          marginLeft : toslide.index() * - dist + "px"
        });
    }

    // boom boom boom.
    startSlider();


//mobile event details accordion
  //var allPanels = $('.accordion > dd').hide();
//    
  //$('.accordion > dt > a').click(function() {
      //$this = $(this);
      //$target =  $this.parent().next();
//
      //if(!$target.hasClass('active')){
         //allPanels.removeClass('active').slideUp();
         //$target.addClass('active').slideDown();
      //}
//      
    //return false;
  //});



//speaker bios
$('.more').on('click',function(event){
	event.preventDefault();
    var name = $(this).attr('data-name');
	var title = $(this).attr('data-title');
	var topic = $(this).attr('data-topic');
	var desc = $(this).attr('data-description');
	//var speaker = $(this).attr('data-title');

    $('.box').find('.speaker-name').html(name);
	$('.box').find('.speaker-title').html(title);
	$('.box').find('.speaker-topic').html(topic);
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


