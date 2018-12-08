import React from 'react';
import classes from './Book.module.css';

const book = props => {
    return  <div className={classes.Book}>
        <div className={classes.details}>
            <h3>{props.title}</h3>
            <p>{props.writer}</p>
        </div>
        <p className={classes.ownerName}>{props.owner}</p>
        <img src={props.cover} />
    </div>;
}

export default book;