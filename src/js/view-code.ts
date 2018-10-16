import { highlight, languages } from 'prismjs';

export const viewCode = () => {
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
