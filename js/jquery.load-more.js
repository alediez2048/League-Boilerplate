$(document).ready(function () {
    var items =  $('.hiddenItem').size();
    var shown =  3;
    var $portfolioAll = $("#portfolio-all");


    $('a.btn-more').on('click',function (e) {
        e.preventDefault();
        $portfolioAll.imagesLoaded().progress(function() {
                   $portfolioAll.isotope({
                       filter: "*",
                       animationOptions: {
                           duration: 750,
                           itemSelector: ". portfolio-item ",
                           easing: "linear",
                           queue: false,
                       }
                   });
               });
        shown = $('.hiddenItem:visible').size()+3;
        // console.log($('.hiddenItem').size());
        // console.log($('.hiddenItem:visible').size());
        if(shown< items) {$('.hiddenItem:lt('+shown+')').show(300);
        $portfolioAll.imagesLoaded().progress();
        $("#portfolio-all").isotope('layout');
        setTimeout( function() {
            $("#portfolio-all").isotope('layout');
          }, 50 );
        }
        else {$('.hiddenItem:lt('+items+')').show(300);
            $portfolioAll.imagesLoaded().progress();
            $("#portfolio-all").isotope('layout');
            setTimeout( function() {
                $("#portfolio-all").isotope('layout');
              }, 50 );
            $('a.btn-more').hide();
            }
    });

    $('a#Allfilter').on('click',function (e) {
        e.preventDefault();
        $('a.btn-more').show();

    });

});