export function getPageName() {
  return window.location.pathname.slice(1, -5);
}