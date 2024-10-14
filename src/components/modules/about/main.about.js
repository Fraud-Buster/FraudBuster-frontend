import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-[#CB122A] mb-8">
          About Us
        </h1>

        {/* Description */}
        <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
          Welcome to FraudBuster.xyz, your one-stop solution for identifying and reporting fraudulent activities.
          Our platform provides users with the ability to instantly verify the legitimacy of phone numbers and eSewa IDs,
          making online transactions safer and more secure.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Mission Card */}
          <div className="flex-1 text-center p-6 bg-[#0A0A0A] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-[#CB122A]">
              Our Mission
            </h2>
            <p className="text-white mt-4">
              Our mission is to empower users to detect fraudulent activities and stay protected from online scams.
              We believe in transparency, security, and providing users with tools to safeguard their digital experience.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 text-center p-6 bg-[#0A0A0A] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-[#CB122A]">
              Our Vision
            </h2>
            <p className="text-white mt-4">
              We envision a world where online transactions are safe and reliable.
              FraudBuster.xyz is committed to making the internet a safer place by enabling real-time fraud detection services.
            </p>
          </div>

          {/* Values Card */}
          <div className="flex-1 text-center p-6 bg-[#0A0A0A] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-[#CB122A]">
              Our Values
            </h2>
            <p className="text-white mt-4">
              Integrity, security, and user trust are at the heart of everything we do.
              We prioritize user safety and strive to create a transparent, secure environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
