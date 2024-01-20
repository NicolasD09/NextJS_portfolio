import type { Metadata } from 'next'
import { getSkills } from '@/api/skill';
import Article from '@/components/pages/Article';
import css from './style.module.scss'
import { Route } from '@/lib/router';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects, getProjectBySlug } from '@/api/projects';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const skill = await getProjectBySlug(slug);

  return {
    title: `Projet - ${skill.title}`
  }
}

export default async function Page({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  const allSkills = await getSkills()
  const projects = await getAllProjects()

  return <div className={css.skillPageWrapper}>
    <Navbar skills={allSkills} projects={projects} />
    <Article
      content={project.content}
      description={project.description}
      goBackButtonRoute={Route.PROJECTS}
      goBackButtonTitle={'Go back'}
      title={project.title}
      linkedItems={[]}
      linkedItemsTitle={'Projets liés'}
    />
  </div>
}
