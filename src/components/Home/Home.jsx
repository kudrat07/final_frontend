import React, {useEffect} from "react";
import appLogo from "../../assets/app-logo.png";
import Icon from "../../assets/google-play-logo.png";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Restaurant from "../Restaurants/Restaurant";
const girlEatingPizzaImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732256539/girl-eating-pizza_ws4no2.png";
const girlEatingChowmingImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732255215/chowmin-eating-girl_zdxugf.png";

const foodItem1 =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732426211/food-item-1_alebwc.png";
const foodItem2 =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732426227/food-item-2_bvzbpa.png";

const burgerImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443283/burger_fast_food_vmf6uq.png";

const pizzaImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443258/pizza-img_fdnizg.png";

const soupImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443175/soup-img_coholb.png";

const breadfastImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443197/breakfast-img_pmv6t0.png";

const saladImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443310/salad_in5gz5.png";

const pasteImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732443310/salad_in5gz5.png";


const laughingImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732466161/friends-laughing-using-mobiles_2_h24hmq.png";

  const shadowImg="https://res.cloudinary.com/duicg4gyd/image/upload/v1732554558/friends-laughing-using-mobiles_1_izansr.png"

const firstChefImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732471840/Baawarchi-1_zsc6gt.png";

const secondChefImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732471864/Baawarchi-2_plo8fp.png";

const iconFirst =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732520952/order-food_1_lrfdwr.png";

const iconSecond =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732520929/food_1_dspaxu.png";

