import { useState } from "react";

const BrandStatement = ({
  eyebrow = "Stay in the know",
  title = "Discover what's next.",
  description = "Be the first to discover new collections and exclusive stories.",
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
  };

  const mobileContainer = `
    flex
    w-full
    flex-col
    items-center
    justify-center
    px-5
    py-2
    text-center
  `;

  const mobileEyebrow = `
    text-[8px]
    uppercase
    tracking-[0.35em]
    text-[#A88A5A]
  `;

  const mobileTitle = `
    mt-2
    text-[20px]
    flex
    justify-center
    font-light
    tracking-tight
  `;

  const mobileDescription = `
    mx-auto
    mt-2
    max-w-xs
    text-[10px]
    leading-5
    text-[#F3EEE4]/55
  `;

  const mobileForm = `
    mt-2
    flex
    w-full
    max-w-xs
    items-center
    border-b
    border-[#F3EEE4]/30
  `;

  const mobileInput = `
    min-w-0
    flex-1
    bg-transparent
    py-2
    text-[10px]
    text-[#F3EEE4]
    outline-none
    placeholder:text-[#F3EEE4]/35
  `;

  const mobileButton = `
    shrink-0
    py-2
    pl-3
    text-[8px]
    uppercase
    tracking-[0.2em]
    text-[#F3EEE4]
    transition-opacity
    hover:opacity-50
  `;

  const desktopContainer = `
    mx-auto
    flex
    w-[90%]
    items-center
    justify-between
    gap-16
    py-5
  `;

  const desktopContent = `
    min-w-0
    max-w-xl
  `;

  const desktopEyebrow = `
    text-[10px]
    uppercase
    tracking-[0.4em]
    text-[#A88A5A]
  `;

  const desktopTitle = `
    mt-2
    text-4xl
    font-light
    tracking-tight
  `;

  const desktopDescription = `
    mt-2
    max-w-md
    text-[12px]
    leading-5
    text-[#F3EEE4]/55
  `;

  const desktopForm = `
    flex
    w-96
    shrink-0
    items-center
    border-b
    border-[#F3EEE4]/30
  `;

  const desktopInput = `
    min-w-0
    flex-1
    bg-transparent
    py-2
    text-[11px]
    text-[#F3EEE4]
    outline-none
    placeholder:text-[#F3EEE4]/35
  `;

  const desktopButton = `
    shrink-0
    py-3
    pl-4
    text-[9px]
    uppercase
    tracking-[0.2em]
    text-[#F3EEE4]
    transition-opacity
    hover:opacity-50
  `;

  return (
    <section
      className="
        w-full
        bg-[#211E1A]
        text-[#F3EEE4]

        lg:mx-auto
        lg:w-[80%]
      "
    >
      
    

      <div className="lg:hidden">
        <div className={mobileContainer}>
          
          <div>
            <p className={mobileEyebrow}>{eyebrow}</p>

            <h2 className={mobileTitle}>{title}</h2>

            <p className={mobileDescription}>{description}</p>
          </div>

          
          <form onSubmit={handleSubmit} className={mobileForm}>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className={mobileInput}
            />

            <button type="submit" className={mobileButton}>
              Sign Up →
            </button>
          </form>
        </div>
      </div>

      
    

      <div className="hidden lg:block">
        <div className={desktopContainer}>
          
          <div className={desktopContent}>
            <p className={desktopEyebrow}>{eyebrow}</p>

            <h2 className={desktopTitle}>{title}</h2>

            <p className={desktopDescription}>{description}</p>
          </div>

          
          <form onSubmit={handleSubmit} className={desktopForm}>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className={desktopInput}
            />

            <button type="submit" className={desktopButton}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
