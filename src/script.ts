import { fillGrid } from './js/fill-grid';
import { fullScreenSwitcher } from './js/full-screen-switcher';
import { showcase } from './js/showcase';
import { viewCode } from './js/view-code';

/* ===== Export as global ===== */

window['Demo'] = {
  fillGrid,
  fullScreenSwitcher,
  showcase,
  viewCode,
};
