$(function(){

    $("#r1").click(function(){
        $("#t1").css(
            "display", "block"
        );
        $("#t2").css(
            "display", "none"
        );
    })

    $("#r2").click(function(){
        $("#t1").css(
            "display", "none"
        );
        $("#t2").css(
            "display", "block"
        );

    })
    
})