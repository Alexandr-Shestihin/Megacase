import { useCallback, useEffect, useState, useRef } from 'react';

const useScrollPagination = (fetchData, initialData = [], initialPage = 1) => {
   const [data, setData] = useState(initialData);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(initialPage);
   const [hasMore, setHasMore] = useState(true); // Добавлено состояние hasMore
   const observerRef = useRef(null); // Ref для элемента-наблюдателя (триггера)

   const loadMore = useCallback(async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
         const newData = await fetchData(page);
         if (newData && newData.length > 0) {
            setData(prevData => [...prevData, ...newData]);
            setPage(prevPage => prevPage + 1);
         } else {
            setHasMore(false); // Нет больше данных
         }
         setError(null);
      } catch (err) {
         setError(err.message || 'Failed to fetch data');
      } finally {
         setLoading(false);
      }
   }, [fetchData, page, loading, hasMore]);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  loadMore();
               }
            });
         },
         {
            root: null, // null означает viewport (окно браузера)
            rootMargin: '0px', // По умолчанию, можно настроить для предварительной загрузки
            threshold: 0, // 0 означает, что загрузка начнется, когда элемент полностью виден
         }
      );

      if (observerRef.current) {
         observer.observe(observerRef.current);
      }

      return () => {
         if (observerRef.current) {
            observer.unobserve(observerRef.current);
         }
      };
   }, [loadMore]);

   useEffect(() => {
      // Изначальная загрузка данных
      loadMore();
   }, [loadMore]);

   return {
      data,
      loading,
      error,
      loadMore,
      observerRef,
      hasMore
   };
};

export default useScrollPagination;