import React from 'react'
import '../App.css'
import {NavLink , Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-success'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>Daily Blogs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className="nav-item"><NavLink to='/' className='nav-link'>Home</NavLink></li>
              <li className="nav-item"><NavLink to='/aboutus' className='nav-link'>About us</NavLink></li>
              <li className="nav-item"><NavLink to='/blogs' className='nav-link'>Blogs</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar