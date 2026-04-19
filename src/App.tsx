import React, { useState } from 'react';
import { paperData } from './data';
import { PaperHeader } from './components/PaperHeader';
import { Section } from './components/Section';
import { DownloadButton } from './components/DownloadButton';
import { Footer } from './components/Footer';
import { TableOfContents } from './components/TableOfContents';
import { SearchBar } from './components/SearchBar';
import { BibTeXExportButton } from './components/BibTeXExportButton';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen dark:bg-gray-950 transition-colors relative">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-2 flex items-center justify-between shadow-sm">
        <ThemeToggle />
        <DownloadButton pdfUrl={paperData.pdfUrl} isMobile />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-12">
        {/* Main Content */}
        <main className="min-w-0">
          <PaperHeader
            title={paperData.title}
            authors={paperData.authors}
            abstract={paperData.abstract}
          />

          <SearchBar onSearch={setSearchQuery} />

          <TableOfContents sections={paperData.sections} />

          {paperData.sections.map((section: any, index) => (
            <React.Fragment key={index}>
              <Section title={section.title} content={section.content} searchQuery={searchQuery} tooltips={paperData.tooltips} figures={section.figures} />
              {section.title === "References" && <BibTeXExportButton citations={paperData.citations} />}
            </React.Fragment>
          ))}



          {/* Mobile Footer */}
          <div className="lg:hidden mt-8">
            <Footer authors={paperData.authorDetails} isMobile />
          </div>
        </main>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-12 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <DownloadButton pdfUrl={paperData.pdfUrl} />
              </div>
              <ThemeToggle />
            </div>
            <Footer authors={paperData.authorDetails} />
          </div>
        </aside>
      </div>
    </div>
  );
}
