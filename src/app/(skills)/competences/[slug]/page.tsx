import type { Metadata } from 'next'
import { getSkill } from '@/api/skill';
import Article from '@/components/pages/Article';
import css from './Skill.module.scss'
import Routes from '@/lib/router';
import Navbar from '@/components/Navbar';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const skill = await getSkill(slug);

  return {
    title: `Compétence - ${skill.title}`
  }
}

export default async function Page({ params }: Props) {
  const skill = await getSkill(params.slug);

  return <div className={css.skillPageWrapper}>
    <Navbar />
    <Article
      content={skill.content}
      description={skill.description}
      goBackButtonRoute={Routes.SKILLS}
      goBackButtonTitle={'Go back'}
      title={skill.title}
      linkedItems={[]}
      linkedItemsTitle={'Projets liés'}
    />
  </div>
}
