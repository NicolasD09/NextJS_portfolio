import { Entry, Asset } from "contentful";
import { BLOCKS, NodeData, TopLevelBlock } from "@contentful/rich-text-types";
export const Experience = 'experience'
export interface Experience {
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
export interface Project {
  //Project
  /* Un article de type projet */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly description: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly projectType: string
  readonly relatedSkills?: ReadonlyArray<Entry<Skill>>
  readonly slug: string
  readonly title: string
}

export const SelfDescription = 'selfDescription'
export interface SelfDescription {
  //Self Description
  /*  */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly slug: string
  readonly subtitle: string
  readonly title: string
}

export const Skill = 'skill'
export interface Skill {
  //Skill
  /* Un article de type compétence */
  readonly content: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly description: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly excerpt: { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }
  readonly projectType: string
  readonly relatedProjects?: ReadonlyArray<Entry<Project>>
  readonly skillLevel: string
  readonly slug: string
  readonly title: string
}

