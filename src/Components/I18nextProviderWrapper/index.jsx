"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function I18nextProviderWrapper({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}