$(document).ready(function()
{
    //Adjust Header Height
    var myHeader = $(".header"),
        mySlider = $(".bxslider");
    myHeader.height( $(window).height());
    $(window).resize( function()
       {
          myHeader.height( $(window).height());
          
    //Adjust BxSlider List Item Center
          mySlider.each(function()
      {
           $(this).css("paddingTop", ( $(window).height() - $(".bxslider li").height() ) / 2);
      });

       });
    
    //Links Add Active Class
    $('.links Li').click(function()
       {
           $(this).addClass('active').siblings().removeClass('active');
       });
    
    //Adjust BxSlider List Item Center
    mySlider.each(function()
      {
           $(this).css("paddingTop", ( $(window).height() - $(".bxslider li").height() ) / 2);
      });
    
    //Trigger The BxSlider
    mySlider.bxSlider(
        {
            pager:false
        });
    
    //Smooth Scroll To Div
    $(".links li a").click(function()
        {
            $('html, body').animate({
               scrollTop: $("#" + $(this).data("value")).offset().top 
            },1000);
            
        });
    
    //Our Auto Slider Code
    (function autoSlider() {
        $(".slider .active").each(function(){
           if(!$(this).is(":last-child")) {
              $(this).delay(3000).fadeOut(1000,function() {
                  $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                  autoSlider();
            });
         } else {
               $(this).delay(3000).fadeOut(1000,function() {
                   $(this).removeClass("active");
                   $(".slider div").eq(0).addClass("active").fadeIn();
                   autoSlider();
                });
         }
      });
    }());
    
    //Trigger mixitup
        $("#container").mixItUp();
        
    //Trigger nicescroll
    $("html").niceScroll({
             cursorcolor:"#7467c5",
             cursorwidth:"10px",
             cursorborder:"1px solid #7467c5"
        });
    
});