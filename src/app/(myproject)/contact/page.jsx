'use client'
import React from 'react'

export default function Contact() {
  return <>
    <section className='p-4'>
      <div className="md:grid md:grid-cols-3 container">
        <div className='col-span-2'>
          <h3 className='font-bold text-2xl text-[#5a4e4e]'>Put Your Message</h3>
          <form className='p-4 text-[#5a4e4e]'>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete=""
                className="form-tailwind"
              />
            </div>
            <div className='mt-3'>
              <label htmlFor="textArea">Message</label>
              <textarea
                id="textArea"
                name="textArea"
                type="text"
                rows={10}
                autoComplete=""
                className="form-tailwind"
              />
            </div>
            <button className='btn mt-10 w-full'>Send</button>
          </form>
        </div>
        <div className=''>
          <div className=' w-10/12 md:w-1/2 m-auto flex md:flex-col items-center justify-evenly bg-[#bfa27a] h-full'>
            <div className='text-white hover:text-[#1877F2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands  fa-facebook fa-2xl"></i>
            </div>
            <div className='text-white hover:text-[#1DA1F2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </div>
            <div className='text-white hover:text-[#E1306C] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] ' >
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </div>
            <div className='text-white hover:text-[#0A66C2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands fa-linkedin-in fa-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
