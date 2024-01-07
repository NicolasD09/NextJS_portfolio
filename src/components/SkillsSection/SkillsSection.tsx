import { getSkills } from '@/api/skill';

export const SkillsSection = async () => {
  const { skills } = await getSkills()

  return (
    <>
      {
        skills.map(s => <div key={s.title}>{s.title}</div>)
      }
    </>
  )
}
