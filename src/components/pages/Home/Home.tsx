import React from 'react';
import HeroSection from '@/components/HeroSection/HeroSection';
import SelfDescription from '@/components/SelfDescription/SelfDescription';
import SkillsSection from '@/components/SkillsSection';
import { getSkills } from '@/api/skill';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import { getAllProjects } from '@/api/projects';


export const Home = async () => {
  const skills = await getSkills()
  const projects = await getAllProjects()
  return (
    <div>
      <HeroSection/>
      <SelfDescription/>
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </div>
  )
}
