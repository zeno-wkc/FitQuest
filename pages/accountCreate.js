import Head from "next/head";
import styles from "@/styles/AccountCreate.module.css";
import Image from "next/image";
import { useState} from  "react";
import fs from 'fs';
import path from "path";
import TopBarTranslate from "@/components/TopBarTranslate";
import HeadSlider from "@/components/HeadSlider";
import UploadForm from "@/components/UploadForm";

export async function getStaticProps() {
  try {
    const folderPath = path.join(process.cwd(), 'public', 'image-head');
    const filesCount  = fs.readdirSync(folderPath).length;
    return { props: { filesCount } };
  } 
  catch (error) {
    return { props: { filesCount: 0 } };
  }
}

export default function AccountCreate({ filesCount }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <>
      <Head>
        <title>FitQuest - Create Login Account</title>
        <meta name="description" content="FitQuest Create Login Account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
      <TopBarTranslate />
        <main className={`${styles.main}`}>
          <div className={styles.createAccountContainer}>

            <div className="Test"><UploadForm /></div>

            <h1 className={styles.titleContainer}>Create your<br />Account</h1> 
            <div className={styles.headerSelectorArrowContainer}>
              <Image className={styles.arrowImgItem} src="/Arrow_drop_down_big.png" width={36} height={36} alt="image head 02" />
            </div>
            <div className={styles.headerSelector}>
              <HeadSlider filesCount={filesCount} />
            </div>
            <div className={styles.headerSelectorContentContainer}>
              <h2>Select the avatar you like</h2>
              <p>There are 16  avatars for you to choose,<br/> or you can upload your profile locally.</p>
              <button className={styles.uploadBtn} onClick={handleOpenPopup}>
                <i className="icon-Group-167"></i>
                <p>Upload image</p>
              </button>
              <h3>Upload from a Local File</h3>
              <p>Max 5MB, Format: jpg, png</p>
              <button className={styles.nextBtn} onClick={() => {}}>NEXT <i className="icon-Group-165"></i></button>
            </div>
          </div>
          {popupOpen && (
            <div className={`${styles.popupContainer} ${styles.overlay}`}>
              <div className={styles.popupContent}>
                <button className={styles.closeBtn} onClick={handleClosePopup}>
                  <i className="icon-Group-187"></i>
                </button>
                {
                  <>

                  </>
                }
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}