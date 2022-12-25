import React from 'react'
import HomeTitle from '../components/Home/HomeTitle'

function Homepage() {
  return (
    <div className='w-75 mx-auto d-flex flex-column justify-content-center' style={{
        height: 'calc(100vh - 64px)'
    }}>
        <HomeTitle/>
    </div>
  )
}

export default Homepage