import React from "react";
import Python from "../../assets/img/Python.png";
import Js from "../../assets/img/Js.png";
import CSS from "../../assets/img/CSS.png";
import CImage from "../../assets/img/CImage.png";
import { useTranslation } from "react-i18next";
import Develoment from "../../assets/img/Develoment.png";
import Science from "../../assets/img/Science.png";
import Java from "../../assets/img/Java.png";
import SQL from "../../assets/img/SQL.png";
import { useNavigate } from "react-router-dom";

const ProgrammingTopics = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const categories = [
    { name: "Python", image: Python },
    { name: "JavaScript", image: Js },
    { name: "CSS", image: CSS },
    { name: "C#", image: CImage },
    { name: "Web Development", image: Develoment },
    { name: "Data Science", image: Science },
    { name: "Java", image: Java },
    { name: "SQL", image: SQL },
  ];
  
  return (
    <div>
  <div className="main_title">
    <h1>{t("Programming Topics")}</h1>
    <button onClick={() => {
          navigate(`/courses/allCourses`)}}>{t("See All")}</button>
  </div>
  <div className="topic_cards">
    {categories.map((category, index) => (
      <div className="card_categories" key={index}>
        <img className="categories_img" src={category.image} alt={category.name} />
        <button className="categories_name">{category.name}</button>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProgrammingTopics;
