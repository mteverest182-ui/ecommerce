import HomeBannerImage from "./HomeBanner";

const HeroBanner = ({ banner }) => {
    if (!banner) {
        return null;
    }

    return (
        <section className="relative overflow-hidden bg-base-200">
            <div className="relative min-h-[70vh] md:min-h-170">

                {/* HERO IMAGE */}
                <HomeBannerImage
                    banner={banner}
                    alt={banner.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
                />

                {/* SUBTLE OVERLAY */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-white/5
                    "
                />

                {/* CONTENT */}
                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[70vh]
                        items-end
                        md:min-h-170
                    "
                >
                    <div
                        className="
                            mx-auto
                            w-[80%]
                            pb-12
                            md:pb-16
                            lg:pb-20
                        "
                    >
                        <div
                            className="
                                max-w-xl
                                text-white
                            "
                        >

                            {/* EYEBROW */}
                            <p
                                className="
                                    mb-4
                                    text-xs
                                    uppercase
                                    tracking-[0.35em]
                                    text-white
                                "
                            >
                                New Collection
                            </p>

                            {/* TITLE */}
                            <h1
                                className="
                                    max-w-[340px]
                                    font-serif
                                    text-[42px]
                                    font-medium
                                    leading-[0.95]
                                    tracking-tight
                                    text-white

                                    md:max-w-xl
                                    md:text-6xl

                                    lg:text-8xl
                                "
                            >
                                {banner.title}
                            </h1>

                            {/* DESCRIPTION */}
                            {banner.description && (
                                <p
                                    className="
                                        mt-4
                                        max-w-[300px]
                                        text-xs
                                        leading-6
                                        text-white/65

                                        md:mt-5
                                        md:max-w-md
                                        md:text-base
                                        md:leading-7
                                    "
                                >
                                    {banner.description}
                                </p>
                            )}

                            {/* CTA */}
                            {banner.linkUrl && (
                                <a
                                    href={banner.linkUrl}
                                    className="
                                        group
                                        relative
                                        mt-6
                                        inline-flex
                                        items-center
                                        justify-center
                                        overflow-hidden

                                        rounded-none
                                        border
                                        border-white

                                        bg-transparent

                                        px-7
                                        py-3

                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-white

                                        transition-colors
                                        duration-300
                                        ease-out

                                        hover:bg-transparent
                                        hover:text-white
                                    "
                                >
                                    {/* HOVER FILL */}
                                    <span
                                        className="
                                            absolute
                                            inset-0
                                            -translate-x-full
                                            bg-white

                                            transition-transform
                                            duration-300
                                            ease-out

                                            group-hover:translate-x-0
                                        "
                                    />

                                    {/* BUTTON TEXT */}
                                    <span
                                        className="
                                            relative
                                            z-10

                                            transition-colors
                                            duration-300

                                            group-hover:text-black
                                        "
                                    >
                                        Shop Collection
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
