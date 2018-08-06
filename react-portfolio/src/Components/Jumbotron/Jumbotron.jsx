import React from "react";
import mountainImage from "../../Images/Mountain.jpeg";
import classes from "./Jumbotron.css";

const Jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron}>
            <img 
            className={classes.Image} 
            src={mountainImage} 
            alt="Mountain Resort" />;
        </div>
    );
}

export default Jumbotron;

