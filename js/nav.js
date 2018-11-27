//nav.js

$( document ).ready(function() {
  $('.menu button').click(function(){
      console.log('menu is clicked!');
      $('header nav').animate({left:'20%'});
      $('.background-dark').css({display:'block'});
      $('.background-dark').click(function(){
        $('header nav').animate({left:'100%'});          
        $('.background-dark').css({display:'none'});
      });
       $('.right_icon').click(function(){
        $('header nav').animate({left:'100%'});          
        $('.background-dark').css({display:'none'});
      });
      
    
  });
    
  $('header dt').click(function(){
      $('header dd').stop().slideUp(200);
      $(this).siblings('dd').stop().slideToggle(300);
  });  
    
      $('html').click(function(e) { if(!$(e.target).hasClass("navi")) {


          $('header dd').stop().slideUp(200);

       } }); 
    
    
  
    
    
});

   