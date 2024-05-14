import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'


const Public = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Header />
        <div className='w-full'>
            <Outlet />
        </div>
    </div>
  )
}

export default Public