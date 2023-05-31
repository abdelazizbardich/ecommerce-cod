const db = require('../../config/db');

const getReviews = async () => { return await db.asyncQuery('')}
const getReview = async () => { return await db.asyncQuery('')}
const addReview = async () => { return await db.asyncQuery('')}
const updateReview = async () => { return await db.asyncQuery('')}
const deleteReview = async () => { return await db.asyncQuery('')}

module.exports = {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
}