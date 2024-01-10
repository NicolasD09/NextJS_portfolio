import { getSkills } from '@/api/skill';
import Navbar from '@/components/Navbar';
import { getAllProjects } from '@/api/projects';

export default async function Page(){
  const allSkills = await getSkills();
  const projects = await getAllProjects();
  
  return (
    <>
      <Navbar skills={allSkills} />
      <h1 className={'font-title text-2xl mb-4'}>Réalisations</h1>
      <div>
        {projects.map(skill => {
          return <div key={skill.title} className={'flex gap-2 mb-2'}>
            <span>{skill.title}</span>
            <span>/{skill.slug}</span>
          </div>
        })}
      </div>
    </>
  )
}
