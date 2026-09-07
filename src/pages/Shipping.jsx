import { Link } from "react-router-dom";

const Shipping = () => {
  const shippingOptions = [
    {
      title: "Standard Shipping",
      description: "Reliable delivery for your everyday orders.",
      time: "3–7 Business Days",
    },
    {
      title: "Express Shipping",
      description: "A faster option when you need your order sooner.",
      time: "1–3 Business Days",
    },
    {
      title: "International Shipping",
      description: "Selected products can be delivered internationally.",
      time: "7–14 Business Days",
    },
  ];

  return (
    <main className="bg-base-100 text-base-content">
      {/* HEADER */}
      <section className="border-b border-base-content/10">
        <div className="mx-auto w-[90%] py-16 md:w-[80%] md:py-24 lg:py-28">
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary md:text-xs">
            Customer Care
          </p>

          <h1
            className="
              mt-4
              font-serif
              text-4xl
              leading-none
              tracking-tight
              md:text-6xl
              lg:text-7xl
            "
          >
            Shipping
          </h1>

          <p
            className="
              mt-6
              max-w-md
              text-xs
              leading-6
              text-base-content/55
              md:text-sm
            "
          >
            Everything you need to know about delivery, processing times and
            shipping options.
          </p>
        </div>
      </section>

      {/* SHIPPING OPTIONS */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="mx-auto w-[90%] md:w-[80%]">
          <div className="mb-8 border-b border-base-content/10 pb-5 md:mb-10">
            <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/45">
              Delivery Options
            </p>
          </div>

          <div className="divide-y divide-base-content/10 border-y border-base-content/10">
            {shippingOptions.map((option) => (
              <div
                key={option.title}
                className="
                  grid
                  gap-5
                  py-7

                  md:grid-cols-[1fr_1fr_auto]
                  md:items-center
                  md:gap-10
                  md:py-9
                "
              >
                {/* TITLE */}
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-[0.2em] md:text-sm">
                    {option.title}
                  </h2>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-md text-xs leading-6 text-base-content/50">
                  {option.description}
                </p>

                {/* TIME */}
                <p className="text-[9px] uppercase tracking-[0.18em] text-base-content/50 md:text-right">
                  {option.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATION */}
      <section className="border-t border-base-content/10">
        <div className="mx-auto grid w-[90%] gap-12 py-14 md:w-[80%] md:grid-cols-2 md:gap-16 md:py-20">
          {/* PROCESSING */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-primary">
              Processing
            </p>

            <h2 className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
              When will my order ship?
            </h2>

            <p className="mt-4 max-w-md text-xs leading-6 text-base-content/55">
              Orders are carefully prepared before being handed to our delivery
              partners. Processing times may vary depending on product
              availability and order volume.
            </p>
          </div>

          {/* TRACKING */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-primary">
              Tracking
            </p>

            <h2 className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
              Follow your order.
            </h2>

            <p className="mt-4 max-w-md text-xs leading-6 text-base-content/55">
              Once your order has been shipped, tracking information will be
              provided so you can follow its journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-base-content/10">
        <div className="mx-auto flex w-[90%] flex-col items-center py-14 text-center md:w-[80%] md:py-20">
          <p className="text-[9px] uppercase tracking-[0.3em] text-primary">
            Need Help?
          </p>

          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            Have a question about your order?
          </h2>

          <Link
            to="/contact"
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
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Shipping;
