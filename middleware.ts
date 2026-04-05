// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = await fetch('http://api.quickchat.local/auth/me', {
    headers: {
      cookie: req.headers.get('cookie') || '',
    },
  });

  if (res.ok) {
    return NextResponse.redirect('http://chat.quickchat.local');
  }

  return NextResponse.next();
}
