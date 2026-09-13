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
  const searchQuery = searchParams.get("search") || "";

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

  const displayedProducts = useMemo(() => {
    let result = [...products];

    /*
     * SEARCH
     */
    if (searchQuery.trim()) {
      const keyword = searchQuery.trim().toLowerCase();

      result = result.filter((product) => {
        const name =
          product.name?.toLowerCase() || "";

        const brand =
          product.brand?.toLowerCase() || "";

        const gender =
          product.gender?.toLowerCase() || "";

        const categoryName =
          typeof product.category === "object"
            ? product.category?.name?.toLowerCase() || ""
            : "";

        const category =
          typeof product.category === "string"
            ? product.category.toLowerCase()
            : "";

        return (
          name.includes(keyword) ||
          brand.includes(keyword) ||
          gender.includes(keyword) ||
          categoryName.includes(keyword) ||
          category.includes(keyword)
        );
      });
    }

    /*
     * GENDER FILTER
     */
    if (selectedGender) {
      result.sort((a, b) => {
        const aIsSelected =
          a.gender === selectedGender;

        const bIsSelected =
          b.gender === selectedGender;

        if (aIsSelected && !bIsSelected) {
          return -1;
        }

        if (!aIsSelected && bIsSelected) {
          return 1;
        }

        return 0;
      });
    }

    return result;
  }, [
    products,
    selectedGender,
    searchQuery,
  ]);

  const recommendedProducts = useMemo(() => {
    if (
      !searchQuery.trim() ||
      displayedProducts.length > 0
    ) {
      return [];
    }

    return products.slice(0, 4);
  }, [
    products,
    displayedProducts,
    searchQuery,
  ]);

  const handleClearFilter = () => {
    setSearchParams({});
  };

  const genderLabel =
    selectedGender === "MEN"
      ? "Men"
      : selectedGender === "WOMEN"
        ? "Women"
        : "";

  const hasSearch = Boolean(searchQuery.trim());
  const hasSearchResult =
    displayedProducts.length > 0;

  if (loading) {
    return (
      <main className="min-h-screen bg-base-100 px-6 py-32">
        <div className="mx-auto max-w-[1440px]">
          <p
            className="
              text-center
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-base-content/40
            "
          >
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
                {hasSearch
                  ? `Search Results`
                  : genderLabel || "All Collection"}
              </h1>

              {hasSearch && (
                <p className="mt-3 text-xs text-base-content/45">
                  Results for{" "}
                  <span className="text-base-content/70">
                    "{searchQuery}"
                  </span>
                </p>
              )}

              {/* GENDER INFO */}
              {!hasSearch && selectedGender && (
                <p className="mt-3 text-xs text-base-content/45">
                  {genderLabel} products are shown first
                </p>
              )}
            </div>

            {/* CLEAR */}
            {(selectedGender || hasSearch) && (
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

        {hasSearchResult ? (
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
        ) : hasSearch ? (

          <div>
            {/* VALIDATION */}
            <div className="py-16 text-center md:py-20">
              <p
                className="
                  font-[Philosopher]
                  text-3xl
                  leading-tight
                  md:text-4xl
                "
              >
                No products found
              </p>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-xs
                  leading-relaxed
                  text-base-content/45
                "
              >
                We couldn't find a match for{" "}
                <span className="text-base-content/70">
                  "{searchQuery}"
                </span>
                .
              </p>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-xs
                  leading-relaxed
                  text-base-content/35
                "
              >
                Try another keyword or explore
                our recommendations below.
              </p>

              <button
                type="button"
                onClick={handleClearFilter}
                className="
                  mt-7
                  border-b
                  border-base-content/30
                  pb-1
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-base-content/60
                  transition-colors
                  hover:border-base-content
                  hover:text-base-content
                "
              >
                View All Products
              </button>
            </div>
            {recommendedProducts.length > 0 && (
              <section
                className="
                  mt-4
                  border-t
                  border-base-content/10
                  pt-12
                  md:pt-16
                "
              >
                <div
                  className="
                    mb-8
                    flex
                    items-end
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-primary
                      "
                    >
                      For You
                    </p>

                    <h2
                      className="
                        mt-2
                        font-[Philosopher]
                        text-3xl
                        leading-none
                        md:text-4xl
                      "
                    >
                      Top Picks
                    </h2>

                    <p
                      className="
                        mt-3
                        text-xs
                        text-base-content/40
                      "
                    >
                      A few pieces you might like
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearFilter}
                    className="
                      shrink-0
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-base-content/45
                      transition-colors
                      hover:text-base-content
                    "
                  >
                    View All
                  </button>
                </div>

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
                  "
                >
                  {recommendedProducts.map(
                    (product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ),
                  )}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p
              className="
                font-[Philosopher]
                text-3xl
              "
            >
              No products found
            </p>

            <p
              className="
                mt-3
                text-xs
                text-base-content/45
              "
            >
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