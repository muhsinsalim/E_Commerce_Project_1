import React from 'react'
import styles from '../../styles/styles'
import sony from "../../assets/sony.jpeg"
import dell from "../../assets/dell.jpeg"
import lg from "../../assets/lg.jpeg"
import microsoft from "../../assets/microsoft.jpeg"

const Sponsored = () => {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
<div className=' flex justify-between w-full'>
  <div className=' flex '>
    <img height="130px" width="130px" src={sony}/>
  </div>
  <div className=' flex '>
    <img height="130px" width="130px" src={lg}/>
  </div>
  <div className=' flex '>
    <img height="130px" width="130px" src={microsoft}/>
  </div>
  <div className=' flex '>
    <img height="130px" width="130px" src={dell}/>
  </div>
  </div>      
    </div>
  )
}

export default Sponsored
