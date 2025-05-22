import { convexAuthNextjsMiddleware, createRouteMatcher, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";

const isProtectedRoute = createRouteMatcher([`/dashboard(.*)`])

export default convexAuthNextjsMiddleware(async (request, ctx) => {
    if (isProtectedRoute(request) && !(await ctx.convexAuth.isAuthenticated())) {
        return nextjsMiddlewareRedirect(request, `/`)
    }
},
    {
        verbose: true,
        cookieConfig: {
            maxAge: 60 * 60 * 24 * 1, // 1 day
        },
    }
)

export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};