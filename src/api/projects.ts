import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getProjectForSlugURL, PROJECTS_URL, requestOptions } from '@/lib/contentful';
import { Project } from '../../contentfulTypes';
import {
  getSkillsMapForResponse,
  mapProject,
  mapProjectSkills
} from '@/utils/apiResponse';
import { MapSkillsFn, ContentfulEntryLink } from '@/types/api';
import resolveResponse from 'contentful-resolve-response';

export type ProjectWithSkills = Project & { skills: ContentfulEntryLink[] }

// @ts-ignore
export const getProjectBySlug = async (slug: string): Promise<{data: Project}> => {
  const response = await fetch(
    getProjectForSlugURL(slug),
    { ...requestOptions }).then(resp => resp.json())

  // @ts-ignore
  const project: Project = resolveResponse(response)[0].fields as Project

  return {
    data: project
  }

};

export const getAllProjects = async (): Promise<ProjectWithSkills[]> => {
  const response = await fetch(PROJECTS_URL, requestOptions)
    .then(r => r.json());

  const skillsMapForResponse = getSkillsMapForResponse(response);
  const mapSkills: MapSkillsFn = mapProjectSkills(skillsMapForResponse);
  const mapProjectForItem = mapProject(mapSkills)

  return response.items.map(mapProjectForItem) as ProjectWithSkills[]
}
