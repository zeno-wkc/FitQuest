import Head from "next/head";
import styles from "@/styles/Water.module.css";
import Image from "next/image";
import TopBarBack from "@/components/TopBarBack";
import BottomBar from "@/components/BottomBar";

export default function Water() {
  return (
    <>
      <Head>
          <title>FitQuest - Article "Water"</title>
          <meta name="description" content="FitQuest - Article - Water" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBarBack linkPath="/nutrition" linkText="Back" />
      <main className={`${styles.main}`}>
        <div className={styles.articleContainer}>
          <div className={styles.titleContainer}>
            <h1>Are you drinking enough water every day?</h1>
            <p>Health</p>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              <Image className={styles.Img} src="/waterExtended.png" width={390} height={200} alt="A glass of water" />
            </div>
            <p className={styles.paragraph}>Staying hydrated is vital, as the human body is about 60% water. It's recommended to drink eight 8-ounce glasses of water per day. Here are 6 health benefits:</p>
            <ul className={styles.listContainer}>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Boosts Physical Performance</span> If you dont stay hydrated, your physical performance can suffer, especially during intense exercise or high heat. Dehydration can lead to altered body temperature control, reduced motivation, and increased fatigue.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Aids Weight Loss</span> Drinking water before meals can increase satiety and boost metabolic rate, potentially resulting in consuming fewer calories. Studies show that dieters who drink water before meals lose more weight than those who don’t.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Impacts Energy Levels and Brain Function</span> Even mild dehydration can impair cognitive abilities and brain function. Fluid loss through normal daily activities or exercise can lead to decreased energy levels and brain fog.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Help Prevent and Alleviate Headaches</span> Dehydration is a common trigger for headaches and migraines. Drinking water can help prevent and relieve these symptoms, according to research studies.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Aid in the Treatment of Kidney Stones</span> Higher fluid intake can dilute minerals in urine, reducing the likelihood of crystal formation and the development of kidney stones.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Helps Prevent Hangovers</span> Alcohol-induced dehydration can lead to hangover symptoms. Drinking water between alcoholic beverages and before bed can help counteract dehydration and reduce hangover severity.</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <BottomBar />
    </>
  );
}