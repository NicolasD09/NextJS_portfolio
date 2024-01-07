import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SelfDescription from '@/components/SelfDescription';
import SkillsSection from '@/components/SkillsSection';


export const Home = async () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SelfDescription/>
      <SkillsSection />
    </div>
  )
}
