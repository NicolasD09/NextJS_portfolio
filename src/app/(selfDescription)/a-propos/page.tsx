import { getSelfDescription } from '@/api/selfDescription';
import { Metadata } from 'next';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import ArticleContainer from '@/components/pages/Article/ArticleContainer';
import ArticleHeader from '@/components/pages/Article/ArticleHeader';
import BannerImage from '@/components/BannerImage/BannerImage';
import ArticleContentContainer from '@/components/pages/Article/ArticleContentContainer';
import ArticleContent from '@/components/pages/Article/ArticleContent';
import Page from '@/components/Page/Page';

export const metadata: Metadata = {
  title: 'A propos',
}
const AboutPage = async() => {
  const selfDescription = await getSelfDescription();

  return (
    <Page>
      <ArticleContainer>
        <ArticleHeader title={'Qui suis-je'} content={renderElement(selfDescription.excerpt)}/>
        <BannerImage/>
        <ArticleContentContainer>
          <ArticleContent>
            {renderElement(selfDescription.content)}
          </ArticleContent>
        </ArticleContentContainer>
      </ArticleContainer>
    </Page>
  )
}

export default AboutPage;
