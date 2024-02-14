import type { Metadata } from 'next'
import { getSkills } from '@/api/skill';
import Article from '@/components/pages/Article';
import css from './style.module.scss'
import { getRouteForSkill, Route } from '@/lib/router';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects, getProjectBySlug } from '@/api/projects';

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
  const allSkills = await getSkills()
  const projects = await getAllProjects()

  return <div className={css.skillPageWrapper}>
    <Navbar skills={allSkills} projects={projects}/>
    <Article
      data={project}
      goBackButtonRoute={Route.PROJECTS}
      goBackButtonTitle={'Go back'}
      linkedItemsTitle={'Compétences liées'}
      getRoute={getRouteForSkill}
    />
  </div>
}
