import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  definition: string;
}

const Tooltip = ({ children, definition }: TooltipProps) => (
  <span className="group relative cursor-help border-b border-dashed border-gray-400 dark:border-gray-600">
    {children}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-48 rounded bg-gray-800 dark:bg-gray-200 p-2 text-xs text-white dark:text-gray-900 group-hover:block z-10">
      {definition}
    </span>
  </span>
);

export default Tooltip;
