import React from 'react';
import { Citation } from '../data';

interface BibTeXExportButtonProps {
  citations: Citation[];
}

export const BibTeXExportButton = ({ citations }: BibTeXExportButtonProps) => {
  const exportToBibTeX = () => {
    const bibTeX = citations.map(c => `
@article{${c.id},
  author = {${c.author}},
  year = {${c.year}},
  title = {${c.title}},
  ${c.journal ? `journal = {${c.journal}},` : ''}
  ${c.publisher ? `publisher = {${c.publisher}},` : ''}
}
`).join('\n');

    const blob = new Blob([bibTeX], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'references.bib';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportToBibTeX}
      className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-teal-700 transition-colors"
    >
      Export References
    </button>
  );
};
