
$(function(){

    // index btn ranking
    $(".btn-rank-week").click(function(){
        $(".btn-rank-day").removeClass("rounded-full");
        $(".btn-rank-day").removeClass("bg-7e97f0");
        $(".btn-rank-week").addClass("rounded-full");
        $(".btn-rank-week").addClass("bg-7e97f0");
    })

    $(".btn-rank-day").click(function(){ 
        $(".btn-rank-week").removeClass("rounded-full");
        $(".btn-rank-week").removeClass("bg-7e97f0");
        $(".btn-rank-day").addClass("rounded-full");
        $(".btn-rank-day").addClass("bg-7e97f0");  
    })

})