import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeNutritonTips() {
  return (
    <div className={styles.titleContainer}>
      <h3>Nutrition Tips</h3>
      <Link className={styles.showBtnLink} href="/">
      Show more
      </Link>
    </div>
    <div>
      <Image className={styles.cardImg} src="" width={} height={} />
    </div>
  )
}