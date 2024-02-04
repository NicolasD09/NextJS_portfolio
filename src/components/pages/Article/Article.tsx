import { BLOCKS, NodeData, TopLevelBlock } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { Route } from '@/lib/router';
import Image from 'next/image';
import css from './Article.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';

type Document = { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }

type ArticleProps = {
  title: string,
  description: Document,
  content: Document,
  linkedItems?: ReadonlyArray<Entry<EntrySkeletonType<any>>>,
  linkedItemsTitle?: string,
  goBackButtonTitle: string,
  goBackButtonRoute: Route,
  assets?: Map<string, Asset>
}

const Article = ({
  title,
  description,
  content,
  linkedItems,
  linkedItemsTitle,
  goBackButtonTitle,
  goBackButtonRoute,
  assets
} : ArticleProps) => {
  const randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const randImg = `/images/${randInt}.webp`;
  const { renderElement } = useRenderDocument(assets)
  return (
    <div className={css.articleWrapper}>
      {/* Header */}
      <div className={cn('layoutWrapper', css.articleHeader)}>
        <h1 className={css.articleTitle}>{title}</h1>
        <div className={css.articleDescription}>{renderElement(description)}</div>
      </div>
      <div className={css.articleImage}>
        <Image
          src={randImg}
          alt={'Background image'}
          fill={true}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Content */}
      <div className={cn(css.articleContentWrapper)}>
        <div className={css.articleContent}>{renderElement(content)}</div>
        {linkedItems && linkedItems.map(item => <span key={Math.random()}>{JSON.stringify(item)}</span>)}
        <p>{linkedItemsTitle}</p>
        <Link href={goBackButtonRoute}>{goBackButtonTitle}</Link>
      </div>
    </div>
  )
}

export default Article;
