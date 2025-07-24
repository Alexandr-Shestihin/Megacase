// caseStore.js
import API from '@/API';
import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
   isAuth: true,
   user: null,
   isLoading: false,
   error: null,
   //steamAuthUrl: '/steam', // Статичный URL для Steam
   steamAuthUrl: 'https://dev.megacase.ai/auth/steam', // Статичный URL для Steam
   vkAuthUrl: null,
   telegramAuthUrl: null,

   setUser: (userData) => {
        set({ user: userData, isAuth: true }); // Обновляем user и isAuth
    },
    setIsAuth: (auth) => {
        set({ isAuth: auth }); // Обновляем isAuth
    },

   // Получить URL для авторизации через VK
   getVkAuthUrl: async () => {
      set({ isLoading: true, error: null });
      try {
         const authUrl = await API.getVkAuthURL();
         set({ vkAuthUrl: authUrl, isLoading: false });
         //return authUrl; // Возвращаем URL, чтобы компонент мог перенаправить
      } catch (error) {
         set({ error: error.message || 'Произошла ошибка при получении URL VK.', isLoading: false });
         throw error; // Пробрасываем ошибку дальше
      }
   },

   // Получить URL для авторизации через Telegram
   getTelegramAuthUrl: async () => {
      set({ isLoading: true, error: null });
      try {
         const authUrl = await API.getTelegramAuthURL();
         set({ isLoading: false });
         window.location.href = authUrl;
      } catch (error) {
         set({ error: error.message || 'Произошла ошибка при получении URL Telegram.', isLoading: false });
         console.error("Telegram Auth Error:", error); // Логируем ошибку для отладки
      }
   },

   // Инициировать авторизацию через Steam (перенаправление)
   loginWithSteam: () => {
      /* const steamUrl = window.location.href + get().steamAuthUrl; */
      const steamUrl = get().steamAuthUrl;
      window.location.href = steamUrl;
   },

   // Инициировать авторизацию через VK (получение URL и перенаправление)
   loginWithVk: async () => {
      try {
         const vkUrl = await API.getVkAuthURL(); // Сначала получаем URL
         if (vkUrl) {
            window.location.href = vkUrl; // Перенаправляем
         }
      } catch (error) {
         // Ошибка уже обработана в getVkAuthUrl, но можно добавить доп. логику здесь
         console.error("Error initiating VK login:", error);
      }
   },

}));

export default useAuthStore;