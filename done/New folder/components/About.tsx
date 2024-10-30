import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About DriveMaster</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Driving instructor with student"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 mb-4">
              At DriveMaster, we're committed to creating safe and confident drivers. With over 20 years of experience,
              our team of expert instructors provides top-notch driving education using the latest teaching methods and
              modern vehicles.
            </p>
            <p className="text-gray-700">
              Whether you're a first-time driver or looking to improve your skills, we offer personalized lessons
              tailored to your needs. Join us and experience the DriveMaster difference on your journey to becoming a
              skilled driver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;