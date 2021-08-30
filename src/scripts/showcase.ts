export const buildShowcaseId = (href: string): string => {
  const match = href.match(/\/([^/]+)\.html$/);
  return match ? `demo-${match[1]}` : '';
};

export const showcase = (): void => {
  const element = document.querySelector('.docs-showcase');

  const mapper = (anchor: HTMLAnchorElement) => `
  <div id="${buildShowcaseId(anchor.href)}" class="docs-showcase__item">
    <iframe data-src="${anchor.href}" class="docs-showcase__iframe"></iframe>
  </div>`;

  const mappedHtml = [];
  element.querySelectorAll('a').forEach((anchor) => mappedHtml.push(mapper(anchor)));
  element.innerHTML = mappedHtml.join('\n') + '\n';

  let buffer: Array<{ elem: HTMLElement; iframe: HTMLIFrameElement; }> = [];
  element.querySelectorAll<HTMLElement>('.docs-showcase__item').forEach((elem) => {
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
      window.removeEventListener('scroll', debounce);
    }
  };
  let timeout;
  const debounce = () => {
    clearTimeout(timeout);
    timeout = setTimeout(loadIframes, 100);
  };
  window.addEventListener('scroll', debounce);
  loadIframes();
};
