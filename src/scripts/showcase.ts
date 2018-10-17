import { forEach } from './util';

export const showcase = () => {
  const element = document.querySelector('.www-showcase');

  const mapper = (anchor: HTMLAnchorElement, count: number) => `
  <div class="www-showcase__item">
    <iframe data-src="${anchor.href}" class="www-showcase__iframe"></iframe>
    <a href="${anchor.href}" class="demo-action demo-action--open-link" title="Open">${count}</a>
  </div>`;

  const mappedHtml = [];
  forEach<HTMLAnchorElement>(
    element.querySelectorAll('a'),
    (anchor, index) => mappedHtml.push(mapper(anchor, index + 1)),
  );
  element.innerHTML = mappedHtml.join('\n') + '\n';

  let buffer: Array<{ elem: HTMLElement; iframe: HTMLIFrameElement; }> = [];
  forEach<HTMLElement>(element.querySelectorAll('.www-showcase__item'), (elem) => {
    buffer.push({ elem, iframe: elem.querySelector('iframe') });
  });
  const loadIframes = () => {
    const delta = 100;
    const Ytop = document.documentElement.scrollTop - delta;
    const Ybottom = document.documentElement.scrollTop + window.innerHeight + delta;

    buffer = buffer.filter((item) => {
      const itemTop = item.elem.offsetTop;
      const itemBottom = item.elem.offsetTop + item.elem.offsetHeight;
      const inViewport = (itemTop > Ytop && itemTop < Ybottom) || (itemBottom > Ytop && itemBottom < Ybottom);
      if (inViewport) {
        const src = item.iframe.getAttribute('data-src');
        item.iframe.src = src;
      }
      return !inViewport;
    });
    if (!buffer.length) {
      window.removeEventListener('scroll', loadIframes);
    }
  };
  window.addEventListener('scroll', loadIframes);
  loadIframes();
};
