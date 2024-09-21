import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookNow = () => {
  const [service, setService] = useState('painting');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Book a Service</h2>
        <label htmlFor="service" className="block mb-2">Choose a Service:</label>
        <select id="service" className="p-2 border" value={service} onChange={handleServiceChange}>
          <option value="painting">Painting Service</option>
          <option value="electrical">Electrical Installation</option>
        </select>

        <div className="mt-6">
          {service === 'painting' && (
            <div className="bg-green-200 p-6 text-center">
              <h4 className="text-2xl font-bold">Painting Service</h4>
              <p>We offer professional painting services for homes, offices, and shops.</p>
            </div>
          )}

          {service === 'electrical' && (
            <div className="bg-yellow-200 p-6 text-center">
              <h4 className="text-2xl font-bold">Electrical Installation</h4>
              <p>Expert electrical wiring and fitting services for all spaces.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookNow;
