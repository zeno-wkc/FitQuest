import styles from "./Articles.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/inventory";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";


export default function Articles() {
  const { locales } = useRouter();
  const intl = useIntl();
  const articleTitle = (index) => {
    return intl.formatMessage({ id: `page.article.item0${index + 1}.title` })
  };


  const [bookmarks, setBookmarks] = useState(() => {
    const storedBookmarks = typeof window !== "undefined" ? localStorage.getItem("bookmarks") : null;
    console.log(storedBookmarks);
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  const handleBookmarkClick = (event, index) => {
    event.preventDefault();
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };

  return (
    <div className={styles.articleContainer}>
      {articles.map((article, index) => (
        <div key={index} className={styles.articleCardContainer}>
          <Link href={article.link}>
            <div className={styles.cardImgContainer}>
              <Image className={styles.cardImg} src={article.image} width={155} height={170} alt={article.alt} />
            </div>
            <div className={styles.titleContainer}>
              <p>{articleTitle(index)}</p>
              <button className={`${styles.bookmarkBtn} ${bookmarks[index] ? styles.selectedImage : ''}`} onClick={(event) => handleBookmarkClick(event, index)}>
                <i className="icon-Group-173"></i>
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
};