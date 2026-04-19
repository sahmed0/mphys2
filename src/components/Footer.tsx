import React from 'react';
import { Linkedin } from 'lucide-react';

interface AuthorDetail {
  name: string;
  bio: string;
  linkedin: string;
}

interface FooterProps {
  authors: AuthorDetail[];
  isMobile?: boolean;
}

export function Footer({ authors, isMobile }: FooterProps) {
  if (isMobile) {
    return (
      <footer className="py-8 px-4 bg-transparent text-gray-600 dark:text-gray-400 mt-8 text-center text-sm font-sans border-t border-gray-200 dark:border-gray-800">
        {authors.map((author) => (
          <div key={author.name} className="flex flex-col gap-3">
            <h4 className="text-base font-sans font-semibold text-gray-800 dark:text-gray-200">{author.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-serif leading-relaxed">{author.bio}</p>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-1 mb-5 text-accent hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        ))}
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 flex flex-col gap-6 shadow-sm border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-sans font-bold text-gray-900 dark:text-white">About the Author</h3>
      <div className="flex flex-col gap-6">
        {authors.map((author) => (
          <div key={author.name} className="flex flex-col gap-3">
            <h4 className="text-base font-sans font-semibold text-gray-800 dark:text-gray-200">{author.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-serif leading-relaxed">{author.bio}</p>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-1 text-accent hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-sm font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 font-sans text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
}
