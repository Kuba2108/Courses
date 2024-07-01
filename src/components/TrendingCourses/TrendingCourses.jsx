import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "../ui/Buttons/Button/Button";
import UxDesign from "../../assets/img/UxDesign.png";
import Star from "../../assets/svg/Star.svg";
import WebDeveloper from "../../assets/img/web-developer.png";
import PhoneUx from "../../assets/img/phone-ux.png";
import DesignImg from "../../assets/img/3d-design.png";
import PublicSpeaking from "../../assets/img/Public-Speaking.png";
import UxPhone from "../../assets/img/Ux-phone.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";

const TrendingCourses = () => {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();
  const { buttons } = useSelector((store) => store.filters);
  const [activeButton, setActiveButton] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedCourses, setSavedCourses] = useState([]);
  const [displayMode, setDisplayMode] = useState('all');

  const handleSetActiveButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleSavedCourse = (index) => {
    const isSaved = savedCourses.includes(index);

    if (isSaved) {
      setSavedCourses(
        savedCourses.filter((savedIndex) => savedIndex !== index)
      );
    } else {
      setSavedCourses([...savedCourses, index]);
    }
  };

  const cardsData = [
    {
      date: "new",
      imgSrc: UxDesign,
      type: "Art & Design",
      buttonText: t("UX Design"),
      title: t("Interpersonal skills - work better with others!"),
      author: t("Tanah Air Team"),
      price: "$384",
    },
    {
      date: "new",
      imgSrc: WebDeveloper,
      type: "Development",
      buttonText: t("Web Developer"),
      title: t("How to become an Expert Web Developer"),
      author: t("Tanah Air Team"),
      price: "$735",
    },
    {
      date: "new",
      imgSrc: PhoneUx,
      type: "Development",
      buttonText: t("UX Research"),
      title: t("User Experience Design Essentials"),
      author: t("Tanah Air Team"),
      price: "$826",
    },
    {
      date: "new",
      imgSrc: DesignImg,
      type: "Art & Design",
      buttonText: t("3D Design"),
      title: t("Creating 3D Modelling in Blender"),
      author: t("Tanah Air Team"),
      price: "$710",
    },
    {
      date: "new",
      imgSrc: PublicSpeaking,
      type: "business",
      buttonText: t("Public Speaking"),
      title: t("Interpersonal skills - work better with others!"),
      author: t("Tanah Air Team"),
      price: "$384",
    },
    {
      date: "old",
      imgSrc: UxDesign,
      type: "Art & Design",
      buttonText: t("UX Design"),
      title: t("How to become an Expert Web Developer"),
      author: t("Tanah Air Team"),
      price: "$758",
    },
    {
      date: "old",
      imgSrc: DesignImg,
      type: "Art & Design",
      buttonText: t("3D Design"),
      title: t("Creating 3D Modelling in Blender"),
      author: t("Tanah Air Team"),
      price: "$973",
    },
    {
      date: "old",

      imgSrc: UxPhone,
      type: "Marketing",
      buttonText: t("UX Design"),
      title: t("Interpersonal skills - work better with others!"),
      author: t("Tanah Air Team"),
      price: "$273",
    },
  ];



  const filteredCards = cardsData.filter((card) => {
    if (activeButton !== "All" && card.type !== activeButton) {
      return false;
    }
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      const cardTitleLower = card.title.toLowerCase();
      const cardAuthorLower = card.author.toLowerCase();
      const cardPriceLower = card.price.toLowerCase();
      const cardDateLower = card.date.toLowerCase();
      if (
        cardTitleLower.includes(searchTermLower) ||
        cardAuthorLower.includes(searchTermLower) ||
        cardPriceLower.includes(searchTermLower) ||
        cardDateLower.includes(searchTermLower)
      ) {
        return false;
      }
    }
    return true;
  });
  
  
  const savedCoursesList = filteredCards.filter((card, index) =>
  savedCourses.includes(index)
  );
  const displayedCourses = displayMode === 'saved' ? savedCoursesList : filteredCards;
  const coursesToDisplay = displayMode === 'saved' ? savedCoursesList : filteredCards;


  return (
    <div>
      <div className="container trending">
        <h1>{t("Trending Courses")}</h1>
        <div className="buttons_filter">
          <Button
            onClick={() => handleSetActiveButton("All")}
            isActive={activeButton === "All"}
          >
            {t("All")}
          </Button>
          <Button
            onClick={() => handleSetActiveButton("business")}
            isActive={activeButton === "business"}
          >
            {t("Business")}
          </Button>
          <Button
            onClick={() => handleSetActiveButton("Art & Design")}
            isActive={activeButton === "Art & Design"}
          >
            {t("Art & Design")}
          </Button>
          <Button
            onClick={() => handleSetActiveButton("Development")}
            isActive={activeButton === "Development"}
          >
            {t("Development")}
          </Button>
          <Button
            onClick={() => handleSetActiveButton("Marketing")}
            isActive={activeButton === "Marketing"}
          >
            {t("Marketing")}
          </Button>
        </div>
        <input
          className="search_card"
          type="text"
          placeholder={t("Search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="count">
          <button onClick={() => setCount(count + 1)} disabled={count === 6 }>
            +
          </button>
          <h2 className="number">{count}</h2>
          <button onClick={() => setCount(count - 1)} disabled={count === 1}>
            -
          </button>
        </div>
        <h2 className="month">{t("Month")}</h2>
        <div className="container trending_cards">
          {coursesToDisplay.map((course, index) => (
            <div className="card_trending" key={index}>
              <img style={{ height: "180px" }} src={course.imgSrc} alt="" />
              <button className="card_text">{course.buttonText}</button>
              <h5>{course.title}</h5>
              <p>{course.author}</p>
              <div className="trending__stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <img key={i} src={Star} alt="" />
                ))}
                <p>(2078)</p>
              </div>
              <div className="card_bottom">
                <div className="price_trending_card">
                  <del className="del_text">$640</del>
                  <h4 className="price_trending">
                    ${parseInt(course.price.slice(1)) * count}
                  </h4>
                  <div className="card_save">
                    {savedCourses.includes(index) ? (
                      <BookmarkIcon onClick={() => toggleSavedCourse(index)} />
                    ) : (
                      <BookmarkBorderIcon
                        onClick={() => toggleSavedCourse(index)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more_btn">
          <button className="saved_courses_title" onClick={() => setDisplayMode('saved')}>{t("Saved Courses")}</button>
          <button className="more__courses" onClick={() => setDisplayMode('all')}>{t("All Courses")}</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
