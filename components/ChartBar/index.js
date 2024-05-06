import styles from './ChartBar.module.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function ChartBar() {
  const { locales } = useRouter();
  const intl = useIntl();
  const calories = intl.formatMessage({ id: 'page.chart.calories' });

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [{
          label: 'Calories',
          data: [200, 300, 680, 450, 700, 300, 150],
          borderColor: '#FF5C00',
          backgroundColor: '#FF5C00'
      }]
    })

    setChartOptions({
      plugins: {
        legend: { position: 'top' },
        title: { display: false, text: "" },
        width: "130",
      },
      maintainAspectRatio: false, 
      responsive: true,
    })
  }, []);

  return (
    <div className={styles.chartBarContainer}>
      <h3>{calories}</h3>
      <div className={styles.chartBarContentContainer} style={{height:'134px', width:'134px'}}>
          <Bar data={chartData} options={chartOptions} />
      </div>
      <p><span>398</span>cal</p>
    </div>
  )
}