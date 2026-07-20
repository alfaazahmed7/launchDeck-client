import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserSession } from './lib/core/session'

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const session = await getUserSession();

    if (!session) {
        return NextResponse.redirect(new URL('/register', request.url));
    }

}

export const config = {
    matcher: [
        '/projects/:path',
        '/add-project',
        '/manage-projects'
    ]
}