'use client'

import { SkillsByType } from '@/api/skill';
import { getRouteForSkill, Route } from '@/lib/router';
import MenuList from '@/components/Navbar/MenuList/MenuList';
import Dropdown from '@/components/UI/Dropdown/Dropdown';
import Link from 'next/link';
import UnderlineLink from '@/components/Link/UnderlineLink';

type SkillsMenuProps = {
  skills: SkillsByType
}
const SkillsMenu = ({ skills }: SkillsMenuProps) => {

  return (
    <>
      <Dropdown label={'Compétences'}>
        <div className={'flex flex-col gap-3'}>
          <UnderlineLink className={'self-center'}>
            <Link href={Route.SKILLS} className={'text-sm'}>Voir toutes les compétences</Link>
          </UnderlineLink>
          <hr/>
          <div className={'flex gap-8'}>
            <MenuList title={'TRANSVERSES'} items={skills.humanSkills} getRoute={getRouteForSkill}/>
            <MenuList title={'TECHNIQUES'} items={skills.technicalSkills} getRoute={getRouteForSkill}/>
          </div>
        </div>
      </Dropdown>
    </>
  )
}

export default SkillsMenu;
