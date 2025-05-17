import { useEffect, useState } from 'react';
import { TranslationService } from './translation';

export default function useTranslation() {
  const [_, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = TranslationService.subscribe(() => forceUpdate({}));
    return unsubscribe;
  }, []);

  return {
    translate: TranslationService.t,
    currentLanguage: TranslationService.getCurrentLanguage(),
    setLanguage: TranslationService.setLanguage,
    availableLanguages: TranslationService.getAvailableLanguages(),
  };
}