import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="hero bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn to Drive with Confidence</h1>
          <p className="text-xl mb-8">Join DriveMaster Academy for expert instruction and comprehensive courses</p>
          <Link to="/courses" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="features py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DriveMaster Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p>Our top priority is ensuring you learn safe driving practices.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>Learn from certified professionals with years of experience.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p>Tailored instruction to meet your individual learning needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied students who have learned to drive with us.</p>
          <Link to="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;