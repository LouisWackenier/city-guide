import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <Link className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width:'35px' }}/>
      </Link>
    <button 
       className="navbar-toggler" 
       type="button" 
       data-bs-toggle="collapse" 
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent" 
       aria-expanded="false" 
       aria-label="Toggle navigation"
       >
      <span>
         <i className="fas fa-bars" style={{ color: '#fff' }}></i> 
      </span>  
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
         <li className="nav-item active">
          <Link className="nav-link text-white text-uppercase ml-5" aria-current="page" to="/">
            Home&nbsp;<i class="fas fa-home"></i>
          </Link>
        </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/news">news</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">
          contact us
        </Link>
      </li>
    </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
  </div>
</nav>
  );
}

export default Navbar;