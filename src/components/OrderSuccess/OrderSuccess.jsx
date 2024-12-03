import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import "./OrderSuccess.css";
import orderLogo from "../../assets/right-mark.png";

const OrderSuccess = () => {
  return (
    <div className="order-success--container">
      <Navbar />
      <SecondNavbar />

      <div className="success-container">
    
        
            <img
              src={orderLogo}
              alt="order success"
              className="orderSuccess-logo"
            />
          <p className="order-text">Order Placed Successfully</p>
          <p className="order-para">
            Your order is confirmed and on its way. Get set to savor your chosen
            delights!
          </p>
          <div className="ordered-items--wrapper">
            <p className="ordered-item">Royal Cheese Burger</p>
            <p className="ordered-item">Potato Veggies</p>
            <p className="ordered-item">Coke Coca Cola</p>

            <Link to="/home" className="goToHome-link">
              <button className="backToHome-btn">Back to Home</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
