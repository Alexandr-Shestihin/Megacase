"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/../store/useAuthStore';
import API from '@/API';

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
                const response = await API.getCurrentUser(); // Запрос к API
                if (!response.ok) {
                    console.error('Failed to fetch user data');
                    // Не перенаправляем здесь, обработаем в finally
                }
                const data = await response.json();
                if (data && data.user) { // Проверяем, что data и data.user существуют
                    console.log('data', data);
                    setUser(data.user);
                    setIsAuth(true); // Устанавливаем isAuth в true
                } else {
                    // Если данных пользователя нет, нужно разлогиниться
                    // и перенаправить на логин
                    useAuthStore.getState().logout() // Используем getState()
                    router.push('/login'); // Перенаправляем на страницу логина
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // При ошибке нужно разлогиниться и перенаправить на логин
                useAuthStore.getState().logout()
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };

        //  После загрузки данных, если авторизованы - перенаправляем на главную.
        //  Это нужно, чтобы избежать "мелькания"
        if (isAuth) {
            router.push('/'); // Перенаправление на главную, если isAuth === true
        }

        fetchUserData();
    }, [isAuth, setUser, setIsAuth, router]); // Добавили router, setUser и setIsAuth в зависимости

    if (loading) {
        return <div>Loading...</div>; // Отображаем индикатор загрузки
    }

    return <>{children}</>; // Рендерим контент, когда загрузка завершена
};

export default AuthProvider;