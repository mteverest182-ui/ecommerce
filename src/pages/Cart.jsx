import { Link } from "react-router-dom";

const Cart = () => {
  // TEMPORARY DATA
  // Nanti diganti dengan data dari cart state / API
  const cartItems = [
    {
      id: 1,
      name: "Signature Essential",
      category: "New Collection",
      price: 1250000,
      quantity: 1,
      image: "/models/model-1.jpg",
    },
    {
      id: 2,
      name: "Essential Form",
      category: "Signature Collection",
      price: 950000,
      quantity: 1,
      image: "/models/model-2.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="bg-base-100 text-base-content">
      {/* HEADER */}
      <section className="border-b border-base-content/10">
        <div className="mx-auto w-[90%] py-12 md:w-[80%] md:py-20 lg:py-24">
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">
            Your Selection
          </p>

          <div className="mt-3 flex items-end justify-between gap-6">
            <h1
              className="
                font-serif
                text-4xl
                leading-none
                tracking-tight
                md:text-5xl
                lg:text-6xl
              "
            >
              Shopping Bag
            </h1>

            <p className="pb-1 text-[9px] uppercase tracking-[0.2em] text-base-content/40">
              {cartItems.length} Items
            </p>
          </div>
        </div>
      </section>

      {/* CART */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-[90%] md:w-[80%]">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
              {/* ITEMS */}
              <div>
                <div className="mb-6 hidden border-b border-base-content/10 pb-4 md:grid md:grid-cols-[1fr_120px_120px] md:gap-6">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/40">
                    Product
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/40">
                    Quantity
                  </p>

                  <p className="text-right text-[9px] uppercase tracking-[0.22em] text-base-content/40">
                    Price
                  </p>
                </div>

                <div className="divide-y divide-base-content/10">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="
                        grid
                        grid-cols-[96px_1fr]
                        gap-5
                        py-6

                        md:grid-cols-[120px_1fr_120px_120px]
                        md:items-center
                        md:gap-6
                      "
                    >
                      {/* IMAGE */}
                      <Link
                        to={`/product/${item.id}`}
                        className="
                          aspect-[4/5]
                          overflow-hidden
                          bg-base-200
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                          "
                        />
                      </Link>

                      {/* INFO */}
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-base-content/40">
                          {item.category}
                        </p>

                        <Link
                          to={`/product/${item.id}`}
                          className="
                            mt-2
                            block
                            text-xs
                            font-medium
                            tracking-wide
                            transition-opacity
                            hover:opacity-50
                            md:text-sm
                          "
                        >
                          {item.name}
                        </Link>

                        {/* MOBILE PRICE */}
                        <p className="mt-2 text-xs text-base-content/60 md:hidden">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>

                        <button
                          type="button"
                          className="
                            mt-4
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-base-content/40
                            transition-colors
                            hover:text-primary
                          "
                        >
                          Remove
                        </button>
                      </div>

                      {/* QUANTITY */}
                      <div
                        className="
                          col-start-2
                          flex
                          items-center
                          gap-4

                          md:col-start-auto
                        "
                      >
                        <button
                          type="button"
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            border
                            border-base-content/15
                            text-xs
                            transition-colors
                            hover:border-base-content
                          "
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="text-xs">{item.quantity}</span>

                        <button
                          type="button"
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            border
                            border-base-content/15
                            text-xs
                            transition-colors
                            hover:border-base-content
                          "
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* PRICE */}
                      <p className="hidden text-right text-xs text-base-content/70 md:block">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUMMARY */}
              <aside className="lg:sticky lg:top-28 lg:h-fit">
                <div className="border-t border-base-content/10 pt-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/45">
                    Order Summary
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-base-content/55">
                        Subtotal
                      </span>

                      <span className="text-xs">
                        Rp {subtotal.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-base-content/55">
                        Shipping
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.15em]">
                        Complimentary
                      </span>
                    </div>
                  </div>

                  <div className="my-6 border-t border-base-content/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em]">
                      Total
                    </span>

                    <span className="text-sm">
                      Rp {subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="
                      mt-7
                      w-full
                      bg-base-content
                      py-4
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-base-100
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    Checkout →
                  </button>

                  <p className="mt-4 text-center text-[9px] leading-5 text-base-content/40">
                    Secure checkout. Shipping calculated at checkout.
                  </p>
                </div>
              </aside>
            </div>
          ) : (
            /* EMPTY CART */
            <div className="flex flex-col items-center py-20 text-center md:py-28">
              <p className="text-[9px] uppercase tracking-[0.3em] text-primary">
                Your Bag
              </p>

              <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-4xl">
                Your shopping bag is empty.
              </h2>

              <p className="mt-4 max-w-sm text-xs leading-6 text-base-content/50">
                Discover our latest collections and find something made for you.
              </p>

              <Link
                to="/shop"
                className="
                  mt-7
                  border-b
                  border-base-content/40
                  pb-1
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  hover:border-primary
                  hover:text-primary
                "
              >
                Continue Shopping →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="border-y border-base-content/10">
        <div className="mx-auto grid w-[90%] grid-cols-1 md:w-[80%] md:grid-cols-3">
          <div className="border-b border-base-content/10 py-7 text-center md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.2em]">
              Complimentary Shipping
            </p>
          </div>

          <div className="border-b border-base-content/10 py-7 text-center md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.2em]">
              Easy Returns
            </p>
          </div>

          <div className="py-7 text-center">
            <p className="text-[9px] uppercase tracking-[0.2em]">
              Secure Checkout
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
