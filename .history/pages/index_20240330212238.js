import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { inventory } from "@/data/inventory";

export default function Home() {
  const questions = inventory.question;
  const question = getDate(questions, 'question');
  function getDate(obj, info) { 
    for (let key in obj){
      result = obj[key].info;
      return result;
    }
  }

  console.log("question :", question);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>

      </main>
    </>
  );
}
