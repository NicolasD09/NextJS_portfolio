import { PropsWithChildren } from 'react';
import css from './UnderlineLink.module.scss'

const UnderlineLink = ({ children }: PropsWithChildren) => {
  return (
    <div className={css.link}>{children}</div>
  )
}

export default UnderlineLink;
