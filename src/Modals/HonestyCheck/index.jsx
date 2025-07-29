
import React, { useState } from 'react';
import s from './HonestyCheck.module.css';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '@/Total/FormElements/Input';
import { handleClick } from '@/utils';
import { useDebounce } from '@/hooks/useDebounce';

const copyUnactive = '/assets/icons/copyUnactive.svg';

const HonestyCheck = (props) => {

   const schema = yup.object().shape({
      clientSeed: yup
         .string()
         .required("total.required") // Обязательно к заполнению
         .min(35, "total.minLength") // Минимум 35 символов
         .matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"), // Только английские буквы и цифры
      serverSeed: yup
         .string()
         .required("total.required") // Обязательно к заполнению
         .min(36, "total.minLength") // Минимум 35 символов
         .matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"), // Только английские буквы и цифры
      salt: yup
         .string()
         .required("total.required") // Обязательно к заполнению
         .min(2, "total.minLength") // Минимум 35 символов
         .matches(/^[0-9]{2}$/, "total.numeric"), // Проверяем, что это число и 2 цифры
      publicHash: yup
         .string()
         .required("total.required") // Обязательно к заполнению
         .min(36, "total.minLength") // Минимум 35 символов
         .matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"), // Только английские буквы и цифры
   });

   const { t } = useTranslation();

   const { register, handleSubmit, formState: { errors }, getValues, setValue, reset, trigger } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         clientSeed: '',
         serverSeed: '',
         salt: '',
         publicHash: ''
      },
      mode: 'onBlur',
   });

   const onSubmit = () => {
      console.log("getValues()", getValues()); // Проверьте значения здесь
      console.log("hookformErr", errors);
      /* reset(); */
      // Здесь вы можете отправить данные формы
   };

   window.getValues = getValues
   window.hookformErr = errors

   // Debounced function to get Hash result (Calculated)
   const debouncedValidate = useDebounce(async () => {
      const isValid = await trigger(); // Запускаем валидацию и получаем результат
      if (isValid) { // Проверяем, прошла ли валидация успешно
         // Здесь выполняется логика, когда все поля валидны
         console.log("Form is valid! Performing logic...");
         // Пример логики: вызов функции для расчета результата
         const result = calculateResult(getValues());
         setCalculationResult(result); // Сохраняем результат в состояние
         console.log("Calculation Result:", result);
         // Здесь можно вызвать функцию для отправки данных на сервер
      } else {
         console.log("Form has errors. Validation failed.");
         setCalculationResult(null); // Сбрасываем результат, если есть ошибки
      }
   }, 400);

   return (
      <div className={`${s.modalGetSkin}`}>
         <div className={`pageTitle ${s.title}`}>{t("honestyCheck.title")} <span className="pageSubtitle">{t("honestyCheck.subtitle")}</span> </div>

         <Input
            type={'text'}
            name={'clientSeed'}
            errors={errors}
            register={register}
            /* label={'Client Seed'} */
            placeholder={'Client Seed'}
            className={'mt22 linkCopy'}
            onBlur={debouncedValidate}
         />

         <Input
            type={'text'}
            name={'serverSeed'}
            errors={errors}
            register={register}
            placeholder={'Server Seed'}
            className={'mt22 linkCopy'}
            onBlur={debouncedValidate}
         />

         <Input
            type={'text'}
            name={'salt'}
            errors={errors}
            register={register}
            placeholder={'Salt'}
            className={'mt22 linkCopy'}
            onBlur={debouncedValidate}
         />

         <Input
            type={'text'}
            name={'publicHash'}
            errors={errors}
            register={register}
            placeholder={'Public Hash'}
            className={'mt22 linkCopy'}
            onBlur={debouncedValidate}
         />

         <div onClick={handleClick} className={`${s.resultBlock}`}>
            <div className={s.label}>{t("honestyCheck.result")} </div>
            e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            <Image src={copyUnactive} alt="arrow" width={170} height={29} className={`img ${s.img}`} />
         </div>

      </div>
   )
}

export default HonestyCheck;
