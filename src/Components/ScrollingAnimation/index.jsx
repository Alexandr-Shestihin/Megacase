"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';
import s from './ScrollingAnimation.module.css';
import useCaseStore from '@/../store/store';

const ScrollingAnimation = ({ items }) => {
   const boxRefs = useRef([]);
   const arrowRef = useRef(null);
   const [intersectingBoxes, setIntersectingBoxes] = useState([]);
   const [isThirdItemFromEndInView, setIsThirdItemFromEndInView] = useState(false);
   const setIsScrollingAnimationEnd = useCaseStore(state => state.setIsScrollingAnimationEnd);

   // Wrap setIsScrollingAnimationEnd in useCallback
   const handleScrollingAnimationEnd = useCallback(() => {
      setIsScrollingAnimationEnd();
   }, [setIsScrollingAnimationEnd]);

   useEffect(() => {
      const checkCollisions = () => {
         if (!arrowRef.current || !boxRefs.current.length) return;

         const arrowRect = arrowRef.current.getBoundingClientRect();
         const newIntersectingBoxes = [];

         boxRefs.current.forEach((box, index) => {
            const boxRect = box.getBoundingClientRect();
            if (isRectsIntersect(arrowRect, boxRect)) {
               newIntersectingBoxes.push(index);
            }
         });

         setIntersectingBoxes(newIntersectingBoxes);

         // Вычислите индекс третьего элемента с конца
         const thirdItemFromEndIndex = items.length > 2 ? items.length - 3 : -1;

         // Проверьте, отображается ли третий элемент с конца.
         if (thirdItemFromEndIndex !== -1 && newIntersectingBoxes.includes(thirdItemFromEndIndex) && !isThirdItemFromEndInView) {
            setIsThirdItemFromEndInView(true);
         } else if (thirdItemFromEndIndex !== -1 && !newIntersectingBoxes.includes(thirdItemFromEndIndex) && isThirdItemFromEndInView) {
            setIsThirdItemFromEndInView(false);
         }
      };

      const isRectsIntersect = (rect1, rect2) => {
         return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
         );
      };

      const handleScroll = () => {
         checkCollisions();
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      checkCollisions(); //  Проверяем коллизии при загрузке

      return () => {
         window.removeEventListener('scroll', handleScroll);
         window.removeEventListener('resize', handleScroll);
      };
   }, [boxRefs, arrowRef, intersectingBoxes, items, isThirdItemFromEndInView]);

   useEffect(() => {
      let time1;
      if (isThirdItemFromEndInView) {
         time1 = setTimeout(() => {
            handleScrollingAnimationEnd();
         }, 1000);
      }

      return () => {
         clearTimeout(time1);
      };
   }, [isThirdItemFromEndInView, handleScrollingAnimationEnd]);


   useEffect(() => {
      const containerWidth = document?.querySelector('.ScrollingAnimation_scrollContainer___vYni')?.offsetWidth;
      const contentWidth = document.querySelector('.ScrollingAnimation_scrollContent__S2pVs').offsetWidth;
      const offset = containerWidth - contentWidth;
      document.documentElement.style.setProperty('--offset', `${offset}px`);
   }, [])

   return (
      <div className={s.scrollContainer}>
         <div className={s.arrow} ref={arrowRef} />
         <div className={s.scrollContent}>
            {items.map((item, index) => (
               <div
                  key={index}
                  className={`${s.item} ${intersectingBoxes.includes(index) ? s.inView : ''}`}
                  ref={el => (boxRefs.current[index] = el)}
               >
                  <img
                     src={item}
                     alt={`Item ${index}`}
                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default ScrollingAnimation;