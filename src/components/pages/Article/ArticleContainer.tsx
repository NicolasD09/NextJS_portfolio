import { PropsWithChildren } from 'react';
import css from '@/components/pages/Article/Article.module.scss';


const ArticleContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={css.articleWrapper}>
      {children}
    </div>
  )
}

export default ArticleContainer;
