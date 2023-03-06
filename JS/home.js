$(window).scroll(function() {  
    var scroll = $(window).scrollTop();  
    $(".hero-section img").css({  
     width: (100 + scroll/5) + "%"  
    })  
   })  