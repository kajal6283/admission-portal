import React from 'react'
import { Link } from 'react-router-dom'

const Headerleft = () => {
    return (
        <>
            <div className='header-left'>
                <div className='header-menu'>
                    <div className='menu-img'>
                        <Link to="#">
                            <img src="/image/menu.svg" />
                        </Link>
                    </div>

                    <div className='logo-img'>
                        <Link to="#">
                            <img src="/image/cu-logo.svg" />
                        </Link>
                        <Link to="#">
                            <img src="/image/cu-logo1.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headerleft

{/* <div className='header-left'>
<div className='header-menu'>
    <div className='menu-img'>
        <img src="/image/menu.svg" />
    </div>

<div className='logo-img'>
    <img src="/image/cu-logo.svg" />
    <img src="/image/cu-logo1.svg" />
</div> 
</div>
</div> */}