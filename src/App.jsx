import React, { Suspense, lazy, useContext, useEffect } from 'react'

import { RouterProvider,  createBrowserRouter } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { Toaster } from 'react-hot-toast';
const AllOrders = lazy(() => import('./Component/AllOrders/AllOrders'));
const Home = lazy(() => import('./Component/Home/Home'));
const Leyout = lazy(() => import('./Component/Layout/Layout'));
const WishContextProvider = lazy(() => import('./Context/WishListContext'));
const WishList = lazy(() => import('./Component/WishList/WishList'));
const GetEmail = lazy(() => import('./Component/GetEmail/GetEmail'));
const ProtectRest = lazy(() => import('./Component/ProtectRest/ProtectRest'));
const ResetPassword = lazy(() => import('./Component/ResetPassword/ResetPassword'));
const SpecifCategory = lazy(() => import('./Component/SpecifCategory/SpecifCategory'));
const SpecificBrands = lazy(() => import('./Component/SpecificBrands/SpecificBrands'));
const Shippingaddress = lazy(() => import('./Component/shippingaddress/shippingaddress'));
const ProductDetails = lazy(() => import('./Component/ProductDetails/ProductDetails'));
const ProtectedRoute = lazy(() => import('./Component/ProtectedRoute/ProtectedRoute'));
const UpdatePassword = lazy(() => import('./Component/ForgetPassword/ForgetPassword'));
const ForgotPassword = lazy(() => import('./Component/UpdataPassword/UpdataPassword'));
const CounterContextProvider = lazy(() => import('./Context/CounterContext'));
const Brands = lazy(() => import('./Component/Brands/Brands'));
const Login = lazy(() => import('./Component/Login/Login'));
const NotFound= lazy(() => import('./Component/NotFound/NotFound'));
const Categories= lazy(() => import('./Component/Categories/Categories'));
const Products = lazy(() => import('./Component/Products/Products'));
const Register = lazy(() => import('./Component/Register/Register'));
const Navbar = lazy(() => import('./Component/Navbar/Navbar'));
const Cart = lazy(() => import('./Component/Cart/Cart'));




export default function App() {

let routers =createBrowserRouter([
  {path:'', element: <Leyout/> ,children:[
   
    {index:true ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Home/></ProtectedRoute></Suspense>},
    
    {path:"cart",element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Cart/></ProtectedRoute></Suspense>},

    {path:"navbar" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Navbar/></ProtectedRoute></Suspense>} ,
    {path:"products" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Products/></ProtectedRoute></Suspense>} ,
    {path:"allorders" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><AllOrders/></ProtectedRoute></Suspense>} ,
    {path:"wishlist" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><WishList/></ProtectedRoute></Suspense>} ,
   
    
    {path:"updatepassword" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><UpdatePassword/></ProtectedRoute></Suspense>} ,
    {path:"resetpassword" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><ResetPassword/></ProtectedRoute></Suspense>} ,
 
    {path:"forgotpassword" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><ForgotPassword/></ProtectedRoute></Suspense>} ,
    {path:"protectrest" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><ProtectRest/></ProtectedRoute></Suspense>} ,
    {path:"productdetails/:id" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><ProductDetails/></ProtectedRoute></Suspense>} ,
    {path:"shippingaddress/:cartId" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Shippingaddress/></ProtectedRoute></Suspense>} ,
    {path:"brands" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Brands/></ProtectedRoute></Suspense>} ,
    
    {path:"brands/:id" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><SpecificBrands/></ProtectedRoute></Suspense>} ,
    {path:"categories/:id" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><SpecifCategory/></ProtectedRoute></Suspense>} ,
    {path:"categories" ,element:<Suspense  fallback={<div className=''>Loading...</div>}><ProtectedRoute><Categories/></ProtectedRoute></Suspense>} ,
    {path:"register" ,element:<Register/>} ,
    {path:"getemail" ,element:<GetEmail/>} ,
    {path:"login" ,element:<Login/>} ,
    {path:"*" ,element:<NotFound/>} ,
  ]}
  
])
let {setUserToken} =useContext(UserContext);
 useEffect(()=>{
  if (localStorage.getItem('userToken')){
    setUserToken(localStorage.getItem('userToken'))
  }
 },[])
  return (
    <>
    
     <WishContextProvider>
     <CounterContextProvider>
     <RouterProvider router={routers}></RouterProvider>
     <Toaster/>
     </CounterContextProvider>
     </WishContextProvider>
    
      
    </>
  )
}
