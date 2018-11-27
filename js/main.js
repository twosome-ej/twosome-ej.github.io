//nav.js

$( document ).ready(function() {

    
  $('html,body').scroll(function(){
      var body_offset = $('.main_section').offset().top;

      
      if(body_offset!==0){
          $('header').css({backgroundColor:'#333'});
          
      }else{
          
          $('header').css({backgroundColor:'transparent'});
      }
  });
    
    
});

     function scrollmove(e){
         var this_index = $(e).index();
         
         $('.banner_box').animate({
        scrollTop: $(window).height() * this_index},
        'slow');
         
         
         $('.main_banner_nav li').not(e).css({backgroundColor:'#fff'});
         $(e).css({backgroundColor:'#dd0330'});
     }
        var banner_lang = $('.main_banner').length;
       
        
        for(i=0;i<banner_lang;i++){
            
            $('.main_banner_nav ul').append('<li onclick="scrollmove(this);"></li>');
        }
