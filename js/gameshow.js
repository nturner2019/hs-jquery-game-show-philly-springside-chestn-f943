$(document).ready(function(){
    
    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"
    $("#door1").flip({
        trigger: 'manual'
    });
    //insert selector below:
    $("#door1").click(function(){
        //insert selector below:
        $("#door1").flip(true);
        $("div.perspective").addClass("done");
    });

    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $(".door2").flip({
        trigger: 'manual'
    })
    //insert selector below:
    $(".door2").click(function(){
        //insert selector below:
        $(".door2").flip(true);
        $("div.perspective").addClass("done")
    });

    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $(".door-three").flip({
        //insert selector below:
        trigger: 'manual'
    })
    $(".door-three").click(function(){
        //insert selector below:
        $(".door-three").flip(true);
        $("div.perspective").addClass("done")
    });

    if ($("div.perspective").hasClass("done")){
        alert("YOU WON!!!");
    }

});