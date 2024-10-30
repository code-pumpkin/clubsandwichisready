import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import { roleConfigs } from './config/roleConfig';

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentRole = location.pathname.split('/')[1] || 'admin';

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentRole={currentRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Routes>
          {Object.entries(roleConfigs).map(([role, config]) => (
            <React.Fragment key={role}>
              <Route path={`/${role}`} element={<DashboardContent role={role} />} />
              {config.menuItems.flatMap(item => 
                item.subItems 
                  ? item.subItems.map(subItem => (
                      <Route 
                        key={subItem.path} 
                        path={subItem.path} 
                        element={<div>{subItem.name} Content</div>} 
                      />
                    ))
                  : [
                      <Route 
                        key={item.path} 
                        path={item.path} 
                        element={<div>{item.name} Content</div>} 
                      />
                    ]
              )}
            </React.Fragment>
          ))}
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;