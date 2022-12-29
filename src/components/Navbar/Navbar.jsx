import React from 'react'
import { NavLink } from 'react-router-dom'
//import './style.css'

const Navbar = () => {
  
  //const categories = ["smartphones", "laptops", "mens-watches", "womens-watches"]
  //const activeStyle = { color: "#000000" };
  const activeStyle = '{fontWeight: "bold",color: "black"}'

  return (
    <ul className='navlink_container'>
        <li>
            <NavLink  className={'navlink'} to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorías
          </NavLink>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/category/smartphones" activeStyle={activeStyle}>Smartphones</NavLink>
              <NavLink className="dropdown-item" to="/category/laptops" activeStyle={activeStyle}>Laptops</NavLink>
              <NavLink className="dropdown-item" to="/category/mens-watches" activeStyle={activeStyle}>Reloj de Hombre</NavLink>
              <NavLink className="dropdown-item" to="/category/womens-watches" activeStyle={activeStyle}>Reloj de Mujer</NavLink>  
          </div>
      </li>
        <li>
            <NavLink  className={'navlink'} to="/card/1">Card</NavLink>
        </li>
        <li>
            <NavLink  className={'navlink'} to="/cart" >Cart</NavLink>
        </li>
    </ul>
  )
}

export default Navbar