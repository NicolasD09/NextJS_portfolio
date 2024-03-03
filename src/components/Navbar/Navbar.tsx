'use client'
import React, { useState } from 'react'
import NavLinks, { NavLinksProps } from '@/components/Navbar/NavLinks/NavLinks';
import css from './Navbar.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import ScrollIndicator from '@/components/Navbar/ScrollIndicator';
import BrandLogo from '@/components/Icons/BrandLogo';
import { useScroll } from 'framer-motion';

const Navbar = ({ skills, projects }: NavLinksProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll()

  scrollY.on('change', y => {
    if(y > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <div className={cn(css.navbarContainer, {
      [css.scroll]: scrolled
    })}>
      <ScrollIndicator/>
      <div className={cn('layoutWrapper hidden md:flex', css.navbar)}>
        <Link href={'/'}>
          <BrandLogo/>
        </Link>
        <NavLinks skills={skills} projects={projects}/>
      </div>
      <MobileNavbar skills={skills} projects={projects}/>
    </div>
  )
}

export default Navbar;
