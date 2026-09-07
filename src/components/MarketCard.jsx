import { Link } from "react-router-dom";

const PROMO_SLOTS = [
  {
    slotKey: "PROMO_1",
    fallbackLabel: "The Collection",
  },
  {
    slotKey: "PROMO_2",
    fallbackLabel: "The Campaign",
  },
  {
    slotKey: "PROMO_3",
    fallbackLabel: "The Details",
  },
  {
    slotKey: "PROMO_4",
    fallbackLabel: "The World",
  },
];

const MarketCard = ({ banners = [] }) => {
  const editorials = PROMO_SLOTS.map(
    ({ slotKey, fallbackLabel }) => {
      const banner = banners.find(
        (item) =>
          item.slotKey === slotKey &&
          item.status === "ACTIVE",
      );

      if (!banner) {
        return null;
      }

      const image =
        banner.images?.find(
          (item) =>
            item.device === "DESKTOP",
        ) ||
        banner.images?.find(
          (item) =>
            item.device === "MOBILE",
        ) ||
        banner.images?.[0];

      if (!image?.imageUrl) {
        return null;
      }

      return {
        id: banner.id,
        image: image.imageUrl,
        label:
          banner.title ||
          fallbackLabel,
        href:
          banner.linkUrl ||
          "/collections",
      };
    },
  ).filter(Boolean);

  if (editorials.length === 0) {
    return null;
  }

  return (
    <section
      className="
        bg-base-100
        py-14
        md:py-20
        lg:flex
        lg:items-center
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          ml-1
          md:w-[80%]
          lg:w-[80%]
          lg:mx-auto
        "
      >
        <div
          className="
            flex
            gap-1
            overflow-x-auto
            scrollbar-none

            md:grid
            md:grid-cols-4
            md:gap-1
            md:overflow-visible
          "
        >
          {editorials.map((editorial) => (
            <Link
              key={editorial.id}
              to={editorial.href}
              className="
                group
                block
                w-[48.5vw]
                shrink-0
                focus-visible:outline-2
                focus-visible:outline-offset-4

                sm:w-[30vw]

                md:w-auto
                md:shrink
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[5/5]
                  overflow-hidden
                  bg-base-200

                  md:aspect-[7/4]
                "
              >
                <img
                  src={editorial.image}
                  alt={editorial.label}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-out

                    md:group-hover:scale-[1.035]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500

                    md:group-hover:bg-black/10
                  "
                />
              </div>

              {/* LABEL */}
              <div
                className="
                  mt-3
                  text-center
                  md:mt-3
                  md:text-left
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    text-base-content
                  "
                >
                  {editorial.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketCard;