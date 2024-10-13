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
  {
    id: 4,
    title: 'How to Avoid Online Scams',
    description: 'Learn essential tips and tricks to stay safe online and avoid falling victim to scams.',
  },
  {
    id: 5,
    title: 'Latest Fraud Alerts',
    description: 'Stay informed on the latest fraud alerts and trending scams around the world.',
  },
  {
    id: 6,
    title: 'Recognizing Phishing Emails',
    description: 'Discover how to recognize and avoid phishing emails that could compromise your personal information.',
  },
];

const BlogSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] mx-auto my-10 text-center flex flex-col items-center ">
      <h2 className="text-4xl font-semibold mb-8 text-white">
        Stay Updated On <span className="text-[#CB122A]">Scams</span> happening right now!
      </h2>

      {/* Horizontal alignment of blog cards */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white max-h-[40vh] aspect-[3/4] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm"
          >
            <h3 className="text-2xl text-gray-600 font-bold">{blog.title}</h3>
            <p className="mt-2 text-xl text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
