import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader'; // Ensure to install this package

// Example blog data (replace with actual data source)
const fetchBlogs = async () => {
  return [
    {
      id: 1,
      title: 'How to Avoid Online Scams',
      description: 'Learn essential tips and tricks to stay safe online and avoid falling victim to scams.',
    },
    {
      id: 2,
      title: 'Latest Fraud Alerts',
      description: 'Stay informed on the latest fraud alerts and trending scams around the world.',
    },
    {
      id: 3,
      title: 'Recognizing Phishing Emails',
      description: 'Discover how to recognize and avoid phishing emails that could compromise your personal information.',
    },
    {
      id: 4,
      title: 'Tips for Secure Online Transactions',
      description: 'Explore ways to ensure secure online transactions to protect your finances.',
    },
    {
      id: 5,
      title: 'Understanding Identity Theft',
      description: 'Learn about identity theft, its consequences, and how to protect yourself.',
    },
    {
      id: 6,
      title: 'Common Online Scam Tactics',
      description: 'Get familiar with common online scam tactics used by fraudsters.',
    },
    {
      id: 7,
      title: 'Fraud Prevention Strategies',
      description: 'Implement effective strategies to prevent fraud and protect your information.',
    },
    {
      id: 8,
      title: 'Spotting Fake Websites',
      description: 'Learn how to identify fake websites and avoid online traps.',
    },
    {
      id: 9,
      title: 'Secure Your Online Presence',
      description: 'Tips to secure your online presence and maintain privacy.',
    },
  ];
};

// Blog Card Component
const BlogCard = ({ title, description }) => {
  return (
    <div className="flex-1 text-center p-6 bg-[#0A0A0A] shadow-lg transform transition-transform duration-300 hover:shadow-2xl border-4 border-[#CB122A]">
      <h3 className="text-3xl font-semibold text-[#CB122A] mb-2">{title}</h3>
      <p className="text-white mt-4 leading-relaxed">{description}</p>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    fetchBlogs()
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load blogs. Please try again later.');
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#CB122A" size={50} />
      </div>
    ); // Use a spinner for better UX
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
        <button onClick={handleRetry} className="mt-4 text-white bg-[#CB122A] px-4 py-2 rounded">
          Retry
        </button>
      </div>
    ); // Error message with retry button
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-white mb-16 pb-4">
          Stay Updated On <span className="text-[#CB122A]">Scams</span> Happening Right Now!
        </h1>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} description={blog.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
