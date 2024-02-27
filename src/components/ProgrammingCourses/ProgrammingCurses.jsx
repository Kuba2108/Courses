import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Star from "../../assets/svg/Star.svg"
import UxDesign from "../../assets/img/UxDesign.png"
import WebDeveloper from "../../assets/img/web-developer.png"
import PhoneUx from "../../assets/img/phone-ux.png"
import DesignImg from "../../assets/img/3d-design.png"

const ProgrammingCurses = () => {

  const { t } = useTranslation();

    const navigate = useNavigate()
  return (
    <div className="Prog_courses">
      <div className="paths">
        <p className="path_home">
          <span onClick={() => {
          navigate(`/`)}} className="path-home">{t("Home")} </span>
         › {t("Programming Courses")}
        </p>
      </div>
      <h1 className="prog_title">{t("Programming Courses")}</h1>
      <p className="small_prog_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
      <div className="popular_courses">
        <h1 className="most_popular">{t("Most Popular Development Courses")}</h1>
        <div className="popular_cards">
        <div className="card_trending">
            <img style={{
              height:'180px'
            }} src={UxDesign} alt="" />
            <button className='card_text'>{t("UX Design")}</button>
            <h5>{t("Interpersonal skills - work better with others!")}</h5>
            <p>{t("Tanah Air Team")}</p>
            <div className="trending__stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <p>(2078)</p>
            </div>
            <div className="price_trending_card">
            <del className='del_text'>$640</del>
            <h4 className='price_trending'>$384</h4>
            </div>
        </div>
        <div  className="card_trending">
            <img style={{
                height:'180px'
            }} src={WebDeveloper} alt="" />
            <button className='card_text'>{t("Web Developer")}</button>
            <h5>{t("How to become an Expert Web Developer")}</h5>
            <p>{t("Tanah Air Team")}</p>
            <div className="trending__stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <p>(2078)</p>
            </div>
            <div className="price_trending_card">
            <del className='del_text'>$640</del>
            <h4 className='price_trending'>$735</h4>
            </div>
        </div>
        <div className="card_trending">
            <img style={{
                height:'180px'
            }} src={PhoneUx} alt="" />
            <button className='card_text'>{t("UX Research")}</button>
            <h5>{t("User Experience Design Essentials")}</h5>
            <p>{t("Tanah Air Team")}</p>
            <div className="trending__stars ">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <p>(2078)</p>
            </div>
            <div className="price_trending_card">
            <del className='del_text'>$640</del>
            <h4 className='price_trending'>$826</h4>
            </div>
        </div>
        <div className="card_trending">
            <img style={{
                height:'180px'
            }} src={DesignImg} alt="" />
            <button className='card_text'>{t("3D Design")}</button>
            <h5>{t("Creating 3D Modelling in Blender")}</h5>
            <p>{t("Tanah Air Team")}</p>
            <div className="trending__stars">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <p>(2078)</p>
            </div>
            <div className="price_trending_card">
            <del className='del_text'>$640</del>
            <h4 className='price_trending'>$710</h4>
            </div>
        </div>
            </div>
      </div>
    </div>
  );
};

export default ProgrammingCurses;
