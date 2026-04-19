import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Tooltip from './Tooltip';
import { Figure } from './Figure';

interface SectionProps {
  title: string;
  content: string;
  figures?: { title: string; url: string }[];
  searchQuery?: string;
  tooltips?: { [word: string]: string };
  key?: React.Key;
}

const Highlight = ({ children, query, tooltips }: { children: React.ReactNode, query?: string, tooltips?: { [word: string]: string } }): React.ReactNode => {
  if (Array.isArray(children)) {
    return <>{children.map((child, i) => <Highlight key={i} query={query} tooltips={tooltips}>{child}</Highlight>)}</>;
  }

  if (typeof children !== 'string') return children;

  let content: React.ReactNode[] = [children];

  // 1. Tooltip logic
  if (tooltips) {
    const words = Object.keys(tooltips);
    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');

    content = content.flatMap(part => {
      if (typeof part !== 'string') return [part];
      const parts = part.split(regex);
      return parts.map((subPart, i) => {
        const lowerPart = subPart.toLowerCase();
        const tooltipWord = words.find(w => w.toLowerCase() === lowerPart);
        if (tooltipWord) {
          return <Tooltip key={i} definition={tooltips[tooltipWord]}>{subPart}</Tooltip>;
        }
        return subPart;
      });
    });
  }

  // 2. Search highlighting logic
  if (query) {
    content = content.flatMap(part => {
      if (typeof part !== 'string') return [part];
      const subParts = part.split(new RegExp(`(${query})`, 'gi'));
      return subParts.map((p, j) =>
        p.toLowerCase() === query.toLowerCase() ? (
          <mark key={j} className="search-match">{p}</mark>
        ) : (
          p
        )
      );
    });
  }

  return <>{content}</>;
};

export function Section({ title, content, searchQuery, tooltips, figures }: SectionProps) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  const components = {
    p: ({ children }: any) => <p className="mb-4 last:mb-0"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></ol>,
    li: ({ children }: any) => <li className="pl-2"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></li>,
    h2: ({ children }: any) => <h2 className="text-xl font-bold mt-8 mb-4"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></h2>,
    h3: ({ children }: any) => <h3 className="text-lg font-bold mt-6 mb-2"><Highlight query={searchQuery} tooltips={tooltips}>{children}</Highlight></h3>,
  };

  return (
    <section id={slug} className="py-8 px-4 md:py-12 md:px-6 border-l-2 md:border-l-4 border-accent pl-4 md:pl-8">
      <a href={`#${slug}`} className="group flex items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors">{title}</h2>
        <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">#</span>
      </a>
      <div className="mt-4 md:mt-6 text-lg font-serif text-gray-800 dark:text-gray-300 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
          {content}
        </ReactMarkdown>
      </div>

      {figures && figures.length > 0 && (
        <div className="mt-8 flex flex-col gap-8">
          {figures.map((figure, index) => (
            <Figure key={index} title={figure.title} url={figure.url} />
          ))}
        </div>
      )}
    </section>
  );
}
