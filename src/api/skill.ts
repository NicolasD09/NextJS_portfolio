import { client } from '@/lib/contentful';
import { EntryCollection, EntrySkeletonType } from 'contentful';
import { ISkill } from '../../contentfulTypes';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 'no-cache')
}
export const getSkillBySlug = async (slug: string) => {

  const response = await client.getEntries({
    content_type: 'skill',
    'fields.slug[match]': slug,
  });

  return response.items[0].fields as unknown as ISkill;
};

export type PartialSkill = Pick<ISkill, 'title' | 'projectType' | 'slug'>;

export type SkillsByType =  {
  technicalSkills: PartialSkill[],
  humanSkills: PartialSkill[]
}
export const getSkills = async () => {
  const response: EntryCollection<EntrySkeletonType<ISkill>> = await client.getEntries({
    content_type: 'skill',
    select: ['fields.title', 'fields.projectType', 'fields.slug']
  });

  const skills = response.items.map(item => item.fields as PartialSkill);

  return {
    skills: skills,
    skillsByType: {
      technicalSkills: getSortedSkillsForType(skills, 'Technique'),
      humanSkills: getSortedSkillsForType(skills, 'Humaine')
    }
  };
}

function getSortedSkillsForType(skills: PartialSkill[], projectType: string) {
  return skills
    .filter(skill => skill.projectType === projectType)
    .sort((a, b) => a.title.localeCompare(b.title))
}
