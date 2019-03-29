// Polyfill for IE11: Use "forEach" on DOM elements
export function forEach<T = Node>(elements: NodeListOf<Node>, callback: (element: T, index: number) => any) {
  Array.prototype.forEach.call(elements, callback);
}

export function toggleAttributeValue(el: Element, key: string, value: string) {
  const attr = (el.getAttribute(key) || '').trim().replace(/\s+/g, ' ').split(' ');
  const index = attr.indexOf(value);
  index === -1 ? attr.push(value) : attr.splice(index, 1);
  el.setAttribute(key, attr.join(' ').trim());
}

export const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
