import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: '10 Essential Tips for Driving on Icy Roads',
    excerpt: 'Winter driving can be challenging. Learn how to stay safe with these expert tips.',
    date: 'March 1, 2024',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'The Importance of Defensive Driving',
    excerpt: 'Discover why defensive driving is crucial and how it can prevent accidents.',
    date: 'February 15, 2024',
    author: 'Emma Johnson',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'How to Overcome Driving Anxiety',
    excerpt: 'Feeling nervous behind the wheel? Learn strategies to build confidence and reduce anxiety.',
    date: 'January 30, 2024',
    author: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">DriveRight Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <Link to={`/blog/${index + 1}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;