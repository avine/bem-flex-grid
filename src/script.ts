import { chart } from './scripts/chart';
import { enableActions, handleAction } from './scripts/enable-actions';
import { fillGrid } from './scripts/fill-grid';
import { showcase } from './scripts/showcase';
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
