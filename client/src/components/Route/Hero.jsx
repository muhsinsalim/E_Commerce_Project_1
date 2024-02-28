import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={` relative min-h-[70vh] 8000px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`
}
style={{
    backgroundImage: "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
}}
>
    <div className={`${styles.section} w-[90%] lg:w-[60%]`}>
        <h1 className={` text-[25px] leading-[1.2] lg:text-[60px] text-[#342c2c] font-[600] capitalize`}>
            We have the best for <br/> Everything
        </h1>
        <p className=' pt-5 text-[16px] font-[400] font-[Poppins] text-[#000000ba]' >Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories: a strategy that has earned it the moniker The Everything Store</p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 bg-[#7f8219] hover:bg-[#b8c493]`}>
                <span className='text-[#fff] font-[Poppins] text-[18px]'>Span Now</span>
            </div>
        </Link>
    </div>
</div>
  )
}

export default Hero