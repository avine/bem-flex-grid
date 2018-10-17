import { fillGrid } from './scripts/fill-grid';
import { fullScreenSwitcher } from './scripts/full-screen-switcher';
import { showcase } from './scripts/showcase';
import { viewCode } from './scripts/view-code';

/* ===== Export as global ===== */

window['Demo'] = {
  fillGrid,
  fullScreenSwitcher,
  showcase,
  viewCode,
};
