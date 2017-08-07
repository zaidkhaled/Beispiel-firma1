/*global $*/

$(function () {
    "use strict";
    
//   strat navbar
    
    
    
    $(".linkes li a").mouseenter(function () {
        $(this).parent().addClass("activ").siblings().removeClass("activ");
    });
    
    
    
//    end navbar
    
    
    
    var myheader = $(".header"),
        myslider = $(".bxslider");
    
    
    myheader.height($(window).height());
    
    myheader.resize(function () {
        
        $(this).height($(window).height());
        
        myslider.each(function () {
            
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 3);
        });
    });
    
    
    
    
    $(".navbar .linkes li a").click(function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top - 400
            
        }, 1000);
    });
    
    
//    slider list item center
    
    
    
    myslider.each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 3);
    });
    
    
//    end
    
    
//    call slider header
    
    $('.bxslider').bxSlider({
        pager: false,
        speed: 1000
    });
    

    
//    end call slider header
    
    
//    start testmonial
    
    
    
    (function testslider() {
        
        $(".testmonial .t-overlay .slider2 .activ").each(function () {
            
            if (!$(this).is(":last-child")) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('activ').next().addClass('activ').fadeIn();
                    
                    testslider();
                    
                });
               
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('activ');
                    
                    $('.slider2 div').eq(0).addClass('activ').fadeIn();
                    
                    testslider();
                });
            }
            
        });
    }());
    
    
    
    
//    end testmonial
    
    
//    start projct
    
    $(".our-projct .selctor1 li").click(function () {
        
        $(this).addClass("activ").siblings().removeClass("activ");
    });
    
//    end projct
    
    
//    Trigger nicescroll
    
    
    $("html").niceScroll({
        
        cursorcolor: "#1abc9c",
        
        corsorwidth: '50',
        
        corsorborder: '1px solid #1abc9c'
         
    });
    
    console.log($(window).innerWidth());
    
//    end nicescroll
    
    
});


















