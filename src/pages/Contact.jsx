import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="bg-base-100">
      <section className="border-b border-base-content/10">
        <div
          className="
            mx-auto
            w-[90%]
            py-16

            md:w-[80%]
            md:py-20

            lg:py-28
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-primary

              md:text-[10px]
            "
          >
            Contact
          </p>

          <h1
            className="
              mt-4
              max-w-3xl
              font-serif
              text-5xl
              leading-[0.95]
              tracking-tight

              md:text-6xl

              lg:text-8xl
            "
          >
            We'd love to hear from you.
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-base-content/55

              md:text-base
            "
          >
            Whether you have a question about an order, our collections, or
            simply want to get in touch, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28">
        <div
          className="
            mx-auto
            grid
            w-[90%]
            grid-cols-1
            gap-14

            md:w-[80%]
            md:grid-cols-2
            md:gap-16

            lg:gap-24
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              Get in touch
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                leading-tight

                md:text-4xl

                lg:text-5xl
              "
            >
              Let's start a conversation.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-base-content/55
              "
            >
              Our team is available to assist you with any questions or
              requests.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/40">
                  Email
                </p>

                <p className="mt-2 text-sm">hello@yourbrand.com</p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/40">
                  Hours
                </p>

                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  Monday — Friday
                  <br />
                  09:00 — 18:00
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-base-content/40">
                  Location
                </p>

                <p className="mt-2 text-sm leading-6 text-base-content/65">
                  Phnom Penh
                  <br />
                  Cambodia
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-base-content/50
                "
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="
                  mt-3
                  w-full
                  border-b
                  border-base-content/20
                  bg-transparent
                  py-3
                  text-sm
                  outline-none
                  transition-colors
                  focus:border-base-content
                "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-base-content/50
                "
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="
                  mt-3
                  w-full
                  border-b
                  border-base-content/20
                  bg-transparent
                  py-3
                  text-sm
                  outline-none
                  transition-colors
                  focus:border-base-content
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-base-content/50
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="
                  mt-3
                  w-full
                  resize-none
                  border-b
                  border-base-content/20
                  bg-transparent
                  py-3
                  text-sm
                  leading-6
                  outline-none
                  transition-colors
                  focus:border-base-content
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-2
                border-b
                border-base-content/50
                pb-2
                text-[9px]
                uppercase
                tracking-[0.25em]
                transition-colors
                hover:border-primary
                hover:text-primary
              "
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <section className="border-y border-base-content/10">
        <div
          className="
            mx-auto
            grid
            w-[90%]
            grid-cols-1

            md:w-[80%]
            md:grid-cols-3
          "
        >
          <div className="border-b py-8 text-center md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.22em]">Shipping</p>

            <p className="mt-2 text-[10px] text-base-content/45">
              Complimentary delivery on selected orders.
            </p>
          </div>

          <div className="border-b py-8 text-center md:border-b-0 md:border-r">
            <p className="text-[9px] uppercase tracking-[0.22em]">Returns</p>

            <p className="mt-2 text-[10px] text-base-content/45">
              Easy returns within 14 days.
            </p>
          </div>

          <div className="py-8 text-center">
            <p className="text-[9px] uppercase tracking-[0.22em]">Support</p>

            <p className="mt-2 text-[10px] text-base-content/45">
              We're here when you need us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
