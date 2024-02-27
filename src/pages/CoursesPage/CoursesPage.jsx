import React, { useEffect } from 'react'
import ProgrammingCurses from '../../components/ProgrammingCourses/ProgrammingCurses'
import ProgrammingTopics from '../../components/ProgrammingTopics/ProgrammingTopics'
import AllCourses from '../../components/AllCourses/AllCourses'

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
      <ProgrammingCurses/>
      <ProgrammingTopics/>
      <AllCourses/>
    </div>
  )
}

export default CoursesPage