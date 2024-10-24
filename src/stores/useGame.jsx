import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export default create(subscribeWithSelector((set) => ({
    cleaningTasks: [
        { label: "Getränke wegräumen", completed: false },
        { label: "Staubreste entfernen", completed: false },
        { label: "Linse reinigen", completed: false },
        { label: "Düse säubern", completed: false },
    ],
    setCleaningTasks: (tasks) => set({ cleaningTasks: tasks }),

    switchScenes: 3,
    setSwitchScenes: (scene) => set({ switchScenes: scene }),
})));