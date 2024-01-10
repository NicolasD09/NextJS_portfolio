import { PartialSkill } from '@/api/skill';
import { ProjectWithSkills } from '@/api/projects';

// eslint-disable-next-line no-unused-vars
enum Route {
  // eslint-disable-next-line no-unused-vars
  ABOUT_PAGE = '/a-propos',
  // eslint-disable-next-line no-unused-vars
  SKILLS = '/competences',
  // eslint-disable-next-line no-unused-vars
  PROJECTS = '/projets'
}

const getRouteForSkill = (skill: PartialSkill) => {
  return `${Route.SKILLS}/${skill.slug}`
}

const getRouteForProject = (project: ProjectWithSkills) => {
  return `${Route.PROJECTS}/${project.slug}`
}

export {
  Route,
  getRouteForSkill,
  getRouteForProject
};
