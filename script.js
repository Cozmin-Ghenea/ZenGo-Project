// $(document).ready(function(){
//     $("a.scrollink").click(function(event){
//         event.preventDefault();
//         $("html, body").animate({scrolltop: $($(this).attr("href")).offset().top},500);
//     });
// });

$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});