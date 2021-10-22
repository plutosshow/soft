$(document).ready(function(){
    $(".booksSeller__column").hover(function() {
        if($(this).find(".booksSeller__background_left").hasClass("booksSeller__background_left")){
            $(this).find(".booksSeller__background_left").toggleClass('scale-up_left')
            $(this).find(".booksSeller__content").toggleClass('move').toggleClass('move_left')
            $(this).siblings(".booksSeller__column").toggleClass('scale-down')
        } else if($(this).find(".booksSeller__background_middle").hasClass("booksSeller__background_middle")) {
            $(this).find(".booksSeller__background_middle").toggleClass('scale-up_middle')
            $(this).toggleClass('scale-up').siblings(".booksSeller__column").toggleClass('scale-down')
        } else if(($(this).find(".booksSeller__background_right").hasClass("booksSeller__background_right"))) {
            $(this).find(".booksSeller__content").toggleClass('move').toggleClass('move_right')
            $(this).find(".booksSeller__background_right").toggleClass('scale-up_right')
            $(this).siblings(".booksSeller__column").toggleClass('scale-down')

        }
    });
    $(".button-toggle").on( "click", function() {
        $(".logo").toggleClass("invisible");
        $("#icon__basket").toggleClass("invisible");
    });
});