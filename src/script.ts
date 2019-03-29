import { handleBackButton } from './scripts/back-button';
import { chart } from './scripts/chart';
import { enableActions, handleAction } from './scripts/enable-actions';
import { fillGrid } from './scripts/fill-grid';
import { showcase } from './scripts/showcase';
import { handleTabs } from './scripts/tabs';
import { inIframe } from './scripts/util';
import { viewCode } from './scripts/view-code';

/* ===== Export as global ===== */

window['Demo'] = {
  chart,
  enableActions,
  fillGrid,
  handleAction,
  showcase,
  viewCode,
};

/* ===== Enable tabs-navigation and back-button ===== */

if (!window.location.pathname.match(/\/demo\.html/)) {
  document.addEventListener('DOMContentLoaded', () => {
    handleTabs();

    if (!inIframe()) {
      handleBackButton();
    }
  });
}
