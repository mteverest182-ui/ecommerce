import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getBanners } from "../api/banner.api";

const PROMO_SLOTS = [
  "PROMO_1",
  "PROMO_2",
  "PROMO_3",
  "PROMO_4",
];

const getBannerImage = (banner) => {
  if (!banner?.images?.length) {
    return null;
  }

  return (
    banner.images.find(
      (image) => image.device === "DESKTOP",
    ) ||
    banner.images.find(
      (image) => image.device === "MOBILE",
    ) ||
    banner.images[0]
  );
};

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);

        const response = await getBanners({
          status: "ACTIVE",
        });

        const bannerData = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : [];

        const promoCollections = PROMO_SLOTS.map(
          (slotKey) => {
            const banner = bannerData.find(
              (item) =>
                item.slotKey === slotKey &&
                item.status === "ACTIVE",
            );

            if (!banner) {
              return null;
            }

            const image =
              getBannerImage(banner);

            if (!image?.imageUrl) {
              return null;
            }

            return {
              id: banner.id,
              slotKey: banner.slotKey,
              title: banner.title,
              description:
                banner.description || "",
              image: image.imageUrl,
              linkUrl:
                banner.linkUrl || "/shop",
            };
          },
        ).filter(Boolean);

        setCollections(promoCollections);
      } catch (error) {
        console.error(
          "Failed to fetch collection banners:",
          error,
        );

        setCollections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <main className="bg-base-100">
      
      <section className="px-5 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/50">
            The Collection
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Explore our collections.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-base-content/60">
            Discover a considered selection of pieces,
            designed with intention and made to become
            part of your everyday.
          </p>
        </div>
      </section>

      
      <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between border-b border-base-300 pb-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/50">
              Collections
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/40">
              {loading
                ? "Loading"
                : `${collections.length} Collections`}
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-5 md:gap-y-14">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="animate-pulse"
                >
                  <div className="aspect-[4/5] bg-base-200" />

                  <div className="mt-5 h-4 w-1/3 bg-base-200" />

                  <div className="mt-3 h-3 w-2/3 bg-base-200" />
                </div>
              ))}
            </div>
          ) : collections.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-5 md:gap-y-14">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  to={collection.linkUrl}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-base-200">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>

                  <div className="mt-5">
                    <h2 className="text-sm font-medium uppercase tracking-[0.16em]">
                      {collection.title}
                    </h2>

                    {collection.description && (
                      <p className="mt-2 max-w-md text-xs leading-6 text-base-content/50">
                        {collection.description}
                      </p>
                    )}

                    <span className="mt-4 inline-block text-[9px] uppercase tracking-[0.2em] text-base-content/50 transition-colors duration-300 group-hover:text-base-content">
                      Explore
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center border border-dashed border-base-300">
              <p className="text-xs uppercase tracking-[0.2em] text-base-content/40">
                Collection belum tersedia
              </p>
            </div>
          )}
        </div>
      </section>

      
      <section className="border-t border-base-300 px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40">
            Discover the full collection.
          </p>

          <Link
            to="/shop"
            className="mt-5 inline-block text-sm uppercase tracking-[0.18em] underline underline-offset-8 transition-opacity hover:opacity-60"
          >
            Shop All
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Collection;
