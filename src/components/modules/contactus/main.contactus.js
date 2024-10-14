import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., API call)
    console.log('Form submitted', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-[#CB122A] mb-8">Contact Us</h1>
        <p className="text-lg text-white text-center mb-12">
          Have questions or need assistance? Please fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <form className="bg-[#0A0A0A] p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white text-lg mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-[#CB122A]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-lg mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-[#CB122A]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-lg mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-[#CB122A]"
              rows="5"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold bg-[#CB122A] text-white rounded hover:bg-red-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
