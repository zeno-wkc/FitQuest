import Head from "next/head";
import styles from "@/styles/Salads.module.css";
import Image from "next/image";
import TopBarBack from "@/components/TopBarBack";
import BottomBar from "@/components/BottomBar";

export default function Water() {
  return (
    <>
      <Head>
          <title>FitQuest - Article "Water"</title>
          <meta name="description" content="FitQuest - Article - Water" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBarBack linkPath="/nutrition" linkText="Back" />
      <main className={`${styles.main}`}>
        <div className={styles.articleContainer}>
          <div className={styles.titleContainer}>
            <h1>Adding Protein to your salads</h1>
            <p>Health</p>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              <Image className={styles.Img} src="/saladsExtended.png" width={390} height={200} alt="A bowl of salads" />
            </div>
            <p className={styles.paragraph}>Salads are often celebrated for their fresh, crisp vegetables and vibrant dressings, but to truly elevate your salad game and turn it into a satisfying meal, you need to incorporate proteins. Adding protein not only enhances the flavor but also ensures your salad is nutritious and filling. Here are five protein-packed ingredients that will take your salad from ordinary to extraordinary:</p>
            <ul className={styles.listContainer}>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Grilled Chicken Breast</span> - Grilled chicken breast is a classic choice for adding protein to salads. It's lean, versatile, and adds a delicious smoky flavor to your greens. Season it with your favorite herbs and spices before grilling to infuse even more flavor. Slice or dice the chicken and toss it with your salad for a hearty and satisfying meal.</p>
              </li>
              <li className={styles.listItem}>
                  <p><span className={styles.bold}>Quinoa</span> - Quinoa is a complete protein, meaning it contains all nine essential amino acids that our bodies need for proper functioning. It's also gluten-free and packed with fiber, making it an excellent choice for those with dietary restrictions or anyone looking to boost their protein intake. Cooked quinoa adds a nutty flavor and a delightful crunch to salads, making them more substantial and nutritious.</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <BottomBar />
    </>
  );
}