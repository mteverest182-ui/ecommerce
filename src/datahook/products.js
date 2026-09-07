import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const useHomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getProducts(1, 8);

        if (!response.success) {
          throw new Error(response.message || "Failed to fetch products");
        }

        setProducts(response.data || []);
      } catch (error) {
        console.error("Failed to fetch homepage products:", error);

        setError(error.message || "Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const trendingProducts = products.slice(0, 4);

  const topPicks =
    products.length > 4 ? products.slice(4, 8) : products.slice(0, 4);

  return {
    products,
    trendingProducts,
    topPicks,
    loading,
    error,
  };
};
