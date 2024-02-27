import css from './Experience.module.scss'
import { Experience } from '../../../contentfulTypes';
import useRenderDocument from '@/components/pages/Article/hooks/useRenderDocument';
import SeeMoreButton from '@/components/UI/Button/SeeMoreButton';
import { getRouteForExperience } from '@/lib/router';

const Experience = ({ experience: xp }: { experience: Experience }) => {
  const { renderElement } = useRenderDocument()
  return (
    <div className={css.experienceContainer}>
      <div className={css.experienceHeader}>
        <span className={css.experienceHeaderType}>{xp.experienceType}</span>
        <span className={css.experienceHeaderTitle}>{xp.title}</span>
        <span className={css.experienceHeaderCompany}>{xp.company}</span>
        <span className={css.experienceHeaderTimePeriod}>{xp.timePeriod}</span>
      </div>
      <div>{renderElement(xp.excerpt)}</div>
      <SeeMoreButton to={getRouteForExperience(xp)} />
    </div>
  )
}

export default Experience;
