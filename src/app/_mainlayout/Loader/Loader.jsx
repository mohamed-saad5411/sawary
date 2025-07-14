import React from 'react'
import LoadingIcons from 'react-loading-icons'


export default function Loader() {
    return <>
        <div className='loader-container top-0 start-0 end-0 d-flex align-items-center justify-content-center vh-100 bottom-0 position-absolute'>
            <span className='loader rounded-circle d-inline-block position-relative '></span>
        </div>
    </>
}
