import PageWrapper from '@/components/Page/Page';
import ArticleHeader from '@/components/pages/Article/ArticleHeader';
import { ReactNode } from 'react';
import Linkedin from '@/components/Icons/Linkedin';
import Github from '@/components/Icons/Github';

export default async function Page() {

  return (
    <PageWrapper>
      <ArticleHeader title={'Contact'} content={''}/>
      <div className={'flex gap-12 mx-auto w-fit my-[5%] flex-wrap items-center justify-center'}>
        <Card title={'Linkedin'} icon={<Linkedin/>} subtitle={'/in/nicolasd09'}
          link={'https://www.linkedin.com/in/nicolasd09/'}/>
        <Card title={'Github'} icon={<Github/>} subtitle={'/NicolasD09'} link={'https://github.com/NicolasD09'}/>
      </div>
    </PageWrapper>
  )
}

type Props = {
  title: string;
  icon: ReactNode;
  subtitle: string;
  link: string;
}
const Card = ({ title, subtitle, link, icon }: Props) => {
  return (
    <a href={link} target={'_blank'}>
      <div className={'p-12 bg-white border border-gray-300 rounded-md shadow-lg hover:scale-105 transition duration-300 ease-in-out'}>
        <div className={'flex gap-4'}>
          {icon}
          <div className={'flex flex-col gap-2 justify-center'}>
            <h3 className={'text-xl font-semibold'}>{title}</h3>
            <span>{subtitle}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
