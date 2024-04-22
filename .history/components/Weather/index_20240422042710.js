import Image from "next/image";
import styles from "@/styles/Weather.module.css";
import { useState, useEffect } from "react";

export default function Weather() {
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
      <div className={`${styles.WeatherCardContainer}`}>
        { data.map((i, index) => {
            const celsusConvert = (fahrenheit) => { return ((fahrenheit - 32) * 5/9).toFixed(1) + `°C` };

            return(
              <>
                {console.log(i)}
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
      </div>
    </>
  );
}