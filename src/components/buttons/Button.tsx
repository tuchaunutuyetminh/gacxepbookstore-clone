import React from 'react'

interface Props {
  styles?: string,
  children: React.ReactNode,
  handleOnclick?: () => any
}
const Button: React.FC<Props> = ({ styles, children, handleOnclick }) => {
  return (
    <button className={` flex items-center gap-1 ${styles && styles}`}>
      {children}
    </button>
  )
}

export default Button