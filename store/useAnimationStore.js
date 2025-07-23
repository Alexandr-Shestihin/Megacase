import { create } from 'zustand';

const useAnimationStore = create((set, get) => ({
   currentAnimation: 'appearance',
   isOpened: false, //Открыт ли кейс
   isAnimationStart: false, //Запущена ли анимация
   isScrollingAnimationEnd: false, //Завершился ли скролл слот-машины
   setisAnimationStart: () => set({ isAnimationStart: false }),
   setIsScrollingAnimationEnd: () => set({ isScrollingAnimationEnd: true }),
   setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
   setIsOpened: (opened) => set({ isOpened: opened }),
   startOpenAnimation: () => {
      set({ currentAnimation: 'open', isAnimationStart: true }); // Устанавливаем состояние для запуска анимации
   },
   openCase: () => set({ currentAnimation: 'open', isOpened: true }),
   closeCase: () => set({ currentAnimation: 'close', isOpened: false, isScrollingAnimationEnd: false, isAnimationStart: true }),
   setError: () => set({ currentAnimation: 'error' }),
   setDisappearance: () => set({ currentAnimation: 'disappearance', isAnimationStart: true, isScrollingAnimationEnd: false, isOpened : false }),
   setHover: () => {
      if (!get().isOpened && !get().isAnimationStart) { 
         set({ currentAnimation: 'hover' });
      }
   },
   setDefault: () => {
      if (!get().isOpened && !get().isAnimationStart) {
         set({ currentAnimation: 'default' });
      }
   },
}));

export default useAnimationStore;