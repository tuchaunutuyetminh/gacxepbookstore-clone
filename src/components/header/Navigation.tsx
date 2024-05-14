import React from 'react'
import { Button } from '../../components'
import icons from '../../utils/icons'
import { navigation } from '../../utils/constant'
import { NavLink } from 'react-router-dom'

const { LuMenu, FaPhone  } = icons
const activeStyles = 'uppercase text-[13px] text-primary font-semibold'
const notActiveStyle = 'uppercase text-[13px] font-semibold hover:text-primary'
const Navigation = () => {
    return (
        <div className='flex items-center gap-6'>
            <Button
                styles='bg-primary text-white font-bold py-2 px-4 rounded-md flex-1'

            >
                <LuMenu />
                ALL CATEGORIES
            </Button>
            <div className='flex-auto'>
                {navigation.map((item, index) => (
                    <span className='relative p-2 navItem' key={index} >
                        <NavLink to={`${item.path}`}  className={({ isActive }) => isActive ? activeStyles : notActiveStyle}>{item.title}</NavLink>
                        <span className='absolute left-[34%] bottom-0 w-[34%] h-[2px] bg-primary hidden navItemChild'></span>
                    </span>
                ))}
            </div>
            <span className='text-primary text-[25px] font-semibold flex items-center gap-2'>
                <FaPhone color='#498374'/>
                0392115222
            </span>
        </div>
    )
}

export default Navigation