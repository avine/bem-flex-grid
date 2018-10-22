import Highcharts from 'highcharts';

// tslint:disable:object-literal-sort-keys

const option1 = {
  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016',
  },
  subtitle: {
    text: 'Source: thesolarfoundation.com',
  },
  yAxis: {
    title: {
      text: 'Number of Employees',
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },
  series: [
    {
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
};

const option2 = {
  chart: {
    type: 'bar',
  },
  title: {
    text: '', // 'Fruit Consumption',
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    title: {
      text: '', // 'Fruit eaten',
    },
  },
  series: [
    {
      name: 'Jane',
      data: [1, 0, 4],
    },
    {
      name: 'John',
      data: [5, 7, 3],
    },
  ],
};

const option3 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Browser market shares in January, 2018',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true,
        },
        {
          name: 'Internet Explorer',
          y: 11.84,
        },
        {
          name: 'Firefox',
          y: 10.85,
        },
        {
          name: 'Edge',
          y: 4.67,
        },
        {
          name: 'Safari',
          y: 4.18,
        },
        {
          name: 'Sogou Explorer',
          y: 1.64,
        },
        {
          name: 'Opera',
          y: 1.6,
        },
        {
          name: 'QQ',
          y: 1.2,
        },
        {
          name: 'Other',
          y: 2.61,
        },
      ],
    },
  ],
};

const option4 = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Stacked column chart',
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption',
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
      },
    },
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: 'John',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
    },
  ],
};
// tslint:enable:object-literal-sort-keys

const options = [option1, option2, option3, option4];
let optionIndex = 0;
export const chart = (ctx: HTMLCanvasElement) => {
  const option = options[optionIndex];
  optionIndex = (optionIndex + 1) % options.length;
  return Highcharts.chart(ctx, option);
};
