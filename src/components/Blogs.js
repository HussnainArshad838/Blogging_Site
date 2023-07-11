import React from 'react'
import BlogCard from './BlogCard'
import MainBanner from './MainBanner'

const Blogs = () => {
  return (
    <div>
        <MainBanner heading='All Blogs' para='List of All Bogs'/>
        <div className='container'>
                <div className='row py-5'>
                    <div className='col-12 text-center text-success'>
                        <h2>All Blogs</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>
                    <div className='col-lg-3 mb-5'>
                        <BlogCard title="Blog Post!">
                            Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe
                        </BlogCard>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Blogs