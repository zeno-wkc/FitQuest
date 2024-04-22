import Image from "next/image";
import styles from "./Weather.module.css";
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
        {(() => {
          console.log(data[0]);
          const celsusConvert = (fahrenheit) => { return ((fahrenheit - 32) * 5/9).toFixed(1) + `°C` };

          return(
<></>
          )
        })()}
      </div>
    </>
  );
}