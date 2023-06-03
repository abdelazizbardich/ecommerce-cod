const db = require('../../config/db');

const getProducts = async () => {
    return await db.asyncQuery('SELECT * FROM products');
}
const getProduct = async (id) => {
    return await db.asyncQuery(`SELECT * FROM products WHERE id='${id}'`);
}
const addProduct = async (product) => {
    return await db.asyncQuery(`INSERT INTO public.products (title, description, price, photo, full_description, category_id, is_featured, is_in_slider) (${product.title}, ${product.description}, ${product.price}, ${product.photo}, ${product.full_description}, ${product.category_id}, ${product.is_featured}, ${product.is_in_slider})`);
}
const updateProduct = async (product) => {
    return await db.asyncQuery(`UPDATE public.products SET title=${product.title}, description=${product.description}, price=${product.price}, photo=${product.photo}, full_description=${product.full_description}, category_id=${product.category_id}, is_featured=${product.is_featured}, is_in_slider=${product.is_in_slider} WHERE id=${product.id}`);
}
const deleteProduct = async (id) => {
    return await db.asyncQuery(`DELETE FROM products where id=${id}`);
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}