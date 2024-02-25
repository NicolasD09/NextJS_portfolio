import { PropsWithChildren } from 'react';
import css from './Page.module.scss'
import Navbar from '@/components/Navbar/Navbar';
import { getSkills } from '@/api/skill';
import { getAllProjects } from '@/api/projects';


const Page = async ({ children }: PropsWithChildren) => {
  const [skills, projects] = await Promise.all([
    getSkills(),
    getAllProjects()
  ])

  return (
    <div className={css.Page}>
      <Navbar skills={skills} projects={projects}/>
      {children}
    </div>
  )
}

export default Page;
