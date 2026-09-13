import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: FaWhatsapp,
    },
    {
      name: "Pinterest",
      href: "#",
      icon: FaPinterestP,
    },
    {
      name: "TikTok",
      href: "#",
      icon: FaTiktok,
    },
  ];

  return (
    <footer className="border-t border-base-content/10 bg-base-100">
      <div className="mx-auto w-[90%] md:w-[95%] lg:w-[80%]">
        <div
          className="
            grid
            gap-10
            py-12
            sm:gap-12 sm:py-14
            md:grid-cols-4 md:gap-8 md:py-16
          "
        >
          <div className="md:col-span-1">
            <Link
              to="/"
              className="
                inline-block
                font-[Philosopher]
                text-xl
                tracking-[0.18em]
                transition-opacity
                hover:opacity-70
                sm:text-2xl
              "
            >
              BELLANOCHE
            </Link>

            <p
              className="
                mt-4
                max-w-xs
                text-[11px]
                leading-6
                text-base-content/55
                sm:mt-5
              "
            >
              Designed with intention.
              <br />
              Made to be seen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-base-content/50
                  sm:mb-5
                "
              >
                Shop
              </p>

              <nav className="flex flex-col gap-3">
                <Link
                  to="/collections"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  Collections
                </Link>

                <Link
                  to="/new-arrivals"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  New Arrivals
                </Link>

                <Link
                  to="/bestsellers"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  Best Sellers
                </Link>
              </nav>
            </div>

            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-base-content/50
                  sm:mb-5
                "
              >
                Help
              </p>

              <nav className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  Contact
                </Link>

                <Link
                  to="/shipping"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  Shipping
                </Link>

                <Link
                  to="/returns"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  Returns
                </Link>

                <Link
                  to="/faq"
                  className="
                    w-fit
                    text-[11px]
                    transition-colors
                    hover:text-primary
                  "
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>

          <div>
            <p
              className="
                mb-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-base-content/50
                sm:mb-5
              "
            >
              Follow
            </p>

            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    text-base-content/50
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-base-content/5
                    hover:text-primary
                    sm:h-8
                    sm:w-8
                  "
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-base-content/10
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-base-content/40
              sm:text-[9px]
              sm:tracking-[0.2em]
            "
          >
            © 2026 BELLANOCHE. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy"
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-base-content/40
                transition-opacity
                hover:opacity-70
                sm:text-[9px]
                sm:tracking-[0.2em]
              "
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-base-content/40
                transition-opacity
                hover:opacity-70
                sm:text-[9px]
                sm:tracking-[0.2em]
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
