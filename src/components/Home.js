import React from 'react'
import FeaturedBlogs from './FeaturedBlogs'
import LatestBllogs from './LatestBllogs'
import MainBanner from './MainBanner'

const Home = () => {
    return (
        <div>
            <MainBanner heading='Daily Blogs!' para='Here All Interesting Blogs' />
            <FeaturedBlogs title='Feature Blog'>
                The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.
            </FeaturedBlogs>
            <LatestBllogs title='Latest' />
        </div>
    )
}

export default Home