import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HowToBecome from '../../components/HowToBecome/HowToBecome';
import LearnCourse from '../../components/LearnCourse/LearnCourse';
import ArifKecek from '../../components/ArifKecek/ArifKecek';

const DetailCoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div className='container'>
      <div data-aos="fade-up">
        <HowToBecome />
      </div>
      <div data-aos="fade-up">
        <LearnCourse />
      </div>
      <div data-aos="fade-up">
        <ArifKecek />
      </div>
    </div>
  );
}

export default DetailCoursesPage;
