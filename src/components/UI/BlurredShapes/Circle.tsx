'use client'
import css from './style.module.scss';
import cn from 'classnames';

type CircleProps = {
  size: number;
  color: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const formatPosition = (position: number) => {
  return `${position}px`
}

const getPosition = (position: number | undefined) => {
  return (position !== undefined) ? formatPosition(position) : 'unset'
}

const Circle = ({
  size,
  color,
  ...props
}: CircleProps) => {

  console.log({
    top: getPosition(props.top),
    bottom: getPosition(props.bottom),
    left: getPosition(props.left),
    right: getPosition(props.right),
  })

  return (
    <svg
      style={{
        top: getPosition(props.top),
        bottom: getPosition(props.bottom),
        left: getPosition(props.left),
        right: getPosition(props.right),
      }}
      className={cn(css.shape, css.circle)}
      width="595"
      height="595"
      // viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1508_127)">
        <rect x="207.14" y="141" width={size} height={size} rx="127.772"
          fill={color} fillOpacity="0.8"/>
      </g>
      <defs>
        <filter id="filter0_f_1508_127" x="0.68457" y="0.684326" width="593.606" height="593.607"
          filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_1508_127"/>
        </filter>
      </defs>
    </svg>
  )

}

export default Circle;
