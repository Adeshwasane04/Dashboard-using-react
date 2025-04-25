import React, { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage === 'dashboard' ? <DashboardPage /> : <HomePage />}
    </Layout>
  );
};

export default App;