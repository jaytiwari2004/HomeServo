import api from "./api";

export const getAllBookings = async () => {
    const response = await api.get("/bookings");
    return response.data;
};

export const getBookingById = async (id) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
};

export const createBooking = async (booking) => {
    const response = await api.post("/bookings", booking);
    return response.data;
};

export const deleteBooking = async (id) => {
    await api.delete(`/bookings/${id}`);
};