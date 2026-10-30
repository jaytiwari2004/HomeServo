import api from "./api";

export const getAllServices = async () => {
    const response = await api.get("/services");
    return response.data;
};

export const getServiceById = async (id) => {
    const response = await api.get(`/services/${id}`);
    return response.data;
};

export const createService = async (service) => {
    const response = await api.post("/services", service);
    return response.data;
};

export const deleteService = async (id) => {
    await api.delete(`/services/${id}`);
};