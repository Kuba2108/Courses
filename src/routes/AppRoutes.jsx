import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../components/Layout/Layout';
import CoursesPage from '../pages/CoursesPage/CoursesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import DetailCoursesPage from '../pages/DetailCourses/DetailCoursesPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import AllCoursesPage from '../pages/AllProgrammingCoursesPage/AllCoursesPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<HomePage/>}/>
          <Route path='/courses' element={<CoursesPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/courses/detailCourses' element={<DetailCoursesPage/>}/>
          <Route path='/courses/allCourses' element={<AllCoursesPage/>  }/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
