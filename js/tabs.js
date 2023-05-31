$(function(){

    // tab切換
    $(".tabs li").click(function(){
        $(this).addClass("btn-tab");
        if($(this).hasClass("btn-tab")){
            $(this).siblings().removeClass("btn-tab");
        }
    })



})