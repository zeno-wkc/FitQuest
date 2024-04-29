import styles from "./Articles.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Are you drinking enough water?",
    link: "/water",
    image: "/water.png",
    alt: "Water",
  },
  {
    title: "Adding Protein to your Salads",
    link: "/salads",
    image: "/salad.png",
    alt: "Salad",
  },
  {
    title: "How To Properly Track Calories",
    link: "/calories",
    image: "/smartWatch.png",
    alt: "Smart Watch",
  },
  {
    title: "Best Fruits To Add To Your Shakes",
    link: "/shakes",
    image: "/smoothie.png",
    alt: "Smoothie",
  },
];

export default function Articles() {
  const [bookmarks, setBookmarks] = useState(() => {
    const storedBookmarks = typeof window !== "undefined" ? localStorage.getItem("bookmarks") : null;
    console.log(storedBookmarks);
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  // Function to toggle the bookmark status
  const handleBookmarkClick = (event, index) => {
    event.preventDefault();
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };

  return (
    <div className={styles.articleContainer}>
      {/* Map through articles and render each article */}
      {articles.map((article, index) => (
        <div key={index} className={styles.articleCardContainer}>
          <Link href={article.link}>
            <div className={styles.cardImgContainer}>
              <Image className={styles.cardImg} src={article.image} width={155} height={170} alt={article.alt} />
            </div>
            <div className={styles.titleContainer}>
              <p>{article.title}</p>
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