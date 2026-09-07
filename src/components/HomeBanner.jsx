import { useEffect, useState } from "react";

const HomeBanner = ({
    banner,
    alt = "",
    className = "",
}) => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        if (!banner?.images?.length) {
            setImageData(null);
            return;
        }

        const images = banner.images;

        const getImage = (device) =>
            images.find(
                (image) => image.device === device,
            );

        const updateImage = () => {
            const width = window.innerWidth;

            let selectedImage;

            if (width < 768) {
                // Mobile
                selectedImage =
                    getImage("MOBILE") ||
                    getImage("DESKTOP");
            } else {
                // Desktop
                selectedImage =
                    getImage("DESKTOP") ||
                    getImage("MOBILE");
            }

            if (!selectedImage?.imageUrl) {
                setImageData(null);
                return;
            }

            const isSquare =
                selectedImage.width ===
                selectedImage.height;

            setImageData({
                url: selectedImage.imageUrl,
                isSquare,
            });
        };

        updateImage();

        window.addEventListener(
            "resize",
            updateImage,
        );

        return () => {
            window.removeEventListener(
                "resize",
                updateImage,
            );
        };
    }, [banner]);

    if (!imageData?.url) {
        return (
            <div
                className={`flex items-center justify-center bg-base-300 ${className}`}
            >
                <span className="text-xs uppercase tracking-widest text-base-content/40">
                    Banner image unavailable
                </span>
            </div>
        );
    }

    const imageClassName = imageData.isSquare
        ? className.replace(
              "object-cover",
              "object-contain",
          )
        : className;

    return (
        <img
            src={imageData.url}
            alt={alt}
            className={imageClassName}
            loading="eager"
            fetchPriority="high"
            decoding="async"
        />
    );
};

export default HomeBanner;