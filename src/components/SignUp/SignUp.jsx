import React from "react";
import AppLogo from "../../assets/app-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./SignUp.css";
const loginImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732074899/signup-img_x4kzcj.jpg";

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SignUp = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setError] = useState({});

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const errorValidate = () => {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Name is required";
    } else if (formData.name.length < 3) {
      newError.name = "Name must be greater than 2";
    }
    if (!formData.mobile.trim()) {
      newError.mobile = "Mobile is required";
    } else if (formData.mobile.length !== 10) {
      newError.mobile = "Mobile number should only contain 10 digits";
    } else if (/[^0-9]/.test(formData.mobile)) {
      newError.mobile = "Mobile number can only contain digits";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newError.email = "Email must contain @";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required";
    } else if (formData.password.length < 7) {
      newError.password = "Minimum 8 digit password";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) {
      toast.error(Object.values(newError)[0]);
      return false;
    }
    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (errorValidate()) {
      console.log(formData);

      try {


        const response = await fetch(`${BACKEND_URL}/signup`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(formData),
        });
        

        const data = await response.json();
        if (response.ok) {
          toast.success("Registration successful");
          setFormData({
            name: "",
            mobile: "",
            email: "",
            password: "",
          });
          setError({});
          navigate("/");
        } else {
          toast.error(data.message || "Registration failed. Try again!");
        }
      } catch (error) {
        toast.error("Network  error. Please try again later.");
      }
    }
  };

  return (
    <div className="signup-container container">
      <div className="form-container">
        <div className="form-container--wrapper signup-form--container">
          <figure className="app-logo--wrapper">
            <img
              className="app-logo app-logo--signup"
              src={AppLogo}
              alt="app logo icon"
            />
          </figure>
          <div className="text-wrapper">
            <h1 className="title">Welcome👋</h1>
            <p className="description">
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
          </div>
          <form className="form-wrapper" noValidate onSubmit={submitHandler}>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={inputHandler}
                placeholder="Eg. John A"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={inputHandler}
                placeholder="Enter your 10 digit mobile number"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={inputHandler}
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={inputHandler}
                placeholder="At least 8 characters"
              />
            </div>
            <button className="btn">Continue</button>
          </form>
          <p className="signUp-text">
            Already have an account?{" "}
            <span>
              {" "}
              <Link className="signUp-link" to="/">
                Sign in
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={loginImg} alt="login img" className="signup-logo" />
      </div>
    </div>
  );
};

export default SignUp;
