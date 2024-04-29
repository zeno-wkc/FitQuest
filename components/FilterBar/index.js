import styles from "./FilterBar.module.css"

export default function FilterBar() {
  return(
    <div className={styles.filterBarContainer}>
      <ul className={styles.filterBar}>
        <li className={styles.filterBarBtn}><p>Diets</p></li>
        <li className={styles.filterBarBtn}><p>Recipes</p></li>
        <li className={styles.filterBarBtn}><p>Calories</p></li>
        <li className={styles.filterBarBtn}><p>Tips</p></li>
      </ul>
    </div>
  )
}