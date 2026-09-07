import api from "./axios"

export const getWhatsappSetting = async () => {
    const response = await api.get("/api/dashboard/whatsapp/");

    return response.data;
}