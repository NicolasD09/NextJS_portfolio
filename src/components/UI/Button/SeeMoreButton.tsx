import { ArrowRight } from '@/components/icons';
import css from './Button.module.scss'
import Link from 'next/link';

interface SeeMoreProps {
  to: string;
  label?: string;
}
const SeeMoreButton = ({ to, label }: SeeMoreProps) => {
  const usedLabel = label ? label : 'En savoir plus';
  return (
    <Link href={to}>
      <span className={css.seeMoreWrapper}>
        <span>{usedLabel}</span>
        <span className={css.seeMoreIcon}>
          <ArrowRight/>
        </span>
      </span>
    </Link>
  )
}

export default SeeMoreButton;
