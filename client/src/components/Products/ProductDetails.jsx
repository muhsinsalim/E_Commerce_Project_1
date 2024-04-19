import React, { useState } from "react";
import styles from "../../styles/styles";

const ProductDetails = ({ data }) => {
    const [select, setSelect]=useState(0);
  return (
    <div className=" bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="w-full flex 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data.image_Url[select].url} alt="" className="w-[50%]" />
                <div className=" w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
