import React from "react";
import "./Cart.css";
import cartShareLogo from "../../assets/cartShare-logo.png";
import cartLogo from "../../assets/cart-icon.png";
import removeCartLogo from "../../assets/Remove.png";
import freeItemLogo from "../../assets/arrowDownLogo.png";
import couponLogo from "../../assets/forwardBtnGreen.png";
import scooterLogo from "../../assets/Delivery Scooter.png";
import collectionLogo from "../../assets/New Store.png";
import checkoutLogo from "../../assets/forwardBtnWhite.png";
import { useNavigate } from "react-router-dom";
const Cart = ({closeCart}) => {

  const navigate = useNavigate();

  const copyLinkHandler = () => {
    const link = window.location.href;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const handleCheckout = () => {
      navigate("/checkout")
  }

  return (
    <main className="cart-card">
      <section className="share-cls">
        <img src={cartShareLogo} alt="share" />
        <p>
          Share this cart
          <br />
          with your friends
        </p>
        <button onClick={copyLinkHandler}>Copy Link</button>
      </section>

      <section className="cart">
        <div className="cart-cls">
          <img src={cartLogo} alt="cart" />
          My Basket
        </div>
        .
        <section className="basket-cls">
          <section className="purchase-list">
            <div className="product-added-card">
              <div className="item-qnt">
                <p>1x</p>
              </div>
              <div className="added-item">
                <h5>₹120</h5>
                <h6>Royal Cheese Burger</h6>
                <p>With extra fries</p>
              </div>
              <button className="remove-btn">
                <img src={removeCartLogo} alt="del" />
              </button>
            </div>

            <section className="total-pay-cls">
              <div className="sub-total">
                <h6>Sub Total: </h6>
                <p>₹230.00</p>
              </div>

              <div className="sub-total">
                <h6>Discounts:</h6>
                <p>-₹3.00</p>
              </div>

              <div className="sub-total">
                <h6>Delivery Fee:</h6>
                <p>₹3.00</p>
              </div>
            </section>
            <section className="to-pay-cls">
              <div className="to-pay" id="to-pay-sec1">
                <h6>Total to pay</h6>
                <p>₹230.00</p>
              </div>

              <div className="to-pay-btn">
                <button>Choose your free item..</button>
                <img src={freeItemLogo} alt="free-item" />
              </div>

              <div className="to-pay-btn">
                <button>Apply Coupon Code here</button>
                <img src={couponLogo} alt="coupon" />
              </div>
            </section>

            <section className="checkout-cls">
              <div className="checkout">
                <div id="item-delivery">
                  <img src={scooterLogo} alt="delivery" />
                  <h6>Delivery</h6>
                  <p>Starts at 17:50</p>
                </div>

                <div id="collection-cls">
                  <img src={collectionLogo} alt="collection" />
                  <h6>Collection</h6>
                  <p>Starts at 16:50</p>
                </div>
              </div>

              <button id="checkout-btn" onClick={handleCheckout}>
                <img src={checkoutLogo} alt="checkout" />
                  <p>Checkout!</p>
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Cart;
