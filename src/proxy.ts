import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getUserSession } from './lib/core/session';

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    console.log("Proxy running:", request.nextUrl.pathname);
    const session = await getUserSession();

    if (!session) {
        return NextResponse.redirect(new URL('/register', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/projects/:path',
        '/add-project',
        '/manage-projects'
    ]
}