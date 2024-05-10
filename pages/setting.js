import Head from "next/head";
import styles from "@/styles/Setting.module.css";
import { settingValues } from "@/data/inventory";
import Link from "next/link";
import { useState } from "react";
import Switch from 'react-switch';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

export default function setting() {
  const page = "setting";
  const [settings, setSettings] = useState(settingValues);

  const handleChange = (groupIndex, itemIndex) => (checked) => {
    setSettings(prevSettings => {
      const newSettings = [...prevSettings];
      newSettings[groupIndex].settingItems[itemIndex].default = checked;
      return newSettings;
    });
  };
  //console.log(settings);

  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <div className={styles.mobileContainer}>
        <TopBar page={page} />
        <main className={`${styles.main}`}>
          <div className={styles.settingContainer}>
            {
              (settingValues) && (
                settingValues.map((groupItem, groupKey) => (
                  <div key={groupKey} className={styles.settingGroupContainer}>
                    <p className={styles.settingGroupTitle}>{groupItem.title}</p>
                    {
                      (groupItem.settingItems) && (
                      groupItem.settingItems.map((item, itemKey) => (
                        <div className={styles.settingBtn} key={itemKey} >
                          <i className={`${`icon-Group-${item.icon}`} ${styles.settingBtnIcon}`}></i>
                          <p className={styles.settingBtntitle}>{item.itemName}</p>
                          <Switch
                            checked={item.default}
                            onChange={handleChange(groupKey, itemKey)}
                            onColor="#FF5C00"
                            onHandleColor="#ffffff"
                            handleDiameter={24}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            activeBoxShadow = '0 0 2px 3px #FF7C32'
                            height={28}
                            width={50}
                            className={`${`react-switch`} ${styles.switchBtn}`}
                          />
                        </div>
                      )))
                    }
                  </div>
              )))
            }
          </div>
        </main>
        <BottomBar />
      </div>
    </>
  )
} 