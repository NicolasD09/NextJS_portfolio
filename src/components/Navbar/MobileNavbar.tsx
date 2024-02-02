'use client'

import { NavLinksProps } from '@/components/Navbar/NavLinks/NavLinks';
import cn from 'classnames';
import css from '@/components/Navbar/Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Grid from '@/components/UI/Grid/Grid';
import Accordion from '@/components/Navbar/Accordion';


const MobileNavbar = ({ skills, projects }: NavLinksProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const setState = (state: boolean) => () => {
    setDialogOpen(state)
  }
  const openModal = setState(true)
  const closeModal = setState(false)

  return (
    <div className={cn('md:hidden flex layoutWrapper', css.navbar)}>
      <Link href={'/'}>
        <Image src={logo} alt={'Brand logo'}/>
      </Link>
      <Dialog.Root open={isDialogOpen}>
        <Dialog.Trigger onClick={openModal}>
          <HamburgerMenuIcon width={32} height={32}/>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={css.DialogOverlay}>
            <Dialog.Content className={css.DialogContent}>
              <Dialog.Close onClick={closeModal} className={css.DialogCloseButton}>
                <Cross1Icon/>
              </Dialog.Close>
              <Grid colSpan={1} cols={2} className={'gap-4'}>
                <Grid item colSpan={2}>
                  <Accordion skills={skills} projects={projects}/>
                </Grid>
                <Grid item colSpan={2}>
                  <div><span>Expériences</span>
                  </div>
                </Grid>
                <Grid item colSpan={2}>
                  <div><span>Contact</span></div>
                </Grid>
              </Grid>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default MobileNavbar;
