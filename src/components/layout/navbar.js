import { Fragment } from "react";
import { Route, Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from './navbar.module.css'
const NavBar = () => {
  return (
    <Fragment>
      
        <ul className={classes.navbar}>
          <li className={classes.navbarLeft}>
           <NavLink className={(navData) =>navData.isActive ? classes.active : ''} to='/login' >Login</NavLink>
          </li>
          <li  className={classes.navbarLeft}>
          <NavLink className={(navData) =>navData.isActive ? classes.active : ''} to='/signup' >Create account</NavLink>
          </li>
          
        </ul>
    
      
      
    
    </Fragment>
  );
};

export default NavBar
