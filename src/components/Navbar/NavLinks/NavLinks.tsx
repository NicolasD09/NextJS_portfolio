import css from './NavLinks.module.scss'
import SkillsMenu from '@/components/Navbar/SkillsMenu';
import { getSkills } from '@/api/skill';
export const NavLinks = async () => {
  const { skillsByType } = await getSkills()

  return (
    <div className={css.navLinksContainer}>
      <SkillsMenu skills={skillsByType}/>
      <span>Projets</span>
      <span>Expériences</span>
      <span>Contact</span>
    </div>
  )
}
