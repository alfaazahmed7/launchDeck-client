import { NextRequest, NextResponse } from "next/server";
import { getUserSession } from "./lib/core/session";

export async function proxy(request: NextRequest) {
    const session = await getUserSession();

    if (!session) {
        return NextResponse.redirect(new URL("/register", request.url));
    }
}

export const config = {
    matcher: [
        "/projects/:path",
        "/manage-projects",
        "/add-project",
    ],
};