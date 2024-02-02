import NavLinks, { NavLinksProps } from '@/components/Navbar/NavLinks/NavLinks';
import css from './Navbar.module.scss'
import cn from 'classnames'
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from '@/components/Navbar/MobileNavbar';

const Navbar = ({ skills, projects }: NavLinksProps) => {
  return (
    <>
      <div className={cn('layoutWrapper hidden md:flex', css.navbar)}>
        <Link href={'/'}>
          <Image src={logo} alt={'Brand logo'}/>
        </Link>
        <NavLinks skills={skills} projects={projects}/>
      </div>
      <MobileNavbar skills={skills} projects={projects}/>
    </>
  )
}

export default Navbar;
