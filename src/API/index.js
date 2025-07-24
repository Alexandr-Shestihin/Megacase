import axios from 'axios';

const instance = axios.create({
   headers: {
      'Content-Type': 'application/json',
   },
   withCredentials: true,
   baseURL: `https://dev.megacase.ai/api`,
});

const API = {
   getCurrentUser: async () => {
      return instance.get(`/profile`)
         .then(response => response.data)
         .catch((error) => {
            console.error('Error fetching profile:', error);
            throw error;
         })
   },
   logOut: async () => {
      return instance.get(`/logout`)
         .then(response => response.data)
         .catch((error) => {
            console.error('Error fetching profile:', error);
            throw error;
         })
   },
   getHistorySkins: async () => {
      return instance.get(`/history/skins`)
         .then(response => response.data)
         .catch((error) => {
            console.error('Error fetching history skins:', error);
            throw error;
         })
   },
   getSteamAuthURL: () => {
      return `https://dev.megacase.ai/auth/steam`;
   },
   getVkAuthURL: async () => {
      try {
         const response = await instance.get('/get-auth-url/vk');
         if (response.status === 200 && response.data.authUrl) {
            return response.data.authUrl;
         } else {
            throw new Error('Не удалось получить URL авторизации VK.');
         }
      } catch (error) {
         console.error('Error fetching VK auth URL:', error);
         throw error;
      }
   },
   getTelegramAuthURL: async () => {
      try {
         const response = await instance.get('/get-auth-url');
         if (response.status === 200 && response.data.authUrl) {
            return response.data.authUrl;
         } else {
            throw new Error('Не удалось получить URL авторизации Telegram.');
         }
      } catch (error) {
         console.error('Error fetching Telegram auth URL:', error);
         throw error;
      }
   },
}

export default API;