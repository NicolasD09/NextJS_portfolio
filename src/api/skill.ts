import { client, getSkillsForSlugURL, getSkillsURL } from '@/lib/contentful';
import { EntryCollection, EntrySkeletonType } from 'contentful';
import { ISkill } from '../../contentfulTypes';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
export const fetchCache = 'force-no-store';
// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';
export const revalidate = 1;
export const getSkillBySlug = async (slug: string) => {
  const response = await fetch(
    getSkillsForSlugURL(slug),
    {
      cache: 'no-cache'
    }).then(resp => resp.json())

  return response.items[0].fields as unknown as ISkill;
};

export type PartialSkill = Pick<ISkill, 'title' | 'projectType' | 'slug'>;

export type SkillsByType =  {
  technicalSkills: PartialSkill[],
  humanSkills: PartialSkill[]
}

export type AllSkills = {
  skills: PartialSkill[];
  skillsByType: SkillsByType;
}
export const getSkills = async (): Promise<AllSkills> => {

  const response = await fetch(
    getSkillsURL(),
    {
      cache: 'no-cache'
    }).then(resp => resp.json())

  const skills = response.items.map((item: any) => item.fields as PartialSkill);

  return {
    skills: skills,
    skillsByType: {
      technicalSkills: getSortedSkillsForType(skills, 'Technique'),
      humanSkills: getSortedSkillsForType(skills, 'Humaine')
    }
  } as AllSkills;
}

function getSortedSkillsForType(skills: PartialSkill[], projectType: string) {
  return skills
    .filter(skill => skill.projectType === projectType)
    .sort((a, b) => a.title.localeCompare(b.title))
}
