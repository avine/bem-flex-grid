import { forEach } from './util';

/* ===== Helpers ===== */

const getAnchor = (popOver: string, bemModifier: string, text: string, textActive = text) => {
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.title = popOver;
  anchor.className = `demo-action demo-action--${bemModifier}`;
  anchor.dataset.text = anchor.innerHTML = text;
  anchor.dataset.textActive = textActive;
  return anchor;
};

const handleAction = (anchor: HTMLAnchorElement, callback: (isActive: boolean) => void) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    anchor.classList.toggle('demo-action--active');
    const isActive = anchor.classList.contains('demo-action--active');
    anchor.innerHTML = isActive ? anchor.dataset.textActive : anchor.dataset.text;
    callback(isActive);
  });
  document.body.appendChild(anchor);
};

/* ===== Actions ===== */

const fullWidthSwitcher = () => {
  const target = document.querySelector('.demo-layout__output');
  handleAction(
    getAnchor('Toggle full width', 'full-width', '&leftrightarrow;'),
    () => target.classList.toggle('demo-layout__output--full'),
  );
};

const autoHeightSwitcher = () => {
  const target = document.querySelector('.demo-layout__source');
  handleAction(
    getAnchor('Toggle auto height', 'auto-height', '&updownarrow;'),
    () => target.classList.toggle('demo-layout__source--auto'),
  );
};

const directionSwitcher = () => {
  const grids = document.querySelectorAll('.bfg--row, .bfg--col');
  const code = document.querySelector('.demo-layout__code > code');
  handleAction(
    getAnchor('Switch direction', 'direction', '&RightVector;', '&RightDownVector;'),
    () => {
      // Update output
      forEach<Element>(grids, (grid) => {
        const action = grid.classList.contains('bfg--row')
          ? { remove: 'bfg--row', add: 'bfg--col' }
          : { remove: 'bfg--col', add: 'bfg--row' };
        grid.classList.remove(action.remove);
        grid.classList.add(action.add);
      });
      // Update source code
      code.innerHTML = code.innerHTML
        .replace(/bfg--row/g, 'bfg-TMP-col')
        .replace(/bfg--col/g, 'bfg--row')
        .replace(/bfg-TMP-col/g, 'bfg--col');
    },
  );
};

export type IDisableType = 'fullWidth' | 'autoHeight' | 'direction';

export const enableActions = (...disable: IDisableType[]) => {
  if (disable.indexOf('fullWidth') === -1) { fullWidthSwitcher(); }
  if (disable.indexOf('autoHeight') === -1) { autoHeightSwitcher(); }
  if (disable.indexOf('direction') === -1) { directionSwitcher(); }
};
