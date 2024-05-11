import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./NewVideo.module.css";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function NewVideo() {
  const { locales } = useRouter();
  const intl = useIntl();
  const filterVideo = videoInventory;
  const newVideo = intl.formatMessage({ id: 'page.newVideo.title' });
  const showMore = intl.formatMessage({ id: 'page.global.showMore' });
  const bodyPart1 = intl.formatMessage({ id: 'page.result.bodyPart1' });
  const bodyPart2 = intl.formatMessage({ id: 'page.result.bodyPart2' });
  const bodyPart3 = intl.formatMessage({ id: 'page.result.bodyPart3' });
  const bodyPart4 = intl.formatMessage({ id: 'page.result.bodyPart4' });
  
  const bodypart = (items) => {
    let tempItems = "";
    let hasYoga = false;
    items.forEach((item) => {
      if (item.includes('upperBody')) tempItems += `${bodyPart1} / `;
      if (item.includes('lowerBody')) tempItems += `${bodyPart2} / `;
      if (item.includes('coreBody')) tempItems += `${bodyPart3} / `;
      if (['fullBody', 'yoga'].some(keyword => item.includes(keyword))) {
        if (!hasYoga) {
          tempItems += `${bodyPart4} / `;
          hasYoga = true;
        }
      }
    });
    return tempItems.slice(0, -2);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h3>{newVideo}</h3>
        <Link className={styles.showBtnLink} href="/workout">{showMore}<i className={`${`icon-Group-186`} ${styles.showMoreBtnIcon}`}></i></Link>
      </div>
      <div className={styles.videoSliderContainer}>
        <Slider {...settings}>
          { 
            filterVideo.map((item, key) => (
              (key < 9) && (
                <div key={key} className={styles.videoCardContainer}>
                  <Link className={styles.linkage} href={{ pathname: '/videoPageFull', query: { videoURL: item.videoURL }}}>
                    <div key={`video${key}`} className={styles.videoCardItems}>
                      <div className={styles.imageContainer}>
                        <Image className={styles.imageItem} src={`/image-thumbnail/${item.thumbnailLink}.jpeg`} alt={item.videoName} width={1280} height={720} priority={true} />
                      </div>
                      <div className={styles.videoContentContainer}>
                        <div className={styles.videoContentUpperContainer}>
                          <h2>{bodypart(item.tag)}</h2>
                        </div>
                        <div className={styles.videoContentBottomContainer}>
                          <h3 className={styles.videoTitle}>{item.videoName}</h3>
                          <p>{item.videoTime}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            )))
          }
        </Slider>
      </div>
    </>
  )
}