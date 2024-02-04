'use client'

import * as Dd from '@radix-ui/react-dropdown-menu'
import css from './MenuList.module.scss'
import Link from 'next/link';
import { GetRouteFn, Item } from '@/components/types';
import cn from 'classnames';

type SkillsMenuListProps = {
  items: Item[],
  title?: string,
  getRoute: GetRouteFn;
}

const MenuList = ({ items, title, getRoute }: SkillsMenuListProps) => {
  return (
    <div>
      {
        title &&
      <Dd.Label className={css.menuListTitle}>{title}</Dd.Label>
      }
      <Dd.Group className={cn(css.menuListGroup, {
        [css.hasTitle]: !!title
      })}>
        {
          items.map(item => (
            <Link
              key={'link_key_' + item.slug}
              href={getRoute(item)}
            >
              <Dd.Item
                key={'link_item_key_' + item.slug}
                className={css.menuListItem}>
                {item.title.toUpperCase()}
              </Dd.Item>
            </Link>
          ))
        }
      </Dd.Group>
    </div>
  )
}

export default MenuList;
