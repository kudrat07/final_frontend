// import React from "react";
// import prevBtn from "../../assets/prev-icon.png";
// import nextBtn from "../../assets/next-icon.png";
// import ratingLogo from "../../assets/star-rating-icon.png";
// import profileLogo from "../../assets/feedback-logo.png";
// import timeSpanLogo from "../../assets/time-span-logo.png";
// import "./Feedback.css";

// const prevReview = () => {
//   alert("prev button clicked")

// }
// const nextReview = () => {
//   alert("next button clicked")

// }

// const Feedback = () => {
//   return (
//     <div className="feedback-content--wrapper">
//       <div className="feedback-container">
//         <div className="feedback-title--wrapper">
//           <h3 className="feedback-title">Customer Reviews</h3>
//           <div className="btn-wrapper">
//             <button className="scroll-btn" onClick={prevReview}>
//               <img src={prevBtn} alt="btn-icon" className="btn-logo"/>
//             </button>
//             <button className="scroll-btn" onClick={nextReview}>
//               <img src={nextBtn} alt="btn-icon" className="btn-logo"/>
//             </button>
//           </div>
//         </div>
//         <div className="feedback-wrapper--container">
//         <div className="feedback-wrapper">
//           <div className="feedback-top--wrapper">
//             <div className="feedback-profile">
//               <img src={profileLogo} alt="logo" />
//               <div className="feedback-divider"></div>
//               <div className="name-wrapper">
//                 <p className="customer-name">St Glx</p>
//                 <p className="customer-location">South London</p>
//               </div>
//             </div>
//             <div className="rating-wrapper">
//               <img src={ratingLogo} alt="logo" className="rating-starLogo" />
//               <div className="date-wrapper">
//                 <img src={timeSpanLogo} className="timeStamp-logo"/>
//                 <p className="date-text">24th September, 2023</p>
//               </div>
//             </div>
//           </div>
//           <p className="feedback-description">
//             The positive aspect was undoubtedly the efficiency of the service.
//             The queue moved quickly, the staff was friendly, and the food was up
//             to the usual McDonald's standard – hot and satisfying.
//           </p>
//         </div>
//         <div className="feedback-wrapper">
//           <div className="feedback-top--wrapper">
//             <div className="feedback-profile">
//               <img src={profileLogo} alt="logo" />
//               <div className="feedback-divider"></div>
//               <div className="name-wrapper">
//                 <p className="customer-name">St Glx</p>
//                 <p className="customer-location">South London</p>
//               </div>
//             </div>
//             <div className="rating-wrapper">
//               <img src={ratingLogo} alt="logo" className="rating-starLogo" />
//               <div className="date-wrapper">
//                 <img src={timeSpanLogo} className="timeStamp-logo"/>
//                 <p className="date-text">24th September, 2023</p>
//               </div>
//             </div>
//           </div>
//           <p className="feedback-description">
//             The positive aspect was undoubtedly the efficiency of the service.
//             The queue moved quickly, the staff was friendly, and the food was up
//             to the usual McDonald's standard – hot and satisfying.
//           </p>
//         </div>
//         <div className="feedback-wrapper">
//           <div className="feedback-top--wrapper">
//             <div className="feedback-profile">
//               <img src={profileLogo} alt="logo" />
//               <div className="feedback-divider"></div>
//               <div className="name-wrapper">
//                 <p className="customer-name">St Glx</p>
//                 <p className="customer-location">South London</p>
//               </div>
//             </div>
//             <div className="rating-wrapper">
//               <img src={ratingLogo} alt="logo" className="rating-starLogo" />
//               <div className="date-wrapper">
//                 <img src={timeSpanLogo} className="timeStamp-logo"/>
//                 <p className="date-text">24th September, 2023</p>
//               </div>
//             </div>
//           </div>
//           <p className="feedback-description">
//             The positive aspect was undoubtedly the efficiency of the service.
//             The queue moved quickly, the staff was friendly, and the food was up
//             to the usual McDonald's standard – hot and satisfying.
//           </p>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;



import React, { useState } from "react";
import prevBtn from "../../assets/prev-icon.png";
import nextBtn from "../../assets/next-icon.png";
import ratingLogo from "../../assets/star-rating-icon.png";
import profileLogo from "../../assets/feedback-logo.png";
import timeSpanLogo from "../../assets/time-span-logo.png";
import reviewLogo from "../../assets/rating-logo.png"
import "./Feedback.css";

const reviews = Array.from({ length: 9 }, (_, i) => ({
  name: `Customer ${i + 1}`,
  location: `Location ${i + 1}`,
  date: "24th September, 2023",
  description:
    "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
}));

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const reviewsToShow = 3; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + reviewsToShow) % reviews.length
    ); 
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - reviewsToShow + reviews.length) % reviews.length
    ); 
  };

  return (
    <div className="feedback-content--wrapper">
      <div className="feedback-container">
        <div className="feedback-title--wrapper">
          <h3 className="feedback-title">Customer Reviews</h3>
          <div className="btn-wrapper">
            <button
              className="scroll-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0} 
            >
              <img src={prevBtn} alt="Previous" className="btn-logo" />
            </button>
            <button
              className="scroll-btn"
              onClick={handleNext}
              disabled={currentIndex + reviewsToShow >= reviews.length} 
            >
              <img src={nextBtn} alt="Next" className="btn-logo" />
            </button>
          </div>
        </div>

        <div className="feedback-wrapper--container">
          {reviews
            .slice(currentIndex, currentIndex + reviewsToShow)
            .map((review) => (
              <div className="feedback-wrapper" key={review.id}>
                <div className="feedback-top--wrapper">
                  <div className="feedback-profile">
                    <img src={profileLogo} alt="logo" />
                    <div className="feedback-divider"></div>
                    <div className="name-wrapper">
                      <p className="customer-name">{review.name}</p>
                      <p className="customer-location">{review.location}</p>
                    </div>
                  </div>
                  <div className="rating-wrapper">
                    <img
                      src={ratingLogo}
                      alt="logo"
                      className="rating-starLogo"
                    />
                    <div className="date-wrapper">
                      <img
                        src={timeSpanLogo}
                        className="timeStamp-logo"
                        alt="time-logo"
                      />
                      <p className="date-text">{review.date}</p>
                    </div>
                  </div>
                </div>
                <p className="feedback-description">{review.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="review-img--wrapper">
      <img src={reviewLogo} alt="review  logo" className="review-img"/>
      </div>
    </div>
  );
};

export default Feedback;













