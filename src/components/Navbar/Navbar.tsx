import NavLinks, { NavLinksProps } from '@/components/Navbar/NavLinks/NavLinks';
import css from './Navbar.module.scss'
import cn from 'classnames'
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = ({ skills, projects }: NavLinksProps) => {
  return (
    <div className={cn('layoutWrapper', css.navbar)}>
      <Link href={'/'}>
        <Image src={logo} alt={'Brand logo'}/>
      </Link>
      <NavLinks skills={skills} projects={projects}/>
    </div>
  )
}

export default Navbar;
