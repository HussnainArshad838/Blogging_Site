import React from 'react'
import '../Style.css';
import Button from './Button';
import card_img from '../img/blog_image_1.webp'

const BlogCard = (props) => {
    return (
        <div className='card h-100'>
            <img src={card_img} className='card-top-img' alt='hello' />
            <div className='card-body p-4'>
                <div className='text-center'>
                    <h5>{props.title}</h5>
                    <p>{props.children}</p>
                </div>
            </div>
            <div className='card-footer bg-transparent border-top-0'>
                <div className='text-center'>
                    <Button title='Read more' link='/blog_detail'/>
                </div>
            </div>
        </div>
    )
}

export default BlogCard