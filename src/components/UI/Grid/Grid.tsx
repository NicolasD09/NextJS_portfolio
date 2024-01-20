import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames'
import {
  gridColEndDef,
  gridColsDef,
  lgGridColSpanDef,
  mdColEndDef,
  mdGridColSpanDef,
  smGridColSpanDef,
  lgColEndDef,
  mdColStartDef,
  lgColStartDef,
  smGridColStartDef
} from './config';

type ColumnDefinition = 1|2|3|4|5|6|7|8|9|10|11|12;

type GridProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  item?: boolean;
  cols?: ColumnDefinition,
  gap?: number,
  colSpan?: ColumnDefinition,
  mdColSpan?: ColumnDefinition,
  lgColSpan?: ColumnDefinition,
  colStart?: ColumnDefinition,
  colEnd ?: ColumnDefinition,
  mdColEnd ?: ColumnDefinition,
  lgColEnd ?: ColumnDefinition,
  mdColStart ?: ColumnDefinition,
  lgColStart ?: ColumnDefinition,
}

/**
 * grid element
 *
 * The colspan is by default 'sm:col-span-{colSpan}'
*/
const Grid = (
  { item = false,
    cols = 12,
    children,
    colSpan,
    colStart,
    mdColSpan,
    lgColSpan,
    colEnd,
    mdColEnd,
    lgColEnd,
    mdColStart,
    lgColStart,
    className,
    ...otherProps }: GridProps
) => {

  const gridContainerClassnames = cn(
    {
      'grid': !item,
      [gridColsDef[cols]]: !item
    }
  )

  const gridItemClassnames = cn(
    {
      [smGridColSpanDef[colSpan!]]: item && colSpan,
      [mdGridColSpanDef[mdColSpan!]]: item && mdColSpan,
      [lgGridColSpanDef[lgColSpan!]]: item && lgColSpan,
      [smGridColStartDef[colStart!]]: item && colStart,
      [gridColEndDef[colEnd!]]: item && colEnd,
      [mdColEndDef[mdColEnd!]]: item && mdColEnd,
      [lgColEndDef[lgColEnd!]]: item && lgColEnd,
      [mdColStartDef[mdColStart!]]: item && mdColStart,
      [lgColStartDef[lgColStart!]]: item && lgColStart,
    }
  )

  const usedClassName = cn(gridContainerClassnames, gridItemClassnames, className);

  return (
    <div className={usedClassName} {...otherProps}>
      {children}
    </div>
  )
}

export default Grid;
