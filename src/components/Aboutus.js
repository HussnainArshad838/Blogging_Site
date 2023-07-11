import React from 'react'
import MainBanner from './MainBanner'
import image from '../img/about.jpg'
import News from './News'


const Aboutus = () => {
    return (
        <>
            <MainBanner heading='About us' para='Blog writting website' />
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-12 col-lg-8 col-md-8'>
                        <div>
                            <img className='img-fluid' src={image} alt='img' />
                        </div>
                        <div className='text-dark mt-5'>
                            <h1>Who we are ?</h1>
                            <p className='fs-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            </p>
                            <p className='fs-5'>
                                Silicon Bench And Cornike Begin Construction Of Large-Scale Solar Facilities For Trade
                            </p>
                            <p className='fs-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 mt-2'>
                        <News/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus