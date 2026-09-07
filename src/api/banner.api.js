import axios from "./axios.js"

const BASE_URL= "/api/banners";

export const getBanners = async (params = {}) => {
    const response = await axios.get(BASE_URL, {
        params,
    });

    return response.data;
};

export const getActiveBanners = async () => {
    const response = await axios.get(BASE_URL, {
        params: {
            status: "ACTIVE",
        },
    });

    return response.data;
}