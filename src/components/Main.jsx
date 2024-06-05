import React from 'react'
import avatar1 from '../assets/images/profile/avatar1.jpg'
import { TypeAnimation } from 'react-type-animation'
import './Main.css'

const Main = () => {
  // const overlayStyle = {
  //   position: 'absolute',
  //   top: '10%',
  //   right: '10%',
  //   // transform: 'translate(-50%, -50%)',
  //   backgroundColor: 'rgba(40, 62, 74, 0.7)',
  //   padding: '100px',
  //   borderRadius: '50px',
  //   height:'40rem',
  // };

  return (
    <div id='main'>
      <img src={avatar1}  className=' w-full h-screen justify-center object-cover top-50px z-0'/>
      <div className='w-full h-screen top-0 absolute left-0 bg-white/20 z-1'>
        <div className='overlay'>
          <h1 className='text-styles relative justify-center p-10'>Welcome to my Sim {'\u{1F30D}'}!</h1>
          <h1 className='text-styles relative justify-center p-5'>I'm Komal Pardeshi.</h1>
          <h2 className='text-styles relative justify-center p-2'>I'm a </h2>
            <TypeAnimation
              sequence={[
              'DATA ENGINEER.',
              1000,
              'MACHINE LEARNING ENGINEER.',
              1000,
              'BIG DATA ANALYST.',
              1000, 
              'BUSINESS INTELLIGENCE ENGINEER.',
              1000,
              'DATA SCIENTIST.',
              1000,
              'PRODUCT DEVELOPER.',
              1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={10}
              className='text-styles justify-center p-40'
            />
        </div>
      </div>
    </div>
  )
}

export default Main