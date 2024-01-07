import { PartialSkill } from '@/api/skill';
import * as Dd from '@radix-ui/react-dropdown-menu'
import css from './SkillsMenuList.module.scss'
import Link from 'next/link';
import Routes from '@/lib/router';

type SkillsMenuListProps = {
  skills: PartialSkill[],
  title: string
}

const SkillsMenuList = ({ skills, title }: SkillsMenuListProps) => {
  return (
    <div>
      <Dd.Label className={css.menuListTitle}>{title}</Dd.Label>
      <Dd.Group className={css.menuListGroup}>
        {
          skills.map(skill => (
            <Link
              key={'link_key_'+skill.slug}
              href={`${Routes.SKILLS}/${skill.slug}`}
            >
              <Dd.Item
                key={'link_item_key_'+skill.slug}
                className={css.menuListItem}>
                {skill.title.toUpperCase()}
              </Dd.Item>
            </Link>
          ))
        }
      </Dd.Group>
    </div>
  )
}

export default SkillsMenuList;
