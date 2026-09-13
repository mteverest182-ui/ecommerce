import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
  if (!products.length) {
    return (
      <div className="py-10 text-center">
        <p className="text-sm text-base-content/50">No products available.</p>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        gap-1xl
        overflow-x-auto
        overscroll-x-contain
        pb-2
        sm:gap-5

        md:grid
        md:grid-cols-3
        md:gap-x-6
        md:gap-y-16
        md:overflow-x-auto
        md:overscroll-x-contain
        md:pb-0

        lg:grid-cols-4
        lg:gap-x-4
        lg:gap-y-16

        [&::-webkit-scrollbar]:hidden
        [scrollbar-width:none]
      "
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="
            w-[56%]
            shrink-0
            snap-start
            ml-2

            sm:w-[48%]

            md:w-auto
            md:shrink
          "
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
