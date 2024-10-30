import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import StudentPortal from './components/StudentPortal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<{type: string, email: string} | null>(null);

  const handleLogin = (userType: string, email: string) => {
    setLoggedInUser({ type: userType, email });
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    switch (loggedInUser.type) {
      case 'admin':
        return <AdminDashboard email={loggedInUser.email} onLogout={handleLogout} />;
      case 'instructor':
        return <InstructorDashboard email={loggedInUser.email} onLogout={handleLogout} />;
      case 'student':
        return <StudentPortal email={loggedInUser.email} onLogout={handleLogout} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
    </div>
  );
}

export default App;