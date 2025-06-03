import { useCallback, useEffect, useRef, useState } from "react";

// Функция для обработки ввода чисел до 100
export function formatNumericPercentInput(value) {
   // Удаляем все символы, кроме цифр
   let formattedValue = value.replace(/[^0-9]/g, '');

   // Проверка соответствия регулярному выражению и ограничение 100
   const numericInputRegex = /^(?:100(?:\.0*)?|[0-9]{1,2}(?:\.[0-9]*)?)$/;

   if (formattedValue.length > 0) {
      const parsedValue = parseFloat(formattedValue); // Convert to number
      if (parsedValue > 100) {
         return "100"; // Return 100 if value exceeds 100
      }
   }

   if (numericInputRegex.test(formattedValue)) {
      return formattedValue; // Валидное число
   } else {
      return formattedValue; //  Вернуть отформатированное, но невалидное значение (например, "10.")
   }
}

//ф-ия с заменой запятой на точку
export function formatNumericPriceInput(value) {
   // Удаляем все символы, кроме цифр и точки
   let formattedValue = value.replace(/[^0-9.,]/g, '');

   // Замена запятых на точки
   formattedValue = formattedValue.replace(/,/g, '.');

   // Удаление лишних точек
   const dotCount = (formattedValue.match(/\./g) || []).length;
   if (dotCount > 1) {
      // Если больше одной точки, оставляем только первую
      const firstDotIndex = formattedValue.indexOf('.');
      formattedValue = formattedValue.slice(0, firstDotIndex + 1) + formattedValue.slice(firstDotIndex + 1).replace(/\./g, '');
   }

   // Проверка соответствия регулярному выражению и ограничение 100
   const numericInputRegex = /^(?:100(?:\.0*)?|[0-9]{1,2}(?:\.[0-9]*)?)$/;

   if (numericInputRegex.test(formattedValue)) {
      return formattedValue; // Валидное число
   } else {
      return formattedValue; //  Вернуть отформатированное, но невалидное значение (например, "10.")
   }
}

//хук дебунса
export function useDebounce(func, delay, cleanUp = false) {
   const timeoutRef = useRef();

   function clearTimer() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
         timeoutRef.current = undefined;
      }
   }

   useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

   return (...args) => {
      clearTimer();
      timeoutRef.current = setTimeout(() => func(...args), delay);
   };
}

//хук для обработки логики выбора активного элемента в меню
const useMenuSelection = () => {
   const [activeID, setActiveID] = useState(null);

   const handler = useCallback((e) => {
      const id = e.target.id;
      setActiveID(id || null);
   }, []);

   const clear = useCallback(() => {
      setActiveID(null)
   })

   return { activeID, handler, clear };
};

export default useMenuSelection;