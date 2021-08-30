import { buildShowcaseId } from "./showcase";

export function handleBackButton(): void {
  const output = document.querySelector('.demo-layout__readme');
  if (output) {
    const id = buildShowcaseId(window.document.location.pathname);
    const hash = id ? `#${id}` : '';

    const btn = document.createElement('a');
    btn.innerHTML = '&longleftarrow; back';
    btn.href = `../demo.html${hash}`;
    btn.className = 'demo-layout__back-button';
    output.appendChild(btn);
  }
}
