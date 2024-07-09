import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgrammingCourses from '../../components/ProgrammingCourses/ProgrammingCurses';
import ProgrammingTopics from '../../components/ProgrammingTopics/ProgrammingTopics';
import AllCourses from '../../components/AllCourses/AllCourses';

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div className='container'>
      <div data-aos="fade-up">
        <ProgrammingCourses />
      </div>
      <div data-aos="fade-up">
        <ProgrammingTopics />
      </div>
      <div data-aos="fade-up">
        <AllCourses />
      </div>
    </div>
  );
}

export default CoursesPage;
