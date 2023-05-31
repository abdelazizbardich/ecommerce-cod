const db = require('../../config/db');

const getCategories = async () => { return await db.asyncQuery('')}
const getCategory = async () => { return await db.asyncQuery('')}
const addCategory = async () => { return await db.asyncQuery('')}
const updateCategory = async () => { return await db.asyncQuery('')}
const deleteCategory = async () => { return await db.asyncQuery('')}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}