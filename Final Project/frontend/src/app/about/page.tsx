// pages/about.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Our Marketplace</h1>
      <p className="text-lg mb-4">
        Welcome to our marketplace, where you can discover and purchase a wide range of products from various sellers.
      </p>
      <p className="text-lg mb-4">
        Our mission is to provide a seamless and enjoyable shopping experience for our customers while supporting
        talented sellers and creators.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="text-lg mb-4">
        <strong>MarketPlace</strong> <br />
        Version: 1.0.0 <br />
        Developer: Shafin Islam, Fahimul Bari, Atikur Rahman <br />
        Email: shafin@gmail.com, fahimul@gamil.com, atikur@gmail.com <br />
        Website: <a href="https://www.marketplace.com" className="text-blue-500">www.marketplace.com</a>
      </p>
      <p className="text-lg mb-4">
        Meet the dedicated team behind our marketplace. We are passionate about connecting buyers and sellers and
        building a thriving online community.
      </p>
      {/* Add more sections about your marketplace */}
    </div>
  );
};

export default About;
