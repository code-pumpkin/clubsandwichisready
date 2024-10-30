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
  console.log('App component rendered');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<{type: string, email: string} | null>(null);

  const handleLogin = (userType: string, email: string) => {
    console.log('Login attempted:', userType, email);
    setLoggedInUser({ type: userType, email });
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout attempted');
    setLoggedInUser(null);
  };

  console.log('Current user:', loggedInUser);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      {loggedInUser ? (
        <>
          {console.log('Rendering dashboard for:', loggedInUser.type)}
          {loggedInUser.type === 'admin' && <AdminDashboard email={loggedInUser.email} onLogout={handleLogout} />}
          {loggedInUser.type === 'instructor' && <InstructorDashboard email={loggedInUser.email} onLogout={handleLogout} />}
          {loggedInUser.type === 'student' && <StudentPortal email={loggedInUser.email} onLogout={handleLogout} />}
        </>
      ) : (
        <>
          {console.log('Rendering landing page')}
          <Hero />
          <Features />
          <About />
          <Contact />
        </>
      )}
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
    </div>
  );
}

export default App;
