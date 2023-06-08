$(".links-a").hover(function() {
   $(this).addClass("links-a-js");
}, function(){
   $(this).removeClass("links-a-js"); 
});

$(".ojust").hover(function() {
   $(this).addClass("just");
}, function(){
   $(this).removeClass("just"); 
}); 

$(".hello").hover(function() {
   $(this).addClass("hellojs");
}, function(){
   $(this).removeClass("hellojs"); 
});
    
$(".hi").hover(function() {
   $(this).addClass("hellojs");
}, function(){
   $(this).removeClass("hellojs"); 
});

$(".dev").hover(function(){
   $(this).addClass("devjs");
}, function(){
   $(this).removeClass("devjs");
});

$(".mountain").hover(function(){
   $(this).addClass("mountainjs");
}, function(){
   $(this).removeClass("mountainjs");
});
$(".field").hover(function(){
   $(this).addClass("fieldjs");
}, function(){
   $(this).removeClass("fieldjs");
});

$( ".h1-about" ).on( "click", function() {
   $( this ).slideUp( "slow", function() {
     });
 });
 $( ".h1-about" ).on( "click", function() {
   $( this ).slideDown( "slow", function() {
     });
 });
 
 $(".about").toggle(function(){
   $(this).slideDown(10000);
 });
 $(".total_container").toggle(function(){
   $(this).slideDown(10000);
 });

 $("span").css("font-size","1rem");
 $("span").css("color","#AEE2FF");
 

$(".spn").on("click", function(){
   $(this).hide();
});

$(".im2").mouseover(function(){
   $(this).replaceWith("<h1>🌐🌐🔗🔗🖃🖃🌐🌐</h1>");
});

$(".changecolor").hover(function(){
   $(this).addClass("changecolorjs");
}, function(){
   $(this).removeClass("changecolorjs");
});

$(document).ready(function() {
   $(window).scroll(function() {
     if ($(document).scrollTop() > 1100) {
       $("#price").addClass("test");
     } else {
       $("#price").removeClass("test");
     }
   });
 });


