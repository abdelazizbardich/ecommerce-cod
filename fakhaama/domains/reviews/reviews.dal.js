const db = require('../../config/db');

const getReviews = async () => { return await db.asyncQuery('')}
const getReview = async () => { return await db.asyncQuery('')}
const addReview = async (review) => { 
    return await db.asyncQuery(`INSERT INTO reviews (name,comment,product_id) values ('${review.name}','${review.comment}',${review.product})`);
}
const updateReview = async () => { return await db.asyncQuery('')}
const deleteReview = async () => { return await db.asyncQuery('')}
const getReviewsByProduct = async (id) => { return await db.asyncQuery(`SELECT * FROM reviews WHERE product_id = ${id}`)}

module.exports = {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview,
    getReviewsByProduct
}