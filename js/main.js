$( window ).load(function() {
    $(".box").hide();
    let link = $(".left-nav li.active a").data("id");

    var activeBox = $('.box').filter(function() {
        return $(this).data("category") == link;
    });
    $(activeBox).show();
});



$(".left-nav li").on("click", "a", function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');

    var linkId = $(this).data("id");

    console.log(linkId);
    $('.box').each(function(element){
        if($(this).data("category")== linkId){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
});
