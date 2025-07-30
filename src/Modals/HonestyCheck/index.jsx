import React, { useCallback, useState } from 'react';
import s from './HonestyCheck.module.css';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/Total/FormElements/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { handleClick } from '@/utils';
import Image from 'next/image';

const copyUnactive = '/assets/icons/copyUnactive.svg';

const HonestyCheck = (props) => {
   const schema = yup.object().shape({
      clientSeed: yup
         .string()
         .required("total.required")
         .min(35, "total.minLength")
         .matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"),
      serverSeed: yup.string().required("total.required").min(36, "total.minLength").matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"),
      salt: yup.string().required("total.required").matches(/^[0-9]{2}$/, "total.numeric"),
      publicHash: yup.string().required("total.required").min(36, "total.minLength").matches(/^[a-zA-Z0-9]+$/, "total.alphanumeric"),
   });

   const { t } = useTranslation();

   const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
      setValue,
      trigger,
   } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         clientSeed: '',
         serverSeed: '',
         salt: '',
         publicHash: ''
      },
      mode: 'onChange', 
   });

   const [calculationResult, setCalculationResult] = useState(null);

   // --- Логика валидации и обработки ---
   const validateAndSubmit = async () => {
      const isValid = await trigger();

      if (isValid) {
         //Тут логика для запроса на сервер
         setCalculationResult("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
      } else {
         console.log("Form has errors. Validation failed.");
         setCalculationResult(null);
      }
   };

   const debouncedValidate = useDebounce(validateAndSubmit, 400);

   // Используем useCallback, чтобы избежать создания новой функции при каждой перерисовке
   const handleFieldChange = useCallback((e, name) => {
      const value = e.target.value;
      setValue(name, value, { shouldValidate: true });
      debouncedValidate();
   }, [setValue, debouncedValidate]);

   const handlePaste = useCallback((e, name) => {
      e.preventDefault();
      const value = e.clipboardData.getData('text');
      setValue(name, value, { shouldValidate: true });
      debouncedValidate();
   }, [setValue, debouncedValidate]);

   window.getValues = getValues;

   return (
      <div className={`${s.modalGetSkin}`}>
         <div className={`pageTitle ${s.title}`}>{t("honestyCheck.title")}
            <span className="pageSubtitle"> {t("honestyCheck.subtitle")}</span>
         </div>

         {/* Поле для clientSeed */}
         <Input
            type={'text'}
            name={'clientSeed'}
            errors={errors}
            register={register}
            placeholder={'Client Seed'}
            className={'mt22 linkCopy'}
            onChange={(e) => handleFieldChange(e, 'clientSeed')}
            onPaste={(e) => handlePaste(e, 'clientSeed')}
         />

         <Input
            type={'text'}
            name={'serverSeed'}
            errors={errors}
            register={register}
            placeholder={'Server Seed'}
            className={'mt22 linkCopy'}
            onChange={(e) => handleFieldChange(e, 'serverSeed')}
            onPaste={(e) => handlePaste(e, 'serverSeed')}
         />
         <Input
            type={'text'}
            name={'salt'}
            errors={errors}
            register={register}
            placeholder={'Salt'}
            className={'mt22 linkCopy'}
            onChange={(e) => handleFieldChange(e, 'salt')}
            onPaste={(e) => handlePaste(e, 'salt')}
         />
         <Input
            type={'text'}
            name={'publicHash'}
            errors={errors}
            register={register}
            placeholder={'Public Hash'}
            className={'mt22 linkCopy'}
            onChange={(e) => handleFieldChange(e, 'publicHash')}
            onPaste={(e) => handlePaste(e, 'publicHash')}
         />

         {/* Отображение результата */}
         {calculationResult && (
            <div onClick={handleClick} className={`${s.resultBlock}`}>
               <div className={s.label}>{t("honestyCheck.result")} </div>
               {calculationResult}
               <Image src={copyUnactive} alt="arrow" width={20} height={20} className={`img ${s.img}`} />
            </div>
         )}

      </div>
   );
};

export default HonestyCheck;