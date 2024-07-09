import React, { useEffect } from "react";
import AOS from 'aos';
import AllProgCourses from "../../components/AllprogCourses/AllProgCourses";

const AllCoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <AllProgCourses/>
    </div>
  );
};

export default AllCoursesPage;
