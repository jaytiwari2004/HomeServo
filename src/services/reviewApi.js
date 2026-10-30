import api from "./api";

export const getAllReviews = async () => {
    const response = await api.get("/reviews");
    return response.data;
};

export const getReviewById = async (id) => {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
};

export const createReview = async (review) => {
    const response = await api.post("/reviews", review);
    return response.data;
};

export const deleteReview = async (id) => {
    await api.delete(`/reviews/${id}`);
};