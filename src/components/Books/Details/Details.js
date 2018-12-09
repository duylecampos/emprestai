import React from 'react';
import classes from './Details.module.css';


const details = props => {
    
    return <div className={classes.Details}>
        <div className={classes.about}>
            <div className={classes.cover}>
                <img src={props.book.cover} />
            </div>
            <div className={classes.details}>
                <h3>{props.book.title}</h3>
                <p><span>Autor: </span>{props.book.writer}</p>
                <p><span>Ano: </span>{props.book.year}</p>
            </div>
        </div>
        <div className={classes.abstract}>
            <h3>Resumo</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus orci accumsan, efficitur est eu, feugiat est. Ut sed mollis nulla, sit amet luctus sem. Donec sed convallis dolor, sed egestas ex. Quisque vel rutrum nisl, in viverra nisl. Proin sit amet neque vel ante vestibulum ullamcorper eu at est. Integer ultrices, odio a mollis ornare, sapien justo condimentum odio, quis condimentum augue lectus in urna. Ut vulputate felis id auctor maximus. Nunc luctus urna eu odio ultrices, vel posuere augue condimentum. Nullam nec purus et leo imperdiet ultricies a eget massa."</p>
        </div>
    </div>;
}

export default details;