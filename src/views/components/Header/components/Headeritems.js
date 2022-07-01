import React from 'react'
import Headeright from './subcomponents/Headeright'
import Headerleft from './subcomponents/Headerleft'

const Headeritems = () => {
    return (
        <>
        <div className="header">
                <div className="header-box ramesh">
                    <Headerleft />
                    <Headeright />
                </div>
        </div>
        </>
    )
}

export default Headeritems

