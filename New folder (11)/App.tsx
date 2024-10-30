import React from 'react';
import { Car, Users, BookOpen, Menu } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold flex items-center">
        <Car className="mr-2" /> Drivify360
      </h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#erp" className="hover:text-blue-200">ERP Software</a>
        <a href="#blog" className="hover:text-blue-200">Blog</a>
        <a href="#contact" className="hover:text-blue-200">Contact</a>
      </nav>
      <button className="md:hidden">
        <Menu />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-blue-500 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Revolutionize Your Driving School Management</h2>
      <p className="text-xl mb-8">Streamline operations, manage students and staff effortlessly with Drivify360</p>
      <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">Get Started</a>
    </div>
  </section>
);

const ERPSection = () => (
  <section id="erp" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">ERP Software Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Student Management</h3>
          <p>Efficiently manage student records, schedules, and progress tracking.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Course Management</h3>
          <p>Organize and schedule courses, track attendance, and manage curriculum.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Car className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vehicle Tracking</h3>
          <p>Monitor and manage your fleet of vehicles, maintenance schedules, and usage.</p>
        </div>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section id="blog" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/800x600?car,${i}`} alt="Blog post" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Latest Trends in Auto Industry</h3>
              <p className="text-gray-600 mb-4">Discover the cutting-edge technologies shaping the future of automobiles.</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Drivify360. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <ERPSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;