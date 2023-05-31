$(function(){
    var t = $("#quantity"); 
    $("#min").click(function(){
        if(t.val()<3) {
            t.val(parseInt(t.val())+1)
            $("#add").removeAttr("disabled")
            setTotal();
        }
    })
    $("#add").click(function(){
        if(t.val()>1){
            t.val(parseInt(t.val())-1);
            setTotal();
        }
    })
});