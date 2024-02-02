import { BLOCKS, NodeData, TopLevelBlock } from '@contentful/rich-text-types';
import { Entry, EntrySkeletonType } from 'contentful';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Route } from '@/lib/router';
import Image from 'next/image';
import css from './Article.module.scss'
import cn from 'classnames'
import Link from 'next/link';

type Document = { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }

export type ArticleProps = {
  title: string,
  description: Document,
  content: Document,
  linkedItems?: ReadonlyArray<Entry<EntrySkeletonType<any>>>,
  linkedItemsTitle?: string,
  goBackButtonTitle: string,
  goBackButtonRoute: Route
}
const Article = ({
  title,
  description,
  content,
  linkedItems,
  linkedItemsTitle,
  goBackButtonTitle,
  goBackButtonRoute
} : ArticleProps) => {
  const randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const randImg = `/images/${randInt}.webp`;
  return (
    <div className={css.articleWrapper}>
      <div className={cn('layoutWrapper', css.articleHeader)}>
        <h1 className={css.articleTitle}>{title}</h1>
        <div className={css.articleDescription}>{renderElement(description)}</div>
      </div>
      <div className={css.articleImage}>
        <Image
          src={randImg}
          objectPosition={'center center'}
          objectFit={'cover'}
          alt={'Background image'}
          fill={true}
          quality={100}
        />
      </div>
      <div className={'layoutWrapper'}>
        <div className={css.articleContent}>{renderElement(content)}</div>
        {linkedItems && linkedItems.map(item => <span key={Math.random()}>{JSON.stringify(item)}</span>)}
        <p>{linkedItemsTitle}</p>
        <Link href={goBackButtonRoute}>{goBackButtonTitle}</Link>
        <p>{goBackButtonRoute}</p>
      </div>
    </div>
  )
}

export default Article;
