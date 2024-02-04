import { Entry } from 'contentful';

export type PartialSkill = {
  title: string;
  slug: string;
}

// eslint-disable-next-line no-unused-vars
export type MapSkillsFn = (skill: Entry) => PartialSkill

export const SkillLevel = {
  'Beginner' : 'Initié',
  'Intermediate' : 'Intermédiaire',
  'Professional' : 'Professionnel'
}
