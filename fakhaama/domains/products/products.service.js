const productsDal = require('./products.dal');
const reviewsService = require('../reviews/reviews.service')

const getProducts = async () => { return (await productsDal.getProducts()).rows }
const getProduct = async (id) => { return (await productsDal.getProduct(id)).rows[0] }
const addProduct = async () => { return await productsDal.addProduct() }
const updateProduct = async () => { return await productsDal.updateProduct() }
const deleteProduct = async () => { return await productsDal.deleteProduct() }
const getProductsByCategory = async (id) => { return (await productsDal.getProductsByCategory(id)).rows}
const getReviwes = async (id)=>{ return (await reviewsService.getReviewsByProduct(id)).rows}
module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getReviwes
}