import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="py-4 px-6 mb-8">
      <input
        type="text"
        placeholder="Search for key words..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
