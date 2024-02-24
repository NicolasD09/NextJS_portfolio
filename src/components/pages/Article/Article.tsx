import { Route } from '@/lib/router';
import Image from 'next/image';
import css from './Article.module.scss'
import cn from 'classnames'
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import { getRouteFn } from '@/types';
import { Project, Skill } from '../../../../contentfulTypes';
import { Entry } from 'contentful';
import LinkedItems from '@/components/LinkedItems/LinkedItems';
import GoBackButton from '@/components/UI/Button/GoBackButton';

type ArticleProps = {
  data: Skill | Project,
  linkedItemsTitle?: string,
  goBackButtonTitle: string,
  goBackButtonRoute: Route,
  getItemRouteUrl: getRouteFn,
  linkedItems: ReadonlyArray<Entry>
}

const Article = ({
  data,
  linkedItemsTitle,
  goBackButtonTitle,
  goBackButtonRoute,
  getItemRouteUrl,
  linkedItems
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
        <div className={css.linkedItemsContainer}>
          <h3>{linkedItemsTitle}</h3>
          <LinkedItems items={linkedItems}  getItemRouteUrl={getItemRouteUrl}/>
        </div>
        <GoBackButton to={goBackButtonRoute} label={goBackButtonTitle} />
      </div>
    </div>
  )
}

export default Article;
