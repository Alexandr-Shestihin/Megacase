import { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import WrapperContainer from './total/WrapperContainer';

import { ROUTER } from './config';

import {
   Cases,
} from './Pages';

function App() {

   /* Чтобы чере NavLink страница всегда открывалась в начале  */
   const location = useLocation();
   useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);

      //Смена title при загрузске страницы
      const title = document.querySelector('.pageTitle')?.innerHTML.replace(/(<([^>]+)>)/ig, '');
      if (title) {
         document.title = title;
      } else document.title = 'Megacase';
   }, [location]);

   return (
      <div className="App">
            <Routes>
               <Route path={ROUTER.main} element={<WrapperContainer />} >
                  <Route path={ROUTER.main} element={<Cases/>} />
               </Route>
            </Routes>
      </div>
   );
}

export default App;