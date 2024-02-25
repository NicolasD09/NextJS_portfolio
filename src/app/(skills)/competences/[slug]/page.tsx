import type { Metadata } from 'next'
import { getSkillBySlug } from '@/api/skill';
import Article from '@/components/pages/Article';
import { getRouteForProject, Route } from '@/lib/router';
import PageWrapper from '@/components/Page/Page';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const { data: skill } = await getSkillBySlug(slug);

  return {
    title: `Compétence - ${skill.title}`
  }
}

export default async function Page({ params }: Props) {
  const { data: skill } = await getSkillBySlug(params.slug);

  return <PageWrapper>
    <Article
      data={skill}
      goBackButtonRoute={Route.SKILLS}
      goBackButtonTitle={'Retour aux compétences'}
      linkedItemsTitle={'Projets liés'}
      getItemRouteUrl={getRouteForProject}
      linkedItems={skill.relatedProjects ?? []}
    />
  </PageWrapper>
}
