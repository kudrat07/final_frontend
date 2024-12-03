import React, { useState, useEffect } from "react";
import "./AddressModel.css";
import locationIcon from "../../assets/location.png";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Delhi", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const AddressModel = ({ onSaveAddress, addressToEdit, setAddressToEdit }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    if (addressToEdit) {
      setState(addressToEdit.state);
      setCity(addressToEdit.city);
      setPinCode(addressToEdit.pinCode);
      setPhoneNumber(addressToEdit.phoneNumber);
      setFullAddress();
    } else {
      setState("");
      setCity("");
      setPinCode("");
      setPhoneNumber("");
      setFullAddress("");
    }
  }, [addressToEdit]);

  const handleSave = () => {
    const updatedAddress = {
      _id: addressToEdit ? addressToEdit._id : undefined, 
      state,
      city,
      pinCode,
      phoneNumber,
      fullAddress: `${fullAddress}, ${city}, ${state}, ${pinCode}`,
      name: "Mike Ross", 
    };

    onSaveAddress(updatedAddress); 
    setAddressToEdit(null); 
  };

  return (
    <div className="overlay__container">
      <div className="overlay">
        <div className="modal-title--wrapper">
          <div className="location-img--wrapper">
            <img src={locationIcon} alt="Location Icon" />
          </div>
          <h3 className="modal-title">{addressToEdit ? "Edit Address" : "Add Address"}</h3>
        </div>

        <div className="address-input--wrapper">
          <div className="address-inputt">
            <select
              className="address-input--state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="" disabled>State</option>
              {statesOfIndia.map((stateName, index) => (
                <option key={index} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>

          <div className="address-input">
            <input
              type="text"
              placeholder="City/District"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="address-input"
            />
          </div>
          <div className="address-input">
            <input
              type="text"
              placeholder="Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="address-input"
            />
          </div>
          <div className="address-input">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="address-input"
            />
          </div>
        </div>

        <div className="fullAddress">
          <textarea
            name="fullAddress"
            id="fullAddress"
            placeholder="Enter full address"
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            className="fullAddress-input"
          ></textarea>
        </div>

        <button className="address-save--btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddressModel;















