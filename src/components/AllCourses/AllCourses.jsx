import React, { useState } from 'react';
import DropDownRatings from '../ui/DropDowns/DropDownCourses/DropDownRatings';
import { useTranslation } from "react-i18next";
import DropDownDurations from '../ui/DropDowns/DropDownCourses/DropDownDurations';
import DropDownCatalog from '../ui/DropDowns/DropDownCourses/DropDownCatalog';
import DropDownLevel from '../ui/DropDowns/DropDownCourses/DropDownLevel';
import DropDownLanguage from '../ui/DropDowns/DropDownCourses/DropDownLanguage';
import WebDeveloper from '../../assets/img/web-developer.png';
import Star from '../../assets/svg/Star.svg';
import { useNavigate } from "react-router-dom";


const AllCourses = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const [selected, setSelected] = useState("");

    const courses = new Array(12).fill(null);

    return (
        <div>
            <div className="all_courses_main_title">
                <h1>{t("All Courses")}</h1>
                <button>{t("Most Popular")} ›</button>
            </div>

            <div className="all_courses_content">
                <div className="drop_downs">
                    <DropDownRatings selected={selected} setSelected={setSelected} />
                    <DropDownDurations selected={selected} setSelected={setSelected} />
                    <DropDownCatalog selected={selected} setSelected={setSelected} />
                    <DropDownLevel selected={selected} setSelected={setSelected} />
                    <DropDownLanguage selected={selected} setSelected={setSelected} />
                </div>
                <div className="lateral_line"></div>
                <div className="all_courses_card">
                    {courses.map((_, index) => (
                        <div onClick={() => {
                            navigate(`/courses/detailCourses`)
                          }} 
                        className="card_trending" key={index}>
                            <img style={{ height: '180px' }} src={WebDeveloper} alt="" />
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCourses;
