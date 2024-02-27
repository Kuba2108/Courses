import React, { useEffect } from 'react'
import LatestBlog from '../../components/LatestBlog/LatestBlog'

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
    <LatestBlog/>
    </div>
  )
}

export default BlogPage