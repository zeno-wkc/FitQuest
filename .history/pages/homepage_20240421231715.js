import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import { useState, useEffect } from "react";
import BottomBar from "@/components/BottomBar";
import TopBar from "@/components/TopBar";
import HomeNutritonTips from "@/components/HomeNutritonTips";
import FitnessStatistics from "@/components/FitnessStatistics";

export default function Home() {
  const [data, setData] = useState([]);
  
  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
  var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=us&key=${apiKeyInfo}&contentType=json`;

  useEffect(() => {
    fetch(url, {
      "method": "GET",
      "headers": {}
      })
      .then((res) => res.json())
      .then((info) => {
        setData(info.days)
        console.log(info.days.temp);
      })
  }, [])

  return (
    <>
      <TopBar />
      <main className={`${styles.mainContainer}`}>
        { data.map((i, index) => {
            const celsusConvert = (fahrenheit) => { return ((fahrenheit - 32) * 5/9).toFixed(1) + `°C` };

            return(
              <>
                <div className={styles.temp} key={index}>
                  { celsusConvert(i.temp) }
                </div>
                <div className={styles.tempMax} key={index}>
                  High: { celsusConvert(i.tempmax) }
                </div>
                <div className={styles.tempMin}  key={index}>
                  Low: { celsusConvert(i.tempmin) }
                </div>
              </>
            )
          })
        }
        <FitnessStatistics />
        <HomeNutritonTips />
      </main>
      <BottomBar />
    </>
  );
}
