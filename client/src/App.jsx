import React ,{useEffect}from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom" ;
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LoginPage, SignupPage , ActivationPage ,HomePage, ProductsPage, BestSellingPage, FAQPage, ProfilePage} from "./Routes";
import EventsPage from './pages/EventsPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';



import { useSelector } from "react-redux"
import store from "./Redux/Store"
import { loadUser } from "./Redux/actions/user"


const App = () => {
  const { loading } = useSelector((state) => state.user)
  // console.log(loading)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <>
    {loading ? null :(
       <BrowserRouter>
       <Routes>
         <Route path="/Login" element ={<LoginPage/>}/>
         <Route path="/" element ={<HomePage/>}/>
   
         <Route path="/Signup" element={<SignupPage/>}/>
         <Route path="/activation/:activation_token" element=
         {<ActivationPage/>}/>
         <Route path='/Products' element={<ProductsPage/>}/>
         <Route path='/best-selling' element={<BestSellingPage/>}/>
         <Route path='/Events' element={<EventsPage/>}/>
         <Route path='/Faq' element={<FAQPage/>}/>
         <Route path='/products/:name' element={<ProductsDetailsPage/>}/>
         <Route path='/profile' element={<ProfilePage/>}/>
       </Routes>
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
        />
       </BrowserRouter>
    )}
   
    </>
  );
  
};

export default App
