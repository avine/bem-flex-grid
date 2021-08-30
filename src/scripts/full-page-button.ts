export function handleFullPageButton(): void {
  const output = document.querySelector('.demo-layout__readme > h1');
  if (output) {
    const btn = document.createElement('a');
    btn.title = 'Open';
    btn.href = window.location.href;
    btn.target = '_parent';
    btn.className = 'demo-layout__full-page-button';
    output.appendChild(btn);
  }
}
