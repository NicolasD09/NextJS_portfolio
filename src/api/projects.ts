import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getProjectForSlugURL, PROJECTS_URL, requestOptions } from '@/lib/contentful';
import { IProject } from '../../contentfulTypes';
import {
  getLinkedDataForResponse,
  getSkillsMapForResponse,
  mapProject,
  mapProjectSkills
} from '@/types/api';
import { MapSkillsFn, Skill } from '@/utils/apiResponse';

export type ProjectWithSkills = IProject & { skills: Skill[] }
export const getProjectBySlug = async (slug: string) => {
  const response = await fetch(
    getProjectForSlugURL(slug),
    { ...requestOptions }).then(resp => resp.json())

  const skillsMapForResponse = getSkillsMapForResponse(response);
  const mapSkills: MapSkillsFn = mapProjectSkills(skillsMapForResponse);
  const mapSingleProject = mapProject(mapSkills)

  const { assets, entries } = getLinkedDataForResponse(response)
  const project = mapSingleProject(response.items[0]) as ProjectWithSkills

  return {
    data: project,
    assets,
    entries
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