const iconThird =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732520770/order_1_iz2ve2.png";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <SecondNavbar />
      <section className="home-section--container">
        <div className="section-text--wrapper">
          <p className="section-text">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="section-title">Feast Your Senses,</h1>
          <h1 className="section-title section-title--colored">
            Fast and Fresh
          </h1>
          <p className="input-label--text">
            Enter a postal code to see what we deliver
          </p>
          <div className="section-input--wrapper">
            <input
              className="section-input"
              type="text"
              placeholder="e.g. EC4R 3TE"
            />
            <input className="submit-btn" type="submit" value="Search" />
          </div>
        </div>
        <img
          className="section-first--img"
          src={girlEatingPizzaImg}
          alt="girl eating pizza"
        />
        <div className="corner-border">
          <div className="section-order--container">
            <div className="order-wrapper first-order">
              <p className="number-text">1</p>
              <div className="content-wrapper">
                <div className="order-content-wrapper">
                  <img
                    className="section-corner--appLogo"
                    src={appLogo}
                    alt="app logo"
                  />
                  <p className="corner-text text-bold">
                    We’ve Received your order!
                  </p>
                  <p className="corner-text">Awaiting Restaurant acceptance </p>
                </div>
                <p className="now-text">now</p>
              </div>
            </div>
          </div>
          <div className="section-order--container">
            <div className="order-wrapper second-order">
              <p className="number-text">2</p>
              <div className="content-wrapper">
                <div className="order-content-wrapper">
                  <img
                    className="section-corner--appLogo"
                    src={appLogo}
                    alt="app logo"
                  />
                  <p className="corner-text text-bold">
                    Order Accepted! <span className="tick-emoji">✅</span>
                  </p>
                  <p className="corner-text">
                    Your order will be delivered shortly
                  </p>
                </div>
                <p className="now-text">now</p>
              </div>
            </div>
          </div>
          <div className="section-order--container">
            <div className="order-wrapper third-order">
              <p className="number-text">3</p>
              <div className="content-wrapper">
                <div className="order-content-wrapper">
                  <img
                    className="section-corner--appLogo"
                    src={appLogo}
                    alt="app logo"
                  />
                  <p className="corner-text text-bold">Your rider's nearby</p>
                  <p className="corner-text">
                    They're almost there - get ready🎉
                  </p>
                </div>
                <p className="now-text">now</p>
              </div>
            </div>
          </div>
          <img
            className="section-second--img"
            src={girlEatingChowmingImg}
            alt="girl eating chowmin"
          />
        </div>
      </section>
      <section className="home-discount---section flex">
        <div className="home-discount--text flex">
          <h3 className="home-discount--title">
            Up to -40% 🎊 Order.uk exclusive deals
          </h3>
          <nav className="home-discount--links flex">
            <li className="home-discount--item">Vegan</li>
            <li className="home-discount--item">Sushi</li>
            <div className="discount-item--border">
              <li className="home-discount--item item--colored">
                Pizza & fast food
              </li>
            </div>
            <li className="home-discount--item">Others</li>
          </nav>
        </div>
        <div className="discount-image--container flex">
          <div className="discount-image--wrapper">
            <div className="discount-number--wrapper">
              <p className="home-discount--number">-40%</p>
            </div>
            <div className="discount-text--wrapper">
              <p className="restaurant">Restaurant</p>
              <p className="food-name--text">Chef Burgers London</p>
            </div>
            <img
              className="discount-food--img"
              src={foodItem1}
              alt="food image"
            />
          </div>
          <div className="discount-image--wrapper">
            <div className="discount-number--wrapper">
              <p className="home-discount--number">-20%</p>
            </div>
            <div className="discount-text--wrapper">
              <p className="restaurant">Restaurant</p>
              <p className="food-name--text">Grand Ai Cafe London</p>
            </div>
            <img
              className="discount-food--img food-img--center"
              src={foodItem2}
              alt="food image"
            />
          </div>
          <div className="discount-image--wrapper">
            <div className="discount-number--wrapper">
              <p className="home-discount--number">-17%</p>
            </div>
            <div className="discount-text--wrapper">
              <p className="restaurant">Restaurant</p>
              <p className="food-name--text">Butterbrot Caf’e London</p>
            </div>
            <img
              className="discount-food--img"
              src={foodItem1}
              alt="food image"
            />
          </div>
        </div>
      </section>
      <section className="category-container">
        <div className="category-wrapper">
          <h3 className="category-title">Order.uk Popular Categories 🤩</h3>
          <div className="category-img--container">
            <div className="category-img--wrapper">
              <img className="category-img" src={burgerImg} alt="burger" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Burgers &  food</p>
                  <p className="colored-item">21 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="category-img--wrapper">
              <img className="category-img" src={saladImg} alt="burger" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Salads</p>
                  <p className="colored-item">32 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="category-img--wrapper">
              <img className="category-img" src={pasteImg} alt="salad" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Pasta & Casuals</p>
                  <p className="colored-item">4 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="category-img--wrapper">
              <img className="category-img" src={pizzaImg} alt="pizza" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Pizza</p>
                  <p className="colored-item">32 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="category-img--wrapper">
              <img className="category-img" src={breadfastImg} alt="burger" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Breakfast</p>
                  <p className="colored-item">4 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="category-img--wrapper">
              <img className="category-img" src={soupImg} alt="soup" />
              <div className="category-item--wrapper">
                <div className="category-text--wrapper">
                  <p className="category-item">Soups</p>
                  <p className="colored-item">32 Restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-restaurant">
        <div className="restaurant-container">
          <h3 className="restaurant-title">Popular Restaurants</h3>
          <Restaurant />
        </div>
      </section>
      <section className="section-five--home">
        <img
          src={laughingImg}
          alt="boy and girl laughing"
          className="section-five--img"
        />
        <img src={shadowImg} className="section-five--shadowImg"/>
        <div className="section-five--wrapper">
          <div className="imgText-wrapper">
            <img
              src={appLogo}
              alt="app logo"
              className="appLogo-section--five"
            />
            <h3 className="section-five--text">ing is more</h3>
          </div>
          <div className="personalized-text--wrapper">
            <h3 className="personalized-text">
              <span className="colored-text">Personalised</span> & Instant
            </h3>
          </div>
          <p className="section-five--para">
            Download the Order.uk app for faster ordering
          </p>
          <img src={Icon} alt="app store icon" className="section-five--icon" />
        </div>
      </section>
      <section className="section-six--home">
        <img
          src={firstChefImg}
          alt="chef image"
          className="section-chef--img"
        />
        <img
          src={secondChefImg}
          alt="chef image"
          className="section-chef--img"
        />
      </section>
      <section className="section-seven--home">
        <div className="section-seven--container">
          <div className="section-seven--header">
            <h3 className="section-seven--title">Know more about us!</h3>
            <div className="section-seven--nav">
              <li className="seven-nav--list nav-list--bold">Frequent Questions</li>
              <li className="seven-nav--list">Who we are?</li>
              <li className="seven-nav--list">Partner Program</li>
              <li className="seven-nav--list">Help & Support</li>
            </div>
          </div>
            <div className="seven-content--wrapper">
              <div className="seven-content--text">
              <div className="colored-background">
                <p className="section-para colored">How does Order.UK work?</p>
              </div>
                <p className="section-para">
                  What payment methods are accepted?
                </p>
                <p className="section-para">
                  Are there any special discounts or promotions available?
                </p>
                <p className="section-para">
                  Is Order.UK available in my area?
                </p>
              </div>
              <div className="icon-wrapper">
              <div className="icon-container">

                <div className="section-seven--icon">
                  <p className="icon-title">Place an Order!</p>
                  <img src={iconFirst} alt="icon" className="seven-icon" />
                  <p className="seven-para">
                    Place order through our website or Mobile app
                  </p>
                </div>
                <div className="section-seven--icon">
                  <p className="icon-title">Track Progress</p>
                  <img src={iconSecond} alt="icon" className="seven-icon" />
                  <p className="seven-para">
                    You can track your order status with delivery time
                  </p>
                </div>
                <div className="section-seven--icon">
                  <p className="icon-title">Get your Order!</p>
                  <img src={iconThird} alt="icon" className="seven-icon" />
                  <p className="seven-para">
                    Receive your order at a lighing fast speed!
                  </p>
                </div>
              </div>
                <div className="icon-para">
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="stats-container">
          <div className="content">
            <h2 className="content-text">546+</h2>
            <h4 className="content-text--small">Registered Riders</h4>
          </div> 
          <div className="line"></div>   
          <div className="content">
            <h2 className="content-text">789,900+</h2>
            <h4 className="content-text--small">Ordered Delivered</h4>
          </div> 
          <div className="line"></div>   
          <div className="content">
            <h2 className="content-text">690+</h2>
            <h4 className="content-text--small">Restaurants Partnered</h4>
          </div> 
          <div className="line"></div>   
          <div className="content">
            <h2 className="content-text">17,547+</h2>
            <h4 className="content-text--small">Food Items</h4>
          </div> 
      </section>
    </div>
  );
};

export default Home;
