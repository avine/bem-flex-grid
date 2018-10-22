import { chart } from './scripts/chart';
import { enableActions } from './scripts/enable-actions';
import { fillGrid } from './scripts/fill-grid';
import { showcase } from './scripts/showcase';
import { viewCode } from './scripts/view-code';

/* ===== Export as global ===== */

window['Demo'] = {
  chart,
  enableActions,
  fillGrid,
  showcase,
  viewCode,
};
