export const getConvexUrl = () => {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;

    if (!!url) return url;

    throw new Error(`NEXT_PUBLIC_CONVEX_URL environment variable is not defined`);
}