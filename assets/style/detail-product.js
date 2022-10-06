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