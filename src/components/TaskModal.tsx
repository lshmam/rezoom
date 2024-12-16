import React from 'react';
import { X } from 'lucide-react';
import { Task } from '../types/Task';
import { VoteButtons } from './VoteButtons';

interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onUpvote: () => void;
  onDownvote: () => void;
}

export function TaskModal({ task, onClose, onUpvote, onDownvote }: TaskModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 m-4 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-4">
            <h2 className="text-2xl font-bold">{task.title}</h2>
            <VoteButtons
              onUpvote={onUpvote}
              onDownvote={onDownvote}
              disabled={task.priority >= 5 || task.priority <= 1}
            />
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">Priority Level:</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
            {task.priority}
          </span>
        </div>
      </div>
    </div>
  );
}