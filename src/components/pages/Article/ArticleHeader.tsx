import { ReactNode } from 'react';
import cn from 'classnames';
import css from '@/components/pages/Article/Article.module.scss';

type Props = {
  title: string;
  content: ReactNode | string;
}

const ArticleHeader = ({ title, content }: Props) => {
  return (
    <div className={cn('layoutWrapper', css.articleHeader)}>
      <h1 className={css.articleTitle}>{title}</h1>
      <div className={css.articleDescription}>{content}</div>
    </div>
  )
}

export default ArticleHeader;
