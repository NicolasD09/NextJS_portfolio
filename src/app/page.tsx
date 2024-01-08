import Home from '@/components/pages/Home';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { getSkills } from '@/api/skill';

export const metadata: Metadata = {
  title: 'Nicolas DURPOIX',
}
export default async function IndexPage() {
  const skills = await getSkills()

  return (
    <>
      <Navbar skills={skills} />
      <Home/>
    </>
  )
}
