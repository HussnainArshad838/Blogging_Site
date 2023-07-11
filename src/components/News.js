import React, { useState } from 'react';

const News = () => {
    const [Email, setEmail] = useState('');

    const ClearInput = (event) => {
        setEmail('');
        event.preventDefault();
    }
    return (
        <>
            <div className='card mb-4'>
                <div className='card-header '>
                    Subscribe Our Newsletter
                </div>
                <div className='card-body'>
                    <form onSubmit={ClearInput}>
                        <div className='form group'>
                            <div className='input-group'>
                                <input className='form-control' type='email' name='email' placeholder='Enter Your E-mail' value={Email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' />
                                <button className='btn btn-success btn' type='submit'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default News