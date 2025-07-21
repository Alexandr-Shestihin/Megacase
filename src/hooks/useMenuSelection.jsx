import { useCallback, useState } from "react";

//хук для обработки логики выбора активного элемента в меню
export const useMenuSelection = (defaultActiveID) => {
   const [activeID, setActiveID] = useState(defaultActiveID || null);

   const handler = useCallback((e) => {
      const id = e.target.id;
      setActiveID(id);
   }, []);

   const clear = useCallback(() => {
      setActiveID(null)
   }, [])

   return { activeID, handler, clear };
};