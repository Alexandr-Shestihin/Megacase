import { t } from "i18next";

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

/* Логика отрисовки состояния в карточках */
export const getDegreeWear = (dw, children) => {
   if (dw === "FN") {
      return <div className="row">
         <div className="dw fn">Factory New</div>
         {children || <div className="img arrow fn" />}
      </div>
   } else if (dw === "MW") {
      return <div className="row">
         <div className="dw mw">Minimal Wear</div>
         {children || <div className="img arrow mw" />}
      </div>
   } else if (dw === "FT") {
      return <div className="row">
         <div className="dw ft">Field-Tested</div>
         {children || <div className="img arrow ft" />}
      </div>
   } else if (dw === "WW") {
      return <div className="row">
         <div className="dw ww">Well-Worn</div>
         {children || <div className="img arrow ww" />}
      </div>
   } else if (dw === "BS") {
      return <div className="row">
         <div className="dw bs">Battle-Scarred</div>
         {children || <div className="img arrow bs" />}
      </div>
   }
}

export const getDegreeWearMin = (dw) => {
   if (dw === "FN") {
      return <div className="row">
         <div className="dw fn">FN</div>
         <div className="img arrow fn" />
      </div>
   } else if (dw === "MW") {
      return <div className="row">
         <div className="dw mw">MW</div>
         <div className="img arrow mw" />
      </div>
   } else if (dw === "FT") {
      return <div className="row">
         <div className="dw ft">FT</div>
         <div className="img arrow ft" />
      </div>
   } else if (dw === "WW") {
      return <div className="row">
         <div className="dw ww">WW</div>
         <div className="img arrow ww" />
      </div>
   } else if (dw === "BS") {
      return <div className="row">
         <div className="dw bs">BS</div>
         <div className="img arrow bs" />
      </div>
   }
}

// Вспомогательная функция для форматирования с пробелами и обработки нескольких точек
export const formatWithSpaces = (value) => {
   if (value === null || value === undefined) return '';  //  Добавлено
   const cleanedValue = formatNumericPriceInput(value.toString()); // Clean up input
   // Разделяем на целую и дробную части
   const [integerPart, fractionalPart] = cleanedValue.split('.');
   // Форматируем целую часть с пробелами
   const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
   // Соединяем обратно
   return fractionalPart !== undefined ? `${formattedIntegerPart}.${fractionalPart}` : formattedIntegerPart;
};

//Копирование при клике
export const handleClick = async (e) => {
   try {
      const text = e.target.textContent;
      await navigator.clipboard.writeText(text);
      alert(t("message.copyText.success")); // Optional: Give feedback to the user
   } catch (err) {
      console.error(err);
      alert(t("message.copyText.unsuccess"));
   }
};

//Преобразование форматы даты из 2025-07-24T18:09:49.447Z в 16:30 12.12
export function formatDate(dateString) {
   try {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
         return "Invalid Date"; // или null, или любое другое значение по умолчанию
      }

      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
      const timeFormat = `${hours}:${minutes}`;
      const dateFormat = `${day}.${month}`;

      return `${timeFormat} ${dateFormat}`;
   } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date"; // или null, или любое другое значение по умолчанию
   }
}