import css from '@/components/pages/Article/Article.module.scss';
import { PropsWithChildren } from 'react';

const ArticleContent = ({ children }: PropsWithChildren) => {
  return (
    <div className={css.articleContent}>
      {children}
    </div>
  )
}

export default ArticleContent;
