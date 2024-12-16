import React, { useState } from 'react';
import { Task } from '../types/Task';
import { Bubble } from './Bubble';
import { TaskModal } from './TaskModal';
import { Plus } from 'lucide-react';
import { TaskForm } from './TaskForm';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Project Proposal',
    description: 'Finish and submit the Q2 project proposal to the management team',
    priority: 5,
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Weekly Team Meeting',
    description: 'Prepare and conduct weekly team sync-up',
    priority: 3,
    color: 'bg-green-500'
  },
  {
    id: '3',
    title: 'Client Presentation',
    description: 'Prepare slides for the upcoming client presentation',
    priority: 4,
    color: 'bg-purple-500'
  },
  {
    id: '4',
    title: 'Code Review',
    description: 'Review pending pull requests from the team',
    priority: 2,
    color: 'bg-yellow-500'
  }
];

export function BubbleField() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handlePriorityChange = (taskId: string, delta: number) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newPriority = Math.min(Math.max(task.priority + delta, 1), 5);
        return { ...task, priority: newPriority };
      }
      return task;
    }));
  };

  const expandedTask = tasks.find(task => task.id === expandedId);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Priority Bubbles</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>

        <div className="relative min-h-[600px]">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {tasks.map((task) => (
              <Bubble
                key={task.id}
                task={task}
                onClick={() => setExpandedId(task.id)}
                onUpvote={() => handlePriorityChange(task.id, 1)}
                onDownvote={() => handlePriorityChange(task.id, -1)}
              />
            ))}
          </div>
        </div>

        {expandedTask && (
          <TaskModal
            task={expandedTask}
            onClose={() => setExpandedId(null)}
            onUpvote={() => handlePriorityChange(expandedTask.id, 1)}
            onDownvote={() => handlePriorityChange(expandedTask.id, -1)}
          />
        )}

        {showForm && (
          <TaskForm
            onClose={() => setShowForm(false)}
            onSubmit={(newTask) => {
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500', 'bg-red-500'];
              const taskWithColor: Task = {
                ...newTask,
                id: Date.now().toString(),
                color: colors[Math.floor(Math.random() * colors.length)]
              };
              setTasks([...tasks, taskWithColor]);
              setShowForm(false);
            }}
          />
        )}
      </div>
    </div>
  );
}