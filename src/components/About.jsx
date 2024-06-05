import React from 'react'
import '../App.css'
import './Contact.css'
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import pro1 from '../assets/images/profile/Crop2.jpg'

const About = () => {
  return (
    
    <div id='about' className='w-full h-screen bg-slate-900 md:pl-20 p-4 py-16'
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0 }}
    transition={{duration: 1 }}>
      {/* <motion.div variants={textVariant()} className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
          > */}
      <h1 className='spa-h1'>About Me</h1>
      <div className='grid md:grid-cols-2 gap-4 w-full align-middle justify-center py-2'>
          <div className="flex md: flex-col items-center p-5">
            <h2>Hello!
            </h2>
            <p>I'm a Data & Machine Learning Engineer based in Boston,MA with 
                a profound zeal for Artificial Intelligence & Product Design.</p> 
                <p>In May 2024,I graduated with a Master's in Industrial Engineering, and a bunch of comprehensive 
              Projects in Deep Learning. </p>
              {/* , and tonnes of Real-world Research curiosites. */}

            <p>With an effectual Product Design expertise of 3 years, I now specialize 
              in deploying Big Data Pipelines, ML Algorithms, and Data Intelligence. I am 
              exploring opportunities in E-commerce Products and Medical Technology domains.</p>
              <p> I love freelancing, tinkering and deploying fun projects. You may find me 
                learning a new language, or reveling nature through hiking otherwise.
             </p>

             <p>Let's connect to discuss continuous learning, innovative technology, & 
             solving problems one sprint at a time!</p>
             <div className=' p-5'>
          <img className='rounded-full w-48 h-49 object-cover' src={pro1} />
          <a href="https://linkedin.com/in/komal-pardeshi-514683166/overlay/1715893034077/single-media-viewer/?profileId=ACoAACecRyABao-yWQWYEYFRr05XnrQkV6spYFI">
            Resume</a>
        </div>
             </div>
             </div>
             {/* </motion.p>
        </motion.div> */}
    </div>
  )
}


export default About