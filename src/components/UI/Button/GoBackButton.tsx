import Link from 'next/link';
import css from '@/components/UI/Button/Button.module.scss';
import CaretLeft from '@/components/Icons/CaretLeft';

type Props = {
  to: string;
  label: string;
}
const GoBackButton = ({ to, label }: Props) => {
  return (
    <Link href={to}>
      <span className={css.goBackWrapper}>
        <span className={css.goBackIcon}>
          <CaretLeft/>
        </span>
        <span>{label}</span>
      </span>
    </Link>
  )
}

export default GoBackButton;
