import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";

const ProductSection = ({
  eyebrow,
  title,
  products = [],
  viewAllHref = "/shop",
  viewAllText = "View All",
}) => {
  return (
    <section className="bg-base-100 py-10 md:py-10 lg:py-10">
      {/* HEADER */}
      <div className="mx-3 w-[95%] md:w-[80%] md:mx-auto lg:w-[80%] lg:mx-auto">
        <div className="mb-5 flex items-end justify-between gap-6 md:mb-5">
          <div>
            {eyebrow && (
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-primary
                  md:text-xs
                  md:text-[10px]
                  lg:text-[12px]
                  lg:mb-5
                "
              >
                {eyebrow}
              </p>
            )}

            <h2
              className="
                mt-2
                font-[Philosopher]
                text-[25px]
                font-medium
                leading-none
                tracking-tight
                md:mt-2
                md:text-[20px]
                lg:text-[30px]
              "
            >
              {title}
            </h2>
          </div>

          <Link
            to={viewAllHref}
            className="
              shrink-0
              border-b
              border-base-content/40
              pb-1
              text-[9px]
              uppercase
              tracking-[0.2em]
              transition-colors
              hover:border-primary
              hover:text-primary
              md:text-[10px]
            "
          >
            {viewAllText}
          </Link>
        </div>
      </div>

      {/* PRODUCT RAIL */}
      <div
        className="
          w-screen
          overflow-hidden

          md:mx-auto
          md:w-[80%]
          md:overflow-visible
        "
      >
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default ProductSection;
