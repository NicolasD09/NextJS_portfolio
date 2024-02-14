import { Entry } from 'contentful';

export type ContentfulEntryLink = {
  title: string;
  slug: string;
}

// eslint-disable-next-line no-unused-vars
export type MapSkillsFn = (skill: Entry) => ContentfulEntryLink

export const SkillLevel = {
  'Beginner' : 'Initié',
  'Intermediate' : 'Intermédiaire',
  'Professional' : 'Professionnel'
}
