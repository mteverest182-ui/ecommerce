import { Link } from "react-router-dom";

const CollectionSection = ({ banners = [] }) => {
  const leftBanner = banners.find(
    (banner) =>
      banner.slotKey === "SECONDARY_LEFT" &&
      banner.status === "ACTIVE",
  );

  const rightBanner = banners.find(
    (banner) =>
      banner.slotKey === "SECONDARY_RIGHT" &&
      banner.status === "ACTIVE",
  );

  const secondaryBanners = [
    {
      banner: leftBanner,
      gender: "MEN",
    },
    {
      banner: rightBanner,
      gender: "WOMEN",
    },
  ].filter(({ banner }) => Boolean(banner));

  if (secondaryBanners.length === 0) {
    return null;
  }

  return (
    <section
      className="
        bg-base-100
        py-15
        md:py-20
        lg:py-24
        xl:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          md:px-8
          lg:px-10
        "
      >
        {/* HEADER */}
        <div
          className="
            mb-8
            text-center
            md:mb-20
            lg:mb-16
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-primary
              md:text-[10px]
              lg:text-xs
            "
          >
            Collection
          </p>

          <h2
            className="
              mt-3
              font-[Philosopher]
              text-2xl
              leading-none
              tracking-tight
              md:mt-4
              md:text-5xl
              lg:text-6xl
            "
          >
            Explore our collections
          </h2>
        </div>

        {/* COLLECTION CARDS */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:gap-6
            lg:gap-8
          "
        >
          {secondaryBanners.map(({ banner, gender }) => {
            const desktopImage = banner.images?.find(
              (image) => image.device === "DESKTOP",
            );

            const mobileImage = banner.images?.find(
              (image) => image.device === "MOBILE",
            );

            if (!desktopImage && !mobileImage) {
              return null;
            }

            return (
              <Link
                key={banner.id}
                to={`/shop?gender=${gender}`}
                className="group block"
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    aspect-[4/5]
                    w-full
                    overflow-hidden
                    bg-base-200
                  "
                >
                  <picture>
                    {mobileImage && (
                      <source
                        media="(max-width: 767px)"
                        srcSet={mobileImage.imageUrl}
                      />
                    )}

                    <img
                      src={
                        desktopImage?.imageUrl ||
                        mobileImage?.imageUrl
                      }
                      alt={banner.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  </picture>
                </div>

                {/* TEXT */}
                <div
                  className="
                    px-1
                    pt-4
                    text-center
                    md:pt-5
                    lg:pt-6
                  "
                >
                  <h3
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      transition-opacity
                      duration-300
                      group-hover:opacity-50
                      md:text-[10px]
                      md:tracking-[0.25em]
                      lg:text-[11px]
                    "
                  >
                    {banner.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;