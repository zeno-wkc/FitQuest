import Head from "next/head";
import styles from "@/styles/accountCreate.module.css";
import Image from "next/image";
import { useState } from  "react";
import TopBar from "@/components/TopBar";
import fs from 'fs';
import path from "path";

export async function getStaticProps() {
  try {
    const folderPath = path.join(process.cwd(), 'public', 'image-head');
    const filesCount  = fs.readdirSync(folderPath).length;
    return { props: { filesCount } };
  } catch (error) {
    return { props: { filesCount: 0 } };
  }
}

export default function accountCreate({ filesCount }) {
  const [count, setCount] = useState(filesCount);

  return (
    <>
      <Head>
        <title>FitQuest - Create Login Account</title>
        <meta name="description" content="FitQuest Create Login Account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className={`${styles.main}`}>
        <h1>Create your Account</h1>
        <h1 className={styles.number}>Number of Files in image-header Folder: {count}</h1>
        <ul>
        </ul>
      </main>
    </>
  )
}