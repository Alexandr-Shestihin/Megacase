"use client";

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import useAuthStore from '@/../store/useAuthStore';

const AuthProvider = ({ children }) => {
   const { setUser, setIsAuth, isAuth } = useAuthStore();
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      // Если уже не авторизованы, сразу редиректим
      if (!isAuth) {
         router.push('/login');
         setLoading(false); // Чтобы не показывать загрузку бесконечно
         return;
      }

      const fetchUserData = async () => {
         setLoading(true);
         try {
            const response = await fetch('https://dev.megacase.ai/api/profile'); // getCurrentUser
            if (!response.ok) {
               console.error('Failed to fetch user data');
               router.push('/login');
               return;
            }
            const data = await response.json();
            if (data.user) {
               setUser(data.user);
               setIsAuth(true); // data.isAuthenticated || true
            } else {
               router.push('/login');
            }
         } catch (error) {
            console.error('Error fetching user data:', error);
            router.push('/login');
         } finally {
            setLoading(false);
         }
      };

      fetchUserData();
   }, [router, setUser, setIsAuth, isAuth]);

   if (loading) {
      return <div>Loading...</div>; // Отображаем индикатор загрузки
   }

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuth) return

   return <>{children}</>; // Рендерим контент, когда загрузка завершена
};

export default AuthProvider;