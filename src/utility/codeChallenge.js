export function generateCodeVerifier() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return base64urlencode(array);
}

function base64urlencode(a) {
  return btoa(String.fromCharCode.apply(null, a))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function sha256(buffer) {
  return crypto.subtle.digest('SHA-256', buffer);
}

export async function generateCodeChallenge(codeVerifier) {
  const hashed = await sha256(new TextEncoder().encode(codeVerifier));
  return base64urlencode(new Uint8Array(hashed));
}
