// components/TranslationReady.jsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function TranslationReady({ children, showLoadingIndicator = true, loadingText = "Loading translations..." }) {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized); // Инициализируем useState начальным значением

  useEffect(() => {
    if (!isReady && i18n.isInitialized) {
      setIsReady(true);
    }
  }, [i18n, isReady]); // Добавляем i18n в зависимости

  return isReady ? (
    <>{children}</>
  ) : (
    showLoadingIndicator ? <div>{loadingText}</div> : <></>
  );
}

export default TranslationReady;