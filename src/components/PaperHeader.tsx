interface PaperHeaderProps {
  title: string;
  authors: string[];
  summary: string;
}

export function PaperHeader({ title, authors, summary }: PaperHeaderProps) {
  return (
    <header className="py-12 px-4 md:py-16 md:px-6 bg-stone-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <h2 className="max-w-2xl text-xl md:text-2xl font-sans uppercase font-bold tracking-widest text-accent">Master's Dissertation Summary</h2>
      <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold tracking-normal text-gray-900 dark:text-gray-100">{title}</h1>
      <p className="text-xl font-sans text-gray-600 dark:text-gray-400 mt-4">{authors.join(', ')}</p>
      <div className="mt-8 md:mt-12 max-w-2xl">
        <h2 className="mt-6 text-md md:text-lg font-sans font-bold tracking-tight text-accent">Summary below; full paper linked above.</h2>
        <p className="mt-6 text-lg md:text-xl font-serif text-gray-800 dark:text-gray-300 leading-relaxed">{summary}</p>
      </div>
    </header>
  );
}
