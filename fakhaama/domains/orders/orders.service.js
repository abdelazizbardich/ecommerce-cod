const ordersDal = require('./orders.dal');

const getOrders = async () => { return await ordersDal.getOrders() }
const getOrder = async () => { return await ordersDal.getOrder() }
const addOrder = async (order) => { 
    try {
        if(!order.name || !order.phone || !order.city || !order.address || !order.note) throw new Error('bad request');
        await ordersDal.addOrder(order);
        return true;
    } catch (error) {
        console.log('error',error);
        throw new Error(error);
    }
}
const updateOrder = async () => { return await ordersDal.updateOrder() }
const deleteOrder = async () => { return await ordersDal.deleteOrder() }

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder
}