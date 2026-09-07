import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedGender = searchParams.get("gender");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getProducts();

        if (!response.success) {
          throw new Error(
            response.message || "Failed to fetch products",
          );
        }

        setProducts(response.data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);

        setError(
          error.message || "Failed to load products.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /*
   * EVENT-DRIVEN GENDER PRIORITY
   *
   * Tidak menggunakan filter().
   *
   * Semua product tetap ditampilkan.
   * Jika user memilih MEN:
   *   MEN   -> tampil paling atas
   *   WOMEN -> tetap tampil setelah MEN
   *
   * Jika user memilih WOMEN:
   *   WOMEN -> tampil paling atas
   *   MEN   -> tetap tampil setelah WOMEN
   *
   * Jika tidak ada gender:
   *   Semua product mengikuti urutan dari backend.
   */
  const displayedProducts = useMemo(() => {
    if (!selectedGender) {
      return products;
    }

    return [...products].sort((a, b) => {
      const aIsSelected = a.gender === selectedGender;
      const bIsSelected = b.gender === selectedGender;

      if (aIsSelected && !bIsSelected) {
        return -1;
      }

      if (!aIsSelected && bIsSelected) {
        return 1;
      }

      return 0;
    });
  }, [products, selectedGender]);

  const handleClearFilter = () => {
    setSearchParams({});
  };

  const genderLabel =
    selectedGender === "MEN"
      ? "Men"
      : selectedGender === "WOMEN"
        ? "Women"
        : "";

  if (loading) {
    return (
      <main className="min-h-screen bg-base-100 px-6 py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-base-content/40">
            Loading collection...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-base-100 px-6 py-32">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="text-sm text-error">
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-100">
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          pb-20
          pt-15
          md:px-8
          md:pb-24
          lg:px-10
          lg:pb-28
        "
      >
        {/* HEADER */}
        <div className="mb-10 md:mb-14">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-primary
              md:text-[10px]
            "
          >
            Shop
          </p>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1
                className="
                  font-[Philosopher]
                  text-4xl
                  leading-none
                  tracking-tight
                  md:text-5xl
                  lg:text-5xl
                "
              >
                {genderLabel || "All Collection"}
              </h1>

              {selectedGender && (
                <p className="mt-3 text-xs text-base-content/45">
                  {genderLabel} products are shown first
                </p>
              )}
            </div>

            {selectedGender && (
              <button
                type="button"
                onClick={handleClearFilter}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-base-content/50
                  transition-colors
                  hover:text-base-content
                "
              >
                View All
              </button>
            )}
          </div>
        </div>

        {/* PRODUCTS */}
        {displayedProducts.length > 0 ? (
          <div
            className="
              grid
              grid-cols-2
              gap-x-3
              gap-y-10
              md:grid-cols-3
              md:gap-x-6
              md:gap-y-14
              lg:grid-cols-4
              lg:gap-x-8
              lg:gap-y-16
            "
          >
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-[Philosopher] text-3xl">
              No products found
            </p>

            <p className="mt-3 text-xs text-base-content/45">
              There are no products available.
            </p>

            <button
              type="button"
              onClick={handleClearFilter}
              className="
                mt-7
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-base-content/55
                transition-colors
                hover:text-base-content
              "
            >
              View All Products
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Shop;
