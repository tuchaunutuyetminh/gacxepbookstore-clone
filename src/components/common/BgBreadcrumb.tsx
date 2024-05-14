import React from 'react'

interface Props {
  title: string
}
const BgBreadcrumb: React.FC<Props> = ({title}) => {
  return (
    <div className=' bg-bg-breadcrumb bg-cover w-full bg-no-repeat pt-[60px] pb-[80px] flex justify-center flex-col items-center text-white'>
        <span className=' text-4xl font-semibold text-sha'>{title}</span>
    </div>
  )
}

export default BgBreadcrumb