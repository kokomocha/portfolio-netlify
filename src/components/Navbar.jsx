import React, {useState} from 'react'
import {AiOutlineFile, AiOutlineFolderOpen, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlinePaperClip, AiOutlineProduct, AiOutlineProject } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav =() =>{
        setNav(!nav)
    }

    return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
        nav?(
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>About</span>
                </a>

                <a href="#workex" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineProject size={20}/>
                    <span className='pl-4'>Work Experience</span>
                </a>

                <a href="#techstack" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineProduct size={20}/>
                    <span className='pl-4'>Tech Stack</span>
                </a>

                <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineFolderOpen size={20}/>
                    <span className='pl-4'>Projects</span>
                </a> 

                <a href="#publications" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineFile size={20}/>
                    <span className='pl-4'>Publications</span>
                </a>

                <a href="#resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlinePaperClip size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>

                <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'>Contact Me</span>
                </a>
            </div>
        ):(
            ''
        )
    }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>

                <a href="#workex" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>

                <a href="#techstack" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProduct size={20}/>
                </a>

                <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineFolderOpen size={20}/>
                </a>

                <a href="#publications" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineFile size={20}/>
                </a>

                <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlinePaperClip size={20}/>
                </a>

                <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Navbar