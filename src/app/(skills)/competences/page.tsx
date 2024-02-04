import { getSkills } from '@/api/skill';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects } from '@/api/projects';

export default async function Page(){
  const allSkills = await getSkills()
  const projects = await getAllProjects();
  
  return (
    <>
      <Navbar skills={allSkills} projects={projects} />
      <h1 className={'font-title text-2xl mb-4'}>Compétences</h1>
      <div>
        {allSkills.skills.map(skill => {
          return <div key={skill.title} className={'flex gap-2 mb-2'}>
            <span>{skill.title}</span>
            <span>/{skill.slug}</span>
            <span>{skill.projectType}</span>
            <span>{skill.skillLevel}</span>
          </div>
        })}
      </div>
    </>
  )
}
