import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";




const WishList = ({setOpenWishlist}) => {

    const cartData =[
        {
            name :"mac Air 256Gb ssd and 8Gb Ram",
            description : "test",
            Price :24000,
        },
        {
            name :"mac Air 256Gb ssd and 8Gb Ram",
            description : "test",
            Price :26000,
        },
        {
            name :"mac Air 256Gb ssd and 8Gb Ram",
            description : "test",
            Price :25000,
        },

    ]

  return (
    <div className='fixed top-0 w-full bg-[#000] h-screen z-10'>
        <div className='fixed top-0 right-0 min-h-full w-[25%] bg-[white] flex flex-col justify-between shadow-sm'>
        <div>
            <div className='flex w-full justify-end pt-5 pr-5 '>
                <RxCross1 size={25} className=' cursor-pointer '
                onClick={()=>setOpenWishlist(false)}/>
            </div>
            <div className={`${styles.normalFlex} p-4`}>
            <IoBagHandleOutline size={25}/>
            <h5 className='pl-2 text-[20px] font-[500]'>3 items</h5>
            </div>
            
                {/* cart single item */}
            <div className='w-full border-t'>
                {cartData && cartData.map((i,index)=> <WishSingle key={index} data={i}/>)}
            </div>
        </div>
        </div>
      
    </div>
  )
}

const WishSingle =({data})=>{
    const [value ,setValue]= useState(1)
    const totalPrice =data.Price * value
    return(
        <div className='border-b p-4'>
            <div className='w-full items-center flex'>
            <RxCross1 className="cursor-pointer" />
                <img alt='' className='w-[50px] h-[50px] ml-2'src='https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg'/>
                <div className='pl-[5px] '>
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[17px] pt-[3px] text-[#b81c1c]'>USD${totalPrice}</h4>
                </div>
                    <div>
                        <BsCartPlus size={20} className="cursor-pointer" title="Add to Cart"/>
                    </div>
            </div>
        </div>
    )
}

export default WishList
