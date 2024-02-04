import { getSkillForSlugURL, requestOptions, SKILLS_URL } from '@/lib/contentful';
import { ISkill } from '../../contentfulTypes';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getLinkedDataForResponse } from '@/types/api';

export const getSkillBySlug = async (slug: string) => {
  const response = await fetch(
    getSkillForSlugURL(slug),
    { ...requestOptions }).then(resp => resp.json())

  const { assets, entries } = getLinkedDataForResponse(response)

  return {
    data: response.items[0].fields as unknown as ISkill,
    assets,
    entries
  };
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
    SKILLS_URL,
    { ...requestOptions }).then(resp => resp.json())

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
