'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import seclogo from '../../../../public/assets/img/4693-residential-in-alexandria-sawary-compound-c4ip4I6ywT.webp'
import Image from 'next/image'


export default function page() {

  function totop() {
    window?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })

  }


  return <>
    <footer className='text-white mt-10 bg-[#1c1c1c] text-center'>
      <div className='w-[3rem] cursor-pointer h-[3rem] flex items-center justify-center bg-amber-400 m-auto translate-y-[-50%] rounded-full '>
        <button onClick={totop}><i className="fa-solid fa-2xl fa-arrow-up"></i></button>
      </div>
      <div className="w-11/12 m-auto grid items-center md:grid-cols-2">
        <div className=' p-4'>
          <p>اشترك الآن للحصول على التحديثات حول العروض الترويجية.</p>
          <div className=' w-10/12 md:w-1/2 mt-4 m-auto flex justify-between'>
            <div className='bg-[#1877F2] hover:text-[#1877F2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands  fa-facebook fa-2xl"></i>
            </div>
            <div className='bg-[#1DA1F2] hover:text-[#1DA1F2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </div>
            <div className='bg-[#E1306C] hover:text-[#E1306C] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] ' >
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </div>
            <div className='bg-[#0A66C2] hover:text-[#0A66C2] transition-all cursor-pointer duration-300 hover:bg-white w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%]' >
              <i className="fa-brands fa-linkedin-in fa-2xl"></i>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <Image src={seclogo} className="md:w-[30%] ms-auto mb-4" />
          <p className='text-end'>يمكن شراء العقارات أو بيعها أو تأجيرها أو استئجارها، ويمكن أن تكون فرصة استثمارية قيمة. يمكن أن تكون قيمة العقارات...</p>
        </div>
      </div>
      <h1 className='py-6 font-bold'>جميع الحقوق محفوظة © <span className='text-green-500'>موقع عقارات مصر</span></h1>
    </footer>

  </>
}
