import * as Localization from 'expo-localization';
import en from './en.json';
import hi from './hi.json';

type TranslationKey = keyof typeof en;
type Translations = Record<TranslationKey, string>;

const resources = {
  en: en as Translations,
  hi: hi as Translations,
};

type Language = keyof typeof resources;

const localeLang = Localization.locale.split('-')[0];
let currentLanguage: Language = resources[localeLang as Language] ? (localeLang as Language) : 'en';

const subscribers: Array<() => void> = [];

export const TranslationService = {
  getCurrentLanguage: (): Language => currentLanguage,

  setLanguage: (language: string) => {
    if (resources[language as Language]) {
      currentLanguage = language as Language;
      subscribers.forEach(callback => callback());
    }
  },

  getAvailableLanguages: (): Language[] => Object.keys(resources) as Language[],

  t: (key: TranslationKey): string => {
    return resources[currentLanguage]?.[key] || resources.en[key] || key;
  },

  subscribe: (callback: () => void) => {
    subscribers.push(callback);
    return () => {
      const index = subscribers.indexOf(callback);
      if (index > -1) subscribers.splice(index, 1);
    };
  },
};
