import { forEach } from './util';

export const showcase = () => {
  const element = document.querySelector('.www-showcase');

  const mapper = (anchor: HTMLAnchorElement, count: number) => `
  <div class="www-showcase__item">
    <iframe src="${anchor.href}" class="www-showcase__iframe"></iframe>
    <a href="${anchor.href}" class="www-showcase__link" title="Open in a separate tab">${count}</a>
  </div>`;

  const mappedHtml = [];
  forEach<HTMLAnchorElement>(
    element.querySelectorAll('a'),
    (anchor, index) => mappedHtml.push(mapper(anchor, index + 1)),
  );
  element.innerHTML = mappedHtml.join('\n') + '\n';
};
