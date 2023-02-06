import React, { useState } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={classes.navbar}>
        <Link to='/' className={classes['navbar-logo']} onClick={closeMobileMenu}>
          EPIC
        </Link>
        <ul className={click ? `${classes['nav-menu']} ${classes.active}` : classes['nav-menu']}>
          <li className={classes['nav-item']}>
            <Link to='/' className={classes['nav-links']} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to='/products' className={classes['nav-links']} onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to='/contact-us' className={classes['nav-links']} onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to='/sign-up' className={classes['nav-links-mobile']} onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  );
}

export default Navbar;
