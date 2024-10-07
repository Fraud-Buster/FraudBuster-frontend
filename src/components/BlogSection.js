import React from 'react';

const BlogSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-10 text-center flex justify-center flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8">
        Stay Updated On <span className="text-[#CB122A]">Scams</span> happening right now!
      </h2>

      {/* Placeholder for where blog cards will be added later */}
      <div className="flex flex-wrap gap-5 ">
        {/* Blog cards can be dynamically rendered here */}
        {/* Example of a blog card structure */}
        <div className="bg-white rounded-lg p-5 w-contain cursor-pointer hover:scale-105  shadow-sm  shadow-white">
          <h3 className="text-xl text-gray-600 font-bold">Blog Title</h3>
          <p className="mt-2 text-gray-600">A brief description of the blog post goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
