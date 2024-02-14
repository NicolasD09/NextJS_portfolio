import { BLOCKS, NodeData, TopLevelBlock } from '@contentful/rich-text-types';
import { Route } from '@/lib/router';
import Image from 'next/image';
import css from './Article.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import { getRouteFn } from '@/types';
import { EntrySkeletonType } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Project, Skill } from '../../../../contentfulTypes';

type Document = { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }

type ArticleProps = {
  data: Skill | Project,
  linkedItemsTitle?: string,
  goBackButtonTitle: string,
  goBackButtonRoute: Route,
  getRoute: getRouteFn
}

const Article = ({
  data,
  linkedItemsTitle,
  goBackButtonTitle,
  goBackButtonRoute,
  getRoute
}: ArticleProps) => {
  const randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const randImg = `/images/${randInt}.webp`;
  const { renderElement } = useRenderDocument()
  return (
    <div className={css.articleWrapper}>
      {/* Header */}
      <div className={cn('layoutWrapper', css.articleHeader)}>
        <h1 className={css.articleTitle}>{data.title}</h1>
        <div className={css.articleDescription}>{renderElement(data.description)}</div>
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
        <div className={css.articleContent}>{renderElement(data.content)}</div>
        <h3>{linkedItemsTitle}</h3>
        <p>
          {/*{linkedItems && linkedItems*/}
          {/*  .map(item => (*/}
          {/*    <Link key={item.title} href={getRoute(item)}>{item.title}</Link>*/}
          {/*  ))*/}
          {/*}*/}
        </p>
        <Link href={goBackButtonRoute}>{goBackButtonTitle}</Link>
      </div>
    </div>
  )
}

export default Article;
