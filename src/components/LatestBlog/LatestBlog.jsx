import React from 'react'
import Audience from '../../assets/img/Audience.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LatestBlog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

    const dummyData = [1, 2, 3, 4];
  return (
    <div>
      <div className="paths">
      <p className="path_home">
          <span onClick={() => {
          navigate(`/`)}} className="path-home">{t("Home")} </span>
         › {t("Blog")}
        </p>
        <h1 className='latest_title'>{t("Latest Blog")}</h1>
        <div>
      {dummyData.map((item, index) => (
        <div className="latest_card" key={index}>
          <div className="latest_card_img">
            <img src={Audience} alt="" />
          </div>
          <div className="latest_card_text">
            <h2>{t("How to experience powerful education free of charge")}</h2>
            <p className='data_card'>{t("3 May 2021")} <span className='dot'> ● </span> {t("5 min read")} </p>
            <p className='latest_information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor. Sag</p>
            <button>{t("Read More")}</button>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default LatestBlog