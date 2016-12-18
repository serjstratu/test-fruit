$( window ).load(function() {
    let link = $(".left-nav li.active a").data("id");
    console.log(link);

    var activeBox = $('.box').filter(function() {
        return $(this).data("category") == link;
    });
    console.log(activeBox)
    $(activeBox).show();
});



// $( document ).ready(function() {
//     var heights = $(".wrap").map(function() {
//             return $(this).height();
//         }).get(),
//
//         maxHeight = Math.max.apply(null, heights);
//
//     $(".left-nav").height(maxHeight);
// });



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
