"use client";

import React, { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import useAuthStore from '@/../store/useAuthStore';
import API from '@/API';

const AuthProvider = ({ children }) => {
   const { setUser, setIsAuth, isAuth } = useAuthStore();
   const isAuthRef = useRef(() => isAuth)
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      const fetchUserData = async () => {
         setLoading(true);
         try {
            const response = await API.getCurrentUser();
            console.log('response', response)
            if (!response.ok) {
               console.error('Failed to fetch user data');
               return;
            }
            const data = await response.json();
            if (data.user) {
               console.log('data', data)
               setUser(data.user);
               setIsAuth(true);
               isAuthRef.current = true;
            } else {
            }
         } catch (error) {
            console.error('Error fetching user data:', error);
         } finally {
            setLoading(false);
            if (!isAuthRef.current) {
               router.push('/login');
               setLoading(false); // Чтобы не показывать загрузку бесконечно
               return;
            }
         }
      };

      fetchUserData();

      // Если уже не авторизованы, сразу редиректим
      /* if (!isAuth) {
         router.push('/login');
         setLoading(false); // Чтобы не показывать загрузку бесконечно
         return;
      } */
   }, [isAuth]);

   if (loading) {
      return <div>Loading...</div>; // Отображаем индикатор загрузки
   }

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuthRef.current) return

   return <>{children}</>; // Рендерим контент, когда загрузка завершена
};

export default AuthProvider;