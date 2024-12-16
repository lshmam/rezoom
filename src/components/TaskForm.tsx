import React, { useState } from 'react';
import { Task } from '../types/Task';

interface TaskFormProps {
  onClose: () => void;
  onSubmit: (task: Omit<Task, 'id' | 'color'>) => void;
}

export function TaskForm({ onClose, onSubmit }: TaskFormProps) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 3
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newTask);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 m-4 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Priority (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={newTask.priority}
              onChange={(e) => setNewTask({...newTask, priority: Number(e.target.value)})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}