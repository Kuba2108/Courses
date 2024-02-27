import React, { useEffect } from "react";
import AllProgCourses from "../../components/AllprogCourses/AllProgCourses";

const AllCoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
        <AllProgCourses/>
    </div>
  );
};

export default AllCoursesPage;
