"use client"
import React, { useRef, useEffect, useState } from 'react';
import s from './СaseLargeImg.module.css';
import useCaseStore from '@/../store/store';

// Пути к видео
const videoUrls = {
   appearance: '/assets/img/caseAnimation/appearance.mp4',
   default: '/assets/img/caseAnimation/default.mp4',
   error: '/assets/img/caseAnimation/error.mp4',
   hover: '/assets/img/caseAnimation/hover.mp4',
   open: '/assets/img/caseAnimation/open.mp4',
   close: '/assets/img/caseAnimation/close.mp4',
   disappearance: '/assets/img/caseAnimation/disappearance.mp4',
};

const СaseLargeImg = ({ className }) => {
   const currentAnimation = useCaseStore(state => state.currentAnimation);
   const openCase = useCaseStore(state => state.openCase);
   const setError = useCaseStore(state => state.setError);
   const setDisappearance = useCaseStore(state => state.setDisappearance);
   const setHover = useCaseStore(state => state.setHover);
   const setDefault = useCaseStore(state => state.setDefault);
   const setisAnimationStart = useCaseStore(state => state.setisAnimationStart);
   const videoRefs = useRef({});
   const [videoLoaded, setVideoLoaded] = useState(false); // Отслеживать загрузку видео

   useEffect(() => {
      const playAnimation = (animationName) => {
         for (const key in videoUrls) {
            const video = videoRefs.current[key];
            if (video) {
               const isCurrentAnimation = key === animationName;
               video.style.display = isCurrentAnimation && videoLoaded ? 'block' : 'none';

               if (isCurrentAnimation) {
                  video.currentTime = 0;
                  video.play();

                  // Добавляем обработчик события 'ended' для переключения на 'default'
                  if (animationName === 'appearance') {
                     const handleEnded = () => {
                        setDefault();
                        video.removeEventListener('ended', handleEnded);
                     };
                     video.addEventListener('ended', handleEnded);
                  }

                  // Добавляем обработчик события 'ended' для выполнения openCase
                  if (animationName === 'open') {
                     const handleOpenEnded = () => {
                        openCase();
                        setisAnimationStart();
                        video.removeEventListener('ended', handleOpenEnded);
                     };
                     video.addEventListener('ended', handleOpenEnded);
                  }

                  // Добавляем обработчик события 'ended' для выполнения setDisappearance
                  if (animationName === 'disappearance') {
                     const handleOpenEnded = () => {
                        setisAnimationStart();
                        video.removeEventListener('ended', handleOpenEnded);
                     };
                     video.addEventListener('ended', handleOpenEnded);
                  }

                  // Добавляем обработчик события 'ended' для выполнения closeCase
                  if (animationName === 'close') {
                     const handleOpenEnded = () => {
                        setisAnimationStart();
                        video.removeEventListener('ended', handleOpenEnded);
                     };
                     video.addEventListener('ended', handleOpenEnded);
                  }
               } else {
                  video.pause();
                  video.currentTime = 0;
               }
            }
         }
      };

      playAnimation(currentAnimation);

      return () => {
         // Удаляем обработчики событий при размонтировании компонента, чтобы избежать утечек памяти
         for (const key in videoRefs.current) {
            const video = videoRefs.current[key];
            if (video) {
               video.removeEventListener('ended', () => setDefault());
               video.removeEventListener('ended', () => openCase());
            }
         }
      };
   }, [currentAnimation, setDefault, openCase, setisAnimationStart, videoLoaded]);

   const createVideoElement = (animationName) => {
      return (
         <span key={`${animationName}-placeholder`}>
            {/* Placeholder image */}
            {!videoLoaded && (
               <img
                  key={`${animationName}-placeholder`}
                  src="/assets/img/caseLarge.png"
                  className={`${s.caseImg} ${s.placeholder}`}
                  width="400"
                  height="300"
                  style={{
                     pointerEvents: 'none',
                     position: 'absolute',
                     display: currentAnimation === animationName ? 'block' : 'none',
                  }}
                  alt="Loading..."
               />
            )}

            {/* Video element */}
            <video
               key={animationName}
               ref={(el) => (videoRefs.current[animationName] = el)}
               className={`${s.caseImg}`}
               width="400"
               height="300"
               muted
               playsInline
               loop={animationName === 'default' || animationName === 'hover'}
               style={{
                  pointerEvents: 'none',
                  display: videoLoaded ? 'block' : 'none',
                  position: 'relative',
               }}
               onLoadedData={() => setVideoLoaded(true)}
            >
               <source src={videoUrls[animationName]} type="video/mp4" />
            </video>
         </span>
      );
   };

   const handleMouseEnter = () => {
      setHover();
   };

   const handleMouseLeave = () => {
      setDefault();
   };

   const handleError = () => {
      setError();
   };

   const handleDisappearance = () => {
      setDisappearance();
   };

   useEffect(() => {
      const preloadVideos = async () => {
         const video = document.createElement('video');
         video.src = videoUrls.default; // Загружаем только default
         video.preload = 'auto';
         await new Promise((resolve) => {
            video.addEventListener('loadeddata', () => resolve());
            video.addEventListener('error', () => {
               console.error(`Failed to preload video: ${videoUrls.default}`);
               resolve();
            });
         });
      };
      preloadVideos();
   }, []);

   return (
      <div
         className={`${s.imageContainer} ${className}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {Object.keys(videoUrls).map((key) => createVideoElement(key))}
      </div>
   );
};

export default СaseLargeImg;