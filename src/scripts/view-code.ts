import { highlight, languages } from 'prismjs';

export const viewCode = () => {
  const source = document.querySelector('.demo-layout__playground');
  if (!source) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.innerHTML = '<pre class="demo-layout__code"><code></code></pre>';

  const code = wrapper.querySelector('code');
  code.dataset.sourceCode = formatCode(source.innerHTML); // Store the initial source code for further modifification...
  code.innerHTML = highlight(code.dataset.sourceCode, languages.html, languages.html);

  let desc = document.querySelector('.demo-layout__desc');
  if (!desc) {
    desc = document.createElement('div');
    desc.className = 'demo-layout__desc';
    document.body.insertBefore(desc, document.body.firstChild);
  }
  desc.appendChild(wrapper.firstChild);
};

export const handleSourceCode = (code: HTMLElement) => {
  return {
    sourceCode: code.dataset.sourceCode,
    update: (sourceCode: string) => updateCode(code, sourceCode),
  };
};

export const updateCode = (code: HTMLElement, sourceCode: string) => {
  code.dataset.sourceCode = formatCode(sourceCode);
  code.innerHTML = highlight(code.dataset.sourceCode, languages.html, languages.html);
};

// Remove extra indentation
export function formatCode(code: string) {
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
