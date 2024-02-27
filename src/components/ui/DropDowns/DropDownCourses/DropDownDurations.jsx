import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DropDownDurations({ selected, setSelected }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);

  const ratingOptions = [
    {
      rating: "(1242)",
      stars: 5,
      brackets: <span className="drop_rating">{t("1-3 Hours")}</span>,
    },
    {
      rating: "(2145)",
      stars: 4,
      brackets: <span className="drop_rating">{t("3-6 Hours")}</span>,
    },
    {
      rating: "(224)",
      stars: 3,
      brackets: <span className="drop_rating">{t("3-6 Hours")}</span>,
    },
    {
      rating: "(2049)",
      stars: 2,
      brackets: <span className="drop_rating">{t("13+ Hours")}</span>,
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
          {t("Duration")}<span>▾</span>
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
