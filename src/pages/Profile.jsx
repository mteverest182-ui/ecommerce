import { useState } from "react";

const Profile = () => {
  const [mode, setMode] = useState("login");

  const isLogin = mode === "login";

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="mx-auto flex min-h-screen w-[92%] items-center py-24 md:w-[80%] md:py-28">
        <div className="grid w-full grid-cols-1 overflow-hidden md:grid-cols-2">
              
          <div className="relative hidden min-h-[620px] overflow-hidden bg-base-200 md:block">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
              alt="Bellanoche"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/5" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white">
                Bellanoche
              </p>

              <p className="mt-2 max-w-[220px] font-serif text-2xl leading-tight text-white">
                Refined essentials for everyday living.
              </p>
            </div>
          </div>
              
          <div className="flex min-h-[620px] items-center justify-center border border-base-content/10 px-7 py-12 md:px-12 lg:px-16">
            <div className="w-full max-w-[390px]">

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-primary">
                  {isLogin ? "Welcome Back" : "Bellanoche"}
                </p>

                <h1 className="mt-3 font-serif text-4xl leading-none tracking-tight md:text-5xl">
                  {isLogin ? "Sign In" : "Create Account"}
                </h1>

                <p className="mt-4 max-w-xs text-xs leading-6 text-base-content/50">
                  {isLogin
                    ? "Sign in to access your account and continue your journey with Bellanoche."
                    : "Create your account and discover a more personal Bellanoche experience."}
                </p>
              </div>

              <form
                className="mt-10"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                {!isLogin && (
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] uppercase tracking-[0.2em] text-base-content/50"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="
                        mt-2
                        w-full
                        border-0
                        border-b
                        border-base-content/15
                        bg-transparent
                        px-0
                        py-3
                        text-sm
                        outline-none
                        placeholder:text-base-content/25
                        focus:border-base-content
                      "
                    />
                  </div>
                )}

                <div className={!isLogin ? "mt-6" : ""}>
                  <label
                    htmlFor="email"
                    className="text-[9px] uppercase tracking-[0.2em] text-base-content/50"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      mt-2
                      w-full
                      border-0
                      border-b
                      border-base-content/15
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      outline-none
                      placeholder:text-base-content/25
                      focus:border-base-content
                    "
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="text-[9px] uppercase tracking-[0.2em] text-base-content/50"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="
                      mt-2
                      w-full
                      border-0
                      border-b
                      border-base-content/15
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      outline-none
                      placeholder:text-base-content/25
                      focus:border-base-content
                    "
                  />
                </div>

                {!isLogin && (
                  <div className="mt-6">
                    <label
                      htmlFor="confirmPassword"
                      className="text-[9px] uppercase tracking-[0.2em] text-base-content/50"
                    >
                      Confirm Password
                    </label>

                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="
                        mt-2
                        w-full
                        border-0
                        border-b
                        border-base-content/15
                        bg-transparent
                        px-0
                        py-3
                        text-sm
                        outline-none
                        placeholder:text-base-content/25
                        focus:border-base-content
                      "
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-base-content/40
                        transition-colors
                        hover:text-base-content
                      "
                    >
                      Forgot Password
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="
                    mt-8
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
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>

              <div className="mt-8 border-t border-base-content/10 pt-6 text-center">
                <p className="text-[9px] uppercase tracking-[0.15em] text-base-content/40">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setMode(isLogin ? "register" : "login")
                  }
                  className="
                    mt-2
                    border-b
                    border-base-content/40
                    pb-1
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    transition-colors
                    hover:border-primary
                    hover:text-primary
                  "
                >
                  {isLogin ? "Create Account" : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
