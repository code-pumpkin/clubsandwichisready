import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="hero bg-blue-600 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Drive Right. Drive Safe.</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Your journey to becoming a confident and safe driver starts here at DriveRight Academy.</p>
          <Link to="/courses" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="features py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <Shield size={48} className="mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
              <p className="text-gray-600">Our top priority is ensuring you learn to drive safely and confidently.</p>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified professionals with years of experience.</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-gray-600">Tailored lessons to meet your individual needs and learning style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-gray-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join DriveRight Academy today and take the first step towards driving excellence.</p>
          <Link to="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;