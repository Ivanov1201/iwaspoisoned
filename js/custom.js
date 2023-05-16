jQuery(document).ready(function() {
    formSlider.init('#example-with-groups');
});

$(document).ready(function(){ 
    $(".sick-from").click(function(){
        $('.not-sure').removeClass("active");
        $(this).addClass("active");
        $(".place").attr("placeholder","Where? e.g. Moe's Tavern");
    });
    $(".not-sure").click(function(){
        $('.sick-from').removeClass("active");
        $(this).addClass("active");
        $(".place").attr("placeholder","Type your city and state...");
    });
});