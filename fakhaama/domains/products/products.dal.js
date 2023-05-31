const db = require('../../config/db');

const getProducts = async () => { return await db.asyncQuery('')}
const getProduct = async () => { return await db.asyncQuery('')}
const addProduct = async () => { return await db.asyncQuery('')}
const updateProduct = async () => { return await db.asyncQuery('')}
const deleteProduct = async () => { return await db.asyncQuery('')}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}