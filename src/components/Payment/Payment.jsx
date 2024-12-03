// import React from "react";
// import { Link } from "react-router-dom";
// import "./Payment.css";
// import Navbar from "../Navbar/Navbar";
// import SecondNavbar from "../SecondNavbar/SecondNavbar";
// import leftArrowLogo from "../../assets/arrow-left.png";
// import rightArrowLogo from "../../assets/ArrowRight.png";
// import walletIcon from "../../assets/wallet-icon.png";
// import masterLogo from "../../assets/m-card-icon.png";
// import stripeLogo from "../../assets/stripe-icon.png";
// import addLogo from "../../assets/Add.png";

// const Payment = () => {
//   const setPayment = () => {
//     alert("payment button clicked");
//   };
//   return (
//     <div className="payment-container">
//       <Navbar />
//       <SecondNavbar />
//       <div className="payment-wrapper">
//         <div className="payment-title--wrapper">
//           <img src={leftArrowLogo} alt="left arrow icon" />
//           <h3 className="payment-title">Choose and Pay</h3>
//         </div>
//         <div className="payment-container--wrapper">
//           <div className="payment-methods">
//             <div className="payment-method--container" onClick={setPayment}>
//               <div className="payment-icon--wrapper">
//               <div className="wallet-icon--wrapper">
//                 <img
//                   src={walletIcon}
//                   alt="wallet icon"
//                   className="wallet-icon"
//                 />
//               </div>
//                 <div className="payment-method--name">
//                   <h4 className="wallet-title">Wallet</h4>
//                   <p className="wallet-amount">Available balance: ₹300</p>
//                 </div>
//               </div>
//               <div className="payment-select">
//                 <img src={rightArrowLogo} alt="left icon" className="icon-right"/>
//               </div>
//             </div>

//             <div className="border-bottom"></div>

//             <div className="payment-method--container payment-method">
//               <div className="payment-icon--wrapper">
//                 <img src={masterLogo} alt="" />
//                 <h4 className="paypal-method--name">MaestroKard</h4>
//               </div>

//               <input type="radio" id="payment" name="payment" className="icon-right"/>
//             </div>

//             <div className="payment-method--container payment-method">
//               <div className="payment-icon--wrapper">
//                 <img src={stripeLogo} alt="" />
//                 <h4 className="paypal-method--name">Stripe</h4>
//               </div>

//               <input type="radio" id="payment" name="payment" className="icon-right"/>
//             </div>

           

//             <div className="payment-method--container payment-method">
//               <div className="payment-icon--wrapper">
//                 <img src={addLogo} alt="" />
//                 <h4 className="paypal-method--name">Add Debit Card</h4>
//               </div>
//             </div>
//           </div>
//           <div className="proceedToPayment">
//             <div className="amount-wrapper">
//                 <p className="amount-title">Amount to be paid</p>
//                 <p className="amount">
//                 ₹240
//                 </p>

//             </div>
//             <div className="border-bottom"></div>
//             <Link to="/order-success" className="payment-link">
//                 <button className="payment-btn">Proceed Payment</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import leftArrowLogo from "../../assets/arrow-left.png";
import rightArrowLogo from "../../assets/ArrowRight.png";
import walletIcon from "../../assets/wallet-icon.png";
import masterLogo from "../../assets/m-card-icon.png";
import stripeLogo from "../../assets/stripe-icon.png";
import addLogo from "../../assets/Add.png";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
    setShowToast(false); // Hide toast if a method is selected
  };

  const handleProceedPayment = () => {
    if (!selectedPayment) {
      setShowToast(true); // Show toast if no method is selected
    } else {
      // Proceed to the order-success page
      console.log("Proceeding with payment:", selectedPayment);
      navigate("/order-success")
    }
  };

  return (
    <div className="payment-container">
      <Navbar />
      <SecondNavbar />
      <div className="payment-wrapper">
        <div className="payment-title--wrapper">
          <img src={leftArrowLogo} alt="left arrow icon" />
          <h3 className="payment-title">Choose and Pay</h3>
        </div>
        <div className="payment-container--wrapper">
          <div className="payment-methods">
            <div
              className={`payment-method--container ${
                selectedPayment === "wallet" ? "selected" : ""
              }`}
              onClick={() => handlePaymentSelection("wallet")}
            >
              <div className="payment-icon--wrapper">
                <div className="wallet-icon--wrapper">
                  <img
                    src={walletIcon}
                    alt="wallet icon"
                    className="wallet-icon"
                  />
                </div>
                <div className="payment-method--name">
                  <h4 className="wallet-title">Wallet</h4>
                  <p className="wallet-amount">Available balance: ₹300</p>
                </div>
              </div>
              <div className="payment-select">
                <img
                  src={rightArrowLogo}
                  alt="left icon"
                  className="icon-right"
                />
              </div>
            </div>

            <div className="border-bottom"></div>

            <div
              className={`payment-method--container payment-method ${
                selectedPayment === "maestro" ? "selected" : ""
              }`}
              onClick={() => handlePaymentSelection("maestro")}
            >
              <div className="payment-icon--wrapper">
                <img src={masterLogo} alt="MaestroKard logo" />
                <h4 className="paypal-method--name">MaestroKard</h4>
              </div>
              <input
                type="radio"
                id="payment"
                name="payment"
                className="icon-right"
                checked={selectedPayment === "maestro"}
                onChange={() => handlePaymentSelection("maestro")}
              />
            </div>

            <div
              className={`payment-method--container payment-method ${
                selectedPayment === "stripe" ? "selected" : ""
              }`}
              onClick={() => handlePaymentSelection("stripe")}
            >
              <div className="payment-icon--wrapper">
                <img src={stripeLogo} alt="Stripe logo" />
                <h4 className="paypal-method--name">Stripe</h4>
              </div>
              <input
                type="radio"
                id="payment"
                name="payment"
                className="icon-right"
                checked={selectedPayment === "stripe"}
                onChange={() => handlePaymentSelection("stripe")}
              />
            </div>

            <div className="payment-method--container payment-method">
              <div className="payment-icon--wrapper">
                <img src={addLogo} alt="Add Debit Card" />
                <h4 className="paypal-method--name">Add Debit Card</h4>
              </div>
            </div>
          </div>
          <div className="proceedToPayment">
            <div className="amount-wrapper">
              <p className="amount-title">Amount to be paid</p>
              <p className="amount">₹240</p>
            </div>
            <div className="border-bottom"></div>
            <button
              className="payment-btn"
              onClick={handleProceedPayment}
            >
              Proceed Payment
            </button>
            {showToast && (
              <div className="toast">
                <p>Please choose a payment option</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

