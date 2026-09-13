import { Link } from "react-router-dom";

const CollectionCard = ({ image, title, href = "/collections" }) => {
  return (
    <Link
      to={href}
      className="
        group
        block
      "
    >
      <div
        className="
          relative
          aspect-[4/5]
          w-full
          overflow-hidden
          bg-base-200
        "
      >
        <img
          src={image}
          alt={title}
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
      </div>

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
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CollectionCard;
