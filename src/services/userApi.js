import api from "./api";

export const getAllUsers = async () => {
    const response = await api.get("/users");
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await api.post("/users", user);
    return response.data;
};

export const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
};