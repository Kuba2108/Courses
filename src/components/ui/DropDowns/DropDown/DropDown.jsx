import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();
  
  const options = [
    t("All"),
    t("Business"),
    t("Art & Design"),
    t("Development"),
    t("Marketing"),
    t("Account")
  ];

  return (
    <div className="DropDown">
      <div className="dropDown-btn" onClick={(e) => setIsActive(!isActive)}>
        <h3>
          {t("Category")} <span>▾</span>
        </h3>
      </div>
      <div className={`drop-text ${isActive ? 'active' : ''}`}>
        {options.map((option, index) => (
          <div 
            key={index} 
            onClick={(e) => {
              setSelected(option)
              setIsActive(false)
            }}
            className="drop-item">
            {option === t("Account") ? (
              <Link style={{
                textDecoration: "none",
                color: "#000"
              }} to="/account">{option}</Link>
            ) : (
              option
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
