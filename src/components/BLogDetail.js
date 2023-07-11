import React, { useState } from 'react'
import MainBanner from './MainBanner'
import card_img from '../img/blog_image_1.webp'

const BLogDetail = () => {
    const [Name ,SetName] = useState('');
    const [Message ,SetMessage] = useState('');
    const [Comment, setComment] = useState([])

   const submitComment = (event) => {
        setComment([...Comment , {name:Name , message:Message }])
        SetName('');
        SetMessage('');
        event.preventDefault();
    }
    return (
        <div>
            <MainBanner heading='Blog Detail' para='Detail About This Blog' />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h2 className="mb-3">Welcome to Blog Detail</h2>
                            </div>
                            <div className='col-lg-12'>
                                <figure><img src={card_img} width='100%' className='img-fluid rounded' alt='img' /></figure>
                            </div>
                            <section>
                                <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                                <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                                <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                                <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
                                <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                                <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                            </section>
                        </div>
                        <section className="mb-5">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <form className="mb-4" onSubmit={submitComment}>
                                        <input className="form-control mb-4" value={Name} onChange={ e => SetName(e.target.value)} placeholder='Enter Name' type='text' required></input>
                                        <textarea className="form-control mb-4" value={Message} rows="3" onChange={ e => SetMessage(e.target.value)} placeholder="Join the discussion and leave a comment!" required>
                                        </textarea>
                                        <div classNam='form-group text-right'>
                                            <button className='btn btn-md btn-success' type="submit" value="Send" >
                                                Send Comment
                                            </button>
                                        </div>
                                    </form>
                                    {Comment.map(com => (
                                        <div className="d-flex mt-2">
                                            <div className="ms-3">
                                                <div className="fw-bold">{com.name}</div>
                                                {com.message}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card mb-4'> 
                            <div className='card-header'>Search Blog</div>
                            <div className='card-body'>
                                <div className='input-group'>
                                    <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-success" id="button-search" type="button">Search!</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="badge bg-success text-decoration-none badge-md link-light m-2" href="#!">HTML</a>
                                        <a className="badge bg-success text-decoration-none badge-md link-light m-2" href="#!">BOOTSTRAP</a>
                                        <a className="badge bg-success text-decoration-none badge-md link-light m-2" href="#!">JAVA</a>
                                        <a className="badge bg-success text-decoration-none badge-md link-light m-2" href="#!">REACT</a>
                                        <a className="badge bg-success text-decoration-none badge-md link-light m-2" href="#!">NODE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BLogDetail