import HomeBannerImage from "./HomeBanner";

const HeroBanner = ({ banner }) => {
    if (!banner) {
        return null;
    }

    return (
        <section className="relative overflow-hidden bg-base-200">
            <div className="relative min-h-[70vh] md:min-h-170">
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

                <div
                    className="
                        absolute
                        inset-0
                        bg-white/5
                    "
                />

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

                            <p
                                className="
                                    mb-4
                                    text-xs
                                    uppercase
                                    tracking-[0.35em]
                                    text-white
                                    text-shadow-lg
                                "
                            >
                                New Collection
                            </p>

                            <h1
                                className="
                                    max-w-[340px]
                                    font-serif
                                    text-[42px]
                                    font-medium
                                    leading-[0.95]
                                    tracking-tight
                                    text-white
                                    text-shadow-lg
                                    md:max-w-xl
                                    md:text-6xl
                                    lg:text-8xl
                                "
                            >
                                {banner.title}
                            </h1>

                            {banner.description && (
                                <p
                                    className="
                                        mt-4
                                        max-w-[300px]
                                        text-xs
                                        leading-6
                                        text-white/65
                                        text-shadow-lg
                                        md:mt-5
                                        md:max-w-md
                                        md:text-base
                                        md:leading-7
                                    "
                                >
                                    {banner.description}
                                </p>
                            )}

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
