window.showcase = (container) => {
  container.className = 'bfg bfg--row bfg--gap bfg--wrap';

  const mapper = link => `
  <div class="bfg__box bfg__box--6">
    <div class="bfg__content">
      <iframe src="${link.href}"></iframe>
      <a href="${link.href}" target="_blank">&nearrow;</a>
    </div>
  </div>`;

  container.innerHTML = Array.prototype.map.call(
    container.querySelectorAll('a'),
    mapper
  ).join('\n') + '\n';
};
