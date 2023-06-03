const db = require('../../config/db');

const getOrders = async () => { return await db.asyncQuery('')}
const getOrder = async () => { return await db.asyncQuery('')}
const addOrder = async (order) => { 
    return await db.asyncQuery(`INSERT INTO public.orders (full_name, phone, city, address, note, product_id) VALUES('${order.name}', '${order.phone}', '${order.city}', '${order.address}', '${order.note}', ${order.product});`)
}
const updateOrder = async () => { return await db.asyncQuery('')}
const deleteOrder = async () => { return await db.asyncQuery('')}

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder
}