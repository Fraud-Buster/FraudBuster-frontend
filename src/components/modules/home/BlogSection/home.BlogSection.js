import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample blog data
const fetchBlogs = async () => {
  return [
    { id: 1, title: 'How to Avoid Online Scams', description: 'Learn essential tips and tricks to stay safe online and avoid falling victim to scams.', publishDate: '2024-01-15', tags: ['Safety', 'Tips'] },
    { id: 2, title: 'Latest Fraud Alerts', description: 'Stay informed on the latest fraud alerts and trending scams around the world.', publishDate: '2024-01-20', tags: ['Fraud', 'Alerts'] },
    { id: 3, title: 'Recognizing Phishing Emails', description: 'Discover how to recognize and avoid phishing emails that could compromise your personal information.', publishDate: '2024-01-25', tags: ['Phishing', 'Emails'] },
    { id: 4, title: 'Tips for Secure Online Transactions', description: 'Explore ways to ensure secure online transactions to protect your finances.', publishDate: '2024-02-01', tags: ['Security', 'Transactions'] },
    { id: 5, title: 'Understanding Identity Theft', description: 'Learn about identity theft, its consequences, and how to protect yourself.', publishDate: '2024-02-05', tags: ['Identity Theft', 'Protection'] },
    { id: 6, title: 'Common Online Scam Tactics', description: 'Get familiar with common online scam tactics used by fraudsters.', publishDate: '2024-02-10', tags: ['Scams', 'Tactics'] },
  ];
};

// Blog Card Component
const BlogCard = ({ title, description, publishDate, tags }) => {
  return (
    <div className="p-5 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-red-600 mb-2">{title}</h3>
      <small className="text-gray-400">{new Date(publishDate).toLocaleDateString()}</small>
      <p className="text-white mt-4 leading-relaxed">{description}</p>
      <div className="mt-2">
        {tags.map(tag => (
          <span className="bg-red-600 text-white rounded px-2 py-1 text-sm mr-2" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
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
        console.error(err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#CB122A" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">
          Stay Updated On <span className="text-red-600">Scams</span> Happening Right Now!
        </h1>
        <Slider {...sliderSettings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="flex justify-center">
              <BlogCard 
                title={blog.title} 
                description={blog.description} 
                publishDate={blog.publishDate} 
                tags={blog.tags} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;