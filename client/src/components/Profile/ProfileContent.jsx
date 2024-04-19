import React, { useState } from "react";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/styles";

const ProfileContent = ({active}) => {
const user = useSelector((state) => state.user);
const [name,setName] = useState(user && user.user.name);
const [email,setEmail] = useState(user && user.user.email);
const [zipCode,setZipCode] = useState("");
const [phoneNumber,setPhoneNumber] = useState("");
const [address1,setAddress1] = useState("");
const [address2,setAddress2] = useState("")
console.log(user);
  return (
  <div className="w-full">
    {
      // profile page
      active === 1 && (
        <>
         <div className="flex justify-center w-full">
        <div className="relative">
            <img src={`${backend_url}${user.user.avatar.public_id}`}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#2df12d]"/>
            <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
            </div>
        </div>
     </div>
      <br />
      <br />
        <div className="w-full px-5">
          <form onSubmit="" aria-required = {true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block">Full Name</label>
                   <input type="text" className={`${styles.input} w-[95%]`}
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="w-[50%]">
                  <label className="block">Email</label>
                   <input type="email" className={`${styles.input} w-[95%]`}
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block">Phone Number</label>
                   <input type="number" className={`${styles.input} w-[95%]`}
                   required
                   value={name}
                   onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className="w-[50%]">
                  <label className="block">Zip Code</label>
                   <input type="number" className={`${styles.input} w-[95%]`}
                   required
                   value={name}
                   onChange={(e) => setZipCode(e.target.value)}/>
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block">Address1</label>
                   <input type="text" className={`${styles.input} w-[95%]`}
                   required
                   value={name}
                   onChange={(e) => setAddress1(e.target.value)}/>
                </div>
                <div className="w-[50%]">
                  <label className="block">Address2</label>
                   <input type="text" className={`${styles.input} w-[95%]`}
                   required
                   value={email}
                   onChange={(e) => setAddress2(e.target.value)}/>
                </div>
              </div>
              <input type="submit" 
              className={`w-[250px] h-[40px] border border-[#9f9708] text-center text-[#9f9708] rounded-[3px] mt-8 cursor-pointer`}
              value="Update"
              required/>
          </form>
        </div>
        </>
      )}

    {/* order page */}
     
    {
      active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* Refund page */}
      {
        active === 3 && (
          <div>
            <AllRefundOrder/>
          </div>
        )
      }
      {
        active === 5 && (
          <div>
            <TrackOrders/>
          </div>
        )
      }
       {
        active === 6 && (
          <div>
            <PaymentMethods/>
          </div>
        )
      }
       {
        active === 7 && (
          <div>
          <MyAddresses/>
          </div>
        )
      }
  </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "789456515515361afsdf",
      orderItems: [
        {
          name: "Iphone 14 pro max"
        }
      ],
      totalPrice: 180,
      orderStatus: "Processing"
    },
  ]

  const columns = [
    {field: "id", headerName: "ID", width: 300 },
    {field: "itemsQty",headerName: "itemsQty", width: 150, editable: true},
    {field: "total",headerName: "total", width: 150, editable: true},
    {field: "status",headerName: "status", width: 110, editable: true},
    {field: "",flex: 1,headerName: "", width: 150, editable: true, sortable: false,
     renderCell: (params) => {
      return (
        <>
        <Link to={`/orders/${params.id}`}>
          <button className="cursor-pointer mr-10"
          title = "view details">
            <AiOutlineArrowRight size={20} />
          </button>
        </Link>
        </>
      )
     }
   },
    ];
     const row = [];
     orders && orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus
      });
     });

     return (
      <>
      <div>
        <DataGrid rows={row} 
        columns={columns} 
        pageSize={10} disableRowSelectionOnClick
        autoHeight/>
      </div>
      </>
     );
};
const AllRefundOrder = () => {
  const orders = [
    {
      _id: "789456515515361afsdf",
      orderItems: [
        {
          name: "Iphone 14 pro max"
        }
      ],
      totalPrice: 180,
      orderStatus: "Processing"
    },
  ]

  const columns = [
    {field: "id", headerName: "ID", width: 300 },
    {field: "itemsQty",headerName: "itemsQty", width: 150, editable: true},
    {field: "total",headerName: "total", width: 150, editable: true},
    {field: "status",headerName: "status", width: 110, editable: true},
    {field: "",flex: 1,headerName: "", width: 150, editable: true, sortable: false,
     renderCell: (params) => {
      return (
        <>
        <Link to={`/orders/${params.id}`}>
          <button className="cursor-pointer mr-10"
          title = "view details">
            <AiOutlineArrowRight size={20} />
          </button>
        </Link>
        </>
      )
     }
   },
    ];
     const row = [];
     orders && orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus
      });
     });

     return (
      <>
      <div>
        <DataGrid rows={row} 
        columns={columns} 
        pageSize={10} disableRowSelectionOnClick
        autoHeight/>
      </div>
      </>
     );
};
const TrackOrders = () => {
  const orders = [
    {
      _id: "789456515515361afsdf",
      orderItems: [
        {
          name: "Iphone 14 pro max"
        }
      ],
      totalPrice: 180,
      orderStatus: "Processing"
    },
  ]

  const columns = [
    {field: "id", headerName: "ID", width: 300 },
    {field: "itemsQty",headerName: "itemsQty", width: 150, editable: true},
    {field: "total",headerName: "total", width: 150, editable: true},
    {field: "status",headerName: "status", width: 110, editable: true},
    {field: "",flex: 1,headerName: "", width: 150, editable: true, sortable: false,
     renderCell: (params) => {
      return (
        <>
        <Link to={`/orders/${params.id}`}>
          <button className="cursor-pointer mr-10"
          title = "view details">
            <AiOutlineArrowRight size={20} />
          </button>
        </Link>
        </>
      )
     }
   },
    ];
     const row = [];
     orders && orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus
      });
     });

     return (
      <>
      <div>
        <DataGrid rows={row} 
        columns={columns} 
        pageSize={10} disableRowSelectionOnClick
        autoHeight/>
      </div>
      </>
     );
};

