$(document).ready(function(){
    $(".produk-page__box").each(function(i){
        setTimeout(() => {
            $(".produk-page__box").eq(i).attr("data-scroll", "show")
        }, i * 50);
    });
});