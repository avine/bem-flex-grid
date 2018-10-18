import { forEach } from './util';

const enableAction = (
  sourceHtml: string,
  targetSelector: string,
  targetActiveSelector: string,
) => {
  const target = document.querySelector(targetSelector);
  if (!target) {
    return;
  }
  const wrapper = document.createElement('div');
  wrapper.innerHTML = sourceHtml;
  const toggle = wrapper.firstChild;
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    target.classList.toggle(targetActiveSelector.replace(/^\./, ''));
  });
  document.body.appendChild(toggle);
};

const fullWidthSwitcher = () => {
  const title = 'Toggle full width';
  const cssModifier = 'demo-action--full-width';
  const text = '&leftrightarrow;';
  enableAction(
    `<a href="#" title="${title}" class="demo-action ${cssModifier}">${text}</a>`,
    '.demo-layout__output',
    '.demo-layout__output--full',
  );
};

const autoHeightSwitcher = () => {
  const title = 'Toggle auto height';
  const cssModifier = 'demo-action--auto-height';
  const text = '&updownarrow;';
  enableAction(
    `<a href="#" title="${title}" class="demo-action ${cssModifier}">${text}</a>`,
    '.demo-layout__source',
    '.demo-layout__source--auto',
  );
};

const directionSwitcher = () => {
  const wrapper = document.createElement('div');
  const title = 'Switch direction';
  const cssModifier = 'demo-action--direction';
  const text = 'D';
  wrapper.innerHTML = `<a href="#" title="${title}" class="demo-action ${cssModifier}">${text}</a>`;
  const toggle = wrapper.firstChild;

  const grids = document.querySelectorAll('.bfg--row, .bfg--col');
  toggle.addEventListener('click', (event) => {
    event.preventDefault();

    // Update output
    forEach<Element>(grids, (grid) => {
      const action = grid.classList.contains('bfg--row')
        ? { remove: 'bfg--row', add: 'bfg--col' }
        : { remove: 'bfg--col', add: 'bfg--row' };
      grid.classList.remove(action.remove);
      grid.classList.add(action.add);
    });

    // Update source code
    const code = document.querySelector('.demo-layout__code > code');
    const source = code.innerHTML;
    code.innerHTML = source
      .replace(/bfg--row/g, 'bfg-TMP-col')
      .replace(/bfg--col/g, 'bfg--row')
      .replace(/bfg-TMP-col/g, 'bfg--col');
  });
  document.body.appendChild(toggle);
};

export const enableActions = () => {
  fullWidthSwitcher();
  autoHeightSwitcher();
  directionSwitcher();
};
