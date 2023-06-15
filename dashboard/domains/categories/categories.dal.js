const db = require('../../config/db');

const getCategories = async ()=>{
    const result = await db.asyncQuery(`SELECT * FROM categories`);
    return result;
}

module.exports = {
    getCategories
}