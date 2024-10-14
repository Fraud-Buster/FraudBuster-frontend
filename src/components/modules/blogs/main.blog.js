import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Spot Online Scams',
      excerpt: 'Learn about common red flags and tips to avoid online scams...',
      author: 'jhon',
      date: 'October 12, 2024',
    },
    {
      title: 'Protect Your eSewa Transactions',
      excerpt: 'A comprehensive guide to safeguarding your eSewa transactions...',
      author: 'jhon',
      date: 'September 30, 2024',
    },
    {
      title: 'Top 5 Fraud Detection Tools in 2024',
      excerpt: 'Explore the best fraud detection tools to keep your digital life secure...',
      author: 'jhon',
      date: 'September 20, 2024',
    },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-[#CB122A] mb-8">Our Blogs</h1>
        <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
          Stay informed with our latest blog posts on fraud prevention, online security, and how to protect yourself in the digital world.
        </p>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-[#CB122A] mb-2">{post.title}</h2>
              <p className="text-white mb-4">{post.excerpt}</p>
              <p className="text-gray-400 text-sm">
                By {post.author} on {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
