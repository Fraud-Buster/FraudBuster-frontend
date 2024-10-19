import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader'; // Ensure to install this package
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

// Sample blog data
const fetchBlogs = async () => {
  return [
    {
      id: 1,
      title: 'How to Avoid Online Scams',
      description: 'Learn essential tips and tricks to stay safe online and avoid falling victim to scams.',
      publishDate: '2024-01-15',
      tags: ['Safety', 'Tips']
    },
    {
      id: 2,
      title: 'Latest Fraud Alerts',
      description: 'Stay informed on the latest fraud alerts and trending scams around the world.',
      publishDate: '2024-01-20',
      tags: ['Fraud', 'Alerts']
    },
    {
      id: 3,
      title: 'Recognizing Phishing Emails',
      description: 'Discover how to recognize and avoid phishing emails that could compromise your personal information.',
      publishDate: '2024-01-25',
      tags: ['Phishing', 'Emails']
    },
    {
      id: 4,
      title: 'Tips for Secure Online Transactions',
      description: 'Explore ways to ensure secure online transactions to protect your finances.',
      publishDate: '2024-02-01',
      tags: ['Security', 'Transactions']
    },
    {
      id: 5,
      title: 'Understanding Identity Theft',
      description: 'Learn about identity theft, its consequences, and how to protect yourself.',
      publishDate: '2024-02-05',
      tags: ['Identity Theft', 'Protection']
    },
    {
      id: 6,
      title: 'Common Online Scam Tactics',
      description: 'Get familiar with common online scam tactics used by fraudsters.',
      publishDate: '2024-02-10',
      tags: ['Scams', 'Tactics']
    },
  ];
};

// Custom Previous Arrow Component
const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`custom-arrow left-0 ${className}`}
    onClick={onClick}
    aria-label="Previous Blog"
  >
    &lt; {/* or any custom icon */}
  </button>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`custom-arrow right-0 ${className}`}
    onClick={onClick}
    aria-label="Next Blog"
  >
    &gt; {/* or any custom icon */}
  </button>
);

// Blog Card Component
const BlogCard = ({ title, description, publishDate, tags }) => {
  return (
    <Card className="card p-5 transition-transform duration-300 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-[#CB122A] mb-2">{title}</h3>
      <small className="text-gray-400">{new Date(publishDate).toLocaleDateString()}</small>
      <p className="text-white mt-4 leading-relaxed">{description}</p>
      <div className="tags mt-2">
        {tags.map(tag => (
          <span className="tag bg-[#CB122A] text-white rounded px-2 py-1 text-sm mr-2" key={tag}>{tag}</span>
        ))}
      </div>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

// Styled Components
const Card = styled.div`
  background: #0A0A0A;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

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
        console.error(err); // Log the error for debugging
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
    ); // Use a spinner for better UX
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
      </div>
    ); // Error message
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Change slides every 3 seconds
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="py-12">
      <div className="max-w-[1216px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-white mb-16 pb-4">
          Stay Updated On <span className="text-[#CB122A]">Scams</span> Happening Right Now!
        </h1>
        <Slider {...sliderSettings}>
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              title={blog.title} 
              description={blog.description} 
              publishDate={blog.publishDate} 
              tags={blog.tags} 
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;