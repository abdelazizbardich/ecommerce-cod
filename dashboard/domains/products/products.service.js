const productsDal = require('./products.dal');


const addProduct = async (product) => {
    product.in_slider = (product.in_slider == 'on')?true:false;
    product.is_featured = (product.is_featured == 'on')?true:false;
    return (await productsDal.addProduct(product)).rows
}

const getProducts = async () => {
    return (await productsDal.getProducts()).rows
}

module.exports = {
    getProducts,
    addProduct
}