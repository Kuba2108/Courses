import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DropDownLanguage({ selected, setSelected }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [checkboxActive, setCheckboxActive] = useState(false);

  const ratingOptions = [
    {
      rating: "(2049)",
      stars: 5,
    brackets: <span className="drop_rating">{t("English")}</span>,
    },
    {
      rating: "(2049)",
      stars: 4,
      brackets: <span className="drop_rating">{t("Espanol")}</span>,
    },
    {
      rating: "(2049)",
      stars: 3,
      brackets: <span className="drop_rating">{t("Melayu")}</span>,
    },
    {
      rating: "(2049)",
      stars: 2,
      brackets: <span className="drop_rating">{t("Bahasa Indonesia")}</span>,
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
          {t("Language")}<span>▾</span>
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
              <div className="hours_container_l">
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
    </div>
  );
}
