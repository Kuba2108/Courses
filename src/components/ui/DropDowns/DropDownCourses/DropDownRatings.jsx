import React, { useState } from "react";
import Star from "../../../../assets/svg/Star.svg";
import { useTranslation } from "react-i18next";

export default function DropDownRatings({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();


  const ratingOptions = [
    { rating: "5", stars: 5, brackets: "(1242)" },
    { rating: "4+", stars: 4, brackets: "2145" },
    { rating: "3+", stars: 3, brackets: "(224)" },
    { rating: "2+", stars: 2, brackets: "(2049)" },
    { rating: "1+", stars: 1, brackets: "(2049)" },
  ];

 
  const handleRatingSelect = (option) => {
    setSelected(option.rating);
  };

  return (
    <div className="DropDownRatings">
      <div
        className="dropDownRatings-btn"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="drop_rating_text">
        {t("Ratings")} <span>▾</span>
        </h3>
      </div>
      <div className={`drop-text_rating ${isActive ? "active" : ""}`}>
        <div className="ratings-container">
          {ratingOptions.map((option, index) => (
            <div key={index} className="drop-item_rating">
              <input
              className="input_drop"
                type="checkbox"
                onChange={() => handleRatingSelect(option)}
              />
              <div className="stars-container">
                {[...Array(option.stars)].map((_, idx) => (
                  <img key={idx} src={Star} alt="Star" className="star" />
                ))}
              </div>
              <div className="rating_information">
              <span className="rating-text">
                {option.brackets}
                </span>
                <p >
              {option.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gray_line"></div>
    </div>
  );
}
