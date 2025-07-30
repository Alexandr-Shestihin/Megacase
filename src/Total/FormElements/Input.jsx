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
   onChange,
   ...restProps
}) => {

   const { t } = useTranslation();

   return (
      <div className={`inputContainer ${s.inputContainer}`}>
         <label className={`${s.label}`} htmlFor={name}>{label}</label>
         {register ? <input
            type={type}
            id={name}
            placeholder={placeholder}
            className={`${className} ${errors && (errors[name] && s.err)}`}
            {...register(name)}
            onChange={onChange}
            {...restProps }
         /> : <input
            type={type}
            id={name}
            placeholder={placeholder}
            className={`${className}`}
            onChange={onChange}
            {...restProps}
         />}
         {errors[name] && <div className={s.messageErr}>{t(errors[name].message) || 'Error!'}</div>}
      </div>
   )
}
export default Input;