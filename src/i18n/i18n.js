import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import RU from './translation/ru/ru.json';
import EN from './translation/en/en.json';

const resources = {
  en: {
    translation: EN
  },
  ru: {
    translation: RU
  }
};

const initializeI18next = async () => {
  await i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en'
    });
};

initializeI18next();

export default i18next;
