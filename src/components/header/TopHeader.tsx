import React from 'react';
import logo from '../../assets/images/logo.png'
import icons from '../../utils/icons';
import { Button } from '../../components'
const { IoSearch, GoHeartFill, FaDolly } = icons
const TopHeader = () => {
  return (
    <div className="w-full flex justify-between items-center border border-red-400 px-3">
      <div className='flex items-center gap-6'>
        <img src={logo} alt="logo" className='w-[158px] h-[63px] object-contain' />

        {/* search box */}
        <div className='w-[450px] border-2 border-primary rounded-md bg-white relative'>
          <input type="text" placeholder='Enter search keywords' className='rounded-md border-none outline-none px-3 py-[6px] placeholder:text-[13px]' />
          <div className='bg-primary absolute top-[-8px] right-[-8px] h-[50px] w-[50px] rounded-full flex items-center justify-center cursor-pointer'>
            <IoSearch color='white' size={20} />
          </div>
        </div>

      </div>
      <div className='flex items-center gap-6'>
        <div className='relative'>
          <Button>LOGIN</Button>
          <div className='absolute right-[-13px] top-[6px] w-[2px] h-[14px] bg-red-400'></div>
        </div>
        <div className='relative'>
          <Button>SIGNUP</Button>
          <div className='absolute right-[-14px] top-[6px] w-[2px] h-[14px] bg-red-400'></div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='cursor-pointer'><GoHeartFill color='#498374' size={20}/></span>
          <span className='cursor-pointer'><FaDolly color='#498374' /></span>
        </div>

      </div>
    </div>
  )
}

export default TopHeader