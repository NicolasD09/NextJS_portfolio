import css from './HeroSection.module.scss'
import N from '../../../public/N.svg'
import Image from 'next/image';
import cn from 'classnames'
import ArrowBottom from '@/components/Icons/ArrowBottom';
const HeroSection = () => {
  return (
    <div className={cn(css.heroContainer, 'fullHeightFlexContainer')}>
      <Image src={N} alt={'N'} className={css.N}/>
      <ArrowBottom className={css.arrow}/>
    </div>
  )
}

export default HeroSection;
