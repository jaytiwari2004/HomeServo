import api from "./api";

export const getAllPayments = async () => {
    const response = await api.get("/payments");
    return response.data;
};

export const getPaymentById = async (id) => {
    const response = await api.get(`/payments/${id}`);
    return response.data;
};

export const createPayment = async (payment) => {
    const response = await api.post("/payments", payment);
    return response.data;
};

export const deletePayment = async (id) => {
    await api.delete(`/payments/${id}`);
};