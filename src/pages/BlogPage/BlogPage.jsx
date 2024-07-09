import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LatestBlog from '../../components/LatestBlog/LatestBlog'

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800
    })
  }, []);
  return (
    <div className='container' data-aos='fade-up'>
    <LatestBlog/>
    </div>
  )
}

export default BlogPage