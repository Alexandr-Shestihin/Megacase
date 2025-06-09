// components/LanguageSwitcher.jsx
'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale) => {
    i18n.changeLanguage(newLocale);
    // Разделяем pathname на части, чтобы вставить новую локаль
    const pathParts = pathname.split('/');
    const currentLocale = pathParts[1]; // Предполагаем, что локаль - второй сегмент
    const newPathname = `/${newLocale}${pathname.replace(`/${currentLocale}`, '')}`; // Заменяем локаль

    router.push(newPathname);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
}

export default LanguageSwitcher;