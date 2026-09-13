import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [scrolled, setScrolled] =
    useState(false);


  const closeMobileMenu = () => {
    setMobileOpen(false);
  };


  const closeSearch = () => {
    setSearchOpen(false);
  };


  const openSearch = () => {
    setSearchOpen(true);
  };


  const handleSearch = (event) => {
    event.preventDefault();

    const keyword =
      search.trim();


    if (!keyword) {
      navigate("/shop");

      setSearchOpen(false);

      return;
    }


    navigate(
      `/shop?search=${encodeURIComponent(
        keyword,
      )}`,
    );

    setSearchOpen(false);
    setMobileOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [mobileOpen]);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key !== "Escape"
      ) {
        return;
      }


      closeSearch();
      closeMobileMenu();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  const transparent =
    !scrolled &&
    !mobileOpen &&
    !searchOpen;

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


        <button
          type="button"
          onClick={() =>
            setMobileOpen(
              (prev) => !prev,
            )
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
          aria-expanded={
            mobileOpen
          }
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

        <Link
          to="/"
          onClick={() => {
            closeMobileMenu();
            closeSearch();
          }}
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


        <nav
          className="
            ml-16
            hidden
            items-center
            gap-8

            lg:flex
          "
        >

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

        <div
          className="
            flex
            items-center
          "
        >

      {searchOpen ? (
        <form
          onSubmit={handleSearch}
          className="
            hidden
            items-center
            lg:flex
          "
        >
          <div
            className="
              flex
              h-10
              w-52
              items-center
              gap-2

              border-b
              border-current/30

              transition-all
              duration-300

              xl:w-64
            "
          >
            <Search
              className="
                h-[17px]
                w-[17px]
                shrink-0
                opacity-60
              "
              strokeWidth={1.4}
            />

            <input
              autoFocus
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search product..."
              className="
                min-w-0
                flex-1

                bg-transparent

                text-xs
                tracking-[0.08em]

                border-none
                outline-none

                focus:border-none
                focus:outline-none
                focus:ring-0

                placeholder:text-current/40
              "
              aria-label="Search product"
            />

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSearchOpen(false);
              }}
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center

                opacity-50

                transition-opacity
                hover:opacity-100
              "
              aria-label="Close search"
            >
              <X
                className="
                  h-[16px]
                  w-[16px]
                "
                strokeWidth={1.4}
              />
            </button>
          </div>
        </form>
      ) : (

            <button
              type="button"
              onClick={openSearch}
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
                className="
                  h-[18px]
                  w-[18px]
                "
                strokeWidth={1.4}
              />
            </button>
          )}


          <Link
            to="/login"
            onClick={() => {
              closeSearch();
              closeMobileMenu();
            }}
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
              className="
                h-[18px]
                w-[18px]
              "
              strokeWidth={1.4}
            />
          </Link>

          <Link
            to="/shop"
            onClick={() => {
              closeSearch();
              closeMobileMenu();
            }}
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
              className="
                h-[18px]
                w-[18px]
              "
              strokeWidth={1.4}
            />
          </Link>
        </div>
      </div>

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
        <div
          className="
            mx-auto
            w-[90%]
          "
        >

          <nav className="py-3">

            <Link
              to="/shop"
              onClick={() =>
                closeMobileMenu()
              }
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


            <Link
              to="/collection"
              onClick={() =>
                closeMobileMenu()
              }
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


            <Link
              to="/about"
              onClick={() =>
                closeMobileMenu()
              }
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


          <div
            className="
              border-t
              border-base-content/10

              py-5
            "
          >
            <form
              onSubmit={handleSearch}
              className="
                flex
                items-center
                gap-3
              "
            >
              <Search
                className="
                  h-4
                  w-4
                  shrink-0
                  text-base-content/50
                "
                strokeWidth={1.4}
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder="Search product..."
                className="
                  min-w-0
                  flex-1

                  bg-transparent

                  py-3

                  text-sm

                  outline-none

                  focus:putline

                  placeholder:text-base-content/35
                "
                aria-label="Search product"
              />


              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    text-base-content/50

                    hover:text-base-content
                  "
                  aria-label="Clear search"
                >
                  <X
                    className="
                      h-4
                      w-4
                    "
                    strokeWidth={1.4}
                  />
                </button>
              )}

              <button
                type="submit"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]

                  text-base-content/50

                  transition-colors

                  hover:text-base-content
                "
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

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

          transition-opacity
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