// app/layout.js TEST
import { Roboto_Condensed } from "next/font/google";
import './globals.css';
import I18nextProvider from '@/Total/I18nextProvider';
import TranslationReady from '@/Total/TranslationReady';

import { ModalProvider } from "@/Total/ModalContext";
import ModalContainer from "@/Modals/ModalContainer";

const robotoCondensed = Roboto_Condensed({
   subsets: ['latin'],
   variable: '--font-roboto-condensed',
   display: 'swap',
});

export const metadata = {
   title: 'Megacase',
   description: 'Megacase main page',
};

export default async function RootLayout({ children }) {

   return (
      <html lang="en">
         <body
            className={`${robotoCondensed.variable} App`}
            style={{ position: 'relative', zIndex: 0 }}
         >
            <I18nextProvider>
               <TranslationReady>{/* индикатор загрузки, пока переводы не загрузятся */}
                  <ModalProvider>
                     <div className="wrapper">
                        {children}
                        <ModalContainer />
                     </div>
                  </ModalProvider>
               </TranslationReady>
            </I18nextProvider>
         </body>
      </html>
   );
}
