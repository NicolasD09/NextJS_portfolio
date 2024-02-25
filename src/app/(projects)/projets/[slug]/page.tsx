import type { Metadata } from 'next'
import Article from '@/components/pages/Article';
import { getRouteForSkill, Route } from '@/lib/router';
import { getProjectBySlug } from '@/api/projects';
import PageWrapper from '@/components/Page/Page';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const { data } = await getProjectBySlug(slug);

  return {
    title: `Projet - ${data.title}`
  }
}

export default async function Page({ params }: Props) {
  const { data: project } = await getProjectBySlug(params.slug);

  return <PageWrapper>
    <Article
      data={project}
      goBackButtonRoute={Route.PROJECTS}
      goBackButtonTitle={'Retour aux projets'}
      linkedItemsTitle={'Compétences liées'}
      getItemRouteUrl={getRouteForSkill}
      linkedItems={project.relatedSkills ?? []}
    />
  </PageWrapper>
}
