"use client";

import React, { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import useAuthStore from '@/../store/useAuthStore';
import API from '@/API';

const AuthProvider = ({ children }) => {
   const { setUser, setIsAuth, isAuth } = useAuthStore();
   const isAuthRef = useRef(isAuth)
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      const fetchUserData = async () => {
         setLoading(true);
         try {
            const response = await API.getCurrentUser();
            if (!response.success) {
               console.error('Failed to fetch user data');
               return;
            }
            /* const data = await response.json(); */
            /* console.log('data', data) */
            if (response.user) {
               setUser(response.user);
               setIsAuth(true);
               isAuthRef.current = true;
            } else {
            }
         } catch (error) {
            console.error('Error fetching user data:', error);
         } finally {
            setLoading(false);
            // Если уже не авторизованы, сразу редиректим
            if (!isAuthRef.current) {
               router.push('/login');
               setLoading(false); // Чтобы не показывать загрузку бесконечно
               return;
            }
         }
      };

      fetchUserData();

      

   }, [isAuth]);

   if (loading) {
      return <div>Loading...</div>; // Отображаем индикатор загрузки
   }

   console.log('AuthProvider isAuth', isAuth);
   console.log('AuthProvider isAuthRef.current', isAuthRef.current);

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuthRef.current) return

   return <>{children}</>; // Рендерим контент, когда загрузка завершена
};

export default AuthProvider;