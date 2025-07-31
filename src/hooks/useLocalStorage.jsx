import React, { useState } from "react";


//Для управления localStorage
export function useLocalStorage(key, initialValue) {

   // Инициализация состояния с использованием данных из localStorage
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error('Ошибка при чтении из localStorage', error);
         return initialValue;
      }
   });

   // Функция для обновления состояния и localStorage
   const setValue = (value) => {
      try {
         const valueToStore = value instanceof Function ? value(storedValue) : value;
         setStoredValue(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.error('Ошибка при записи в localStorage', error);
      }
   };
   return [storedValue, setValue];
}