import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { getWhatsappSetting } from "../api/urlMarket.api";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  // WhatsApp URL dari backend
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [whatsappLoading, setWhatsappLoading] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Size & Quantity
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // =========================
  // GET PRODUCT
  // =========================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getProductById(id);

        if (!response.success) {
          throw new Error(
            response.message || "Failed to fetch product",
          );
        }

        const data = response.data;

        setProduct(data);
        setActiveImage(data?.image || "");
      } catch (error) {
        console.error("Failed to fetch product:", error);

        setError(
          error.message ||
            "Something went wrong while loading product.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // =========================
  // GET WHATSAPP SETTING
  // =========================
  useEffect(() => {
    const fetchWhatsappSetting = async () => {
      try {
        setWhatsappLoading(true);

        const response = await getWhatsappSetting();

        const url = response.data?.whatsappUrl || "";

        setWhatsappUrl(url);
      } catch (error) {
        console.error(
          "GET WHATSAPP SETTING ERROR:",
          error,
        );

        setWhatsappUrl("");
      } finally {
        setWhatsappLoading(false);
      }
    };

    fetchWhatsappSetting();
  }, []);

  // =========================
  // PRODUCT IMAGES
  // =========================
  const images = useMemo(() => {
    if (!product) return [];

    if (
      Array.isArray(product.images) &&
      product.images.length > 0
    ) {
      return product.images;
    }

    if (product.image) {
      return [product.image];
    }

    return [];
  }, [product]);

  // =========================
  // PRODUCT PRICING
  // =========================
  const originalPrice = Number(
    product?.price ?? 0,
  );

  const finalPrice = Number(
    product?.discountedPrice ??
      product?.price ??
      0,
  );

  const discount = Number(
    product?.discountPercent ?? 0,
  );

  const hasDiscount =
    discount > 0 &&
    finalPrice < originalPrice;

  // =========================
  // STOCK
  // =========================
  const stock = Number(
    product?.stock ?? 0,
  );

  const isOutOfStock = stock <= 0;

  // =========================
  // GENDER
  // =========================
  const gender =
    product?.gender === "MEN"
      ? "Men"
      : product?.gender === "WOMEN"
        ? "Women"
        : product?.gender || "";

  // =========================
  // TOTAL PRICE
  // =========================
  const totalPrice = finalPrice * quantity;

  // =========================
  // QUANTITY
  // =========================
  const handleDecreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1),
    );
  };

  const handleIncreaseQuantity = () => {
    setQuantity((current) =>
      Math.min(stock, current + 1),
    );
  };

  // =========================
  // ADD TO BAG / WHATSAPP
  // =========================
  const handleAddToBag = () => {
    if (!whatsappUrl) {
      return;
    }

    if (isOutOfStock) {
      return;
    }

    if (!selectedSize) {
      return;
    }

    const message = [
      "Halo, saya ingin memesan:",
      "",
      `Product: ${product.name}`,
      `Size: ${selectedSize}`,
      `Quantity: ${quantity}`,
      `Price: Rp ${finalPrice.toLocaleString("id-ID")}`,
      `Total: Rp ${totalPrice.toLocaleString("id-ID")}`,
      "",
      "Mohon informasi ketersediaan dan proses pemesanannya.",
    ].join("\n");

    const separator = whatsappUrl.includes("?")
      ? "&"
      : "?";

    const whatsappLink =
      `${whatsappUrl}${separator}text=` +
      encodeURIComponent(message);

    window.location.href = whatsappLink;
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="min-h-screen bg-base-100">
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40">
            Loading
          </p>
        </div>
      </main>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (error || !product) {
    return (
      <main className="min-h-screen bg-base-100">
        <div className="mx-auto flex min-h-[60vh] w-[90%] flex-col items-center justify-center text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40">
            {error || "Product not found"}
          </p>

          <Link
            to="/shop"
            className="
              mt-6
              border-b
              border-base-content/40
              pb-1
              text-[9px]
              uppercase
              tracking-[0.2em]
              transition-colors
              hover:border-primary
              hover:text-primary
            "
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-base-100 text-base-content">
      <section className="mx-auto w-[100%] py-0 md:w-[80%] md:py-12 lg:w-[80%] lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* =========================
              PRODUCT IMAGE
          ========================= */}
          <div>
            <div className="mx-auto w-full max-w-[560px] overflow-hidden bg-base-200 md:max-w-none">
              <div className="aspect-[8/12] w-full lg:aspect-[8/5]">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="
                      h-auto
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      hover:scale-[1.015]
                    "
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-base-content/30">
                      No Image
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                {images.map((image, index) => {
                  const isActive =
                    image === activeImage;

                  return (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() =>
                        setActiveImage(image)
                      }
                      aria-label={`View image ${index + 1}`}
                      className={`
                        relative
                        w-[64px]
                        shrink-0
                        overflow-hidden
                        bg-base-200
                        md:w-[72px]
                        ${
                          isActive
                            ? "opacity-100 ring-1 ring-base-content"
                            : "opacity-55 hover:opacity-100"
                        }
                      `}
                    >
                      <div className="aspect-[4/5]">
                        <img
                          src={image}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* =========================
              PRODUCT INFORMATION
          ========================= */}
          <div className="mx-auto w-[96%] md:sticky md:top-28 md:h-fit">

            {/* CATEGORY + GENDER */}
            {(product.category || gender) && (
              <div className="flex items-center gap-3">
                {product.category && (
                  <p className="text-[9px] uppercase tracking-[0.3em] text-primary">
                    {product.category.name ??
                      product.category}
                  </p>
                )}

                {product.category && gender && (
                  <span className="h-3 w-px bg-base-content/15" />
                )}

                {gender && (
                  <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/40">
                    {gender}
                  </p>
                )}
              </div>
            )}

            {/* PRODUCT NAME */}
            <h1 className="mt-3 max-w-xl font-serif text-3xl leading-[1] tracking-tight md:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* BRAND */}
            {product.brand && (
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-base-content/45">
                {product.brand}
              </p>
            )}

            {/* PRICE */}
            <div className="mt-5">
              {hasDiscount ? (
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-base font-medium tracking-[0.01em] text-base-content md:text-lg">
                    Rp{" "}
                    {finalPrice.toLocaleString(
                      "id-ID",
                    )}
                  </span>

                  <span className="text-xs text-base-content/35 line-through md:text-sm">
                    Rp{" "}
                    {originalPrice.toLocaleString(
                      "id-ID",
                    )}
                  </span>

                  <span className="inline-flex items-center gap-1.5 border border-base-content/15 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-base-content/60">
                    <span>OFF</span>

                    <span className="h-2.5 w-px bg-base-content/20" />

                    <span className="text-primary">
                      {discount}%
                    </span>
                  </span>
                </div>
              ) : (
                <p className="text-sm text-base-content/70">
                  Rp{" "}
                  {originalPrice.toLocaleString(
                    "id-ID",
                  )}
                </p>
              )}
            </div>

            <div className="my-7 border-t border-base-content/10" />

            {/* DESCRIPTION */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/40">
                Description
              </p>

              <p className="mt-3 max-w-md text-xs leading-6 text-base-content/60 md:text-sm">
                {product.description ||
                  "A refined piece designed with simplicity and enduring character."}
              </p>
            </div>

            {/* PRODUCT META */}
            <div className="mt-7 border-y border-base-content/10">

              {/* BRAND */}
              {product.brand && (
                <div className="flex items-center justify-between py-4">
                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    Brand
                  </span>

                  <span className="text-[10px] text-base-content/50">
                    {product.brand}
                  </span>
                </div>
              )}

              {/* GENDER */}
              {gender && (
                <div
                  className={`flex items-center justify-between py-4 ${
                    product.brand
                      ? "border-t border-base-content/10"
                      : ""
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    Gender
                  </span>

                  <span className="text-[10px] text-base-content/50">
                    {gender}
                  </span>
                </div>
              )}

              {/* STOCK */}
              <div
                className={`flex items-center justify-between py-4 ${
                  product.brand || gender
                    ? "border-t border-base-content/10"
                    : ""
                }`}
              >
                <span className="text-[9px] uppercase tracking-[0.2em]">
                  Stock
                </span>

                <span
                  className={`text-[10px] ${
                    isOutOfStock
                      ? "text-error"
                      : "text-base-content/50"
                  }`}
                >
                  {isOutOfStock
                    ? "Out of Stock"
                    : `${stock} Available`}
                </span>
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.25em]">
                  Select Size
                </p>

                <button
                  type="button"
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-base-content/40
                    transition-colors
                    hover:text-primary
                  "
                >
                  Size Guide
                </button>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-1">
                {["XS", "S", "M", "L"].map(
                  (size) => {
                    const isSelected =
                      selectedSize === size;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() =>
                          setSelectedSize(size)
                        }
                        disabled={isOutOfStock}
                        aria-pressed={isSelected}
                        className={`
                          border
                          py-3
                          text-[10px]
                          uppercase
                          tracking-[0.15em]
                          transition-all
                          duration-200

                          ${
                            isSelected
                              ? "border-base-content bg-base-content text-base-100"
                              : "border-base-content/15 hover:border-base-content"
                          }

                          disabled:cursor-not-allowed
                          disabled:opacity-30
                        `}
                      >
                        {size}
                      </button>
                    );
                  },
                )}
              </div>

              {!selectedSize &&
                !isOutOfStock && (
                  <p className="mt-3 text-[9px] uppercase tracking-[0.12em] text-base-content/35">
                    Please select a size
                  </p>
                )}
            </div>

            {/* QUANTITY */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.25em]">
                  Quantity
                </p>
              </div>

              <div className="mt-4 flex h-11 w-fit items-center border border-base-content/15">
                <button
                  type="button"
                  onClick={
                    handleDecreaseQuantity
                  }
                  disabled={
                    isOutOfStock ||
                    quantity <= 1
                  }
                  aria-label="Decrease quantity"
                  className="
                    flex
                    h-full
                    w-11
                    items-center
                    justify-center
                    text-sm
                    text-base-content/50
                    transition-colors
                    hover:text-base-content
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  −
                </button>

                <span className="flex h-full w-12 items-center justify-center border-x border-base-content/10 text-[10px]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={
                    handleIncreaseQuantity
                  }
                  disabled={
                    isOutOfStock ||
                    quantity >= stock
                  }
                  aria-label="Increase quantity"
                  className="
                    flex
                    h-full
                    w-11
                    items-center
                    justify-center
                    text-sm
                    text-base-content/50
                    transition-colors
                    hover:text-base-content
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  +
                </button>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            {!isOutOfStock &&
              selectedSize && (
                <div className="mt-6 flex items-center justify-between border-t border-base-content/10 pt-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-base-content/40">
                    Total
                  </span>

                  <span className="text-sm font-medium">
                    Rp{" "}
                    {totalPrice.toLocaleString(
                      "id-ID",
                    )}
                  </span>
                </div>
              )}

            {/* ADD TO BAG */}
            <button
              type="button"
              onClick={handleAddToBag}
              disabled={
                isOutOfStock ||
                whatsappLoading ||
                !whatsappUrl ||
                !selectedSize
              }
              className="
                mt-6
                w-full
                bg-base-content
                py-4
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-base-100
                transition-opacity
                hover:opacity-80
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              {isOutOfStock
                ? "Out of Stock"
                : whatsappLoading
                  ? "Loading..."
                  : !whatsappUrl
                    ? "Unavailable"
                    : !selectedSize
                      ? "Select Size"
                      : "Add to Bag"}
            </button>

            {/* WHATSAPP NOT CONFIGURED */}
            {!whatsappLoading &&
              !whatsappUrl &&
              !isOutOfStock && (
                <p className="mt-3 text-center text-[9px] uppercase tracking-[0.15em] text-base-content/35">
                  Ordering is currently unavailable
                </p>
              )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;