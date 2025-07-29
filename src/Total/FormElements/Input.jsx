"use client"

import React from 'react';
import s from './FormElements.module.css';
import { useTranslation } from 'react-i18next';

const Input = ({
   type,
   name,
   errors,
   register,
   label,
   placeholder,
   className,
   onChange
}) => {

   const { t } = useTranslation();

   return (
      <div className={`inputContainer ${s.inputContainer}`}>
         <label className='body-s-400 ml8' htmlFor={name}>{label}</label>
         <input
            type={type}
            id={name}
            placeholder={placeholder}
            className={`${className} ${errors[name] && s.err}`}
            {...register(name)}
            onChange={onChange}
         />
         {errors[name] && <div className={s.messageErr}>{t(errors[name].message) || 'Error!'}</div>}
      </div>
   )
}
export default Input;