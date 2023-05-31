const ordersDal = require('./orders.dal');

const getOrders = async () => { return await ordersDal.getOrders() }
const getOrder = async () => { return await ordersDal.getOrder() }
const addOrder = async () => { return await ordersDal.addOrder() }
const updateOrder = async () => { return await ordersDal.updateOrder() }
const deleteOrder = async () => { return await ordersDal.deleteOrder() }

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder
}