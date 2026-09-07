import api from "../api/axios";

export const getProducts = async (page = 1, limit = 8, search = "") => {
  const response = await api.get("/api/products", {
    params: {
      page,
      limit,
      search,
    },
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/api/products/${id}`);

  return response.data;
};
