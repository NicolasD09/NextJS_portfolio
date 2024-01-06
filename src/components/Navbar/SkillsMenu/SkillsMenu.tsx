'use client'

import * as Dd from '@radix-ui/react-dropdown-menu'
import { PartialSkill } from '@/api/skill';
import SkillsMenuList from '@/components/Navbar/SkillsMenu/SkillsMenuList';
import css from './SkillsMenu.module.scss'
import { DropdownArrowDown } from '@/components/Icons';

type SkillsMenuProps = {
  skills: PartialSkill[]
}

function getSortedSkillsForType(skills: PartialSkill[], projectType: string) {
  return skills
    .filter(skill => skill.projectType === projectType)
    .sort((a, b) => a.title.localeCompare(b.title))
}

const SkillsMenu = ({ skills }: SkillsMenuProps) => {

  const humanSkills = getSortedSkillsForType(skills, 'Humaine');
  const technicalSkills = getSortedSkillsForType(skills, 'Technique');

  return (
    <Dd.Root>
      <Dd.Trigger className={css.skillsMenuTrigger}>
        <span>
          Compétences
        </span>
        <DropdownArrowDown className={css.skillsMenuDropdownArrow}/>
      </Dd.Trigger>
      <Dd.Portal>
        {/* Content */}
        <Dd.Content align={'center'} className={css.DropdownMenuContent}>
          <div className={css.skillsMenu}>
            <SkillsMenuList title={'HUMAINES'} skills={humanSkills}/>
            <SkillsMenuList title={'TECHNIQUES'} skills={technicalSkills}/>
          </div>
          <Dd.Arrow className={css.skillsMenuArrow}/>
        </Dd.Content>
      </Dd.Portal>
    </Dd.Root>
  )
}

export default SkillsMenu;
