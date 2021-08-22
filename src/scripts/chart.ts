import Highcharts, { Chart } from 'highcharts';

import options from './chart-options';

let optionIndex = 0;
export const chart = (ctx: HTMLCanvasElement): Chart => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const option: any = options[optionIndex];
  optionIndex = (optionIndex + 1) % options.length;
  return Highcharts.chart(ctx, option);
};
