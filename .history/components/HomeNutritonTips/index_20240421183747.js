import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeNutritonTips() {
  return (
    <>
      <div className={styles.titleContainer}>
        <h3>Nutrition Tips</h3>
        <Link className={styles.showBtnLink} href="/">
        Show more
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <Image className={styles.cardImage} src="/card-3.png" width={400} height={164} alt="homepage background" />
        <div className={styles.contentContainer}>
          <h2>Adding protein to your salads</h2>
          <p>Nutrition Article</p>
        </div>
      </div>
    </>
  )
}