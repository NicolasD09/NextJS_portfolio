import { getSelfDescription } from '@/api/selfDescription';
import { Metadata } from 'next';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';

export const metadata: Metadata = {
  title: 'A propos',
}
const AboutPage = async() => {
  const selfDescription = await getSelfDescription()

  return (
    <>
      <div>
        <p>{selfDescription.title}</p>
        <div className={'flex flex-col gap-4'}>
          <p>{selfDescription.subtitle}</p>
          <>{renderElement(selfDescription.excerpt)}</>
          <>{renderElement(selfDescription.content)}</>
        </div>
      </div>
    </>
  )
}

export default AboutPage;
