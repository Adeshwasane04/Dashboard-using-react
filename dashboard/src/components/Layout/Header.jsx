import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <Menu className="h-5 w-5 text-gray-500" />
        <nav className="flex items-center">
          <button 
            className="text-gray-500 hover:text-gray-700 px-2"
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <span className="text-gray-300 mx-1">/</span>
          <button 
            className={`px-2 ${currentPage === 'dashboard' ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setCurrentPage('dashboard')}
          >
            Dashboard V2
          </button>
        </nav>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="border border-gray-200 rounded-md py-1 px-8 w-64 text-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <div className="h-6 w-6 bg-purple-600 rounded-full text-white flex items-center justify-center text-xs font-bold">A</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;