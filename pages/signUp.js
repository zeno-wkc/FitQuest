import Head from "next/head";
import styles from "@/styles/SignUp.module.css";
import Image from "next/image";
import { useState } from  "react";

export default function signUp() {
  return (
    <>
      <Head>
        <title>FitQuest - Quiz</title>
        <meta name="description" content="FitQuest Quiz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      </main>
    </>
  )
}