import React, {useState} from 'react'
import {AiOutlineFile, AiOutlineFolderOpen, AiOutlineHome, 
    AiOutlineMail, AiOutlineBars, AiOutlinePaperClip,
    AiOutlineProduct, AiOutlineProject,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineContacts} from 'react-icons/ai'
import './Navbar.css'
import Logo from '../assets/images/logo-0.jpg'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav =() =>{
        setNav(!nav)
        setTimeout(() => {
            setNav(false);
        }, 8000);
    }

    return (
    <div className='fixed h-10 w-full bg-slate-950/90 z-10 mix-blend-hard-light'>
            <a href = "#main"><img src={Logo} alt="logo" className='fixed w-10 h-10 rounded-md top-0 left-1 p-1 z-20 cursor-pointer hover:scale-110 ease-in duration-200'/></a>
            <a href = 'https://www.linkedin.com/in/komal-pardeshi-514683166/'><h1 className='fixed top-0 left-12 cursor-pointer hover:scale-110 ease-in duration-200' style={{fontFamily:'sedan sc', color:'whitesmoke', fontSize:'30px'}}>
                    | Komal Pardeshi</h1></a>
                    <a href="mailto:pardeshi.k@northeastern.edu"><AiOutlineMail className='socials fixed top-2 right-12 cursor-pointer hover:scale-110 ease-in duration-200'/></a>
            <a href="https://github.com/kokomocha"><AiOutlineGithub className='socials fixed top-2 right-24 cursor-pointer hover:scale-110 ease-in duration-200'/></a>
            <a href="https://www.linkedin.com/in/komal-pardeshi-514683166/"><AiOutlineLinkedin className='socials fixed top-2 right-36 cursor-pointer hover:scale-110 ease-in duration-200'/></a>
            <AiOutlineBars onClick={handleNav} className='rounded-sm fixed top-3 right-3 z-20 bg-white md:hidden cursor-pointer hover:scale-110 ease-in duration-200'/>
        {
        nav?(
            <div className='fixed w-full h-screen bg-cyan-100/50 flex flex-col justify-center items-center z-0'>
                <a href="#main" className='buttons-top'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>

                <a href="#about" className='buttons-top'>
                    <AiOutlinePaperClip size={20}/>
                    <span className='pl-4'>About</span>
                </a>

                <a href="#techstack" className='buttons-top'>
                    <AiOutlineProduct size={20}/>
                    <span className='pl-4'>Tech Stack</span>
                </a>

                <a href="#workex" className='buttons-top'>
                    <AiOutlineProject size={20}/>
                    <span className='pl-4'>Work Experience</span>
                </a>

                <a href="#projects" className='buttons-top'>
                    <AiOutlineFolderOpen size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>

                <a href="#publications" className='buttons-top'>
                    <AiOutlineFile size={20}/>
                    <span className='pl-4'>Publications</span>
                </a>

                <a href="#contact" className='buttons-top'>
                    <AiOutlineContacts size={20}/>
                    <span className='pl-4'>Contact Me</span>
                </a>
            </div>
        ):(
            ''
        )
    }
        <div className='md:block hidden fixed top-[25%] z-10 mix-blend-color-dodge'>
            <div className='flex flex-col'>
                <a href="#main" className='buttons-side' style={{ '--content': "'Home'" }}><AiOutlineHome size={20}/></a>

                <a href="#about" className='buttons-side' style={{ '--content': "'About'" }}><AiOutlinePaperClip size={20}/></a>

                <a href="#techstack" className='buttons-side' style={{ '--content': "'TechStack'" }}><AiOutlineProduct size={20}/></a>

                <a href="#workex" className='buttons-side' style={{ '--content': "'Work'" }}><AiOutlineProject size={20}/></a>

                <a href="#projects" className='buttons-side' style={{ '--content': "'Projects'" }}><AiOutlineFolderOpen size={20}/></a>

                <a href="#publications" className='buttons-side' style={{ '--content': "'Publications'" }}><AiOutlineFile size={20}/></a>

                <a href="#contact" className='buttons-side' style={{ '--content': "'Contact'" }}><AiOutlineContacts size={20}/></a>
            </div>
        </div>
    </div>
    )
}

export default Navbar