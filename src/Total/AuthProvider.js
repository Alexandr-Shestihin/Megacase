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

   const isLocal = window.location.href === "http://localhost:3000/";
   //Потом убрать эту строчку

   /* isAuthRef.current = isAuth; */
   //Раскомментировать строчку

   isAuthRef.current = isLocal ? true : isAuth;
   //Потом убрать эту строчку

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const response = await API.getCurrentUser();
            if (response.success && response.user?.id) {
               setUser(response.user);
               setIsAuth(true);
               isAuthRef.current = true;
            } else {
               isAuthRef.current = false;
               console.error('Failed to fetch user data');
               return;
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

      /* fetchUserData() */
      //Раскомментировать строчку

      isLocal ? (setIsAuth(true), setLoading(false)) : fetchUserData();
      //Потом убрать эту строчку

   }, []);

   if (loading) {
      return <div>Loading...</div>; // Отображаем индикатор загрузки
   }

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuthRef.current) return

   return <>{children}</>; // Рендерим контент, когда загрузка завершена
};

export default AuthProvider;