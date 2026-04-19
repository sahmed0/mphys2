import { FileText } from 'lucide-react';

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
      className={`inline-flex items-center justify-center gap-3 border border-transparent font-sans font-bold shadow-sm text-white bg-accent hover:bg-teal-700 transition-colors ${isMobile
        ? 'px-4 py-2 text-lg rounded-md'
        : 'px-6 py-4 w-full text-xl rounded-md'
        }`}
    >
      <FileText size={isMobile ? 20 : 25} />
      <span>{isMobile ? 'View Full Paper' : 'View Full Paper'}</span>
    </a>
  );
}
