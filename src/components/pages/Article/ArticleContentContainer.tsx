import { PropsWithChildren } from 'react';
import cn from 'classnames';
import css from './Article.module.scss';

const ArticleContentContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn(css.articleContentWrapper)}>
      {children}
    </div>
  )
}

export default ArticleContentContainer;
