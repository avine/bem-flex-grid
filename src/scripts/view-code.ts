import { highlight, languages } from 'prismjs';

export const viewCode = () => {
  const source = document.querySelector('.demo-layout__output');
  if (!source) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.innerHTML = '<pre class="demo-layout__code"><code></code></pre>';

  const code = wrapper.querySelector('code');
  code.innerHTML = highlight(formatCode(source.innerHTML), languages.html, languages.html);

  let desc = document.querySelector('.demo-layout__desc');
  if (!desc) {
    desc = document.createElement('div');
    desc.className = 'demo-layout__desc';
    document.body.insertBefore(desc, document.body.firstChild);
  }
  desc.appendChild(wrapper.firstChild);
};

// Remove extra indentation
function formatCode(code: string) {
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
