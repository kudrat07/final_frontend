import React, { useState, useEffect } from "react";
import "./Products.css";
import bikeIcon from "../../assets/bike-icon.png";
import tickIcon from "../../assets/completed-icon.png";
import clockIcon from "../../assets/Clock.png";
import searchIcon from "../../assets/search-icon.png";
import plusIcon from "../../assets/Plus.png";
import trackIcon from "../../assets/Tracking.png";
import completeIcon from "../../assets/ID Verified.png";
import rotatedClock from "../../assets/product-clock.png";
import Map from "../Map/Map";
import Cart from "../Cart/Cart"
import Review from "../Feedback/Feedback"
import Restaurant from "../Restaurants/Restaurant";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import { useLocation } from "react-router-dom";

const backgroundImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732603468/background-burger-img_oetzmt.png";

const burgerImgTop =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732613524/product-header-burger_hyajtj.png";

const ratingLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732613611/rating-logo_u7kyci.png";

const girlLaughing =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604796/girl-photo_qkwpon.png";

const boyAndGirlLaughing =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604815/girl-and-boy_vnusvn.png";

const iceCreamImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604830/ice-cream_xqiqxr.png";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Products = () => {
  const location = useLocation();
  const [allItems, setAllItems] = useState([]);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(location.state?.openCart || false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${BACKEND_URL}/allItems`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setAllItems(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const closeCart = () => {
    console.log(showCart);
    setShowCart(false)
    console.log("close cart")

  }
console.log(showCart)

  const burgersObjects =
    allItems.categories && allItems.categories.length > 0
      ? allItems.categories[0]
      : null;

  const friesObject =
    allItems.categories && allItems.categories.length > 0
      ? allItems.categories[1]
      : null;

  const iceCreamObjects =
    allItems.categories && allItems.categories.length > 0
      ? allItems.categories[2]
      : null;

  const burgers =
    burgersObjects && Array.isArray(burgersObjects.objects)
      ? burgersObjects.objects
      : [];

  const fries =
    friesObject && Array.isArray(friesObject.objects)
      ? friesObject.objects
      : [];

  const drinks =
    iceCreamObjects && Array.isArray(iceCreamObjects.objects)
      ? iceCreamObjects.objects
      : [];

  return (
    <div className="product-container">
      <Navbar/>
      <SecondNavbar />
      <div className="product-header--container">
        <img src={backgroundImg} className="product-header--bgImg" />
        <div className="product-header--wrapper">
          <div className="product-header--text">
            <p className="produuct-header--first text-white">I'm lovin it!</p>
            <h1 className=" product-header--title text-white">
              McDonald’s East London
            </h1>
            <div className="product-icon--container">
              <div className="product-icon--wrapper">
                <img src={tickIcon} className="product-header--icon" />
                <p className="product-icon--text text-white">
                  Minimum Order: 12 GBP
                </p>
              </div>
              <div className="product-icon--wrapper">
                <img src={bikeIcon} className="product-header--icon" />
                <p className="product-icon--text text-white">
                  Delivery in 20-25 Minutes
                </p>
              </div>
            </div>
          </div>
          <div className="header-img--wrapper">
            <img src={burgerImgTop} alt="" className="product-header--img" />
            <img src={ratingLogo} alt="" className="product-rating--logo" />
          </div>
          <div></div>
        </div>
        <div className="product-clockIcon--wrapper">
          <img src={clockIcon} className="clockIcon" />
          <p className="clock-icon--text text-white">Open until 3:00 AM</p>
        </div>
      </div>
      <div className="product-search--container">
        <h2 className="product-search--title">
          All Offers from McDonald’s East London
        </h2>
        <div className="product-input--wrapper">
          <img
            src={searchIcon}
            alt="search icon"
            className="product-search--icon"
          />
          <input
            type="text"
            placeholder="Search from menu..."
            className="product-input"
          />
        </div>
      </div>
      <div className="product-items--container">
        <div className="product-item-wrapper">
          <p className="product-item item-first">Offers</p>
          <p className="product-item">Burgers</p>
          <p className="product-item">Fries</p>
          <p className="product-item">Snacks</p>
          <p className="product-item">Salads</p>
          <p className="product-item">Cold drinks</p>
          <p className="product-item">Happy Meal®</p>
          <p className="product-item">Desserts</p>
          <p className="product-item">Hot drinks</p>
          <p className="product-item">Sauces</p>
          <p className="product-item">Orbit®</p>
        </div>
      </div>
      <main className="product-content--container">
        <div className="product-main">
        <div className="product-main--first">
          <div className="product-img--container flex">
            <div className="product-image--wrapper">
              <img
                className="product-food--img"
                src={girlLaughing}
                alt="food image"
              />
            </div>
            <div className="product-image--wrapper">
              <img
                className="product-food--img food-img--center"
                src={boyAndGirlLaughing}
                alt="food image"
              />
            </div>
            <div className="product-image--wrapper">
              <img
                className="product-food--img"
                src={iceCreamImg}
                alt="food image"
              />
            </div>
          </div>
          <div className="product-wrapper">
            <h3 className="product-food--name">Burgers</h3>
            <div className="product-food--wrapper">
              {burgers.map((burger, index) => (
                <div className="product-food--container" key={index}>
                  <div className="product-text--wrapper">
                    <h4 className="product-food--title">{burger.title}</h4>
                    <p className="product-food--description">
                      {burger.description}
                    </p>
                    <p className="product-food--price">{burger.price}</p>
                  </div>
                  <div className="product-img--wrapper">
                    <img
                      src={burger.img_url}
                      alt="burger img"
                      className="burger-img"
                    />
                    <div className="plus-icon--wrapper">
                      <img src={plusIcon} alt="icon" className="plus-icon" />
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img" />
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="product-wrapper">
            <h3 className="product-food--name food-title--colored">Fries</h3>
            <div className="product-food--wrapper">
              {fries.map((frie, index) => (
                <div className="product-food--container" key={index}>
                  <div className="product-text--wrapper">
                    <h4 className="product-food--title">{frie.title}</h4>
                    <p className="product-food--description">
                      {frie.description}
                    </p>
                    <p className="product-food--price">{frie.price}</p>
                  </div>
                  <div className="product-img--wrapper">
                    <img
                      src={frie.img_url}
                      alt="burger img"
                      className="burger-img"
                    />
                    <div className="plus-icon--wrapper">
                      <img src={plusIcon} alt="icon" className="plus-icon" />
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
              {/* <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img" />
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="product-wrapper">
            <h3 className="product-food--name food-title--colored">
              Cold Drinks
            </h3>
            <div className="product-food--wrapper">
              {drinks.map((item, index) => (
                <div className="product-food--container" key={index}>
                  <div className="product-text--wrapper">
                    <h4 className="product-food--title">{item.title}</h4>
                    <p className="product-food--description">
                      {item.description}
                    </p>
                    <p className="product-food--price">{item.price}</p>
                  </div>
                  <div className="product-img--wrapper">
                    <img
                      src={item.img_url}
                      alt="burger img"
                      className="burger-img"
                    />
                    <div className="plus-icon--wrapper">
                      <img src={plusIcon} alt="icon" className="plus-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="product-main--second">
          {showCart && <Cart closeCart={closeCart} />}

           
          </div>
        </div>
        <div className="product-lists--container">
          <div className="list-items">
            <div className="list-item--wrapper">
              <div className="list-title--wrapper">
                <img src={trackIcon} alt="icon" className="track-icon" />
                <h3 className="list-title">Delivery Information</h3>
              </div>
              <p className="list">
                <span className="list-day--name">Monday:</span>
                12:AM-3AM, 8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Tuesday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Wednesday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Thursday</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Friday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Sunday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">
                  Estimated time until delivery:&nbsp;
                </span>
                20 min
              </p>
            </div>
          </div>
          <div className="list-items">
            <div className="list-item--wrapper">
              <div className="list-title--wrapper">
                <img src={completeIcon} alt="icon" className="track-icon" />
                <h3 className="list-title">Contact Information</h3>
              </div>
              <p className="list-text">
                If you have allergies or other dietary restrictions, please
                contact the restaurant. The restaurant will provide
                food-specific information upon request.
                <div className="list-text--bold">Phone number</div>
                +934443-43
                <br />
                <div className="list-text--bold">Website</div>
                http://mcdonalds.uk/
              </p>
            </div>
          </div>
          <div className="list-items list-items--third">
            <div className="list-item--wrapper">
              <div className="list-title--wrapper">
                <img src={rotatedClock} alt="icon" className="track-icon" />
                <h3 className="list-title list-title--third">
                  Operational Times
                </h3>
              </div>
              <p className="list">
                <span className="list-day--name">Monday:</span>8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Tuesday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Wednesday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Thursday</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Friday:</span>
                8:00 AM-3:00 AM
              </p>
              <p className="list">
                <span className="list-day--name">Sunday:</span>
                8:00 AM-3:00 AM
              </p>
            </div>
          </div>
        </div>
        <div className="map-container">
          <Map />
        </div>
        <Review />
        <section className="similar-restaurant">
        <div className="similar-container">
          <h3 className="similar-title">Similar Restaurants</h3>
          <Restaurant />
        </div>
      </section>
      </main>
    </div>
  );
};

export default Products;
