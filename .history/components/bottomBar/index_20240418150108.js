import styles from "./BottomBar.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";


export default function BottomBar() {
  return (
    <div className={styles.bottomBarContainer}>

        <div className={`${styles.workoutBtnContainer} ${styles.bottomBarBtn}`}>
          <i class="icon-Group-163"></i>
          <h6>Workout</h6>
        </div>

      <div className={`${styles.rewardsBtnContainer} ${styles.bottomBarBtn}`}>        
        <i class="icon-Group-162"></i>
        <h6>Rewards</h6>
      </div>
      <Link href="/">
        <div className={`${styles.homeBtnContainer} ${styles.bottomBarBtn}`}>
          <i class="icon-Group-159"></i>
          <h6>Home</h6>
        </div>
      </Link>
      <div className={`${styles.nutritionBtnContainer} ${styles.bottomBarBtn}`}>
        <i class="icon-Group-160"></i>
        <h6>Nutrition</h6>
      </div>
      <div className={`${styles.settingBtnContainer} ${styles.bottomBarBtn}`}>
        <i class="icon-Group-161"></i>
        <h6>Setting</h6>
      </div>
    </div>
  )
}