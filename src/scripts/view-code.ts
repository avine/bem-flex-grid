import { highlight, languages } from 'prismjs';

export const viewCode = (): void => {
  const source = document.querySelector('.demo-layout__playground');
  if (!source) {
    return;
  }

  const sourceCode = cleanCode(formatCode(source.innerHTML));

  const wrapper = document.createElement('div');
  wrapper.innerHTML = '<pre class="demo-layout__code"><code></code></pre>';

  const code = wrapper.querySelector('code');
  code.dataset.sourceCode = sourceCode; // Store the initial source code for further modifification...
  code.innerHTML = highlight(code.dataset.sourceCode, languages.html, languages.html);

  let desc = document.querySelector('.demo-layout__desc');
  if (!desc) {
    desc = document.createElement('div');
    desc.className = 'demo-layout__desc';
    document.body.insertBefore(desc, document.body.firstChild);
  }
  desc.appendChild(wrapper.firstChild);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handleSourceCode = (code: HTMLElement) => {
  return {
    sourceCode: code.dataset.sourceCode,
    update: (sourceCode: string) => updateCode(code, sourceCode),
  };
};

export const updateCode = (code: HTMLElement, sourceCode: string): void => {
  code.dataset.sourceCode = cleanCode(formatCode(sourceCode));
  code.innerHTML = highlight(code.dataset.sourceCode, languages.html, languages.html);
};

// Remove extra indentation
export function formatCode(code: string): string {
  let lines = code.split('\n');
  const indent = lines.reduce((idt, currLine) => {
    if (currLine.trim()) {
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

// Remove the empty values on HTML tag attributes
export function cleanCode(code: string): string {
  return code.replace(/=""/g, '');
}
