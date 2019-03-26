import { forEach, toggleAttributeValue } from './util';
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
  const output = document.querySelector('.demo-layout__output');
  handleAction(
    getAnchor('Toggle full screen', 'full-screen'),
    () => {
      output.classList.toggle('demo-layout__output--full');
      // Finally redraw Charts if any.
      triggerResize(FULL_WIDTH_SWITCHER_DURATION);
    },
  );
};

const autoHeightSwitcher = () => {
  const playground = document.querySelector('.demo-layout__playground');
  handleAction(
    getAnchor('Toggle auto height', 'auto-height'),
    () => {
      playground.classList.toggle('demo-layout__playground--auto');
      // Finally redraw Charts if any.
      triggerResize();
    },
  );
};

const toggleBfgDirection = (target: Element) => {
  let bfgs = target.querySelectorAll('.bfg--row, .bfg--col');
  forEach<Element>(bfgs, (bfg) => {
    bfg.classList.toggle('bfg--row');
    bfg.classList.toggle('bfg--col');
  });

  bfgs = target.querySelectorAll('[bfg~="row"], [bfg~="col"]');
  forEach<Element>(bfgs, (bfg) => {
    toggleAttributeValue(bfg, 'bfg', 'row');
    toggleAttributeValue(bfg, 'bfg', 'col');
  });
};

const directionSwitcher = () => {
  const playground = document.querySelector('.demo-layout__playground');
  const code = document.querySelector('.demo-layout__code > code') as HTMLElement;

  handleAction(
    getAnchor('Switch direction', 'direction'),
    () => {
      // Update output
      toggleBfgDirection(playground);

      // Update source code (from original source code)
      const handler = handleSourceCode(code);
      const wrapper = document.createElement('div');
      wrapper.innerHTML = handler.sourceCode;
      toggleBfgDirection(wrapper);
      handler.update(wrapper.innerHTML);

      // Finally redraw Charts if any.
      triggerResize();
    },
  );
};

const toggleBfgGap = (target: Element) => {
  let bfg = target.querySelector('.bfg'); // Find the first (main) grid
  if (bfg) {
    bfg.classList.toggle('bfg--gap');
  }

  bfg = target.querySelector('[bfg]'); // Find the first (main) grid
  if (bfg) {
    toggleAttributeValue(bfg, 'bfg', 'gap');
  }
};

const gridGapSwitcher = () => {
  const playground = document.querySelector('.demo-layout__playground');
  const code = document.querySelector('.demo-layout__code > code') as HTMLElement;

  handleAction(
    getAnchor('Toggle grid gap', 'grid-gap'),
    () => {
      // Update output
      toggleBfgGap(playground);

      // Update source code (from original source code)
      const handler = handleSourceCode(code);
      const wrapper = document.createElement('div');
      wrapper.innerHTML = handler.sourceCode;
      toggleBfgGap(wrapper);
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

  document.querySelector('.demo-layout__output').appendChild(container);
};
