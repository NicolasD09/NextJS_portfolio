'use client'

import MenuList from '@/components/Navbar/MenuList/MenuList';
import { getRouteForProject, Route } from '@/lib/router';
import { ProjectWithSkills } from '@/api/projects';
import Dropdown from '@/components/UI/Dropdown/Dropdown';
import UnderlineLink from '@/components/Link/UnderlineLink';
import Link from 'next/link';

const ProjectsMenu = ({ projects }: {projects: ProjectWithSkills[]}) => {
  return (
    <Dropdown label={'Réalisations'}>
      <div className={'flex flex-col gap-3'}>
        <UnderlineLink className={'self-center'}>
          <Link href={Route.PROJECTS} className={'text-sm'}>Voir toutes les réalisations</Link>
        </UnderlineLink>
        <hr/>
        <MenuList items={projects} getRoute={getRouteForProject}/>
      </div>
    </Dropdown>
  )
}

export default ProjectsMenu;
