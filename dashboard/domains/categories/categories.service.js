const categoriesDal = require('./categories.dal');



const getCategories = async () => {
    return (await categoriesDal.getCategories()).rows
}

module.exports = {
    getCategories
}