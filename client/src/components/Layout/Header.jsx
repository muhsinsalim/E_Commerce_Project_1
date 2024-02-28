import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { categoriesData, productData } from "../../static/data";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io"
import {BiMenuAltLeft} from "react-icons/bi"
import Dropdown from "./Dropdown";
import NavBar from "./NavBar";
import {CgProfile} from "react-icons/cg"

const Header = ({activeHeading}) => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [searchdata, setSearchdata] = useState(null);
  const [active,setActive]=useState(false);
  const [dropDown , setDropDown]=useState(false)

  const handleSearchChange = (e) => {
    const term = e.target.value;
    SetSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      if(!term){
        return  setSearchdata("")

      }
      return  setSearchdata(filteredProducts);
     };
  

  return (
    <>
    <div className={`${styles.section}`}>
      <div className=" h-50 hi my-10 flex items-center justify-between lg:h-800 lg:my-10">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className=" w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-[#ebf21e] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className=" absolute right-2 top-1.5 cursor-pointer"
          />
          {searchdata && searchdata.length !== 0 ? (
            <div className=" absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchdata.map((i, index) => {
                const d = i.name;
                console.log(d);
                const product_name = d.replace(/\s+/g, "-");
                console.log(product_name);
                return (
                  <Link to={`/product/${product_name}`}>
                    <div className=" w-full flex items-start py-3">
                      <img
                        src={i.image_Url[0].url}
                        alt=""
                        className=" w-[40px] h-[40px] mr-[10px]"
                      />
                      <h1>{i.name}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className={`${styles.button}`}>
     <Link to="/seller">
        <h1 className=" text-[#fff] flex items-center">Become Seller <IoIosArrowForward className=" ml-1"/></h1>
     </Link>
        </div>
      </div>
    </div>
    <div className={`${active===true? " shadow-sm fixed top-0 left-0 z-10 " : null} transition 800px:flex items-center justify-between w-full bg-[#bec408] h-[70px]`}>
      <div className={`${styles.section} relative ${styles.normalFlex} justify-between`}>
        <div>
          <div  className=" relative h-[60px] mt-[10px] w-[270px] 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2"/>
              <button className=" h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans font-[500] text-lg select-none rounded-t-md">
                All Categories

              </button>
              <IoIosArrowDown size={20}
              className=" absolute right-2 top-4 cursor-pointer" onClick={()=>setDropDown(!dropDown)}/>
              {dropDown ? (
              <Dropdown categoriesData={categoriesData}setDropDown={setDropDown}/>
              ):null}
          </div>
        </div>
        {/* navitems */}
        <div className={`${styles.normalFlex}`}>
          <NavBar active={activeHeading}/>

        </div>
        <div className=" flex">

        <div className={`${styles.normalFlex}`}>
          <div className=" relative cursor-pointer mr-[15px]">
            <AiOutlineHeart size={30} color=" rgb(255 255 255 /83%)"/>
            <span className=" absolute right-0 top-0 rounded-full bg-[#d6249b] w-4 h-4 top right-p-0 m-0 text-white font-meno text-[12px] leading-tight text-center">0</span>
          </div>
        </div>
        <div className={`${styles.normalFlex}`}>
          <div className=" relative cursor-pointer mr-[15px]">
            <AiOutlineShoppingCart size={30} color=" rgb(255 255 255 /83%)"/>
            <span className=" absolute right-0 top-0 rounded-full bg-[#d6249b] w-4 h-4 top right-p-0 m-0 text-white font-meno text-[12px] leading-tight text-center">1</span>
          </div>
        </div>
        <div className={`${styles.normalFlex}`}>
          <div className=" relative cursor-pointer mr-[15px]">
            <Link to="/login">
            <CgProfile size={30} color=" rgb(255 255 255 /83%)"/>
            </Link>
           
           
          </div>
        </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Header;
