import { highlight, languages } from 'prismjs';

/* ===== Handle showcase (www) ===== */

const showcase = () => {
  const element = document.getElementById('www-showcase');

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

/* ===== Handle view code ===== */

const viewCode = () => {
  const source = document.querySelector('.demo-layout__output').innerHTML;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = '<pre class="demo-layout__code"><code></code></pre>';
  const code = wrapper.querySelector('code');
  code.innerHTML = highlight(formatCode(source), languages.html, languages.html);
  const info = document.querySelector('.demo-layout__desc');
  if (info) {
    info.appendChild(wrapper.firstChild);
  }
};

function formatCode(code: string) {
  // Remove useless indentation
  let lines = code.split('\n').filter((line) => !!line.trim().length);
  const indent = lines.reduce((idt, currLine) => {
    if (currLine) {
      const currIndent = (currLine.match(/^[\s]+/) || [''])[0].length;
      idt = idt === -1 ? currIndent : Math.min(idt, currIndent);
    }
    return idt;
  }, -1);
  if (indent > 0) {
    lines = lines.map((line) => line.substr(indent));
  }
  return lines.join('\n').trim().replace(/\n{2,}/g, '\n\n');
}

/* ===== Handle demo content ===== */

const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const fillTypeIndex = {
  get: () => parseInt(window.sessionStorage.getItem('Demo.fillTypeIndex'), 10) || 0,
  set: (index: string) => window.sessionStorage.setItem('Demo.fillTypeIndex', index),
};

const fillTypes = ['container', 'text'];

const getFillType = () => {
  const index = fillTypeIndex.get();
  if (!inIframe()) {
    fillTypeIndex.set(((index + 1) % fillTypes.length).toString());
  }
  return fillTypes[index];
};

const fillType = getFillType();

const texts = [
  // tslint:disable:max-line-length
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis libero ut augue sagittis ornare. Integer nisl ligula, porttitor non bibendum eget, varius non enim. Mauris et ex id lacus mollis lacinia id eget lacus. In convallis aliquet tortor eget luctus. Morbi eu ultrices nulla. Vestibulum luctus magna quis tellus vulputate, id gravida elit efficitur. Donec pharetra ultrices arcu, vitae porttitor enim congue nec.',
  'Integer feugiat mauris non magna malesuada ornare. Suspendisse consectetur massa elementum, sodales turpis at, mollis ex. Vestibulum sed quam dignissim, consequat orci sed, pellentesque felis. Suspendisse fermentum quam pharetra elit euismod dapibus. Nam interdum, turpis non posuere tempus, diam urna luctus justo, ut suscipit urna odio at velit. Maecenas bibendum porta ante, vitae faucibus lectus consectetur non. Donec molestie quam libero, sit amet rutrum libero egestas sit amet.',
  'Proin nec neque non turpis convallis feugiat quis ut elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce malesuada, nisi blandit viverra tristique, turpis lectus malesuada tortor, non vestibulum arcu nibh non massa. Vivamus hendrerit nibh tortor, vel venenatis risus hendrerit quis. Nam facilisis, risus a fringilla vehicula, justo purus congue dolor, et tincidunt metus est ac nisl. In finibus a nulla in iaculis. Fusce vel dui nisi. Aenean efficitur risus diam, sit amet molestie augue luctus id.',
  'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ligula lorem, consequat quis turpis in, auctor luctus leo. Nullam accumsan blandit tempor. Nunc suscipit est nunc, a dignissim sem luctus in. Donec fringilla sodales mollis. Morbi non dolor ultrices, congue lorem id, suscipit elit. Etiam vestibulum, ligula vitae finibus dictum, elit arcu molestie eros, in condimentum turpis orci eu risus.',
  'Suspendisse egestas velit sit amet cursus cursus. Ut ultricies porttitor sapien quis eleifend. Fusce lobortis lacinia sem, eget tempor magna porta id. Pellentesque a congue nisi, in euismod erat. Cras consectetur, lectus nec eleifend tempor, augue dolor laoreet ante, ut condimentum dui nunc nec sem. Cras rutrum feugiat erat, ut porttitor tellus aliquam vitae. Proin at efficitur dui, sodales volutpat leo.',
  // tslint:enable:max-line-length
];

let textIndex = -1;

const getText = (color = true) => {
  textIndex = (textIndex + 1) % texts.length;
  const text = texts[textIndex];
  const css = ['demo-text'];
  if (color) {
    css.push(`demo-text__bg-${textIndex + 1}`);
  }
  return `<div class="${css.join(' ')}">${text} ${text}</div>`;
};

const getContainer = () => '<div class="demo-container" title="Switch size"></div>';

interface IFillGridOptions {
  textColor: boolean;
}

const fillGridOptions: IFillGridOptions = { textColor: true };

const fillElement = (element: Element, options = { ...fillGridOptions }) => {
  if (!element.childElementCount) {
    switch (fillType) {
      case 'text':
        element.innerHTML = `${getText(options.textColor)}`;
        break;
      case 'container':
        element.innerHTML = getContainer();
        break;
    }
  }
};

const fillGrid = (options: Partial<IFillGridOptions> = {}) => {
  const opts: IFillGridOptions = { ...fillGridOptions, ...options };
  forEach<Element>(document.querySelectorAll('.bfg__box'), (element) => fillElement(element, opts));
  forEach<Element>(document.querySelectorAll('.bfg__content'), (element) => fillElement(element, opts));
};

window.addEventListener('click', (event) => {
  const target = event.target as Element;
  if (target.classList.contains('demo-container')) {
    target.classList.toggle('demo-container--alt');
  }
});

/* ===== Handle full screen switcher ===== */

// TODO: need to be applied to the new demo container...

const fullScreenSwitcher = () => {
  /*const wrapper = document.createElement('div');
  wrapper.innerHTML = '<a href="#" title="Toggle page height" class="demo-full-screen__toggle">&updownarrow;</a>';
  const toggle = wrapper.firstChild;
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('html').classList.toggle('demo-full-screen--disabled');
  });
  document.body.appendChild(toggle);*/
};

/* Polyfill for IE11: Use "forEach" on DOM elements */

function forEach<T = Node>(elements: NodeListOf<Node>, callback: (element: T, index: number) => any) {
  Array.prototype.forEach.call(elements, callback);
}

/* ===== Export as global ===== */

window['Demo'] = { showcase, viewCode, fillGrid, fullScreenSwitcher };
