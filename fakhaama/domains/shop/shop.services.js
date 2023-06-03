const shopsDal = require('./shop.dal')

const getProducts = async () => { return (await shopsDal.getProducts()).rows }
const getProduct = async (id) => { return await shopsDal.getProduct(id) }
const addProduct = async () => { return await shopsDal.addProduct() }
const updateProduct = async () => { return await shopsDal.updateProduct() }
const deleteProduct = async () => { return await shopsDal.deleteProduct() }

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}