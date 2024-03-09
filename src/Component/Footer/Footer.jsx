import React from 'react'
import AmazonPayLogo from "../../Assets/images/Amazon-Pay-logo.de8be4320fe353035e70d10906a50cdf.svg"
import PayPalLogo from "../../Assets/images/PayPal-Logo.518ac7157897e89f6dd0.png"
import mastercard_logo from "../../Assets/images/mastercard_logo.svg__3.4e4c139e20115b1ed66f.png"
import appStore from "../../Assets/images/app store.2a8f2a38110b76832fb2.png"
import googlePlay from "../../Assets/images/google play.88c0cf672ae4dd873d7f.png"
export default function Footer() {
  return (
   <>
   <div className='py-5 bg-main-light mt-4'>
   <div className="container">
    <h2>Get the freshCart app</h2>
    <p className=' text-muted'>We will send you a link, open it on your phone to download the app</p>
    <div className='row'>
  <div className="col-md-9">
  <div className="mb-3">
    <input type="email" className="form-control" placeholder='Email...' aria-describedby="emailHelp"/>
  </div>
  </div>
  <div className="col-md-3">
  <button type="submit" className="btn bg-main text-light  fw-bolder  w-100">Share App Link</button>
  </div>
</div>
<hr />
      <div className='d-flex justify-content-between align-items-center flex-wrap'>
        <ul className=' list-unstyled d-flex'>
          <li>Payment Partners</li>
          <li><img src={AmazonPayLogo} alt={AmazonPayLogo} className='master' /></li>
          <li><img src={mastercard_logo} alt={mastercard_logo} className='master'/></li>
          <li><img src={PayPalLogo} alt={PayPalLogo} className='master'/></li>
         
        </ul>
        <ul className=' list-unstyled d-flex  align-items-center'>
          <li>Get deliveries with FreshCart</li>
          <li><img src={googlePlay} alt={googlePlay} className='store'/></li>
          <li><img src={appStore} alt={appStore} className='store'/></li>
        </ul>
      </div>
      <hr />
   </div>
   </div>
   </>
  )
}
