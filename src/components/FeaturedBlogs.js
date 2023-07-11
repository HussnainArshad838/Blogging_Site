import React, { Component } from 'react'
import Button from './Button'

import image_blog from '../img/blogc_content_image.webp'

class FeaturedBlogs extends Component {
    render(props) {
        return (
            <div className='my-5'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 text-center text-success'>
                            <h2>Featured Blog</h2>
                        </div>
                    </div>
                    <div className='p-5 bg-light'>
                        <div className='row p-3 '>
                            <div className='col-lg-6'>
                                <h2 className='my-4'>{this.props.title}</h2>
                                <p className='my-4'>{this.props.children}</p>
                                <Button title='Read More' link='/blog_detail' />
                            </div>
                            <div className='col-lg-6 mt-sm-5 mt-lg-0 mt-md-0 mt-5'>
                                <div>
                                    <img width='100%' src={image_blog} className='card-top-img' alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedBlogs