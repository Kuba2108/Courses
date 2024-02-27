import React from "react";
import { useTranslation } from "react-i18next";
import Laptop from "../../assets/img/LaptopHero.png";
import Bell from "../../assets/svg/Bell.svg";
import Heart from "../../assets/svg/Heart.svg";
import Star from "../../assets/svg/Star.svg";
import Verification from "../../assets/svg/Verification.svg";
import SearchInputButton from "../ui/Inputs/SearchInputButton/SearchInputButton";
import Watch from "../../assets/svg/Watch.svg";
import Profile from "../../assets/svg/Profile.svg";
import IconCourses from "../../assets/svg/IconCourses.svg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="background__card__hero">
      <div className="container hero">
        <div className="hero__left">
          <div className="big__text__hero">
            <h1 style={{ color: "#fff" }}>
              {t("Find the Best")} <br /> {t("Courses and")} <br /> {t("Amazing Mentor")}
            </h1>
          </div>
          <p className="p__text__hero">
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit")} <br /> {t("amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus")}
          </p>
          <div className="input__hero">
            <SearchInputButton />
          </div>
        </div>
        <div className="hero__right">
          <img src={Laptop} alt="" />
          <div className="logo__icons_hero">
            <div className="hero_bell">
              <div className="hero_bell_card color_card_hero"></div>
              <img src={Bell} alt="" />
            </div>
            <div className="hero_heart">
              <div className="hero_heart_card color_card_hero"></div>
              <img src={Heart} alt="" />
            </div>
            <div className="hero_verification">
              <div className="hero_verification_card color_card_hero"></div>
              <img src={Verification} alt="" />
            </div>
          </div>
          <div className="review__card__hero">
            <h3>500+</h3>
            <p>{t("Total review")}</p>
            <div className="hero_stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero_bottom_content">
        <div className="hero_watch">
          <img src={Watch} alt="" />
          <h4>{t("Life Time Acces")}</h4>
        </div>
        <div className="hero_profile">
          <img src={Profile} alt="" />
          <h4>{t("Expert Mentor")}</h4>
        </div>
        <div className="iconCourses_hero">
          <img src={IconCourses} alt="" />
          <h4>{t("100K+ Courses")}</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
