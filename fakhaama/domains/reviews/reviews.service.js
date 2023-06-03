const reviewsDal = require('./reviews.dal');

const getReviews = async () => { return await reviewsDal.getReviews() }
const getReview = async () => { return await reviewsDal.getReview() }
const addReview = async (review) => { 
    try {
        if(!review.product || !review.name || !review.comment) throw new Error('bad request');
        await reviewsDal.addReview(review);
        return true;
    } catch (error) {
        console.log('error',error);
        throw new Error(error);
    }
 }
const updateReview = async () => { return await reviewsDal.updateReview() }
const deleteReview = async () => { return await reviewsDal.deleteReview() }
const getReviewsByProduct = async (id) => { return await reviewsDal.getReviewsByProduct(id)}

module.exports = {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview,
    getReviewsByProduct
}