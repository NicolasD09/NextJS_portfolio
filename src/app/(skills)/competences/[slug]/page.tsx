import type { Metadata } from 'next'
import { getSkillBySlug, getSkills } from '@/api/skill';
import Article from '@/components/pages/Article';
import css from './Skill.module.scss'
import { Route } from '@/lib/router';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects } from '@/api/projects';

type Props = { params: { slug: string }}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug

  const skill = await getSkillBySlug(slug);

  return {
    title: `Compétence - ${skill.title}`
  }
}

export default async function Page({ params }: Props) {
  const skill = await getSkillBySlug(params.slug);
  const allSkills = await getSkills()
  const projects = await getAllProjects()

  return <div className={css.skillPageWrapper}>
    <Navbar skills={allSkills} projects={projects}/>
    <Article
      content={skill.content}
      description={skill.description}
      goBackButtonRoute={Route.SKILLS}
      goBackButtonTitle={'Go back'}
      title={skill.title}
      linkedItems={[]}
      linkedItemsTitle={'Projets liés'}
    />
  </div>
}
