import React from "react";
import Mentor from "../../assets/img/Mentor.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const BecomeAnMentor = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="mentor_content">
        <div className="img_an_mentor">
          <img src={Mentor} alt="" />
        </div>
        <div className="text_an_mentor">
            <h1>{t("Become an Mentor")}</h1>
            <p className="p_text1">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.")}</p>
            <p className="p_text2">{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.")}</p>
            <button onClick={() => navigate(`/courses/detailCourses`)}>{t("Start Teaching")}</button>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnMentor;
