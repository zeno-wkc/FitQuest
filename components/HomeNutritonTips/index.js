import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeNutritonTips() {
  return (
    <div className={styles.homeNutritonTipsContainer}>
      <div className={styles.titleContainer}>
        <h3>Nutrition Tips</h3>
        <Link className={styles.showBtnLink} href="/nutrition">
        Show more
        </Link>
      </div>
      <div className={styles.homeNutritonTipsContentContainer}>
        <Link className={styles.cardContainerLink} href="/salads">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-3.png" width={400} height={164} alt="card image background" priority={true} />
            <div className={styles.contentContainer}>
              <h2>Adding protein to your salads</h2>
              <p>Nutrition Article</p>
            </div>
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-1.png" width={400} height={164} alt="card image background" priority={true} />
            <div className={styles.contentContainer}>
              <h2>How to properly track calories</h2>
              <p>Nutrition Article</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}