export async function checkAuth() {
  try {
    const res = await fetch('http://api.quickchat.local/auth/me', {
      credentials: 'include',
    });

    if (!res.ok) return null;

    return await res.json();
  } catch {
    return null;
  }
}
