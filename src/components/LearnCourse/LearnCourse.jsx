import React, { useState } from "react";
import RickRoll from "../../assets/video/RickRoll.mp4";
import Check from "../../assets/svg/Check.svg";
import PinkCheck from "../../assets/svg/PinkCheck.svg";
import { useTranslation } from "react-i18next";

const LearnCourse = () => {
  const { t } = useTranslation()

  const handleAddToCart = () => {
    setShowModal(true);
  };
  return (
    <div className="main_learn_courses">
      <div className="learn_courses">
        <div className="learn_text">
          <h1 className="learn_courses_big_title">
            {t("What you’ll learn from this course")}
          </h1>
          <p className="learn_courses_small_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu
            in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a
            turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non
            id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
            Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.{" "}
          </p>
          <p className="learn_courses_small_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu
            in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a
            turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non
            id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
            Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.{" "}
          </p>
          <p className="learn_courses_small_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu
            in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a
            turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non
            id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
            Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.{" "}
          </p>
          <h1 className="objectives_main_title">{t("Objectives Features")}</h1>
          <div className="conditions_list">
            <div className="condition first">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Build fully websites and web apps for your startup or business.")}
              </p>
            </div>
            <div className="condition_craft first">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Craft a portfolio of websites to apply for junior developer jobs.")}
              </p>
            </div>
            <div className="condition">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Build fully websites and web apps for your startup or business.")}
              </p>
            </div>
            <div className="condition_craft">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Craft a portfolio of websites to apply for junior developer jobs.")}
              </p>
            </div>
            <div className="condition">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Build fully websites and web apps for your startup or business.")}
              </p>
            </div>
            <div className="condition_craft">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Craft a portfolio of websites to apply for junior developer jobs.")}.
              </p>
            </div>
            <div className="condition">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Build fully websites and web apps for your startup or business.")}
              </p>
            </div>
            <div className="condition_craft">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Craft a portfolio of websites to apply for junior developer jobs.")}
              </p>
            </div>
            <div className="condition">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Build fully websites and web apps for your startup or business.")}
              </p>
            </div>
            <div className="condition_craft">
              <img src={PinkCheck} alt="" />
              <p>
                {t("Craft a portfolio of websites to apply for junior developer jobs.")}
              </p>
            </div>
          </div>
          <div className="requirement">
            <h1 className="requirement_title">{t("Requirement")}</h1>
            <div className="requirement_box">
              <div className="requirement_text">
                <img src={PinkCheck} alt="" />
                <p>
                  {t("No programming experience needed - I'll teach you everything you need to know")}
                </p>
              </div>
              <div className="requirement_text">
                <img src={PinkCheck} alt="" />
                <p>{t("A Mac or PC computer with access to the internet")}</p>
              </div>
              <div className="requirement_text">
                <img src={PinkCheck} alt="" />
                <p>{t("No previous coding experience is needed")}</p>
              </div>
              <div className="requirement_text">
                <img src={PinkCheck} alt="" />
                <p>{t("All tools and software used in this course will be free")}</p>
              </div>
              <div className="requirement_text">
                <img src={PinkCheck} alt="" />
                <p>{t("Any operating system: Mac, PC, Linux")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="video_learn">
          <video controls src={RickRoll} className="video"></video>
          <div className="video_text">
            <h1>$53</h1>
            <del>$124</del>
          </div>
          <div className="bottom_line_learn"></div>
          <div className="video_information">
            <div className="big_information_text">
              <h3>{t("64 Document courses")}</h3>
              <button>50% OFF</button>
            </div>
            <div className="check_marks">
              <div className="modules_mark">
                <div className="check_mark_background">
                  <img src={Check} alt="" />
                </div>
                <h4>{t("24 Modules")}</h4>
              </div>
              <div className="modules_mark">
                <div className="check_mark_background">
                  <img src={Check} alt="" />
                </div>
                <h4>{t("12 exercises")}</h4>
              </div>
              <div className="modules_mark">
                <div className="check_mark_background">
                  <img src={Check} alt="" />
                </div>
                <h4>{t("Full time access")}</h4>
              </div>
              <div className="modules_mark">
                <div className="check_mark_background">
                  <img src={Check} alt="" />
                </div>
                <h4>{t("Certificate")}</h4>
              </div>
              <div className="modules_mark">
                <div className="check_mark_background">
                  <img src={Check} alt="" />
                </div>
                <h4>{t("20 resources")}</h4>
              </div>
            </div>
          </div>
          <div className="video_btn">
            <div className="add_to_cart_btn">
              <button onClick={handleAddToCart}>{t("Add To Cart")}</button>
            </div>
            <div className="buy_now_btn">
              <button>{t("Buy Now")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCourse;
