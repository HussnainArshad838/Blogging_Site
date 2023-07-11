import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = (props) => {

    const homeNavigater  = useNavigate();

    return (

        <div className='btn btn-md btn-outline-success' onClick={()=> homeNavigater(props.link)}>
            {props.title}
        </div>
    )
}

export default Button