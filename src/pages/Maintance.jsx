import { Link } from "react-router-dom";

const Maintenance = ({
    title = "Coming Soon",
    description = "This page is currently being refined. Something beautiful is on its way.",
}) => {
    return (
        <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-base-100 px-6">
            <section className="w-full max-w-3xl py-20 text-center">
                <div className="mb-8 flex items-center justify-center gap-4">
                    <span className="h-px w-10 bg-base-content/20" />

                    <span className="text-[10px] uppercase tracking-[0.4em] text-base-content/40">
                        Under Maintenance
                    </span>

                    <span className="h-px w-10 bg-base-content/20" />
                </div>

                <h1
                    className="
                        font-serif
                        text-6xl
                        leading-none
                        tracking-tight
                        text-base-content
                        sm:text-7xl
                        md:text-8xl
                    "
                >
                    {title}
                </h1>

                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-md
                        text-sm
                        leading-7
                        text-base-content/50
                        md:text-base
                    "
                >
                    {description}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="
                            btn
                            btn-neutral
                            min-w-36
                            rounded-none
                            px-7
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                        "
                    >
                        Back Home
                    </Link>

                    <Link
                        to="/shop"
                        className="
                            btn
                            btn-ghost
                            min-w-36
                            rounded-none
                            border
                            border-base-content/20
                            px-7
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                        "
                    >
                        Shop
                    </Link>
                </div>

                <div className="mt-16">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-base-content/30">
                        New experience coming soon
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Maintenance;