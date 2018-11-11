import { forEach } from './util';
import { handleSourceCode } from './view-code';

/* ===== Helpers ===== */

const container = document.createElement('div');
container.className = 'demo-toolbox';

const getAnchor = (popOver: string, bemModifier: string, text = '', textActive = text) => {
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.title = popOver;
  anchor.className = `demo-toolbox__action demo-toolbox__action--${bemModifier}`;
  anchor.dataset.text = anchor.innerHTML = text;
  anchor.dataset.textActive = textActive;
  return anchor;
};

export const handleAction = (anchor: HTMLAnchorElement, callback: (isActive: boolean) => void) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    anchor.classList.toggle('demo-toolbox__action--active');
    const isActive = anchor.classList.contains('demo-toolbox__action--active');
    anchor.innerHTML = isActive ? (anchor.dataset.textActive || '') : (anchor.dataset.text || '');
    callback(isActive);
  });
  container.appendChild(anchor);
};

export const triggerResize = (delay = 0) => setTimeout(() => {
  try {
    window.dispatchEvent(new Event('resize'));
  } catch (e) {
    // For IE11 support
    const event = document.createEvent('Event');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);
  }
}, delay);

// Quick fix to `triggerResize` after the end of the transition.
// Should be the same value as: `$demo-duration` in `src/styles/variables.scss`.
const FULL_WIDTH_SWITCHER_DURATION = 300;

/* ===== Actions ===== */

const fullWidthSwitcher = () => {
  const target = document.querySelector('.demo-layout__output');
  handleAction(
    getAnchor('Toggle full screen', 'full-screen'),
    () => {
      target.classList.toggle('demo-layout__output--full');
      // Finally redraw Charts if any.
      triggerResize(FULL_WIDTH_SWITCHER_DURATION);
    },
  );
};

const autoHeightSwitcher = () => {
  const target = document.querySelector('.demo-layout__playground');
  handleAction(
    getAnchor('Toggle auto height', 'auto-height'),
    () => {
      target.classList.toggle('demo-layout__playground--auto');
      // Finally redraw Charts if any.
      triggerResize();
    },
  );
};

const directionSwitcher = () => {
  const grids = document.querySelectorAll('.bfg--row, .bfg--col');
  const code = document.querySelector('.demo-layout__code > code');
  handleAction(
    getAnchor('Switch direction', 'direction'),
    () => {
      // Update output
      forEach<Element>(grids, (grid) => {
        const action = grid.classList.contains('bfg--row')
          ? { remove: 'bfg--row', add: 'bfg--col' }
          : { remove: 'bfg--col', add: 'bfg--row' };
        grid.classList.remove(action.remove);
        grid.classList.add(action.add);
      });

      // Update source code (right from the generated "PrismJs" markup)
      code.innerHTML = code.innerHTML
        .replace(/bfg--row/g, 'bfg-TMP-col')
        .replace(/bfg--col/g, 'bfg--row')
        .replace(/bfg-TMP-col/g, 'bfg--col');

        // Finally redraw Charts if any.
      triggerResize();
    },
  );
};

const gridGapSwitcher = () => {
  const target = document.querySelector('.demo-layout__playground > .bfg'); // Find the first (main) grid
  const code = document.querySelector('.demo-layout__code > code') as HTMLElement;
  handleAction(
    getAnchor('Toggle grid gap', 'grid-gap'),
    () => {
      // Update output
      target.classList.toggle('bfg--gap');

      // Update source code (from original source code)
      const handler = handleSourceCode(code);
      const wrapper = document.createElement('div');
      wrapper.innerHTML = handler.sourceCode;
      wrapper.querySelector('.bfg').classList.toggle('bfg--gap'); // Find the first (main) grid
      handler.update(wrapper.innerHTML);
    },
  );
};

export type IActionType = 'all' | 'fullWidth' | 'autoHeight' | 'direction' | 'gridGap';

export const actionEnabled = (actions: IActionType[], action) => {
  return actions.indexOf('all') !== -1 || actions.indexOf(action) !== -1;
};

export const enableActions = (actions: IActionType[] = ['all']) => {
  if (actionEnabled(actions, 'fullWidth')) { fullWidthSwitcher(); }
  if (actionEnabled(actions, 'autoHeight')) { autoHeightSwitcher(); }
  if (actionEnabled(actions, 'direction')) { directionSwitcher(); }
  if (actionEnabled(actions, 'gridGap')) { gridGapSwitcher(); }

  document.body.appendChild(container);
};
