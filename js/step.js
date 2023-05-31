$(function(){

    // tab
    let tabsContainer = document.querySelector("#tabs");

    let tabTogglers = tabsContainer.querySelectorAll("a");

    console.log(tabTogglers);

    tabTogglers.forEach(function(toggler) {
        toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("btn-step");  tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
            continue;
            }
            tabContents.children[i].classList.add("hidden");
        }
            e.target.parentElement.classList.add("btn-step");
            
        });
    });

    document.getElementById("default-tab").click();



    $(".btn-step-on").click(function(){
        $(this).children("div").toggleClass("step-m-title");
        $(this).siblings().children("div").removeClass("step-m-title");
    })


    $("#s1").click(function(){
        $("#first").css(
            "display", "flex"
        );
        $("#second").css(
            "display", "none"
        );
        $("#third").css(
            "display", "none"
        );
        $("#fourth").css(
            "display", "none"
        );
        $("#s1").addClass("btn-step");
        $("#s2").removeClass("btn-step");
        $("#s3").removeClass("btn-step");
        $("#s4").removeClass("btn-step");
    })

    $("#s2").click(function(){
        $("#first").css(
            "display", "none"
        );
        $("#second").css(
            "display", "flex"
        );
        $("#third").css(
            "display", "none"
        );
        $("#fourth").css(
            "display", "none"
        );
        $("#s1").removeClass("btn-step");
        $("#s2").addClass("btn-step");
        $("#s3").removeClass("btn-step");
        $("#s4").removeClass("btn-step");
    })

    $("#s3").click(function(){
        $("#first").css(
            "display", "none"
        );
        $("#second").css(
            "display", "none"
        );
        $("#third").css(
            "display", "flex"
        );
        $("#fourth").css(
            "display", "none"
        );
        $("#s1").removeClass("btn-step");
        $("#s2").removeClass("btn-step");
        $("#s3").addClass("btn-step");
        $("#s4").removeClass("btn-step");
    })

    $("#s4").click(function(){
        $("#first").css(
            "display", "none"
        );
        $("#second").css(
            "display", "none"
        );
        $("#third").css(
            "display", "none"
        );
        $("#fourth").css(
            "display", "flex"
        );
        $("#s1").removeClass("btn-step");
        $("#s2").removeClass("btn-step");
        $("#s3").removeClass("btn-step");
        $("#s4").addClass("btn-step");
    })

    
})