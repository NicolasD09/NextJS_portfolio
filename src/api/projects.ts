import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getProjectForSlugURL, PROJECTS_URL, requestOptions } from '@/lib/contentful';
import { IProject } from '../../contentfulTypes';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

type Skill = {
  title: string;
  slug: string;
}

// eslint-disable-next-line no-unused-vars
type MapSkillsFn = (skill: Entry) => Skill

export type ProjectWithSkills = IProject & { skills: Skill[] }
export const getProjectBySlug = async (slug: string) => {
  const response = await fetch(
    getProjectForSlugURL(slug),
    { ...requestOptions }).then(resp => resp.json())

  const skillsMapForResponse = getSkillsMapForResponse(response);
  const mapSkills: MapSkillsFn = mapProjectSkills(skillsMapForResponse);
  const mapProjectForItem = mapProject(mapSkills)

  const assets: Map<string, Asset> = getAssetsMapForResponse(response);
  const entries: Entry[] = getEntryContent(response);
  const project = mapProjectForItem(response.items[0]) as ProjectWithSkills

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

const getEntryContent = (response: any): Entry[] => response.includes['Entry'];
const getAssetContent = (response: any): Asset[] => response.includes['Asset'];

const getSkillsMapForEntries = (entries: Entry[]): Map<string, Entry> => {
  const entriesMap = new Map<string, Entry>();
  entries.forEach(entry => entriesMap.set(entry.sys.id, entry))
  return entriesMap;
}

const getAssetsMapForEntries = (entries: Asset[]): Map<string, Asset> => {
  const entriesMap = new Map<string, Asset>();
  entries.forEach(entry => entriesMap.set(entry.sys.id, entry))
  return entriesMap;
}

const getAssetsMapForResponse = (response: object): Map<string, Asset> => {
  return getAssetsMapForEntries(
    getAssetContent(response)
  )
}

const getSkillsMapForResponse = (response: object): Map<string, Entry> => {
  return getSkillsMapForEntries(
    getEntryContent(response)
  )
}

const mapProjectSkills = (map: Map<string, Entry>) => (skill: Entry) => {
  const relatedSkill = map.get(skill.sys.id)!
  return ({
    slug: relatedSkill.fields.slug,
    title: relatedSkill.fields.title
  } as Skill)
}

const mapProject = (mapSkills: MapSkillsFn) => (project: EntrySkeletonType) => {
  const fields = project.fields as IProject;
  const skills: Skill[] = fields.relatedSkills!.map(mapSkills);

  return {
    ...fields,
    skills
  } as ProjectWithSkills
}
