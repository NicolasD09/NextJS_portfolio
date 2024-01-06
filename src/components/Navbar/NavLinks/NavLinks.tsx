import css from './NavLinks.module.scss'
import SkillsMenu from '@/components/Navbar/SkillsMenu';
import { getSkills, PartialSkill } from '@/api/skill';
export const NavLinks = async () => {
  const skills: PartialSkill[] = await getSkills()

  return (
    <div className={css.navLinksContainer}>
      <SkillsMenu skills={skills}/>
      <span>Projets</span>
      <span>Expériences</span>
      <span>Contact</span>
    </div>
  )
}
