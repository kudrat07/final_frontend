import React, { useState } from "react";
import AppLogo from "../../assets/app-logo.png";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css";
const loginImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732074899/signup-img_x4kzcj.jpg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const errorValidate = () => {
    const newError = {};
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newError.error = "Email must contain @";
    } else if (!formData.email.includes(".com")) {
      newError.error = "Email must contain .com";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) {
      toast.error(Object.values(newError)[0]);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorValidate()) {
      try {
        const response = await fetch(`${BACKEND_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          console.log(data.token);
          localStorage.setItem("token", data.token);
          toast.success("Logged in");
          setFormData({
            email: "",
            password: "",
          });
          setError({});
          navigate("/home");
        } else {
          toast.error(data.message || "Login failed. Try again!");
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-container--wrapper">
          <figure className="app-logo--wrapper">
            <img className="app-logo" src={AppLogo} alt="app logo icon" />
          </figure>
          <div className="text-wrapper">
            <h1 className="title">Welcome Back 👋</h1>
            <p className="description">
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
          </div>
          <form className="form-wrapper" noValidate onSubmit={handleSubmit}>
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
            <button className="btn">Sign in</button>
          </form>
          <p className="signUp-text">
            Don't have an account?{" "}
            <span>
              <Link to="/signup" className="signUp-link">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={loginImg} alt="login img" className="login_logo" />
      </div>
    </div>
  );
};

export default Login;
