import React from 'react';

const MainBanner = (props) => {
  return (
    <>
      <div className='bg-light py-5'>
        <div className='container'>
          <div className='text-center text-success'>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default MainBanner