import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeNutritonTips() {
  return (
    <div className={styles.homeNutritonTipsContainer}>
      <div className={styles.titleContainer}>
        <h3>Nutrition Tips</h3>
        <Link className={styles.showBtnLink} href="/">
        Show more
        </Link>
      </div>
      <div className={styles.homeNutritonTipsContentContainer}>
        <Link className={styles.cardContainerLink} href="/homepage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-3.png" width={400} height={164} alt="homepage background" />
            <div className={styles.contentContainer}>
              <h2>Adding protein to your salads</h2>
              <p>Nutrition Article</p>
            </div>
          </div>
        </Link>
        <Link className={styles.cardContainerLink} href="/hompage">
          <div className={styles.cardContainer}>
            <Image className={styles.cardImage} src="/card-1.png" width={400} height={164} alt="homepage background" />
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