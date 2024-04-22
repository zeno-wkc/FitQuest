import styles from "./HomeNutritonTips.module.css";
import Link from "next/link";
import Image from "next/image";


export default function HomeNutritonTips() {
  return (
    <div className={styles.titleContainer}>
      <h3>Nutrition Tips</h3>
      <Link className={styles.alertBtnLink} href="/">
      <p>Show more</p>
      </Link>
    </div>
  )
}