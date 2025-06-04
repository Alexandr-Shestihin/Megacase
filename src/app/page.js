
import s from './page.module.css'

import {
   OpenCasesBlock,
   LiveLastDrop
} from '../Components';

export default function Home() {

   return (
      <main className={s.main}>
         <OpenCasesBlock />
         <LiveLastDrop />
      </main>
   );
}