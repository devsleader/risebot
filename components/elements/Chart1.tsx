'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled
const HighchartsReact = dynamic(
  () => import('highcharts-react-official'),
  { ssr: false }
);

interface ChartDataItem {
  name: string;
  y: number;
  color: string;
}

const chartData: ChartDataItem[] = [
  {
    name: 'Team',
    y: 7.5,
    color: '#AFC5FF',
  },
  {
    name: 'Staking',
    color: '#FDEBB3',
    y: 9.5
  },
  {
    name: 'Advisors',
    color: '#ACF2C4',
    y: 10.0
  },
  {
    name: 'Liquidity',
    color: '#CDBDF3',
    y: 12.0
  },
  {
    name: 'Ecosystem',
    color: '#E89F8E',
    y: 16.33
  },
  {
    name: 'Marketing',
    y: 16.33,
    color: '#6574EB',
  },
  {
    name: 'Private Sale',
    y: 30.0,
    color: '#ACE5F2',
  }
];

const Chart1: React.FC = () => {
  const [Highcharts, setHighcharts] = useState<any>(null);
  const [chartOptions, setChartOptions] = useState<any>(null);

  useEffect(() => {
    // Import Highcharts only on the client side
    const loadHighcharts = async () => {
      const highchartsModule = await import('highcharts/highstock');
      setHighcharts(highchartsModule.default);
      
      const options = {
        chart: {
          type: 'pie',
          plotBackgroundColor: undefined,
          backgroundColor: undefined,
          width: 490,
          height: 490,
        },
        title: {
          text: '',
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        credits: {
          enabled: false
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            states: {
              inactive: {
                opacity: 0.4
              }
            },
            borderWidth: 0,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              distance: -25,
              format: '',
              style: {
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 'bold',
                color: '#fff',
                textOutline: 'none'
              },
            },
            showInLegend: false,
          },
        },
        series: [{
          type: 'pie',
          innerSize: '60%',
          data: chartData
        }]
      };
      
      setChartOptions(options);
    };
    
    loadHighcharts();
  }, []);

  if (!Highcharts || !chartOptions) {
    return <div>Loading chart...</div>;
  }

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default Chart1;