import { Entry } from 'contentful';

export type Skill = {
  title: string;
  slug: string;
}

// eslint-disable-next-line no-unused-vars
export type MapSkillsFn = (skill: Entry) => Skill

export const SkillLevel = {
  'Beginner' : 'Initié',
  'Intermediate' : 'Intermédiaire',
  'Professional' : 'Professionnel'
}
