import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  return (

    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='flex-1 flex lg:justify-start justify-center items-center lg:w-[50%] w-full'> 
            <div className='flex lg:flex-col items-center mb-5'>
              <h2 className='hidden lg:block text-[45px] lg:text-[90px] leading-none mb-10 pb-6 text-center'>Trabajemos<br /> <p className='text-accent'>Juntos</p></h2>
              <div className='border rounded-lg lg:w-fit w-full px-10 py-6'>
                <h3 className='text-[25px] lg:text-[33px] text-center border-b pb-5 mb-3 '>Detalles de contacto</h3>
                <div className='flex items-center'>
                  <FiMail size={25}/>
                  <p className='py-1 px-3 text-[20px] hover:text-accent '><a title='Gmail' target='_blank' rel='noopener noreferrer' href="mailto:estebanpelutiero@gmail.com?Subject=Interesado%20en%20trabajar%20contigo">estebanpelutiero@gmail.com</a></p>
                </div>
                <div className='flex items-center'>
                  <AiOutlineWhatsApp size={25} />
                  <p className='py-1 px-3 text-[20px] hover:text-accent '><a title='Ir al chat' target='_blank' rel='noopener noreferrer' href="https://wa.me/543489311605">03489 - 311605</a></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='border rounded-2xl flex flex-col gap-y-6 p-6 items-start lg:w-[40%] lg:mr-28 lg:mb-auto mb-10'
          action="https://formsubmit.co/estebanpelutiero@gmail.com" 
          method="POST"
          >

            <input
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type="text"
            placeholder='Nombre completo'
            required='true'
            name='name'/>

            <input
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type="text"
            placeholder='Email'
            required='true'
            name='email'/>

            <textarea
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none'
            placeholder='Mensaje'
            required='true'
            name='comments'
            >
            </textarea>

            <button type='submit' className='btn btn-lg'>Enviar</button>

            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name='_captcha' value='false'/>

          </motion.form>
        </div>
      </div>
    </section>

  )
};

export default Contact;
