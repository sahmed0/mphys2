import React from 'react';

interface Section {
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  isSidebar?: boolean;
}

export function TableOfContents({ sections, isSidebar = false }: TableOfContentsProps) {
  return (
    <nav className={`
      ${isSidebar
        ? 'bg-white dark:bg-gray-900/50 rounded-xl p-8 flex flex-col gap-6 shadow-sm border border-gray-200 dark:border-gray-800 mb-0'
        : 'py-6 px-4 md:py-8 md:px-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 mb-8 md:mb-12'}
    `}>
      <h2 className={`
        ${isSidebar
          ? 'text-md font-sans font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4'
          : 'text-xl md:text-2xl font-sans font-bold text-gray-900 dark:text-gray-100 mb-4'}
      `}>
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {sections.map((section) => {
          const slug = section.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <li key={slug}>
              <a
                href={`#${slug}`}
                className={`
                  hover:underline
                  ${isSidebar
                    ? 'text-base font-serif text-accent'
                    : 'text-base md:text-lg font-serif text-accent'}
                `}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
