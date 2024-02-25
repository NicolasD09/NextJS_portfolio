import { Route } from '@/lib/router';
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import { getRouteFn } from '@/types';
import { Project, Skill } from '../../../../contentfulTypes';
import { Entry } from 'contentful';
import LinkedItems from '@/components/LinkedItems/LinkedItems';
import GoBackButton from '@/components/UI/Button/GoBackButton';
import BannerImage from '@/components/BannerImage/BannerImage';
import ArticleContentContainer from '@/components/pages/Article/ArticleContentContainer';
import ArticleContent from '@/components/pages/Article/ArticleContent';
import LinkedItemsContainer from '@/components/pages/Article/LinkedItemsContainer';
import ArticleHeader from '@/components/pages/Article/ArticleHeader';
import ArticleContainer from '@/components/pages/Article/ArticleContainer';

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

  const { renderElement } = useRenderDocument()
  return (
    <ArticleContainer>
      <ArticleHeader title={data.title} content={renderElement(data.description)} />
      <BannerImage/>
      <ArticleContentContainer>
        <ArticleContent>{renderElement(data.content)}</ArticleContent>
        <LinkedItemsContainer title={linkedItemsTitle}>
          <LinkedItems items={linkedItems} getItemRouteUrl={getItemRouteUrl}/>
        </LinkedItemsContainer>
        <GoBackButton to={goBackButtonRoute} label={goBackButtonTitle} />
      </ArticleContentContainer>
    </ArticleContainer>
  )
}

export default Article;
