import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getProjectForSlugURL, PROJECTS_URL, requestOptions } from '@/lib/contentful';
import { IProject } from '../../contentfulTypes';

type Skill = {
  title: string;
  slug: string;
}

export type ProjectWithSkills = IProject & { skills: Skill[] }
export const getProjectBySlug = async (slug: string) => {
  const response = await fetch(
    getProjectForSlugURL(slug),
    { ...requestOptions }).then(resp => resp.json())

  return response.items[0].fields as IProject;
};

export const getAllProjects = async (): Promise<ProjectWithSkills[]> => {
  const response = await fetch(PROJECTS_URL, requestOptions)
    .then(r => r.json())

  const entry = response.includes['Entry'];
  const projects = response.items.map((i: any) => {
    const fields = i.fields as IProject;
    const skills = i.fields.relatedSkills
      .map((skill: any) => {
        const relatedSkill = entry.find((e: any) => e.sys.id === skill.sys.id)
        if(relatedSkill) {
          return ({
            slug: relatedSkill.fields.slug,
            title: relatedSkill.fields.title
          } as Skill)
        }
      })

    return {
      ...fields,
      skills
    } as ProjectWithSkills
  }) as ProjectWithSkills[]

  return projects;
}
