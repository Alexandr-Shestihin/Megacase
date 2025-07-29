
import React, { useState } from 'react';
import s from './HonestyCheck.module.css';

import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
   Button,
} from '@/Components/index';
import Input from '@/Total/FormElements/Input';

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

   const { register, handleSubmit, formState: { errors }, getValues, setValue, reset} = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         clientSeed: '',
         serverSeed: '',
         salt: '',
         publicHash: ''
      }
   });

   const onSubmit = (data) => {
      console.log("Form data:", data);
      console.log("getValues()", getValues()); // Проверьте значения здесь
      console.log("hookformErr", errors);
      reset();
      // Здесь вы можете отправить данные формы
   };

   window.getValues = getValues
   window.hookformErr = errors

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
            className={'mt26 linkCopy'}
         />

         <Input
            type={'text'}
            name={'serverSeed'}
            errors={errors}
            register={register}
            placeholder={'Server Seed'}
            className={'mt26 linkCopy'}
         />

         <Input
            type={'text'}
            name={'salt'}
            errors={errors}
            register={register}
            placeholder={'Salt'}
            className={'mt26 linkCopy'}
         />

         <Input
            type={'text'}
            name={'publicHash'}
            errors={errors}
            register={register}
            placeholder={'Public Hash'}
            className={'mt26 linkCopy'}
         />

         <Button onClick={handleSubmit(onSubmit)} className={`${s.btnSave} btn-3 btn-text mt19`}>
            Submit
         </Button>
      </div>
   )
}

export default HonestyCheck;
