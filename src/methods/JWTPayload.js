export function JWTPayload(token) {
  const parts = token.split(".");

  if (parts.length === 3) {
    const payload = base64UrlDecode(parts[1]);
    return payload;
  } else {
    return false;
  }
}

function base64UrlDecode(base64Url) {
  while (base64Url.length % 4 !== 0) {
    base64Url += "=";
  }

  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const decoded = atob(base64);

  return JSON.parse(decoded);
}
