"use client"
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import s from './Input.module.css';

import Image from 'next/image';
import { formatWithSpaces} from '@/utils';
import { useDebounce } from '@/hooks/useDebounce';

const Input = ({ set, value, max = 100, min = 0, img, className, ...args }) => {

   //Если нет картинки, то настраиваем отступ в поле ввода
   const paddingLeft = useMemo(() => (img ? '48' : '20') + 'px', [img]);

   //-------input поле ввода-------
   const [localValue, setLocalValue] = useState(value !== undefined ? value.toString() : ''); // Локальное состояние для хранения вводимого значения

   // Debounced function to set the price
   const debouncedSetPrice = useDebounce((value) => {
      if (value === null || value === undefined) return;
      set(value); // Отправляем точное значение (без toFixed)
   }, 300);

   //Для изменения поля ввода
   const handleTextChange = (event) => {
      let newValue = event.target.value.replace(/,/g, '.');
      newValue = newValue.replace(/\s/g, '');
      let parsedValue = parseFloat(newValue);

      if (isNaN(parsedValue)) {
         parsedValue = 0;
      }

      const limitedValue = Math.min(parsedValue, max) || Math.max(parsedValue, min); // Проверяем не превышает ли сумму баланса

      setLocalValue(limitedValue);
      setRangeValue(limitedValue);
      debouncedSetPrice(limitedValue);
   };

   useEffect(() => {
      setLocalValue(value !== undefined ? value.toString() : ''); // Обновляем localValue при изменении value
   }, [value]);

   //-------Range ползунок-------
   const [rangeValue, setRangeValue] = useState(value);
   const rangeRef = useRef(null);

   const handleRangeChange = useCallback((event) => {
      let newValue = parseInt(event.target.value);
      let limitedValue = Math.min(newValue, max) || Math.max(newValue, min); // Проверяем не превышает ли сумму баланса

      setRangeValue(limitedValue);
      setLocalValue(limitedValue === max ? max.toString() : limitedValue.toFixed(2)); // Устанавливаем localValue с учетом max

      debouncedSetPrice(limitedValue);

   }, [max, min]);

   //Изменение цвета ползунка (разбитие на активную часть и не активную)
   useEffect(() => {
      if (rangeRef.current) {
         rangeRef.current.style.setProperty('--active-percentage', `${((rangeValue - min) / (max - min)) * 100}%`); // Расчет --active-percentage, учитывая min
      }
   }, [rangeValue, max, min]);

   useEffect(() => {
      setRangeValue(value)
   }, [value])

   return (
      <div className={`${s.inputContainer} ${className}`}>
         <input
            type="text"
            value={formatWithSpaces(localValue)} // Используем formatWithSpaces для localValue
            className={`${s.input}`}
            style={{ "paddingLeft": paddingLeft }}
            {...args}
            onChange={handleTextChange} // Используем handleTextChange
         />
         {img && <Image src={img} alt="Case" width={200} height={100} className={`img ${s.icon}`} />}
         <input
            ref={rangeRef}
            className={s.range}
            type="range"
            min={min}
            max={max}
            value={rangeValue} // Используем rangeValue для range input
            onChange={handleRangeChange} // Используем handleRangeChange
         />
      </div>
   )
}

export default Input;