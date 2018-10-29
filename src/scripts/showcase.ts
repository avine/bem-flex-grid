import { forEach } from './util';

export const showcase = () => {
  const element = document.querySelector('.docs-showcase');

  const mapper = (anchor: HTMLAnchorElement, count: number) => `
  <div class="docs-showcase__item">
    <iframe data-src="${anchor.href}" class="docs-showcase__iframe"></iframe>
    <a href="${anchor.href}" class="demo-toolbox__action demo-toolbox__action--open-link" title="Open">${count}</a>
  </div>`;

  const mappedHtml = [];
  forEach<HTMLAnchorElement>(
    element.querySelectorAll('a'),
    (anchor, index) => mappedHtml.push(mapper(anchor, index + 1)),
  );
  element.innerHTML = mappedHtml.join('\n') + '\n';

  let buffer: Array<{ elem: HTMLElement; iframe: HTMLIFrameElement; }> = [];
  forEach<HTMLElement>(element.querySelectorAll('.docs-showcase__item'), (elem) => {
    buffer.push({ elem, iframe: elem.querySelector('iframe') });
  });
  const loadIframes = () => {
    const delta = 100;
    const pageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    const Ytop = pageYOffset - delta;
    const Ybottom = pageYOffset + window.innerHeight + delta;
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
