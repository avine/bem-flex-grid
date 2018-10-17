import { enableActions } from './scripts/enable-actions';
import { fillGrid } from './scripts/fill-grid';
import { showcase } from './scripts/showcase';
import { viewCode } from './scripts/view-code';

/* ===== Export as global ===== */

window['Demo'] = {
  enableActions,
  fillGrid,
  showcase,
  viewCode,
};
