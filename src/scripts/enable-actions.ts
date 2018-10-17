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

export const enableActions = () => {
  autoHeightSwitcher();
  fullWidthSwitcher();
};
