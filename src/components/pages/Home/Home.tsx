import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SelfDescription from '@/components/SelfDescription';
import SkillsSection from '@/components/SkillsSection';
import { getSkills } from '@/api/skill';
import ProjectsSection from '@/components/ProjectsSection';


export const Home = async () => {
  const skills = await getSkills()
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SelfDescription/>
      <SkillsSection skills={skills} />
      <ProjectsSection />
    </div>
  )
}
