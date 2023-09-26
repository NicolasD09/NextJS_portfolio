import css from './Navbar.module.scss'
import cn from 'classnames'
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import NavLinks from '@/components/Navbar/NavLinks';
export const Navbar = () => {
  return (
    <div className={cn('layoutWrapper', css.navbar)}>
      <Image src={logo} alt={'Brand logo'}/>
      <NavLinks/>
    </div>
  )
}
