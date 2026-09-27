/**
 * Prefix a root-relative path with the site's base path.
 *
 * Production is served from `/`, but staging previews are built with
 * BASE_PATH=/pr-N/, so hard-coded paths like "/contact" or "/images/x.webp"
 * must go through this helper or they break on previews.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${base}${path}`;
}

/** Strip the base path from a pathname, for comparing against nav hrefs. */
export function withoutBase(pathname: string): string {
  return base && pathname.startsWith(base)
    ? pathname.slice(base.length) || '/'
    : pathname;
}
