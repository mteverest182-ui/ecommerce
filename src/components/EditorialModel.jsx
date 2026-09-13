import { Link } from "react-router-dom";

const EditorialModel = ({
  mobileFeatured1,
  mobileFeatured2,
}) => {
  const getImage = (banner) => {
    if (!banner?.images?.length) {
      return null;
    }

    return (
      banner.images.find(
        (image) => image.device === "MOBILE",
      ) ||
      banner.images.find(
        (image) => image.device === "DESKTOP",
      ) ||
      banner.images[0]
    );
  };

  const editorials = [
    mobileFeatured1,
    mobileFeatured2,
  ]
    .filter(Boolean)
    .map((banner) => {
      const image = getImage(banner);

      return {
        id: banner.id,
        image: image?.imageUrl,
        label: banner.title,
        linkUrl:
          banner.linkUrl || "/collections",
      };
    })
    .filter(
      (editorial) => editorial.image,
    );

  if (!editorials.length) {
    return null;
  }

  return (
    <section className="bg-base-100 py-8 w-full lg:hidden md:hidden">
      <div >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
          {editorials.map((editorial) => (
            <Link
              key={editorial.id}
              to={editorial.linkUrl}
              className="group block"
            >
              <div className="relative aspect-[5/5] overflow-hidden bg-base-200">
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
                    group-hover:scale-[1.035]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500
                    group-hover:bg-black/10
                  "
                />
              </div>

              <div className="mt-4 text-center">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-base-content
                  "
                >
                  {editorial.label}
                </p>

                <p
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-base-content/50
                    transition-colors
                    duration-300
                    group-hover:text-base-content
                  "
                >
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialModel;