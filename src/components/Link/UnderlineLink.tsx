import React, { PropsWithChildren } from 'react';
import css from './UnderlineLink.module.scss'
import cn from 'classnames';

const UnderlineLink = ({ children, ...otherProps }: PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...otherProps} className={cn(css.link, otherProps.className)}>{children}</div>
  )
}

export default UnderlineLink;
