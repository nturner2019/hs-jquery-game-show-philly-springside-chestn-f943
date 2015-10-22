$(document).ready(function(){
    
    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"
    $("__").flip({
        trigger: 'manual'
    });
    $("__").click(function(){
        $("__").flip(true);
    });

    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $(".door2").flip({
        trigger: 'manual'
    })
    $(".door2").click(function(){
        $(".door2").flip(true);
    });

    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("#door3").flip({
        trigger: 'manual'
    })
    $("#door3").click(function(){
        $("#door3").flip(true);
    });


});