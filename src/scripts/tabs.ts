import { triggerResize } from './enable-actions';

export const handleTabs = (): void => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `<div class="demo-layout__tabs-nav">
    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__readme">Description</a>
    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__code">Code</a>
    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__output">Output</a>
  </div>`;

  // ===== Tabs Nav =====

  const navItems = wrapper.querySelectorAll('.demo-layout__tabs-nav-item');

  const openNavItem = (navItem: HTMLElement) => {
    navItems.forEach((element) => {
      element.classList[element === navItem ? 'add' : 'remove']('demo-layout__tabs-nav-item--open');
    });
  };

  // ===== Tabs content =====

  const contents = document.querySelectorAll('.demo-layout__readme, .demo-layout__code, .demo-layout__output');
  contents.forEach((element) => element.classList.add('demo-layout__tabs-content'));

  const openContent = (tab: string) => {
    contents.forEach((element) => {
      element.classList[element.classList.contains(tab) ? 'add' : 'remove']('demo-layout__tabs-content--open');
    });
    // Hack to redraw Charts if any.
    triggerResize();
  };

  // ===== Event handler =====

  wrapper.querySelector('.demo-layout__tabs-nav').addEventListener('click', (event) => {
    event.preventDefault();
    const navItem = (event.target as HTMLAnchorElement);
    openNavItem(navItem);
    openContent(navItem.dataset.tab);
  });

  (navItems.item(0) as HTMLAnchorElement).click();

  document.body.appendChild(wrapper.firstChild);
};
