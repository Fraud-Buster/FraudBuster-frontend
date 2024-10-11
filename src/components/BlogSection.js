import React from 'react';

// Example blog data (replace with actual data source)
const blogs = [
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
];

const BlogSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-10 text-center flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8 text-white">
        Stay Updated On <span className="text-[#CB122A]">Scams</span> happening right now!
      </h2>

      {/* Horizontal alignment of blog cards */}
      <div className="flex justify-center space-x-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg p-5 w-72 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm"
          >
            <h3 className="text-xl text-gray-600 font-bold">{blog.title}</h3>
            <p className="mt-2 text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
