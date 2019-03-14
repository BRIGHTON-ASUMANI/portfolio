


(function ($) {
    'use strict';

    jQuery(document).ready(function () {


       /* Preloader */

        $(window).load(function () {
            $('.preloader').delay(800).fadeOut('slow');
        });



       /* Scroll To Top */

        $(window).scroll(function(){
        if ($(this).scrollTop() >= 700) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });


        $('.scroll-to-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
         });



        /* Ajaxchimp for skills Form */

        $('#mc-form').ajaxChimp();



        /* Detail Box ( Slider by Owl Carousel ) */

        $(".detail-box").owlCarousel({
            items: 1,
            autoPlay: false,
            stopOnHover: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight : true,
            pagination: false,
            transitionStyle : "fadeUp"
        });


        /* Owl Carousel Navigation */

        $(document).ready(function() {
          var owl = $("#detail-box-carousel");
          owl.owlCarousel();
            $(".next").click(function(){
            owl.trigger('owl.next');
        })
            $(".prev").click(function(){
            owl.trigger('owl.prev');
        })
        });


        });

   })(jQuery);


  
