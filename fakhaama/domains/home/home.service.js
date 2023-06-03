const productsService = require('../products/products.service');


const getProducts = async() => {
    const results =  await productsService.getProducts();
    const sliderProducts = [];
    const featuredProducts = [];
    const otherProducts = [];
    results.forEach(product => {
        if(product.is_in_slider){
            sliderProducts.push(product);
        }
        if(product.is_featured){
            featuredProducts.push(product)
        }else{
            otherProducts.push(product);
        }
    });
    results.filter(product=>{return product.is_in_slider});
    results.filter(product=>{return product.is_featured});
    return {
        slider:sliderProducts,
        featured:featuredProducts,
        products:otherProducts
    }
}

module.exports = {
    getProducts
}