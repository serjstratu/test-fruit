$( document ).ready(function() {
    var heights = $(".wrap").map(function() {
            return $(this).height();
        }).get(),

        maxHeight = Math.max.apply(null, heights);

    $(".wrap").height(maxHeight);
});


$(".left-nav").on("click", "a", function(e){
    e.preventDefault();
    console.log("click a");
});