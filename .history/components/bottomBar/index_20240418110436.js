import styles from "./BottomBar.module.css";
import { useState, useEffect } from "react";
import videoInventory from "@/data/videoInventory.json";
import Link from "next/link";


export default function BottomBar() {
  return (
    <div className={styles.bottomBarContainer}>
      <div className={styles.workoutBtnContainer}>
        <i class="icon-Group-163"></i>
        <h6>Workout</h6>
      </div>
      <div className={styles.rewardsBtnContainer}>        
        <i class="icon-Group-162"></i>
        <h6>Rewards</h6>
      </div>
      <div className={styles.homeBtnContainer}>
        <i class="icon-Group-159"></i>
        <h6>Home</h6>
      </div>
      <div className={styles.nutritionBtnContainer}>
        <i class="icon-Group-160"></i>
        <h6>Nutrition</h6>
      </div>
      <div className={styles.settingBtnContainer}>
        <i class="icon-Group-161"></i>
        <h6>Setting</h6>
      </div>
    </div>
  )
}