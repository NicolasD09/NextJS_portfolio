import { Entry } from 'contentful';
import { BLOCKS, NodeData, TopLevelBlock } from '@contentful/rich-text-types';
export const Experience = 'experience'
export interface IExperience {
  //Experience
  /*  */
  readonly company?: string
  readonly content?: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly description?: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt?: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly experienceType: string
  readonly slug: string
  readonly timePeriod: string
  readonly title: string
}

export const Project = 'project'
export interface IProject {
  //Project
  /* Un article de type projet */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly description: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly projectType: string
  readonly relatedSkills?: ReadonlyArray<Entry<ISkill>>
  readonly slug: string
  readonly title: string
}

export const SelfDescription = 'selfDescription'
export interface ISelfDescription {
  //Self Description
  /*  */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly slug: string
  readonly subtitle: string
  readonly title: string
}

export const Skill = 'skill'
export interface ISkill {
  //Skill
  /* Un article de type compétence */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly description: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly projectType: string
  readonly relatedProjects?: ReadonlyArray<Entry<IProject>>
  readonly skillLevel: string
  readonly slug: string
  readonly title: string
}

