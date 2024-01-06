import { getSkills } from '@/api/skill';

export default async function Page(){
  const skills = await getSkills()
  
  return (
    <>
      <h1 className={'font-title text-2xl mb-4'}>Compétences</h1>
      <div>
        {skills.map(skill => {
          return <div key={skill.title} className={'flex gap-2 mb-2'}>
            <span>{skill.title}</span>
            <span>/{skill.slug}</span>
            <span>{skill.projectType}</span>
          </div>
        })}
      </div>
    </>
  )
}
