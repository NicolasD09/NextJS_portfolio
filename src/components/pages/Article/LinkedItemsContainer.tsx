import { PropsWithChildren } from 'react';
import css from '@/components/pages/Article/Article.module.scss';

const LinkedItemsContainer = ({ children, title }: PropsWithChildren & {title?: string}) => {
  if(title === undefined) {
    return null;
  }
  return (
    <div className={css.linkedItemsContainer}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default LinkedItemsContainer;
