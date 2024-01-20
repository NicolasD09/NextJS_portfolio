'use client'

import { SkillsByType } from '@/api/skill';
import { getRouteForSkill } from '@/lib/router';
import MenuList from '@/components/Navbar/SkillsMenu/MenuList';
import Dropdown from '@/components/UI/Dropdown/Dropdown';

type SkillsMenuProps = {
  skills: SkillsByType
}
const SkillsMenu = ({ skills }: SkillsMenuProps) => {

  return (
    <Dropdown label={'Compétences'}>
      <MenuList title={'HUMAINES'} items={skills.humanSkills} getRoute={getRouteForSkill}/>
      <MenuList title={'TECHNIQUES'} items={skills.technicalSkills} getRoute={getRouteForSkill}/>
    </Dropdown>
  )
}

export default SkillsMenu;
