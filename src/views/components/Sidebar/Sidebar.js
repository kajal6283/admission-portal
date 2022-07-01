import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='side-navbar'>
                <ul>
                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/feed.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                        <img className="side-icon" src="/image/carbon.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/channel.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/web.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/speaker.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/carbon.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/vector.svg" />
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <img className="side-icon" src="/image/admission.svg" />
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
