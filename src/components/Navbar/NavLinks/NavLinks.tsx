import css from './NavLinks.module.scss'
import { AllSkills } from '@/api/skill';
import ProjectsMenu from '@/components/Navbar/ProjectsMenu/ProjectsMenu';
import { ProjectWithSkills } from '@/api/projects';
import SkillsMenu from '@/components/Navbar/SkillsMenu/SkillsMenu';

export type NavLinksProps =  { skills: AllSkills, projects: ProjectWithSkills[] }
const NavLinks = ( { skills, projects } : NavLinksProps) => {
  const { skillsByType } = skills;

  return (
    <div className={css.navLinksContainer}>
      <SkillsMenu skills={skillsByType}/>
      <ProjectsMenu projects={projects} />
      <span>Expériences</span>
      <span>Contact</span>
    </div>
  )
}

export default NavLinks;
