import { Asset, Entry, EntrySkeletonType } from 'contentful';
import { IProject } from '../../contentfulTypes';
import { ProjectWithSkills } from '@/api/projects';
import { MapSkillsFn, Skill } from '@/utils/apiResponse';

export const getEntryContent = (response: any): Entry[] => response.includes['Entry'];
export const getAssetContent = (response: any): Asset[] => response.includes['Asset'];

export const getSkillsMapForEntries = (entries: Entry[]): Map<string, Entry> => {
  const entriesMap = new Map<string, Entry>();
  entries.forEach(entry => entriesMap.set(entry.sys.id, entry))
  return entriesMap;
}

export const getAssetsMapForEntries = (entries: Asset[]): Map<string, Asset> => {
  const entriesMap = new Map<string, Asset>();
  entries.forEach(entry => entriesMap.set(entry.sys.id, entry))
  return entriesMap;
}

export const getAssetsMapForResponse = (response: object): Map<string, Asset> => {
  return getAssetsMapForEntries(
    getAssetContent(response)
  )
}

export const getSkillsMapForResponse = (response: object): Map<string, Entry> => {
  return getSkillsMapForEntries(
    getEntryContent(response)
  )
}

export const mapProjectSkills = (map: Map<string, Entry>) => (skill: Entry) => {
  const relatedSkill = map.get(skill.sys.id)!
  return ({
    slug: relatedSkill.fields.slug,
    title: relatedSkill.fields.title
  } as Skill)
}

export const mapProject = (mapSkills: MapSkillsFn) => (project: EntrySkeletonType) => {
  const fields = project.fields as IProject;
  const skills: Skill[] = fields.relatedSkills!.map(mapSkills);

  return {
    ...fields,
    skills
  } as ProjectWithSkills
}

export const getLinkedDataForResponse = (response: object) => {
  return {
    assets: getAssetsMapForResponse(response),
    entries: getEntryContent(response)
  }
}
