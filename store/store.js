// caseStore.js
import { create } from 'zustand';

const useCaseStore = create((set, get) => ({
   currentAnimation: 'appearance',
   isOpened: false,
   isAnimationStart: false,
   isScrollingAnimationEnd: false,
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
      if (!get().isOpened && !get().isAnimationStart) { // Добавили проверку
         set({ currentAnimation: 'hover' });
      }
   },
   setDefault: () => {
      if (!get().isOpened && !get().isAnimationStart) { // Добавили проверку
         set({ currentAnimation: 'default' });
      }
   },
}));

export default useCaseStore;