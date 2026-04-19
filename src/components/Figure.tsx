import React from 'react';

interface FigureProps {
  title: string;
  url: string;
  key?: React.Key;
}

export function Figure({ title, url }: FigureProps) {
  return (
    <figure className="py-8 px-4 md:py-12 md:px-6">
      <img src={url} alt={title} className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] w-full" referrerPolicy="no-referrer" />
      <figcaption className="mt-4 text-md font-sans text-gray-500 dark:text-gray-400 italic text-center">{title}</figcaption>
    </figure>
  );
}
