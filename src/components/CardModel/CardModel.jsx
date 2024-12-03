import React from 'react'
import "./CardModel.css"

const CardModel = ({showCardModel}) => {
  return (
    <div className='card-overlay--container'>
        <div className="card-overlay">
        <div className="card-wrapper">

            <h3 className="card-title">
                Edit payment method
            </h3>
            <div className="card-input--wrapper">
                <label className='card'>
                    Card Number
                </label>
                <input className='card-input' type="text" placeholder='XXXX XXXX XXXX 1234'/>
            </div>
            <div className="card-input--wrapper">
                <label className='card'>
                    Expiration
                </label>
                <input className='card-input' type="text" placeholder='12/21'/>
            </div>
            <div className="card-input--wrapper">
                <label className='card'>
                     CVV
                </label>
                <input className='card-input' type="text" placeholder='XXXX'/>
            </div>
            <div className="card-input--wrapper">
                <label className='card'>
                    Name on Card
                </label>
                <input className='card-input' type="text" placeholder='Card holder name'/>
            </div>
        </div>

            <div className="card-btn--wrapper">
                <button className="card-remove--btn">
                    Remove
                </button>
                <div className="card-btn--two">
                    <button className='card-cancel--btn' onClick={showCardModel}>Cancel</button>
                    <button className='card-save--btn' onClick={showCardModel}>Save Changes</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CardModel