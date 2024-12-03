import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import arrowLeft from "../../assets/arrow-left.png";
import Navbar from "../Navbar/Navbar";
import arrowRight from "../../assets/ArrowRight.png";
import locationIcon from "../../assets/Icon.png";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import foodItem from "../../assets/Rectangle 11.png";
import Restaurant from "../Restaurants/Restaurant";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToPaymentPage = () => {};
  return (
    <div className="checkout-container">
      <Navbar />
      <SecondNavbar />
      <div className="checkout-wrapper">
        <div className="checkout-title--wrapper">
          <img src={arrowLeft} alt="arrow logo" />
          <h3 className="order-title">Your Order Details</h3>
        </div>
        <div className="order--wrapper">
          <div className="order-container">
            <div className="order-detail--wrapper">
              <div className="order-detail">
                <div className="order-detail--item">
                  <img src={foodItem} alt="food item" />
                  <div className="food-itemName--wrapper">
                    <p className="food-itemName">Royal Cheese Burger</p>
                    <p className="food-itemNumber">1x item</p>
                  </div>
                </div>
                <div className="order-price">
                  <p className="price-text">₹120</p>
                </div>
              </div>
              <div className="border"> </div>
            </div>
            <div className="order-detail--wrapper">
              <div className="order-detail">
                <div className="order-detail--item">
                  <img src={foodItem} alt="food item" />
                  <div className="food-itemName--wrapper">
                    <p className="food-itemName">Royal Cheese Burger</p>
                    <p className="food-itemNumber">1x item</p>
                  </div>
                </div>
                <div className="order-price">
                  <p className="price-text">₹120</p>
                </div>
              </div>
              <div className="border"> </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="notes" className="order-label">
                Notes
              </label>
              <input
                type="text"
                placeholder="Add order notes"
                className="order-note"
              />
            </div>
          </div>
          <div className="order-container--second">
          <Link to="/address" className="address-link">
            <div className="address-wrapper">
              <div className="delivery-address--container">
                <img
                  src={locationIcon}
                  alt="location icon"
                  className="address-location--logo"
                />
                <div className="address-text--wrapper">
                  <p className="delivery-text">Delivery Address</p>
                  <p className="delivery-text--small">
                    45, Green Street,, Sector 12...
                  </p>
                </div>
              </div>
              <div className="arrowRight-container">
                <img src={arrowRight} alt="arrow" />
              </div>
            </div>
          </Link>
            <div className="border"></div>
            <div className="price-wrapper">
              <p className="items">Items</p>
              <p className="items">₹230</p>
            </div>
            <div className="tax-wrapper">
              <p className="items">Sales Tax</p>
              <p className="items">₹10</p>
            </div>
            <div className="border"></div>
            <div className="tax-wrapper">
              <p className="subtotal">Subtotal(3 items)</p>
              <p className="subtotal-price">₹240</p>
            </div>
            <Link to="/payment">
              <button className="order-payment--btn" onClick={goToPaymentPage}>
                Choose Payment Method
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="checkout-wrapper--second"></div>

      <section className="similar-restaurant">
        <div className="similar-container">
          <h3 className="similar-title">Similar Restaurants</h3>
          <Restaurant />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
