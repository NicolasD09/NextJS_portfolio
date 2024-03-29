import ArrowRight from '@/components/Icons/ArrowRight';
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
          <ArrowRight className={css.seeMoreIcon}/>
        </span>
      </span>
    </Link>
  )
}

export default SeeMoreButton;