const PaymentMethods =()=>{
  return (
    <div className="w-full px-5">
    <div className=" flex w-full items-center justify-between">
    <h1 className=" text-[25px] font-[600] text-[#000] pb-2"> Payment method
    </h1>
    <div className={`${styles.button} !rounded-md`}>
      <span className=" text-[#fff]">Add New</span>
    </div>
    </div>
    <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
      <div className=" flex items-center">
        <img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
        alt=""/>
        <h5 className="pl-5 font-[600]">Muhsin Salim</h5>
      </div>
      <div className=" pl-8 flex items-center">
        <h6>1234 ******* *** </h6>
        <h5 className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className=" cursor-pointer"/>
        </h5>
      </div>
    </div>
    </div>
  )
}
const MyAddresses =()=>{
  return (
    <div className="w-full px-5">
    <div className=" flex w-full items-center justify-between">
    <h1 className=" text-[25px] font-[600] text-[#000] pb-2"> My Address
    </h1>
    <div className={`${styles.button} !rounded-md`}>
      <span className=" text-[#fff]">Add New</span>
    </div>
    </div>
    <br/>
    <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
      <div className=" flex items-center">
       
        <h5 className="pl-5 font-[600]">Default</h5>
      </div>
      <div className=" pl-8 flex items-center">
        <h6> PazhayamPallil h, kottayam ,erattupetta </h6>
        </div>
        <div className=" pl-8 flex items-center">
        <h6> (+123) 0946-37384</h6>
        <h5 className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className=" cursor-pointer"/>
        </h5>
      </div>
    </div>
    </div>
  )
}
export default ProfileContent;