import { useState, useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (callback, options = {}) => {
   const [currentPage, setCurrentPage] = useState(1)
   const { root, rootMargin = '0px', threshold = 0 } = options;
   const [isIntersecting, setIsIntersecting] = useState(false);
   const observer = useRef(null);
   const elementRef = useRef(null);

   const handleIntersection = useCallback(
      (entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setIsIntersecting(true);
            }
         });
      },
      []
   );

   useEffect(() => {
      if (!elementRef.current) return;

      observer.current = new IntersectionObserver(handleIntersection, {
         root,
         rootMargin,
         threshold,
      });

      if (elementRef.current) {
         observer.current.observe(elementRef.current);
      }

      return () => {
         if (observer.current) {
            observer.current.disconnect();
         }
      };
   }, [handleIntersection, root, rootMargin, threshold]);

   useEffect(() => {
      if (isIntersecting) {
         callback(currentPage);
         setCurrentPage(prev => prev + 1)
         setIsIntersecting(false);
      }
   }, [isIntersecting, callback, currentPage]);

   return {
      elementRef,
      currentPage,
   };
};

export default useIntersectionObserver;