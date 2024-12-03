import React from 'react'
import { Link } from 'react-router-dom'
import "./Restaurant.css"



const mcDLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453569/Macdonald_s4x0pb.png";

const papaJohnLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453551/PAPA_JOHNS_f7jrbx.png";

const kfcLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453537/KFC_ufznas.png";

const texasChickenLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453527/Texas-chicken_oje0ou.png";

const burgerKingLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453514/Burger-King_bygljm.png";

const shaurmaLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732453502/Shaurma_gctoli.png";


const Restaurant = () => {
  return (
    <div>
          <div className="restaurant-logo--container">
            <Link to="/products">
              <img src={mcDLogo} alt="mcdonald" className="restaurant-logo" />
            </Link>
            <Link to="/products">
              <img
                src={papaJohnLogo}
                alt="restaurant logo"
                className="restaurant-logo"
              />
            </Link>
            <Link to="/products">
              <img
                src={kfcLogo}
                alt="restaurant logo"
                className="restaurant-logo"
              />
            </Link>
            <Link to="/products">
              <img
                src={texasChickenLogo}
                alt="restaurant logo"
                className="restaurant-logo"
              />
            </Link>
            <Link to="/products">
              <img
                src={burgerKingLogo}
                alt="restaurant logo"
                className="restaurant-logo"
              />
            </Link>
            <Link to="/products">
              <img
                src={shaurmaLogo}
                alt="restaurant logo"
                className="restaurant-logo"
              />
            </Link>
          </div>
    </div>
  )
}

export default Restaurant