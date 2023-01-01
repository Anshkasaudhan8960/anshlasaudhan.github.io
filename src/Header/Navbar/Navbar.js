import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">Ansh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto m-auto mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Study Materials</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#" >
            Blog
          </a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About Us</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className=" px-2 search" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar