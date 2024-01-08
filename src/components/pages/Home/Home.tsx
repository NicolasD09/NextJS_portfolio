import React from 'react';
import HeroSection from '@/components/HeroSection';
import SelfDescription from '@/components/SelfDescription';
import SkillsSection from '@/components/SkillsSection';
import { getSkills } from '@/api/skill';
import ProjectsSection from '@/components/ProjectsSection';


export const Home = async () => {
  const skills = await getSkills()
  return (
    <div>
      <HeroSection/>
      <SelfDescription/>
      <SkillsSection skills={skills} />
      <ProjectsSection />
    </div>
  )
}
