export function handleBackButton() {
  const output = document.querySelector('.demo-layout__readme');
  if (output) {
    const btn = document.createElement('a');
    btn.innerHTML = '&longleftarrow; back';
    btn.href = '../demo.html';
    btn.className = 'demo-layout__back-button';
    output.appendChild(btn);
  }
}
