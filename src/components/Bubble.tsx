import React from 'react';
import { Task } from '../types/Task';
import { VoteButtons } from './VoteButtons';

interface BubbleProps {
  task: Task;
  onClick: () => void;
  onUpvote: () => void;
  onDownvote: () => void;
}

export function Bubble({ task, onClick, onUpvote, onDownvote }: BubbleProps) {
  const getBubbleSize = (priority: number) => {
    const sizes = {
      1: 'w-24 h-24',
      2: 'w-32 h-32',
      3: 'w-40 h-40',
      4: 'w-48 h-48',
      5: 'w-56 h-56'
    };
    return sizes[priority as keyof typeof sizes] || sizes[3];
  };

  return (
    <div className="group relative">
      <div
        onClick={onClick}
        className={`
          transition-all duration-300 ease-in-out
          rounded-full cursor-pointer
          flex items-center justify-center
          ${task.color}
          ${getBubbleSize(task.priority)}
        `}
      >
        <span className="text-white font-medium text-center p-4">
          {task.title}
        </span>
      </div>
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-lg p-1">
        <VoteButtons
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          disabled={task.priority >= 5 || task.priority <= 1}
        />
      </div>
    </div>
  );
}