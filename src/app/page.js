import s from './page.module.css'

import {
   OpenCasesBlock,
   LiveLastDrop,
   CaseBlock,
   Header,
   Footer
} from '../Components';
import AuthProvider from '@/Total/AuthProvider';

export default function Home() {

   return (
      <>
         <Header />
         <div className={`ContantContainer`}>
            <AuthProvider>
               <main className={s.main}>
                  <LiveLastDrop />
                  <OpenCasesBlock />
                  <CaseBlock />
               </main>
            </AuthProvider>
         </div >
         <Footer />
      </>
   );
}