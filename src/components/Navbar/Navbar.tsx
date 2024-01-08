import css from './Navbar.module.scss'
import cn from 'classnames'
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import NavLinks from '@/components/Navbar/NavLinks';
import { AllSkills } from '@/api/skill';
import Link from 'next/link';
export const Navbar = ({ skills }: {skills: AllSkills}) => {
  return (
    <div className={cn('layoutWrapper', css.navbar)}>
      <Link href={'/'}>
        <Image src={logo} alt={'Brand logo'}/>
      </Link>
      <NavLinks skills={skills}/>
    </div>
  )
}
