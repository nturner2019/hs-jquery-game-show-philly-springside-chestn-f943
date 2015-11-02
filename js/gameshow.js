$(document).ready(function(){
    
    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"
    $("__").flip({
        trigger: 'manual'
    });
    //insert selector below:
    $("__").click(function(){
        //insert selector below:
        $("__").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });

    //door two: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("__").flip({
        trigger: 'manual'
    })
    //insert selector below:
    $("__").click(function(){
        //insert selector below:
        $("__").flip(true);
        $("div.perspective").addClass("done")
        checkWin();
    });

    //door three: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("__").flip({
        //insert selector below:
        trigger: 'manual'
    })
    $("__").click(function(){
        //insert selector below:
        $("__").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });
 
    // IGNORE THIS:
    function checkWin() {
      if ($("div.perspective.done").length === $("div.perspective").length) {
        alert("YOU WON!!!");
      }
    }


});
