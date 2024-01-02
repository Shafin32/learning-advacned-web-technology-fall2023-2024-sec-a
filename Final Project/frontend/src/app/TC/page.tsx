// pages/terms.tsx

import React from 'react';
import Link from 'next/link';
import { GoThere } from '@/components/Route/GoThere';

const Terms: React.FC = () => {
  const handleAgree = () => {
    // You can add logic here for handling the agreement, such as updating user preferences in the backend.
    console.log('User agreed to the Terms and Conditions.');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="text-lg mb-4">
          By using our marketplace, you agree to abide by these Terms and Conditions. If you do not agree with any part of
          these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">2. Use of Services</h2>
        <p className="text-lg mb-4">
          You agree to use our services in accordance with applicable laws and regulations and in a manner that does not
          infringe on the rights of others or interfere with the operation of the marketplace.
        </p>
      </section>

      {/* Add more sections for other terms and conditions */}

      <div >
      <GoThere path={'/profile'} btnName="Agree and Continue"/>
      </div>
    </div>
  );
};

export default Terms;
