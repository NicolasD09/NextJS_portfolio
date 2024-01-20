'use client'

import * as Dd from '@radix-ui/react-dropdown-menu';
import css from './style.module.scss';
import { DropdownArrowDown } from '@/components/icons';
import { PropsWithChildren } from 'react';

const Dropdown = ({ children, label }: PropsWithChildren & {label: string}) => {
  return (
    <Dd.Root>
      <Dd.Trigger className={css.skillsMenuTrigger}>
        <span>
          {label}
        </span>
        <DropdownArrowDown className={css.skillsMenuDropdownArrow}/>
      </Dd.Trigger>
      <Dd.Portal>
        {/* Content */}
        <Dd.Content align={'center'} className={css.DropdownMenuContent}>
          <div className={css.skillsMenu}>
            {children}
          </div>
          <Dd.Arrow className={css.skillsMenuArrow}/>
        </Dd.Content>
      </Dd.Portal>
    </Dd.Root>
  )
}

export default Dropdown;
