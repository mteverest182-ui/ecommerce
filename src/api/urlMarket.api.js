import api from "./axios"

export const getWhatsappSetting = async () => {
    const response = await api.get("/api/dashboard/setting/");

    return response.data;
}