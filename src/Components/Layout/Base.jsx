import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Base = (props) => {
  return (
    <>
     <Header/>
     {props.children} 
     <Footer/>
    </>
  )
}

export default Base
