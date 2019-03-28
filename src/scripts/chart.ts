import Highcharts from 'highcharts';

import options from './chart-options';

let optionIndex = 0;
export const chart = (ctx: HTMLCanvasElement) => {
  const option: any = options[optionIndex];
  optionIndex = (optionIndex + 1) % options.length;
  return Highcharts.chart(ctx, option);
};
