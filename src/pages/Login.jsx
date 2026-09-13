import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <main className="min-h-auto bg-base-100 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-h-[54vh] max-w-6xl overflow-hidden lg:grid-cols-2">
        <div className="relative hidden max-h-[48vh] overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 max-w-sm text-white">
            <p className="mb-2 text-[9px] uppercase tracking-[0.35em]">
              The Collection
            </p>
            <h2 className="font-serif text-4xl leading-[0.95]">
              Refined pieces.
              <br />
              Timeless style.
            </h2>
          </div>
        </div>

        <div className="flex min-h-[50vh] items-center justify-center bg-base-100 px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-sm">

            <div className="mb-7">
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-base-content/45">
                Welcome Back
              </p>

              <h1 className="font-serif text-4xl leading-none">
                Sign in
              </h1>

              <p className="mt-3 text-xs leading-5 text-base-content/55">
                Sign in to access your account and continue your
                shopping journey.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    h-10
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
                />
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[9px] uppercase tracking-[0.2em] text-base-content/55"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-[9px] uppercase tracking-[0.12em] text-base-content/40 transition-colors hover:text-base-content"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="
                    h-10
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

              <div>
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
                Login
                </button>
              </div>
            </form>

            <div className="mt-6 border-t border-base-content/10 pt-5 text-center">
              <p className="text-[11px] text-base-content/50">
                Don't have an account?
              </p>

              <div
                className="mb-1.5 inline-block text-[9px] uppercase tracking-[0.2em] transition-colors hover:text-primary"
              >
                Create an account
              </div>
            </div>

            <div className="mt-5 text-center">
              <div
                className="text-[8px] uppercase tracking-[0.25em] text-base-content/35 transition-colors hover:text-base-content"
              >
                Back to shop
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;