import "@/styles/globals.css";
import '@/styles/Custom-slick-theme.css';
import { useRouter } from 'next/router';
import { IntlProvider } from "react-intl";
import zh from '../i18n/zh.json';
import en from '../i18n/en.json';

const messages = { zh, en };
const getDirection = (locale) => {return "ltr"};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  )
}
