import Head from "next/head";
import styles from "@/styles/SignUp.module.css";
import Image from "next/image";
import { useState } from  "react";

export default function signUp() {
  return (
    <>
      <Head>
        <title>FitQuest - Sign Up</title>
        <meta name="description" content="FitQuest Sign Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <main className={`${styles.main}`}>
      </main>
    </>
  )
}