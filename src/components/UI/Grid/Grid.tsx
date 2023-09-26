import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames'
import { gridColEnd, gridCols, gridColSpan, gridColStart } from './config';

type ColumnDefinition = 1|2|3|4|5|6|7|8|9|10|11|12;

type GridProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  item?: boolean;
  cols?: ColumnDefinition,
  gap?: number,
  colSpan?: ColumnDefinition,
  colStart?: ColumnDefinition,
  colEnd ?: ColumnDefinition,
}
export const Grid = (
  { item = false,
    cols = 12,
    children,
    colSpan,
    colStart,
    colEnd,
    className,
    ...otherProps }: GridProps
) => {

  const gridContainerClassnames = cn(
    {
      'grid': !item,
      [gridCols[cols]]: !item
    }
  )

  const gridItemClassnames = cn(
    {
      [gridColSpan[colSpan!]]: item && colSpan,
      [gridColStart[colStart!]]: item && colStart,
      [gridColEnd[colEnd!]]: item && colEnd,
    }
  )

  const usedClassName = cn(gridContainerClassnames, gridItemClassnames, className);

  return (
    <div className={usedClassName} {...otherProps}>
      {children}
    </div>
  )
}
