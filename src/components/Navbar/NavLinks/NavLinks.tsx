import css from './NavLinks.module.scss'
import SkillsMenu from '@/components/Navbar/SkillsMenu';
import { AllSkills } from '@/api/skill';
export const NavLinks = ( { skills } : { skills: AllSkills }) => {
  const { skillsByType } = skills;

  return (
    <div className={css.navLinksContainer}>
      <SkillsMenu skills={skillsByType}/>
      <span>Projets</span>
      <span>Expériences</span>
      <span>Contact</span>
    </div>
  )
}
