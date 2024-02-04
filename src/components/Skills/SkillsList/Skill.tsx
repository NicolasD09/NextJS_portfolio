import { Skill as ISkill } from '../../../../contentfulTypes';
import css from './style.module.scss'
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import SeeMoreButton from '@/components/UI/Button/SeeMoreButton';
import { getRouteForSkill } from '@/lib/router';

const Skill = ({ skill }: { skill: ISkill }) => {
  const { renderElement } = useRenderDocument();

  return (
    <div className={css.skill}>
      <span className={css.skillTitleContainer}>
        <span className={css.skillTitle}>{skill.title}</span>
        <span className={css.skillTitleSeparator}>&nbsp;/&nbsp;</span>
        <span className={css.skillLevel}>{skill.skillLevel}</span>
      </span>
      <span>{renderElement(skill.excerpt)}</span>
      <SeeMoreButton to={getRouteForSkill(skill)} label={'Voir la compétence'} />
    </div>
  )
}

export default Skill;
