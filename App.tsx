
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CouponSection } from './components/CouponSection';
import { EventDescription } from './components/EventDescription';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isCouponIssued, setIsCouponIssued] = useState(false);

  const handleIssueCoupon = () => {
    // Simulate API call
    setTimeout(() => {
      setIsCouponIssued(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EventDescription />
        <CouponSection 
          isIssued={isCouponIssued} 
          onIssue={handleIssueCoupon} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
