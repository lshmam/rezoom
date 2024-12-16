import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface VoteButtonsProps {
  onUpvote: () => void;
  onDownvote: () => void;
  disabled?: boolean;
}

export function VoteButtons({ onUpvote, onDownvote, disabled }: VoteButtonsProps) {
  const handleClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={(e) => handleClick(e, onUpvote)}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Increase priority"
      >
        <ChevronUp size={20} className="text-gray-700" />
      </button>
      <button
        onClick={(e) => handleClick(e, onDownvote)}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Decrease priority"
      >
        <ChevronDown size={20} className="text-gray-700" />
      </button>
    </div>
  );
}