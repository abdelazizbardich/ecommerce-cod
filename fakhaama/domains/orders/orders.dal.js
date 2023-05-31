const db = require('../../config/db');

const getOrders = async () => { return await db.asyncQuery('')}
const getOrder = async () => { return await db.asyncQuery('')}
const addOrder = async () => { return await db.asyncQuery('')}
const updateOrder = async () => { return await db.asyncQuery('')}
const deleteOrder = async () => { return await db.asyncQuery('')}

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder
}