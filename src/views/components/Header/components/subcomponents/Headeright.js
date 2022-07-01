import React from 'react'
import { Link } from 'react-router-dom'

const Headeright = () => {
  return (
    <>
      <div className='header-right'>
        <Link to="#">
          <img src="/image/settings.svg" />
        </Link>
        <Link to="#">
          <img className="profile-img" src="/image/profile.svg" />
        </Link>
      </div>
    </>
  )
}

export default Headeright