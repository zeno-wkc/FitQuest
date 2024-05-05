import Head from "next/head";
import styles from "@/styles/SignIn.module.css";
import Image from "next/image";
import { useState } from  "react";

export default function signIn() {
  return (
    <>
      <Head>
        <title>FitQuest - Sign In</title>
        <meta name="description" content="FitQuest - Sign In" />
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