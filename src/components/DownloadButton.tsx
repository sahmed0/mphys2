import { Download } from 'lucide-react';

interface DownloadButtonProps {
  pdfUrl: string;
  isMobile?: boolean;
}

export function DownloadButton({ pdfUrl, isMobile }: DownloadButtonProps) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 border border-transparent font-sans font-bold shadow-sm text-white bg-accent hover:bg-teal-700 transition-colors ${isMobile
        ? 'px-3 py-1.5 text-sm rounded-md'
        : 'px-4 py-2 w-full text-base rounded-md'
        }`}
    >
      <Download size={isMobile ? 16 : 20} />
      <span>{isMobile ? 'View PDF' : 'View Full Paper'}</span>
    </a>
  );
}
