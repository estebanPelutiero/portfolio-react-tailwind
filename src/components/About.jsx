import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { DiReact, DiJsBadge, DiGit, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-scroll';

const About = () => {

  return (

    <section className='section' id='about'>
      <div className="container mx-auto">
        
        <div className='flex flex-col justify-center items-baseline gap-y-10 lg:flex-row lg:items-center lg:gap-x-18 lg:gap-y-0 h-screen'>

          {/* img */}
          
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-about bg-no-repeat h-[600px] w-[80%] '>
          </motion.div>

          {/* text */}

          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>

            <h2 className='h2 text-accent'>Sobre mi</h2>
            <h3 className='h3 text-[20px] mb-4'>
              Desarrolador front end autodidacta
            </h3>
            <p className='mb-6 lg:text-start text-center w-[90%] '>
              Me inicié con cursos de <strong>HTML, CSS, Github, Javascript y React.</strong><br />
              Luego seguí por mi cuenta aprovechando todo lo que ofrece internet. <br />
              A su vez, voy creando y buscando proyectos nuevos para practicar y afianzar constantemente lo que voy aprendiendo.  
            </p>

            {/* technologies */}

            <div><h2 className='h3 text-[22px] font-normal text-center lg:text-start'>Tecnologías que uso actualemente</h2></div>

            <div className='flex justify-center gap-x-6 lg:justify-start lg:gap-x-7 mb-12'>
              <div className='flex flex-row justify-between w-[90%]'>
                <DiReact size={45} />
                <SiTailwindcss size={45} />
                <DiGit size={45} />
                <DiJsBadge size={45} />
                <DiHtml5 size={45} />
                <DiCss3 size={45} />
              </div>
            </div>

            <div className='flex justify-center lg:justify-start order-last'>
                <Link to='contact' smooth={true} spy={true} >
                  <button className='btn btn-lg'>Contacto</button>
                </Link>
            </div>     

          </motion.div>
         
        </div>

      </div>
    </section>
  )
};

export default About;
