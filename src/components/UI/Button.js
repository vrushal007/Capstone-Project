import React from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom';

export function Button(props) {
  return (
    <Link to='sign-up'>
      <button className={classes.btn}>{props.children}</button>
    </Link>
  );
}
export default Button;