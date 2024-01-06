import { client } from '@/lib/contentful';
import { EntryCollection, EntrySkeletonType } from 'contentful';
import { ISkill } from '../../contentfulTypes';
export const getSkill = async (slug: string) => {

  const response = await client.getEntries({
    content_type: 'skill',
    'fields.slug[match]': slug,
  });

  return response.items[0].fields as unknown as ISkill;
};

export type PartialSkill = Pick<ISkill, 'title' | 'projectType' | 'slug'>;
export const getSkills = async () => {
  const response: EntryCollection<EntrySkeletonType<ISkill>> = await client.getEntries({
    content_type: 'skill',
    select: ['fields.title', 'fields.projectType', 'fields.slug']
  });

  return response.items.map(item => item.fields as PartialSkill);
}
