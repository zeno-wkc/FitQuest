import styles from "./History.module.css";
import Link from "next/link";
import { history } from "@/data/inventory";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";

export default function History() {
  const { locales } = useRouter();
  const intl = useIntl();
  const showMore = intl.formatMessage({ id: 'page.global.showMore' });
  const historyTitle = intl.formatMessage({ id: 'page.history.title' });

  return (
    <>
      <div className={styles.titleContainer}>
        <h3>{historyTitle}</h3>
        <Link className={styles.showBtnLink} href="/rewards">{showMore}<i className={`${`icon-Group-186`} ${styles.showMoreBtnIcon}`}></i></Link>
      </div>
      <div className={styles.historyContentContainer}>
        {
          history.map((item, key) => (
            <div key={key} className={styles.historyItemContainer}>
              <i className={`${`icon-Group-${item.icon}`} ${styles.historyListIcon}`}></i>
              <div className={styles.historyContentContainer}>
                <p className={styles.historyContentTitle}>
                  {(() => { 
                      switch (item.title) {
                        case 'Outdoor Running':
                          return <FormattedMessage id="page.history.title01" />;
                        case 'Full Body Workout':
                          return <FormattedMessage id="page.history.title02" />;
                        case 'Upper Body Workout':
                          return <FormattedMessage id="page.history.title03" />;
                        case 'Core Workout':
                          return <FormattedMessage id="page.history.title04" />;
                  }})()}
                </p>
                <p className={styles.historyContentResult}>{item.result}</p>
              </div>
              <p className={styles.historyContentDate}>{item.date}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}