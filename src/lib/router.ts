import { PartialSkill } from '@/api/skill';
import { ProjectWithSkills } from '@/api/projects';

enum Route {
  ABOUT_PAGE = '/a-propos',
  SKILLS = '/competences',
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
