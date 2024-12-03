
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import SecondNavbar from '../SecondNavbar/SecondNavbar';
import CardModel from '../CardModel/CardModel';
import leftArrow from "../../assets/arrow-left.png";
import profileLogo from "../../assets/profile-logo.png";
import cardIcon from "../../assets/card-icon.png";
import editIcon from "../../assets/edit-icon.png";
import addCardIcon from "../../assets/plusIcon.png";
import toast from 'react-hot-toast';

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("");
  const[editName, setEditName]  = useState();
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); 
      if (!token) {
        toast.error("No token found, please log in again.");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${BACKEND_URL}/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });
        const data = await response.json();
        if (response.ok) {
            const user = Array.isArray(data.userDetails) ? data.userDetails[0] : data.userDetails;
            if (user) {
              setName(user.name);
              setEditName(user.name);
              setEmail(user.email);
              setGender(user.gender || "");
              setCountry(user.country || "");
              setUserId(user._id);
            } else {
              toast.error("No user details found");
            }
          } else {
            toast.error(data.message || "Failed to fetch user details");
          }
          
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("An error occurred while fetching user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

 
  // Function to toggle edit mode
  const handleEditClick = async () => {
    if (isEditable) {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found, please log in again.");
        return;
      }
      if (!userId) {
        toast.error("User ID not found. Please refresh and try again.");
        return;
      }

      try {
        const response = await fetch(`${BACKEND_URL}/profile/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: editName, gender, country }),
        });
        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message || "Failed to update profile");
        } else {
          toast.success("Profile updated successfully!");
          setName(editName);
        }
      } catch (error) {
        console.error("Update error:", error);
        toast.error("An error occurred while updating profile");
      }
    }
    setIsEditable(!isEditable); 
  };

  if (loading) {
    return <p className='loading-profile'>Loading...</p>;
  }

  const showCardModel = () => {
    setShowCard((prev) => !prev)
  }

  return (
    <div className='profile-container'>
      <Navbar />
      <SecondNavbar />
      <div className="profile-wrapper">
        <div className="profile-title--wrapper">
          <img src={leftArrow} alt="arrow logo" className='profile-title--arrow'/>
          <h3 className='myProfile-text'>My Profile</h3>
        </div>
        <div className="profile-top--wrapper">
          <div className="profile-pic--wrapper">
            <img src={profileLogo} alt="profile-logo" className='profile-logo'/>
            <p className="profile-user--name">{name}</p>
          </div>
          <button className='profile-edit--btn' onClick={handleEditClick}>
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
        <div className="profile-input--wrapper">
          <div className="profile-user--info">
            <div className="profile-first--input">
              <div className="profile-input">
                <label htmlFor="name" className='profile-label--text'>Name</label>
                <input
                  type="text"
                  value={editName}
                  className={`profile-input--field ${isEditable ? 'editable' : ''}`}
                  onChange={(e) => setEditName(e.target.value)}
                  disabled={!isEditable}
                />
              </div>
              <div className="profile-input">
                <label htmlFor="gender" className='profile-label--text'>Gender</label>
                <input
                  type="text"
                  value={gender}
                  className={`profile-input--field ${isEditable ? 'editable' : ''}`}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isEditable}
                />
              </div>
            </div>
            <div className="profile-second--input">
              <div className="profile-input">
                <label htmlFor="email" className='profile-label--text'>Email</label>
                <input
                  type="text"
                  value={email}
                  className={`profile-input--field ${isEditable ? 'editable' : ''}`}
                  disabled
                />
              </div>
              <div className="profile-input">
                <label htmlFor="country" className='profile-label--text'>Country</label>
                <input
                  type="text"
                  value={country}
                  className={`profile-input--field ${isEditable ? 'editable' : ''}`}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={!isEditable}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-border"></div>
        <div className="cards-container">
          <h3 className="saved-card--text">Saved Payment Methods</h3>
          <div className="saved-card--wrapper">
            <div className="saved-card--container">
              <img src={cardIcon} alt="card icon" className='payment-card--icon'/>
              <div className="card-number--wrapper">
                <p className="card-number">XXXX XXXX XXXX 1324</p>
                <p className="card-name">Mike</p>
              </div>
              <button className='edit-icon--btn'>
                <img src={editIcon} alt="card edit icon" className='card-edit--icon'/>
              </button>
            </div>
            <div className="saved-card--container">
              <button className="add-card--btn" onClick={showCardModel}>
                <img src={addCardIcon} alt="card icon" className='payment-card--icon'/>
              </button>
              {showCard && <CardModel showCardModel={showCardModel}/>}
              <p className="card-number">Add New Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


