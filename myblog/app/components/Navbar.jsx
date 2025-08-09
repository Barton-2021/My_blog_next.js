import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50'>
        <a href="">
            <Image src={assets.mylogo} className='w-2 alt="logo"
            cursor-pointer mr-14'/>

        </a>

        <ul>
            <li><a href="#top">首页</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#services">我的业务</a></li>
            <li><a href="#work">作品集</a></li>
            <li><a href="#contact">联系我</a></li>

        </ul>

        <div>
            <a href="#contact">Contact <Image src={assets.
                arrow_icon} alt="" className='w-3'/></a>
        </div>

      </nav>
    </>
  )
}

export default Navbar
