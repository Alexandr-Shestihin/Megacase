import s from './page.module.css'

import {
   OpenCasesBlock,
   LiveLastDrop,
   CaseBlock
} from '../Components';

export default function Home() {

   return (
      <main className={s.main}>
         <LiveLastDrop />
         <OpenCasesBlock />
         <CaseBlock />
      </main>
   );
}