import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Admissionitems from './components/Admissionitems'
// import Admissionitems from './components/Admissionitems'

const Admission = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='screen'>
    <Admissionitems/>
    <Footer/>
    </div>
    </>
  )
}

export default Admission

