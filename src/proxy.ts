import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getUserSession } from './lib/core/session';

export async function proxy(request: NextRequest) {
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