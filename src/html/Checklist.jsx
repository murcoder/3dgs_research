import React from 'react';
import { Html } from '@react-three/drei';
import useGame from '../stores/useGame.jsx';

export default function Checklist({ renderOrder, occludeRefs = [], ...props }) {
  const { cleaningTasks, setCleaningTasks } = useGame((state) => ({
    cleaningTasks: state.cleaningTasks,
    setCleaningTasks: state.setCleaningTasks,
  }));

  const handleTaskToggle = (index) => {
    const updatedTasks = cleaningTasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );

    // Update the store
    setCleaningTasks(updatedTasks);
  };

  // Check if all tasks are completed
  const allTasksCompleted = cleaningTasks.every(task => task.completed);

  return (
    <Html
      {...props}
      occlude={occludeRefs}
      renderOrder={renderOrder}
      position={[-2.5, 2, 0]}
      center
      distanceFactor={10}>
      <div className="relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-60 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
          <div className="p-4">
            <h1 className="text-center uppercase">Checkliste</h1>
            <p className="text-xs text-center mb-4">Erfülle alle Aufgaben</p>
            <ul className="text-xs text-left list-none">
              {cleaningTasks.map((task, index) => (
                <li key={index} className="mb-1">
                  <label className="flex items-center space-x-2">
                    {/* Checkbox for each task */}
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskToggle(index)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    {/* Task label with strikethrough if completed */}
                    <span className={task.completed ? 'line-through' : ''}>
                      {task.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            {/* Display "FINISHED!" message if all tasks are completed */}
            {allTasksCompleted && (
              <p className="text-green-500 text-center mt-2 font-bold">FINISHED!</p>
            )}
          </div>
        </div>
      </div>
    </Html>
  );
}
