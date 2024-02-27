import React from 'react'
import Star from '../../assets/svg/Star.svg'
import { useNavigate } from "react-router-dom";
import Profile from '../../assets/img/avatar.png'
import { useTranslation } from 'react-i18next';


const HowToBecome = () => {
  const { t } = useTranslation()
    const navigate = useNavigate()

  return (
    <div>
        <div className="how_to_become_paths">
        <p onClick={() => {
            navigate(`/`)
          }}
        className='path-home'>{t("Home")} ›</p>
        <p onClick={() => {
            navigate(`/courses`)
          }} 
         className='prog_path'>   {t("Programming Courses")}  ›</p>
        <p className='how_to_become_path'> {t("How to become an Expert Web Developer")}</p>
        </div>
        <div className="main_title_How_become">
            <h1 className='how_become_title'>{t("How to become an Expert Web Developer")}</h1>
        </div>
        <div className="main_small_title_how">
            <div className="stars_how">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <h3>4,7/5</h3>
            <p>{t("(1023 Reviews) 20327 student")}</p>
        </div>
        <div className="profile_information">
            <img src={Profile} alt="" />
            <h3>Pak Arif Satria Kecek ulalala</h3>
        </div>
        <div className="title_how_buttons">
            <button className='add_to_btn'>{t("Add To Wishlist")}+</button>
            <button className='share'>{t("Share")} </button>
        </div>
    </div>
  )
}

export default HowToBecome