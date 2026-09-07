import { useEffect, useState } from "react";

import HeroBanner from "./src/components/HeroBanner";
import CollectionSection from "./src/components/CollectionSection";
import ProductSection from "./src/components/ProductSection";
import BrandStatement from "./src/components/BrandStateMent";
import EditorialModel from "./src/components/EditorialModel";
import MarketCard from "./src/components/MarketCard";

import { getBanners } from "./src/api/banner.api";

import { useHomeProducts } from "./src/datahook/products";

const Home = () => {
  const {
    trendingProducts,
    topPicks,
    loading,
    error,
  } = useHomeProducts();

  // =========================
  // BANNER STATE
  // ========================= 

  const [banners, setBanners] = useState([]);
  const [loadingBanners, setLoadingBanners] = useState(true);
  const [bannerError, setBannerError] = useState("");

  // =========================
  // FETCH BANNERS
  // =========================

  useEffect(() => {
  const fetchBanners = async () => {
    try {
      setLoadingBanners(true);
      setBannerError("");

      const response = await getBanners({
        status: "ACTIVE",
      });

      console.log("BANNER RESPONSE:", response);

      const bannerData = Array.isArray(response)
        ? response
        : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.data?.data)
            ? response.data.data
            : [];

      console.log("BANNER DATA:", bannerData);

      console.log(
        "BANNER SLOTS:",
        bannerData.map((banner) => ({
          id: banner.id,
          title: banner.title,
          slotKey: banner.slotKey,
          status: banner.status,
          images: banner.images,
        })),
      );

      setBanners(bannerData);

      // DEBUG — gunakan bannerData, bukan banners
      console.log(
        "ALL BANNERS:",
        bannerData,
      );

      console.log(
        "MOBILE FEATURED 1:",
        bannerData.find(
          (banner) =>
            banner.slotKey ===
            "MOBILE_FEATURED_1",
        ),
      );

      console.log(
        "MOBILE FEATURED 2:",
        bannerData.find(
          (banner) =>
            banner.slotKey ===
            "MOBILE_FEATURED_2",
        ),
      );
    } catch (error) {
      console.error(
        "Failed to fetch banners:",
        error,
      );

      setBannerError(
        error.response?.data?.message ||
          error.message ||
          "Gagal memuat banner",
      );
    } finally {
      setLoadingBanners(false);
    }
  };

  fetchBanners();
}, []);

  // =========================
  // FIND HERO
  // =========================

  const heroBanner = banners.find(
    (banner) =>
      banner.slotKey === "HERO" &&
      banner.status === "ACTIVE",
  );

  console.log("HERO BANNER:", heroBanner);
  console.log("HERO IMAGES:", heroBanner?.images);

const mobileFeatured1 =
  banners.find(
    (banner) =>
      banner.slotKey ===
      "MOBILE_FEATURED_1",
  );

const mobileFeatured2 =
  banners.find(
    (banner) =>
      banner.slotKey ===
      "MOBILE_FEATURED_2",
  );  

  return (
    <main className="bg-base-100">

      {/* =========================
          HERO
      ========================= */}

      {loadingBanners ? (
        <section className="min-h-[70vh] animate-pulse bg-base-200" />
      ) : heroBanner ? (
        <HeroBanner banner={heroBanner} />
      ) : (
        <section className="flex min-h-[50vh] items-center justify-center bg-base-200">
          <div className="text-center">
            <p className="text-sm text-base-content/50">
              Hero banner belum tersedia
            </p>

            {bannerError && (
              <p className="mt-2 text-xs text-error">
                {bannerError}
              </p>
            )}
          </div>
        </section>
      )}

      {/* =========================
          COLLECTION
      ========================= */}

      <CollectionSection banners={banners} />

      {/* =========================
          EDITORIAL
      ========================= */}
      

      <EditorialModel mobileFeatured1={mobileFeatured1} mobileFeatured2={mobileFeatured2} />

      

      {/* =========================
          PRODUCTS
      ========================= */}

      {loading && (
        <section className="py-20">
          <div className="flex justify-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40">
              Loading
            </p>
          </div>
        </section>
      )}

      {!loading && error && (
        <section className="py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40">
            Unable to load products
          </p>
        </section>
      )}

      {!loading && !error && (
        <>
          {trendingProducts.length > 0 && (
            <ProductSection
              eyebrow="Trending"
              title="Trending Now"
              products={trendingProducts}
              viewAllHref="/shop"
            />
          )}

          {topPicks.length > 0 && (
            <ProductSection
              eyebrow="Curated for you"
              title="Top Picks For You"
              products={topPicks}
              viewAllHref="/shop"
            />
          )}
        </>
      )}

      {/* =========================
          BRAND
      ========================= */}

      <BrandStatement />

      {/* =========================
          MARKET
      ========================= */}

      <MarketCard banners={banners} />

    </main>
  );
};

export default Home;