interface PaperHeaderProps {
  title: string;
  authors: string[];
  abstract: string;
}

export function PaperHeader({ title, authors, abstract }: PaperHeaderProps) {
  return (
    <header className="py-12 px-4 md:py-16 md:px-6 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h1>
      <p className="text-lg md:text-xl font-sans text-gray-600 dark:text-gray-400 mt-4">{authors.join(', ')}</p>
      <div className="mt-8 md:mt-12 max-w-2xl">
        <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-accent">Abstract</h2>
        <p className="mt-4 text-lg md:text-xl font-serif text-gray-800 dark:text-gray-300 leading-relaxed">{abstract}</p>
      </div>
    </header>
  );
}
