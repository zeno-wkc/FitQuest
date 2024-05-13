import 'react-accessible-accordion/dist/fancy-example.css';
import styles from "./FaqList.module.css";
import { faqItems } from "@/data/inventory";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';


export default function FaqList() {
  const { locales } = useRouter();
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Accordion allowZeroExpanded  className={styles.faqItemsContainer}>
      {faqItems.map((item, index) => (
        <AccordionItem key={index} className={styles.faqItem}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.faqBtn}>
              <h3><span className={styles.faqNumber}>{index+ 1}</span><span className={styles.faqQuestion}><FormattedMessage id={`page.faq.question0${index + 1}`} /></span></h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.faqAnswerContainer}>
            <p className={styles.faqAnswer}><FormattedMessage id={`page.faq.answer0${index + 1}`} /></p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}