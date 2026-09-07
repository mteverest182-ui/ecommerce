export const getBannerBySlot = (
    banners = [],
    slotKey,
) => {
    return (
        banners.find(
            (banner) =>
                banner.slotKey === slotKey &&
                banner.status === "ACTIVE",
        ) ?? null
    );
};

export const getBannerByImage = (
    banner,
    device,
) => {
    if (!banner?.images?.length) {
        return null;
    }

    return (
        banner.images.find(
            (image) =>
                image.device === device,
        ) ??
        banner.images.find(
            (image) =>
                image.device === "DESKTOP",
        ) ??
        banner.images.find(
            (image) =>
                image.device === "MOBILE",
        ) ??
        null
    );
};



