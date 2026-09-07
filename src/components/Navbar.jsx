import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // =========================
  // CLOSE MOBILE MENU
  // =========================
  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // =========================
  // HANDLE SCROLL
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // LOCK BODY SCROLL
  // =========================
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // =========================
  // ESCAPE TO CLOSE MENU
  // =========================
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  // =========================
  // NAVBAR STATE
  // =========================
  const transparent =
    !scrolled && !mobileOpen;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50

        border-b

        transition-all
        duration-300
        ease-out

        ${
          transparent
            ? `
              border-transparent
              bg-transparent
              text-white
            `
            : `
              border-base-content/10
              bg-base-100
              text-base-content
              shadow-sm
            `
        }
      `}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-16
          w-[90%]
          items-center
          justify-between

          md:w-[80%]
        "
      >
        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-start
            lg:hidden
          "
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X
              className="
                h-[18px]
                w-[18px]
              "
              strokeWidth={1.4}
            />
          ) : (
            <Menu
              className="
                h-[18px]
                w-[18px]
              "
              strokeWidth={1.4}
            />
          )}
        </button>

        {/* ===================================================
            LOGO
        =================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              absolute
              left-1/2
              -translate-x-1/2

              font-[Philosopher]
              text-base
              font-medium
              tracking-[0.24em]

              transition-colors
              duration-150
              ease-out

              md:text-lg

              lg:static
              lg:translate-x-0
            "
          >
            BELLANOCHE
          </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="
            ml-16
            hidden
            items-center
            gap-8
            lg:flex
          "
        >
          {/* SHOP */}
          <Link
            to="/shop"
            className="
              group
              relative
              py-1

              text-xs
              uppercase
              tracking-[0.2em]
            "
          >
            Shop

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                origin-left
                scale-x-0
                bg-current

                transition-transform
                duration-300
                ease-out

                group-hover:scale-x-100
              "
            />
          </Link>

          {/* COLLECTION */}
          <Link
            to="/collection"
            className="
              group
              relative
              py-1

              text-xs
              uppercase
              tracking-[0.2em]
            "
          >
            Collection

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                origin-left
                scale-x-0
                bg-current

                transition-transform
                duration-300
                ease-out

                group-hover:scale-x-100
              "
            />
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className="
              group
              relative
              py-1

              text-xs
              uppercase
              tracking-[0.2em]
            "
          >
            About

            <span
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                origin-left
                scale-x-0
                bg-current

                transition-transform
                duration-300
                ease-out

                group-hover:scale-x-100
              "
            />
          </Link>
        </nav>

        {/* ===================================================
            ACTIONS
        =================================================== */}

        <div className="flex items-center">
          {/* SEARCH */}
          <button
    type="button"
    className="
      hidden
      h-11
      w-11
      items-center
      justify-center
      lg:flex
    "
    aria-label="Search"
  >
    <Search
      className="h-[18px] w-[18px]"
      strokeWidth={1.4}
    />
  </button>

  {/* ACCOUNT */}
  <Link
    to="/login"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
    "
    aria-label="Account"
  >
    <User
      className="h-[18px] w-[18px]"
      strokeWidth={1.4}
    />
  </Link>

  {/* SHOPPING BAG */}
  <Link
    to="/shop"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
    "
    aria-label="Shopping bag"
  >
    <ShoppingBag
      className="h-[18px] w-[18px]"
      strokeWidth={1.4}
    />
  </Link>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-full

          border-t
          border-base-content/10

          bg-base-100
          text-base-content

          transition-all
          duration-300
          ease-out

          lg:hidden

          ${
            mobileOpen
              ? `
                visible
                translate-y-0
                opacity-100
              `
              : `
                invisible
                -translate-y-2
                opacity-0
              `
          }
        `}
      >
        <div className="mx-auto w-[90%]">
          {/* ===============================================
              PRIMARY NAV
          =============================================== */}

          <nav className="py-3">
            {/* SHOP */}
            <Link
              to="/shop"
              onClick={closeMobileMenu}
              className="
                group
                relative
                block

                border-b
                border-base-content/10

                py-5

                text-sm
                uppercase
                tracking-[0.2em]
              "
            >
              Shop

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-base-content

                  transition-transform
                  duration-300
                  ease-out

                  group-hover:scale-x-100
                "
              />
            </Link>

            {/* COLLECTION */}
            <Link
              to="/collection"
              onClick={closeMobileMenu}
              className="
                group
                relative
                block

                border-b
                border-base-content/10

                py-5

                text-sm
                uppercase
                tracking-[0.2em]
              "
            >
              Collection

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-base-content

                  transition-transform
                  duration-300
                  ease-out

                  group-hover:scale-x-100
                "
              />
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                group
                relative
                block
                py-5

                text-sm
                uppercase
                tracking-[0.2em]
              "
            >
              About

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-base-content

                  transition-transform
                  duration-300
                  ease-out

                  group-hover:scale-x-100
                "
              />
            </Link>
          </nav>

          {/* ===============================================
              UTILITY
          =============================================== */}

          <div
            className="
              border-t
              border-base-content/10
              py-5
            "
          >
            {/* SEARCH */}
            <button
              type="button"
              className="
                flex
                w-full
                items-center
                gap-3
                py-3

                text-[10px]
                uppercase
                tracking-[0.2em]

                text-base-content/60

                transition-transform
                duration-300

                hover:text-base-content
              "
            >
              <Search
                className="h-4 w-4"
                strokeWidth={1.4}
              />

              Search
            </button>

            {/* ACCOUNT */}
            <Link
              to="/login"
              className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                lg:flex
              "
              aria-label="Account"
            >
              <User
                className="h-[18px] w-[18px]"
                strokeWidth={1.4}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <button
        type="button"
        aria-label="Close menu"
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          top-20
          z-[-1]

          bg-black/10

          transition-transform
          duration-300

          lg:hidden

          ${
            mobileOpen
              ? `
                pointer-events-auto
                opacity-100
              `
              : `
                pointer-events-none
                opacity-0
              `
          }
        `}
      />
    </header>
  );
};

export default Navbar;