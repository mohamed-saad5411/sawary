import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/assets/img/42EGwgYaO8vD2wHo_thumb.jpg'

export default function Units() {
  return <>
    <section>
      <div className='grid container bg-amber-300 grid-cols-3'>
        <div className="grid p-2 h-[12rem]  bg-amber-400 grid-cols-3">
          <div className='bg-amber-500 rounded-s-md col-span-1'>
            <Image className='h-full rounded-s-md' src={logo} />
          </div>
          <div className='bg-amber-600 col-span-2 p-1.5 rounded-e-md'>
            <h3 className='text-sm font-semibold'>A distinguished offer: a 280-square-meter villa for sale in Sawary New Alexandria, in a prime location.</h3>
            <div className='flex justify-between my-2'>
              <button className='bg-gray-400 rounded-md text-sm px-3 py-1'>villa</button>
              <button className='bg-gray-400 rounded-md text-sm px-3 py-1'>alexandria</button>
            </div>
            <h3 className='text-sm font-semibold'><span className='text-blue-900 mb-2'>8500000</span> EGP</h3>
            <div className='flex justify-between border-t-[0.6px] pt-2'>
              <button className='bg-gray-400 rounded-md text-sm px-3 py-1'>villa</button>
              <button className='bg-gray-400 rounded-md text-sm px-3 py-1'>details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
