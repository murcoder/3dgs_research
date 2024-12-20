import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useStore = create(subscribeWithSelector((set) => ({
    lasercutTasks: Array(4).fill(null).map(() => ({ label: "", completed: false })),
    setLasercutTasks: (tasks) => set({ lasercutTasks: tasks }),
    textileTasks: Array(2).fill(null).map(() => ({ label: "", completed: false })),
    setTextileTasks: (tasks) => set({ textileTasks: tasks }),

    currentScene: 1,
    setCurrentScene: (scene) => set({ currentScene: scene }),
})));

export default useStore;
