import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Weather.module.css"
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function Weather() {
  const { locales } = useRouter();
  const intl = useIntl();
  const location = intl.formatMessage({ id: 'page.weather.content.location' });
  const date = intl.formatMessage({ id: 'page.weather.content.date' });
  const tempMax = intl.formatMessage({ id: 'page.weather.content.tempMax' });
  const tempMin = intl.formatMessage({ id: 'page.weather.content.tempMin' });
  const humidity = intl.formatMessage({ id: 'page.weather.content.humidity' });

  const [data, setData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
  var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=us&key=${apiKeyInfo}&contentType=json`;

  const celsusConvert = (fahrenheit) => { return Math.round((fahrenheit - 32) * 5/9) + `°C` };

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

  return(
    <>
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {
          data.map((item, key) => (
            (key < 7) && (
              <div key={key} className={styles.weatherContainer}>
                <div className={styles.weatherMainContainer}>
                  <Image src="/Sun.svg" width={80} height={80} alt="sun icon" priority={true} />
                  <div className={styles.currentWeather}>
                    <h2>{data.length > 0 ? item.conditions : ''}</h2>
                    <h1>{data.length > 0 ? celsusConvert(item.temp) : ''}</h1>
                    <div className={styles.locationContainer}>
                      <Image src="/location_icon.svg" width={10} height={11} alt="location icon" priority={true} />
                      <p>{location}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.weatherDetail}>
                  <h3>{date}{data.length > 0 ? item.datetime : ''}</h3>
                  <h3>{tempMax}{data.length > 0 ? celsusConvert(item.tempmax) : ''}</h3>
                  <h3>{tempMin}{data.length > 0 ? celsusConvert(item.tempmin) : ''}</h3>
                  <h3>{humidity}{data.length > 0 ? Math.round(item.humidity) : ''}%</h3>
                </div>
              </div>
          )))
        }
      </Slider>
    </div>
    </>
  )
}