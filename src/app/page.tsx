import Home from '@/components/pages/Home';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import { getSkills } from '@/api/skill';
import { getAllProjects } from '@/api/projects';

export const metadata: Metadata = {
  title: 'Nicolas DURPOIX',
}
export default async function IndexPage() {
  const skills = await getSkills()
  const projects = await getAllProjects()
  return (
    <>
      <Navbar skills={skills} projects={projects}/>
      <Home/>
    </>
  )
}
