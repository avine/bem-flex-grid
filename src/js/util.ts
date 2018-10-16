/* Polyfill for IE11: Use "forEach" on DOM elements */

export function forEach<T = Node>(elements: NodeListOf<Node>, callback: (element: T, index: number) => any) {
  Array.prototype.forEach.call(elements, callback);
}
