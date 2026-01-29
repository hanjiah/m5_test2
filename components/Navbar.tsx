
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-serif font-bold tracking-wider text-amber-700">LUXE PREMIER</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">이벤트 안내</a>
              <a href="#" className="text-slate-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">참여 방법</a>
              <a href="#" className="text-slate-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">공지사항</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
