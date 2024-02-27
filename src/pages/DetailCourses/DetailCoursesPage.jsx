import React, { useEffect } from 'react'
import HowToBecome from '../../components/HowToBecome/HowToBecome'
import LearnCourse from '../../components/LearnCourse/LearnCourse'  
import ArifKecek from '../../components/ArifKecek/ArifKecek'

const DetailCoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
        <HowToBecome/>
        <LearnCourse/>
        <ArifKecek/>
    </div>
  )
}

export default DetailCoursesPage