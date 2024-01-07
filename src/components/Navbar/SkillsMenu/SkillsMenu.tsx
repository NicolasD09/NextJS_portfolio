'use client'

import * as Dd from '@radix-ui/react-dropdown-menu'
import { SkillsByType } from '@/api/skill';
import SkillsMenuList from '@/components/Navbar/SkillsMenu/SkillsMenuList';
import css from './SkillsMenu.module.scss'
import { DropdownArrowDown } from '@/components/Icons';

type SkillsMenuProps = {
  skills: SkillsByType
}
const SkillsMenu = ({ skills }: SkillsMenuProps) => {

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
            <SkillsMenuList title={'HUMAINES'} skills={skills.humanSkills}/>
            <SkillsMenuList title={'TECHNIQUES'} skills={skills.technicalSkills}/>
          </div>
          <Dd.Arrow className={css.skillsMenuArrow}/>
        </Dd.Content>
      </Dd.Portal>
    </Dd.Root>
  )
}

export default SkillsMenu;
