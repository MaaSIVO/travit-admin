import React, { FC, SVGProps } from 'react'

export interface TestCircleProps {}

export const TestCircle: FC<SVGProps<SVGSVGElement>> = ({ fill }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 14.7999C11.7555 14.7999 14.8 11.7554 14.8 7.99988C14.8 4.24434 11.7555 1.19988 8 1.19988C4.24446 1.19988 1.2 4.24434 1.2 7.99988C1.2 11.7554 4.24446 14.7999 8 14.7999ZM8 15.9999C12.4183 15.9999 16 12.4182 16 7.99988C16 3.5816 12.4183 -0.00012207 8 -0.00012207C3.58172 -0.00012207 0 3.5816 0 7.99988C0 12.4182 3.58172 15.9999 8 15.9999Z"
        fill={fill ?? '#103394'}
      />
    </svg>
  )
}

TestCircle.defaultProps = {}
