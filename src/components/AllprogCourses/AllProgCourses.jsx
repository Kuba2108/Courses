import React, { useState } from "react";
import Python from "../../assets/img/Python.png";
import Js from "../../assets/img/Js.png";
import CSS from "../../assets/img/CSS.png";
import CImage from "../../assets/img/CImage.png";
import Develoment from "../../assets/img/Develoment.png";
import Science from "../../assets/img/Science.png";
import Java from "../../assets/img/Java.png";
import SQL from "../../assets/img/SQL.png";
import Kotlin from "../../assets/img/Kotlin.png";
import PHP from "../../assets/img/PHP.png";
import CPlus from "../../assets/img/C-Plus.png";
import ObjC from "../../assets/img/Objective-C.png";
import Ruby from "../../assets/img/Ruby.png";
import Lua from "../../assets/img/Lua.png";
import Dart from "../../assets/img/Dart.png";
import TypeScript from "../../assets/img/Type-Script.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllProgCourses = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Python", image: Python },
    { name: "JavaScript", image: Js },
    { name: "CSS", image: CSS },
    { name: "C#", image: CImage },
    { name: "Web Development", image: Develoment },
    { name: "Data Science", image: Science },
    { name: "Java", image: Java },
    { name: "SQL", image: SQL },
    { name: "Kotlin", image: Kotlin },
    { name: "PHP", image: PHP },
    { name: "C++", image: CPlus },
    { name: "Objective C", image: ObjC },
    { name: "Ruby", image: Ruby },
    { name: "Lua", image: Lua },
    { name: "Dart", image: Dart },
    { name: "TypeScript", image: TypeScript },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="paths">
        <p className="path_home">
          <span
            onClick={() => {
              navigate(`/`);
            }}
            className="path-home"
          >
            {t("Home")}{" "}
          </span>
          <span
            onClick={() => {
              navigate(`/courses`);
            }}
            className="path-home"
          >
            › {t("Programming Courses")} ›
          </span>{" "}
          {t("All Courses")}
        </p>
      </div>
      <h1 className="all_prog_courses_title">{t("All Programming topics")}</h1>
      <div className="search-bar">
        <input
         className="search_prog_input"
          type="text"
          placeholder={t("Search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="topic_cards">
        {filteredCategories.map((category, index) => (
          <div className="card_categories" key={index}>
            <div className="img_hover_div">
            <img
              className="categories_img"
              src={category.image}
              alt={category.name}
              />
              </div>
            <button className="categories_name">{category.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProgCourses;
