'use client'

import MenuList from '@/components/Navbar/SkillsMenu/MenuList';
import { getRouteForProject } from '@/lib/router';
import { ProjectWithSkills } from '@/api/projects';
import Dropdown from '@/components/UI/Dropdown/Dropdown';

const ProjectsMenu = ({ projects }: {projects: ProjectWithSkills[]}) => {
  return (
    <Dropdown label={'Réalisations'}>
      <MenuList items={projects} getRoute={getRouteForProject}/>
    </Dropdown>
  )
}

export default ProjectsMenu;
