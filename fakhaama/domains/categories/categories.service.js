const categoriesDal = require('./categories.dal');

const getCategories = async () => { return await categoriesDal.getCategories() }
const getCategory = async () => { return await categoriesDal.getCategory() }
const addCategory = async () => { return await categoriesDal.addCategory() }
const updateCategory = async () => { return await categoriesDal.updateCategory() }
const deleteCategory = async () => { return await categoriesDal.deleteCategory() }

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}