import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";
import { UserContext } from "../../Context/UserContext";
import { CounterContext } from "../../Context/CounterContext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  let location = useLocation();
  const { userToken, setUserToken } = useContext(UserContext);
  const { numOfCartItems } = useContext(CounterContext);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
  }
  let {getItems,count}= useContext(CartContext)
useEffect(()=>{getItems()
},[])

  return (
    <nav className="navbar fixed-top SignOut navbar-expand-lg navbar-light bg-light">
  <div className="container ">
  <Link className="navbar-brand SignOut" to={"/"}>
  <img src={logo} alt="frechlogo" />
</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userToken?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className={`SignOut path-Link ${location.pathname === '/' ? 'color-main' : ''}`} aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className={`SignOut path-Link ${location.pathname === '/products' ? 'color-main' : ''}`} aria-current="page" to="products">Products</Link>
        </li>
        <li>
        <Link className={`SignOut path-Link ${location.pathname === '/categories' ? 'color-main' : ''}`} aria-current="page" to="categories">Categories</Link>
        </li>
        <li>
        <Link className={`SignOut path-Link ${location.pathname === '/brands' ? 'color-main' : ''}`} aria-current="page" to="brands">Brands</Link>
        </li>
        <li>
        <Link className={`SignOut path-Link ${location.pathname === '/allorders' ? 'color-main' : ''}`} aria-current="page" to="allorders">Orders</Link>
        </li>
      </ul>:''}

          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
            <Link to="https://www.facebook.com/moaze.kandeel/" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook me-2 fa-xl hearte"></i>
  
</Link>
            <Link to="https://www.instagram.com/moazkandeel7?igsh=MWthcTZlcTZ4dDEyZA==" target="_blank" rel="noopener noreferrer">

  <i className="fab fa-instagram me-2 fa-xl heart"></i>
  
</Link>
            <Link to="
            https://www.linkedin.com/in/moaze-kandil-04bb4123a" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin me-2 fa-xl hearte"></i>
            
            </Link>
           
            
            </li>

            {userToken != null ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link SignOut" to={"cart"}>
                    <i className="fa-solid fa-cart-shopping fs-5 position-relative"><div className="alart1 ">{count}</div></i>
                  </Link>
                </li>
              
                <li className="nav-item">
                  <Link className="nav-link  heart fw-bold" to={"wishlist"}>
                    <i className="fa-solid fa-heart fs-5"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <span onClick={logOut} className="nav-link cursor-pointer fw-bold btn SignOut fw-bold">
                  LogOut
                  <i class="fa-solid fa-right-from-bracket ms-1 "></i>
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"register"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"login"}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
