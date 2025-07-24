// src/components/AuthProvider.js
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/../store/useAuthStore';
import API from '@/API';

const AuthProvider = ({ children }) => {
    const { setUser, setIsAuth, isAuth } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            if (!isAuth) {
                router.push('/login');
                setIsLoading(false); // Прекращаем загрузку
                return;
            }

            try {
                const response = await API.getCurrentUser();
                if (!response.ok) {
                    console.error('Failed to fetch user data');
                    // Добавьте обработку ошибки, если необходимо (например, разлогиниться)
                    return;
                }

                const data = await response.json();
                if (data.user) {
                    setUser(data.user);
                    setIsAuth(true);
                } else {
                    // Обработка случая, когда нет данных пользователя
                    console.error('No user data received');
                    // Возможно, стоит разлогинить пользователя
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Обработка ошибки
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [isAuth, router, setUser, setIsAuth]);

    if (isLoading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    // Если не авторизованы, ничего не рендерим (можно и нужно перенаправлять)
    //  if(!isAuth) {
    //     router.push('/login')
    //     return null
    //  }

    return <>{children}</>; // Рендерим контент
};

export default AuthProvider;