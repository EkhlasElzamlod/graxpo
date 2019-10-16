$(document).ready(function(){
        
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 50) {
                $("#navbar").addClass("background-navbar");
                $(".change").addClass("change_coler");
          }

          else{
              $("#navbar").removeClass("background-navbar");
               $(".change").removeClass("change_coler");
          }
      });
});