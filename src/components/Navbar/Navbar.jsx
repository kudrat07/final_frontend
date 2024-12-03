import React from 'react'
import { useNavigate } from 'react-router-dom';
import starLogo from "../../assets/star-icon.png";
import locationLogo from "../../assets/location.png";
import cartLogo from "../../assets/cart-icon.png";
import arrowLogo from "../../assets/download-icon.png";
import "./Navbar.css"
const Navbar = ({onCartClick}) => {
  const navigate = useNavigate();

  const cartHandler = () => {
    alert("My cart button cliceked")
    navigate("/products", {state:{openCart: true}});
  }


  return (
    <div>
      <header className="top-header">
        <div className="header-items first">
          <img className="logo" src={starLogo} alt="star logo" />
          <p className="header-text">
            {" "}
            Get 5% Off your first order,{" "}
            <span className="span-text">Promo: ORDER5</span>
          </p>
        </div>
        <div className="header-items">
          <img
            className="logo location-logo"
            src={locationLogo}
            alt="location logo"
          />
          <p className="header-text">
            Regent Street, <span className="text-underline">A4,</span> A4201,
            London
          </p>
          <span className="span-text location-text text-underline">
            Change Location
          </span>
        </div>
        <div className="header-items">
          <div className="header-btn header-first">
            <div >
            <button className="cart-wrapper" onClick={cartHandler}>

              <img className="cart-logo" src={cartLogo} alt="cart logo" />
              <p className="cart-text">My Cart</p>
            </button>
            </div>
          </div>
          <div className="header-btn header-second"></div>
          <div className="header-btn header-third">
            <img src={arrowLogo} alt="" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
