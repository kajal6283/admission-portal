import React from 'react'

const FooterItems = () => {
    return (
        <>
            <div className='footer-items'>
                <div className='footer-left'>
                    <div className='footer-p'>
                        <p>20 rows</p>
                    </div>
                    <div className='forward-icon'>
                        <img src="/image/forward.svg" />
                        <img src="/image/forward1.svg" />
                    </div>
                </div>

                <div className='footer-right'>
                    <div className='content'>
                        <h2>1-50 of 2,619</h2>
                    </div>
                    <div className='arrow-img'>
                        <img src="/image/leftarrow.svg" />
                        <img src="/image/rightarrow.svg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterItems
