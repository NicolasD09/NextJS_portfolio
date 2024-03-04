'use client'

import * as Dd from '@radix-ui/react-dropdown-menu';
import css from './style.module.scss';
import DropdownArrowDown from '@/components/Icons/DropdownArrowDown';
import { PropsWithChildren } from 'react';

const Dropdown = ({ children, label }: PropsWithChildren & {label: string}) => {
  return (
    <Dd.Root>
      <Dd.Trigger className={css.dropdownMenuTrigger}>
        <span>
          {label}
        </span>
        <DropdownArrowDown className={css.dropdownMenuDropdownArrow}/>
      </Dd.Trigger>
      <Dd.Portal>
        {/* Content */}
        <Dd.Content align={'center'} className={css.DropdownMenuContent}>
          <div className={css.dropdownMenu}>
            {children}
          </div>
          <Dd.Arrow className={css.dropdownMenuArrow}/>
        </Dd.Content>
      </Dd.Portal>
    </Dd.Root>
  )
}

export default Dropdown;
