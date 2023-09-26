import { ArrowRight } from '@/components/Icons';
import css from './Button.module.scss'
import Link from 'next/link';

interface SeeMoreProps {
  to: string;
}
export const SeeMore = ({ to }: SeeMoreProps) => {
  return (
    <Link href={to}>
      <span className={css.seeMoreWrapper}>
        <span>En savoir plus</span>
        <span className={css.seeMoreIcon}>
          <ArrowRight/>
        </span>
      </span>
    </Link>
  )
}
