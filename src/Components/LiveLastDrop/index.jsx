"use client";
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import s from './LiveLastDrop.module.css';
import { cardsDataLiveDrops } from '../../../public/data';
import { useTranslation } from 'react-i18next';

import {
    FlipCard,
    CardFrontContentLiveDrops,
    CardBackContentLiveDrops,
    TopCard
} from '../';

const userIcon = '/assets/icons/userIconUnactive.svg';

const LiveLastDrop = (props) => {

    const { t } = useTranslation()

    const containerRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);
    const animationIntervalRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false); // Состояние для паузы
    const [cardWidth, setCardWidth] = useState(160);  // Ширина карточки
    const animationSpeed = useMemo(() => 5, []); // Скорость анимации (px/ms)
    const cardCount = cardsDataLiveDrops.length; // Количество карточек

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width <= 1024) {
                setCardWidth(85);
            } else {
                setCardWidth(160);
            }
        };

        handleResize(); // Вызываем при монтировании

        window.addEventListener('resize', handleResize); // Подписываемся на изменение размера экрана

        return () => {
            window.removeEventListener('resize', handleResize); // Отписываемся
        };
    }, []);

    const calculateTotalWidth = useCallback(() => {
        if (containerRef.current) {
            const totalWidth = containerRef.current.scrollWidth;
            return totalWidth;
        }
        return 0;
    }, []);

    const startAnimation = useCallback(() => {
        if (isPaused) return; // Не запускаем, если на паузе

        const totalWidth = calculateTotalWidth();
        if (totalWidth === 0) return;
        animationIntervalRef.current = setInterval(() => {
            setTranslateX(prevTranslateX => {
                const newTranslateX = prevTranslateX + animationSpeed; // Увеличиваем translateX

                if (newTranslateX >= cardWidth) {
                    return -cardWidth;  // Сбрасываем translateX
                }

                return newTranslateX;
            });
        }, 16); //  Примерно 60 кадров в секунду (1000ms / 60 ≈ 16ms)
    }, [animationSpeed, cardWidth, calculateTotalWidth, isPaused, cardCount]);

    const pauseAnimation = useCallback(() => {
        clearInterval(animationIntervalRef.current);
        setIsPaused(true);
    }, []);

    const resumeAnimation = useCallback(() => {
        setIsPaused(false);
        startAnimation();
    }, [startAnimation]);

    useEffect(() => {
        const totalWidth = calculateTotalWidth();

        if (totalWidth > 0) {
            startAnimation();
        }

        return () => {
            clearInterval(animationIntervalRef.current);
        };
    }, [startAnimation, calculateTotalWidth]);

    return (
        <div className={s.container}>
            <TopCard value={3334} img={userIcon} name={t("menuBtn.indicator")} />
            <div className={`${s.cordRow}`} ref={containerRef} onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation}>
                {cardsDataLiveDrops.map(el => (
                    <FlipCard
                        key={el.id}
                        frontContent={<CardFrontContentLiveDrops
                            dw={el.dw}
                            img={el.img}
                            userName={el.user.name}
                            userAvatar={el.user.avatar}
                        />}
                        backContent={<CardBackContentLiveDrops
                            dw={el.dw}
                            text={el.text}
                            price={el.price}
                            chance={el.chance}
                            userName={el.user.name}
                            userAvatar={el.user.avatar}
                        />}
                        className={`my-custom-class ${s.flipCard}`}
                        width={'160px'}
                        height={'150px'}
                        style={{ transform: `translateX(${translateX}px)` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LiveLastDrop;