'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context'


export default function Login() {
  const { setuserLogin } = useAppContext()

  const [isLoading, setisLoading] = useState(false)
  let router = useRouter()

  async function handleLogin(values) {
    setisLoading(true)
    let { data } = await axios.post('https://e-commerce-be-v2.vercel.app/api/v1/auth/signin', values)
    if (data?.Message == "Logged successfully") {
      localStorage.setItem('userToken',data?.token)
      setuserLogin(data?.token)
      router.push('/')
      setisLoading(false)
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: handleLogin
  })

  return <>
    <section className='bg- p-3 w-50 m-auto'>
      <form onSubmit={formik.handleSubmit} className=''>
        <div className='mb-3'>
          <label htmlFor="email" className='fw-bold h5 m-0'>User E-mail ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" id='email' name='email' value={formik.values.email} className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className='fw-bold h5 m-0'>User Password ...</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id='password' name='password' value={formik.values.password} className='form-control' />
        </div>
        {isLoading ? <button type='' className='btn btn-outline-success mt-4 w-100'><i class="fa-solid fa-lg fa-circle-notch fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-outline-success mt-4 w-100'>Login</button>}


      </form>
      <div className=''><Link href={'/register'}>Cant't have account? Sign Up Free</Link></div>
    </section>
  </>


}
