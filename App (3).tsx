import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/admin/AdminDashboard';
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

  return (
    <div className="min-h-screen bg-gray-100">
      {loggedInUser ? (
        <>
          {loggedInUser.type === 'admin' && <AdminDashboard email={loggedInUser.email} onLogout={handleLogout} />}
          {loggedInUser.type === 'instructor' && <InstructorDashboard email={loggedInUser.email} onLogout={handleLogout} />}
          {loggedInUser.type === 'student' && <StudentPortal email={loggedInUser.email} onLogout={handleLogout} />}
        </>
      ) : (
        <>
          <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
          <Hero />
          <Features />
          <About />
          <Contact />
          <Footer />
        </>
      )}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
    </div>
  );
}

export default App;
