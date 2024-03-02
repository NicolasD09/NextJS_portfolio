import React from 'react'
import { Skill } from '../../../contentfulTypes';
import Link from 'next/link';
import { Entry } from 'contentful';
import { getRouteFn } from '@/types';
import css from './LinkedItems.module.scss'
import UnderlineLink from '@/components/Link/UnderlineLink';

type Props = {
  items: ReadonlyArray<Entry>;
  getItemRouteUrl: getRouteFn;
}
const LinkedItems = ({ items, getItemRouteUrl }: Props) => {
  if(items.length === 0) {
    return <span>Aucun contenu lié</span>;
  }

  return (
    <div className={css.itemsContainer}>
      {
        items
          .map((item, index) => {
            // @ts-ignore
            const displayableItem = item.fields as unknown as Skill
            return (
              <React.Fragment key={index}>
                <Link
                  key={displayableItem.title}
                  href={getItemRouteUrl(displayableItem)}
                >
                  <UnderlineLink>
                    {displayableItem.title}
                  </UnderlineLink>
                </Link>
                {
                  index !== items.length - 1 &&
                  <span>&middot;</span>
                }
              </React.Fragment>
            )
          })
      }
    </div>
  )
}

export default LinkedItems
