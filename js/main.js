$(function() {

    // H1 appendTo Mobile
    function mainTitle(){
        if($(window).width() < 767){
            $('#mainTitle').appendTo('#wrapper-mainTitle-mobile');
        } else {
            $('#mainTitle').appendTo('#wrapper-mainTitle-desktop');
        }
    }

    $(window).on('load resize orientationchange',mainTitle);    
    
    /* Silder */
    var nextH;
    $('.productSlider').on('slide.bs.carousel', function (e) {
        nextH = $(e.relatedTarget).height();
        $('.carousel-inner').animate({ height: nextH }, 500);
        setTimeout(function(){
            $('.carousel-inner').height('');
        }, 1000);
    });

    var currentH;
    $(window).on('resize', function(){
        currentH = $('.productSlider .carousel-item.active').height();
        $('.productSlider .carousel-inner').height(currentH);
        setTimeout(function(){
            $('.productSlider .carousel-inner').height('');
        }, 1000);
    });

    // Footer
    $(".btn-see-more").click(function() {
        var text = $(this).text();
        $(this).text(text == "Ver más" ? "Ver menos" : "Ver más");

        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      })

    /* Same height for slider */
    function normalizeSlideHeights() {
        $('.heroSlider').each(function () {
            var items = $('.heroSlider .carousel-item');
            var cards = $('.heroSlider .carousel-item .card');
            var formWrapper = $('.form-wrapper');
            // reset the height
            items.css('min-height', 0);
            cards.css('min-height', 0);
            // set the height
            var maxHeight = formWrapper.outerHeight();
            var maxHeightItems = Math.max.apply(null, items.map(function(){return $(this).outerHeight()}).get() );
            if($(window).width() > 767){
                items.css('min-height', maxHeight + 'px');          
                cards.css('min-height', maxHeight + 'px');
            } else {
                items.css('min-height', maxHeightItems + 'px');
                cards.css('min-height', maxHeightItems + 'px');
            }
        })
      }
      
      $(window).on('load resize orientationchange',normalizeSlideHeights);
        
});
