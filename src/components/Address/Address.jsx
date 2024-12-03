import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import "./Address.css";
import arrowLeft from "../../assets/arrow-left.png";
import addAddressLogo from "../../assets/plusIcon.png";
import AddressModel from "../AddressModel/AddressModel";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const getToken = () => {
  return localStorage.getItem("token");
};

const Address = () => {
  const [addressModel, setAddressModel] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const getAllAddress = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/address`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAddresses(data.address || []);
      } else {
        toast.error("Failed to fetch addresses");
      }
    } catch (error) {
      toast.error("An error occurred while fetching addresses");
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);

  const addNewAddress = async (newAddress) => {
    if (
      !newAddress.fullAddress ||
      !newAddress.phoneNumber ||
      !newAddress.pinCode ||
      !newAddress.state ||
      !newAddress.city
    ) {
      toast.error("All the address fields are required");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(newAddress),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Address added successfully");
        setAddresses((prevAddresses) => [...prevAddresses, data.address]);
      } else {
        toast.error(data.message || "There is a problem while adding address");
      }
    } catch (error) {
      toast.error("Error occurred while adding address");
    }

    setAddressModel(false);
  };

  const updateAddress = async (updatedAddress) => {
    if (
      !updatedAddress.fullAddress ||
      !updatedAddress.phoneNumber ||
      !updatedAddress.pinCode ||
      !updatedAddress.state ||
      !updatedAddress.city
    ) {
      toast.error("All the address fields are required");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/address/${updatedAddress._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(updatedAddress),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Address updated successfully");
        setAddresses((prevAddresses) =>
          prevAddresses.map((address) =>
            address._id === updatedAddress._id ? updatedAddress : address
          )
        );
      } else {
        toast.error(data.message || "Failed to update address");
      }
    } catch (error) {
      toast.error("Error occurred while updating address");
    }

    setAddressModel(false);
  };

  const removeAddressHandler = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/address/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (response.ok) {
        toast.success("Address removed successfully");
        setAddresses((prevAddresses) =>
          prevAddresses.filter((address) => address._id !== id)
        );
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to remove address");
      }
    } catch (error) {
      toast.error("An error occurred while removing the address");
    }
  };

  const editAddressHandler = (address) => {
    setAddressToEdit(address);
    setAddressModel(true);
  };

  return (
    <div className="address-container">
      <Navbar />
      <SecondNavbar />
      <div className="address--wrapper">
        <div className="address-title--wrapper">
          <img src={arrowLeft} alt="arrow" />
          <h3 className="address-title">Your Addresses</h3>
        </div>
        <div className="address-box--container">
          {isAuthenticated() && (
            <div className="add-address--box">
              <button
                className="add-address--btn"
                onClick={() => setAddressModel(true)}
              >
                <img src={addAddressLogo} alt="plus icon" />
              </button>
              {addressModel && (
                <AddressModel
                  onSaveAddress={addressToEdit ? updateAddress : addNewAddress}
                  addressToEdit={addressToEdit}
                  setAddressToEdit={setAddressToEdit}
                />
              )}
              <p className="add-address">Add Address</p>
            </div>
          )}

          {addresses.map((address) => (
            <div className="address-box" key={address._id}>
              <div className="address-top--wrapper">
                <p className="address-name">Mike Ross</p>
                {address.isDefault && <p className="address-default">Default</p>}
              </div>
              <p className="address-text">{address.fullAddress}</p>
              <p className="address-phone">
                Phone Number: <span>{address.phoneNumber}</span>
              </p>
              {isAuthenticated() && (
                <div className="address-btn--wrapper">
                  <button
                    className="address-btn"
                    onClick={() => editAddressHandler(address)}
                  >
                    Edit
                  </button>
                  <div className="address-line">|</div>
                  <button
                    className="address-btn"
                    onClick={() => removeAddressHandler(address._id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;









