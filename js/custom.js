jQuery(document).ready(function() {
    formSlider.init('#example-with-groups');
});

$(document).ready(function(){ 
    $(".sick-from-main").click(function(){
        $('.not-sure-main').removeClass("active");
        $(this).addClass("active");
        $(".place").attr("placeholder","Where? e.g. Moe's Tavern");
    });
    $(".not-sure-main").click(function(){
        $('.sick-from-main').removeClass("active");
        $(this).addClass("active");
        $(".place").attr("placeholder","Type your city and state...");
    });
});
