import React from 'react';
import DashboardHeader from './DashboardHeader';
import SectionHeader from './SectionHeader';
import { 
  AddWidget,
  CloudAccounts, 
  CloudRiskAssessment, 
  NoDataWidget, 
  ImageRiskAssessment, 
  ImageSecurityIssues 
} from './CardWidgets';

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />

      <SectionHeader title="CSPM Executive Dashboard" />
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <CloudAccounts />
        <CloudRiskAssessment />
        <AddWidget />
      </div>

      <SectionHeader title="CWPP Dashboard:" />
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <NoDataWidget title="Top 5 Namespace Specific Alerts" />
        <NoDataWidget title="Workload Alerts" />
        <AddWidget />
      </div>
      
      <SectionHeader title="Registry Scan" />
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <ImageRiskAssessment />
        <ImageSecurityIssues />
        <AddWidget />
      </div>
    </div>
  );
};

export default Dashboard;