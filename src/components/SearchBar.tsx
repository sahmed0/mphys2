import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  matchCount: number;
  currentMatchIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function SearchBar({ onSearch, matchCount, currentMatchIndex, onNext, onPrev }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        onPrev();
      } else {
        onNext();
      }
    }
  };

  return (
    <div className="py-4 px-6 mb-8 flex flex-col gap-2">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search summary content..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {matchCount > 0 && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 select-none">
            <span className="font-medium whitespace-nowrap">
              {currentMatchIndex + 1} of {matchCount}
            </span>
            <div className="flex border-l border-gray-300 dark:border-gray-700 pl-3 gap-1">
              <button
                onClick={onPrev}
                className="p-1 hover:text-accent transition-colors"
                title="Previous match (Shift+Enter)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="p-1 hover:text-accent transition-colors"
                title="Next match (Enter)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 ml-1">
        Press <span className="font-mono">Enter</span> to skip to the next match
      </p>
    </div>
  );
}
