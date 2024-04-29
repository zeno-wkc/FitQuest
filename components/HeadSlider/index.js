
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeadSlider.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";

export default function HeadSlider({ filesCount }) {
  const [count, setCount] = useState(filesCount);
  const [selectedValue, setSelectedValue] = useState(null);
  const settings = {
    className: "slider variable-width center",
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    variableWidth: true
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <>
      <div className={styles.headerSelector}>
      { count && (
            <Slider className={styles.sliderContainer} {...settings}>
              {Array.from({ length: count + 1 }, (_, i) => (
                (i !== 0) && (
                  <div key={i} style={{ width: 170 }} className={styles.imgContainer}>
                    <label htmlFor={`headImg${i}`}>
                      <input type="radio" id={`headImg${i}`} name="headImg" value={`headImg${i}`} placeholder= 'empty' onChange={handleRadioChange} />
                      {(i !== 0 && i <= 9) 
                        ? (<Image className={`${styles.imgItem} ${selectedValue === `headImg${i}` ? styles.selectedImage : ''}`} src={`/image-head/head_0${i}.png`} width={300} height={300} alt={`image head 0${i}`} />)
                        : ((i !== 0) 
                          ? (<Image className={`${styles.imgItem} ${selectedValue === `headImg${i}` ? styles.selectedImage : ''}`} src={`/image-head/head_${i}.png`} width={300} height={300} alt={`image head ${i}`} />)
                          : <></>
                        )
                      }
                    </label>
                  </div>
                )
              ))}
            </Slider>
        )}
      </div>
    </>
  )
};
