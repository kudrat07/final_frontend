import React from 'react'
import appLogo from "../../assets/app-logo.png";
import userLogo from "../../assets/user-logo.png";
import { Link, useLocation} from 'react-router-dom';
import "./SecondNavbar.css"
const SecondNavbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname ==="/home";
  return (
    <div>
    {
      isHomePage ? (<>

        <nav className="nav-container">
        <div>
          <img className="nav-logo" src={appLogo} alt="app-logo" />
        </div>
        <div className="nav-links">

          <Link to="/home" className="nav-links--list" >
            Home
          </Link>
          <Link className="nav-links--list">Broswe Menu</Link>
          <Link className="nav-links--list">Special Offers</Link>
          <Link to="" className="nav-links--list">
            Restaurants
          </Link>
          <Link className="nav-links--list" >Track Order</Link>
        </div>
        <Link to="/profile" className="user-wrapper">
          <img
            src={userLogo}
            alt="user profile logo"
            className="profile-icon"
          />
          <p className="profile-text">Login/Signup</p>
        </Link>
      </nav>

      </>) :(<>

        <nav className="nav-container nav-product">
        <div>
          <img className="nav-logo" src={appLogo} alt="app-logo" />
        </div>
        <div className="nav-links product-nav--links">

          <Link to="/home" className="nav-links--list" >
            Home
          </Link>
          <Link className="nav-links--list">Special Offers</Link>
          <Link to="" className="nav-links--list">
            Restaurants
          </Link>
          <Link className="nav-links--list" >Track Order</Link>
        </div>
        <Link to="/profile" className="user-wrapper">
          <img
            src={userLogo}
            alt="user profile logo"
            className="profile-icon"
          />
          <p className="profile-text">Login/Signup</p>
        </Link>
      </nav>

      </>)
    }

    </div>
  )
}

export default SecondNavbar