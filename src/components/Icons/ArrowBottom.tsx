import { SVGProps } from 'react';

const ArrowBottom = (props: SVGProps<any>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 40" fill="none">
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C9.55228 0 10 0.453974 10 1.01397L10 36.5381L16.2928 30.1573C16.6834 29.7613 17.3166 29.7613 17.7072 30.1573C18.0976 30.5533 18.0976 31.1953 17.7072 31.5913L9.7071 39.7031C9.51958 39.8931 9.26522 40 9 40C8.73478 40 8.48042 39.8931 8.2929 39.7031L0.292905 31.5913C-0.097635 31.1953 -0.097635 30.5533 0.292905 30.1573C0.683425 29.7613 1.31658 29.7613 1.7071 30.1573L8 36.5381L8 1.01397C8 0.453974 8.44772 0 9 0Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default ArrowBottom;
