$(function(){

    // 下拉選單我要捐款
    $(".invoice-select").click(function(){
        $(".invoice-sub-select").slideToggle();
        $(".invoice-sub-select2").slideUp();
    })

    // 電子發票載具類別下拉選單
    $(".invoice-select2").click(function(){
        $(".invoice-sub-select2").slideToggle();
        $(".invoice-sub-select").slideUp();
    })

    // 下拉選單的選項 “未持有”
    $("#invoice-sub-select2-list1").click(function(){
        $("#people-input3").show();
        $("#people-input1, #people-input2").hide();
    })

    // 下拉選單的選項 “手機條碼”
    $("#invoice-sub-select2-list2").click(function(){
        $("#people-input1, #people-input3").show();
        $("#people-input2").hide();
    })

    // 下拉選單的選項 “自然人憑證條碼”
    $("#invoice-sub-select2-list3").click(function(){
        $("#people-input2, #people-input3").show()
        $("#people-input1").hide()
    })

    // 下拉選單的選項 “我要捐款”
    $("#invoice-sub-select-list1").click(function(){
        $("#invoice-1").show()
        $("#invoice-2").hide()
        $("#invoice-3").hide()
    })

    // 下拉選單的選項 “個人發票”
    $("#invoice-sub-select-list2").click(function(){
        $("#invoice-2").show()
        $("#invoice-1").hide()
        $("#invoice-3").hide()
    })

    // 下拉選單的選項 “公司發票”
    $("#invoice-sub-select-list3").click(function(){
        $("#invoice-3").show()
        $("#invoice-1").hide()
        $("#invoice-2").hide()
    })

    // 點擊其他受捐贈機關或是團體
    $(".r1").click(function(){
        $("#donat-input1, #donat-input2").hide();
    })
    $(".r2").click(function(){
        $("#donat-input1, #donat-input2").show();
    })

    // 點擊我不需要索取發票，請直接捐贈
    $("#no-invoice label").click(function(){
        $("#invoice-info").toggle();
    })

})