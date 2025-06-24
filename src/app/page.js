import s from './page.module.css'

import {
   OpenCasesBlock,
   LiveLastDrop,
   MenuBtn
} from '../Components';

export default function Home() {

   return (
      <main className={s.main}>
         {/* <MenuBtn/> */}
         <LiveLastDrop />
         <OpenCasesBlock />
         
      </main>
   );
}