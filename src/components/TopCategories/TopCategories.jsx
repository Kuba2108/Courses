import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArtDesign from "../../assets/img/ArtDesign.png";
import Business from "../../assets/img/Business.png";
import CopyWriting from "../../assets/img/Copy-writing.png";
import Marketing from "../../assets/img/Marketing.png";
import Programming from "../../assets/img/Programming.png";
import Photography from "../../assets/img/Photography.png";
import Videography from "../../assets/img/Videography.png";
import PersonalDevelopment from "../../assets/img/Personal-Development.png";

const categories = [
  { src: ArtDesign, name: "Art & Design" },
  { src: Business, name: "Business" },
  { src: CopyWriting, name: "Copy Writing" },
  { src: Marketing, name: "Marketing" },
  { src: Programming, name: "Programming", link: "/courses" },
  { src: Photography, name: "Photography" },
  { src: Videography, name: "Videography" },
  { src: PersonalDevelopment, name: "Personal Development" }
];

const TopCategories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="container top_categories">
      <h1 className="top_categories_text">{t("Top Categories")}</h1>
      <div className="top_cards">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card_categories"
            onClick={() => category.link && navigate(category.link)}
          >
            <div className="img_hover_div">
              <img className="categories_img" src={category.src} alt={category.name} />
            </div>
            <button className="categories_name">{t(category.name)}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
