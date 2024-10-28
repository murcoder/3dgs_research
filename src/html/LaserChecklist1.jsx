import React, { useState, useEffect } from 'react';
import useGame from '../stores/useGame.jsx';

export default function LaserChecklist1({ renderOrder, occludeRefs = [], ...props }) {
  const { cleaningTasks, setCleaningTasks } = useGame((state) => ({
    cleaningTasks: state.cleaningTasks,
    setCleaningTasks: state.setCleaningTasks
  }));

  const handleTaskToggle = (index) => {
    const updatedTasks = cleaningTasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setCleaningTasks(updatedTasks);
  };

  const allTasksCompleted = cleaningTasks.every((task) => task.completed);

  const initialPosition = {
    x: window.innerWidth - 270,
    y: 400,
  };

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [offset, setOffset] = useState({ x: 10, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="z-50 w-60 bg-black/80 text-white text-sm rounded-lg shadow-2xl"
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 h-4 w-10 bg-black/80 rounded-t-md shadow-md"/>
      <div className="p-4 pt-6">
        <h1 className="text-center uppercase text-lg font-bold tracking-widest">Checkliste</h1>
        <p className="text-xs text-center mb-4 text-gray-400">Erfülle alle Aufgaben</p>
        <ul className="text-xs text-left list-none space-y-2">
          {cleaningTasks.map((task, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskToggle(index)}
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.label}</span>
              </label>
            </li>
          ))}
        </ul>
        {allTasksCompleted && (
          <p className="text-green-400 text-center mt-4 font-bold">FINISHED!</p>
        )}
      </div>
    </div>
  );
}
