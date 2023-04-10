import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (

    <nav className='fixed bottom-2 lg:left-[45%] w-full z-50'>
    
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[90px] max-w-[470px] lg:h-[97vh] lg:max-w-[90px] backdrop-blur-2xl rounded-full mx-auto px-5 flex lg:flex-col justify-between items-center text-2xl text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            title='Home'
            className='cursor-pointer lg:mt-2 w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>

          <Link 
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            title='About'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
          </Link>

          <Link 
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            title='Works'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase /> 
          </Link>

          <Link 
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            title='Contact'
            className=' lg:mb-2 cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
