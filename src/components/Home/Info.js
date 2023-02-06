import Button from "../UI/Button";
import React from "react";
import classes from './Info.module.css'

const Info = () => {
    return (
    <div className={classes.info}>
      <p>WORK HARDER, GET STRONGER</p>
      <h1>
        EASY WITH OUR <span>GYM</span>
      </h1>
      <Button>BECOME A MEMBER</Button>
    </div>
    )
};

export default Info;