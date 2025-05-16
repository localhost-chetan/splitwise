const getConvexSiteUrl = () => {
    const CONVEX_SITE_URL = process.env.CONVEX_SITE_URL // This is the URL for HTTP Actions URL

    if (!!CONVEX_SITE_URL) return CONVEX_SITE_URL;

    throw new Error(`Environment variable CONVEX_SITE_URL is required but not defined.`)
}

const authConfig = {
    providers: [
        {
            domain: getConvexSiteUrl(),
            applicationID: `convex`,
        },
    ],
};

export default authConfig;