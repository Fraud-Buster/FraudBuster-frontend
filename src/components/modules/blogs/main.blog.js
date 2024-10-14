import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Spot Online Scams',
      excerpt: 'Learn about common red flags and tips to avoid online scams...',
      author: 'John',
      date: 'October 12, 2024',
    },
    {
      title: 'Protect Your eSewa Transactions',
      excerpt: 'A comprehensive guide to safeguarding your eSewa transactions...',
      author: 'John',
      date: 'September 30, 2024',
    },
    {
      title: 'Top 5 Fraud Detection Tools in 2024',
      excerpt: 'Explore the best fraud detection tools to keep your digital life secure...',
      author: 'John',
      date: 'September 20, 2024',
    },
    {
      title: 'Recognizing Phishing Emails',
      excerpt: 'Key indicators of phishing attempts and how to respond...',
      author: 'Jane',
      date: 'October 5, 2024',
    },
    {
      title: 'Safe Online Shopping Tips',
      excerpt: 'How to shop online without falling victim to fraud...',
      author: 'Emily',
      date: 'October 10, 2024',
    },
    {
      title: 'Understanding Cybersecurity Basics',
      excerpt: 'Essential knowledge for navigating the digital world securely...',
      author: 'Michael',
      date: 'October 15, 2024',
    },
  ];

  return (
    <section className="py-12 bg-black"> {/* Solid black background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Heading without Hover Effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 mb-8 drop-shadow-2xl tracking-wide animate-pulse p-4">
          Stay Updated On Scams Happening Right Now!
        </h1>

        <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
          Stay informed with our latest blog posts on fraud prevention, online security, and how to protect yourself in the digital world.
        </p>

        {/* Blog Post Grid with 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] p-6 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-extrabold text-[#CB122A] mb-2 hover:text-[#FF7F50] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-white mb-4">{post.excerpt}</p>
              <p className="text-gray-400 text-sm mb-4 flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v9m0 0l-3-3m3 3l3-3m-3-9a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
                By {post.author} on {post.date}
              </p>
              <a href="#" className="text-[#CB122A] hover:underline font-bold">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
