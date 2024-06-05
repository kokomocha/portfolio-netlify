import React from 'react'
import '../App.css'
import './Contact.css'

const Contact = () => {

    return (
        <div id='contact' className='w-full bg-slate-900 md:pl-20 p-4 py-16'>
            <h1 className='spa-h1'>Contact</h1>
            <div>
            <form action="" method='POST' encType='form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='field-labels'>
                        <label>Name</label>
                        <input type="text" name='Name' id="name" 
                        placeholder='Enter your name' 
                        className='field-text'/>
                    </div>

                    <div className='field-labels'>
                        <label>Phone</label>
                        <input type="text" name='Phone' id="phone"
                        placeholder='Enter your phone no.' 
                        className='field-text'/>
                    </div>

                    <div className='field-labels'>
                        <label>Email</label>
                        <input type="email" name='Email' id="email" 
                        placeholder='Enter your email' 
                        className='field-text'/>
                    </div>

                    <div className='field-labels'>
                        <label>Email Subject</label>
                        <input type="text" name='Subject' id="subject"
                        placeholder='Enter the subject' 
                        className='field-text'/>
                    </div>
                </div>
                    <div className='field-labels'>
                        <label>Message</label>
                        <textarea rows={8} name='Message' id="message"
                        placeholder='Enter your message' 
                        className='field-text'/>
                    </div>
                
            </form>
            </div>
        </div>
    )
}

export default Contact

{/* <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'> */}
                {/* <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> */}
            {/* </form> */}