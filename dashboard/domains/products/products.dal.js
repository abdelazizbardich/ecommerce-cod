const db = require('../../config/db');

const getProducts = async ()=>{
    const result = await db.asyncQuery(`SELECT * FROM products p left join categories c on p.category_id = c.id`);
    return result;
}
const addProduct = async (product)=>{
    const query = `INSERT INTO public.products (title, description, price, photo, full_description, category_id, is_featured, is_in_slider) VALUES('${product.title}', '${product.description}', ${product.price}, '${product.photo}', '${product.full_description}', '${product.category}', ${product.in_slider}, false);`
    const result = await db.asyncQuery(query);
    return result;
}

module.exports = {
    getProducts,
    addProduct
}