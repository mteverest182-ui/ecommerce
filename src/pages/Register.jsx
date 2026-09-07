import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Registration akan dihubungkan ke backend nanti.
  };

  return (
    <main className="min-h-auto inset-0 bg-base-100 px-6 py-10 sm:px-10 lg:px-16 mt-11">
      <div className="mx-auto grid max-h-[60vh] max-w-6xl overflow-hidden lg:grid-cols-2">
        {/* Image */}
        <div className="relative hidden max-h-[60vh] overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury fashion collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 max-w-sm text-white">
            <p className="mb-2 text-[9px] uppercase tracking-[0.35em]">
              New Chapter
            </p>

            <h2 className="font-serif text-4xl leading-[0.95]">
              Discover your
              <br />
              signature style.
            </h2>
          </div>
        </div>

        {/* Form */}
        <div className="flex min-h-[50vh] items-center justify-center bg-base-100 px-6 py-8 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-sm">

            {/* Heading */}
            <div className="mb-6">
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-base-content/45">
                Join Us
              </p>

              <h1 className="font-serif text-4xl leading-none">
                Create account
              </h1>

              <p className="mt-3 text-xs leading-5 text-base-content/55">
                Create your account and enjoy a more personal
                shopping experience.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-base-content/55"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    h-9
                    w-full
                    border-0
                    border-b
                    border-base-content/20
                    bg-transparent
                    px-0
                    text-xs
                    outline-none
                    transition-colors
                    placeholder:text-base-content/30
                    focus:border-primary
                  "
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-base-content/55"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    h-9
                    w-full
                    border-0
                    border-b
                    border-base-content/20
                    bg-transparent
                    px-0
                    text-xs
                    outline-none
                    transition-colors
                    placeholder:text-base-content/30
                    focus:border-primary
                  "
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-base-content/55"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="
                    h-9
                    w-full
                    border-0
                    border-b
                    border-base-content/20
                    bg-transparent
                    px-0
                    text-xs
                    outline-none
                    transition-colors
                    placeholder:text-base-content/30
                    focus:border-primary
                  "
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-base-content/55"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="
                    h-9
                    w-full
                    border-0
                    border-b
                    border-base-content/20
                    bg-transparent
                    px-0
                    text-xs
                    outline-none
                    transition-colors
                    placeholder:text-base-content/30
                    focus:border-primary
                  "
                  required
                />
              </div>

              {/* Submit */}
              <Link  to="/shop">
              <button
                type="submit"
                className="
                  mt-2
                  h-10
                  w-full
                  bg-neutral
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-content
                  transition-all
                  duration-300
                  hover:bg-primary
                "
              >
                Create Account
              </button>
              </Link>
            </form>

            {/* Login */}
            <div className="mt-5 border-t border-base-content/10 pt-4 text-center">
              <p className="text-[11px] text-base-content/50">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-1.5 inline-block text-[9px] uppercase tracking-[0.2em] transition-colors hover:text-primary"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;