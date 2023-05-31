// FAQ
$(function(){
        
    $(".panel-question").click(function(){
        $(this).siblings(".question-content").delay().slideToggle(300);
        $(this).children(".arrow-bottom-box").toggleClass("rotate-180")
    });

})