'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useRouter } from 'next/navigation';


export default function Register() {
  const [isLoading, setisLoading] = useState(false)
  let router = useRouter()
  async function handleRegister(values) {
    setisLoading(true)
    let { data } = await axios.post('https://e-commerce-be-v2.vercel.app/api/v1/auth/signup', values)
    if (data?.Message == "user is registered successfully") {
      router.push('/Login')
      setisLoading(false)
    }
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: handleRegister
  })

  return <>
    <section className='bg- p-3 w-50 m-auto'>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className='mb-3'>
          <label htmlFor="name" className='fw-bold h5 m-0'>User Name ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id='name' name='name' value={formik.values.name} className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="email" className='fw-bold h5 m-0'>User E-mail ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" id='email' name='email' value={formik.values.email} className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className='fw-bold h5 m-0'>User Password ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id='password' name='password' value={formik.values.password} className='form-control' />
        </div>
        {isLoading ? <button type='' className='btn btn-outline-success mt-4 w-100'><i class="fa-solid fa-lg fa-circle-notch fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-outline-success mt-4 w-100'>Register Now</button>}


      </form>
      <div className=''><Link href={'/Login'}>have account? login</Link></div>

    </section>
  </>

}
