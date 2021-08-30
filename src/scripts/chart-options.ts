const option1 = {
  chart: {
    type: 'column',
  },
  title: {
    text: '', // 'Monthly Average Rainfall'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: '', // 'Rainfall (mm)',
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
    },
    {
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
    },
    {
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    },
  ],
};

const option2 = {
  chart: {
    type: 'line',
  },
  title: {
    text: '', // 'Monthly Average Temperature'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: {
    title: {
      text: '', // 'Temperature (°C)',
    },
  },
  plotOptions: {
    /*line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }*/
  },
  series: [
    {
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    },
    {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
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
    type: 'bar',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
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

export default [option1, option2, option3, option4];
