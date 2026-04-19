import React from 'react';

interface Section {
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav className="py-6 px-4 md:py-8 md:px-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-sans font-bold text-gray-900 dark:text-gray-100 mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => {
          const slug = section.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <li key={slug}>
              <a href={`#${slug}`} className="text-base md:text-lg font-serif text-accent hover:underline">
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
