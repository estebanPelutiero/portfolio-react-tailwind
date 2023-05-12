import React from 'react';

import { Link } from 'react-scroll';

// images
import Image from "../assets/sese2.png";

// icons 
import { FaGithub, FaLinkedin } from "react-icons/fa";

// type animation
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    
    <section className='min-h-[100vh] flex items-center' id='home'> 
      <div className='container mx-auto'>

        <div className='relative flex flex-col items-center gap-y-8 lg:flex-row lg:items-center'>

          {/* Name */}
          <div className='flex-1 text-center font-secondary lg:text-left mt-5'>
            <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='text-[60px] font-semibold leading-[1] lg:text-[90px] mb-7 lg:mb-3'>  
              <span className='text-accent'>Esteban</span> <br /><span>Pelutiero</span>
            </motion.h1>

            {/* animated text, description*/}

            <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-2'>Soy</span>
              <TypeAnimation sequence={[
                "Desarrolador",
                2000,
                "Diseñador",
                2000,
                "Freelancer",
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>

            {/* A little description about me */}
            <motion.p 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='mb-10 max-w-lg mx-auto lg:mx-0 w-8/12 text-xl'>
              Desarrollador Frontend autodidacta <br /> de Buenos Aires, Argentina
            </motion.p>

            {/* button to contact */}
            <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-10 mx-auto lg:mx-0'>
              <Link to='contact' smooth={true} spy={true} title='Contacto'>
                <button className='btn btn-lg'>Contacto</button>
              </Link >

              {/* links to github and linkedin */}
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
                <a href="https://github.com/estebanPelutiero" target='_blank' rel="noopener noreferrer" title='Github'>
                  <FaGithub className='w-[35px] h-[35px]'/>
                </a>
                <a href="https://linkedin.com/in/estebanpelutiero" target='_blank' rel="noopener noreferrer" title='Linkedin'>
                  <FaLinkedin className='w-[35px] h-[35px]'/>
                </a>
              </div>
            </motion.div>

          </div>

          {/* picture of my face */}

          <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className='hidden lg:flex w-[500px] justify-center items-center mr-8'>

           
            <img src={Image} className='absolute w-[500px] mb-20' alt="Profile" />
            
          </motion.div>

        </div>
      </div>
    </section>

  )
};

export default Banner;
