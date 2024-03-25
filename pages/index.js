import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FitQuest</title>
        <meta name="description" content="A fitness application, providing workout videos and nutrition information for users." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <page className={styles.landingPage}>
          <Image className={styles.landingImage} src='/images/landing-image.png' alt="A female and male doing push-ups" width={430} height={932} priority/>
          <section className={styles.landingInfo}>
            <h1>Welcome To <br></br>FitQuest</h1>
            <h3>Earn Your Fitness, Unlock Your Rewards!</h3>
            <button>GET STARTED<div className={styles.arrowRight}></div></button>
            <div>
              <p>Already have account?</p> <Link className={styles.signIn} href='/'>Sign in</Link>
            </div>
          </section>
        </page>
     
      </main>
    </>
  );
}
