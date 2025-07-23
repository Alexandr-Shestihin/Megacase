import React from 'react';
import s from './login.module.css';

export const metadata = {
    title: 'Authentication',
};

export default function LoginLayout({ children }) {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
}