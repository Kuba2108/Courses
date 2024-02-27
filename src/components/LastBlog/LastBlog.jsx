import React from "react";
import DesignVideo from "../../assets/img/Design-video.png";
import Trigonometry from "../../assets/img/Trigonometry.png";
import Chemistry from "../../assets/img/Chemistry.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LastBlog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="container">
      <h1 className="main_h1">{t("The Latest Blog")}</h1>
      <div className="last_blog">
        <div className="card_blog">
          <img
            style={{
              height: "200px",
              width: "370px",
            }}
            src={DesignVideo}
            alt=""
          />
          <div className="blog_p">
            <p>{t("3, Mei 2021")}</p>
            <p>{t("3 min read")}</p>
          </div>
          <h2 className="blog_main_big_text">
            {t("10 graphic design trends to get you inspired in 2021")}
          </h2>
          <p className="blog_main_small_text">
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")}
          </p>
          <p
            style={{
              cursor: "pointer",
              width:"90px"
            }}
            onClick={() => {
              navigate(`/blog`);
            }}
            className="read_more"
          >
            {t("Read More")}
          </p>
        </div>
        <div className="card_blog">
          <img
            style={{
              height: "200px",
              width: "370px",
            }}
            src={Trigonometry}
            alt=""
          />
          <div className="blog_p">
            <p>{t("3, Mei 2021")}</p>
            <p>{t("3 min read")}</p>
          </div>
          <h2 className="blog_main_big_text">
            {t("Right Triangle Trigonometry Explained")}
          </h2>
          <p className="blog_main_small_text">
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")}
          </p>
          <p
            style={{
              cursor: "pointer",
              width:"90px"
            }}
            onClick={() => {
              navigate(`/blog`);
            }}
            className="read_more"
          >
            {t("Read More")}
          </p>
        </div>
        <div className="card_blog">
          <img
            style={{
              height: "200px",
              width: "370px",
            }}
            src={Chemistry}
            alt=""
          />
          <div className="blog_p">
            <p>{t("3, Mei 2021")}</p>
            <p>{t("3 min read")}</p>
          </div>
          <h2 className="blog_main_big_text">
           {t("2 Reasons Why You’re Confusing Chemistry")}{" "}
          </h2>
          <p className="blog_main_small_text">
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")}
          </p>
          <p
            style={{
              cursor: "pointer",
              width:"90px"
            }}
            onClick={() => {
              navigate(`/blog`);
            }}
            className="read_more"
          >
            {t("Read More")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;
