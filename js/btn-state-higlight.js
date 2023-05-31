$(function(){

    // 進入票券頁面時,預設必須有一個是higlight狀態,目前設定為台幣是higlight狀態
    $(".btn-higlight").first().addClass("border border-solid color-7e97f0 border-color-7e97f0 bg-7e97f0-20");

    // 點擊目標按鈕會切換higlight狀態
    $(".btn-higlight").click(function(){
        $(this).addClass("border border-solid color-7e97f0 border-color-7e97f0 bg-7e97f0-20").siblings(".btn-higlight").removeClass("border border-solid color-7e97f0 border-color-7e97f0 bg-7e97f0-20");
    })

})