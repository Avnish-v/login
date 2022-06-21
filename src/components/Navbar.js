import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Dress<b style = {{color:'#5a9078'}}>wel</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Mens">Mens</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Womens">Womens</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Unisex">Unisex</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/kids">kids</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/AddToCart">Cart</Link></li>
            <li><Link className="dropdown-item" to="/WishList">WishList</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Login">login</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <hr style={{backgroundColor :"white"}}></hr>
    </div>
  </div>
  
</nav></>
  )
}

export default Navbar