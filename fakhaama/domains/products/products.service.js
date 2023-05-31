const productsDal = require('./products.dal')

const getProducts = async () => { return await productsDal.getProducts() }
const getProduct = async () => { return await productsDal.getProduct() }
const addProduct = async () => { return await productsDal.addProduct() }
const updateProduct = async () => { return await productsDal.updateProduct() }
const deleteProduct = async () => { return await productsDal.deleteProduct() }

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}