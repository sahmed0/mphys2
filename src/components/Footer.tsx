import React from 'react';
import { Logo } from '@kiwicarbon/assets';
interface AuthorDetail {
  name: string;
  bio: string;
  website: string;
}

interface FooterProps {
  authors: AuthorDetail[];
  isMobile?: boolean;
}

export function Footer({ authors, isMobile }: FooterProps) {
  if (isMobile) {
    return (
      <footer className="py-8 px-4 bg-transparent text-gray-600 dark:text-gray-400 mt-8 text-center text-md font-sans border-t border-gray-200 dark:border-gray-800">
        {authors.map((author) => (
          <div key={author.name} className="flex flex-col gap-3">
            <a
              href={author.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-1 mb-5 text-accent hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-lg font-medium" >
              <Logo className="w-10 mr-1" />
              <h4 className="text-xl font-sans font-semibold text-gray-800 dark:text-gray-200">{author.name}</h4>

            </a>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed">{author.bio}</p>
          </div>
        ))}
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900/50 rounded-xl p-8 flex flex-col gap-6 shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-6">
        {authors.map((author) => (
          <div key={author.name} className="flex flex-col gap-3">
            <a
              href={author.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-1 mb-5 text-accent hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-lg font-medium" >
              <Logo className="w-8 mr-1" />
              <h4 className="text-lg font-sans font-semibold text-gray-800 dark:text-gray-200">{author.name}</h4>
            </a>
            <p className="text-md text-gray-600 dark:text-gray-400 font-serif leading-relaxed">{author.bio}</p>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 font-sans text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
}
