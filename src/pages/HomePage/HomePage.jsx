import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import TrendingCourses from '../../components/TrendingCourses/TrendingCourses'
import TopCategories from '../../components/TopCategories/TopCategories'
import Counter from '../../components/Counter/Counter'
import BecomeAnMentor from '../../components/BecomeAnMetor/BecomeAnMentor'
import Reviews from '../../components/Reviews/Reviews'
import Trusted from '../../components/Trusted/Trusted'
import LastBlog from '../../components/LastBlog/LastBlog'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero/>
      <TrendingCourses/>
      <TopCategories/>
      <Counter/>
      <BecomeAnMentor/>
      <Reviews/>
      <Trusted/>  
      <LastBlog/>
    </div>
  )
}

export default HomePage