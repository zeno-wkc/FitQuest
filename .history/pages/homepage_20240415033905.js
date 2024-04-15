import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  
  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
  var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=${apiKeyInfo}&options=beta&contentType=json`

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
      <main className={`${styles.main}`}>
        {
          data.map((i, index) => {
            const celsusConvert = (fahrenheit) => { return ((fahrenheit - 32) * 5/9).toFixed(1) + `°C` };


            return(
              <>
                <div className={styles.temp} key={index}>
                  { celsusConvert(i.temp) }
                </div>
                <div className={styles.tempMax} key={index}>
                  { celsusConvert(i.tempmax) }
                </div>
                <div className={styles.tempMin}  key={index}>
                  { celsusConvert(i.tempmin) }
                </div>
              </>
            )
          })
        }
      </main>
    </>
  );
}
