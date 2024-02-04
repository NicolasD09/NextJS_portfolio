import { getSkillForSlugURL, requestOptions, SKILLS_URL } from '@/lib/contentful';
import { Skill } from '../../contentfulTypes';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { getLinkedDataForResponse, mapSkill } from '@/utils/apiResponse';

export const getSkillBySlug = async (slug: string) => {
  const response = await fetch(
    getSkillForSlugURL(slug),
    requestOptions)
    .then(resp => resp.json())

  console.log(response)

  const { assets, entries } = getLinkedDataForResponse(response)

  return {
    data: mapSkill(response.items[0]),
    assets,
    entries
  };
};

export type SkillsByType =  {
  technicalSkills: Skill[],
  humanSkills: Skill[]
}

export type AllSkills = {
  skills: Skill[];
  skillsByType: SkillsByType;
}
export const getSkills = async (): Promise<AllSkills> => {

  const response = await fetch(
    SKILLS_URL,
    requestOptions)
    .then(resp => resp.json())

  const skills = response.items.map(mapSkill);

  return {
    skills: skills,
    skillsByType: {
      technicalSkills: getSortedSkillsForType(skills, 'Technique'),
      humanSkills: getSortedSkillsForType(skills, 'Humaine')
    }
  };
}

function getSortedSkillsForType(skills: Skill[], projectType: string) {
  return skills
    .filter(skill => skill.projectType === projectType)
    .sort((a, b) => a.title.localeCompare(b.title))
}
