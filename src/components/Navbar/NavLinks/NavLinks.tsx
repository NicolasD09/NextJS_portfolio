import css from './NavLinks.module.scss'
import { AllSkills } from '@/api/skill';
import ProjectsMenu from '@/components/Navbar/ProjectsMenu/ProjectsMenu';
import { ProjectWithSkills } from '@/api/projects';
import SkillsMenu from '@/components/Navbar/SkillsMenu/SkillsMenu';
import UnderlineLink from '@/components/Link/UnderlineLink';
import Link from 'next/link';
import { Route } from '@/lib/router';

export type NavLinksProps =  { skills: AllSkills, projects: ProjectWithSkills[] }
const NavLinks = ( { skills, projects } : NavLinksProps) => {
  const { skillsByType } = skills;

  return (
    <div className={css.navLinksContainer}>
      <SkillsMenu skills={skillsByType}/>
      <ProjectsMenu projects={projects} />
      <Link href={Route.ABOUT_PAGE} >
          à propos
      </Link>
      <Link href={Route.EXPERIENCES} >
        mon parcours
      </Link>
    </div>
  )
}

export default NavLinks;
