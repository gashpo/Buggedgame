$(function(){

    //web btn language dropdown
    $(".btn-language").click(function(){
        $(".language-menu").delay().slideToggle();
        $(".panel-wallet").hide();
    })

    //點擊其他地方多語系功能收合
    // $(document).mouseup(function (e) {
    //     var container =$(".language-menu");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //        container.hide(); 
    //     }
    //     $(".icon-arrow-bottom").removeClass("rotate-180");
    // });


    // 語系旁按鈕旋轉
    $(".btn-language").click(function(){
        $(".icon-arrow-bottom").toggleClass("rotate-180");
    })


    //mobile btn language dropdown
    $(".btn-m-language").click(function(){
        $(".m-language-menu").delay().fadeToggle();
    })
   
    //web btn wallet dropdown 
    $(".btn-wallet").click(function(){
        $(".panel-wallet").delay().slideToggle();
        $(".language-menu").hide();

    })


    // personal page table filter
    $(".filter-c1").click(function(){
        $(".filter-menu").toggle();
        $(this).parents(".filter-box").siblings().children(".filter-menu").hide();
    })

    $("#r1, #r2").click(function(){
        $('.filter-menu').hide();
    })

})