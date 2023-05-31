$(function(){

    // mobile menu
    $('.btn-hamburger').click(function(){
        $(".m-menu").fadeIn();
    })

    $(".btn-close").click(function(){
        $(".m-menu").fadeOut();
        $(".m-language-menu").hide();
    })

})