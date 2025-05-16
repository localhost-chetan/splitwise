import { auth } from "@convex/auth";
import { httpRouter } from "convex/server";

const http = httpRouter();

auth.addHttpRoutes(http);

export default http;
