import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';


const Work = () => {

  return (

    <section className='section' id='work'>

        <div className="container mx-auto">

          <div className='flex flex-col lg:flex-row gap-x-10'>

            {/* left col, title of the section, and box of first work */}

            <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex-1 flex flex-col mb-10 lg:mb-0'>

              {/* Work Text */}
              <div className='mb-5'>

                <h2 className='h2 leading-tight text-accent'>
                  Mis ultimos <br />
                  Trabajos
                </h2>

                <p className='max-w-sm mb-5'>
                  Te dejo una colección de los proyectos que fui armando con el pasar del ultimo año. <br />
                  Los hay desde HTML y CSS puro, hasta React combinado con Tailwind.
                </p>

                <button className='btn btn-sm flex flex-row gap-x-4 items-center'>
                  <span>
                    <a title='Github' target='_blank' rel='noopener noreferrer' href="https://github.com/estebanPelutiero">Ver todos</a>
                  </span>
                  <FaGithub className='h-[32px] w-[32px] '/>
                </button>

              </div>

              {/* Work div box*/}
              <div className='lg:w-[500px] lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>

                {/* overlay */}
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>

                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-700' src={Img1} alt="" />

                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    UX/UI Design
                  </span>
                </div>

                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    Project Title
                  </span>
                </div>

              </div>

            </motion.div>

            {/* right 2 boxes of works */}

            <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='flex-1 flex flex-col justify-center gap-y-8'>

              {/* second work */}

              <div className='lg:w-[500px] lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>

                {/* overlay */}
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>

                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-700' src={Img1} alt="" />

                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    UX/UI Design
                  </span>
                </div>

                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    Project Title
                  </span>
                </div>

              </div>

              {/* third work */}

              <div className='lg:w-[500px] lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>

                {/* overlay */}
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>

                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-700' src={Img1} alt="" />

                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    UX/UI Design
                  </span>
                </div>

                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>
                    Project Title
                  </span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>

    </section>

  )
};

export default Work;
