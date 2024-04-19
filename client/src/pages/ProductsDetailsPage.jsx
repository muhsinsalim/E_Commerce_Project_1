import React from 'react'
import  { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import ProductDetails from '../components/Products/ProductDetails'
import { productData } from '../static/data'
import {useParams} from "react-router-dom"
import SuggestedProducts from '../components/Products/SuggestedProducts'

const ProductsDetailsPage = () => {
  const {name} =useParams();
const productName =name.replace(/-/g," ")
const [data,setData]=useState(null);

useEffect(()=>{
const data = productData.find((i)=>i.name===productName);
setData(data)
},[])

return (
<div>
<Header/>
<ProductDetails data={data} />
{data && <SuggestedProducts data={data}/>}
</div>
)
}

export default ProductsDetailsPage