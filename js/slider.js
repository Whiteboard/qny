function slider() {
    var sliderTime = 7000;
    $('.slider').each(function(i,e){
        var sliderTimer = setInterval(function(){
            var l = $(e).find(".slide.last");
            var c = $(e).find(".slide.current");
            c.next('.slide').length && c.removeClass("current").addClass("last").next('.slide').addClass("current") || $(e).find(".slide.current").removeClass("current").addClass("last") && $(e).find(".slide").eq(0).addClass("current");
            l.removeClass("last");
        }, sliderTime);
        $(e).find('.slider-prev').on('click',function(event){
            event.preventDefault();
            var c = $(e).find(".slide.current");
            clearInterval(sliderTimer);
            c.prev('.slide').length && c.removeClass("current").addClass("last").prev('.slide').addClass("current") || $(e).find(".slide.current").removeClass("current").addClass("last") && $(e).find(".slide").last().addClass("current");
            sliderTimer;
        });
        $(e).find('.slider-next').on('click',function(event){
            event.preventDefault();
            var c = $(e).find(".slide.current");
            clearInterval(sliderTimer);
            c.next('.slide').length && c.removeClass("current").addClass("last").next('.slide').addClass("current") || $(e).find(".slide.current").removeClass("current").addClass("last") && $(e).find(".slide").eq(0).addClass("current");
            sliderTimer;
        });
    });
