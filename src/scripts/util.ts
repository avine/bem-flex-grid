export function toggleAttributeValue(el: Element, key: string, value: string): void {
  const attr = (el.getAttribute(key) || '').trim().replace(/\s+/g, ' ').split(' ');
  const index = attr.indexOf(value);
  index === -1 ? attr.push(value) : attr.splice(index, 1);
  el.setAttribute(key, attr.join(' ').trim());
}

export const inIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
