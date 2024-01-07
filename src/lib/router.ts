import { PartialSkill } from '@/api/skill';

enum Route {
  ABOUT_PAGE = '/a-propos',
  SKILLS = '/competences',
}

const getRouteForSkill = (skill: PartialSkill) => {
  return `${Route.SKILLS}/${skill.slug}`
}

export {
  Route,
  getRouteForSkill
};
