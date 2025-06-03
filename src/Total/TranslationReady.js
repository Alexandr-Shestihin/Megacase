// src/components/TranslationReady.js
"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function TranslationReady({ children }) {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n]);

  return isReady ? (
    <>{children}</>
  ) : (
    <></> // Или отобразите компонент Loading...
  );
}

export default TranslationReady;