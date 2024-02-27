import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DropDownLevel({ selected, setSelected }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);

  const ratingOptions = [
    {
      rating: "(2049)",
      stars: 5,
      brackets: <span className="drop_rating">{t("Beginner")}</span>,
    },
    {
      rating: "(2049)",
      stars: 4,
      brackets: <span className="drop_rating">{t("Intermediate")}</span>,
    },
    {
      rating: "(2049)",
      stars: 3,
      brackets: <span className="drop_rating">{t("Expert")}</span>,
    },
  ];

  const handleRatingSelect = (option) => {
    setSelected(option.rating);
  };

  return (
    <div className="DropDownRatings">
      <div
        className="dropDownDurations-btn"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="drop_duration_text">
        {t("Level")}<span>▾</span>
        </h3>
      </div>
      <div className={`drop-text_duration ${isActive ? "active" : ""}`}>
        <div className="duration-container">
          {ratingOptions.map((option, index) => (
            <div key={index} className="drop-item_duration">
              <input
              className="input_drop"
                type="checkbox"
                onChange={() => {
                  handleRatingSelect(option);
                  setCheckboxActive(!checkboxActive);
                }}
              />
              <div className="hours_container">
                <span className="rating-text">
                {option.rating}  </span>
                <p>
                {option.brackets}
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
