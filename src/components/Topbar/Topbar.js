import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './Topbar.module.css';

const topbar = props => {
    return <header className={classes.Topbar}>
        <div className={classes.avatar}>
            <img src="https://www.fakepersongenerator.com/Face/female/female20161024562624786.jpg" alt="Foto do usuário" />
        </div>
        <div className={classes.search}>
            <input type="text" name="search" placeholder="Busque seu livro" />                
        </div>
        <div className={classes.add}>
            <button><FontAwesomeIcon icon={faPlus} /></button>

        </div>
    </header>;
}

export default topbar;