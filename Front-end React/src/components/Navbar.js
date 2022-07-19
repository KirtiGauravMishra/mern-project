import React from 'react'
import LogoutHandling from './LogoutHandling'
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Containernav from './Containernav';



import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbarelements';
const Navbar = () => {



  return (
   <div className= "Navbari">
  
   <Nav>
        <Bars />
  
        <NavMenu>
    <NavLink exact className="active_class" to = "/home">
     Home
    </NavLink>
    <NavLink exact className="active_class" to = "/Services">
    Services
    </NavLink>
    <NavLink exact className="active_class" to = "/contact">
    contact
    </NavLink> 
   
    </NavMenu>
  
    <NavBtn>
          <NavBtnLink to='/logout'>Logout</NavBtnLink>
        </NavBtn>

    </Nav>
    
      
    </div>
  )
}

export default Navbar;



