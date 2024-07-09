import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../components/Hero/Hero';
import TrendingCourses from '../../components/TrendingCourses/TrendingCourses';
import TopCategories from '../../components/TopCategories/TopCategories';
import Counter from '../../components/Counter/Counter';
import BecomeAnMentor from '../../components/BecomeAnMentor/BecomeAnMentor';
import Reviews from '../../components/Reviews/Reviews';
import Trusted from '../../components/Trusted/Trusted';
import LastBlog from '../../components/LastBlog/LastBlog';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800 
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Hero/>
      </div>
      <div data-aos="fade-up">
        <TrendingCourses/>
      </div>
      <div data-aos="fade-up">
        <TopCategories/>
      </div>
      <div data-aos="fade-up">
        <Counter/>
      </div>
      <div data-aos="fade-up">
        <BecomeAnMentor/>
      </div>
      <div data-aos="fade-up">
        <Reviews/>
      </div>
      <div data-aos="fade-up">
        <Trusted/>
      </div>
      <div data-aos="fade-up">
        <LastBlog/>
      </div>
    </div>
  )
}

export default HomePage;
