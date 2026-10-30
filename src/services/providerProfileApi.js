import api from "./api";

export const getAllProviderProfiles = async () => {
    const response = await api.get("/provider-profiles");
    return response.data;
};

export const getProviderProfileById = async (id) => {
    const response = await api.get(`/provider-profiles/${id}`);
    return response.data;
};