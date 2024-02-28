import type { Metadata } from 'next'
import PageWrapper from '@/components/Page/Page';
import { getExperienceBySlug } from '@/api/experiences';
import ArticleContainer from '@/components/pages/Article/ArticleContainer';
import ArticleHeader from '@/components/pages/Article/ArticleHeader';
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import BannerImage from '@/components/BannerImage/BannerImage';
import ArticleContentContainer from '@/components/pages/Article/ArticleContentContainer';
import ArticleContent from '@/components/pages/Article/ArticleContent';
import { Experience } from '../../../../../contentfulTypes';
import css from './style.module.scss'
import GoBackButton from '@/components/UI/Button/GoBackButton';
import { Route } from '@/lib/router';
import ArrowTopRight from '@/components/Icons/ArrowTopRight';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const data = await getExperienceBySlug(slug);

  return {
    title: `Projet - ${data.title}`
  }
}

export default async function Page({ params }: Props) {
  const xp = await getExperienceBySlug(params.slug);
  const { renderElement } = useRenderDocument();
  return <PageWrapper>
    <ArticleContainer>
      <ArticleHeader
        title={`${xp.title} en ${xp.experienceType.toLowerCase()}`}
        content={<Header xp={xp} />}
      />
      <BannerImage />
      <ArticleContentContainer>
        <ArticleContent>
          {renderElement(xp.content)}
        </ArticleContent>
        <GoBackButton to={Route.EXPERIENCES} label={'Retour aux expériences'} />
      </ArticleContentContainer>
    </ArticleContainer>
  </PageWrapper>
}

const Header = ({ xp }: {xp: Experience}) => {
  const { renderElement, renderSimpleAsset } = useRenderDocument()
  return (
    <div className={css.experienceHeader}>
      <div className={css.experienceCompanyContainer}>
        <div className={css.experienceCompanyImage}>
          <a href={xp.companyLink} target={'_blank'}>
            {renderSimpleAsset(xp.companyImage)}
          </a>
          <span className={css.experienceCompanyImageLinkIcon}>
            <ArrowTopRight />
          </span>
        </div>
        <div>
          <p className={css.experienceCompany}>{xp.company}</p>
          <p className={css.experienceTimePeriod}>{xp.timePeriod}</p>
        </div>
      </div>
      {renderElement(xp.description)}
    </div>
  )
}
