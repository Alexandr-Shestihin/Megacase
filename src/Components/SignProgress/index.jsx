"use client"
import React, { useState, useEffect, useRef } from 'react';
import s from './SignProgress.module.css';

const SignProgress = ({ max, name, value, symbol, className }) => {

    const [isAnimated, setIsAnimated] = useState(false);
    const lineRef = useRef(null);

    function calculatePercentage(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number' || y === 0) {
            return 0; // Возвращаем 0 для некорректных входных данных
        }

        const percentage = (x / y) * 100;
        return percentage;
    }

    useEffect(() => {
        const percentage = calculatePercentage(value, max);
        if (lineRef.current) {
            lineRef.current.style.setProperty('--target-width', `${percentage}%`);
            setIsAnimated(true); // Запускаем анимацию после установки ширины
        }
    }, [value, max]);

    return (
        <div className={`${s.container} ${className}`}>
            <div className={s.name}>{name}</div>
            <div className={s.value}>{value.toLocaleString()}{symbol}</div>

            <div className={s.progressBar}>
                <div
                    ref={lineRef}
                    className={`${s.line} ${isAnimated ? s.animated : ''}`}
                />
            </div>
        </div>
    )
}

export default SignProgress;