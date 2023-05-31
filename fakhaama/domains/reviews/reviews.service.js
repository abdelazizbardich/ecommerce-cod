const reviewsDal = require('./reviews.dal');

const getReviews = async () => { return await reviewsDal.getReviews() }
const getReview = async () => { return await reviewsDal.getReview() }
const addReview = async () => { return await reviewsDal.addReview() }
const updateReview = async () => { return await reviewsDal.updateReview() }
const deleteReview = async () => { return await reviewsDal.deleteReview() }

module.exports = {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
}