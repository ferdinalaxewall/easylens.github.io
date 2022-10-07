$(document).ready(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    let productParams = urlParams.get('product')

    if (productParams == null || productParams == undefined || productParams == "") {
        window.location.href = "product.html"
    }else{
        getDetailCameraData(productParams)
    }
})

function showPrice(button){
    $(".button-variant").removeClass("selected");
    $(button).addClass("selected");
    let price = $(button).attr("data-price");
    $(".price__number").text("Rp. " + price);
    $(".book-produk").removeAttr("disabled")
}

function orderWhatsapp(button){

    let title = $(button).parents(".detail-produk__text").find(".detail-produk__title").text();
    let price = $(".button-variant.selected").attr("data-price");
    let duration = $(".button-variant.selected").attr("variant-value");
    let stringDuration = duration+"%20Jam";
    let encodedTitle = encodeURI(title)
    let link = 'https://wa.me/6283861527757?text=Halo%20Admin%20*EasyLens*%2C%20saya%20ingin%20memesan%20*'+encodedTitle+'*%20selama%20*'+stringDuration+'*%20seharga%20Rp.%20*'+price+'*'
    if(price != undefined){
        window.open(link, '_blank')
    }
}