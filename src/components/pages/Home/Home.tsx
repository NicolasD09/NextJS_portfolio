import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SelfDescription from '@/components/SelfDescription';


export const Home = async () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SelfDescription/>
    </div>
  )
}
