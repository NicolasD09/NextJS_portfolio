import { getRouteFn } from '@/types';

// eslint-disable-next-line no-unused-vars
enum Route {
  // eslint-disable-next-line no-unused-vars
  ABOUT_PAGE = '/a-propos',
  // eslint-disable-next-line no-unused-vars
  SKILLS = '/competences',
  // eslint-disable-next-line no-unused-vars
  PROJECTS = '/projets',
  EXPERIENCES = '/mon-parcours'
}

const getRouteForSkill: getRouteFn = (skill: {slug: string}) => {
  return `${Route.SKILLS}/${skill.slug}`
}

const getRouteForProject: getRouteFn = (project: {slug: string}) => {
  return `${Route.PROJECTS}/${project.slug}`
}

const getRouteForExperience: getRouteFn = (project: {slug: string}) => {
  return `${Route.EXPERIENCES}/${project.slug}`
}

export {
  Route,
  getRouteForSkill,
  getRouteForProject,
  getRouteForExperience
};
