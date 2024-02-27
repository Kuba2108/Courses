import React from "react";
import { useTranslation } from "react-i18next";
import ArtDesign from "../../assets/img/ArtDesign.png";
import Business from "../../assets/img/Business.png";
import CopyWriting from "../../assets/img/Copy-writing.png"
import Marketing from "../../assets/img/Marketing.png"
import Programming from "../../assets/img/Programming.png"
import Photography from "../../assets/img/Photography.png"
import Videography from "../../assets/img/Videography.png"
import PersonalDevelopment from "../../assets/img/Personal-Development.png"
import { useNavigate } from "react-router-dom";
 
const TopCategories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="container top_categories">
      <h1 className="top_categories_text">{t("Top Categories")}</h1>
      <div className="top_cards">
        <div className="card_categories">
          <img className="categories_img" src={ArtDesign} alt="" />
          <button className="categories_name">{t("Art & Design")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={Business} alt="" />
          <button className="categories_name">{t("Business")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={CopyWriting} alt="" />
          <button className="categories_name">{t("Copy Writing")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={Marketing} alt="" />
          <button className="categories_name">{t("Marketing")}</button>
        </div>
        <div onClick={() => {
          navigate(`/courses`)
        }} className="card_categories">
          <img className="categories_img" src={Programming} alt="" />
          <button className="categories_name">{t("Programming")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={Photography} alt="" />
          <button className="categories_name">{t("Photography")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={Videography} alt="" />
          <button className="categories_name">{t("Videography")}</button>
        </div>
        <div className="card_categories">
          <img className="categories_img" src={PersonalDevelopment} alt="" />
          <button className="categories_name">{t("Personal Development")}</button>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
