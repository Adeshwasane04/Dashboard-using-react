import React from 'react';
import Header from './Header';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="px-8 py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;