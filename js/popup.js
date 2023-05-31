$(function(){

    // 關閉popup和popup背景
    $(".popup-wrap .btn-close").click(function(){
        $(".popup-bg, .popup-wrap").fadeOut();
    })

    // 呼叫 coming soon popup
    $(".btn-coming-soon").click(function(){
        $(".popup-bg, .coming-soon-wrap").fadeIn();
    })

    // 點擊確認關閉popup
    $(".btn-confirm").click(function(){
        $(".popup-bg, .popup-wrap").fadeOut();
    })

})